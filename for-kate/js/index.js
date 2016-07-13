var path=document.querySelector('.path'), newPath = path.cloneNode();
document.getElementById('svg').insertBefore(newPath,path);
TweenLite.set(newPath,{stroke:'#ff2f00',strokeWidth:3});

var tl = new TimelineMax({repeat:-1})
    .set('#spark',{x:-13,y:-16})
    .staggerFrom('.path',1,{scale:1.1,transformOrigin:'center',repeat:3,ease:Elastic.easeOut},0,'beat')
    .set('#spark',{opacity:1},'beat');
