/* ── TYPEWRITER ─────────────────────────── */
const words = ['UI/UX Designer.','Web Developer.','ML Engineer.','Data Enthusiast.'];
let wi=0, ci=0, deleting=false;
const el = document.getElementById('typed');
function type(){
  const w = words[wi];
  if(!deleting){
    el.textContent = w.slice(0,++ci);
    if(ci===w.length){ deleting=true; setTimeout(type,1800); return; }
  } else {
    el.textContent = w.slice(0,--ci);
    if(ci===0){ deleting=false; wi=(wi+1)%words.length; setTimeout(type,400); return; }
  }
  setTimeout(type, deleting?60:100);
}
type();

/* ── NAVBAR ─────────────────────────────── */
const nav = document.getElementById('navbar');
const ham = document.getElementById('ham');
const navRight = document.getElementById('navRight');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',scrollY>60);
  document.getElementById('btt').classList.toggle('show',scrollY>400);
  // active link
  document.querySelectorAll('section[id]').forEach(s=>{
    const a = document.querySelector(`.nav-links a[href="#${s.id}"]`);
    if(!a) return;
    const r = s.getBoundingClientRect();
    a.classList.toggle('active', r.top<=80 && r.bottom>=80);
  });
});
ham.addEventListener('click',()=>{
  ham.classList.toggle('open');
  navRight.classList.toggle('open');
});
function closeNav(){ ham.classList.remove('open'); navRight.classList.remove('open'); }

/* ── FADE IN ────────────────────────────── */
const obs = new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.1});
document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));

/* ── SKILL BARS ─────────────────────────── */
// const sObs = new IntersectionObserver(es=>{
//   es.forEach(e=>{
//     if(e.isIntersecting){
//       e.target.querySelectorAll('.skill-fill').forEach(b=>{ b.style.width=b.dataset.w+'%'; });
//       sObs.unobserve(e.target);
//     }
//   });
// },{threshold:0.3});
// const aboutSec=document.getElementById('about');
// if(aboutSec) sObs.observe(aboutSec);

/* ── PORTFOLIO FILTER ───────────────────── */
function filterP(cat,btn){
  document.querySelectorAll('.fbtn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.pcard').forEach(c=>{
    c.style.display=(cat==='all'||c.dataset.cat===cat)?'':'none';
  });
}

/* ── CONTACT FORM ───────────────────────── */
function handleSend(event){

      const btn = event.currentTarget;

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Validasi 
      if(!name || !email || !message){
          alert("Please fill in all fields.");
          return;
      }

      btn.innerHTML = '<i class="fa fa-check"></i> Opening Email...';
      btn.style.background = 'linear-gradient(135deg,#16a34a,#15803d)';

      const subject = encodeURIComponent("Portfolio Contact");
      const body = encodeURIComponent(
  `Name: ${name}
  Email: ${email}
  Message:
  ${message}`
      );
      
      setTimeout(() => {
          window.location.href =
              `mailto:sausanberliana@gmail.com?subject=${subject}&body=${body}`;

          btn.innerHTML = '<i class="fa fa-paper-plane"></i> Send Message';
          btn.style.background = '';
      }, 500);
  }

/* ── SMOOTH NAV CLICK ───────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }
  });
});

/* ── SHOW ALL PROJECTS ───────────────────── */
let expanded = false;
function toggleProjects(){

    expanded = !expanded;

    document.querySelectorAll(".hidden-project").forEach(card=>{
        card.style.display = expanded ? "block" : "none";
    });

    const btn = document.getElementById("viewMoreBtn");

    btn.innerHTML = expanded
        ? 'Show Less <i class="fa fa-chevron-up"></i>'
        : 'View All 8 Projects <i class="fa fa-chevron-down"></i>';
}