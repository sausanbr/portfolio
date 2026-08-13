/* ── OPEN MODAL ───────────────────── */
let currentGallery = [];
let currentIndex = 0;

function openProject(id) {
  const p = projects[id];
  currentGallery = p.gallery;
  currentIndex = 0;
  updateGallery();

  document.getElementById("modalBadge").textContent = p.badge;

  const vis = document.getElementById("modalVisibility");
  if (p.visibility === "public") {
    vis.innerHTML = `<i class="fa fa-globe"></i> PUBLIC REPOSITORY`;
    vis.className = "project-visibility public";
  } else {
    vis.innerHTML = `<i class="fa fa-lock"></i> PRIVATE REPOSITORY`;
    vis.className = "project-visibility private";
  }

  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalOverview").innerHTML = p.overview;
  document.getElementById("modalProblem").innerHTML = p.problem;
  document.getElementById("modalSolution").innerHTML = p.solution;

  const contributions = document.getElementById("modalContributions");
  contributions.innerHTML = "";
  p.contributions.forEach(item => {
    contributions.innerHTML += `<li>${item}</li>`;
  });

  const stack = document.getElementById("modalStack");
  stack.innerHTML = "";
  p.stack.forEach(item => {
    stack.innerHTML += `<span class="modal-tag">${item}</span>`;
  });

  const highlights = document.getElementById("modalHighlights");
  highlights.innerHTML = "";
  p.highlights.forEach(item => {
    highlights.innerHTML += `
      <div class="highlight-card">
        <span>${item.label}</span>
        <h2>${item.value}</h2>
      </div>`;
  });

    const links = document.getElementById("modalLinks");
    links.innerHTML = "";

    p.links.forEach(link => {
        const disabled = !link.url;

        links.innerHTML += `
            <a
                href="${disabled ? "#" : link.url}"
                ${disabled ? "" : 'target="_blank"'}
                class="btn-black ${disabled ? "disabled" : ""}">
                <i class="${link.icon}"></i> ${link.label}
            </a>
        `;
    });

  document.getElementById("projectModal").classList.add("show");
  document.body.style.overflow = "hidden";
}

function updateGallery() {
  const img = document.getElementById("galleryImage");

  // Fade transition
  img.classList.add("switching");
  setTimeout(() => {
    img.src = currentGallery[currentIndex];
    img.classList.remove("switching");
  }, 200);

  // Dots
  const dots = document.getElementById("galleryDots");
  dots.innerHTML = "";
  currentGallery.forEach((_, index) => {
    dots.innerHTML += `
      <span
        class="${index === currentIndex ? 'active' : ''}"
        onclick="goToImage(${index})">
      </span>`;
  });
}

function closeProject(){
  document.getElementById("projectModal").classList.remove("show");
  document.body.style.overflow="auto";
}

function updateGallery(){
    document.getElementById("galleryImage").src =
        currentGallery[currentIndex];
    const dots=document.getElementById("galleryDots");
    dots.innerHTML="";
    currentGallery.forEach((img,index)=>{
        dots.innerHTML+=`
            <span
                class="${index===currentIndex?'active':''}"
                onclick="goToImage(${index})">
            </span>
        `;
    });
}

function nextImage(){
    currentIndex++;
    if(currentIndex>=currentGallery.length)
        currentIndex=0;
    updateGallery();
}

function prevImage(){
    currentIndex--;
    if(currentIndex<0)
        currentIndex=currentGallery.length-1;
    updateGallery();
}

function goToImage(index){
    currentIndex=index;
    updateGallery();
}