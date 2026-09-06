/* ── PROJECT MODAL ───────────────────────────────────── */

let currentGallery = [];
let currentIndex = 0;


/* ── OPEN PROJECT ───────────────────────────────────── */

function openProject(id) {

  const p = projects[id];

  if (!p) return;


  /* Gallery */
  currentGallery = p.gallery || [];
  currentIndex = 0;
  updateGallery();


  /* Visibility */
  const vis = document.getElementById("modalVisibility");

  if (p.visibility === "public") {

    vis.innerHTML = `<i class="fa fa-globe"></i> PUBLIC REPOSITORY`;
    vis.className = "project-visibility public";

  } else {

    vis.innerHTML = `<i class="fa fa-lock"></i> PRIVATE REPOSITORY`;
    vis.className = "project-visibility private";

  }


  /* Badge */
  document.getElementById("modalBadge").textContent =
    p.badge || "";


  /* Timeline */
  document.getElementById("modalTimeline").textContent =
    p.timeline || "";


  /* Title */
  document.getElementById("modalTitle").textContent =
    p.title || "";


  /* Content */
  document.getElementById("modalOverview").innerHTML =
    p.overview || "";

  document.getElementById("modalProblem").innerHTML =
    p.problem || "";

  document.getElementById("modalSolution").innerHTML =
    p.solution || "";


  /* Contributions */
  const contributions =
    document.getElementById("modalContributions");

  contributions.innerHTML = "";

  (p.contributions || []).forEach(item => {

    contributions.innerHTML += `
      <li>${item}</li>
    `;

  });


  /* Tech stack */
  const stack =
    document.getElementById("modalStack");

  stack.innerHTML = "";

  (p.stack || []).forEach(item => {

    stack.innerHTML += `
      <span class="modal-tag">${item}</span>
    `;

  });


  /* Outcome */
  const highlights =
    document.getElementById("modalHighlights");

  const outcome =
    document.querySelector(".outcome-section");

  highlights.innerHTML = "";

  (p.highlights || []).forEach(item => {

    highlights.innerHTML += `
      <div class="highlight-card">
        <span>${item.label}</span>
        <h2>${item.value}</h2>
      </div>
    `;

  });


  /* Show / hide Outcome */
  outcome.style.display =
    (p.highlights && p.highlights.length)
      ? ""
      : "none";


  /* Links */
  const links =
    document.getElementById("modalLinks");

  links.innerHTML = "";

  (p.links || []).forEach(link => {

    const disabled = !link.url;

    links.innerHTML += `
      <a
        href="${disabled ? "#" : link.url}"
        ${disabled ? "" : 'target="_blank" rel="noopener noreferrer"'}
        class="btn-black ${disabled ? "disabled" : ""}">
        <i class="${link.icon}"></i>
        ${link.label}
      </a>
    `;

  });


  /* Open modal */
  document
    .getElementById("projectModal")
    .classList.add("show");

  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
}


/* ── GALLERY ─────────────────────────────────────────── */

function updateGallery() {

  const img =
    document.getElementById("galleryImage");

  if (!currentGallery.length) {
    img.removeAttribute("src");
    return;
  }

  img.src = currentGallery[currentIndex];


  const dots =
    document.getElementById("galleryDots");

  dots.innerHTML = "";

  currentGallery.forEach((_, index) => {

    dots.innerHTML += `
      <span
        class="${index === currentIndex ? "active" : ""}"
        onclick="goToImage(${index})">
      </span>
    `;

  });
}


function nextImage() {

  if (!currentGallery.length) return;

  currentIndex++;

  if (currentIndex >= currentGallery.length) {
    currentIndex = 0;
  }

  updateGallery();
}


function prevImage() {

  if (!currentGallery.length) return;

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = currentGallery.length - 1;
  }

  updateGallery();
}


function goToImage(index) {

  if (!currentGallery.length) return;

  currentIndex = index;

  updateGallery();
}


/* ── CLOSE MODAL ─────────────────────────────────────── */

function closeProject() {

  document
    .getElementById("projectModal")
    .classList.remove("show");

  document.body.style.overflow = "auto";
  document.body.classList.remove("modal-open");
}