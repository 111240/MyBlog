(function(t){function a(a){for(var i,r,o=a[0],c=a[1],h=a[2],u=0,d=[];u<o.length;u++)r=o[u],n[r]&&d.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(a);while(d.length)d.shift()();return s.push.apply(s,h||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],i=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(i=!1)}i&&(s.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},n={app:0},s=[];function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(e,i,function(a){return t[a]}.bind(null,i));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var h=0;h<o.length;h++)a(o[h]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"17f8":function(t,a,e){"use strict";var i=e("7cd2"),n=e.n(i);n.a},"2c92":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("5c07"),e("53da"),e("2556"),e("d0f8");var i=e("6e6d"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t.startLoading?e("div",[e("div",{ref:"appBody",attrs:{id:"app-body"}},[e("Header",{attrs:{isEnter:t.isEnterHead},on:{enter:t.enterHead,leave:t.leaveHead}}),e("div",{ref:"appContent",attrs:{id:t.isEnterCon?"app-content":"app-content-leave"},on:{mouseenter:function(a){t.isEnterCon=!0},mouseleave:function(a){t.isEnterCon=!1}}},[e("router-view")],1)],1),e("div",{attrs:{id:"background-box"}}),e("div",{attrs:{id:"background-img"}}),e("transition",{attrs:{"enter-active-class":"animated zoomInLeft","leave-active-class":"animated zoomOutRight"}},[0!==t.topScroll?e("div",{attrs:{id:"back-top"},on:{click:t.backTop}},[t._v("返回顶部")]):t._e()])],1):e("div",{key:"app",staticStyle:{"text-align":"center"}},[e("canvas",{attrs:{id:"c1"}}),e("canvas",{attrs:{id:"c2"}}),e("div",{staticClass:"foo"},[e("span",{staticClass:"letter",attrs:{"data-letter":"皮皮毅的小屋"}},[t._v("皮皮毅的小屋")])]),e("a",{staticClass:"button orange shield glossy",attrs:{"data-icon":"♚",id:"start-btn"},on:{click:function(a){t.startLoading=!0}}},[t._v("ClickMe>>")])])]),e("div",{staticClass:"aplayer-box"},[e("div",{ref:"aplayer",attrs:{id:"aplayer"}})])],1)},s=[],r=e("056e"),o=e.n(r),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"common-header"},[e("div",{staticClass:"common-header-item",class:t.isEnter?"common-header-item-enter":"common-header-item",on:{mouseenter:t.enter,mouseleave:t.leave}},[t._m(0)]),e("div",{staticStyle:{height:"70px"}})])},h=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header-foo"},[e("span",{staticClass:"letter",attrs:{"data-letter":"皮皮毅の小屋"}},[t._v("皮皮毅の小屋")])])}],l={name:"Header",data:function(){return{}},props:{isEnter:{type:Boolean}},methods:{enter:function(){this.$emit("enter")},leave:function(){this.$emit("leave")}}},u=l,d=(e("8b80"),e("17cc")),p=Object(d["a"])(u,c,h,!1,null,"1050f7cf",null),m=p.exports,f=e("8e61"),v=(e("48fb"),e("4af5"),e("244e"),e("7aaf")),b=e("1deb"),x=function(t,a){var e=g(0,360)*Math.PI/180,i=g(20,150),n=[-1,1][g(0,1)]*i;return{x:t+n*Math.cos(e),y:a+n*Math.sin(e)}},g=function(t,a){return Math.floor(Math.random()*(a-t+1))+t},y=function(){function t(a,e){Object(v["a"])(this,t),this.r=g(9,13),this.opos={},this.x=this.opos.x=a,this.y=this.opos.y=e,this.colors=["#FF1461","#18FF92","#5A87FF","#FBF38C"],this.color=this.colors[g(0,this.colors.length)],this.tpos=x(a,e)}return Object(b["a"])(t,[{key:"creatCircle",value:function(t){t.beginPath(),t.arc(this.x,this.y,this.r,0,2*Math.PI),t.closePath(),t.fillStyle=this.color,t.fill()}},{key:"moveFun",value:function(t,a,e){var i=g(26,35),n=g(20,25),s=g(15,20),r=t.x+~~((a.x-t.x)/3),o=r+~~((a.x-t.x)/3),c=a.x>=t.x?Math.max(e,r)==e?Math.max(e,o)==e?i:n:s:Math.max(e,r)==e?s:Math.max(e,o)==e?n:i,h={x:a.x-t.x,y:a.y-t.y};return{x:Math.abs(h.x/c),y:Math.abs(h.y/c)}}},{key:"move",value:function(){var t=this.moveFun(this.opos,this.tpos,this.x);this.x=this.opos.x>this.tpos.x?Math.max(this.x-t.x,this.tpos.x):Math.min(this.x+t.x,this.tpos.x),this.y=this.opos.y>this.tpos.y?Math.max(this.y-t.y,this.tpos.y):Math.min(this.y+t.y,this.tpos.y),this.r=Math.max(Math.abs((this.r-Math.random()/1.2).toFixed(2)),0)}}]),t}(),w=function(){function t(a,e){Object(v["a"])(this,t),this.bR=g(16,32),this.overR=g(60,100),this.x=a,this.y=e,this.op=1}return Object(b["a"])(t,[{key:"creatBigCircle",value:function(t){t.beginPath(),t.arc(this.x,this.y,this.bR,0,2*Math.PI),t.closePath(),t.strokeStyle="rgba(128, 128, 128, "+this.op+")",t.stroke()}},{key:"changeR",value:function(){this.bR=Math.min(this.bR+=g(1,4),this.overR),this.op=Math.max((this.op-Math.random()/12).toFixed(2),0)}},{key:"complete",value:function(){return this.bR>=this.overR&&this.op<=0}}]),t}();window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,window.clearRequestTimeout=window.cancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame;var M,_,O=40,C=[],k=null,F=!1,j=function(t,a){C=[],F&&clearRequestTimeout(F);for(var e=O;e-- >0;)C.push(new y(t,a));k=new w(t,a),A()},A=function t(){C.forEach(function(t){t.move(),t.creatCircle(_)}),k.changeR(),k.creatBigCircle(_),F=requestAnimationFrame(t),k.complete()&&clearRequestTimeout(F)},B=function(){function t(a){Object(v["a"])(this,t),this.defaultOpts={id:"",num:100,start_probability:.1,radius_min:1,radius_max:2,radius_add_min:.3,radius_add_max:.5,opacity_min:.3,opacity_max:.5,opacity_prev_min:.003,opacity_prev_max:.005,light_min:40,light_max:70,is_same_color:!1},"[object Object]"==Object.prototype.toString.call(a)?this.userOpts=Object(f["a"])({},this.defaultOpts,a):this.userOpts=Object(f["a"])({},this.defaultOpts,{id:a}),this.color=this.random(0,360),this.bubbleNum=[],this.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,this.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame}return Object(b["a"])(t,[{key:"random",value:function(t,a){return Math.random()*(a-t)+t}},{key:"initBubble",value:function(t,a){var e=window.innerWidth,i=window.innerHeight,n=this.userOpts,s=this.random(n.light_min,n.light_max);this.bubble={x:this.random(0,e),y:this.random(0,i),radius:this.random(n.radius_min,n.radius_max),radiusChange:this.random(n.radius_add_min,n.radius_add_max),opacity:this.random(n.opacity_min,n.opacity_max),opacityChange:this.random(n.opacity_prev_min,n.opacity_prev_max),light:s,color:"hsl(".concat(a?t:this.random(0,360),",100%,").concat(s,"%)")}}},{key:"bubbling",value:function(t,a,e){!this.bubble&&this.initBubble(a,e);var i=this.bubble;t.fillStyle=i.color,t.globalAlpha=i.opacity,t.beginPath(),t.arc(i.x,i.y,i.radius,0,2*Math.PI,!0),t.closePath(),t.fill(),t.globalAlpha=1,i.opacity-=i.opacityChange,i.radius+=i.radiusChange,i.opacity<=0&&this.initBubble(a,e)}},{key:"createCanvas",value:function(){var t=this;this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.style.display="block",this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.canvas.style.position="fixed",this.canvas.style.top="0",this.canvas.style.left="0",this.canvas.style.zIndex="-1",document.onclick=function(t){t=t||window.event,j(t.clientX,t.clientY)},document.getElementById(this.userOpts.id).appendChild(this.canvas),window.onresize=function(){t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight},M=this.canvas,M.width=M.offsetWidth,M.height=M.offsetHeight,_=M.getContext("2d"),O=40,C=[],k=null,F=!1}},{key:"start",value:function(){var a=this,e=window.innerWidth,i=window.innerHeight;this.color+=.1,this.ctx.fillStyle="hsl(".concat(this.color,",100%,97%)"),this.ctx.fillRect(0,0,e,i),this.bubbleNum.length<this.userOpts.num&&Math.random()<this.userOpts.start_probability&&this.bubbleNum.push(new t),this.bubbleNum.forEach(function(t){return t.bubbling(a.ctx,a.color,a.userOpts.is_same_color)});var n=this.requestAnimationFrame;this.myReq=n(function(){return a.start()})}},{key:"destory",value:function(){var t=this.cancelAnimationFrame;t(this.myReq),window.onresize=null}}]),t}(),R=B;e("a927"),e("aaa4"),e("3a23"),e("c183"),e("5a48"),e("a38f"),e("200b"),e("5f33"),e("f91a"),e("a59e"),e("3914"),e("f10e"),e("ea65");var H=function t(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;if(!e)return i.scrollTop=a,a;var n=20,s=e/n,r=i.scrollTop,o=(a-r)/s,c=setInterval(function(){s>0?(s--,t(r+=o,null,i)):clearInterval(c)},n)},E=e("44f7"),P=function t(){var a=this;Object(v["a"])(this,t),Object(E["a"])(this,"init",function(){a.resize(),a.create(),a.loop()}),Object(E["a"])(this,"rand",function(t,a){return Math.random()*(a-t)+t}),Object(E["a"])(this,"hsla",function(t,a,e,i){return"hsla("+t+","+a+"%,"+e+"%,"+i+")"}),Object(E["a"])(this,"create",function(){a.sizeBase=a.startcw+a.ch,a.startcount=Math.floor(.3*a.sizeBase),a.starthue=a.rand(0,360),a.startopt={radiusMin:1,radiusMax:.04*a.sizeBase,blurMin:10,blurMax:.04*a.sizeBase,hueMin:a.starthue,hueMax:a.starthue+100,saturationMin:10,saturationMax:70,lightnessMin:20,lightnessMax:50,alphaMin:.1,alphaMax:.5},a.startctx1.clearRect(0,0,a.startcw,a.ch),a.startctx1.globalCompositeOperation="lighter";while(a.startcount--){var t=a.rand(a.startopt.radiusMin,a.startopt.radiusMax),e=a.rand(a.startopt.blurMin,a.startopt.blurMax),i=a.rand(0,a.startcw),n=a.rand(0,a.ch);a.starthue=a.rand(a.startopt.hueMin,a.startopt.hueMax),a.saturation=a.rand(a.startopt.saturationMin,a.startopt.saturationMax),a.lightness=a.rand(a.startopt.lightnessMin,a.startopt.lightnessMax),a.alpha=a.rand(a.startopt.alphaMin,a.startopt.alphaMax),a.startctx1.shadowColor=a.hsla(a.starthue,a.saturation,a.lightness,a.alpha),a.startctx1.shadowBlur=e,a.startctx1.beginPath(),a.startctx1.arc(i,n,t,0,a.starttwopi),a.startctx1.closePath(),a.startctx1.fill()}a.startparts.length=0;for(var s=0;s<Math.floor(.03*(a.startcw+a.ch));s++)a.startparts.push({radius:a.rand(1,.03*a.sizeBase),x:a.rand(0,a.startcw),y:a.rand(0,a.ch),angle:a.rand(0,a.starttwopi),vel:a.rand(.1,.5),tick:a.rand(0,1e4)})}),Object(E["a"])(this,"loop",function(){requestAnimationFrame(a.loop),a.startctx2.clearRect(0,0,a.startcw,a.ch),a.startctx2.globalCompositeOperation="source-over",a.startctx2.shadowBlur=0,a.startctx2.drawImage(a.startc1,0,0),a.startctx2.globalCompositeOperation="lighter";var t=a.startparts.length;a.startctx2.shadowBlur=15,a.startctx2.shadowColor="#fff";while(t--){var e=a.startparts[t];e.x+=Math.cos(e.angle)*e.vel,e.y+=Math.sin(e.angle)*e.vel,e.angle+=a.rand(-.05,.05),a.startctx2.beginPath(),a.startctx2.arc(e.x,e.y,e.radius,0,a.starttwopi),a.startctx2.fillStyle=a.hsla(0,0,100,.075+.05*Math.cos(.02*e.tick)),a.startctx2.fill(),e.x-e.radius>a.startcw&&(e.x=-e.radius),e.x+e.radius<0&&(e.x=a.startcw+e.radius),e.y-e.radius>a.ch&&(e.y=-e.radius),e.y+e.radius<0&&(e.y=a.ch+e.radius),e.tick++}}),Object(E["a"])(this,"resize",function(){a.startcw=a.startc1.width=a.startc2.width=window.innerWidth,a.ch=a.startc1.height=a.startc2.height=window.innerHeight-1,a.create()}),this.startc1=document.getElementById("c1"),this.startctx1=this.startc1.getContext("2d"),this.startc2=document.getElementById("c2"),this.startctx2=this.startc2.getContext("2d"),this.starttwopi=2*Math.PI,this.startparts=[],this.sizeBase,this.startcw,this.startopt,this.starthue,this.startcount,this.saturation,this.lightness,this.alpha,this.ch},q=P,z={name:"App",data:function(){return{startBox:null,backgroundBox:null,isEnterHead:!1,isEnterCon:!1,topScroll:0,pageHeight:0,percent:0,startLoading:!1,aPlayerBox:null}},mounted:function(){this.startBox=new q,this.startBox.init(),window.addEventListener("resize",this.startBox.resize),this.aPlayerBox=new APlayer({container:this.$refs.aplayer,autoplay:!0,audio:[{name:"生きていたんだよな",artist:"あいみょん",url:"http://music.163.com/song/media/outer/url?id=443875380.mp3",cover:"http://p2.music.126.net/QvGlOYCfXWx94a19_lmh5A==/3315027565433501.jpg?param=130y130"},{name:"那一天从梦中醒来",artist:"双笙 / 秋风MusiX",url:"http://music.163.com/song/media/outer/url?id=526680601.mp3",cover:"http://p1.music.126.net/OaEKnO8ycGQ-u_NRicA3sQ==/109951163094550225.jpg?param=130y130"},{name:"离骚( Cover 易烊千玺 )",artist:"薄荷er",url:"http://music.163.com/song/media/outer/url?id=1300985884.mp3",cover:"http://p2.music.126.net/zpGhF4kc9HzVAcnAT1p0rQ==/109951163453986797.jpg?param=130y130"},{name:"辞九门回忆",artist:"解忧草 / 冰幽",url:"http://music.163.com/song/media/outer/url?id=557640761.mp3",cover:"http://p1.music.126.net/uQLVFEdhKeooWFr0b6fCsA==/109951163282287179.jpg?param=130y130"},{name:"一抹桃花",artist:"珍哥",url:"http://music.163.com/song/media/outer/url?id=1313052387.mp3",cover:"http://p1.music.126.net/Aj1-l0RV4Yadf2Qfhb5CsA==/109951163573599888.jpg?param=130y130"},{name:"南下",artist:"徐海俏",url:"http://music.163.com/song/media/outer/url?id=414706021.mp3",cover:"http://p2.music.126.net/bgAQqsHMCHpnY5LlaF5XJg==/109951163093108696.jpg?param=130y130"}],fixed:!0})},watch:{startLoading:function(t){var a=this;t&&this.$nextTick(function(){a.backgroundBox=new R("background-box"),a.backgroundBox.createCanvas(),a.backgroundBox.start(),a.$refs.appBody.addEventListener("scroll",a.watchSrcoll)})}},methods:{watchSrcoll:function(t){this.pageHeight=this.$refs.appContent.innerHeight||this.$refs.appContent.clientHeight,this.topScroll=t.target.scrollTop,this.percent=o()(this.topScroll/this.pageHeight*100+8),t.target.scrollTop>0?(this.isEnterHead=!0,this.$Loading.update(this.percent)):(this.isEnterHead=!1,this.$Loading.destroy())},enterHead:function(){this.isEnterHead=!0},leaveHead:function(){this.isEnterHead=!1},backTop:function(){H(0,200,this.$refs.appBody)}},components:{Header:m}},S=z,$=(e("17f8"),Object(d["a"])(S,n,s,!1,null,"45758a6f",null)),I=$.exports,T=e("081a"),L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"home-content"}})},W=[],Q={name:"Home",data:function(){return{}},mounted:function(){}},N=Q,X=Object(d["a"])(N,L,W,!1,null,"beb25b5c",null),Y=X.exports;i["default"].use(T["a"]);var G=new T["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Y}]}),J=e("6587"),V=e.n(J);e("3747"),e("9a27"),e("2c92");i["default"].config.productionTip=!1,i["default"].use(V.a),new i["default"]({router:G,render:function(t){return t(I)}}).$mount("#app")},"7cd2":function(t,a,e){},"8b80":function(t,a,e){"use strict";var i=e("d2c1"),n=e.n(i);n.a},"9a27":function(t,a,e){},d2c1:function(t,a,e){}});
//# sourceMappingURL=app.e2eb9e4b.js.map