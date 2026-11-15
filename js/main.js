/* Shared header/footer, mobile menu, scroll effects. Edit NAV or CONTACT once; all pages update. */
const NAV=[['index.html','Home'],['about.html','About Us'],['services.html','Services'],['projects.html','Projects'],['gallery.html','Gallery'],['contact.html','Contact']];
const CONTACT={email:'[email placeholder]',phone:'[phone placeholder]',address:'[address placeholder]'};
const page=location.pathname.split('/').pop()||'index.html';
const logo=`<a href="index.html" class="flex items-center gap-2" aria-label="KIOF home"><span class="grid place-items-center w-10 h-10 rounded-lg bg-[#12365A]"><i data-lucide="sprout" class="text-[#F07824]"></i></span><span class="leading-none"><b class="font-[Fraunces] text-xl text-[#12365A]">KIOF</b><small class="block text-[10px] text-slate-500">Kingdom Impact Outreach Foundation</small></span></a>`;
const links=NAV.map(([h,t])=>`<a class="nav-link" href="${h}" ${h===page?'aria-current="page"':''}>${t}</a>`).join('');
document.getElementById('site-header').innerHTML=`<div class="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">${logo}
<nav class="hidden lg:flex items-center gap-6" aria-label="Main">${links}<a href="donate.html" class="btn btn-o">Donate Now</a></nav>
<button id="burger" class="lg:hidden p-3" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><i data-lucide="menu"></i></button></div>
<nav id="menu" class="lg:hidden px-5 bg-white" aria-label="Mobile"><div class="flex flex-col gap-1 pb-5">${NAV.map(([h,t])=>`<a class="nav-link py-3" href="${h}">${t}</a>`).join('')}<a href="donate.html" class="btn btn-o justify-center mt-2">Donate Now</a></div></nav>`;
document.getElementById('site-footer').innerHTML=`<div class="bg-[#12365A] text-slate-200"><div class="max-w-6xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-4">
<div class="md:col-span-2"><b class="font-[Fraunces] text-2xl text-white">KIOF</b><p class="mt-3 max-w-sm text-sm">Kingdom Impact Outreach Foundation: humanitarian outreach, education, skill development and community support. <em>[Official description to be supplied by the foundation.]</em></p>
<form class="mt-5 flex gap-2 max-w-sm" onsubmit="event.preventDefault();this.nextElementSibling.textContent='Demo only: nothing was sent.'"><label class="sr-only" for="nl">Email</label><input id="nl" type="email" required placeholder="Email address" class="field text-slate-900"><button class="btn btn-o">Join</button></form><small class="text-slate-400">Newsletter is a demo and does not send.</small></div>
<div><h3 class="text-white text-lg mb-3">Explore</h3><ul class="space-y-2 text-sm">${NAV.map(([h,t])=>`<li><a class="hover:text-white" href="${h}">${t}</a></li>`).join('')}<li><a class="hover:text-white" href="donate.html">Donate</a></li></ul></div>
<div><h3 class="text-white text-lg mb-3">Contact</h3><ul class="space-y-2 text-sm"><li>${CONTACT.email}</li><li>${CONTACT.phone}</li><li>${CONTACT.address}</li><li>Social links: [placeholders]</li></ul></div></div>
<p class="text-center text-xs text-slate-400 pb-8">© <span id="yr"></span> Kingdom Impact Outreach Foundation. Demo website: all sample content must be replaced or verified.</p></div>
<button id="top" class="fixed bottom-5 right-5 btn btn-o !p-3 hidden" aria-label="Back to top"><i data-lucide="arrow-up"></i></button>`;
document.getElementById('yr').textContent=new Date().getFullYear();
const burger=document.getElementById('burger'),menu=document.getElementById('menu');
burger.onclick=()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)};
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const topBtn=document.getElementById('top');topBtn.onclick=()=>scrollTo({top:0});
addEventListener('scroll',()=>{document.getElementById('site-header').classList.toggle('scrolled',scrollY>10);topBtn.classList.toggle('hidden',scrollY<600)},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
if(window.lucide)lucide.createIcons();