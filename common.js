const {createClient}=supabase,sb=createClient(CFG.url,CFG.key),$=i=>document.getElementById(i);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const toast=m=>{$("t").innerHTML='<div class="toast">'+esc(m)+'</div>';setTimeout(()=>$("t").innerHTML="",3200)};
async function rpc(n,a){const{data,error}=await sb.rpc(n,a);if(error)throw error;return data}
const EX=[["Chairman",15000],["Vice Chairman",15000],["Treasurer",10000],["Project Coordinator",10000],["Alumni Coordinator",10000]],SC=["SCOME","SCORP","SCORA","SCOPE","SCOSA","SCOPI","SCOPH"];
const POS=[];EX.forEach(([n,f])=>POS.push({k:n,n,f,seats:1,g:"Executive"}));SC.forEach(s=>{POS.push({k:s+"|C",n:s+" Coordinator",f:0,seats:1,g:"Subcommittee"});POS.push({k:s+"|A",n:s+" Assistant",f:0,seats:2,g:"Subcommittee"})});
const P=k=>POS.find(p=>p.k===k)||{n:k,seats:1},money=n=>n?n.toLocaleString()+" TSh":"Free";
const avatar=c=>c.photo?`<img src="${c.photo}" alt="">`:`<div class="ph">${esc((c.name||"?")[0])}</div>`;
const getSettings=async()=>(await sb.from("settings").select("*").single()).data||{};
const nav=(items,v)=>$("nav").innerHTML=items.map(([h,t])=>`<a href="#${h}" class="${v===h?"on":""}">${t}</a>`).join("");
