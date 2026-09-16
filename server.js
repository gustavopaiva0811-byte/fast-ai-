const express=require('express');
const path=require('path');
const fs=require('fs');
require('dotenv').config();
const app=express();
app.use(express.json({limit:'2mb'}));
app.use(express.static(path.join(__dirname,'../public')));
const KEY=process.env.OPENAI_API_KEY;
const allowed=new Set(['gpt-5.6-luna','gpt-5.6-terra','gpt-5.6-sol']);
app.post('/api/chat',async(req,res)=>{
 try{
  if(!KEY)return res.status(503).json({error:'OPENAI_API_KEY não configurada.'});
  let {messages=[],model='gpt-5.6-luna'}=req.body;
  model=allowed.has(model)?model:'gpt-5.6-luna';
  messages=messages.slice(-24).map(m=>({role:m.role==='assistant'?'assistant':'user',content:String(m.text||'').slice(0,12000)}));
  const response=await fetch('https://api.openai.com/v1/responses',{
   method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+KEY},
   body:JSON.stringify({model,input:[{role:'system',content:[{type:'input_text',text:'Você é a FAST AI, uma assistente clara, útil e segura. Responda em português quando o usuário escrever em português.'}]},...messages.map(m=>({role:m.role,content:[{type:m.role==='user'?'input_text':'output_text',text:m.content}]}))]})
  });
  const data=await response.json();
  if(!response.ok)return res.status(response.status).json({error:data.error?.message||'Erro da API'});
  res.json({text:data.output_text||'Sem resposta.'});
 }catch(e){res.status(500).json({error:'Erro interno.'})}
});
app.listen(process.env.PORT||3000,()=>console.log('FAST AI: http://localhost:'+(process.env.PORT||3000)));
