// ================= NAV SHRINK ON SCROLL =================
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (y > 4) {
      nav.classList.add('shrink');
    } else {
      nav.classList.remove('shrink');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});


// ================= MOBILE MENU TOGGLE =================
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.ham');
  const menu = document.getElementById('mobile-menu');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const hidden = menu.hasAttribute('hidden');

    if (hidden) {
      menu.removeAttribute('hidden');
    } else {
      menu.setAttribute('hidden', '');
    }

    btn.setAttribute('aria-expanded', hidden ? 'true' : 'false');
  });
});

// ================= BLOG LOADER =================
document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("post-grid");
  if (!grid) return; // Section isn't on this page

  let posts = [];
  try {
    const res = await fetch("/content/blog.json", { cache: "no-store" });
    if (res.ok) posts = await res.json();
  } catch (err) {
    console.warn("blog.json not loaded", err);
  }

  // Sort newest first
  const toTime = (p) => Date.parse(p.date || "") || 0;
  posts.sort((a, b) => toTime(b) - toTime(a));

  // Helpers
  const esc = (s) =>
    String(s || "").replace(/[&<>"']/g, (m) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[m]));

  const fmtDate = (d) =>
    new Date(d).toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });

  // Templates
  const cardReel = (p) => {
    const media = p.video
      ? `<a class="media ar-9x16" href="${esc(p.url)}" aria-label="${esc(p.title)}">
           <video preload="metadata" poster="${esc(p.cover)}" muted playsinline>
             <source src="${esc(p.video)}" type="video/mp4">
           </video>
         </a>`
      : `<a class="media ar-9x16" href="${esc(p.url)}" aria-label="${esc(p.title)}">
           <img src="${esc(p.cover)}" alt="${esc(p.title)}">
         </a>`;

    return `
      <article class="post post--reel">
        ${media}
        <div class="post-body">
          <div class="post-tag">${esc(p.tag)}</div>
          <h2 class="post-title serif"><a href="${esc(p.url)}">${esc(p.title)}</a></h2>
          <p class="post-excerpt">${esc(p.excerpt)}</p>
          <div class="post-meta">${fmtDate(p.date)}</div>
        </div>
      </article>`;
  };

  const cardSquare = (p) => `
    <article class="post post--square">
      <a class="media ar-1x1" href="${esc(p.url)}">
        <img src="${esc(p.cover)}" alt="${esc(p.title)}">
      </a>
      <div class="post-body">
        <div class="post-tag">${esc(p.tag)}</div>
        <h2 class="post-title serif"><a href="${esc(p.url)}">${esc(p.title)}</a></h2>
        <p class="post-excerpt">${esc(p.excerpt)}</p>
        <div class="post-meta">${fmtDate(p.date)}</div>
      </div>
    </article>`;

  const cardResearch = (p) => `
    <article class="post post--research post--full">
      <a class="media ar-16x9" href="${esc(p.url)}">
        <img src="${esc(p.cover)}" alt="${esc(p.title)}">
      </a>
      <div class="post-body">
        <div class="post-tag">${esc(p.tag)}</div>
        <h2 class="post-title serif"><a href="${esc(p.url)}">${esc(p.title)}</a></h2>
        <p class="post-excerpt">${esc(p.excerpt)}</p>
        <div class="post-meta">${fmtDate(p.date)}</div>
      </div>
    </article>`;

  const cardByType = { reel: cardReel, square: cardSquare, research: cardResearch };

  grid.innerHTML = posts
    .filter(p => cardByType[p.type])
    .map(p => cardByType[p.type](p))
    .join("");
});

// ================= HR LOADER =================

document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("post-grid-hr");
  if (!grid) return; // no HR grid on this page

  // helpers
  const esc = (s) =>
    String(s || "").replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
  const toTime = (p) => Date.parse(p?.date || "") || 0;
  const fmtDate = (d) => {
    const t = Date.parse(d || "");
    return Number.isFinite(t) && !Number.isNaN(t)
      ? new Date(t).toLocaleDateString("pl-PL", { year:"numeric", month:"short", day:"numeric" })
      : "";
  };

  // fetch
  let posts = [];
  try {
    const res = await fetch("/content/hr.json", { cache: "no-store" });
    if (res.ok) posts = await res.json();
  } catch (err) {
    console.warn("hr.json not loaded", err);
  }

  // sort newest first
  posts.sort((a, b) => toTime(b) - toTime(a));

  // card templates
  const cardReel = (p) => {
    const url = esc(p?.url || "#");
    const title = esc(p?.title || "");
    const cover = esc(p?.cover || "");
    const video = p?.video ? esc(p.video) : "";
    const aria = esc(p?.aria || p?.title || "");

    const media = video
      ? `<a class="media ar-9x16" href="${url}" aria-label="${aria}">
           <video preload="metadata" poster="${cover}" muted playsinline>
             <source src="${video}" type="video/mp4">
           </video>
         </a>`
      : `<a class="media ar-9x16" href="${url}" aria-label="${aria}">
           <img src="${cover}" alt="${title}" loading="lazy" decoding="async">
         </a>`;

    return `
      <article class="post post--reel">
        ${media}
        <div class="post-body">
          ${p?.tag ? `<div class="post-tag">${esc(p.tag)}</div>` : ""}
          <h2 class="post-title serif"><a href="${url}">${title}</a></h2>
          ${p?.excerpt ? `<p class="post-excerpt">${esc(p.excerpt)}</p>` : ""}
          <div class="post-meta">${fmtDate(p?.date)}</div>
        </div>
      </article>`;
  };

  const cardSquare = (p) => {
    const url = esc(p?.url || "#");
    const title = esc(p?.title || "");
    const cover = esc(p?.cover || "");
    return `
      <article class="post post--square">
        <a class="media ar-1x1" href="${url}">
          <img src="${cover}" alt="${title}" loading="lazy" decoding="async">
        </a>
        <div class="post-body">
          ${p?.tag ? `<div class="post-tag">${esc(p.tag)}</div>` : ""}
          <h2 class="post-title serif"><a href="${url}">${title}</a></h2>
          ${p?.excerpt ? `<p class="post-excerpt">${esc(p.excerpt)}</p>` : ""}
          <div class="post-meta">${fmtDate(p?.date)}</div>
        </div>
      </article>`;
  };

  const cardResearch = (p) => {
    const url = esc(p?.url || "#");
    const title = esc(p?.title || "");
    const cover = esc(p?.cover || "");
    const aria = esc(p?.aria || p?.title || "");
    return `
      <article class="post post--research post--full">
        <a class="media ar-16x9" href="${url}" aria-label="${aria}">
          <img src="${cover}" alt="${title}" loading="lazy" decoding="async">
        </a>
        <div class="post-body">
          ${p?.tag ? `<div class="post-tag">${esc(p.tag)}</div>` : ""}
          <h2 class="post-title serif"><a href="${url}">${title}</a></h2>
          ${p?.excerpt ? `<p class="post-excerpt">${esc(p.excerpt)}</p>` : ""}
          <div class="post-meta">${fmtDate(p?.date)}</div>
        </div>
      </article>`;
  };

  const byType = { reel: cardReel, square: cardSquare, research: cardResearch };

  // render or empty state
  const html = posts
    .filter((p) => byType[p?.type])
    .map((p) => byType[p.type](p))
    .join("");

  grid.innerHTML = html || `<p style="color:var(--muted);text-align:center;">Brak wpisów HR.</p>`;
});
// ================= EMAIL COLLECTOR ====================================
