/* Replace each item's `src` with a real image path, e.g. 'assets/images/outreach-1.jpg'. Empty src shows a placeholder. */
const ITEMS=[];['Community Outreach','Educational Support','Humanitarian Activities','Events','General Activities'].forEach((cat,c)=>{for(let i=1;i<=3;i++)ITEMS.push({cat,src:'',alt:`${cat} demo photo ${i}`,color:(c+i)%2?'o':''})});
const CATS=['All','Community Outreach','Educational Support','Humanitarian Activities','Events','General Activities'];
const grid=document.getElementById('grid'),filters=document.getElementById('filters'),lb=document.getElementById('lightbox'),body=document.getElementById('lb-body');
const media=(it,cls)=>it.src?`<img src="${it.src}" alt="${it.alt}" class="${cls} object-cover w-full">`:`<div class="ph ${it.color} ${cls}" data-label="${it.cat}" role="img" aria-label="${it.alt}"></div>`;
function render(cat){grid.innerHTML='';ITEMS.filter(i=>cat==='All'||i.cat===cat).forEach(it=>{
 const b=document.createElement('button');b.className='rounded-xl overflow-hidden hover:opacity-90';b.setAttribute('aria-label','Open '+it.alt);b.innerHTML=media(it,'aspect-square');
 b.onclick=()=>{body.innerHTML=media(it,'aspect-[16/10]')+'<div class="p-4 flex justify-between items-center"><span class="text-sm text-slate-600">'+it.alt+'</span><button class="btn btn-b" id="lb-close">Close</button></div>';lb.showModal();document.getElementById('lb-close').onclick=()=>lb.close()};
 grid.append(b)})}
CATS.forEach((c,i)=>{const b=document.createElement('button');b.className='amt !py-2 !px-4';b.textContent=c;b.setAttribute('aria-pressed',i===0);
 b.onclick=()=>{filters.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));render(c)};filters.append(b)});
lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
render('All');