/* ============================================================
   FR Modas Masculino — Script principal
   Menu, animações, vitrine, carrossel, abas e WhatsApp
   ============================================================ */

const WHATS_NUMERO = '5511957935460';

function linkWhats(mensagem) {
  return `https://wa.me/${WHATS_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

/* ---------- Botões estáticos de WhatsApp ---------- */
document.querySelectorAll('[data-whats]').forEach((el) => {
  const msg = el.dataset.msg || 'Olá! Vim pelo site da FR Modas Masculino.';
  el.setAttribute('href', linkWhats(msg));
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener');
});

/* ---------- Cabeçalho com sombra ao rolar ---------- */
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ---------- Menu mobile ---------- */
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  const aberto = menu.classList.toggle('open');
  menuToggle.classList.toggle('open', aberto);
  menuToggle.setAttribute('aria-expanded', String(aberto));
  menuToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Link ativo conforme a seção visível ---------- */
const secoes = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const secaoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((l) => {
      l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });

secoes.forEach((s) => secaoObserver.observe(s));

/* ---------- Animações de entrada (scroll reveal) ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observarReveals(escopo = document) {
  escopo.querySelectorAll('.reveal:not(.visible)').forEach((el) => revealObserver.observe(el));
}
observarReveals();

/* ---------- Arte do produto (SVG ou foto) ---------- */
function renderArte(art) {
  if (art && typeof art === 'object' && art.foto) {
    return `<img src="${art.foto}" alt="" loading="lazy">`;
  }
  return art;
}

/* ---------- Categorias em destaque ---------- */
const catGrid = document.getElementById('catGrid');
CATEGORIAS.forEach((cat, i) => {
  const card = document.createElement('a');
  card.className = 'cat-card reveal';
  card.href = cat.link;
  card.style.transitionDelay = `${(i % 3) * 90}ms`;
  card.innerHTML = `
    <span class="cat-art" aria-hidden="true">${renderArte(cat.art)}</span>
    ${cat.badge ? `<span class="cat-badge">${cat.badge}</span>` : ''}
    <span class="cat-name">${cat.nome}</span>
    <span class="cat-count">${cat.qtd}</span>
    <span class="cat-link">Ver produtos <span aria-hidden="true">→</span></span>
  `;
  catGrid.appendChild(card);
});

/* ---------- Cartão de produto (vitrine e carrossel) ---------- */
function criarCardProduto(p, delay = 0) {
  const card = document.createElement('article');
  card.className = 'product-card reveal';
  card.style.transitionDelay = `${delay}ms`;
  const msg = `Olá! Tenho interesse no produto: *${p.nome}* (${p.marca}) — ${p.preco}. Ele está disponível?`;
  card.innerHTML = `
    <div class="product-media">
      ${p.selo ? `<span class="product-flag ${p.seloCor || ''}">${p.selo}</span>` : ''}
      ${renderArte(p.art)}
    </div>
    <div class="product-body">
      <span class="product-brand">${p.marca}</span>
      <h3 class="product-name">${p.nome}</h3>
      <p class="product-price">${p.preco}<small>Consulte condições na loja</small></p>
      <div class="product-sizes">
        ${p.tamanhos.map((t) => `<span class="size-chip">${t}</span>`).join('')}
      </div>
      <a class="btn btn-whats" href="${linkWhats(msg)}" target="_blank" rel="noopener">Consultar pelo WhatsApp</a>
    </div>
  `;
  return card;
}

/* ---------- Vitrine de produtos ---------- */
const productGrid = document.getElementById('productGrid');
PRODUTOS.forEach((p, i) => {
  productGrid.appendChild(criarCardProduto(p, (i % 4) * 80));
});
observarReveals(productGrid);

/* ---------- Camisas de time: abas + carrossel ---------- */
const track = document.getElementById('carouselTrack');
const tabs = document.querySelectorAll('.tab');

function carregarCamisas(categoria) {
  track.innerHTML = '';
  (CAMISAS[categoria] || []).forEach((p, i) => {
    const card = criarCardProduto(p, i * 70);
    track.appendChild(card);
  });
  track.scrollTo({ left: 0, behavior: 'auto' });
  observarReveals(track);
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    carregarCamisas(tab.dataset.tab);
  });
});

carregarCamisas('brasileiros');

document.getElementById('carPrev').addEventListener('click', () => {
  track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' });
});
document.getElementById('carNext').addEventListener('click', () => {
  track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' });
});

/* ---------- Cartões visuais do banner ---------- */
document.querySelectorAll('.hero-card').forEach((card) => {
  const tipo = card.dataset.visual;
  if (tipo === 'jersey-red') card.innerHTML = svgCamisa(CORES.vermelho, CORES.preto, CORES.branco, true);
  if (tipo === 'jersey-blue') card.innerHTML = svgCamisa(CORES.azul, CORES.amarelo, CORES.branco, false);
  if (tipo === 'cap') card.innerHTML = svgBone(CORES.preto, CORES.ouro);
});

/* ---------- Formulário de contato → WhatsApp ---------- */
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const dados = new FormData(form);
  const msg = [
    'Olá! Vim pelo site da FR Modas Masculino.',
    `*Nome:* ${dados.get('nome')}`,
    `*Telefone:* ${dados.get('telefone')}`,
    `*Assunto:* ${dados.get('assunto')}`,
    `*Mensagem:* ${dados.get('mensagem')}`
  ].join('\n');
  window.open(linkWhats(msg), '_blank', 'noopener');
  form.reset();
});

/* ---------- Ano atual no rodapé ---------- */
document.getElementById('anoAtual').textContent = new Date().getFullYear();
