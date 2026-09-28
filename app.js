const SITE_CONFIG = {
  whatsappNumber: "", // Ex.: "5511999999999" — somente números, com DDI e DDD.
  instagramUrl: "https://instagram.com/tatyportaty",
  instagramHandle: "@tatyportaty",
  contactEmail: "", // Adicione o e-mail real quando estiver confirmado.
  whatsappIntro: "Oi, Tati! Vim pelo seu site e queria saber mais.",
};

const categories = [
  { name: "Perfumes Árabes", count: "Fragrâncias marcantes", label: "Foto de perfume aqui", color: "#f5dbe1", link: "#arabes" },
  { name: "Bolsas", count: "Para todo estilo", label: "Foto de bolsa aqui", color: "#ffe8a8", link: "#queridinhos" },
  { name: "Tênis", count: "Conforto com atitude", label: "Foto de tênis aqui", color: "#e8dde6", link: "#queridinhos", image: "./assets/tenis-vinho-studio.png", alt: "Par de tênis branco e vinho em fotografia de estúdio", position: "center" },
  { name: "Roupas", count: "Peças para todo estilo", label: "Foto da roupa aqui", color: "#dce8df", link: "#queridinhos", image: "./assets/moda-look-studio.png", alt: "Conjunto com blusa rosa e calça branca em fotografia de estúdio", position: "center" },
];

const arabicPerfumes = [
  { name: "Perfume 01", description: "Uma fragrância intensa e elegante para chegar marcando presença.", price: "Preço sob consulta" },
  { name: "Perfume 02", description: "Envolvente na medida certa, para quem gosta de deixar lembrança.", price: "Preço sob consulta" },
  { name: "Perfume 03", description: "Um perfume cheio de personalidade para ocasiões especiais.", price: "Preço sob consulta" },
];

const products = [
  { category: "Perfume", name: "Perfume feminino", description: "Delicado, elegante e cheio de presença.", price: "Sob consulta", imageLabel: "Foto do perfume aqui", color: "#f5dbe1", image: "./assets/perfume-rose-studio.png", alt: "Perfume feminino rosé em fotografia de estúdio", position: "center" },
  { category: "Bolsa", name: "Bolsa 01", description: "Prática para acompanhar todos os dias.", price: "Sob consulta", imageLabel: "Foto da bolsa aqui", color: "#ffe8a8" },
  { category: "Tênis", name: "Tênis casual", description: "Conforto e estilo na mesma escolha.", price: "Sob consulta", imageLabel: "Foto do tênis aqui", color: "#e8dde6", image: "./assets/tenis-vinho-studio.png", alt: "Par de tênis branco e vinho em fotografia de estúdio", position: "center" },
  { category: "Roupa", name: "Blusa feminina", description: "Uma peça versátil escolhida pela Tati.", price: "Sob consulta", imageLabel: "Foto da roupa aqui", color: "#dce8df", image: "./assets/moda-look-studio.png", alt: "Conjunto com blusa rosa e calça branca em fotografia de estúdio", position: "center" },
  { category: "Perfume", name: "Perfume masculino", description: "Uma fragrância intensa para marcar presença.", price: "Sob consulta", imageLabel: "Foto do perfume aqui", color: "#f2ded2", image: "./assets/perfume-masculino-studio.png", alt: "Perfume masculino preto em fotografia de estúdio", position: "center" },
  { category: "Bolsa", name: "Bolsa 02", description: "Bonita, versátil e fácil de combinar.", price: "Sob consulta", imageLabel: "Foto da bolsa aqui", color: "#eadfe8" },
];

const tatiPicks = [
  { product: "Perfume feminino", quote: "Esse aqui é daqueles que você passa e alguém pergunta qual perfume está usando." },
  { product: "Bolsa 01", quote: "Cabe o que precisa, combina com tudo e ainda deixa o look mais bonito. Eu amo!" },
  { product: "Blusa feminina", quote: "Vesti e já pensei: preciso mostrar essa peça para todo mundo." },
];

// PLACEHOLDERS: substituir por avaliações reais e autorizadas antes da publicação definitiva.
const testimonialPlaceholders = [
  { text: "Espaço reservado para uma avaliação real sobre o atendimento da Tati.", author: "Nome da cliente", note: "avaliação demonstrativa" },
  { text: "Espaço reservado para uma avaliação real sobre um produto recebido.", author: "Nome da cliente", note: "avaliação demonstrativa" },
  { text: "Espaço reservado para uma avaliação real sobre a experiência de compra.", author: "Nome da cliente", note: "avaliação demonstrativa" },
];

const categoryGrid = document.querySelector("#category-grid");
categoryGrid.innerHTML = categories.map((category, index) => `
  <a class="category-card reveal" style="--card-bg:${category.color}; --delay:${index * 0.06}s" href="${category.link}">
    <div class="category-placeholder${category.image ? " has-image" : ""}">
      ${category.image ? `<img src="${category.image}" alt="${category.alt}" loading="lazy" decoding="async" style="object-position:${category.position || "center"}" />` : `<span>${category.label}</span>`}
    </div>
    <div class="category-card-content">
      <div><h3>${category.name}</h3><p>${category.count}</p></div>
      <span class="round-arrow" aria-hidden="true">↗</span>
    </div>
  </a>
`).join("");

document.querySelector("#featured-grid").innerHTML = arabicPerfumes.map((product, index) => `
  <article class="featured-card reveal" style="--delay:${index * 0.07}s">
    <div class="product-placeholder"><span>Foto do perfume aqui</span></div>
    <div class="featured-card-body">
      <span class="card-tag">Perfume árabe</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="card-row">
        <span class="price">${product.price}</span>
        <button class="mini-button product-whatsapp" type="button" data-product="${product.name}">Quero esse</button>
      </div>
    </div>
  </article>
`).join("");

document.querySelector("#product-grid").innerHTML = products.map((product, index) => `
  <article class="product-card reveal" style="--delay:${(index % 3) * 0.06}s">
    <div class="product-card-media${product.image ? " has-image" : ""}" style="--card-bg:${product.color}">
      ${product.image ? `<img src="${product.image}" alt="${product.alt}" loading="lazy" decoding="async" style="object-position:${product.position || "center"}" />` : `<span>${product.imageLabel}</span>`}
    </div>
    <div class="product-card-body">
      <span class="card-tag">${product.category}</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="card-row">
        <span class="price">${product.price}</span>
        <button class="mini-button product-whatsapp" type="button" data-product="${product.name}">Quero esse 💛</button>
      </div>
    </div>
  </article>
`).join("");

document.querySelector("#picks-list").innerHTML = tatiPicks.map((pick, index) => `
  <article class="pick-card reveal" style="--delay:${index * 0.06}s">
    <span class="pick-number">0${index + 1}</span>
    <h3>${pick.product}</h3>
    <blockquote>“${pick.quote}”</blockquote>
  </article>
`).join("");

document.querySelector("#testimonial-grid").innerHTML = testimonialPlaceholders.map((item, index) => `
  <article class="testimonial-card reveal" style="--delay:${index * 0.06}s">
    <div class="stars" aria-label="Cinco estrelas demonstrativas">★★★★★</div>
    <blockquote>“${item.text}”</blockquote>
    <footer><strong>${item.author}</strong><span>${item.note}</span></footer>
  </article>
`).join("");

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
}));

const navSectionLinks = [...nav.querySelectorAll('a[href^="#"]:not(.nav-cta)')];
function setActiveNav(activeLink) {
  navSectionLinks.forEach((link) => {
    const isActive = link === activeLink;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
navSectionLinks.forEach((link) => link.addEventListener("click", () => setActiveNav(link)));

const navSectionObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const activeLink = navSectionLinks.find((link) => link.getAttribute("href") === `#${visible.target.id}`);
  if (activeLink) setActiveNav(activeLink);
}, { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.4] });
navSectionLinks.forEach((link) => {
  const section = document.querySelector(link.getAttribute("href"));
  if (section) navSectionObserver.observe(section);
});

const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");
const toast = document.querySelector("#toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3400);
}
function openWhatsApp(message) {
  if (!cleanNumber) {
    showToast("O WhatsApp será ativado quando o número da Tati for adicionado.");
    return;
  }
  window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (cleanNumber) {
      event.preventDefault();
      openWhatsApp(SITE_CONFIG.whatsappIntro);
    } else if (link.classList.contains("floating-whatsapp")) {
      event.preventDefault();
      showToast("O WhatsApp será ativado quando o número da Tati for adicionado.");
    }
  });
});
document.querySelectorAll(".product-whatsapp").forEach((button) => {
  button.addEventListener("click", () => openWhatsApp(`Oi, Tati! Vi o ${button.dataset.product} no seu site e queria saber mais.`));
});

document.querySelectorAll(".instagram-link").forEach((link) => {
  if (SITE_CONFIG.instagramUrl) {
    link.href = SITE_CONFIG.instagramUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
document.querySelector(".instagram h2 span").textContent = SITE_CONFIG.instagramHandle;
const email = document.querySelector("#contact-email");
if (SITE_CONFIG.contactEmail) {
  email.textContent = SITE_CONFIG.contactEmail;
  email.href = `mailto:${SITE_CONFIG.contactEmail}`;
} else {
  email.textContent = "Contato em breve";
  email.removeAttribute("href");
}
document.querySelector("#current-year").textContent = new Date().getFullYear();

const siteFooter = document.querySelector(".site-footer");
const floatingWhatsApp = document.querySelector(".floating-whatsapp");
if (siteFooter && floatingWhatsApp) {
  new IntersectionObserver(([entry]) => {
    floatingWhatsApp.classList.toggle("is-over-footer", entry.isIntersecting);
  }, { threshold: 0.12 }).observe(siteFooter);
}

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 8), { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
