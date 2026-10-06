
const toast=document.getElementById('toast');let timer;
function showToast(message){toast.textContent=message;toast.hidden=false;clearTimeout(timer);timer=setTimeout(()=>toast.hidden=true,3500)}
document.querySelectorAll('[data-placeholder]').forEach(a=>a.addEventListener('click',event=>{event.preventDefault();showToast(a.dataset.placeholder+' link coming soon.')}));
const dialog=document.getElementById('figure-dialog');
for(const id of ['open-figure','enlarge'])document.getElementById(id).addEventListener('click',()=>dialog.showModal());
document.getElementById('close-figure').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
document.getElementById('copy-citation').addEventListener('click',async function(){const citation=document.getElementById('bibtex').textContent;try{await navigator.clipboard.writeText(citation);this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1800)}catch{const range=document.createRange();range.selectNodeContents(document.getElementById('bibtex'));const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);showToast('Citation selected. Press Ctrl+C or ⌘C to copy.')}});
const links=[...document.querySelectorAll('nav a')];const sections=links.map(a=>document.querySelector(a.getAttribute('href')));const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);if(visible.length){links.forEach(a=>{const active=a.getAttribute('href')==='#'+visible[0].target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}},{rootMargin:'-100px 0px -50% 0px',threshold:0});sections.forEach(s=>observer.observe(s));
