/* ═══════════════════════════════════════════════════════
   INTERACTION LAYER
   ═══════════════════════════════════════════════════════ */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── THEME TOGGLE ─────────────────────────────────────── */
(function theme(){
  const btn  = document.getElementById("themeBtn");
  const root = document.documentElement;
  if (!btn) return;

  const sync = () => {
    const dark = root.dataset.theme === "dark";
    btn.innerHTML = `<i class="fa fa-${dark ? "sun" : "moon"}"></i>`;
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#0A0B0E" : "#FAFAFB");
  };

  btn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    sync();
  });
  sync();
})();

/* ── NAV ──────────────────────────────────────────────── */
(function nav(){
  const shell = document.querySelector(".nav-shell");
  const ham   = document.getElementById("ham");
  const links = document.getElementById("navLinks");
  const btt   = document.getElementById("btt");
  const sections = [...document.querySelectorAll("section[id]")];

  ham.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    ham.classList.toggle("open", open);
    ham.setAttribute("aria-expanded", String(open));
  });

  links.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      ham.classList.remove("open");
      ham.setAttribute("aria-expanded", "false");
    }
  });

  let ticking = false;
  function onScroll(){
    const y = window.scrollY;
    shell.classList.toggle("shrunk", y > 40);
    btt.classList.toggle("show", y > 500);

    let current = "";
    for (const s of sections) {
      if (s.getBoundingClientRect().top <= 130) current = s.id;
    }
    document.querySelectorAll(".nav-links a").forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
    });
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  btt.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      }
    });
  });
})();

/* ── SCROLL PROGRESS BAR ──────────────────────────────── */
(function progress(){
  const bar = document.getElementById("progress");
  if (!bar || reduceMotion) return;

  let queued = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty("--p", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
    queued = false;
  };
  window.addEventListener("scroll", () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

/* ── SCROLL REVEAL ────────────────────────────────────── */
(function reveal(){
  const items = document.querySelectorAll(".reveal");
  if (reduceMotion) return items.forEach(el => el.classList.add("visible"));

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  items.forEach(el => io.observe(el));
})();

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('.page-canvas');
  if (!canvas) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Kirim nilai scroll ke CSS. 
    // Diatur ke nilai positif agar CSS bisa mengalikannya secara presisi
    canvas.style.setProperty('--scroll-y', `${scrollY}px`);

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  // Jalankan sekali saat pertama kali dimuat
  updateParallax();
});
/* ── SUBTLE CARD SHEEN ────────────────────────────────── */
(function sheen(){
  if (reduceMotion || window.matchMedia("(hover: none)").matches) return;

  document.addEventListener("pointermove", e => {
    const card = e.target.closest(".glass, .nav");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width)  * 100}%`);
    card.style.setProperty("--my", `${((e.clientY - r.top)  / r.height) * 100}%`);
  }, { passive: true });
})();

/* ── TECH LOGOS: degrade quietly if the CDN is blocked ────── */
document.querySelectorAll(".chip img").forEach(img => {
  img.addEventListener("error", () => img.remove());
});

/* ── MAGNETIC BUTTONS ─────────────────────────────────── */
(function magnetic(){
  if (reduceMotion || window.matchMedia("(hover: none)").matches) return;

  document.querySelectorAll(".magnet").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) * 0.18;
      const y = (e.clientY - r.top  - r.height / 2) * 0.28;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
})();

/* ── EXPERIENCE: SHOW ORGANIZATION + COMMITTEE ────────── */
(function experienceToggle(){
  const btn   = document.getElementById("tlToggle");
  const text  = document.getElementById("tlToggleText");
  const panel = document.getElementById("tlExtra");
  if (!btn || !panel) return;

  btn.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    panel.setAttribute("aria-hidden", String(!open));
    btn.setAttribute("aria-expanded", String(open));
    text.textContent = open
      ? "Hide organizational & committee experience"
      : "Show organizational & committee experience";

    if (open) {
      panel.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
    }
  });
})();

/* ── PROJECT FILTER + SHOW ALL ────────────────────────── */
let activeCategory = "all";
let expanded = false;

function updateProjects(){
  document.querySelectorAll(".pcard").forEach(card => {
    const inCategory = activeCategory === "all" || card.dataset.cat === activeCategory;
    const collapsed  = activeCategory === "all" && card.classList.contains("hidden-project") && !expanded;
    card.style.display = inCategory && !collapsed ? "" : "none";
  });

  const more = document.querySelector(".portfolio-more");
  if (more) more.classList.toggle("hidden", activeCategory !== "all");

  const btn = document.getElementById("viewMoreBtn");
  if (btn) {
    btn.innerHTML = expanded
      ? 'Show fewer <i class="fa fa-chevron-up"></i>'
      : 'View all projects <i class="fa fa-chevron-down"></i>';
  }
}

function filterP(category, btn){
  activeCategory = category;
  if (category !== "all") expanded = false;

  btn.closest(".segmented").querySelectorAll(".seg").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  updateProjects();
}

function toggleProjects(){
  if (activeCategory !== "all") return;
  expanded = !expanded;
  updateProjects();
}

updateProjects();

/* ── CONTACT FORM ─────────────────────────────────────── */
function handleSend(btn){
  const name    = document.getElementById("name").value.trim();
  const email   = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    const original = btn.textContent;
    btn.textContent = "Fill in every field";
    setTimeout(() => { btn.textContent = original; }, 2000);
    return;
  }

  btn.textContent = "Opening your email app…";

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  setTimeout(() => {
    window.location.href = `mailto:sausanberliana@gmail.com?subject=${subject}&body=${body}`;
    btn.textContent = "Send message";
  }, 600);
}

/* ── MODAL: ROLE + PERIOD ─────────────────────────────
   Read straight off the card, so projects.js and modal.js
   stay untouched. Fill data-role / data-period in the HTML. */
document.addEventListener("click", e => {
  const card = e.target.closest(".pcard");
  const box  = document.getElementById("modalMeta");
  if (!card || !box) return;

  const rows = [
    ["My role", card.dataset.role],
    ["Timeline", card.dataset.period],
    ["Type", card.dataset.type]
  ].filter(([, v]) => v);

  box.innerHTML = rows
    .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
    .join("");
}, true);

/* ── MODAL: CLOSE ON BACKDROP / ESC ───────────────────── */
(function modalExtras(){
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  modal.addEventListener("click", e => { if (e.target === modal) closeProject(); });
  document.addEventListener("keydown", e => {
    if (!modal.classList.contains("show")) return;
    if (e.key === "Escape")     closeProject();
    if (e.key === "ArrowLeft")  prevImage();
    if (e.key === "ArrowRight") nextImage();
  });
})();


/* ── HERO: serif typewriter ────────────────────────────
   Edit ROLES to change what cycles through.            */

(function heroTypewriter(){
  const el = document.getElementById("typed");
  if (!el) return;

  const ROLES = [
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "Data Scientist"
  ];

  const HOLD   = 2200;   // pause once a word is fully typed
  const TYPE   = 78;     // ms per character while typing
  const ERASE  = 38;     // ms per character while deleting
  const GAP    = 420;    // pause before the next word starts

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = ROLES[0];
    return;
  }

  let word = 0, chars = 0, erasing = false;

  (function tick(){
    const current = ROLES[word];
    el.textContent = erasing ? current.slice(0, --chars) : current.slice(0, ++chars);

    if (!erasing && chars === current.length) {
      erasing = true;
      return setTimeout(tick, HOLD);
    }
    if (erasing && chars === 0) {
      erasing = false;
      word = (word + 1) % ROLES.length;
      return setTimeout(tick, GAP);
    }
    setTimeout(tick, erasing ? ERASE : TYPE);
  })();
})();

/* ── HERO: magnetic CTA ───────────────────────────────── */
(function magneticCta(){
  const btn = document.querySelector(".hero-cta");
  if (!btn) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return;

  btn.addEventListener("pointermove", e => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.2;
    const y = (e.clientY - r.top  - r.height / 2) * 0.32;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
  btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
})();

/* ── EXPERIENCE FILTER ───────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {

  const filterButtons = document.querySelectorAll(".exp-filter-btn");
  const categories = document.querySelectorAll(".exp-category");

  if (!filterButtons.length || !categories.length) return;

  function showCategory(filter) {

    /* active button */
    filterButtons.forEach(btn => {
      const isActive = btn.dataset.filter === filter;

      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });


    /* hide everything first */
    categories.forEach(category => {
      category.classList.remove("active");
    });


    /* OVERVIEW = EDUCATION + WORK */
    if (filter === "overview") {

      categories.forEach(category => {

        const type = category.dataset.category;

        if (type === "education" || type === "work") {
          category.classList.add("active");
        }

      });

      return;
    }


    /* specific category */
    const selected = document.querySelector(
      `.exp-category[data-category="${filter}"]`
    );

    if (selected) {
      selected.classList.add("active");
    }

  }


  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      const filter = button.dataset.filter;

      showCategory(filter);

    });

  });


  /* default */
  showCategory("overview");

});

const tabs = document.querySelectorAll('.xp-tab');
const panel = document.querySelector('.xp-panel');
const items = document.querySelectorAll('.xp-item');
 
tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    if(tab.classList.contains('is-active')) return;
 
    panel.classList.add('is-swapping');
 
    setTimeout(()=>{
      tabs.forEach(t=>{
        t.classList.remove('is-active');
        t.setAttribute('aria-selected','false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected','true');
 
      const target = tab.dataset.tab;
      items.forEach(item=>{
        item.hidden = item.dataset.tab !== target;
      });
 
      panel.classList.remove('is-swapping');
    }, 160);
  });
});