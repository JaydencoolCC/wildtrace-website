
const toast=document.getElementById('toast');let timer;
function showToast(message){toast.textContent=message;toast.hidden=false;clearTimeout(timer);timer=setTimeout(()=>toast.hidden=true,3500)}
document.querySelectorAll('[data-placeholder]').forEach(a=>a.addEventListener('click',event=>{event.preventDefault();showToast(a.dataset.placeholder+' link coming soon.')}));
const dialog=document.getElementById('figure-dialog');
function openFigure(src,alt){const image=dialog.querySelector('img');image.src=src;image.alt=alt;dialog.setAttribute('aria-label',alt);dialog.showModal()}
for(const id of ['open-figure','enlarge'])document.getElementById(id).addEventListener('click',()=>openFigure('assets/scaling.png?v=2','Enlarged Figure 2 showing the effect of training set size on detection performance.'));
document.querySelectorAll('[data-research-figure], [data-analysis-figure]').forEach(button=>button.addEventListener('click',()=>{const image=button.querySelector('img');openFigure(image.getAttribute('src'),image.alt)}));
document.getElementById('close-figure').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
document.getElementById('copy-citation').addEventListener('click',async function(){const citation=document.getElementById('bibtex').textContent;try{await navigator.clipboard.writeText(citation);this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1800)}catch{const range=document.createRange();range.selectNodeContents(document.getElementById('bibtex'));const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);showToast('Citation selected. Press Ctrl+C or ⌘C to copy.')}});
const links=[...document.querySelectorAll('nav a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href')));
let navigationFrame;
function updateNavigation(){
  navigationFrame=null;
  const cutoff=document.querySelector('header').getBoundingClientRect().bottom+32;
  let active=null;
  for(const section of sections){if(section.getBoundingClientRect().top<=cutoff)active=section.id}
  if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-2)active=sections[sections.length-1].id;
  for(const link of links){
    const selected=link.getAttribute('href')==='#'+active;
    link.classList.toggle('active',selected);
    if(selected)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
  }
}
function scheduleNavigation(){if(navigationFrame==null)navigationFrame=requestAnimationFrame(updateNavigation)}
window.addEventListener('scroll',scheduleNavigation,{passive:true});
window.addEventListener('resize',scheduleNavigation);
window.addEventListener('load',scheduleNavigation);
scheduleNavigation();
