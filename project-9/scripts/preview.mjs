import http from 'node:http';
import worker from '../dist/server/index.js';
http.createServer(async(req,res)=>{
 try{const origin='http://'+req.headers.host;
 const chunks=[];for await(const c of req)chunks.push(c);
 const reply=await worker.fetch(new Request(new URL(req.url,origin),{method:req.method,headers:req.headers,body:chunks.length?Buffer.concat(chunks):undefined}),process.env);
 res.writeHead(reply.status,Object.fromEntries(reply.headers));res.end(Buffer.from(await reply.arrayBuffer()))}catch{res.writeHead(500);res.end()}
}).listen(Number(process.argv.includes('--port') ? process.argv[process.argv.indexOf('--port')+1] : process.env.PORT)||5173,'0.0.0.0');
