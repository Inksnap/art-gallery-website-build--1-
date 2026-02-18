// Artworks data
const artworks = [
  { id: 1, title: "Ethereal Sunset", artist: "Elena Vasquez", year: "2023", medium: "Oil on Canvas", style: "Impressionism", description: "A breathtaking capture of golden light.", longDescription: "Ethereal Sunset represents Vasquez's masterful command of light and color.", artistBio: "Elena Vasquez is a Spanish-born painter...", image: "images/products/art1.jpg", featured: true, dimensions: '48" × 36"', price: '$12,500' },
  { id: 2, title: "Urban Fragments", artist: "Marcus Chen", year: "2024", medium: "Mixed Media", style: "Contemporary", description: "Fragmented cityscapes.", longDescription: "Urban Fragments is a powerful commentary on modern city life.", artistBio: "Marcus Chen is a Chinese-American mixed media artist...", image: "images/products/art2.jpg", featured: true, dimensions: '60" × 48"', price: '$18,000' },
  { id: 3, title: "Whispers of the Forest", artist: "Ingrid Holmström", year: "2023", medium: "Watercolor", style: "Naturalism", description: "Delicate watercolor.", longDescription: "Whispers of the Forest transports viewers into the heart of a woodland.", artistBio: "Ingrid Holmström is a Swedish watercolorist...", image: "images/products/art3.jpg", featured: false, dimensions: '30" × 22"', price: '$7,800' },
  { id: 4, title: "Digital Consciousness", artist: "Aisha Patel", year: "2024", medium: "Digital Art", style: "Abstract", description: "An exploration of human consciousness.", longDescription: "Digital Consciousness pushes the boundaries between technology and artistic expression.", artistBio: "Aisha Patel is a British-Indian digital artist...", image: "images/products/art4.jpg", featured: true, dimensions: '4K Digital Print', price: '$9,200' },
  { id: 5, title: "The Last Garden", artist: "François Dubois", year: "2022", medium: "Acrylic on Canvas", style: "Surrealism", description: "A surreal garden.", longDescription: "The Last Garden imagines a garden at the end of time.", artistBio: "François Dubois is a French surrealist painter...", image: "images/products/art5.jpg", featured: false, dimensions: '72" × 54"', price: '$28,000' },
  { id: 6, title: "Steel Reflections", artist: "Tomoko Yamazaki", year: "2024", medium: "Sculpture", style: "Minimalism", description: "Polished steel forms.", longDescription: "Steel Reflections is a sculptural meditation on light.", artistBio: "Tomoko Yamazaki is a Japanese sculptor...", image: "images/products/art6.jpg", featured: false, dimensions: '36" × 24" × 18"', price: '$15,500' },
  { id: 7, title: "Carnival of Souls", artist: "Diego Rivera Martinez", year: "2023", medium: "Oil on Canvas", style: "Expressionism", description: "Bold, expressive figures.", longDescription: "Carnival of Souls explodes with energy and emotion.", artistBio: "Diego Rivera Martinez is a Mexican painter...", image: "images/products/art7.jpg", featured: true, dimensions: '54" × 42"', price: '$22,000' },
  { id: 8, title: "Arctic Silence", artist: "Ingrid Holmström", year: "2024", medium: "Watercolor", style: "Naturalism", description: "The profound stillness of the Arctic.", longDescription: "Arctic Silence continues Holmström's exploration.", artistBio: "Ingrid Holmström is a Swedish watercolorist...", image: "images/products/art8.jpg", featured: false, dimensions: '36" × 24"', price: '$8,500' },
  { id: 9, title: "Neon Dreams", artist: "Aisha Patel", year: "2024", medium: "Digital Art", style: "Contemporary", description: "A hypnotic digital landscape.", longDescription: "Neon Dreams immerses viewers in a digital landscape.", artistBio: "Aisha Patel is a British-Indian digital artist...", image: "images/products/art9.jpg", featured: false, dimensions: '4K Digital Print', price: '$11,000' },
  { id: 10, title: "Broken Symmetry", artist: "Marcus Chen", year: "2023", medium: "Mixed Media", style: "Abstract", description: "Geometric forms fractured.", longDescription: "Broken Symmetry explores the tension between order and disorder.", artistBio: "Marcus Chen is a Chinese-American mixed media artist...", image: "images/products/art10.jpg", featured: false, dimensions: '48" × 48"', price: '$16,500' }
];

const categories = {
  medium: ["All","Oil on Canvas","Mixed Media","Watercolor","Digital Art","Acrylic on Canvas","Sculpture"],
  style: ["All","Impressionism","Contemporary","Naturalism","Abstract","Surrealism","Minimalism","Expressionism"],
  artist: ["All","Elena Vasquez","Marcus Chen","Ingrid Holmström","Aisha Patel","François Dubois","Tomoko Yamazaki","Diego Rivera Martinez"]
};

/* --- Utilities & Render --- */
const el = (sel) => document.querySelector(sel);
const q = (sel) => Array.from(document.querySelectorAll(sel));

function init() {
  try {
    document.getElementById('year').textContent = new Date().getFullYear();
  } catch(e) {}
  try { renderNav(); } catch(e) { console.error('Nav error:', e); }
  try { setupProductDetail(); } catch(e) { console.error('Product detail error:', e); }
  try { setupGalleryIfPresent(); } catch(e) { console.error('Gallery error:', e); }
  try { setupHeroIfPresent(); } catch(e) { console.error('Hero error:', e); }
  try { setupFeaturedProducts(); } catch(e) { console.error('Featured products error:', e); }
  try { setupContactIfPresent(); } catch(e) { console.error('Contact error:', e); }
  try { setupLightbox(); } catch(e) {}
  try { setupDetailDrawer(); } catch(e) {}
  try { setupBackToTop(); } catch(e) {}
  window.addEventListener('scroll', scrollSpy);
}

/* Navbar */
function renderNav(){
  const nav = el('#site-nav');
  if(!nav) return;
  const page = window.location.pathname.split('/').pop() || 'index.html';
  nav.setAttribute('data-page', page.replace('.html', ''));
  nav.innerHTML = `
    <div class="container inner">
      <div class="brand">
        <img src="images/logo.png" alt="Triple-A Gallery Logo" class="brand-logo">
      </div>
      <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="blog.html">Blog</a>
        <a href="shop.html">Shop</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  `;
  updateNavActive();
}

function updateNavActive(){
  const page = window.location.pathname.split('/').pop() || 'index.html';
  q('nav.nav-links a').forEach(a=>{
    const href = a.getAttribute('href');
    if((page==='' && href==='index.html') || (page===href)){
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}

/* Hero carousel (simple) */
function renderHero(){
  const root = document.getElementById('home');
  const featured = artworks.filter(a=>a.featured);
  let idx=0;
  function show(){
    const art = featured[idx];
    root.style.background = `url(${art.image}) center/cover no-repeat`;
    root.innerHTML = `<div class="hero-inner container"><div><div style="display:inline-block;padding:8px 16px;border:1px solid var(--color-gold);border-radius:999px;color:var(--color-gold);font-size:11px;margin-bottom:12px">Featured Exhibition</div><h1 class="hero-title">${art.title}</h1><p class="hero-sub">by ${art.artist}</p><div class="hero-actions"><button class="btn" data-action="view">View Artwork</button><button class="btn alt" data-action="explore">Explore Gallery</button></div></div></div>`;
    idx = (idx+1)%featured.length;
  }
  show();
  setInterval(show,6000);
  root.addEventListener('click', (e)=>{
    const btn = e.target.closest('button');
    if(!btn) return;
    if(btn.dataset.action==='explore') document.getElementById('gallery').scrollIntoView({behavior:'smooth'});
    if(btn.dataset.action==='view') openDetail(featured[(idx+featured.length-1)%featured.length]);
  });
}

/* Gallery - on home and shop pages */
let filterType='style';
let activeFilter='All';
function setupGalleryIfPresent(){
  if(!el('#art-grid') && !el('#shop-grid')) return;
  renderFilterOptions();
  renderGrid();
  q('.filter-type').forEach(b=>b.addEventListener('click', (e)=>{
    q('.filter-type').forEach(x=>x.classList.remove('active'));
    e.currentTarget.classList.add('active');
    filterType = e.currentTarget.dataset.type;
    activeFilter='All';
    renderFilterOptions();
    renderGrid();
  }));
}

function setupHeroIfPresent(){
  const root = el('#home');
  if(!root) return;
  renderHero();
}

/* Product detail page */
function setupProductDetail(){
  const detailContainer = el('#product-detail');
  if(!detailContainer) return;
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  const product = artworks.find(a=>a.id===productId);
  if(!product){
    detailContainer.innerHTML = '<p>Product not found.</p>';
    return;
  }
  detailContainer.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px">
      <div>
        <div class="product-image-container" style="position:relative;overflow:hidden;border-radius:6px;background:#f5f5f5;cursor:zoom-in">
          <img id="product-image" src="${product.image}" alt="${product.title}" style="width:100%;display:block;transition:transform 0.3s ease;border-radius:6px" class="product-image-zoomable">
        </div>
        <p style="font-size:12px;color:#999;margin-top:8px;text-align:center">Click image to zoom</p>
      </div>
      <div>
        <h2 style="font-family:var(--font-montserrat);font-size:18px;margin:0 0 12px;font-weight:700">${product.title}</h2>
        <div style="color:#999;font-size:14px;margin-bottom:16px">by <strong>${product.artist}</strong></div>
        <div style="color:var(--color-accent);font-size:20px;font-weight:700;margin-bottom:16px">${product.price}</div>
        
        <div style="background:#f9f9f9;padding:16px;border-radius:6px;margin-bottom:24px">
          <h3 style="font-family:var(--font-montserrat);margin-top:0;font-size:12px">About This Artwork</h3>
          <p style="margin:0;color:#666;font-size:13px;line-height:1.6">${product.longDescription}</p>
        </div>
        
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px">
          <div style="background:#f5f5f5;padding:12px;border-radius:6px;border-left:3px solid var(--color-accent)">
            <div style="font-size:11px;color:#999;text-transform:uppercase;font-weight:600;letter-spacing:0.4px">Year</div>
            <div style="font-family:var(--font-montserrat);font-size:14px;font-weight:700;margin-top:4px">${product.year}</div>
          </div>
          <div style="background:#f5f5f5;padding:12px;border-radius:6px;border-left:3px solid var(--color-accent)">
            <div style="font-size:11px;color:#999;text-transform:uppercase;font-weight:600;letter-spacing:0.4px">Medium</div>
            <div style="font-family:var(--font-montserrat);font-size:14px;font-weight:700;margin-top:4px">${product.medium}</div>
          </div>
          <div style="background:#f5f5f5;padding:12px;border-radius:6px;border-left:3px solid var(--color-accent)">
            <div style="font-size:11px;color:#999;text-transform:uppercase;font-weight:600;letter-spacing:0.4px">Style</div>
            <div style="font-family:var(--font-montserrat);font-size:14px;font-weight:700;margin-top:4px">${product.style}</div>
          </div>
          <div style="background:#f5f5f5;padding:12px;border-radius:6px;border-left:3px solid var(--color-accent)">
            <div style="font-size:11px;color:#999;text-transform:uppercase;font-weight:600;letter-spacing:0.4px">Dimensions</div>
            <div style="font-family:var(--font-montserrat);font-size:14px;font-weight:700;margin-top:4px">${product.dimensions}</div>
          </div>
        </div>
        
        <div style="background:#f9f9f9;padding:16px;border-radius:6px;margin-bottom:24px">
          <h3 style="font-family:var(--font-montserrat);margin-top:0;font-size:12px">About the Artist</h3>
          <p style="margin:0;color:#666;font-size:13px;line-height:1.6">${product.artistBio}</p>
        </div>
        
        <div style="display:flex;gap:12px">
          <button class="btn" onclick="alert('Added \\'${product.title}\\' to cart. Total: ${product.price}\\n\\nProceeding to checkout...')">Add to Cart</button>
          <button class="btn alt" onclick="window.history.back()">Back</button>
        </div>
      </div>
    </div>
  `;
  
  // Add zoom functionality
  const imageContainer = el('.product-image-container');
  const productImage = el('#product-image');
  if(imageContainer && productImage){
    let isZoomed = false;
    imageContainer.addEventListener('click', ()=>{
      isZoomed = !isZoomed;
      if(isZoomed){
        productImage.style.transform = 'scale(1.8)';
        productImage.style.cursor = 'zoom-out';
        imageContainer.style.cursor = 'zoom-out';
      } else {
        productImage.style.transform = 'scale(1)';
        productImage.style.cursor = 'zoom-in';
        imageContainer.style.cursor = 'zoom-in';
      }
    });
  }
}


function renderFilterOptions(){
  const opts = categories[filterType];
  const container = document.getElementById('filter-options');
  container.innerHTML = '';
  opts.forEach(o=>{
    const btn = document.createElement('button');
    btn.className = 'filter-option' + (o===activeFilter?' active':'');
    btn.textContent = o;
    btn.addEventListener('click', ()=>{ activeFilter=o; renderFilterOptions(); renderGrid(); });
    container.appendChild(btn);
  });
}

function renderGrid(){
  const grid = document.getElementById('art-grid') || document.getElementById('shop-grid');
  const isShop = document.getElementById('shop-grid') !== null;
  grid.innerHTML = '';
  let filtered = artworks.slice();
  if(activeFilter!=='All') filtered = filtered.filter(a => a[filterType] === activeFilter);
  filtered.forEach(a=>{
    const card = document.createElement('article');
    card.className = 'art-card';
    const priceHtml = isShop ? `<div class="art-price">${a.price}</div>` : '';
    const buttonLabel = isShop ? 'Add to Cart' : 'View';
    const buttonAction = isShop ? 'order' : 'lightbox';
    card.innerHTML = `
      <img src="${a.image}" alt="${a.title}" loading="lazy">
      <div class="card-body">
        <h3 class="art-title">${a.title}</h3>
        <div class="art-meta">${a.artist} • ${a.year}</div>
        ${isShop ? `<div class="art-meta">${a.medium}</div>` : `<p class="short">${a.description}</p>`}
        ${priceHtml}
        <div class="action-row">
          <button class="small-btn" data-action="detail" data-id="${a.id}">Details</button>
          <button class="small-btn" data-action="${buttonAction}" data-id="${a.id}">${buttonLabel}</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  grid.querySelectorAll('.small-btn').forEach(b=>b.addEventListener('click', (e)=>{
    const id = Number(e.currentTarget.dataset.id);
    const art = artworks.find(x=>x.id===id);
    if(e.currentTarget.dataset.action==='lightbox') openLightbox(art);
    else if(e.currentTarget.dataset.action==='order') {
      alert(`Added "${art.title}" to cart. Total: ${art.price}\n\nProceeding to checkout...`);
    } else if(e.currentTarget.dataset.action==='detail') {
      window.location.href = `product.html?id=${art.id}`;
    }
  }));
}

/* Lightbox */
function setupLightbox(){
  const lb = el('#lightbox');
  if(!lb) return;
  const img = el('#lightbox-img');
  const close = el('#lightbox-close');
  close?.addEventListener('click', ()=>{ lb.hidden=true; img.src=''; });
  lb.addEventListener('click', (e)=>{ if(e.target===lb) { lb.hidden=true; img.src=''; } });
}
function openLightbox(art){
  const lb = el('#lightbox');
  if(!lb) return;
  el('#lightbox-img').src = art.image;
  el('#lightbox-img').alt = art.title;
  el('#lightbox-meta').textContent = `${art.title} — ${art.artist}`;
  lb.hidden = false;
}

/* Detail drawer */
function setupDetailDrawer(){
  const close = el('#detail-close');
  if(!close) return;
  close.addEventListener('click', ()=>{ el('#detail-drawer').hidden=true; });
}
function openDetail(art){
  const drawer = el('#detail-drawer');
  if(!drawer) return;
  const c = el('#detail-content');
  c.innerHTML = `
    <h2>${art.title}</h2>
    <p class="art-meta">${art.artist} • ${art.year} • ${art.medium}</p>
    <img src="${art.image}" alt="${art.title}" style="width:100%;border-radius:8px;margin:12px 0;">
    <p>${art.longDescription}</p>
    <p><strong>Dimensions:</strong> ${art.dimensions}</p>
    <p><strong>Price:</strong> ${art.price}</p>
    <div style="margin-top:12px"><button class="btn" id="open-lightbox-from-detail">Open Full Image</button></div>
  `;
  drawer.hidden = false;
  el('#open-lightbox-from-detail')?.addEventListener('click', ()=> openLightbox(art));
}

/* Contact form */
function setupContactIfPresent(){
  const form = el('#contact-form');
  if(!form) return;
  const status = el('#contact-status');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name')?.toString().trim();
    const email = fd.get('email')?.toString().trim();
    const message = fd.get('message')?.toString().trim();
    if(!name || !email || !message){ 
      status.textContent = 'Please fill all required fields'; 
      status.style.color='red'; 
      return; 
    }
    status.textContent = 'Sending…';
    status.style.color='#999';
    setTimeout(()=>{ 
      status.textContent = '✓ Message sent — thank you! We\'ll get back to you within 24 hours.'; 
      status.style.color='green'; 
      form.reset(); 
    },1200);
  });
}

/* Featured products on home */
function setupFeaturedProducts(){
  const container = el('#featured-products');
  if(!container) return;
  const featured = artworks.filter(a=>a.featured).slice(0,4);
  container.innerHTML='';
  featured.forEach(art=>{
    const card = document.createElement('div');
    card.className = 'art-card';
    card.innerHTML = `
      <img src="${art.image}" alt="${art.title}" style="cursor:pointer" data-id="${art.id}" data-action="lightbox">
      <div class="card-body">
        <div class="art-title">${art.title}</div>
        <div class="art-meta">${art.artist}</div>
        <div class="art-meta">${art.medium}</div>
        <div class="art-price">${art.price}</div>
        <div class="action-row">
          <button class="small-btn" data-id="${art.id}" data-action="detail">Details</button>
          <button class="small-btn" data-id="${art.id}" data-action="order">Add to Cart</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  container.querySelectorAll('.small-btn').forEach(b=>b.addEventListener('click', (e)=>{
    const id = Number(e.currentTarget.dataset.id);
    const art = artworks.find(x=>x.id===id);
    if(e.currentTarget.dataset.action==='order') {
      alert(`Added "${art.title}" to cart. Total: ${art.price}\n\nProceeding to checkout...`);
    } else if(e.currentTarget.dataset.action==='detail') {
      window.location.href = `product.html?id=${art.id}`;
    }
  }));
  container.querySelectorAll('img').forEach(img=>img.addEventListener('click', (e)=>{
    const id = Number(e.currentTarget.dataset.id);
    const art = artworks.find(x=>x.id===id);
    window.location.href = `product.html?id=${art.id}`;
  }));
}

/* Back to top */
function setupBackToTop(){
  const b = el('#back-to-top');
  if(!b) return;
  window.addEventListener('scroll', ()=>{ 
    if(window.scrollY>500) b.style.display='block'; 
    else b.style.display='none'; 
  });
  b.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/* Scroll spy */
function scrollSpy(){
  const sections = ['home','gallery','about','contact'];
  const pos = window.scrollY + 200;
  for(let i=sections.length-1;i>=0;i--){
    const s = el('#'+sections[i]);
    if(s && s.offsetTop <= pos){
      updateNavActive();
      break;
    }
  }
}

/* Init */
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
