var allProducts=[];
fetch('data/products.json').then(function(r){return r.json();}).then(function(d){allProducts=d.products||[];}).catch(function(){});
var inp=document.getElementById('search-input');
var res=document.getElementById('search-results');
if(inp){inp.addEventListener('input',function(){
  var q=this.value.trim().toLowerCase();
  if(!q||q.length<2){res.innerHTML='';return;}
  var hit=allProducts.filter(function(p){
    return p.part_number.toLowerCase().includes(q)
      ||(p.series_name&&p.series_name.toLowerCase().includes(q))
      ||(p.blade_shape&&p.blade_shape.toLowerCase().includes(q))
      ||(p.specs&&p.specs.d1_mm&&String(p.specs.d1_mm).includes(q))
      ||(p.application&&p.application.toLowerCase().includes(q));
  });
  if(!hit.length){res.innerHTML='<p style="color:#888;padding:8px">該当する型番が見つかりません</p>';return;}
  var html=hit.slice(0,50).map(function(p){
    var sp=[];
    if(p.specs){
      if(p.specs.d1_mm)sp.push('刃径 '+p.specs.d1_mm+'mm');
      if(p.specs.r_mm!=null)sp.push('R '+p.specs.r_mm+'mm');
      if(p.specs.l2_mm)sp.push('首下長 '+p.specs.l2_mm+'mm');
      if(p.specs.blade_count)sp.push(p.specs.blade_count+'枚刃');
    }
    return '<div class="search-result-item"><a class="result-pn" href="'+p.product_url+'">'+p.part_number+'</a><span class="result-spec">'+(p.series_name||'')+(sp.length?' | '+sp.join(' / '):'')+' | '+(p.application||'')+'</span><a href="'+p.product_url+'" style="margin-left:auto;font-size:.8rem">詳細 →</a></div>';
  }).join('');
  if(hit.length>50)html+='<p style="padding:8px;color:#888">他 '+(hit.length-50)+' 件...</p>';
  res.innerHTML=html;
});}
