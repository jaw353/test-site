const $ = id => document.getElementById(id);
const catalog = (await fetch('./products.json').then(r => r.json())).products.map(p=>({...p,id:String(p.id)}));
const endpoint = 'https://square-dust-458e.jaw353.workers.dev/';
const words = {
 atelier:['Routine Atelier','استوديو العناية'],title:['Build your routine.','صمّم روتينك.'],intro:['Choose your beauty products, then shape a routine around the way you use them.','اختر منتجات العناية ببشرتك وصمّم روتينًا يناسب احتياجاتك.'],
 shelf:['The product shelf','رف المنتجات'],selection:['Your selection','منتجاتك المختارة'],goal:['Routine preferences (optional)','تفضيلات الروتين (اختياري)'],hint:['e.g. Dry skin, two steps before bed','مثال: بشرة جافة، خطوتان قبل النوم'],generate:['Generate Routine','إنشاء الروتين'],chat:['Routine conversation','محادثة الروتين'],ask:['Ask about your routine','اسأل عن روتينك'],web:['Search current brand guidance and include sources','ابحث عن أحدث إرشادات العلامة التجارية وأدرج المصادر'],footer:['Independent student project','مشروع طلابي مستقل'],
 empty:['Select a product from the shelf to get started.','اختر منتجًا من الرف للبدء.'],all:['All categories','جميع الفئات'],Cleanser:['Cleanser','غسول'],Moisturizer:['Moisturizer','مرطب'],Serum:['Serum','مصل'],search:['Search by name or keyword','ابحث بالاسم أو الكلمة'],category:['Filter by category','تصفية حسب الفئة'],matches:['products shown','منتجات معروضة'],clear:['Clear all','مسح الكل'],remove:['Remove','إزالة'],details:['Product details','تفاصيل المنتج'],source:['Official product page','صفحة المنتج الرسمية'],send:['Send','إرسال'],placeholder:['Which step comes first?','ما الخطوة الأولى؟'],welcome:['Your routine and follow-up answers will appear here.','سيظهر روتينك وإجابات المتابعة هنا.'],you:['You','أنت'],assistant:['Routine Atelier','استوديو العناية'],build:['Build a routine with','صمّم روتينًا باستخدام'],wait:['Preparing your answer…','جارٍ إعداد الإجابة…'],noresults:['No matches. Try another keyword or category.','لا توجد نتائج. جرّب كلمة أو فئة مختلفة.'],failed:['Couldn’t complete the request. Try again.','تعذّر إكمال الطلب. حاول مجددًا.'],key:['The live assistant needs an OpenAI key configured on the Worker. Your selection is saved.','يتطلب المساعد إعداد مفتاح OpenAI في الخادم. تم حفظ اختياراتك.'],storage:['Browser storage is unavailable. Selections last for this visit.','التخزين غير متاح. ستبقى الاختيارات لهذه الزيارة فقط.']
};
Object.assign(words,{"cleanser": ["Cleanser", "غسول"], "moisturizer": ["Moisturizer", "مرطب"], "skincare": ["Skincare", "عناية بالبشرة"], "haircare": ["Haircare", "عناية بالشعر"], "makeup": ["Makeup", "مكياج"], "hair color": ["Hair Color", "صبغة شعر"], "hair styling": ["Hair Styling", "تصفيف الشعر"], "men's grooming": ["Men'S Grooming", "عناية للرجال"], "suncare": ["Suncare", "وقاية من الشمس"], "fragrance": ["Fragrance", "عطور"]});
const read = (key, fallback) => {try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}};
let ar=read('atelier.ar',false)===true, category='',busy=false;
const saved=read('atelier.picks',[]);
const chosen=new Set(catalog.filter(p=>Array.isArray(saved)&&saved.includes(p.id)).map(p=>p.id));
const history=[];
const t=k=>words[k][ar?1:0];
function persist(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{$('status').textContent=t('storage')}}
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt)e.textContent=txt;return e}
function link(url,title){const a=el('a','',title);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a}
function toggle(id){if(chosen.has(id))chosen.delete(id);else chosen.add(id);sync()}
function sync(){persist('atelier.picks',[...chosen]);renderPicked();for(const b of document.querySelectorAll('.choose')){const on=chosen.has(b.dataset.id);b.setAttribute('aria-pressed',String(on));b.closest('.card').classList.toggle('selected',on);b.querySelector('.mark').textContent=on?'✓':'+'}}
function renderPicked(){
 const list=$('picked');list.replaceChildren();
 for(const p of catalog.filter(p=>chosen.has(p.id))){const row=el('div','chip'),name=el('bdi','',p.name),x=el('button','','×');x.setAttribute('aria-label',t('remove')+' '+p.name);x.onclick=()=>{toggle(p.id);($('picked').querySelector('button')||document.querySelector('.choose'))?.focus()};row.append(name,x);list.append(row)}
 if(!chosen.size)list.append(el('p','empty',t('empty')));
 $('clear').hidden=!chosen.size;$('generate').disabled=busy||!chosen.size;$('send').disabled=busy;
}
function renderGrid(){
 const q=$('search').value.trim().toLocaleLowerCase();
 const items=catalog.filter(p=>(!category||p.category===category)&&[p.name,p.brand,p.tags,p.description,p.descriptionAr,t(p.category)].join(' ').toLocaleLowerCase().includes(q));
 $('count').textContent=items.length+' / '+catalog.length+' · '+t('matches');const grid=$('grid');grid.replaceChildren();
 for(const p of items){const on=chosen.has(p.id),card=el('article','card'+(on?' selected':'')),b=el('button','choose');b.dataset.id=p.id;b.setAttribute('aria-pressed',String(on));b.onclick=()=>toggle(p.id);
 const photo=el('span','photo'),img=el('img');img.src=p.image;img.loading='lazy';img.alt='';photo.append(img);
 const mark=el('span','mark',on?'✓':'+');mark.setAttribute('aria-hidden','true');b.append(photo,mark,el('span','brand',p.brand+' · '+t(p.category)),el('bdi','productname',p.name));
 const d=el('details','details');d.append(el('summary','',t('details')),el('p','',ar&&p.descriptionAr?p.descriptionAr:p.description));card.append(b,d);grid.append(card)}
 if(!items.length)grid.append(el('p','empty',t('noresults')));
}
function render(){
 document.documentElement.lang=ar?'ar':'en';document.documentElement.dir=ar?'rtl':'ltr';
 for(const n of document.querySelectorAll('[data-t]'))n.textContent=t(n.dataset.t);
 for(const id of ['generate','clear','send','welcome'])$(id).textContent=t(id);
 $('lang').textContent=ar?'English':'العربية';$('lang').lang=ar?'en':'ar';$('search').placeholder=t('search');$('search').setAttribute('aria-label',t('search'));$('goal').placeholder=t('hint');$('question').placeholder=t('placeholder');
 $('category').setAttribute('aria-label',t('category'));$('category').replaceChildren(...['',...new Set(catalog.map(p=>p.category))].map(k=>new Option(t(k||'all'),k)));$('category').value=category;
 renderGrid();renderPicked();renderHistory()
}
function renderHistory(){const box=$('messages');box.replaceChildren();$('welcome').hidden=!!history.length;
 for(const m of history){const b=el('article','bubble '+m.role),p=el('p');p.dir='auto';let start=0;
 for(const c of m.citations||[]){if(c.start<start||c.end>m.content.length)continue;p.append(m.content.slice(start,c.start));const a=link(c.url,m.content.slice(c.start,c.end)||c.title);a.style.display='inline';p.append(a);start=c.end}
 p.append(m.content.slice(start));b.append(el('strong','',t(m.role==='user'?'you':'assistant')),p);
 for(const c of m.sources||[])b.append(link(c.url,c.title));box.append(b)}
}
async function request(isRoutine){
 if(busy||(isRoutine&&!chosen.size))return;
 const picks=catalog.filter(p=>chosen.has(p.id)),question=$('question').value.trim(),goal=$('goal').value.trim();
 if(!isRoutine&&!question)return;
 const content=isRoutine?t('build')+' '+picks.map(p=>p.name).join(', ')+(goal?' — '+goal:''):question;
 const useWeb=$('web').checked;const message={role:'user',content};history.push(message);busy=true;renderHistory();renderPicked();$('status').textContent=t('wait');$('chat').scrollIntoView({block:'start'});
 try{const res=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({mode:isRoutine?'routine':'chat',products:picks.map(({id,name,brand,category,description})=>({id,name,brand,category,description})),goal,lang:ar?'ar':'en',web:useWeb,messages:[...history.slice(-10,-1).map(({role,content})=>({role,content:content.slice(0,2000)})),{role:'user',content:JSON.stringify({task:isRoutine?'Create an ordered personalized routine using only selected products':'Answer the follow-up using prior conversation and current selected products',language:ar?'Arabic':'English',preferences:goal,selected:picks.map(({name,brand,category,description})=>({name,brand,category,description})),question:content}).slice(0,18000)}]})});
 let data=await res.json();if(!res.ok)throw Error(data.error||data.code||'failed');const answer=data.reply||data.text;if(typeof answer!=='string'||!answer.trim())throw Error('Empty AI response');history.push({role:'assistant',content:answer,citations:data.citations,sources:data.sources});if(!isRoutine&&$('question').value.trim()===question)$('question').value='';$('status').textContent='';
 }catch(e){history.pop();$('status').textContent=t('failed')+' '+e.message}
 finally{busy=false;renderHistory();renderPicked()}
}
$('clear').onclick=()=>{chosen.clear();sync()};$('search').oninput=renderGrid;$('category').onchange=e=>{category=e.target.value;renderGrid()};$('lang').onclick=()=>{ar=!ar;persist('atelier.ar',ar);render()};$('generate').onclick=()=>request(true);$('ask').onsubmit=e=>{e.preventDefault();request(false)};
for(const id of ['2','3']){const img=el('img');img.src=catalog.find(p=>p.id===id).image;img.alt='';$('stillProducts').append(img)}
render();
