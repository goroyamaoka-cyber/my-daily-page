document.addEventListener('keydown',function(e){
  var prev=document.querySelector('.page-nav a:first-child');
  var next=document.querySelector('.page-nav a:last-child');
  if(e.key==='ArrowLeft'&&prev&&prev.href)location.href=prev.href;
  if(e.key==='ArrowRight'&&next&&next.href)location.href=next.href;
});