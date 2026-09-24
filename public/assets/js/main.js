 const menuBtn = document.getElementById('menuBtn');
  const mobileClose = document.getElementById('mobileClose');
  const mobilePanel = document.getElementById('mobilePanel');
   const backdrop = document.getElementById('backdrop');

  function openMenu(){
    mobilePanel.classList.add('open');
    backdrop.classList.add('show');
  }
  function closeMenu(){
    mobilePanel.classList.remove('open');
    backdrop.classList.remove('show');
  }

  menuBtn.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);

  backdrop.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-links a, .mobile-cta a').forEach(link=>{
    link.addEventListener('click', closeMenu);
  });


const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
},{threshold:0.15, rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal, .bar').forEach(el=>io.observe(el));

const toTop = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{
  toTop.classList.toggle('show', window.scrollY > 600);
});
toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', ()=>{
  let current = sections[0].id;
  sections.forEach(s=>{
    if(window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  links.forEach(l=>l.classList.toggle('active', l.getAttribute('href') === '#'+current));
});