var randomRandomIndex,showRandomPost;(function(n,m,k){var d={widgetTitle:"",widgetStyle:2,homePage:"https://www.kompiajaib.com/",numPosts:10,summaryLength:370,titleLength:"auto",thumbnailSize:90,thumbnailHeight:50,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"random-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in RandomPostConfig){d[f]=(RandomPostConfig[f]=="undefined")?d[f]:RandomPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRandomPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="random-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span style="display:block;clear:both;"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail"in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/.*?:\/\//g , "https://cdn.staticaly.com/img/").replace(/\/s[0-9]+(\-c)?/, "/w"+d.thumbnailSize+"-h50-p-k-no-nu"):d.noImage;u=("summary"in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><div class="random-post-item-thumbnail"><a href="'+v+'" title="'+t+'"'+b+'><img alt="" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailHeight+'"></a></div><div class="random-post-item-title"><a title="'+t+'" href="'+v+'"'+b+">"+w+'</a></div><span class="random-post-item-summary"><span class="random-post-item-summary-text">'+u+'</span> <a href="'+v+'" class="random-post-item-more"'+b+">"+d.moreText+"</a></span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="random-post-item" tabindex="0"><a class="random-post-item-title" href="'+v+'"'+b+' target="_blank"><img alt="" class="random-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"></a><div class="random-post-item-tooltip"><a class="random-post-item-title" title="'+t+'" href="'+v+'"'+b+" target='_blank'>"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="random-post-item" tabindex="0"><a class="random-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+' target="_blank"><img alt="" class="random-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="random-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="random-post-item-title" title="'+t+'" href="'+v+'"'+b+" target='_blank'>"+w+'</a><div class="random-post-item-tooltip"><img alt="" class="random-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="random-post-item-summary"><span class="random-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+" target='_blank'>"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRandomIndex=h;showRandomPost=g;j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=0&callback=randomRandomIndex")})(window,document,document.getElementsByTagName("head")[0]);

function addClassBody() {
    var element, name, arr;
    element = document.body;
    name = "flow";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    }
}
function removeClassBody() {
    var element = document.body;
    element.className = element.className.replace(/\bflow\b/g, "");
}

function wrap(t,e,r){for(var i=document.querySelectorAll(e),o=0;o<i.length;o++){i[o].getAttribute("src")&&(i[o].setAttribute("data-src",i[o].getAttribute("src")),i[o].removeAttribute("src")),i[o].setAttribute("class","lazyload"),i[o].setAttribute("style","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: 0px;");var a=t+i[o].outerHTML+r;i[o].outerHTML=a}}wrap("<div class='div_youtube' style='position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:0 -20px;width:calc(100% + 40px)'>","iframe[src*='youtube.com']","</div>");

$(function(){$('a[href="#searchfs"]').on("click",function(e){e.preventDefault(),$("#searchfs").addClass("open"),$('#searchfs > form > input[type="search"]').focus()}),$("#searchfs, #searchfs button.close").on("click keyup",function(e){e.target!=this&&"close"!=e.target.className&&27!=e.keyCode||$(this).removeClass("open")})});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*! lazysizes - v5.1.0 */
!function(e,t){var n=t(e,e.document);e.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}("undefined"!=typeof window?window:{},function(e,t){"use strict";var n,a;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};a=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in a||(a[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var i=t.documentElement,r=e.Date,o=e.HTMLPictureElement,s="addEventListener",l="getAttribute",c=e[s],d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,y=["load","error","lazyincluded","_lazyloaded"],z={},v=Array.prototype.forEach,h=function(e,t){return z[t]||(z[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),z[t].test(e[l]("class")||"")&&z[t]},g=function(e,t){h(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},p=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},C=function(e,t,n){var a=n?s:"removeEventListener";n&&C(e,t),y.forEach(function(n){e[a](n,t)})},b=function(e,a,i,r,o){var s=t.createEvent("Event");return i||(i={}),i.instance=n,s.initEvent(a,!r,!o),s.detail=i,e.dispatchEvent(s),s},A=function(t,n){var i;!o&&(i=e.picturefill||a.pf)?(n&&n.src&&!t[l]("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,n){for(n=n||e.offsetWidth;n<a.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},w=function(){var e,n,a=[],i=[],r=a,o=function(){var t=r;for(r=a.length?i:a,e=!0,n=!1;t.length;)t.shift()();e=!1},s=function(a,i){e&&!i?a.apply(this,arguments):(r.push(a),n||(n=!0,(t.hidden?d:u)(o)))};return s._lsFlush=o,s}(),N=function(e,t){return t?function(){w(e)}:function(){var t=this,n=arguments;w(function(){e.apply(t,n)})}},M=function(e){var t,n=0,i=a.throttleDelay,o=a.ricTimeout,s=function(){t=!1,n=r.now(),e()},l=f&&o>49?function(){f(s,{timeout:o}),o!==a.ricTimeout&&(o=a.ricTimeout)}:N(function(){d(s)},!0);return function(e){var a;(e=e===!0)&&(o=33),t||(t=!0,a=i-(r.now()-n),0>a&&(a=0),e||9>a?l():d(l,a))}},x=function(e){var t,n,a=99,i=function(){t=null,e()},o=function(){var e=r.now()-n;a>e?d(o,a-e):(f||i)(i)};return function(){n=r.now(),t||(t=d(o,a))}},W=function(){var o,u,f,y,z,_,W,L,S,T,F,R,D=/^img$/i,k=/^iframe$/i,H="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,P=0,$=0,I=-1,q=function(e){$--,(!e||0>$||!e.target)&&($=0)},U=function(e){return null==R&&(R="hidden"==E(t.body,"visibility")),R||"hidden"!=E(e.parentNode,"visibility")&&"hidden"!=E(e,"visibility")},j=function(e,n){var a,r=e,o=U(e);for(L-=n,F+=n,S-=n,T+=n;o&&(r=r.offsetParent)&&r!=t.body&&r!=i;)o=(E(r,"opacity")||1)>0,o&&"visible"!=E(r,"overflow")&&(a=r.getBoundingClientRect(),o=T>a.left&&S<a.right&&F>a.top-1&&L<a.bottom+1);return o},G=function(){var e,r,s,c,d,f,m,z,v,h,g,p,C=n.elements;if((y=a.loadMode)&&8>$&&(e=C.length)){for(r=0,I++;e>r;r++)if(C[r]&&!C[r]._lazyRace)if(!H||n.prematureUnveil&&n.prematureUnveil(C[r]))ee(C[r]);else if((z=C[r][l]("data-expand"))&&(f=1*z)||(f=P),h||(h=!a.expand||a.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:a.expand,n._defEx=h,g=h*a.expFactor,p=a.hFac,R=null,g>P&&1>$&&I>2&&y>2&&!t.hidden?(P=g,I=0):P=y>1&&I>1&&6>$?h:O),v!==f&&(_=innerWidth+f*p,W=innerHeight+f,m=-1*f,v=f),s=C[r].getBoundingClientRect(),(F=s.bottom)>=m&&(L=s.top)<=W&&(T=s.right)>=m*p&&(S=s.left)<=_&&(F||T||S||L)&&(a.loadHidden||U(C[r]))&&(u&&3>$&&!z&&(3>y||4>I)||j(C[r],f))){if(ee(C[r]),d=!0,$>9)break}else!d&&u&&!c&&4>$&&4>I&&y>2&&(o[0]||a.preloadAfterLoad)&&(o[0]||!z&&(F||T||S||L||"auto"!=C[r][l](a.sizesAttr)))&&(c=o[0]||C[r]);c&&!d&&ee(c)}},J=M(G),K=function(e){var t=e.target;return t._lazyCache?void delete t._lazyCache:(q(e),g(t,a.loadedClass),p(t,a.loadingClass),C(t,V),void b(t,"lazyloaded"))},Q=N(K),V=function(e){Q({target:e.target})},X=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},Y=function(e){var t,n=e[l](a.srcsetAttr);(t=a.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Z=N(function(e,t,n,i,r){var o,s,c,u,y,z;(y=b(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?g(e,a.autosizesClass):e.setAttribute("sizes",i)),s=e[l](a.srcsetAttr),o=e[l](a.srcAttr).replace(/.*?:\/\//g,"//"),r&&(c=e.parentNode,u=c&&m.test(c.nodeName||"")),z=t.firesLoad||"src"in e&&(s||o||u),y={target:e},g(e,a.loadingClass),z&&(clearTimeout(f),f=d(q,2500),C(e,V,!0)),u&&v.call(c.getElementsByTagName("source"),Y),s?e.setAttribute("srcset",s):o&&!u&&(k.test(e.nodeName)?X(e,o):e.src=o),r&&(s||u)&&A(e,{src:o})),e._lazyRace&&delete e._lazyRace,p(e,a.lazyClass),w(function(){var t=e.complete&&e.naturalWidth>1;z&&!t||(t&&g(e,"ls-is-cached"),K(y),e._lazyCache=!0,d(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&$--},!0)}),ee=function(e){if(!e._lazyRace){var t,n=D.test(e.nodeName),i=n&&(e[l](a.sizesAttr)||e[l]("sizes")),r="auto"==i;(!r&&u||!n||!e[l]("src")&&!e.srcset||e.complete||h(e,a.errorClass)||!h(e,a.lazyClass))&&(t=b(e,"lazyunveilread").detail,r&&B.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,$++,Z(e,t,r,i,n))}},te=x(function(){a.loadMode=3,J()}),ne=function(){3==a.loadMode&&(a.loadMode=2),te()},ae=function(){if(!u){if(r.now()-z<999)return void d(ae,999);u=!0,a.loadMode=3,J(),c("scroll",ne,!0)}};return{_:function(){z=r.now(),n.elements=t.getElementsByClassName(a.lazyClass),o=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),c("scroll",J,!0),c("resize",J,!0),e.MutationObserver?new MutationObserver(J).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[s]("DOMNodeInserted",J,!0),i[s]("DOMAttrModified",J,!0),setInterval(J,999)),c("hashchange",J,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[s](e,J,!0)}),/d$|^c/.test(t.readyState)?ae():(c("load",ae),t[s]("DOMContentLoaded",J),d(ae,2e4)),n.elements.length?(G(),w._lsFlush()):J()},checkElems:J,unveil:ee,_aLSL:ne}}(),B=function(){var e,n=N(function(e,t,n,a){var i,r,o;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),m.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),r=0,o=i.length;o>r;r++)i[r].setAttribute("sizes",a);n.detail.dataAttr||A(e,n.detail)}),i=function(e,t,a){var i,r=e.parentNode;r&&(a=_(e,r,a),i=b(e,"lazybeforesizes",{width:a,dataAttr:!!t}),i.defaultPrevented||(a=i.detail.width,a&&a!==e._lazysizesWidth&&n(e,r,i,a)))},r=function(){var t,n=e.length;if(n)for(t=0;n>t;t++)i(e[t])},o=x(r);return{_:function(){e=t.getElementsByClassName(a.autosizesClass),c("resize",o)},checkElems:o,updateElem:i}}(),L=function(){!L.i&&t.getElementsByClassName&&(L.i=!0,B._(),W._())};return d(function(){a.init&&L()}),n={cfg:a,autoSizer:B,loader:W,init:L,uP:A,aC:g,rC:p,hC:h,fire:b,gW:_,rAF:w}});
var x=document.querySelectorAll(".lazyloadimg"),i;for(i=0;i<x.length;i++)x[i].innerHTML=x[i].innerHTML.replace("<!--","").replace("-->","");
