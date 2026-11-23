import {test} from 'node:test';
import assert from 'node:assert/strict';
import worker from '../dist/server/index.js';
const base='https://atelier.example',env={OPENAI_API_KEY:'test-fixture'};
const data={mode:'routine',lang:'en',products:[{id:'2'}],goal:'two steps',web:false,messages:[{role:'user',content:'Build my routine'}]};
const call=(d,e=env)=>worker.fetch(new Request(base+'/api/chat',{method:'POST',body:JSON.stringify(d)}),e);
test('all 35 starter products have the required data',async()=>{
 const {products}=await(await worker.fetch(new Request(base+'/products.json'),{})).json();
 assert.equal(products.length,35);assert.equal(new Set(products.map(p=>p.category)).size,10);
 for(const p of products)assert.ok(p.image&&p.description&&p.name&&p.brand)
});
test('missing secret and invalid selection are distinct errors',async()=>{assert.equal((await call(data,{})).status,503);assert.equal((await call({...data,products:[]})).status,400);assert.equal((await call({...data,products:[{id:'fake'}]})).status,400)});
test('generation sends authoritative product data, preferences and only server-side credentials',async t=>{
 t.mock.method(globalThis,'fetch',async(url,init)=>{assert.equal(url,'https://api.openai.com/v1/responses');assert.equal(init.headers.Authorization,'Bearer test-fixture');const body=JSON.parse(init.body),context=JSON.parse(body.input[0].content);assert.equal(context.selected.length,1);assert.equal(context.selected[0].name,'Hydrating Facial Cleanser');assert.equal(context.preferences,'two steps');return Response.json({output:[{type:'message',content:[{type:'output_text',text:'Use your selected cleanser.'}]}]})});
 const result=await(await call(data)).json();assert.equal(result.text,'Use your selected cleanser.');assert.ok(!JSON.stringify(result).includes(env.OPENAI_API_KEY))
});
test('web follow-up preserves prior turns and returns clickable citation data',async t=>{
 const messages=[...data.messages,{role:'assistant',content:'Use your selected cleanser.'},{role:'user',content:'What does the brand say about that one?'}];
 const url='https://www.cerave.com/skincare/cleansers/hydrating-facial-cleanser';
 t.mock.method(globalThis,'fetch',async(_,init)=>{const body=JSON.parse(init.body);assert.deepEqual(body.input.slice(1),messages);assert.equal(body.tool_choice,'required');assert.equal(body.tools[0].type,'web_search');return Response.json({output:[{type:'message',content:[{type:'output_text',text:'See CeraVe',annotations:[{type:'url_citation',url,title:'Official guidance',start_index:4,end_index:10}]}]}]})});
 const result=await(await call({...data,mode:'chat',web:true,messages})).json();assert.equal(result.citations[0].url,url);assert.equal(result.sources[0].title,'Official guidance')
});
test('web mode never passes off an uncited response as a researched answer',async t=>{t.mock.method(globalThis,'fetch',async()=>Response.json({output:[{type:'message',content:[{type:'output_text',text:'Uncited'}]}]}));assert.equal((await call({...data,web:true})).status,502)});
