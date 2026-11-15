/* Donation UI only. NO payments are processed here. */
const state={amount:10000,freq:'once',method:'paystack'};
const $=s=>document.querySelector(s);
function sel(group,btn,key,val){document.querySelectorAll(group).forEach(b=>b.setAttribute('aria-pressed',b===btn));state[key]=val}
document.querySelectorAll('.amt[data-v]').forEach(b=>b.onclick=()=>{sel('.amt[data-v]',b,'amount',+b.dataset.v);$('#custom').value=''});
$('#custom').oninput=e=>{document.querySelectorAll('.amt[data-v]').forEach(b=>b.setAttribute('aria-pressed',false));state.amount=+e.target.value};
document.querySelectorAll('[data-freq]').forEach(b=>b.onclick=()=>sel('[data-freq]',b,'freq',b.dataset.freq));
document.querySelectorAll('.pay').forEach(b=>b.onclick=()=>sel('.pay',b,'method',b.dataset.m));
/* Integration points: replace with calls to YOUR backend/serverless endpoint.
   Paystack: server calls /transaction/initialize, redirect donor to authorization_url, verify via webhook or /transaction/verify (https://paystack.com/docs/).
   PayPal: server creates order, then captures and verifies (https://developer.paypal.com/docs/checkout/). Confirm Nigeria eligibility first.
   Never put secret keys in this file. */
const gateways={paystack:null,paypal:null};
$('#donate-form').onsubmit=async e=>{e.preventDefault();
 const n=$('#name').value.trim(),m=$('#email').value.trim(),box=$('#msg-box');let errs=[];
 if(n.length<2)errs.push('Enter your full name.');
 if(!/^\S+@\S+\.\S+$/.test(m))errs.push('Enter a valid email address.');
 if(!(state.amount>=500))errs.push('Choose an amount, or enter a custom amount of ₦500 or more.');
 box.hidden=false;box.className=errs.length?'err':'p-4 rounded-lg bg-[#FFF4E9] text-[#12365A]';
 if(errs.length){box.innerHTML=errs.join('<br>');return}
 if(!gateways[state.method]){box.textContent='Demo notice: '+(state.method==='paystack'?'Paystack':'PayPal')+' is not connected yet. No payment was taken and nothing was saved.';return}
 await gateways[state.method](state,{name:n,email:m});
};