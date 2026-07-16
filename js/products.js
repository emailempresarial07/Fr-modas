/* ============================================================
   Fr Modas e Acessórios — Catálogo de produtos
   ------------------------------------------------------------
   PARA ATUALIZAR O SITE: basta editar as listas abaixo.
   Cada produto tem: nome, marca, preço, tamanhos, arte e selo.
   As artes são desenhos em SVG — troque por fotos reais quando
   quiser, usando: art: { foto: "img/nome-da-foto.jpg" }
   ============================================================ */

/* ---------- Geradores de arte (SVG) ---------- */

function svgCamisa(cor1, cor2, detalhe, listras) {
  const faixas = listras
    ? `<rect x="78" y="30" width="14" height="150" fill="${cor2}" rx="2"/>
       <rect x="108" y="30" width="14" height="150" fill="${cor2}" rx="2"/>
       <rect x="48" y="34" width="14" height="140" fill="${cor2}" rx="2"/>
       <rect x="138" y="34" width="14" height="140" fill="${cor2}" rx="2"/>`
    : '';
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Camisa de time">
    <path d="M63 22 L84 12 Q100 24 116 12 L137 22 L168 42 L156 74 L138 64 L138 178 Q100 190 62 178 L62 64 L44 74 L32 42 Z" fill="${cor1}"/>
    ${faixas}
    <path d="M63 22 L84 12 Q100 24 116 12 L137 22 L168 42 L156 74 L138 64 L138 178 Q100 190 62 178 L62 64 L44 74 L32 42 Z"
          fill="none" stroke="rgba(0,0,0,.25)" stroke-width="3"/>
    <path d="M84 12 Q100 24 116 12 L112 22 Q100 32 88 22 Z" fill="${detalhe}"/>
    <circle cx="78" cy="52" r="9" fill="${detalhe}" stroke="rgba(0,0,0,.2)" stroke-width="2"/>
    <path d="M32 42 L44 74 L62 64" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="3"/>
    <path d="M168 42 L156 74 L138 64" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="3"/>
  </svg>`;
}

function svgCamiseta(cor, estampa) {
  const arte = estampa
    ? `<rect x="72" y="70" width="56" height="66" rx="8" fill="rgba(255,255,255,.16)"/>
       <path d="M84 118 L98 92 L108 108 L116 96 L124 118 Z" fill="rgba(255,255,255,.55)"/>
       <circle cx="90" cy="86" r="6" fill="rgba(255,255,255,.55)"/>`
    : `<path d="M70 96 h60 M70 108 h44" stroke="rgba(255,255,255,.22)" stroke-width="5" stroke-linecap="round"/>`;
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Camiseta">
    <path d="M63 24 L86 14 Q100 26 114 14 L137 24 L166 44 L154 74 L138 66 L138 178 Q100 188 62 178 L62 66 L46 74 L34 44 Z" fill="${cor}"/>
    <path d="M86 14 Q100 26 114 14 L110 24 Q100 32 90 24 Z" fill="rgba(0,0,0,.3)"/>
    ${arte}
    <path d="M63 24 L86 14 Q100 26 114 14 L137 24 L166 44 L154 74 L138 66 L138 178 Q100 188 62 178 L62 66 L46 74 L34 44 Z"
          fill="none" stroke="rgba(0,0,0,.28)" stroke-width="3"/>
  </svg>`;
}

function svgConjunto(cor1, cor2) {
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conjunto masculino">
    <path d="M40 20 L58 12 Q70 22 82 12 L100 20 L118 34 L110 56 L98 50 L98 118 Q70 126 42 118 L42 50 L30 56 L22 34 Z" fill="${cor1}"/>
    <path d="M40 20 L58 12 Q70 22 82 12 L100 20 L118 34 L110 56 L98 50 L98 118 Q70 126 42 118 L42 50 L30 56 L22 34 Z" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="3"/>
    <path d="M104 96 h64 v34 l-8 58 h-20 l-4 -48 -4 48 h-20 l-8 -58 Z" fill="${cor2}"/>
    <path d="M104 96 h64 v34 l-8 58 h-20 l-4 -48 -4 48 h-20 l-8 -58 Z" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="3"/>
    <path d="M104 112 h64" stroke="rgba(255,255,255,.25)" stroke-width="4"/>
    <path d="M52 74 h36" stroke="rgba(255,255,255,.28)" stroke-width="5" stroke-linecap="round"/>
  </svg>`;
}

function svgBermuda(cor) {
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bermuda">
    <path d="M54 36 h92 v36 l-12 92 h-32 l-2 -64 -2 64 h-32 l-12 -92 Z" fill="${cor}"/>
    <path d="M54 36 h92 v36 l-12 92 h-32 l-2 -64 -2 64 h-32 l-12 -92 Z" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="3"/>
    <path d="M54 56 h92" stroke="rgba(255,255,255,.3)" stroke-width="5"/>
    <path d="M100 72 v-16" stroke="rgba(0,0,0,.25)" stroke-width="4"/>
    <circle cx="74" cy="92" r="4" fill="rgba(255,255,255,.4)"/>
  </svg>`;
}

function svgMoletom(cor, capuz) {
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Moletom">
    ${capuz ? `<path d="M70 30 Q100 4 130 30 L126 48 Q100 30 74 48 Z" fill="${cor}" stroke="rgba(0,0,0,.28)" stroke-width="3"/>` : ''}
    <path d="M60 34 L82 26 Q100 38 118 26 L140 34 L170 56 L158 86 L140 76 L140 176 Q100 188 60 176 L60 76 L42 86 L30 56 Z" fill="${cor}"/>
    <path d="M60 34 L82 26 Q100 38 118 26 L140 34 L170 56 L158 86 L140 76 L140 176 Q100 188 60 176 L60 76 L42 86 L30 56 Z" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="3"/>
    <path d="M78 132 h44 v34 h-44 Z" fill="rgba(0,0,0,.2)"/>
    <path d="M92 48 v20 M108 48 v20" stroke="rgba(255,255,255,.35)" stroke-width="4" stroke-linecap="round"/>
  </svg>`;
}

function svgBone(cor, detalhe) {
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boné">
    <path d="M40 106 Q40 44 100 44 Q160 44 160 106 Z" fill="${cor}"/>
    <path d="M40 106 Q40 44 100 44 Q160 44 160 106 Z" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="3"/>
    <path d="M100 44 L100 106 M66 52 Q60 78 60 106 M134 52 Q140 78 140 106" stroke="rgba(0,0,0,.2)" stroke-width="2.5" fill="none"/>
    <path d="M36 106 Q100 92 164 106 Q168 118 160 120 Q100 108 40 120 Q32 118 36 106 Z" fill="${detalhe}"/>
    <path d="M158 112 Q196 116 192 134 Q188 148 156 142 Z" fill="${cor}" stroke="rgba(0,0,0,.25)" stroke-width="3"/>
    <circle cx="100" cy="74" r="10" fill="${detalhe}" opacity=".9"/>
  </svg>`;
}

function svgRelogio(corPulseira, corMostrador) {
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Relógio">
    <rect x="82" y="10" width="36" height="52" rx="8" fill="${corPulseira}"/>
    <rect x="82" y="138" width="36" height="52" rx="8" fill="${corPulseira}"/>
    <circle cx="100" cy="100" r="48" fill="${corPulseira}"/>
    <circle cx="100" cy="100" r="38" fill="${corMostrador}"/>
    <circle cx="100" cy="100" r="38" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="2"/>
    <path d="M100 100 L100 74 M100 100 L118 108" stroke="#d4af37" stroke-width="4" stroke-linecap="round"/>
    <circle cx="100" cy="100" r="4" fill="#d4af37"/>
    <rect x="146" y="88" width="10" height="24" rx="4" fill="${corPulseira}"/>
  </svg>`;
}

function svgCorrente() {
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Corrente">
    <path d="M50 30 Q100 120 100 150 M150 30 Q100 120 100 150" fill="none" stroke="#d4af37" stroke-width="10" stroke-linecap="round" stroke-dasharray="14 8"/>
    <path d="M100 148 l16 22 -16 22 -16 -22 Z" fill="#d4af37" stroke="#b8962e" stroke-width="3"/>
    <circle cx="100" cy="148" r="6" fill="#e8cd6d"/>
  </svg>`;
}

function svgCarteira(cor) {
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carteira">
    <rect x="34" y="56" width="132" height="92" rx="12" fill="${cor}"/>
    <rect x="34" y="56" width="132" height="92" rx="12" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="3"/>
    <path d="M34 78 h132" stroke="rgba(255,255,255,.18)" stroke-width="3"/>
    <rect x="118" y="90" width="48" height="30" rx="8" fill="rgba(0,0,0,.25)"/>
    <circle cx="142" cy="105" r="7" fill="#d4af37"/>
    <path d="M46 124 h56" stroke="rgba(255,255,255,.2)" stroke-width="4" stroke-linecap="round"/>
  </svg>`;
}

/* ---------- Cores das artes ---------- */
const CORES = {
  ouro: '#d4af37',
  vermelho: '#c8102e',
  vinho: '#7f1734',
  azul: '#1d3f8f',
  azulClaro: '#6cabdd',
  verde: '#0b6e4f',
  preto: '#1c1c1c',
  branco: '#f2f2f2',
  cinza: '#5a5a5a',
  amarelo: '#ffdf00',
  grena: '#a50044',
  marrom: '#6b4a2b'
};

/* ============================================================
   CATEGORIAS EM DESTAQUE
   ============================================================ */
const CATEGORIAS = [
  { nome: 'Camisas de Times', qtd: 'Nacionais, internacionais e seleções', badge: 'Mais vendidos', art: svgCamisa(CORES.vermelho, CORES.preto, CORES.branco, true), link: '#camisas' },
  { nome: 'Camisetas de Marca', qtd: 'Básicas e estampadas', badge: '', art: svgCamiseta(CORES.preto, true), link: '#produtos' },
  { nome: 'Conjuntos Masculinos', qtd: 'Looks completos', badge: '', art: svgConjunto(CORES.cinza, CORES.preto), link: '#produtos' },
  { nome: 'Bermudas e Calças', qtd: 'Conforto e estilo', badge: '', art: svgBermuda(CORES.azul), link: '#produtos' },
  { nome: 'Bonés e Acessórios', qtd: 'Bonés, correntes, carteiras e relógios', badge: '', art: svgBone(CORES.preto, CORES.ouro), link: '#produtos' },
  { nome: 'Novidades', qtd: 'Acabou de chegar', badge: 'Novo', art: svgMoletom(CORES.vinho, true), link: '#novidades' }
];

/* ============================================================
   PRODUTOS EM DESTAQUE (vitrine)
   ============================================================ */
const PRODUTOS = [
  { nome: 'Camiseta estampada premium', marca: 'Nike', preco: 'R$ 89,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: 'Destaque', art: svgCamiseta(CORES.preto, true) },
  { nome: 'Camiseta básica algodão', marca: 'Adidas', preco: 'R$ 69,90', tamanhos: ['P', 'M', 'G', 'GG', 'XG'], selo: '', art: svgCamiseta(CORES.branco, false) },
  { nome: 'Conjunto moletom completo', marca: 'Lacoste', preco: 'R$ 249,90', tamanhos: ['M', 'G', 'GG'], selo: 'Oferta', seloCor: 'red', art: svgConjunto(CORES.preto, CORES.cinza) },
  { nome: 'Bermuda tactel esportiva', marca: 'Puma', preco: 'R$ 79,90', tamanhos: ['38', '40', '42', '44'], selo: '', art: svgBermuda(CORES.azul) },
  { nome: 'Moletom canguru com capuz', marca: 'Oakley', preco: 'R$ 179,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: 'Novo', art: svgMoletom(CORES.vinho, true) },
  { nome: 'Boné aba curva premium', marca: 'New Era', preco: 'R$ 99,90', tamanhos: ['Único'], selo: '', art: svgBone(CORES.preto, CORES.ouro) },
  { nome: 'Relógio masculino aço', marca: 'Technos', preco: 'R$ 299,90', tamanhos: ['Único'], selo: 'Destaque', art: svgRelogio('#3a3a3a', '#101010') },
  { nome: 'Corrente banhada a ouro', marca: 'Fr Exclusive', preco: 'R$ 129,90', tamanhos: ['60cm', '70cm'], selo: '', art: svgCorrente() }
];

/* ============================================================
   CAMISAS DE TIME (carrossel por categoria)
   ============================================================ */
const CAMISAS = {
  brasileiros: [
    { nome: 'Camisa Rubro-Negra 25/26', marca: 'Torcedor Pro', preco: 'R$ 149,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: 'Mais vendida', art: svgCamisa(CORES.vermelho, CORES.preto, CORES.branco, true) },
    { nome: 'Camisa Alvinegra Paulista', marca: 'Torcedor Pro', preco: 'R$ 149,90', tamanhos: ['P', 'M', 'G', 'GG', 'XG'], selo: '', art: svgCamisa(CORES.branco, CORES.preto, CORES.preto, false) },
    { nome: 'Camisa Tricolor Paulista', marca: 'Torcedor Pro', preco: 'R$ 149,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: '', art: svgCamisa(CORES.branco, CORES.vermelho, CORES.preto, false) },
    { nome: 'Camisa Alviverde 25/26', marca: 'Torcedor Pro', preco: 'R$ 149,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: '', art: svgCamisa(CORES.verde, CORES.branco, CORES.branco, false) },
    { nome: 'Camisa Tricolor Carioca', marca: 'Torcedor Pro', preco: 'R$ 149,90', tamanhos: ['M', 'G', 'GG'], selo: '', art: svgCamisa(CORES.vinho, CORES.verde, CORES.branco, true) },
    { nome: 'Camisa Cruzmaltina', marca: 'Torcedor Pro', preco: 'R$ 149,90', tamanhos: ['P', 'M', 'G'], selo: '', art: svgCamisa(CORES.preto, CORES.branco, CORES.branco, false) }
  ],
  internacionais: [
    { nome: 'Camisa Merengue Home', marca: 'Europa Line', preco: 'R$ 169,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: 'Importada', art: svgCamisa(CORES.branco, CORES.ouro, CORES.ouro, false) },
    { nome: 'Camisa Blaugrana 25/26', marca: 'Europa Line', preco: 'R$ 169,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: '', art: svgCamisa(CORES.grena, CORES.azul, CORES.amarelo, true) },
    { nome: 'Camisa Red Devils Home', marca: 'Europa Line', preco: 'R$ 169,90', tamanhos: ['M', 'G', 'GG'], selo: '', art: svgCamisa(CORES.vermelho, CORES.preto, CORES.branco, false) },
    { nome: 'Camisa Citizens Home', marca: 'Europa Line', preco: 'R$ 169,90', tamanhos: ['P', 'M', 'G'], selo: '', art: svgCamisa(CORES.azulClaro, CORES.branco, CORES.branco, false) },
    { nome: 'Camisa Rossonera 25/26', marca: 'Europa Line', preco: 'R$ 169,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: '', art: svgCamisa(CORES.vermelho, CORES.preto, CORES.branco, true) },
    { nome: 'Camisa Parisiense Home', marca: 'Europa Line', preco: 'R$ 169,90', tamanhos: ['M', 'G', 'GG'], selo: '', art: svgCamisa(CORES.azul, CORES.vermelho, CORES.branco, false) }
  ],
  selecoes: [
    { nome: 'Camisa Brasil Amarela', marca: 'Seleção Line', preco: 'R$ 159,90', tamanhos: ['P', 'M', 'G', 'GG', 'XG'], selo: 'Clássica', art: svgCamisa(CORES.amarelo, CORES.verde, CORES.verde, false) },
    { nome: 'Camisa Brasil Azul', marca: 'Seleção Line', preco: 'R$ 159,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: '', art: svgCamisa(CORES.azul, CORES.amarelo, CORES.branco, false) },
    { nome: 'Camisa Argentina Home', marca: 'Seleção Line', preco: 'R$ 159,90', tamanhos: ['M', 'G', 'GG'], selo: '', art: svgCamisa(CORES.azulClaro, CORES.branco, CORES.ouro, true) },
    { nome: 'Camisa França Home', marca: 'Seleção Line', preco: 'R$ 159,90', tamanhos: ['P', 'M', 'G'], selo: '', art: svgCamisa(CORES.azul, CORES.branco, CORES.vermelho, false) },
    { nome: 'Camisa Portugal Home', marca: 'Seleção Line', preco: 'R$ 159,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: '', art: svgCamisa(CORES.vinho, CORES.verde, CORES.ouro, false) },
    { nome: 'Camisa Alemanha Home', marca: 'Seleção Line', preco: 'R$ 159,90', tamanhos: ['M', 'G', 'GG'], selo: '', art: svgCamisa(CORES.branco, CORES.preto, CORES.preto, false) }
  ],
  lancamentos: [
    { nome: 'Camisa Retrô Edição Limitada', marca: 'Fr Exclusive', preco: 'R$ 189,90', tamanhos: ['M', 'G', 'GG'], selo: 'Lançamento', seloCor: 'red', art: svgCamisa(CORES.ouro, CORES.preto, CORES.preto, false) },
    { nome: 'Camisa Third Conceito 25/26', marca: 'Torcedor Pro', preco: 'R$ 179,90', tamanhos: ['P', 'M', 'G'], selo: 'Lançamento', seloCor: 'red', art: svgCamisa(CORES.preto, CORES.ouro, CORES.ouro, true) },
    { nome: 'Camisa Away Premium', marca: 'Europa Line', preco: 'R$ 179,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: 'Novo', art: svgCamisa(CORES.cinza, CORES.vermelho, CORES.branco, false) },
    { nome: 'Camisa Treino Pro 25/26', marca: 'Torcedor Pro', preco: 'R$ 139,90', tamanhos: ['P', 'M', 'G', 'GG'], selo: 'Novo', art: svgCamisa(CORES.verde, CORES.preto, CORES.branco, false) },
    { nome: 'Camisa Goleiro Edição 25/26', marca: 'Torcedor Pro', preco: 'R$ 159,90', tamanhos: ['M', 'G', 'GG'], selo: 'Novo', art: svgCamisa(CORES.vinho, CORES.preto, CORES.ouro, false) }
  ]
};
