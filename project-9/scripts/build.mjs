import {mkdir,readFile,writeFile,readdir,copyFile} from 'node:fs/promises';
import path from 'node:path';
const assets={};
async function collect(dir){
 for(const entry of await readdir(dir,{withFileTypes:true})){
 const file=path.join(dir,entry.name);if(entry.isDirectory()){await collect(file);continue}
 const ext=path.extname(file),base64=ext==='.png',type={'.png':'image/png','.css':'text/css','.js':'text/javascript','.json':'application/json','.html':'text/html; charset=utf-8'}[ext];
 assets['/'+path.relative('public',file).split(path.sep).join('/')]={type,base64,data:(await readFile(file)).toString(base64?'base64':'utf8')};
 }}
await collect('public');const catalog=JSON.parse(assets['/products.json'].data).products.map(p=>({...p,id:String(p.id)}));
await mkdir('dist/server',{recursive:true});
await writeFile('dist/server/index.js','const assets='+JSON.stringify(assets)+';\nconst catalog='+JSON.stringify(catalog)+';\n'+await readFile('worker.mjs','utf8'));
try{await mkdir('dist/.openai',{recursive:true});await copyFile('.openai/hosting.json','dist/.openai/hosting.json')}catch(e){if(e.code!=='ENOENT')throw e}
