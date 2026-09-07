let currentGallery = [];
let currentIndex = 0;

function openProject(id) {

  const p = projects[id];

  if (!p) return;


  /* Gallery */
  currentGallery = p.gallery || [];
  currentIndex = 0;

  if (currentGallery.length) {
    const firstImage = new Image();

    firstImage.onload = () => {
      updateGallery();
    };

    firstImage.src = currentGallery[0];
  } else {
    updateGallery();
  }


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

function preloadImage(src) {
  if (!src) return;

  const img = new Image();
  img.src = src;
}


function updateGallery() {

  const img =
    document.getElementById("galleryImage");

  if (!currentGallery.length) {
    img.removeAttribute("src");
    return;
  }

  const currentSrc = currentGallery[currentIndex];

  /* Show current image */
  img.src = currentSrc;


  /* Preload next + previous images */
  const nextIndex =
    (currentIndex + 1) % currentGallery.length;

  const prevIndex =
    (currentIndex - 1 + currentGallery.length) %
    currentGallery.length;

  preloadImage(currentGallery[nextIndex]);
  preloadImage(currentGallery[prevIndex]);


  /* Gallery dots */
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

  currentIndex =
    (currentIndex + 1) % currentGallery.length;

  updateGallery();
}


function prevImage() {

  if (!currentGallery.length) return;

  currentIndex =
    (currentIndex - 1 + currentGallery.length) %
    currentGallery.length;

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