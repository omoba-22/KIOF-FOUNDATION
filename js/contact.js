/* Frontend validation only. To go live, send `data` to a backend or email service where marked below. */
document.getElementById('contact-form').onsubmit=e=>{e.preventDefault();
 const v=id=>document.getElementById(id).value.trim(),set=(id,m)=>{document.getElementById('e-'+id).textContent=m;return !m};
 const ok=[set('cname',v('cname').length<2?'Enter your full name.':''),
  set('cemail',/^\S+@\S+\.\S+$/.test(v('cemail'))?'':'Enter a valid email address.'),
  set('csubject',v('csubject').length<3?'Enter a subject.':''),
  set('cmessage',v('cmessage').length<10?'Write at least 10 characters.':'')].every(Boolean);
 const s=document.getElementById('c-status');
 if(!ok){s.textContent='';return}
 const data={name:v('cname'),email:v('cemail'),subject:v('csubject'),message:v('cmessage')};
 /* INTEGRATION POINT: fetch('YOUR_ENDPOINT',{method:'POST',body:JSON.stringify(data)}) */
 s.textContent='Demo only: your message was checked but not sent.';
};