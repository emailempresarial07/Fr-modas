# FR Modas Masculino — Site oficial

Site institucional da **FR Modas Masculino**, loja de moda masculina, camisas de time e acessórios em São Mateus, São Paulo.

- **Endereço:** Av. Mateo Bei, 3118 – Cidade São Mateus, São Paulo – SP, CEP 03949-012
- **WhatsApp:** (11) 95793-5460
- **Horário:** Aberto até as 19h

## Estrutura

```
index.html        → página principal (todo o conteúdo do site)
css/style.css     → estilos, cores, animações e responsividade
js/products.js    → catálogo de produtos e categorias (edite aqui!)
js/script.js      → menu, carrossel, abas, formulário e WhatsApp
img/              → coloque aqui as fotos reais dos produtos
```

## Como atualizar o site

### Produtos e camisas de time
Abra `js/products.js` e edite as listas `PRODUTOS`, `CAMISAS` e `CATEGORIAS`. Cada item segue este formato:

```js
{
  nome: 'Camisa Rubro-Negra 25/26',
  marca: 'Torcedor Pro',
  preco: 'R$ 149,90',
  tamanhos: ['P', 'M', 'G', 'GG'],
  selo: 'Mais vendida',            // opcional (etiqueta no cartão)
  art: svgCamisa(...)              // arte em SVG
}
```

Para usar uma **foto real** em vez do desenho, salve a imagem em `img/` e troque a linha `art:` por:

```js
art: { foto: 'img/nome-da-foto.jpg' }
```

### Banners promocionais
Estão direto no `index.html`, na seção `<!-- NOVIDADES E PROMOÇÕES -->`. Basta trocar os textos.

### Telefone / WhatsApp
O número fica em um único lugar: a constante `WHATS_NUMERO` no topo de `js/script.js`.

## Como visualizar localmente

Abra o `index.html` no navegador, ou rode um servidor simples:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Publicação

O site é 100% estático (HTML, CSS e JS puros) — pode ser hospedado no GitHub Pages, Netlify, Vercel ou qualquer hospedagem comum, sem instalação de dependências.
