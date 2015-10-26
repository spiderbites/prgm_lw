<style>

/* This is the default Tooltipster theme (feel free to modify or duplicate and create multiple themes!): */
.tooltipster-default {
	border-radius: 5px; 
	border: 2px solid #000;
	background: #4c4c4c;
	color: #fff;
}

/* Use this next selector to style things like font-size and line-height: */
.tooltipster-default .tooltipster-content {
	font-family: Arial, sans-serif;
	font-size: 14px;
	line-height: 16px;
	padding: 8px 10px;
	overflow: hidden;
}

/* This next selector defines the color of the border on the outside of the arrow. This will automatically match the color and size of the border set on the main tooltip styles. Set display: none; if you would like a border around the tooltip but no border around the arrow */
.tooltipster-default .tooltipster-arrow .tooltipster-arrow-border {
	/* border-color: ... !important; */
}


/* If you're using the icon option, use this next selector to style them */
.tooltipster-icon {
	cursor: help;
	margin-left: 4px;
}








/* This is the base styling required to make all Tooltipsters work */
.tooltipster-base {
	padding: 0;
	font-size: 0;
	line-height: 0;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 9999999;
	pointer-events: none;
	width: auto;
	overflow: visible;
}
.tooltipster-base .tooltipster-content {
	overflow: hidden;
}


/* These next classes handle the styles for the little arrow attached to the tooltip. By default, the arrow will inherit the same colors and border as what is set on the main tooltip itself. */
.tooltipster-arrow {
	display: block;
	text-align: center;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
}
.tooltipster-arrow span, .tooltipster-arrow-border {
	display: block;
	width: 0; 
	height: 0;
	position: absolute;
}
.tooltipster-arrow-top span, .tooltipster-arrow-top-right span, .tooltipster-arrow-top-left span {
	border-left: 8px solid transparent !important;
	border-right: 8px solid transparent !important;
	border-top: 8px solid;
	bottom: -7px;
}
.tooltipster-arrow-top .tooltipster-arrow-border, .tooltipster-arrow-top-right .tooltipster-arrow-border, .tooltipster-arrow-top-left .tooltipster-arrow-border {
	border-left: 9px solid transparent !important;
	border-right: 9px solid transparent !important;
	border-top: 9px solid;
	bottom: -7px;
}

.tooltipster-arrow-bottom span, .tooltipster-arrow-bottom-right span, .tooltipster-arrow-bottom-left span {
	border-left: 8px solid transparent !important;
	border-right: 8px solid transparent !important;
	border-bottom: 8px solid;
	top: -7px;
}
.tooltipster-arrow-bottom .tooltipster-arrow-border, .tooltipster-arrow-bottom-right .tooltipster-arrow-border, .tooltipster-arrow-bottom-left .tooltipster-arrow-border {
	border-left: 9px solid transparent !important;
	border-right: 9px solid transparent !important;
	border-bottom: 9px solid;
	top: -7px;
}
.tooltipster-arrow-top span, .tooltipster-arrow-top .tooltipster-arrow-border, .tooltipster-arrow-bottom span, .tooltipster-arrow-bottom .tooltipster-arrow-border {
	left: 0;
	right: 0;
	margin: 0 auto;
}
.tooltipster-arrow-top-left span, .tooltipster-arrow-bottom-left span {
	left: 6px;
}
.tooltipster-arrow-top-left .tooltipster-arrow-border, .tooltipster-arrow-bottom-left .tooltipster-arrow-border {
	left: 5px;
}
.tooltipster-arrow-top-right span,  .tooltipster-arrow-bottom-right span {
	right: 6px;
}
.tooltipster-arrow-top-right .tooltipster-arrow-border, .tooltipster-arrow-bottom-right .tooltipster-arrow-border {
	right: 5px;
}
.tooltipster-arrow-left span, .tooltipster-arrow-left .tooltipster-arrow-border {
	border-top: 8px solid transparent !important;
	border-bottom: 8px solid transparent !important; 
	border-left: 8px solid;
	top: 50%;
	margin-top: -7px;
	right: -7px;
}
.tooltipster-arrow-left .tooltipster-arrow-border {
	border-top: 9px solid transparent !important;
	border-bottom: 9px solid transparent !important; 
	border-left: 9px solid;
	margin-top: -8px;
}
.tooltipster-arrow-right span, .tooltipster-arrow-right .tooltipster-arrow-border {
	border-top: 8px solid transparent !important;
	border-bottom: 8px solid transparent !important; 
	border-right: 8px solid;
	top: 50%;
	margin-top: -7px;
	left: -7px;
}
.tooltipster-arrow-right .tooltipster-arrow-border {
	border-top: 9px solid transparent !important;
	border-bottom: 9px solid transparent !important; 
	border-right: 9px solid;
	margin-top: -8px;
}


/* Some CSS magic for the awesome animations - feel free to make your own custom animations and reference it in your Tooltipster settings! */

.tooltipster-fade {
	opacity: 0;
	-webkit-transition-property: opacity;
	-moz-transition-property: opacity;
	-o-transition-property: opacity;
	-ms-transition-property: opacity;
	transition-property: opacity;
}
.tooltipster-fade-show {
	opacity: 1;
}

.tooltipster-grow {
	-webkit-transform: scale(0,0);
	-moz-transform: scale(0,0);
	-o-transform: scale(0,0);
	-ms-transform: scale(0,0);
	transform: scale(0,0);
	-webkit-transition-property: -webkit-transform;
	-moz-transition-property: -moz-transform;
	-o-transition-property: -o-transform;
	-ms-transition-property: -ms-transform;
	transition-property: transform;
	-webkit-backface-visibility: hidden;
}
.tooltipster-grow-show {
	-webkit-transform: scale(1,1);
	-moz-transform: scale(1,1);
	-o-transform: scale(1,1);
	-ms-transform: scale(1,1);
	transform: scale(1,1);
	-webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
	-webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	-moz-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	-ms-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	-o-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15);
}

.tooltipster-swing {
	opacity: 0;
	-webkit-transform: rotateZ(4deg);
	-moz-transform: rotateZ(4deg);
	-o-transform: rotateZ(4deg);
	-ms-transform: rotateZ(4deg);
	transform: rotateZ(4deg);
	-webkit-transition-property: -webkit-transform, opacity;
	-moz-transition-property: -moz-transform;
	-o-transition-property: -o-transform;
	-ms-transition-property: -ms-transform;
	transition-property: transform;
}
.tooltipster-swing-show {
	opacity: 1;
	-webkit-transform: rotateZ(0deg);
	-moz-transform: rotateZ(0deg);
	-o-transform: rotateZ(0deg);
	-ms-transform: rotateZ(0deg);
	transform: rotateZ(0deg);
	-webkit-transition-timing-function: cubic-bezier(0.230, 0.635, 0.495, 1);
	-webkit-transition-timing-function: cubic-bezier(0.230, 0.635, 0.495, 2.4); 
	-moz-transition-timing-function: cubic-bezier(0.230, 0.635, 0.495, 2.4); 
	-ms-transition-timing-function: cubic-bezier(0.230, 0.635, 0.495, 2.4); 
	-o-transition-timing-function: cubic-bezier(0.230, 0.635, 0.495, 2.4); 
	transition-timing-function: cubic-bezier(0.230, 0.635, 0.495, 2.4);
}

.tooltipster-fall {
	top: 0;
	-webkit-transition-property: top;
	-moz-transition-property: top;
	-o-transition-property: top;
	-ms-transition-property: top;
	transition-property: top;
	-webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
	-webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	-moz-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	-ms-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	-o-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
}
.tooltipster-fall-show {
}
.tooltipster-fall.tooltipster-dying {
	-webkit-transition-property: all;
	-moz-transition-property: all;
	-o-transition-property: all;
	-ms-transition-property: all;
	transition-property: all;
	top: 0px !important;
	opacity: 0;
}

.tooltipster-slide {
	left: -40px;
	-webkit-transition-property: left;
	-moz-transition-property: left;
	-o-transition-property: left;
	-ms-transition-property: left;
	transition-property: left;
	-webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
	-webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	-moz-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	-ms-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	-o-transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15); 
	transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.15);
}
.tooltipster-slide.tooltipster-slide-show {
}
.tooltipster-slide.tooltipster-dying {
	-webkit-transition-property: all;
	-moz-transition-property: all;
	-o-transition-property: all;
	-ms-transition-property: all;
	transition-property: all;
	left: 0px !important;
	opacity: 0;
}


/* CSS transition for when contenting is changing in a tooltip that is still open. The only properties that will NOT transition are: width, height, top, and left */
.tooltipster-content-changing {
	opacity: 0.5;
	-webkit-transform: scale(1.1, 1.1);
	-moz-transform: scale(1.1, 1.1);
	-o-transform: scale(1.1, 1.1);
	-ms-transform: scale(1.1, 1.1);
	transform: scale(1.1, 1.1);
}

 .tooltipster-default .tooltipster-content {
	font-family: 'Open Sans', sans-serif;
}
.tooltipster-default .tooltipster-content img {
	float: left;
	margin-right: 10px;
	border: 2px solid #000;
}
.tooltipster-default .tooltipster-content p {
	margin: 0;
}
.tooltipster-default .tooltipster-content a {
	color: #fff;
	border-bottom: 1px solid rgba(255,255,255,0.4);
}
.tooltipster-default .tooltipster-content a:hover {
	color: #fff;
	border-bottom: 1px solid rgba(255,255,255,1);
} 
  
  
  </style>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>

<script type="text/javascript">

/* Tooltipster v3.2.6 */;(function(e,t,n){function s(t,n){this.bodyOverflowX;this.callbacks={hide:[],show:[]};this.checkInterval=null;this.Content;this.$el=e(t);this.$elProxy;this.elProxyPosition;this.enabled=true;this.options=e.extend({},i,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.Status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this._init()}function o(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function f(){return!a&&u}function l(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",i={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,debug:true,delay:200,minWidth:0,maxWidth:null,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,multiple:false,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};s.prototype={_init:function(){var t=this;if(n.querySelector){if(t.options.content!==null){t._content_set(t.options.content)}else{var r=t.$el.attr("title");if(typeof r==="undefined")r=null;t._content_set(r)}var i=t.options.functionInit.call(t.$el,t.$el,t.Content);if(typeof i!=="undefined")t._content_set(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!u&&t.options.iconDesktop||u&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)}else{if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)}else{t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=true;t._show()}}).on("mouseleave."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(u&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t._showNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!f()||t.options.touchDevices){t._show()}})}}},_show:function(){var e=this;if(e.Status!="shown"&&e.Status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e._showNow()}},e.options.delay)}else e._showNow()}},_showNow:function(n){var r=this;r.options.functionBefore.call(r.$el,r.$el,function(){if(r.enabled&&r.Content!==null){if(n)r.callbacks.show.push(n);r.callbacks.hide=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;if(r.options.onlyOne){e(".tooltipstered").not(r.$el).each(function(t,n){var r=e(n),i=r.data("tooltipster-ns");e.each(i,function(e,t){var n=r.data(t),i=n.status(),s=n.option("autoClose");if(i!=="hidden"&&i!=="disappearing"&&s){n.hide()}})})}var i=function(){r.Status="shown";e.each(r.callbacks.show,function(e,t){t.call(r.$el)});r.callbacks.show=[]};if(r.Status!=="hidden"){var s=0;if(r.Status==="disappearing"){r.Status="appearing";if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+r.options.animation+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.stop().fadeIn(i)}}else if(r.Status==="shown"){i()}}else{r.Status="appearing";var s=r.options.speed;r.bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var o="tooltipster-"+r.options.animation,a="-webkit-transition-duration: "+r.options.speed+"ms; -webkit-animation-duration: "+r.options.speed+"ms; -moz-transition-duration: "+r.options.speed+"ms; -moz-animation-duration: "+r.options.speed+"ms; -o-transition-duration: "+r.options.speed+"ms; -o-animation-duration: "+r.options.speed+"ms; -ms-transition-duration: "+r.options.speed+"ms; -ms-animation-duration: "+r.options.speed+"ms; transition-duration: "+r.options.speed+"ms; animation-duration: "+r.options.speed+"ms;",f=r.options.minWidth?"min-width:"+Math.round(r.options.minWidth)+"px;":"",c=r.options.maxWidth?"max-width:"+Math.round(r.options.maxWidth)+"px;":"",h=r.options.interactive?"pointer-events: auto;":"";r.$tooltip=e('<div class="tooltipster-base '+r.options.theme+'" style="'+f+" "+c+" "+h+" "+a+'"><div class="tooltipster-content"></div></div>');if(l())r.$tooltip.addClass(o);r._content_insert();r.$tooltip.appendTo("body");r.reposition();r.options.functionReady.call(r.$el,r.$el,r.$tooltip);if(l()){r.$tooltip.addClass(o+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.css("display","none").fadeIn(r.options.speed,i)}r._interval_set();e(t).on("scroll."+r.namespace+" resize."+r.namespace,function(){r.reposition()});if(r.options.autoClose){e("body").off("."+r.namespace);if(r.options.trigger=="hover"){if(u){setTimeout(function(){e("body").on("touchstart."+r.namespace,function(){r.hide()})},0)}if(r.options.interactive){if(u){r.$tooltip.on("touchstart."+r.namespace,function(e){e.stopPropagation()})}var p=null;r.$elProxy.add(r.$tooltip).on("mouseleave."+r.namespace+"-autoClose",function(){clearTimeout(p);p=setTimeout(function(){r.hide()},r.options.interactiveTolerance)}).on("mouseenter."+r.namespace+"-autoClose",function(){clearTimeout(p)})}else{r.$elProxy.on("mouseleave."+r.namespace+"-autoClose",function(){r.hide()})}}else if(r.options.trigger=="click"){setTimeout(function(){e("body").on("click."+r.namespace+" touchstart."+r.namespace,function(){r.hide()})},0);if(r.options.interactive){r.$tooltip.on("click."+r.namespace+" touchstart."+r.namespace,function(e){e.stopPropagation()})}}}}if(r.options.timer>0){r.timerHide=setTimeout(function(){r.timerHide=null;r.hide()},r.options.timer+s)}}})},_interval_set:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.Status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.Status=="shown"||t.Status=="appearing")t.hide();t._interval_cancel()}else{if(t.options.positionTracker){var n=t._repositionInfo(t.$elProxy),r=false;if(o(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(o(n.position,t.elProxyPosition.position))r=true}else{if(o(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.reposition()}}}},200)},_interval_cancel:function(){clearInterval(this.checkInterval);this.checkInterval=null},_content_set:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.Content=e},_content_insert:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.Content==="string"&&!e.options.contentAsHTML){t.text(e.Content)}else{t.empty().append(e.Content)}},_update:function(e){var t=this;t._content_set(e);if(t.Content!==null){if(t.Status!=="hidden"){t._content_insert();t.reposition();if(t.options.updateAnimation){if(l()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)}else{t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.Status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}}else{t.hide()}},_repositionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},hide:function(n){var r=this;if(n)r.callbacks.hide.push(n);r.callbacks.show=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;var i=function(){e.each(r.callbacks.hide,function(e,t){t.call(r.$el)});r.callbacks.hide=[]};if(r.Status=="shown"||r.Status=="appearing"){r.Status="disappearing";var s=function(){r.Status="hidden";if(typeof r.Content=="object"&&r.Content!==null){r.Content.detach()}r.$tooltip.remove();r.$tooltip=null;e(t).off("."+r.namespace);e("body").off("."+r.namespace).css("overflow-x",r.bodyOverflowX);e("body").off("."+r.namespace);r.$elProxy.off("."+r.namespace+"-autoClose");r.options.functionAfter.call(r.$el,r.$el);i()};if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-"+r.options.animation+"-show").addClass("tooltipster-dying");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(s)}else{r.$tooltip.stop().fadeOut(r.options.speed,s)}}else if(r.Status=="hidden"){i()}return r},show:function(e){this._showNow(e);return this},update:function(e){return this.content(e)},content:function(e){if(typeof e==="undefined"){return this.Content}else{this._update(e);return this}},reposition:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n._repositionInfo(n.$elProxy);var r=null,i=e(t).width(),s=n.elProxyPosition,o=n.$tooltip.outerWidth(false),u=n.$tooltip.innerWidth()+1,a=n.$tooltip.outerHeight(false);if(n.$elProxy.is("area")){var f=n.$elProxy.attr("shape"),l=n.$elProxy.parent().attr("name"),c=e('img[usemap="#'+l+'"]'),h=c.offset().left,p=c.offset().top,d=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(f=="circle"){var v=parseInt(d[0]),m=parseInt(d[1]),g=parseInt(d[2]);s.dimension.height=g*2;s.dimension.width=g*2;s.offset.top=p+m-g;s.offset.left=h+v-g}else if(f=="rect"){var v=parseInt(d[0]),m=parseInt(d[1]),y=parseInt(d[2]),b=parseInt(d[3]);s.dimension.height=b-m;s.dimension.width=y-v;s.offset.top=p+m;s.offset.left=h+v}else if(f=="poly"){var w=[],E=[],S=0,x=0,T=0,N=0,C="even";for(var k=0;k<d.length;k++){var L=parseInt(d[k]);if(C=="even"){if(L>T){T=L;if(k===0){S=T}}if(L<S){S=L}C="odd"}else{if(L>N){N=L;if(k==1){x=N}}if(L<x){x=L}C="even"}}s.dimension.height=N-x;s.dimension.width=T-S;s.offset.top=p+x;s.offset.left=h+S}else{s.dimension.height=c.outerHeight(false);s.dimension.width=c.outerWidth(false);s.offset.top=p;s.offset.left=h}}var A=0,O=0,M=0,_=parseInt(n.options.offsetY),D=parseInt(n.options.offsetX),P=n.options.position;function H(){var n=e(t).scrollLeft();if(A-n<0){r=A-n;A=n}if(A+o-n>i){r=A-(i+n-o);A=i+n-o}}function B(n,r){if(s.offset.top-e(t).scrollTop()-a-_-12<0&&r.indexOf("top")>-1){P=n}if(s.offset.top+s.dimension.height+a+12+_>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){P=n;M=s.offset.top-a-_-12}}if(P=="top"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left+D-j/2;M=s.offset.top-a-_-12;H();B("bottom","top")}if(P=="top-left"){A=s.offset.left+D;M=s.offset.top-a-_-12;H();B("bottom-left","top-left")}if(P=="top-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top-a-_-12;H();B("bottom-right","top-right")}if(P=="bottom"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left-j/2+D;M=s.offset.top+s.dimension.height+_+12;H();B("top","bottom")}if(P=="bottom-left"){A=s.offset.left+D;M=s.offset.top+s.dimension.height+_+12;H();B("top-left","bottom-left")}if(P=="bottom-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top+s.dimension.height+_+12;H();B("top-right","bottom-right")}if(P=="left"){A=s.offset.left-D-o-12;O=s.offset.left+D+s.dimension.width+12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A<0&&O+o>i){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=o+A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);A=s.offset.left-D-q-12-I;F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A<0){A=s.offset.left+D+s.dimension.width+12;r="left"}}if(P=="right"){A=s.offset.left+D+s.dimension.width+12;O=s.offset.left-D-o-12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A+o>i&&O<0){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=i-A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A+o>i){A=s.offset.left-D-o-12;r="right"}}if(n.options.arrow){var R="tooltipster-arrow-"+P;if(n.options.arrowColor.length<1){var U=n.$tooltip.css("background-color")}else{var U=n.options.arrowColor}if(!r){r=""}else if(r=="left"){R="tooltipster-arrow-right";r=""}else if(r=="right"){R="tooltipster-arrow-left";r=""}else{r="left:"+Math.round(r)+"px;"}if(P=="top"||P=="top-left"||P=="top-right"){var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}else if(P=="bottom"||P=="bottom-left"||P=="bottom-right"){var z=parseFloat(n.$tooltip.css("border-top-width")),W=n.$tooltip.css("border-top-color")}else if(P=="left"){var z=parseFloat(n.$tooltip.css("border-right-width")),W=n.$tooltip.css("border-right-color")}else if(P=="right"){var z=parseFloat(n.$tooltip.css("border-left-width")),W=n.$tooltip.css("border-left-color")}else{var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}if(z>1){z++}var X="";if(z!==0){var V="",J="border-color: "+W+";";if(R.indexOf("bottom")!==-1){V="margin-top: -"+Math.round(z)+"px;"}else if(R.indexOf("top")!==-1){V="margin-bottom: -"+Math.round(z)+"px;"}else if(R.indexOf("left")!==-1){V="margin-right: -"+Math.round(z)+"px;"}else if(R.indexOf("right")!==-1){V="margin-left: -"+Math.round(z)+"px;"}X='<span class="tooltipster-arrow-border" style="'+V+" "+J+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var K='<div class="'+R+' tooltipster-arrow" style="'+r+'">'+X+'<span style="border-color:'+U+';"></span></div>';n.$tooltip.append(K)}n.$tooltip.css({top:Math.round(M)+"px",left:Math.round(A)+"px"})}return n},enable:function(){this.enabled=true;return this},disable:function(){this.hide();this.enabled=false;return this},destroy:function(){var t=this;t.hide();if(t.$el[0]!==t.$elProxy[0])t.$elProxy.remove();t.$el.removeData(t.namespace).off("."+t.namespace);var n=t.$el.data("tooltipster-ns");if(n.length===1){var r=typeof t.Content==="string"?t.Content:e("<div></div>").append(t.Content).html();t.$el.removeClass("tooltipstered").attr("title",r).removeData(t.namespace).removeData("tooltipster-ns").off("."+t.namespace)}else{n=e.grep(n,function(e,n){return e!==t.namespace});t.$el.data("tooltipster-ns",n)}return t},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:undefined},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:undefined},option:function(e,t){if(typeof t=="undefined")return this.options[e];else{this.options[e]=t;return this}},status:function(){return this.Status}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(i,t[1]);break;default:n=false;break}if(n)return true;else return this}else{return this}}else{if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster-ns"),i=n?e(this).data(n[0]):null;if(i){if(typeof i[t[0]]==="function"){var s=i[t[0]](t[1],t[2])}else{throw new Error('Unknown method .tooltipster("'+t[0]+'")')}if(s!==i){r=s;return false}}else{throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this}else{var o=[],u=t[0]&&typeof t[0].multiple!=="undefined",a=u&&t[0].multiple||!u&&i.multiple,f=t[0]&&typeof t[0].debug!=="undefined",l=f&&t[0].debug||!f&&i.debug;this.each(function(){var n=false,r=e(this).data("tooltipster-ns"),i=null;if(!r){n=true}else if(a){n=true}else if(l){console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.')}if(n){i=new s(this,t[0]);if(!r)r=[];r.push(i.namespace);e(this).data("tooltipster-ns",r);e(this).data(i.namespace,i)}o.push(i)});if(a)return o;else return this}}};var u=!!("ontouchstart"in t);var a=false;e("body").one("mousemove",function(){a=true})})(jQuery,window,document);


</script>

<script>
	$(document).ready(function() {
		$('.tooltip').tooltipster();
	});	$(document).ready(function() {
		$('#goinsteadydjs').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/546f856ce4b0c97cacdde6c5/1416594797101/goinsteady.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Goin' Steady DJs</strong><br />11:00 - 2:00<br /><em>The Bristol</em><br /><p><span>The story of Goin’ Steady belongs to a long tradition of DIY parties that popped up in Toronto as an alternative to the mainstream club scene in the early 2000′s. Goin’ Steady was created by three friends looking to create a different kind of party atmosphere; one that would capture the raw energy of the golden age of youth music without relying on tired retro clichés. Since Wolfgang Nessel’s departure in 2007, Matt Cully and Louis Calabro have continued to turn audiences on to the best of old fashioned beat music; from jump blues to doo-wop, swing to calypso, girl groups to surf and the weird and unseen world of American and international rock music.</span></p><p><strong>Music:</strong><span>&nbsp;</span><a href=http://www.goinsteady.ca>Website</a>&nbsp;/&nbsp;<a target=_blank href=https://www.facebook.com/goinsteadydjs>Facebook</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#yesyesyalldjs').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/54774ed5e4b0464e56cde6e7/1417105109803/yesyes.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Yes Yes Y'all DJs</strong><br />11:00 - 2:00<br /><em>Apartment</em><br /><p>YES YES Y'ALL is a queer hip hop/dancehall/rnb jam and they're running House Party.</p><p><strong>DJs:&nbsp;</strong><a target=_blank href=https://twitter.com/yesyesyall416>Twitter</a>&nbsp;/&nbsp;<a target=_blank href=https://www.facebook.com/groups/52141184423>Facebook</a></p><p> </p><p> </p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#djcellmemory').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/54774ee6e4b04456c81d8713/1417105126169/cell_memory.jpg?format=300w' border=1/><p style='text-align:left;'><strong>DJ Cell Memory</strong><br />1:15 - 2:00<br /><em>Main Stage</em><br /><p>Keeping things going late into the night.</p><p><strong>DJs: </strong><a href=https://soundcloud.com/cell-memory>Soundcloud</a>&nbsp;/&nbsp;<a target=_blank href=https://www.facebook.com/cellmemory>Facebook</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#manmadehill').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/547298b2e4b073fd08ea32de/1416796338787/?format=300w' border=1/><p style='text-align:left;'><strong>Man Made Hill</strong><br />1:00 - 1:30<br /><em>Conversation Room</em><br /><p><span>Man Made Hill’s extraterrestrial adolescent funk crams a chaos pouch with leather-gloved fistfuls of purple snow.”&nbsp;</span><strong>- Jesse Locke/<em>Weird Canada</em></strong></p><p><strong>Music:&nbsp;</strong><a target=_blank href=https://www.facebook.com/pages/Man-Made-Hill/404478872925516>Facebook</a>&nbsp;/&nbsp;<a target=_blank href=https://myspace.com/llihedamnam>MySpace</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#seannicholassavage').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/547298f9e4b073044c15ec42/1416796409701/?format=300w' border=1/><p style='text-align:left;'><strong>Sean Nicholas Savage</strong><br />12:30 - 1:15<br /><em>Main Stage</em><br /><p>Sean Nicholas Savage is a Canadian Singer and Balladeer. In 2014 he released&nbsp;<em>Bermuda Waterfall</em>. Once a staple spectacle performance in Montreal’s all night illegal party scene, Savage has since taken to consistent touring and producing wherever he may be, in the past two years. Throughout Europe and North America, his dates vary from subdued solo performances to full band power ballad shows and in between, each incarnation renowned as captivating and inspirational.</p><p><strong style=background-color:rgba(255, 255, 255, 0); line-height:1.68em>Music:&nbsp;</strong><a target=_blank style=line-height: 1.68em; background-color: rgba(255, 255, 255, 0); href=http://www.seannicholassavage.com>Website</a><span style=background-color:rgba(255, 255, 255, 0); line-height:1.68em> /&nbsp;</span><a target=_blank style=line-height: 1.68em; background-color: rgba(255, 255, 255, 0); href=https://www.facebook.com/pages/Sean-Nicholas-Savage/193104860732288>Facebook</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#audiopollination').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/546f8528e4b0c97cacdde598/1416594731658/?format=300w' border=1/><p style='text-align:left;'><strong>Audiopollination</strong><br />11:00 - 1:00<br /><em>Blk Box</em><br /><p>Audiopollination is a monthly&nbsp;<a target=_blank href=http://www.somewherethere.org>Somewhere There</a>&nbsp;series in association with&nbsp;<a target=_blank href=http://arraymusic.com>Array Music</a>&nbsp;featuring a smorgasbord of spontaneous music and visuals. Dec 12th Audiopollination takes brings their improvised bonanza to Long Winter.</p><p><strong>Music:&nbsp;</strong><a href=http://audiopollination.ca>Website</a>&nbsp;/&nbsp;<a target=_blank href=https://www.facebook.com/audiopollinationtoronto>Facebook</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#wronghole').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/54729922e4b08d2565e195a9/1416796450482/?format=300w' border=1/><p style='text-align:left;'><strong>Wrong Hole</strong><br />12:00 - 12:30<br /><em>Conversation Room</em><br /><p dir=ltr><span>Wrong Hole started with Andrew and Nick trying to start a two piece because they wanted the option of taking the bus to&nbsp;shows. Soon after, Jon joined and now they sound like what they're supposed to: a scientifically sloppy and idiotic grouping of fun noises. Debut LP&nbsp;</span><em>2012</em><span>&nbsp;out on Pleasence in North America and P-Trash/Cut The Cord/Prugelprinz in Europe.</span></p><p><strong>Music:&nbsp;</strong><a target=_blank href=https://www.facebook.com/wrongholetoronto>Facebook&nbsp;</a>/&nbsp;<a target=_blank href=http://wrongholemusic.bandcamp.com>Bandcamp</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#armygirls').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/546f842ae4b06b70fedd411d/1416594470242/?format=300w' border=1/><p style='text-align:left;'><strong>Army Girls</strong><br />11:30 - 12:00<br /><em>Main Stage</em><br /><p dir=ltr><span>Army Girls are a Toronto based two piece band. Andy Smith and Carmen Elle began collaborating in early 2010, after playing&nbsp;in numerous bands. Their debut EP is&nbsp;</span><em>Close To The Bone</em><span>&nbsp;(Blocks Recording Club).</span></p><p><strong>Music:&nbsp;</strong><a target=_blank href=https://www.facebook.com/armygirlsmusic>Facebook</a><span>&nbsp;/&nbsp;</span><a target=_blank href=http://armygirls.bandcamp.com>Bandcamp</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#droid').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/548a0899e4b0a89689917bd8/1418332313839/droid.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Droid</strong><br />11:00 - 11:30<br /><em>Conversation Room</em><br /><p>Toronto metal</p><p><strong>Music:&nbsp;</strong><a target=_blank href=https://www.facebook.com/DroidDroidDroid>Facebook</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#thelonelyparade').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/5472988ae4b01d352463faf0/1416796299027/?format=300w' border=1/><p style='text-align:left;'><strong>The Lonely Parade</strong><br />10:30 - 11:00<br /><em>Main Stage</em><br /><p>Peterborough's the Lonely Parade are a group that many peg to be wise beyond their years, making music with strong elements of urgency and excitement. Making waves in their hometown through getting their start at Rock Camp for Girls Peterborough, it's a wave they continued to ride through writing, recording, and performing in their city. The alt-rock three-piece were named the recipients of the Peterborough Folk Festival's Emerging Artist award, serving as a sign of things to come from their work.&nbsp;<strong>- Calum Slingerland/<em>Exclaim!</em></strong></p><p><strong>Music:&nbsp;</strong><a target=_blank href=http://thelonelyparade.com>Website</a> /&nbsp;<a target=_blank href=https://www.facebook.com/thelonelyparade>Facebook</a>&nbsp;/&nbsp;<a target=_blank href=https://thelonelyparade.bandcamp.com>Bandcamp</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#wish').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/5472990ee4b087a17997881d/1416796430729/?format=300w' border=1/><p style='text-align:left;'><strong>Wish</strong><br />10:00 - 10:30<br /><em>Conversation Room</em><br /><p>Wish is spawned from the mind of 23 year old Kyle Connolly. Having accumulated a wealth of material in the past few years while recording and performing in Milk Lines, Breeze, and Beliefs, Kyle assembled a line-up of musicians and began recording several volumes of his own work at Toronto’s Candle Recording Studio. Joining Kyle are Peter Gosling (Decades, Lobby) on drums, Emily Bitze (Milk Lines) on bass, and long time friend/musical collaborator Josh Korody (Beliefs, Breeze) on guitar.</p><p><strong>Music:&nbsp;</strong><a target=_blank href=https://www.facebook.com/pages/WISH/208104219342315>Facebook</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#longnightwithvanessadunn').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/54774ec2e4b0464e56cde6b1/1417105091050/long_night.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Long Night with Vanessa Dunn</strong><br />9:30 - 10:30<br /><em>Blk Box</em><br /><p>This month LONG NIGHT is being guest-hosted by Vanessa Dunn of <a href=http://vaghalen.com>Vag Halen</a>.&nbsp;The all-female lineup of guests include: singer/performer <a target=_blank href=http://bonjay.net>Alanna Bonjay Stuart</a>, singer <a target=_blank href=http://lidopimienta1.bandcamp.com>Lido Pimienta</a> and dancer <a target=_blank href=http://www.ariaevans.net>Aria Evans</a>. Plus house band <a target=_blank href=http://thebicycles.bandcamp.com>The Bicycles</a>!</p><p><strong>Talk Show</strong></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#benkaminochristopherwillis').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/54774ed0e4b0464e56cde6da/1417105104603/benkamino.jpeg?format=300w' border=1/><p style='text-align:left;'><strong>Ben Kamino & Christopher Willis</strong><br />9:30 - 10:30<br /><em>Apartment</em><br /><p><em>Dark. Meaningless. Touch.</em> A dance towards a space beyond togetherness. Kamino &amp; Willes invite you [through-touch] into their public research towards a scenography of feeling.</p><p><strong>Dance:</strong>&nbsp;<a target=_blank href=http://www.dwyc.ca/benjamin-kamino>Website</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#seanconway').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/547298cfe4b08b96ee5c856a/1416796367761/?format=300w' border=1/><p style='text-align:left;'><strong>Sean Conway</strong><br />9:30 - 10:00<br /><em>Main Stage</em><br /><p><span>Sean Conway is a singer-songwriter from Curve Lake First Nation, residing in Peterborough, Ontario. An avid musical explorer, he effortlessly&nbsp;blurs the line between classic sounds of '60s-era country music, '70s Brit-pop and doo-wop rock 'n' roll with his delicate eye for detail, all the while embracing his spontaneous nature as an entertainer and musician – constantly challenging himself as an artist and performer.&nbsp;</span></p><p><strong>Music:&nbsp;</strong><a target=_blank href=https://www.facebook.com/seanconwaymusic>Facebook</a>&nbsp;/<a target=_blank href=http://seanconway.bandcamp.com>&nbsp;Bandcamp</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#antivibes').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/546f8407e4b05061212fe5a0/1416594440135/?format=300w' border=1/><p style='text-align:left;'><strong>Anti-Vibes</strong><br />9:00 - 9:30<br /><em>Conversation Room</em><br /><p><span>[Anti-Vibes] features Claire Whaatever on vocals, Sean Kennedy on guitar, Cam Hulbert on bass, and Chloe Wilson on drums. The band embodies a pre-</span><em>Damaged</em><span>&nbsp;era Black Flag … [and] also employ some free spirit noise in the vein of Rudimentary Peni. The sum results in a heavy and punishing punk beat that backs unique twists on some traditional punk themes.”&nbsp;</span><strong>-&nbsp;<em>Equalizing-X-Distort</em></strong></p><p><strong>Music:&nbsp;</strong><a target=_blank href=https://www.facebook.com/antivibes>Facebook</a><span>&nbsp;/&nbsp;</span><a target=_blank href=http://antivibes.bandcamp.com>Bandcamp</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#animalia').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/546f83c2e4b0e1a9e2312cbe/1416594370903/?format=300w' border=1/><p style='text-align:left;'><strong>Animalia</strong><br />8:30 - 9:00<br /><em>Main Stage</em><br /><p><span>ANIMALIA is a dark electro artist based in Toronto. Her music sways with the use of thumping beats and astral synths. Her quirky voice belts out haunting melodies, while she takes up the stage with her aggressively energetic performance.</span></p><p><strong>Music: </strong><a href=http://www.animalia-music.com>Website</a>&nbsp;/<strong>&nbsp;</strong><a target=_blank href=https://www.facebook.com/music.animalia>Facebook</a><span>&nbsp;/&nbsp;</span><a target=_blank href=http://animalia.bandcamp.com>Bandcamp</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#glennobrienthetvpartystory').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/5485ee9de4b0e6613e2ca91a/1418063517854/tvparty.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Glenn O'Brien & The TV Party Story</strong><br />7:30 - 9:00<br /><em>Blk Box</em><br /><p><em>Documentary Film. </em>&nbsp;From 1978 to 1982, Glenn O'Brien hosted a New York city public access cable TV show called TV Party. Co-hosted by Chris Stein, from Blondie, and directed by filmmaker Amos Poe, the hour long show took television where it had never gone before: to the edge of civility and sub-realism as Glenn would put it. Walter Steding and his TV Party Orchestra provided a musical accompaniment to the madness at hand, and many artists and musicians, from The Clash, Nile Rodgers, Jean-Michel Basquiat, David Bryne and Arto Lindsey were regular guests. It was the cocktail party that could be a political party.<br /><br />With 80 hours of disintegrating 3/4 inch videotape as a starting point, we tracked down the trend setting participants still living today and found out what they remember of the period and how the show influenced their lives. This, combined with clips from the orginal show, became the documentary TV Party.</p><p><strong>Film:&nbsp;</strong><a target=_blank href=https://vimeo.com/20379034>Trailer</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#iris').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/54729a5be4b02c31572ed354/1416796763366/?format=300w' border=1/><p style='text-align:left;'><strong>Iris</strong><br />8:00 - 8:30<br /><em>Conversation Room</em><br /><p>A shoegaze band.</p><p><strong>Music: </strong><a href=https://www.facebook.com/irissband>Facebook</a>&nbsp;/ <a href=http://www.iriss.bandcamp.com>Bandcamp</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#tessadanielles').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/54736367e4b0866193a0e297/1416848232688/?format=300w' border=1/><p style='text-align:left;'><strong>Tessa Danielles</strong><br />All Night<br /><em>Stairwell</em><br /><p><span>Tessa Danielles</span><span>&nbsp;is a child of the woods and a dweller of city. She likes music and drawing. You can see her work at&nbsp;<a target=_blank href=http://tessadanielles.tumblr.com>tessadanielles.tumblr.com</a>.</span></p><p><strong>Art:&nbsp;</strong><a target=_blank href=http://tessadanielles.tumblr.com>Website</a></p><p> </p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#hughmater').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/54736280e4b0866193a0de4a/1416848001282/hugh-mater.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Hugh Mater</strong><br />All Night<br /><em>Conversation Room</em><br /><p dir=ltr>Hugh Mater works in sculpture, paint and print. He graduated from NSCAD University with a Bachelor of Fine Art in Halifax NS, where he exhibited his “New Paintings” show at Anna Leonowens Gallery in the spring of 2013. He is a regular contributor to various publications such as GRAY magazine from Vancouver and Go Home Print in Toronto and self publishes small-press comics, zines and artist books from time to time.</p><p><strong>Art:</strong>&nbsp;<a target=_blank href=http://hughmater.blogspot.ca>Website</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#danielrotzstain').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/54774d19e4b0a3a6c5b6fe5b/1417104666030/daniel.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Daniel Rotzstain</strong><br />All Night<br /><em>Studio 3</em><br /><p><em>Geomancy.</em>&nbsp;<span>Daniel Rotsztain&nbsp;is the Urban Geographer. He is a writer, artist and cartographer trying to untangle the threads of Toronto’s history, geology, ecology and culture. What can you learn about yourself from overlaying these threads with the pathways of your life? Stop by Geomancy to find out.</span></p><p><strong>Art:&nbsp;</strong><a target=_blank href=https://theurbangeographer.wordpress.com>Website</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#longwinterarcade').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/548a50f3e4b0233b56ae2d9b/1418350836000/arcade.jpeg?format=300w' border=1/><p style='text-align:left;'><strong>Long Winter Arcade</strong><br />All Night<br /><em>Main Hall</em><br /><p>Curated by <a target=_blank href=https://bentomiso.com>Bento Miso</a></p><p><a target=_blank href=http://fatetectonics.com>Fate Tectonics</a> - Golden Gear Games - World Building Puzzle Game</p><p>The Rookery - Rocket 5 Studios - Four Player Aerial Jousting</p><p><a target=_blank href=http://arnulfo.itch.io/beatpatrol>Beat Patrol</a> - Daniel Orellana -&nbsp;Musical Shooter Hybrid Action Game</p><p><span>Bento Miso, a not-for-profit collaborative feminist workspace for independent creative people to work and play, has been actively participating in Toronto’s vibrant video game development scene for the past three years. For this volume of Long Winter, we’re showcasing several games made by members and friends of our community, including Golden Gear Games’ Fate Tectonics (a world building puzzle game), Daniel Orellana’s Beat Patrol (hybrid musical shooter action), and Rocket 5 Studio’s The Rookery (4 player aerial jousting).</span></p><p><strong>Video Games:</strong>&nbsp;<a target=_blank href=https://bentomiso.com>Website</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#roxanneluchak').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/54774ec7e4b0464e56cde6c3/1417105095725/roxanne.JPG?format=300w' border=1/><p style='text-align:left;'><strong>Roxanne Luchak</strong><br />All Night<br /><em>Studio 3</em><br /><p dir=ltr>Roxanne Luchak is a multi-media video artist who lives and works in Toronto. &nbsp;Roxanne graduated from OCADU in integrated media and for the past 10 years has produced projection design for art shows, music events, art installations and most recently Theatre. &nbsp;Always expanding her creative platform and exploring new technology Roxanne continues to develop new methods of transforming spaces through projection.</p><p><strong>Projections:</strong>&nbsp;<a target=_blank href=http://www.roxanneluchak.com>Website</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#henrifaberge').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/5477522fe4b00987aeddc361/1417105967545/henri.jpeg?format=300w' border=1/><p style='text-align:left;'><strong>Henri Faberge</strong><br />All Night<br /><em>Everywhere</em><br /><p><span>It's 1904-ish, somewhere not unlike England. The cadets from Boyce Naval Academy are on shore leave, and jaded aristocrat Henri Fabergé is getting his first taste of the bohemian art scene...so much so that he might jump ship and enroll at nearby Hart Art College. Steer clear if you see a bar brawl, but feel free to join in one of their boisterous singalongs. Be sure to catch their Feint of Hart pseudo-holiday special </span><em>Crisis At St Creskins</em><span> this weekend at the Campbell House Museum!</span></p><p><strong>Art: </strong>Website</p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#ameliamaher').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/54820177e4b0e57e2f00a685/1417806200920/blank.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Amelia Maher</strong><br />All Night<br /><em>Utility Closet</em><br /><p><em>Vinyl Tarot.&nbsp;</em><span>Amelia Merhar is a Yukon-based artist whose musical installations and interactive art explore whatever issues she is working through that year. From singing beer-filled breasts to spontaneous song booths, it's always pretty fun though.&nbsp;</span>Vinyl Tarot is a &nbsp;working tarot deck made out of records that examines how music influences our lives by perpetuating that influence. Tom Waits is Judgement, Billy Joel is the Death Card, and Aretha Franklin is the High Priestess... come by to get a three-card reading!&nbsp;</p><p><strong>Art:&nbsp;</strong><a target=_blank href=http://ameliamerhar.com>Website</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#grahamkrenz').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/5485bad6e4b0395ca99cef17/1418050262207/blank.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Graham Krenz</strong><br />All Night<br /><em>Main Hall</em><br /><p><span>Sleeping through winter, whether you're alone or by yourself, is a waste of time. Throw away your pillows and you'll see hibernation accomplishes nothing.</span></p><p><strong>Art</strong>: Website</p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#maxveytsman').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/547777dce4b06dd3acaa6710/1417115612687/blank.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Max Veytsman</strong><br />All Night<br /><em>Studio 3</em><br /><p>A video collage created from the rhythms of movie piracy. The collage shows film scenes as they are being downloaded from the BitTorrent network along with the geospatial locations of the downloaders. It brings attention to the fact that our media choices are constantly being surveilled, whether it’s pirated it or not. In the spirit of piracy of all forms of media, &nbsp;this work is a remix of The Pirate Cinema by Nicolas Maigret. Max is a hacker experimenting with visual forms. He’s interested in security, privacy, and data visualization.</p><p><strong>Art: </strong><a target=_blank href=http://ontoillogical.com>Website</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#pennyloulousweetsandtreats').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/547ca6b7e4b030244ba98477/1417455288061/pennylou.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Penny Lou Lou Sweets and Treats</strong><br />All Night<br /><em>Main Hall</em><br /><p><span>Traditional Hong Kong Bubble Cakes with a modern twist!&nbsp; Hot and crispy on the outside, soft and chewy on the inside. Each Bubble Cakes is served with various toppings and dips!</span></p><p><strong>Food:&nbsp;</strong><a target=_blank href=http://pennyloulou.com>Website</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#zoeheynjones').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/547e3043e4b06072143b5e2c/1417556035874/ZoeHJ.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Zoe Heyn-Jones</strong><br />All Night<br /><em>Stairwell</em><br /><p dir=ltr><em>Gathering. S</em><span style=font-size:13.3333339691162px>trangers and friends convene in the Island light. Shot and hand-processed at Artscape Gibraltar Point in June 2014.&nbsp;</span><span style=font-size:13.3333339691162px>Starring: Amber Christensen, Nisha Platzer, Karen Polowick, Caitlin Woelfle-O'Brien &amp; friends.</span></p><p dir=ltr><strong>Film</strong></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#kangaaussiepies').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/5485ee38e4b09904f1c0e32c/1418063417442/kanga.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Kanga Aussie Pies</strong><br />All Night<br /><em>Main Hall</em><br /><p><span>Kanga is Toronto's first Australian-style meat pie shop. Kanga Aussie pies come in our signature all-butter flakey pastry, and are filled with saucy savoury fillings. The best part is that they are handheld --you can eat them right out of the bag, like a hamburger!</span></p><p><strong>Food: </strong><a target=_blank href=http://www.eatkanga.com>Website</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});	$(document).ready(function() {
		$('#tasseomancyspsychedelicteastation').tooltipster({
			content: $("<img src='http://static.squarespace.com/static/53ed9849e4b07b4e476bd1f5/t/5487ba7ae4b05c1d23994712/1418181242820/tasseo.jpg?format=300w' border=1/><p style='text-align:left;'><strong>Tasseomancy's Psychedelic Tea Station</strong><br />All Night<br /><em>Studio 3</em><br /><p>Offering you our classic brews, including primordial lifetime favourite, (Long) Winter Blood Tea. Sips so lifting, you'll hug your heart stone all night long.&nbsp;</p><p><strong style=background-color:rgba(255, 255, 255, 0); line-height:1.68em>Food:&nbsp;</strong><a target=_blank style=line-height: 1.68em; background-color: rgba(255, 255, 255, 0); href=http://tasseoblog.tumblr.com>Website</a></p></p>"),
			interactive: true,
			animation: 'grow',
			maxWidth: 500
		});});</script>