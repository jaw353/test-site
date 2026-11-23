// A local, deterministic preview for a deployment that has no OpenAI secret yet.
export function preview({catalog,picks,history,goal,question,routine,ar,web}){
 const say=(en,arabic)=>ar?arabic:en;
 const heading=say('Catalog preview · Live AI is disconnected.','معاينة من الكتالوج · الذكاء الاصطناعي غير متصل.');
 if(web)return {text:heading+'\n'+say('Current web search is unavailable in catalog preview.','البحث المباشر غير متاح في معاينة الكتالوج.')};
 const names=picks.length?picks:catalog.filter(p=>question.toLowerCase().includes(p.name.toLowerCase()));
 return {text:[heading,...names.map(p=>p.brand+' · '+p.name+'\n'+p.description),names.length?'':say('Select a product to view its catalog entry.','اختر منتجًا لعرض تفاصيله.')].filter(Boolean).join('\n\n')};
}
