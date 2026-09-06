/* ═══════════════════════════════════════════════════════
   CERTIFICATES
   To add a certificate: drop the image in assets/img/certificates/
   and add one object to the list below. Nothing else to change.
   ═══════════════════════════════════════════════════════ */

const certificates = [
  {
    name: "Associate Data Scientist",
    issuer: "LSP Sertifa Teknologi Informasi Indonesia (BNSP)",
    year: "2026",
    image: "assets/img/certificates/bnsp-associate-data-scientist.jpg",
    url: ""
  },
  {
    name: "TOEFL EPT",
    issuer: "Service English Unit",
    year: "2026",
    image: "assets/img/certificates/seu-toefl.jpg",
    url: ""
  },
  {
    name: "Alibaba Cloud Certified Associate (ACA) — Cloud Computing",
    issuer: "Alibaba Cloud",
    year: "2024",
    image: "assets/img/certificates/alibaba-cloud-computing.jpg",
    url: ""
  },
  {
    name: "Database Programming with SQL",
    issuer: "Oracle Academy",
    year: "2024",
    image: "assets/img/certificates/oracle-database-programming-sql.jpg",
    url: ""
  },
  {
    name: "Database Design",
    issuer: "Oracle Academy",
    year: "2023",
    image: "assets/img/certificates/oracle-database-design.jpg",
    url: ""
  }
];

/* ── RENDER CERTIFICATE LIST ──────────────────────────── */
(function renderCertificates(){
  const grid = document.getElementById("certGrid");
  if (!grid) return;

  grid.innerHTML = certificates.map((c, i) => `
    <button
      class="cert-card reveal"
      data-index="${i}"
      type="button"
      aria-label="View ${c.name} certificate"
    >
      <span class="cert-icon">
        <i class="fa fa-award"></i>
      </span>

      <span class="cert-info">
        <span class="cert-name">${c.name}</span>

        <span class="cert-meta">
          <span class="cert-issuer">${c.issuer}</span>
          <span class="cert-dot">·</span>
          <span class="cert-year">${c.year}</span>
        </span>
      </span>

      <span class="cert-view">
        View certificate
        <i class="fa fa-arrow-up-right-from-square"></i>
      </span>
    </button>
  `).join("");
})();


/* ── CERTIFICATE MODAL ────────────────────────────────── */
(function certificateModal(){

  const modal    = document.getElementById("certModal");
  const backdrop = document.getElementById("certModalBackdrop");
  const image    = document.getElementById("certModalImage");
  const title    = document.getElementById("certModalTitle");
  const meta     = document.getElementById("certModalMeta");
  const grid     = document.getElementById("certGrid");

  const closeBtn = document.getElementById("certModalClose");
  const prevBtn  = document.getElementById("certModalPrev");
  const nextBtn  = document.getElementById("certModalNext");

  if (
    !modal ||
    !backdrop ||
    !image ||
    !title ||
    !meta ||
    !grid
  ) return;

  let currentIndex = 0;


  /* ── SHOW CERTIFICATE ───────────────────────────────── */

  function showCertificate(index){

    currentIndex =
      (index + certificates.length) % certificates.length;

    const cert = certificates[currentIndex];

    image.src = cert.image;
    image.alt = `${cert.name} — ${cert.issuer}`;

    title.textContent = cert.name;
    meta.textContent = `${cert.issuer} · ${cert.year}`;
  }


  /* ── OPEN ───────────────────────────────────────────── */

  function openModal(index){

    showCertificate(index);

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
    document.body.classList.add('modal-open');
  }


  /* ── CLOSE ──────────────────────────────────────────── */

  function closeModal(){

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    setTimeout(() => {
      if (!modal.classList.contains("is-open")){
        image.removeAttribute("src");
      }
    }, 350);
    document.body.classList.remove('modal-open');
  }


  /* ── CLICK CERTIFICATE ─────────────────────────────── */

  grid.addEventListener("click", function(e){

    const card = e.target.closest(".cert-card");

    if (!card) return;

    e.preventDefault();

    const index = parseInt(card.dataset.index, 10);

    if (!Number.isNaN(index)){
      openModal(index);
    }
  });


  /* ── CLOSE BUTTON ──────────────────────────────────── */

  closeBtn?.addEventListener("click", function(e){
    e.preventDefault();
    closeModal();
  });


  /* ── BACKDROP ───────────────────────────────────────── */

  backdrop.addEventListener("click", function(){
    closeModal();
  });


  /* ── PREVIOUS ───────────────────────────────────────── */

  prevBtn?.addEventListener("click", function(e){

    e.preventDefault();
    e.stopPropagation();

    showCertificate(currentIndex - 1);
  });


  /* ── NEXT ───────────────────────────────────────────── */

  nextBtn?.addEventListener("click", function(e){

    e.preventDefault();
    e.stopPropagation();

    showCertificate(currentIndex + 1);
  });


  /* ── KEYBOARD ───────────────────────────────────────── */

  document.addEventListener("keydown", function(e){

    if (!modal.classList.contains("is-open")) return;

    if (e.key === "Escape"){
      closeModal();
    }

    if (e.key === "ArrowLeft"){
      showCertificate(currentIndex - 1);
    }

    if (e.key === "ArrowRight"){
      showCertificate(currentIndex + 1);
    }
  });

})();