import{a3 as it,a4 as rt,E as st,a as N,a5 as K,a6 as X,a7 as Ee,a8 as Ce,V as E,d as _e,a9 as je,aa as ct,v as Ie,ab as Ne,o as le,ac as lt,ad as Se,ae as ut,F as ze,N as te,af as Me,ag as dt,C as oe,H as pt,B as ft,ah as se,ai as mt,aj as vt,ak as ht,al as Re,u as gt}from"./chunk.uVdaq5N5.js";const De={type:"change"},ce={type:"start"},Ae={type:"end"},ne=new it,Le=new rt,yt=Math.cos(70*_e.DEG2RAD);class xt extends st{constructor(n,a){super(),this.object=n,this.domElement=a,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:K.ROTATE,MIDDLE:K.DOLLY,RIGHT:K.PAN},this.touches={ONE:X.ROTATE,TWO:X.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",ie),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ie),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(De),e.update(),d=i.NONE},this.update=function(){const t=new N,s=new Ee().setFromUnitVectors(n.up,new N(0,1,0)),g=s.clone().invert(),b=new N,I=new Ee,U=new N,q=2*Math.PI;return function(at=null){const Pe=e.object.position;t.copy(Pe).sub(e.target),t.applyQuaternion(s),l.setFromVector3(t),e.autoRotate&&d===i.NONE&&P(S(at)),e.enableDamping?(l.theta+=h.theta*e.dampingFactor,l.phi+=h.phi*e.dampingFactor):(l.theta+=h.theta,l.phi+=h.phi);let V=e.minAzimuthAngle,Y=e.maxAzimuthAngle;isFinite(V)&&isFinite(Y)&&(V<-Math.PI?V+=q:V>Math.PI&&(V-=q),Y<-Math.PI?Y+=q:Y>Math.PI&&(Y-=q),V<=Y?l.theta=Math.max(V,Math.min(Y,l.theta)):l.theta=l.theta>(V+Y)/2?Math.max(V,l.theta):Math.min(Y,l.theta)),l.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,l.phi)),l.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(f,e.dampingFactor):e.target.add(f),e.target.sub(e.cursor),e.target.clampLength(e.minTargetRadius,e.maxTargetRadius),e.target.add(e.cursor),e.zoomToCursor&&O||e.object.isOrthographicCamera?l.radius=B(l.radius):l.radius=B(l.radius*u),t.setFromSpherical(l),t.applyQuaternion(g),Pe.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(h.theta*=1-e.dampingFactor,h.phi*=1-e.dampingFactor,f.multiplyScalar(1-e.dampingFactor)):(h.set(0,0,0),f.set(0,0,0));let re=!1;if(e.zoomToCursor&&O){let $=null;if(e.object.isPerspectiveCamera){const Q=t.length();$=B(Q*u);const ee=Q-$;e.object.position.addScaledVector(R,ee),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const Q=new N(w.x,w.y,0);Q.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/u)),e.object.updateProjectionMatrix(),re=!0;const ee=new N(w.x,w.y,0);ee.unproject(e.object),e.object.position.sub(ee).add(Q),e.object.updateMatrixWorld(),$=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;$!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar($).add(e.object.position):(ne.origin.copy(e.object.position),ne.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(ne.direction))<yt?n.lookAt(e.target):(Le.setFromNormalAndCoplanarPoint(e.object.up,e.target),ne.intersectPlane(Le,e.target))))}else e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/u)),e.object.updateProjectionMatrix(),re=!0);return u=1,O=!1,re||b.distanceToSquared(e.object.position)>T||8*(1-I.dot(e.object.quaternion))>T||U.distanceToSquared(e.target)>0?(e.dispatchEvent(De),b.copy(e.object.position),I.copy(e.object.quaternion),U.copy(e.target),!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",we),e.domElement.removeEventListener("pointerdown",ye),e.domElement.removeEventListener("pointercancel",W),e.domElement.removeEventListener("wheel",xe),e.domElement.removeEventListener("pointermove",ae),e.domElement.removeEventListener("pointerup",W),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",ie),e._domElementKeyEvents=null)};const e=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let d=i.NONE;const T=1e-6,l=new Ce,h=new Ce;let u=1;const f=new N,v=new E,y=new E,M=new E,r=new E,o=new E,c=new E,x=new E,p=new E,m=new E,R=new N,w=new E;let O=!1;const D=[],C={};let F=!1;function S(t){return t!==null?2*Math.PI/60*e.autoRotateSpeed*t:2*Math.PI/60/60*e.autoRotateSpeed}function k(t){const s=Math.abs(t*.01);return Math.pow(.95,e.zoomSpeed*s)}function P(t){h.theta-=t}function _(t){h.phi-=t}const L=function(){const t=new N;return function(g,b){t.setFromMatrixColumn(b,0),t.multiplyScalar(-g),f.add(t)}}(),z=function(){const t=new N;return function(g,b){e.screenSpacePanning===!0?t.setFromMatrixColumn(b,1):(t.setFromMatrixColumn(b,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(g),f.add(t)}}(),j=function(){const t=new N;return function(g,b){const I=e.domElement;if(e.object.isPerspectiveCamera){const U=e.object.position;t.copy(U).sub(e.target);let q=t.length();q*=Math.tan(e.object.fov/2*Math.PI/180),L(2*g*q/I.clientHeight,e.object.matrix),z(2*b*q/I.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(L(g*(e.object.right-e.object.left)/e.object.zoom/I.clientWidth,e.object.matrix),z(b*(e.object.top-e.object.bottom)/e.object.zoom/I.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function G(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?u/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function J(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?u*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Z(t,s){if(!e.zoomToCursor)return;O=!0;const g=e.domElement.getBoundingClientRect(),b=t-g.left,I=s-g.top,U=g.width,q=g.height;w.x=b/U*2-1,w.y=-(I/q)*2+1,R.set(w.x,w.y,1).unproject(e.object).sub(e.object.position).normalize()}function B(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function ue(t){v.set(t.clientX,t.clientY)}function qe(t){Z(t.clientX,t.clientX),x.set(t.clientX,t.clientY)}function de(t){r.set(t.clientX,t.clientY)}function Ve(t){y.set(t.clientX,t.clientY),M.subVectors(y,v).multiplyScalar(e.rotateSpeed);const s=e.domElement;P(2*Math.PI*M.x/s.clientHeight),_(2*Math.PI*M.y/s.clientHeight),v.copy(y),e.update()}function Ye(t){p.set(t.clientX,t.clientY),m.subVectors(p,x),m.y>0?G(k(m.y)):m.y<0&&J(k(m.y)),x.copy(p),e.update()}function Ue(t){o.set(t.clientX,t.clientY),c.subVectors(o,r).multiplyScalar(e.panSpeed),j(c.x,c.y),r.copy(o),e.update()}function He(t){Z(t.clientX,t.clientY),t.deltaY<0?J(k(t.deltaY)):t.deltaY>0&&G(k(t.deltaY)),e.update()}function Ke(t){let s=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?_(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(0,e.keyPanSpeed),s=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?_(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(0,-e.keyPanSpeed),s=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?P(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(e.keyPanSpeed,0),s=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?P(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(-e.keyPanSpeed,0),s=!0;break}s&&(t.preventDefault(),e.update())}function pe(t){if(D.length===1)v.set(t.pageX,t.pageY);else{const s=H(t),g=.5*(t.pageX+s.x),b=.5*(t.pageY+s.y);v.set(g,b)}}function fe(t){if(D.length===1)r.set(t.pageX,t.pageY);else{const s=H(t),g=.5*(t.pageX+s.x),b=.5*(t.pageY+s.y);r.set(g,b)}}function me(t){const s=H(t),g=t.pageX-s.x,b=t.pageY-s.y,I=Math.sqrt(g*g+b*b);x.set(0,I)}function Xe(t){e.enableZoom&&me(t),e.enablePan&&fe(t)}function Ge(t){e.enableZoom&&me(t),e.enableRotate&&pe(t)}function ve(t){if(D.length==1)y.set(t.pageX,t.pageY);else{const g=H(t),b=.5*(t.pageX+g.x),I=.5*(t.pageY+g.y);y.set(b,I)}M.subVectors(y,v).multiplyScalar(e.rotateSpeed);const s=e.domElement;P(2*Math.PI*M.x/s.clientHeight),_(2*Math.PI*M.y/s.clientHeight),v.copy(y)}function he(t){if(D.length===1)o.set(t.pageX,t.pageY);else{const s=H(t),g=.5*(t.pageX+s.x),b=.5*(t.pageY+s.y);o.set(g,b)}c.subVectors(o,r).multiplyScalar(e.panSpeed),j(c.x,c.y),r.copy(o)}function ge(t){const s=H(t),g=t.pageX-s.x,b=t.pageY-s.y,I=Math.sqrt(g*g+b*b);p.set(0,I),m.set(0,Math.pow(p.y/x.y,e.zoomSpeed)),G(m.y),x.copy(p);const U=(t.pageX+s.x)*.5,q=(t.pageY+s.y)*.5;Z(U,q)}function Ze(t){e.enableZoom&&ge(t),e.enablePan&&he(t)}function Be(t){e.enableZoom&&ge(t),e.enableRotate&&ve(t)}function ye(t){e.enabled!==!1&&(D.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",ae),e.domElement.addEventListener("pointerup",W)),nt(t),t.pointerType==="touch"?et(t):We(t))}function ae(t){e.enabled!==!1&&(t.pointerType==="touch"?tt(t):$e(t))}function W(t){ot(t),D.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",ae),e.domElement.removeEventListener("pointerup",W)),e.dispatchEvent(Ae),d=i.NONE}function We(t){let s;switch(t.button){case 0:s=e.mouseButtons.LEFT;break;case 1:s=e.mouseButtons.MIDDLE;break;case 2:s=e.mouseButtons.RIGHT;break;default:s=-1}switch(s){case K.DOLLY:if(e.enableZoom===!1)return;qe(t),d=i.DOLLY;break;case K.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;de(t),d=i.PAN}else{if(e.enableRotate===!1)return;ue(t),d=i.ROTATE}break;case K.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;ue(t),d=i.ROTATE}else{if(e.enablePan===!1)return;de(t),d=i.PAN}break;default:d=i.NONE}d!==i.NONE&&e.dispatchEvent(ce)}function $e(t){switch(d){case i.ROTATE:if(e.enableRotate===!1)return;Ve(t);break;case i.DOLLY:if(e.enableZoom===!1)return;Ye(t);break;case i.PAN:if(e.enablePan===!1)return;Ue(t);break}}function xe(t){e.enabled===!1||e.enableZoom===!1||d!==i.NONE||(t.preventDefault(),e.dispatchEvent(ce),He(Qe(t)),e.dispatchEvent(Ae))}function Qe(t){const s=t.deltaMode,g={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(s){case 1:g.deltaY*=16;break;case 2:g.deltaY*=100;break}return t.ctrlKey&&!F&&(g.deltaY*=10),g}function Je(t){t.key==="Control"&&(F=!0,document.addEventListener("keyup",be,{passive:!0,capture:!0}))}function be(t){t.key==="Control"&&(F=!1,document.removeEventListener("keyup",be,{passive:!0,capture:!0}))}function ie(t){e.enabled===!1||e.enablePan===!1||Ke(t)}function et(t){switch(Te(t),D.length){case 1:switch(e.touches.ONE){case X.ROTATE:if(e.enableRotate===!1)return;pe(t),d=i.TOUCH_ROTATE;break;case X.PAN:if(e.enablePan===!1)return;fe(t),d=i.TOUCH_PAN;break;default:d=i.NONE}break;case 2:switch(e.touches.TWO){case X.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Xe(t),d=i.TOUCH_DOLLY_PAN;break;case X.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ge(t),d=i.TOUCH_DOLLY_ROTATE;break;default:d=i.NONE}break;default:d=i.NONE}d!==i.NONE&&e.dispatchEvent(ce)}function tt(t){switch(Te(t),d){case i.TOUCH_ROTATE:if(e.enableRotate===!1)return;ve(t),e.update();break;case i.TOUCH_PAN:if(e.enablePan===!1)return;he(t),e.update();break;case i.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ze(t),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Be(t),e.update();break;default:d=i.NONE}}function we(t){e.enabled!==!1&&t.preventDefault()}function nt(t){D.push(t.pointerId)}function ot(t){delete C[t.pointerId];for(let s=0;s<D.length;s++)if(D[s]==t.pointerId){D.splice(s,1);return}}function Te(t){let s=C[t.pointerId];s===void 0&&(s=new E,C[t.pointerId]=s),s.set(t.pageX,t.pageY)}function H(t){const s=t.pointerId===D[0]?D[1]:D[0];return C[s]}e.domElement.addEventListener("contextmenu",we),e.domElement.addEventListener("pointerdown",ye),e.domElement.addEventListener("pointercancel",W),e.domElement.addEventListener("wheel",xe,{passive:!1}),document.addEventListener("keydown",Je,{passive:!0,capture:!0}),this.update()}}class bt{constructor(n,a,e){this.variables=[],this.currentTextureIndex=0;let i=ze;const d=new je,T=new ct;T.position.z=1;const l={passThruTexture:{value:null}},h=v(M(),l),u=new Ie(new Ne(2,2),h);d.add(u),this.setDataType=function(r){return i=r,this},this.addVariable=function(r,o,c){const x=this.createShaderMaterial(o),p={name:r,initialValueTexture:c,material:x,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:te,magFilter:te};return this.variables.push(p),p},this.setVariableDependencies=function(r,o){r.dependencies=o},this.init=function(){if(e.capabilities.isWebGL2===!1&&e.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(e.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let r=0;r<this.variables.length;r++){const o=this.variables[r];o.renderTargets[0]=this.createRenderTarget(n,a,o.wrapS,o.wrapT,o.minFilter,o.magFilter),o.renderTargets[1]=this.createRenderTarget(n,a,o.wrapS,o.wrapT,o.minFilter,o.magFilter),this.renderTexture(o.initialValueTexture,o.renderTargets[0]),this.renderTexture(o.initialValueTexture,o.renderTargets[1]);const c=o.material,x=c.uniforms;if(o.dependencies!==null)for(let p=0;p<o.dependencies.length;p++){const m=o.dependencies[p];if(m.name!==o.name){let R=!1;for(let w=0;w<this.variables.length;w++)if(m.name===this.variables[w].name){R=!0;break}if(!R)return"Variable dependency not found. Variable="+o.name+", dependency="+m.name}x[m.name]={value:null},c.fragmentShader=`
uniform sampler2D `+m.name+`;
`+c.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const r=this.currentTextureIndex,o=this.currentTextureIndex===0?1:0;for(let c=0,x=this.variables.length;c<x;c++){const p=this.variables[c];if(p.dependencies!==null){const m=p.material.uniforms;for(let R=0,w=p.dependencies.length;R<w;R++){const O=p.dependencies[R];m[O.name].value=O.renderTargets[r].texture}}this.doRenderTarget(p.material,p.renderTargets[o])}this.currentTextureIndex=o},this.getCurrentRenderTarget=function(r){return r.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(r){return r.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){u.geometry.dispose(),u.material.dispose();const r=this.variables;for(let o=0;o<r.length;o++){const c=r[o];c.initialValueTexture&&c.initialValueTexture.dispose();const x=c.renderTargets;for(let p=0;p<x.length;p++)x[p].dispose()}};function f(r){r.defines.resolution="vec2( "+n.toFixed(1)+", "+a.toFixed(1)+" )"}this.addResolutionDefine=f;function v(r,o){o=o||{};const c=new le({name:"GPUComputationShader",uniforms:o,vertexShader:y(),fragmentShader:r});return f(c),c}this.createShaderMaterial=v,this.createRenderTarget=function(r,o,c,x,p,m){return r=r||n,o=o||a,c=c||Me,x=x||Me,p=p||te,m=m||te,new lt(r,o,{wrapS:c,wrapT:x,minFilter:p,magFilter:m,format:Se,type:i,depthBuffer:!1})},this.createTexture=function(){const r=new Float32Array(n*a*4),o=new ut(r,n,a,Se,ze);return o.needsUpdate=!0,o},this.renderTexture=function(r,o){l.passThruTexture.value=r,this.doRenderTarget(h,o),l.passThruTexture.value=null},this.doRenderTarget=function(r,o){const c=e.getRenderTarget(),x=e.xr.enabled,p=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,u.material=r,e.setRenderTarget(o),e.render(d,T),u.material=h,e.xr.enabled=x,e.shadowMap.autoUpdate=p,e.setRenderTarget(c)};function y(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function M(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}function wt(A){const{domElement:n,onClick:a=()=>{},onEnter:e=()=>{},onMove:i=()=>{},onLeave:d=()=>{},onDragStart:T=()=>{},onDragMove:l=()=>{},onDragStop:h=()=>{}}=A,u=new E,f=new E,v=new E,y=new E,M=new E,r={position:u,nPosition:f,hover:!1,down:!1,removeListeners:D};return O(),r;function o(C){v.distanceTo(u)<20&&(w(C),a({position:u,nPosition:f}))}function c(C){r.hover=C.pointerType==="mouse",w(C),e({position:u,nPosition:f})}function x(C){r.down=!0,w(C),v.copy(u),y.copy(u),T({position:u,nPosition:f})}function p(C){w(C),M.copy(u).sub(y),r.down?l({position:u,nPosition:f,startPosition:v,lastPosition:y,delta:M}):r.hover||(r.hover=!0),i({position:u,nPosition:f,startPosition:v,lastPosition:y,delta:M}),y.copy(u)}function m(C){r.down=!1,h()}function R(C){r.down&&(r.down=!1,h()),r.hover=!1,d()}function w(C){const F=n.getBoundingClientRect();u.x=C.clientX-F.left,u.y=C.clientY-F.top,f.x=u.x/F.width*2-1,f.y=-(u.y/F.height)*2+1}function O(){n.addEventListener("click",o),n.addEventListener("pointerenter",c),n.addEventListener("pointerdown",x),n.addEventListener("pointermove",p),n.addEventListener("pointerup",m),n.addEventListener("pointerleave",R)}function D(){n.removeEventListener("click",o),n.removeEventListener("pointerenter",c),n.removeEventListener("pointerdown",x),n.removeEventListener("pointermove",p),n.removeEventListener("pointerup",m),n.removeEventListener("pointerleave",R)}}function Fe(A){const n={el:null,canvas:null,eventsEl:null,width:null,height:null,resize:!0,alpha:!1,antialias:!1,orbitControls:!1,init(){},initCamera(){},initScene(){},afterResize(){},beforeRender(){},...A},a={renderer:null,camera:null,scene:null,pointer:null,width:0,height:0,wWidth:0,wHeight:0,clock:{startTime:0,time:0,elapsed:0},options:n};let e,i;return d(),a;function d(){var f,v,y,M,r;let o;if(n.el)o=document.createElement("canvas"),n.el.appendChild(o);else if(n.canvas)o=n.canvas;else throw new Error("Missing parameter : el or canvas is required");(f=n.init)==null||f.call(n,a),a.renderer=new ht({canvas:o,alpha:n.alpha,antialias:n.antialias}),(v=n.initRenderer)==null||v.call(n,a),a.camera=new Re,a.camera.position.z=50,(y=n.initCamera)==null||y.call(n,a),n.orbitControls&&(i=new xt(a.camera,(M=n.eventsEl)!=null?M:a.renderer.domElement),i.enableDamping=!0,i.dampingFactor=.1,typeof n.orbitControls=="object"&&Object.keys(n.orbitControls).forEach(c=>{i[c]=n.orbitControls[c]})),h(),n.resize&&!n.width&&!n.height&&window.addEventListener("resize",h),a.scene=new je,(r=n.initScene)==null||r.call(n,a),T(),e=n.render?n.render:()=>{a.renderer.render(a.scene,a.camera)},requestAnimationFrame(c=>{a.clock.startTime=a.clock.time=c,requestAnimationFrame(l)})}function T(){var f,v;const y={};n.onPointerEnter&&(y.onEnter=n.onPointerEnter),n.onPointerMove&&(y.onMove=n.onPointerMove),n.onPointerMove&&(y.onLeave=n.onPointerLeave),Object.keys(y).length>0&&(a.pointer=wt({domElement:(v=n.eventsEl)!=null?v:(f=n.el)!=null?f:n.canvas,...y}))}function l(f){const{clock:v}=a;v.elapsed=f-v.time,v.time=f,n.beforeRender(a),i&&i.update(),e(a),requestAnimationFrame(l)}function h(){var f;if(n.width&&n.height)a.width=n.width,a.height=n.height;else if(n.resize==="window")a.width=window.innerWidth,a.height=window.innerHeight;else{const v=a.renderer.domElement.parentElement;a.width=v.clientWidth,a.height=v.clientHeight}if(a.renderer.setSize(a.width,a.height),a.camera.aspect=a.width/a.height,a.camera.updateProjectionMatrix(),a.camera instanceof Re){const v=u();a.wWidth=v[0],a.wHeight=v[1]}else a.wWidth=a.camera.top-a.camera.bottom,a.wHeight=a.camera.right-a.camera.left;(f=n.afterResize)==null||f.call(n,a)}function u(){const f=a.camera.fov*Math.PI/180,v=2*Math.tan(f/2)*Math.abs(a.camera.position.z);return[v*a.camera.aspect,v]}}const Tt={shaderPoints:8,curvePoints:80,curveLerp:.75,radius1:3,radius2:5,velocityTreshold:10,sleepRadiusX:150,sleepRadiusY:150,sleepTimeCoefX:.0025,sleepTimeCoefY:.0025};function Rt(A){const n={...Tt,...A},a=new Array(n.curvePoints).fill(0).map(()=>new E),e=new dt(a),i=new N,d=new N,T={value:new E},l={value:new E},h={value:new Array(n.shaderPoints).fill(0).map(()=>new E)},u={value:new oe(16711935)};let f,v,y=!1;const M={};return["el","canvas","width","height","resize"].forEach(o=>{A[o]!==void 0&&(M[o]=A[o])}),Fe({...M,antialias:!1,initCamera(o){o.camera=new gt},initScene({scene:o}){const c=new Ne(2,2);f=new le({uniforms:{uRatio:T,uSize:l,uPoints:h,uColor:u},defines:{SHADER_POINTS:n.shaderPoints},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `,fragmentShader:`
          // https://www.shadertoy.com/view/wdy3DD
          // https://www.shadertoy.com/view/MlKcDD
          // Signed distance to a quadratic bezier
          float sdBezier(vec2 pos, vec2 A, vec2 B, vec2 C) {
            vec2 a = B - A;
            vec2 b = A - 2.0*B + C;
            vec2 c = a * 2.0;
            vec2 d = A - pos;
            float kk = 1.0 / dot(b,b);
            float kx = kk * dot(a,b);
            float ky = kk * (2.0*dot(a,a)+dot(d,b)) / 3.0;
            float kz = kk * dot(d,a);
            float res = 0.0;
            float p = ky - kx*kx;
            float p3 = p*p*p;
            float q = kx*(2.0*kx*kx - 3.0*ky) + kz;
            float h = q*q + 4.0*p3;
            if(h >= 0.0){
              h = sqrt(h);
              vec2 x = (vec2(h, -h) - q) / 2.0;
              vec2 uv = sign(x)*pow(abs(x), vec2(1.0/3.0));
              float t = uv.x + uv.y - kx;
              t = clamp( t, 0.0, 1.0 );
              // 1 root
              vec2 qos = d + (c + b*t)*t;
              res = length(qos);
            } else {
              float z = sqrt(-p);
              float v = acos( q/(p*z*2.0) ) / 3.0;
              float m = cos(v);
              float n = sin(v)*1.732050808;
              vec3 t = vec3(m + m, -n - m, n - m) * z - kx;
              t = clamp( t, 0.0, 1.0 );
              // 3 roots
              vec2 qos = d + (c + b*t.x)*t.x;
              float dis = dot(qos,qos);
              res = dis;
              qos = d + (c + b*t.y)*t.y;
              dis = dot(qos,qos);
              res = min(res,dis);
              qos = d + (c + b*t.z)*t.z;
              dis = dot(qos,qos);
              res = min(res,dis);
              res = sqrt( res );
            }
            return res;
          }

          uniform vec2 uRatio;
          uniform vec2 uSize;
          uniform vec2 uPoints[SHADER_POINTS];
          uniform vec3 uColor;
          varying vec2 vUv;
          void main() {
            float intensity = 1.0;
            float radius = 0.015;

            vec2 pos = (vUv - 0.5) * uRatio;

            vec2 c = (uPoints[0] + uPoints[1]) / 2.0;
            vec2 c_prev;
            float dist = 10000.0;
            for(int i = 0; i < SHADER_POINTS - 1; i++){
              c_prev = c;
              c = (uPoints[i] + uPoints[i + 1]) / 2.0;
              dist = min(dist, sdBezier(pos, c_prev, uPoints[i], c));
            }
            dist = max(0.0, dist);

            float glow = pow(uSize.y / dist, intensity);
            vec3 col = vec3(0.0);
            col += 10.0 * vec3(smoothstep(uSize.x, 0.0, dist));
            col += glow * uColor;

            // Tone mapping
            col = 1.0 - exp(-col);
            col = pow(col, vec3(0.4545));
  
            gl_FragColor = vec4(col, 1.0);
          }
        `}),v=new Ie(c,f),o.add(v)},afterResize({width:o,height:c}){l.value.set(n.radius1,n.radius2),o>=c?(T.value.set(1,c/o),l.value.multiplyScalar(1/o)):(T.value.set(o/c,1),l.value.multiplyScalar(1/c))},beforeRender({clock:o,width:c,height:x,wWidth:p}){for(let m=1;m<n.curvePoints;m++)a[m].lerp(a[m-1],n.curveLerp);for(let m=0;m<n.shaderPoints;m++)e.getPoint(m/(n.shaderPoints-1),h.value[m]);if(y)u.value.r=i.z,u.value.g=0,u.value.b=1-i.z,i.multiplyScalar(.95);else{const m=o.time*n.sleepTimeCoefX,R=o.time*n.sleepTimeCoefY,w=Math.cos(m),O=Math.sin(R),D=n.sleepRadiusX*p/c,C=n.sleepRadiusY*p/c,F=D*w,S=C*O;e.points[0].set(F,S),u.value.r=.5+.5*Math.cos(o.time*.0015),u.value.g=0,u.value.b=1-u.value.r}},onPointerMove({nPosition:o,delta:c}){y=!0;const x=.5*o.x*T.value.x,p=.5*o.y*T.value.y;e.points[0].set(x,p),d.x=Math.min(i.x+Math.abs(c.x)/n.velocityTreshold,1),d.y=Math.min(i.y+Math.abs(c.y)/n.velocityTreshold,1),d.z=Math.sqrt(d.x*d.x+d.y*d.y),i.lerp(d,.05)},onPointerLeave(){y=!1}}),{config:n}}function Pt(A){let n=[];e(A);const a=new oe;return{setColors:e,getColorAt:i};function e(d){n=[],d.forEach(T=>{n.push(new oe(T))})}function i(d){const T=Math.max(0,Math.min(1,d))*(A.length-1),l=Math.floor(T),h=n[l];if(l===A.length-1)return h.getHex();const u=T-l,f=n[l+1];return a.r=h.r+u*(f.r-h.r),a.g=h.g+u*(f.g-h.g),a.b=h.b+u*(f.b-h.b),a.clone()}}var Et=`vec4 permute(vec4 x){vec4 xm=mod(x,289.0);return mod(((xm*34.0)+10.0)*xm,289.0);}float psrdnoise(vec3 x,vec3 period,float alpha,out vec3 gradient){
#ifndef PERLINGRID
const mat3 M=mat3(0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0);const mat3 Mi=mat3(-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5);
#endif
vec3 uvw;
#ifndef PERLINGRID
uvw=M*x;
#else
uvw=x+dot(x,vec3(1.0/3.0));
#endif
vec3 i0=floor(uvw);vec3 f0=fract(uvw);vec3 g_=step(f0.xyx,f0.yzz);vec3 l_=1.0-g_;vec3 g=vec3(l_.z,g_.xy);vec3 l=vec3(l_.xy,g_.z);vec3 o1=min(g,l);vec3 o2=max(g,l);vec3 i1=i0+o1;vec3 i2=i0+o2;vec3 i3=i0+vec3(1.0);vec3 v0,v1,v2,v3;
#ifndef PERLINGRID
v0=Mi*i0;v1=Mi*i1;v2=Mi*i2;v3=Mi*i3;
#else
v0=i0-dot(i0,vec3(1.0/6.0));v1=i1-dot(i1,vec3(1.0/6.0));v2=i2-dot(i2,vec3(1.0/6.0));v3=i3-dot(i3,vec3(1.0/6.0));
#endif
vec3 x0=x-v0;vec3 x1=x-v1;vec3 x2=x-v2;vec3 x3=x-v3;if(any(greaterThan(period,vec3(0.0)))){vec4 vx=vec4(v0.x,v1.x,v2.x,v3.x);vec4 vy=vec4(v0.y,v1.y,v2.y,v3.y);vec4 vz=vec4(v0.z,v1.z,v2.z,v3.z);if(period.x>0.0)vx=mod(vx,period.x);if(period.y>0.0)vy=mod(vy,period.y);if(period.z>0.0)vz=mod(vz,period.z);
#ifndef PERLINGRID
i0=M*vec3(vx.x,vy.x,vz.x);i1=M*vec3(vx.y,vy.y,vz.y);i2=M*vec3(vx.z,vy.z,vz.z);i3=M*vec3(vx.w,vy.w,vz.w);
#else
v0=vec3(vx.x,vy.x,vz.x);v1=vec3(vx.y,vy.y,vz.y);v2=vec3(vx.z,vy.z,vz.z);v3=vec3(vx.w,vy.w,vz.w);i0=v0+dot(v0,vec3(1.0/3.0));i1=v1+dot(v1,vec3(1.0/3.0));i2=v2+dot(v2,vec3(1.0/3.0));i3=v3+dot(v3,vec3(1.0/3.0));
#endif
i0=floor(i0+0.5);i1=floor(i1+0.5);i2=floor(i2+0.5);i3=floor(i3+0.5);}vec4 hash=permute(permute(permute(vec4(i0.z,i1.z,i2.z,i3.z))+vec4(i0.y,i1.y,i2.y,i3.y))+vec4(i0.x,i1.x,i2.x,i3.x));vec4 theta=hash*3.883222077;vec4 sz=hash*-0.006920415+0.996539792;vec4 psi=hash*0.108705628;vec4 Ct=cos(theta);vec4 St=sin(theta);vec4 sz_prime=sqrt(1.0-sz*sz);vec4 gx,gy,gz;
#ifdef FASTROTATION
vec4 qx=St;vec4 qy=-Ct;vec4 qz=vec4(0.0);vec4 px=sz*qy;vec4 py=-sz*qx;vec4 pz=sz_prime;psi+=alpha;vec4 Sa=sin(psi);vec4 Ca=cos(psi);gx=Ca*px+Sa*qx;gy=Ca*py+Sa*qy;gz=Ca*pz+Sa*qz;
#else
if(alpha!=0.0){vec4 Sp=sin(psi);vec4 Cp=cos(psi);vec4 px=Ct*sz_prime;vec4 py=St*sz_prime;vec4 pz=sz;vec4 Ctp=St*Sp-Ct*Cp;vec4 qx=mix(Ctp*St,Sp,sz);vec4 qy=mix(-Ctp*Ct,Cp,sz);vec4 qz=-(py*Cp+px*Sp);vec4 Sa=vec4(sin(alpha));vec4 Ca=vec4(cos(alpha));gx=Ca*px+Sa*qx;gy=Ca*py+Sa*qy;gz=Ca*pz+Sa*qz;}else{gx=Ct*sz_prime;gy=St*sz_prime;gz=sz;}
#endif
vec3 g0=vec3(gx.x,gy.x,gz.x);vec3 g1=vec3(gx.y,gy.y,gz.y);vec3 g2=vec3(gx.z,gy.z,gz.z);vec3 g3=vec3(gx.w,gy.w,gz.w);vec4 w=0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3));w=max(w,0.0);vec4 w2=w*w;vec4 w3=w2*w;vec4 gdotx=vec4(dot(g0,x0),dot(g1,x1),dot(g2,x2),dot(g3,x3));float n=dot(w3,gdotx);vec4 dw=-6.0*w2*gdotx;vec3 dn0=w3.x*g0+dw.x*x0;vec3 dn1=w3.y*g1+dw.y*x1;vec3 dn2=w3.z*g2+dw.z*x2;vec3 dn3=w3.w*g3+dw.w*x3;gradient=39.5*(dn0+dn1+dn2+dn3);return 39.5*n;}`;const{randFloat:Oe,randFloatSpread:ke}=_e,Ct={gpgpuSize:256,colors:[65280,255],color:16711680,coordScale:1.5,noiseIntensity:.001,noiseTimeCoef:1e-4,pointSize:5,pointDecay:.005,sleepRadiusX:250,sleepRadiusY:250,sleepTimeCoefX:.001,sleepTimeCoefY:.002};function Dt(A){const n={...Ct,...A},a=n.gpgpuSize,e=a*a;let i,d,T,l,h;const u={value:0},f={value:n.coordScale},v={value:n.noiseIntensity},y={value:n.pointSize},M={value:n.pointDecay},r={value:new oe(n.color)},o={value:new E},c={value:new E},x={uTime:u,uCoordScale:f,uNoiseIntensity:v,uPointSize:y,uPointDecay:M,uColor:r,uMouse:o,uMouseDirection:c};let p,m,R,w=!1;const O=new E;return Fe({...St(A),antialias:!1,initRenderer({renderer:S}){D(S)},initScene({scene:S}){C(),S.add(R)},beforeRender({width:S,wWidth:k,wHeight:P,clock:_,pointer:L}){if(w)O.x=L.nPosition.x*.5*k,O.y=L.nPosition.y*.5*P;else{const z=_.time*n.sleepTimeCoefX,j=_.time*n.sleepTimeCoefY,G=Math.cos(z),J=Math.sin(j),Z=n.sleepRadiusX*k/S,B=n.sleepRadiusY*k/S;O.x=Z*G,O.y=B*J}o.value.lerp(O,.05),u.value=_.time*n.noiseTimeCoef,i.compute(),m.uniforms.texturePosition.value=i.getCurrentRenderTarget(h).texture,m.uniforms.textureVelocity.value=i.getCurrentRenderTarget(l).texture},onPointerMove({delta:S}){w=!0,c.value.copy(S)},onPointerLeave(){w=!1}}),{config:n,uniforms:x};function D(S){i=new bt(a,a,S),S.capabilities.isWebGL2||i.setDataType(pt),d=i.createTexture(),T=i.createTexture(),F(d,T),l=i.addVariable("textureVelocity",`
      ${Et}
      uniform float uTime;
      uniform float uCoordScale;
      uniform float uNoiseIntensity;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);

        if (pos.w < 0.0) {
          vel.x = 0.0;
          vel.y = 0.0;
          vel.z = 0.0;
        } else {
          vec3 grad;
          vec3 p = vec3(0.0);
          float n = psrdnoise(pos.xyz * uCoordScale, p, uTime, grad);
          vel.xyz += grad * uNoiseIntensity * pos.w;
        }
        gl_FragColor = vel;
      }
    `,T),h=i.addVariable("texturePosition",`
      uniform float uPointDecay;
      uniform vec2 uMouse;
      uniform vec2 uMouseDirection;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);
        if (pos.w < 0.0) { pos.w = vel.w; }
        pos.w -= uPointDecay;
        if (pos.w <= 0.0) {
          pos.xy = uMouse.xy;
          pos.z = 0.0;
        } else {
          pos.xyz += vel.xyz;
        }
        gl_FragColor = pos;
      }
    `,d),i.setVariableDependencies(l,[h,l]),i.setVariableDependencies(h,[h,l]),Object.keys(x).forEach(P=>{l.material.uniforms[P]=x[P],h.material.uniforms[P]=x[P]});const k=i.init();k!==null&&console.error(k)}function C(){p=new ft;const S=new Float32Array(e*3),k=new Float32Array(e*2),P=new Float32Array(e*3);for(let z=0;z<e*3;z+=3)S[z]=0,S[z+1]=0,S[z+2]=0;let _=0;for(let z=0;z<a;z++)for(let j=0;j<a;j++)k[_++]=j/(a-1),k[_++]=z/(a-1);const L=Pt(n.colors);for(let z=0;z<e*3;z+=3){const j=L.getColorAt(Math.random());P[z]=j.r,P[z+1]=j.g,P[z+2]=j.b}p.setAttribute("position",new se(S,3)),p.setAttribute("uv",new se(k,2)),p.setAttribute("color",new se(P,3)),m=new le({blending:mt,depthTest:!1,transparent:!0,vertexColors:!0,uniforms:{texturePosition:{value:null},textureVelocity:{value:null},uPointSize:y,uColor:r},vertexShader:`
        uniform sampler2D texturePosition;
        uniform sampler2D textureVelocity;
        uniform float uPointSize;
        varying vec4 vPos;
        varying vec4 vVel;
        varying vec3 vCol;
        void main() {
          vCol = color;
          vPos = texture2D(texturePosition, uv);
          vVel = texture2D(textureVelocity, uv);
          vec4 mvPosition = modelViewMatrix * vec4(vPos.xyz, 1.0);
          // gl_PointSize = smoothstep(0.0, 2.0, vPos.w) * uPointSize;
          gl_PointSize = vPos.w * (vVel.w + 0.5) * uPointSize;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying vec4 vPos;
        varying vec4 vVel;
        varying vec3 vCol;
        void main() {
          float dist = length(gl_PointCoord - 0.5);
          if (dist > 0.5) discard;
          // float a = smoothstep(0.0, 1.0, vPos.w);
          gl_FragColor = vec4(mix(vCol, uColor, vPos.w), vPos.w);
        }
      `}),R=new vt(p,m),R.matrixAutoUpdate=!1,R.updateMatrix()}function F(S,k){const P=S.image.data,_=k.image.data;for(let L=0,z=P.length;L<z;L+=4)P[L+0]=ke(1),P[L+1]=ke(1),P[L+2]=-1e5,P[L+3]=Oe(.1,1),_[L+0]=0,_[L+1]=0,_[L+2]=0,_[L+3]=Oe(.1,1)}}function St(A){const n={};return["el","canvas","width","height","resize"].forEach(e=>{A[e]!==void 0&&(n[e]=A[e])}),n}export{Dt as a,Rt as i};
