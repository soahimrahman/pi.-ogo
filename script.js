/* Pi Lab — premium case study interactions (Concept Boards) */

// Data describing each concept and supporting images for the presentation.  
// Each object defines: id (two‑digit index), a title, subtitle, image (3×2 aspect), optional square image (1×1),  
// badges (which display small tags on cards), whether it should be highlighted (adds a “Recommended” tag and  
// prioritises it in the recommendation section) and a description. Feel free to fine‑tune the copy here.  
const data = {
  concepts: [
    {
      id: "01",
      title: "Concept 01",
      subtitle: "Curved P & L loop monogram",
      img: "assets/concept-01.png",
      square: "assets/concept-01-square.jpeg",
      badges: ["Soft curves", "Premium gradient", "Modern"],
      description:
        "A smooth, continuous loop forms an abstract combination of P and L with a flowing gradient. The design feels friendly and modern while retaining technological precision.",
      info: [
        "Combined P and L create a continuous loop symbolising unity and partnership",
        "Smooth curves and clean lines give a friendly yet professional feel",
        "Geometric construction with controlled radii ensures precision and scalability",
        "Electric blue gradient conveys energy, innovation and forward motion",
        "Works well as a standalone icon for apps, social profiles and signage"
      ]
    },
    {
      id: "02",
      title: "Concept 02",
      subtitle: "Spiraling L & P interplay",
      img: "assets/concept-02.png",
      square: "assets/concept-02-square.jpeg",
      badges: ["Dynamic", "Forward motion", "Expressive"],
      description:
        "A bolder interlocking of P and L using sharp transitions and dynamic angles to create a sense of progress and motion. The gradient accentuates the directional flow.",
      info: [
        "Interlocking forms of P and L communicate collaboration and progress",
        "Sharp transitions and dynamic angles imply motion and forward momentum",
        "Balanced negative space keeps the mark legible at small sizes",
        "Gradient accentuates directional flow and adds visual depth",
        "Ideal for technology brands that value innovation and expressive design"
      ]
    },
    {
      id: "03",
      title: "Concept 03",
      subtitle: "Three‑blade prismatic monogram",
      img: "assets/concept-03.png",
      square: "assets/concept-03-square.jpeg",
      badges: ["Creative", "Prismatic", "High contrast"],
      description:
        "Three tapered blades merge to form a memorable symbol representing innovation, expansion and forward momentum. Ideal for stand‑out hero moments.",
      info: [
        "Three tapered blades converge to form a memorable, prismatic symbol",
        "Represents innovation, expansion and forward momentum",
        "High contrast shapes ensure excellent legibility on dark and light backgrounds",
        "Geometric symmetry creates a distinctive futuristic silhouette",
        "Works as a striking hero graphic for digital products and marketing"
      ]
    },
    {
      id: "04",
      title: "Concept 04",
      subtitle: "Ribbon infinity loop",
      img: "assets/concept-04.png",
      square: "assets/concept-04-square.jpeg",
      badges: ["Geometric", "Symmetric", "Balanced"],
      description:
        "A balanced, ribbon‑like loop forms an infinity shape combining P and L. The consistent thickness and clean negative space create a strong, iconic silhouette.",
      info: [
        "Ribbon-like loop combines the letters P and L into an infinity symbol",
        "Balanced width and clean negative space create a strong iconic silhouette",
        "Geometric symmetry suggests harmony, stability and continuous improvement",
        "Suitable for a range of scales from app icons to signage",
        "Symbolises endless innovation and enduring partnerships"
      ]
    },
    {
      id: "05",
      title: "Concept 05",
      subtitle: "Fluid ribbon geometry",
      img: "assets/concept-05.png",
      square: "assets/concept-05-square.jpeg",
      badges: ["Recommended", "Distinct", "Elegant motion"],
      highlight: true,
      description:
        "An elegant ribbon flows gracefully to unite the P and L in an innovative form. The subtle gradient and meticulously balanced curves give it a premium, distinctive presence. This design scales excellently from small icons to large displays.",
      info: [
        "Graceful ribbon elegantly unites P and L into a single gesture",
        "Subtle gradient adds depth and a premium digital feel",
        "Meticulously balanced curves deliver a distinctive and ownable form",
        "Scales seamlessly from tiny app icons to large displays",
        "Captures innovation and precision while remaining timeless"
      ]
    },
    {
      id: "06",
      title: "Concept 06",
      subtitle: "Bold segmented monogram",
      img: "assets/concept-06.png",
      square: "assets/concept-06-square.jpeg",
      badges: ["Bold", "Modular", "Strong"],
      description:
        "A bold, segmented construction uses geometric blocks to form the letters. The robust structure and clean modules ensure clarity in small sizes and versatility in varied contexts.",
      info: [
        "Robust modular blocks build the letters P and L into a powerful mark",
        "Segmented construction ensures clarity at small sizes",
        "Strong geometry conveys strength, stability and reliability",
        "Versatile design adapts to monochrome and gradient applications",
        "Ideal for tech firms seeking a bold yet minimal identity"
      ]
    },
    {
      id: "07",
      title: "Concept 07",
      subtitle: "Split parallel forms",
      img: "assets/concept-07.png",
      square: "assets/concept-07-square.jpeg",
      badges: ["Advanced", "Sophisticated", "Multi‑layered"],
      description:
        "Interweaving shapes create a sophisticated monogram with parallel forms. This direction has a technical feel and layered depth, giving it a unique, sophisticated edge.",
      info: [
        "Interweaving shapes create parallel forms for a sophisticated monogram",
        "Layered depth gives the mark a technical, architectural feel",
        "Precise geometry and modular spacing evoke engineering and order",
        "Advanced composition sets the design apart from conventional monograms",
        "Suited to companies that embrace complexity and cutting-edge technology"
      ]
    }
  ],
  // Mockups define the images shown in the mockups section.  
  // They reference concept boards (3×2), the all‑in‑one collage and dedicated mockup renders.
  // Mockup definitions for the application. Only seven items are kept to comply with the
  // requirement that the mockup section contains exactly 7 images. A balanced mix of
  // different use cases (app icon, print and digital) has been selected.
  mockups: [
    { label: "App Icon", img: "assets/concept-05-square.jpeg", span: "span-4", ratio: "ratio-1x1" },
    { label: "Business Card", img: "assets/concept-04.png", span: "span-4", ratio: "ratio-3x2" },
    { label: "Website Layout", img: "assets/mockup-a.png", span: "span-4", ratio: "ratio-3x2" },
    { label: "Mobile App Screen", img: "assets/mockup-b.png", span: "span-4", ratio: "ratio-3x2" },
    { label: "Branded Merchandise", img: "assets/mockup-c.png", span: "span-4", ratio: "ratio-3x2" },
    { label: "Product Packaging", img: "assets/mockup-f.png", span: "span-4", ratio: "ratio-1x1" },
    { label: "Poster & Booth", img: "assets/mockup-g.png", span: "span-6", ratio: "ratio-3x2" }
  ]
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function renderConcepts(){
  const wrap = $("#conceptList");
  wrap.innerHTML = data.concepts.map((c) => {
    // Only output the concept image for each direction. The label is kept in the alt
    // attribute for accessibility. Additional descriptive copy and controls have been
    // removed to adhere to the requirement that the concepts section only displays
    // the logo concepts themselves without extra UI or text.
    const imgWebp = c.img.replace(/\.(png|jpe?g)$/i, '.webp');
    return `
      <article class="concept reveal" data-delay="80">
        <div class="concept__media">
          <picture>
            <source srcset="${imgWebp}" type="image/webp" />
            <img src="${c.img}" alt="${c.title}" loading="lazy" data-preview />
          </picture>
        </div>
      </article>
    `;
  }).join("");
}

// Render the concept navigation bar. This creates a pill‑style button for each concept that scrolls
// smoothly to its corresponding card on click. The active item is highlighted via IntersectionObserver.
function renderConceptNav(){
  const nav = document.querySelector('.concept-nav');
  if(!nav) return;
  nav.innerHTML = data.concepts.map((c,i) => {
    return `<button class="cnavBtn" type="button" data-idx="${i}" aria-label="Jump to ${c.title}">${c.id}</button>`;
  }).join("");
  // scroll handler
  nav.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      const target = document.querySelectorAll('.concept')[idx];
      if(target){
        // account for sticky nav height (~72px) plus some margin
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
  // observer to highlight active nav item
  const conceptEls = document.querySelectorAll('.concept');
  const buttons = nav.querySelectorAll('button');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const idx = Array.from(conceptEls).indexOf(entry.target);
      if(idx < 0) return;
      if(entry.isIntersecting){
        buttons.forEach(b => b.classList.remove('active'));
        buttons[idx].classList.add('active');
      }
    });
  }, { threshold: 0.6 });
  conceptEls.forEach(el => io.observe(el));
}

// Lightbox implementation for all images. Any element with a [data-preview] attribute will trigger the
// lightbox on click. The gallery rebuilds after dynamic content is injected so mockups and concepts are
// automatically included. Next/previous arrow buttons and keyboard arrows cycle through all
// registered images, and captions come from the alt or data-caption attributes.
function setupLightbox(){
  const lb = document.getElementById('lightbox');
  if(!lb) return;
  const lbImg = lb.querySelector('.lightbox__img');
  const lbCaption = lb.querySelector('.lightbox__caption');
  const btnPrev = lb.querySelector('.lightbox__prev');
  const btnNext = lb.querySelector('.lightbox__next');
  const btnClose = lb.querySelector('.lightbox__close');
  let gallery = [];
  // Track the element that triggered the lightbox so focus can be restored on close
  let lastFocus = null;
  let current = 0;

  // Build the gallery from all elements that carry data-preview. A picture element's source
  // (webp) is preferred if available; otherwise use the img src. Captions default to alt text.
  function buildGallery(){
    const items = Array.from(document.querySelectorAll('[data-preview]'));
    gallery = items.map(el => {
      // determine preview source: check for a preceding <source> element in the picture tag
      let previewSrc;
      const pic = el.closest('picture');
      if(pic){
        const source = pic.querySelector('source');
        if(source){
          previewSrc = source.getAttribute('srcset');
        }
      }
      if(!previewSrc){
        previewSrc = el.getAttribute('src');
      }
      const caption = el.getAttribute('data-caption') || el.getAttribute('alt') || '';
      return { el, src: previewSrc, caption };
    });
    // assign indices for quick lookup
    gallery.forEach((item, i) => {
      item.el.dataset.lbIndex = i;
    });
  }

  function show(idx){
    if(!gallery.length) return;
    current = (idx + gallery.length) % gallery.length;
    const item = gallery[current];
    lbImg.src = item.src;
    lbImg.alt = item.caption;
    lbCaption.textContent = item.caption;
  }

  function open(idx){
    show(idx);
    // Remember the previously focused element before opening the modal
    lastFocus = document.activeElement;
    lb.removeAttribute('hidden');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Make the modal focusable and move initial focus to the close button
    lb.setAttribute('tabindex', '-1');
    requestAnimationFrame(() => {
      lb.classList.add('show');
      btnClose.focus();
    });
  }

  function close(){
    lb.classList.remove('show');
    setTimeout(() => {
      lb.setAttribute('hidden', 'true');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      // Restore focus to the element that opened the lightbox
      if(lastFocus){ lastFocus.focus(); }
    }, 200);
  }
  function next(){ show(current + 1); }
  function prev(){ show(current - 1); }
  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);
  btnClose.addEventListener('click', close);
  lb.addEventListener('click', (e) => {
    if(e.target === lb) close();
  });
  document.addEventListener('keydown', (e) => {
    if(lb.hasAttribute('hidden')) return;
    if(e.key === 'Escape'){ close(); }
    if(e.key === 'ArrowRight'){ next(); }
    if(e.key === 'ArrowLeft'){ prev(); }
    if(e.key === 'Tab'){
      // Trap focus within the lightbox: cycle through close, prev and next buttons
      const focusables = [btnClose, btnPrev, btnNext];
      const index = focusables.indexOf(document.activeElement);
      if(index === -1){
        e.preventDefault();
        focusables[0].focus();
        return;
      }
      e.preventDefault();
      if(e.shiftKey){
        const prevIndex = (index - 1 + focusables.length) % focusables.length;
        focusables[prevIndex].focus();
      } else {
        const nextIndex = (index + 1) % focusables.length;
        focusables[nextIndex].focus();
      }
    }
  });

  // Handle clicks on preview elements
  document.addEventListener('click', (e) => {
    const preview = e.target.closest('[data-preview]');
    if(preview){
      const idx = parseInt(preview.dataset.lbIndex || '0', 10);
      open(idx);
    }
  });

  // Expose rebuild function so dynamic renders can refresh the gallery
  window.rebuildLightbox = buildGallery;

  buildGallery();
}

// Setup concept selection toggles. Adds a small button on each card that allows
// the client to mark preferred concepts. Selection state is persisted in
// localStorage and reflected on initial load.
function setupConceptSelection(){
  const cards = document.querySelectorAll('.concept');
  const selected = JSON.parse(localStorage.getItem('selectedConcepts') || '[]');
  cards.forEach((card, idx) => {
    const btn = card.querySelector('.concept__select');
    if(!btn) return;
    const conceptId = data.concepts[idx].id;
    // apply stored state
    if(selected.includes(conceptId)) card.classList.add('is-selected');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const list = JSON.parse(localStorage.getItem('selectedConcepts') || '[]');
      if(card.classList.toggle('is-selected')){
        // add
        if(!list.includes(conceptId)) list.push(conceptId);
        toast(`Concept ${conceptId} selected`);
      } else {
        // remove
        const idx2 = list.indexOf(conceptId);
        if(idx2 >= 0) list.splice(idx2, 1);
        toast(`Concept ${conceptId} deselected`);
      }
      localStorage.setItem('selectedConcepts', JSON.stringify(list));
    });
  });
}

function renderMockups(){
  const wrap = $("#mockupGrid");
  wrap.innerHTML = data.mockups.map(m => {
    const imgWebp = m.img.replace(/\.(png|jpe?g)$/i, '.webp');
    // Each tile acts as a button: expose proper role and accessible name for screen readers
    return `
    <div class="tile ${m.span} ${m.ratio}" tabindex="0" role="button" aria-label="${m.label} mockup">
      <picture>
        <source srcset="${imgWebp}" type="image/webp" />
        <!-- data-preview enables fullscreen viewer; data-caption pulls the label for the caption -->
        <img src="${m.img}" alt="${m.label} mockup" loading="lazy" data-preview data-caption="${m.label}" />
      </picture>
      <div class="tile__label">${m.label}</div>
    </div>
    `;
  }).join("");

  $$(".tile", wrap).forEach(tile => {
    const label = $(".tile__label", tile)?.textContent || "Mockup";
    const click = () => toast(`${label} — previewed`);
    tile.addEventListener("click", click);
    tile.addEventListener("keydown", (e) => {
      if(e.key === "Enter" || e.key === " "){ e.preventDefault(); click(); }
    });
  });
}

function renderCompare(){
  const wrap = $("#compareRow");
  wrap.innerHTML = data.concepts.map(c => {
    // Use the square thumbnail if available, otherwise fall back to the main image.
    const thumb = c.square || c.img;
    const thumbWebp = thumb.replace(/\.(png|jpe?g)$/i, '.webp');
    return `
    <div class="cTile" tabindex="0" role="button" aria-label="Spotlight ${c.title}">
      <picture>
        <source srcset="${thumbWebp}" type="image/webp" />
        <img src="${thumb}" alt="${c.title} comparison tile" loading="lazy" />
      </picture>
      <div class="cTile__t">${c.title}</div>
    </div>
    `;
  }).join("");

  $$(".cTile", wrap).forEach((tile, i) => {
    const c = data.concepts[i];
    const act = () => {
      $$(".cTile", wrap).forEach((t, idx) => {
        t.style.opacity = idx === i ? "1" : ".55";
        t.style.filter = idx === i ? "brightness(1.05)" : "brightness(.92)";
      });
      toast(`${c.title} spotlighted`);
    };
    tile.addEventListener("mouseenter", act);
    tile.addEventListener("focus", act);
    tile.addEventListener("mouseleave", () => {
      $$(".cTile", wrap).forEach(t => { t.style.opacity = "1"; t.style.filter = "none"; });
    });
    tile.addEventListener("blur", () => {
      $$(".cTile", wrap).forEach(t => { t.style.opacity = "1"; t.style.filter = "none"; });
    });
  });
}

function setupReveal(){
  const els = $$(".reveal");
  // Respect user preferences: if reduced motion is requested, reveal all elements immediately
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReducedMotion){
    els.forEach(el => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const delay = parseInt(entry.target.getAttribute("data-delay") || "0", 10);
        entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

function setupMobileMenu(){
  const btn = $("#burger");
  const menu = $("#mobileMenu");
  // update aria-label on the burger when toggling to reflect current action
  const close = () => {
    menu.setAttribute("aria-hidden","true");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open menu");
  };
  const open = () => {
    menu.setAttribute("aria-hidden", "false");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Close menu");
  };

  btn?.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    isOpen ? close() : open();
  });

  $$("#mobileMenu a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") close(); });
}

function setupGlowToggle(){
  const btn = $("#themeGlow");
  btn?.addEventListener("click", () => {
    document.body.classList.toggle("glowOff");
    toast(document.body.classList.contains("glowOff") ? "Glow: off" : "Glow: on");
    const glows = $$(".bg__glow");
    glows.forEach(g => g.style.opacity = document.body.classList.contains("glowOff") ? ".18" : ".70");
  });
}

function setupCTAButtons(){
  $$("#contact [data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const a = btn.getAttribute("data-action");
      if(a === "select") toast("Select Concept — share the concept number (01–07).");
      if(a === "revise") toast("Request Revision — note what to refine (shape, spacing, color).");
      if(a === "approve") toast("Approve Design — move into refinement + brand kit.");
    });
  });
}

let toastTimer;
function toast(msg){
  const el = $("#toast");
  if(!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

function setupHeroParallax(){
  const stage = $("#logoStage");
  if(!stage) return;
  const onMove = (e) => {
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    stage.style.transform = `translateY(-2px) rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*5).toFixed(2)}deg)`;
  };
  const onLeave = () => { stage.style.transform = "translateY(0) rotateX(0) rotateY(0)"; };
  stage.addEventListener("mousemove", onMove);
  stage.addEventListener("mouseleave", onLeave);
}

function main(){
  // Render dynamic portions of the page. The concepts must render before the concept nav
  // and lightbox can attach their listeners.
  // Render dynamic sections. Concepts are rendered first so the lightbox can
  // collect all preview images. Concept navigation and selection functionality
  // have been removed per content constraints.
  // Do not re-render the concepts list here. The concepts are now
  // pre-rendered in the HTML to ensure they appear even when JavaScript
  // cannot execute (e.g. when served via the file:// protocol).
  renderMockups();
  renderCompare();
  // Do not render the concept nav or selection buttons.
  // renderConceptNav();
  setupLightbox();
  // setupConceptSelection();

  setupReveal();

  setupMobileMenu();
  // Removed glow toggle, hero parallax initialisation and concept contact CTA hooks
  // setupCTAButtons() is intentionally not called because there is no contact section on this page.
  // After dynamic rendering, rebuild the lightbox gallery to include all preview images
  if (typeof window.rebuildLightbox === 'function') {
    window.rebuildLightbox();
  }
}

main();
