/* Edit this array to update projects. All entries are SAMPLE content. */
const PROJECTS=[
 {title:'Learning Resources Drive',cat:'Education',status:'Sample',color:'',text:'Demonstration entry showing how an education project will appear.'},
 {title:'Vocational Skills Workshop',cat:'Skill Acquisition',status:'Sample',color:'o',text:'Demonstration entry showing how a skills project will appear.'},
 {title:'Family Support Outreach',cat:'Humanitarian Support',status:'Sample',color:'',text:'Demonstration entry showing how a humanitarian project will appear.'},
 {title:'Neighbourhood Engagement Day',cat:'Community Outreach',status:'Sample',color:'o',text:'Demonstration entry showing how an outreach project will appear.'}];
const CATS=['All','Community Outreach','Education','Skill Acquisition','Humanitarian Support'];
const grid=document.getElementById('grid'),filters=document.getElementById('filters'),modal=document.getElementById('modal'),body=document.getElementById('modal-body');
function render(cat){grid.innerHTML='';PROJECTS.filter(p=>cat==='All'||p.cat===cat).forEach(p=>{
 const a=document.createElement('button');a.className='card text-left hover:-translate-y-1 transition';
 a.innerHTML=`<div class="ph ${p.color} aspect-[16/10]" data-label="Sample"></div><div class="p-5"><span class="pill">${p.cat} · ${p.status}</span><h3 class="text-xl mt-3">${p.title}</h3><p class="text-sm text-slate-600 mt-2">${p.text}</p><span class="text-[#F07824] font-bold text-sm">View Project</span></div>`;
 a.onclick=()=>{body.innerHTML=`<div class="ph ${p.color} aspect-[16/9]" data-label="Sample"></div><div class="p-6"><span class="pill">${p.cat} · ${p.status}</span><h2 class="text-2xl mt-3">${p.title}</h2><p class="mt-3 text-slate-600">${p.text}</p><p class="mt-3 text-sm text-slate-500">Not an actual KIOF project.</p><button class="btn btn-b mt-5" id="close">Close</button></div>`;
  modal.showModal();document.getElementById('close').onclick=()=>modal.close()};
 grid.append(a)})}
CATS.forEach((c,i)=>{const b=document.createElement('button');b.className='amt !py-2 !px-4';b.textContent=c;b.setAttribute('aria-pressed',i===0);
 b.onclick=()=>{filters.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));render(c)};filters.append(b)});
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
render('All');