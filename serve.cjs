const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.png':'image/png', '.webp':'image/webp' };
http.createServer((req,res)=>{
  let urlPath = decodeURIComponent((req.url||'/').split('?')[0]);
  if(urlPath==='/'||urlPath.endsWith('/')) urlPath += 'index.html';
  const file = path.resolve(root, '.' + urlPath);
  if(!file.startsWith(root)){res.writeHead(403);res.end('Forbidden');return;}
  fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);res.end('Not found');return;}res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(data);});
}).listen(8080,'127.0.0.1',()=>console.log('Afterlight running at http://localhost:8080'));
