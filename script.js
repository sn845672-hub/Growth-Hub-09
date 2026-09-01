const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('growthForm')?.addEventListener('submit',e=>{e.preventDefault();const note=document.getElementById('formNote');note.textContent='Thanks — your growth request is captured in this demo. Connect the form to your email/CRM to receive submissions.';note.style.color='#9cff35';e.target.reset()});
const sections=[...document.querySelectorAll('main section[id]')];const links=[...document.querySelectorAll('.nav a[href^="#"]')];window.addEventListener('scroll',()=>{let current='home';sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+current))},{passive:true});
