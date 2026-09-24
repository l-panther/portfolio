const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
},{threshold:0.15, rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));