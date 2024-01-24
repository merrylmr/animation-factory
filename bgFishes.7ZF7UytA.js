import"./chunk.9p4a8sJU.js";import{OrthographicCamera as Ne,BufferGeometry as Re,Float32BufferAttribute as J,Color as ee,Vector2 as A,Vector3 as V,HalfFloatType as Ge,FogExp2 as qe,PlaneGeometry as De,InstancedBufferAttribute as ye,DoubleSide as Xe,TextureLoader as Ze,MeshBasicMaterial as Be,MeshPhongMaterial as Ke,MeshStandardMaterial as $e,InstancedMesh as Qe,WebGLRenderer as Je,PerspectiveCamera as be,Scene as Le,PointLight as et,DirectionalLight as tt,AmbientLight as nt,Camera as ot,Mesh as it,ShaderMaterial as at,WebGLRenderTarget as rt,RGBAFormat as we,DataTexture as st,FloatType as Te,MathUtils as ct,EventDispatcher as lt,MOUSE as q,TOUCH as X,Quaternion as ze,Spherical as Ee,NearestFilter as Q,ClampToEdgeWrapping as Se}from"https://unpkg.com/three@0.140.0/build/three.module.js";const Pe={type:"change"},ie={type:"start"},Ce={type:"end"};class ut extends lt{constructor(n,o){super(),o===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),o===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=n,this.domElement=o,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:q.ROTATE,MIDDLE:q.DOLLY,RIGHT:q.PAN},this.touches={ONE:X.ROTATE,TWO:X.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",pe),this._domElementKeyEvents=t},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(Pe),e.update(),l=i.NONE},this.update=function(){const t=new V,s=new ze().setFromUnitVectors(n.up,new V(0,1,0)),E=s.clone().invert(),N=new V,Y=new ze,W=2*Math.PI;return function(){const xe=e.object.position;t.copy(xe).sub(e.target),t.applyQuaternion(s),u.setFromVector3(t),e.autoRotate&&l===i.NONE&&R(F()),e.enableDamping?(u.theta+=v.theta*e.dampingFactor,u.phi+=v.phi*e.dampingFactor):(u.theta+=v.theta,u.phi+=v.phi);let j=e.minAzimuthAngle,U=e.maxAzimuthAngle;return isFinite(j)&&isFinite(U)&&(j<-Math.PI?j+=W:j>Math.PI&&(j-=W),U<-Math.PI?U+=W:U>Math.PI&&(U-=W),j<=U?u.theta=Math.max(j,Math.min(U,u.theta)):u.theta=u.theta>(j+U)/2?Math.max(j,u.theta):Math.min(U,u.theta)),u.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=h,u.radius=Math.max(e.minDistance,Math.min(e.maxDistance,u.radius)),e.enableDamping===!0?e.target.addScaledVector(d,e.dampingFactor):e.target.add(d),t.setFromSpherical(u),t.applyQuaternion(E),xe.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(v.theta*=1-e.dampingFactor,v.phi*=1-e.dampingFactor,d.multiplyScalar(1-e.dampingFactor)):(v.set(0,0,0),d.set(0,0,0)),h=1,p||N.distanceToSquared(e.object.position)>S||8*(1-Y.dot(e.object.quaternion))>S?(e.dispatchEvent(Pe),N.copy(e.object.position),Y.copy(e.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",he),e.domElement.removeEventListener("pointerdown",de),e.domElement.removeEventListener("pointercancel",me),e.domElement.removeEventListener("wheel",ve),e.domElement.removeEventListener("pointermove",te),e.domElement.removeEventListener("pointerup",ne),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",pe)};const e=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=i.NONE;const S=1e-6,u=new Ee,v=new Ee;let h=1;const d=new V;let p=!1;const g=new A,P=new A,r=new A,a=new A,m=new A,T=new A,f=new A,y=new A,M=new A,c=[],L={};function F(){return 2*Math.PI/60/60*e.autoRotateSpeed}function b(){return Math.pow(.95,e.zoomSpeed)}function R(t){v.theta-=t}function G(t){v.phi-=t}const K=function(){const t=new V;return function(s,E){t.setFromMatrixColumn(E,0),t.multiplyScalar(-s),d.add(t)}}(),$=function(){const t=new V;return function(s,E){e.screenSpacePanning===!0?t.setFromMatrixColumn(E,1):(t.setFromMatrixColumn(E,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(s),d.add(t)}}(),_=function(){const t=new V;return function(s,E){const N=e.domElement;if(e.object.isPerspectiveCamera){const Y=e.object.position;t.copy(Y).sub(e.target);let W=t.length();W*=Math.tan(e.object.fov/2*Math.PI/180),K(2*s*W/N.clientHeight,e.object.matrix),$(2*E*W/N.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(K(s*(e.object.right-e.object.left)/e.object.zoom/N.clientWidth,e.object.matrix),$(E*(e.object.top-e.object.bottom)/e.object.zoom/N.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function B(t){e.object.isPerspectiveCamera?h/=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom*t)),e.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function x(t){e.object.isPerspectiveCamera?h*=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/t)),e.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function D(t){g.set(t.clientX,t.clientY)}function z(t){f.set(t.clientX,t.clientY)}function I(t){a.set(t.clientX,t.clientY)}function O(t){P.set(t.clientX,t.clientY),r.subVectors(P,g).multiplyScalar(e.rotateSpeed);const s=e.domElement;R(2*Math.PI*r.x/s.clientHeight),G(2*Math.PI*r.y/s.clientHeight),g.copy(P),e.update()}function k(t){y.set(t.clientX,t.clientY),M.subVectors(y,f),M.y>0?B(b()):M.y<0&&x(b()),f.copy(y),e.update()}function w(t){m.set(t.clientX,t.clientY),T.subVectors(m,a).multiplyScalar(e.panSpeed),_(T.x,T.y),a.copy(m),e.update()}function H(t){t.deltaY<0?x(b()):t.deltaY>0&&B(b()),e.update()}function Ie(t){let s=!1;switch(t.code){case e.keys.UP:_(0,e.keyPanSpeed),s=!0;break;case e.keys.BOTTOM:_(0,-e.keyPanSpeed),s=!0;break;case e.keys.LEFT:_(e.keyPanSpeed,0),s=!0;break;case e.keys.RIGHT:_(-e.keyPanSpeed,0),s=!0;break}s&&(t.preventDefault(),e.update())}function ae(){if(c.length===1)g.set(c[0].pageX,c[0].pageY);else{const t=.5*(c[0].pageX+c[1].pageX),s=.5*(c[0].pageY+c[1].pageY);g.set(t,s)}}function re(){if(c.length===1)a.set(c[0].pageX,c[0].pageY);else{const t=.5*(c[0].pageX+c[1].pageX),s=.5*(c[0].pageY+c[1].pageY);a.set(t,s)}}function se(){const t=c[0].pageX-c[1].pageX,s=c[0].pageY-c[1].pageY,E=Math.sqrt(t*t+s*s);f.set(0,E)}function Fe(){e.enableZoom&&se(),e.enablePan&&re()}function _e(){e.enableZoom&&se(),e.enableRotate&&ae()}function ce(t){if(c.length==1)P.set(t.pageX,t.pageY);else{const E=oe(t),N=.5*(t.pageX+E.x),Y=.5*(t.pageY+E.y);P.set(N,Y)}r.subVectors(P,g).multiplyScalar(e.rotateSpeed);const s=e.domElement;R(2*Math.PI*r.x/s.clientHeight),G(2*Math.PI*r.y/s.clientHeight),g.copy(P)}function le(t){if(c.length===1)m.set(t.pageX,t.pageY);else{const s=oe(t),E=.5*(t.pageX+s.x),N=.5*(t.pageY+s.y);m.set(E,N)}T.subVectors(m,a).multiplyScalar(e.panSpeed),_(T.x,T.y),a.copy(m)}function ue(t){const s=oe(t),E=t.pageX-s.x,N=t.pageY-s.y,Y=Math.sqrt(E*E+N*N);y.set(0,Y),M.set(0,Math.pow(y.y/f.y,e.zoomSpeed)),B(M.y),f.copy(y)}function ke(t){e.enableZoom&&ue(t),e.enablePan&&le(t)}function je(t){e.enableZoom&&ue(t),e.enableRotate&&ce(t)}function de(t){e.enabled!==!1&&(c.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",te),e.domElement.addEventListener("pointerup",ne)),We(t),t.pointerType==="touch"?He(t):Ue(t))}function te(t){e.enabled!==!1&&(t.pointerType==="touch"?Ye(t):Ve(t))}function ne(t){fe(t),c.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",te),e.domElement.removeEventListener("pointerup",ne)),e.dispatchEvent(Ce),l=i.NONE}function me(t){fe(t)}function Ue(t){let s;switch(t.button){case 0:s=e.mouseButtons.LEFT;break;case 1:s=e.mouseButtons.MIDDLE;break;case 2:s=e.mouseButtons.RIGHT;break;default:s=-1}switch(s){case q.DOLLY:if(e.enableZoom===!1)return;z(t),l=i.DOLLY;break;case q.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;I(t),l=i.PAN}else{if(e.enableRotate===!1)return;D(t),l=i.ROTATE}break;case q.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;D(t),l=i.ROTATE}else{if(e.enablePan===!1)return;I(t),l=i.PAN}break;default:l=i.NONE}l!==i.NONE&&e.dispatchEvent(ie)}function Ve(t){if(e.enabled!==!1)switch(l){case i.ROTATE:if(e.enableRotate===!1)return;O(t);break;case i.DOLLY:if(e.enableZoom===!1)return;k(t);break;case i.PAN:if(e.enablePan===!1)return;w(t);break}}function ve(t){e.enabled===!1||e.enableZoom===!1||l!==i.NONE||(t.preventDefault(),e.dispatchEvent(ie),H(t),e.dispatchEvent(Ce))}function pe(t){e.enabled===!1||e.enablePan===!1||Ie(t)}function He(t){switch(ge(t),c.length){case 1:switch(e.touches.ONE){case X.ROTATE:if(e.enableRotate===!1)return;ae(),l=i.TOUCH_ROTATE;break;case X.PAN:if(e.enablePan===!1)return;re(),l=i.TOUCH_PAN;break;default:l=i.NONE}break;case 2:switch(e.touches.TWO){case X.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Fe(),l=i.TOUCH_DOLLY_PAN;break;case X.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;_e(),l=i.TOUCH_DOLLY_ROTATE;break;default:l=i.NONE}break;default:l=i.NONE}l!==i.NONE&&e.dispatchEvent(ie)}function Ye(t){switch(ge(t),l){case i.TOUCH_ROTATE:if(e.enableRotate===!1)return;ce(t),e.update();break;case i.TOUCH_PAN:if(e.enablePan===!1)return;le(t),e.update();break;case i.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ke(t),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;je(t),e.update();break;default:l=i.NONE}}function he(t){e.enabled!==!1&&t.preventDefault()}function We(t){c.push(t)}function fe(t){delete L[t.pointerId];for(let s=0;s<c.length;s++)if(c[s].pointerId==t.pointerId){c.splice(s,1);return}}function ge(t){let s=L[t.pointerId];s===void 0&&(s=new A,L[t.pointerId]=s),s.set(t.pageX,t.pageY)}function oe(t){const s=t.pointerId===c[0].pointerId?c[1]:c[0];return L[s.pointerId]}e.domElement.addEventListener("contextmenu",he),e.domElement.addEventListener("pointerdown",de),e.domElement.addEventListener("pointercancel",me),e.domElement.addEventListener("wheel",ve,{passive:!1}),this.update()}}function dt(C){const{domElement:n,onClick:o=()=>{},onEnter:e=()=>{},onMove:i=()=>{},onLeave:l=()=>{},onDragStart:S=()=>{},onDragMove:u=()=>{},onDragStop:v=()=>{}}=C,h=new A,d=new A,p=new A,g=new A,P=new A,r={position:h,nPosition:d,hover:!1,down:!1,removeListeners:F};return L(),r;function a(b){p.distanceTo(h)<20&&(c(b),o({position:h,nPosition:d}))}function m(b){r.hover=b.pointerType==="mouse",c(b),e({position:h,nPosition:d})}function T(b){r.down=!0,c(b),p.copy(h),g.copy(h),S({position:h,nPosition:d})}function f(b){c(b),P.copy(h).sub(g),r.down?u({position:h,nPosition:d,startPosition:p,lastPosition:g,delta:P}):r.hover||(r.hover=!0),i({position:h,nPosition:d,startPosition:p,lastPosition:g,delta:P}),g.copy(h)}function y(b){r.down=!1,v()}function M(b){r.down&&(r.down=!1,v()),r.hover=!1,l()}function c(b){const R=n.getBoundingClientRect();h.x=b.clientX-R.left,h.y=b.clientY-R.top,d.x=h.x/R.width*2-1,d.y=-(h.y/R.height)*2+1}function L(){n.addEventListener("click",a),n.addEventListener("pointerenter",m),n.addEventListener("pointerdown",T),n.addEventListener("pointermove",f),n.addEventListener("pointerup",y),n.addEventListener("pointerleave",M)}function F(){n.removeEventListener("click",a),n.removeEventListener("pointerenter",m),n.removeEventListener("pointerdown",T),n.removeEventListener("pointermove",f),n.removeEventListener("pointerup",y),n.removeEventListener("pointerleave",M)}}function mt(C){const n={el:null,canvas:null,eventsEl:null,width:null,height:null,resize:!0,alpha:!1,antialias:!1,orbitControls:!1,init(){},initCamera(){},initScene(){},afterResize(){},beforeRender(){},...C},o={renderer:null,camera:null,scene:null,pointer:null,width:0,height:0,wWidth:0,wHeight:0,clock:{startTime:0,time:0,elapsed:0},options:n};let e,i;return l(),o;function l(){var d,p,g,P,r;let a;if(n.el)a=document.createElement("canvas"),n.el.appendChild(a);else if(n.canvas)a=n.canvas;else throw new Error("Missing parameter : el or canvas is required");(d=n.init)==null||d.call(n,o),o.renderer=new Je({canvas:a,alpha:n.alpha,antialias:n.antialias}),(p=n.initRenderer)==null||p.call(n,o),o.camera=new be,o.camera.position.z=50,(g=n.initCamera)==null||g.call(n,o),n.orbitControls&&(i=new ut(o.camera,(P=n.eventsEl)!=null?P:o.renderer.domElement),i.enableDamping=!0,i.dampingFactor=.1,typeof n.orbitControls=="object"&&Object.keys(n.orbitControls).forEach(m=>{i[m]=n.orbitControls[m]})),v(),n.resize&&!n.width&&!n.height&&window.addEventListener("resize",v),o.scene=new Le,(r=n.initScene)==null||r.call(n,o),S(),e=n.render?n.render:()=>{o.renderer.render(o.scene,o.camera)},requestAnimationFrame(m=>{o.clock.startTime=o.clock.time=m,requestAnimationFrame(u)})}function S(){var d,p;const g={};n.onPointerEnter&&(g.onEnter=n.onPointerEnter),n.onPointerMove&&(g.onMove=n.onPointerMove),n.onPointerMove&&(g.onLeave=n.onPointerLeave),Object.keys(g).length>0&&(o.pointer=dt({domElement:(p=n.eventsEl)!=null?p:(d=n.el)!=null?d:n.canvas,...g}))}function u(d){const{clock:p}=o;p.elapsed=d-p.time,p.time=d,n.beforeRender(o),i&&i.update(),e(o),requestAnimationFrame(u)}function v(){var d;if(n.width&&n.height)o.width=n.width,o.height=n.height;else if(n.resize==="window")o.width=window.innerWidth,o.height=window.innerHeight;else{const p=o.renderer.domElement.parentElement;o.width=p.clientWidth,o.height=p.clientHeight}if(o.renderer.setSize(o.width,o.height),o.camera.aspect=o.width/o.height,o.camera.updateProjectionMatrix(),o.camera instanceof be){const p=h();o.wWidth=p[0],o.wHeight=p[1]}else o.wWidth=o.camera.top-o.camera.bottom,o.wHeight=o.camera.right-o.camera.left;(d=n.afterResize)==null||d.call(n,o)}function h(){const d=o.camera.fov*Math.PI/180,p=2*Math.tan(d/2)*Math.abs(o.camera.position.z);return[p*o.camera.aspect,p]}}function vt(C){const n={};return["el","canvas","eventsEl","width","height","resize","orbitControls"].forEach(o=>{C[o]!==void 0&&(n[o]=C[o])}),n}function pt(C,n){const o=[];if(Array.isArray(n)&&n.length>0){let e;n.forEach(i=>{switch(i.type){case"ambient":e=new nt(...i.params);break;case"directional":e=new tt(...i.params);break;case"point":e=new et(...i.params);break;default:console.error(`Unknown light type ${i.type}`)}e&&(typeof i.props=="object"&&Object.keys(i.props).forEach(l=>{l==="position"?e.position.set(...i.props[l]):e[l]=i.props[l]}),C.add(e),o.push(e))})}return o}class ht{constructor(n,o,e){this.variables=[],this.currentTextureIndex=0;let i=Te;const l=new Le,S=new ot;S.position.z=1;const u={passThruTexture:{value:null}},v=p(P(),u),h=new it(new De(2,2),v);l.add(h),this.setDataType=function(r){return i=r,this},this.addVariable=function(r,a,m){const T=this.createShaderMaterial(a),f={name:r,initialValueTexture:m,material:T,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Q,magFilter:Q};return this.variables.push(f),f},this.setVariableDependencies=function(r,a){r.dependencies=a},this.init=function(){if(e.capabilities.isWebGL2===!1&&e.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(e.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let r=0;r<this.variables.length;r++){const a=this.variables[r];a.renderTargets[0]=this.createRenderTarget(n,o,a.wrapS,a.wrapT,a.minFilter,a.magFilter),a.renderTargets[1]=this.createRenderTarget(n,o,a.wrapS,a.wrapT,a.minFilter,a.magFilter),this.renderTexture(a.initialValueTexture,a.renderTargets[0]),this.renderTexture(a.initialValueTexture,a.renderTargets[1]);const m=a.material,T=m.uniforms;if(a.dependencies!==null)for(let f=0;f<a.dependencies.length;f++){const y=a.dependencies[f];if(y.name!==a.name){let M=!1;for(let c=0;c<this.variables.length;c++)if(y.name===this.variables[c].name){M=!0;break}if(!M)return"Variable dependency not found. Variable="+a.name+", dependency="+y.name}T[y.name]={value:null},m.fragmentShader=`
uniform sampler2D `+y.name+`;
`+m.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const r=this.currentTextureIndex,a=this.currentTextureIndex===0?1:0;for(let m=0,T=this.variables.length;m<T;m++){const f=this.variables[m];if(f.dependencies!==null){const y=f.material.uniforms;for(let M=0,c=f.dependencies.length;M<c;M++){const L=f.dependencies[M];y[L.name].value=L.renderTargets[r].texture}}this.doRenderTarget(f.material,f.renderTargets[a])}this.currentTextureIndex=a},this.getCurrentRenderTarget=function(r){return r.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(r){return r.renderTargets[this.currentTextureIndex===0?1:0]};function d(r){r.defines.resolution="vec2( "+n.toFixed(1)+", "+o.toFixed(1)+" )"}this.addResolutionDefine=d;function p(r,a){a=a||{};const m=new at({uniforms:a,vertexShader:g(),fragmentShader:r});return d(m),m}this.createShaderMaterial=p,this.createRenderTarget=function(r,a,m,T,f,y){return r=r||n,a=a||o,m=m||Se,T=T||Se,f=f||Q,y=y||Q,new rt(r,a,{wrapS:m,wrapT:T,minFilter:f,magFilter:y,format:we,type:i,depthBuffer:!1})},this.createTexture=function(){const r=new Float32Array(n*o*4),a=new st(r,n,o,we,Te);return a.needsUpdate=!0,a},this.renderTexture=function(r,a){u.passThruTexture.value=r,this.doRenderTarget(v,a),u.passThruTexture.value=null},this.doRenderTarget=function(r,a){const m=e.getRenderTarget();h.material=r,e.setRenderTarget(a),e.render(l,S),h.material=v,e.setRenderTarget(m)};function g(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function P(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}function ft(C){let n=[];e(C);const o=new ee;return{setColors:e,getColorAt:i};function e(l){n=[],l.forEach(S=>{n.push(new ee(S))})}function i(l){const S=Math.max(0,Math.min(1,l))*(C.length-1),u=Math.floor(S),v=n[u];if(u===C.length-1)return v.getHex();const h=S-u,d=n[u+1];return o.r=v.r+h*(d.r-v.r),o.g=v.g+h*(d.g-v.g),o.b=v.b+h*(d.b-v.b),o.clone()}}var Me=`vec4 permute(vec4 x){vec4 xm=mod(x,289.0);return mod(((xm*34.0)+10.0)*xm,289.0);}float psrdnoise(vec3 x,vec3 period,float alpha,out vec3 gradient){
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
vec3 g0=vec3(gx.x,gy.x,gz.x);vec3 g1=vec3(gx.y,gy.y,gz.y);vec3 g2=vec3(gx.z,gy.z,gz.z);vec3 g3=vec3(gx.w,gy.w,gz.w);vec4 w=0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3));w=max(w,0.0);vec4 w2=w*w;vec4 w3=w2*w;vec4 gdotx=vec4(dot(g0,x0),dot(g1,x1),dot(g2,x2),dot(g3,x3));float n=dot(w3,gdotx);vec4 dw=-6.0*w2*gdotx;vec3 dn0=w3.x*g0+dw.x*x0;vec3 dn1=w3.y*g1+dw.y*x1;vec3 dn2=w3.z*g2+dw.z*x2;vec3 dn3=w3.w*g3+dw.w*x3;gradient=39.5*(dn0+dn1+dn2+dn3);return 39.5*n;}`;new Ne(-1,1,1,-1,0,1);const Ae=new Re;Ae.setAttribute("position",new J([-1,3,0,-1,-1,0,3,-1,0],3)),Ae.setAttribute("uv",new J([0,2,0,0,2,0],2));new Ne(-1,1,1,-1,0,1);const Oe=new Re;Oe.setAttribute("position",new J([-1,3,0,-1,-1,0,3,-1,0],3)),Oe.setAttribute("uv",new J([0,2,0,0,2,0],2));new ee(0);new A(1,0),new A(0,1);const{randFloat:gt,randFloatSpread:Z}=ct,xt={gpgpuSize:64,background:16777215,material:"basic",materialParams:{},texture:null,textureCount:1,colors:[16777215,16777215],lights:[{type:"ambient",params:[16777215,.5]},{type:"directional",params:[16777215,.5],props:{position:[20,50,100]}}],fogDensity:.01,fishScale:[1,1,1],fishWidthSegments:8,fishSpeed:1.5,fishDisplacementScale:.2,noiseCoordScale:.02,noiseTimeCoef:5e-4,noiseIntensity:.0025,attractionRadius1:50,attractionRadius2:100,maxVelocity:.1};function yt(C){const n={...xt,...C};if(!["basic","phong","standard"].includes(n.material))throw new Error(`Invalid material ${n.material}`);if(!Number.isInteger(n.fishWidthSegments)||n.fishWidthSegments%2!==0)throw new Error(`Invalid fishWidthSegments ${n.fishWidthSegments}`);const o=n.gpgpuSize,e=o*o;let i,l,S,u,v;const h={value:null},d={value:null},p={value:null},g={value:0},P={value:n.noiseCoordScale},r={value:n.noiseIntensity},a={value:n.maxVelocity},m={value:n.attractionRadius1},T={value:n.attractionRadius2},f={value:new V(...n.fishScale)},y={value:n.fishSpeed},M={value:n.fishDisplacementScale},c={uTexturePosition:h,uOldTexturePosition:d,uTextureVelocity:p},L={uTime:g,uNoiseCoordScale:P,uNoiseIntensity:r,uMaxVelocity:a,uAttractionRadius1:m,uAttractionRadius2:T,uFishScale:f,uFishSpeed:y,uFishDisplacementScale:M},F={...c,...L};let b,R,G;return{three:mt({...vt(C),antialias:!0,orbitControls:!0,initRenderer({renderer:x}){K(x)},initCamera({camera:x}){x.position.set(0,20,70)},initScene({scene:x}){$(x)},beforeRender({clock:x}){g.value=x.time*n.noiseTimeCoef,i.compute(),h.value=v.renderTargets[i.currentTextureIndex].texture,d.value=v.renderTargets[i.currentTextureIndex===0?1:0].texture,p.value=u.renderTargets[i.currentTextureIndex].texture}}),config:n,uniforms:F,setColors:_};function K(x){i=new ht(o,o,x),x.capabilities.isWebGL2||i.setDataType(Ge),l=i.createTexture(),S=i.createTexture(),B(l,S),u=i.addVariable("textureVelocity",`
      ${Me}
      uniform float uTime;
      uniform float uNoiseCoordScale;
      uniform float uNoiseIntensity;
      uniform float uMaxVelocity;
      uniform float uAttractionRadius1;
      uniform float uAttractionRadius2;
      uniform float uFishSpeed;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);

        vec3 grad;
        float n = psrdnoise(pos.xyz * uNoiseCoordScale, vec3(0), uTime, grad);
        grad = grad * uNoiseIntensity;
        vel.xyz = vel.xyz + (pos.w * 0.75) * grad;

        vec3 dv = -pos.xyz;
        float coef = smoothstep(uAttractionRadius1, uAttractionRadius2, length(dv));
        vel.xyz = vel.xyz + pos.w * coef * normalize(dv);
        vel.xyz = clamp(vel.xyz, -uMaxVelocity, uMaxVelocity);

        vel.w = mod(vel.w + length(vel.xyz) * (0.5 + pos.w) * uFishSpeed, 6.2831853071);
        gl_FragColor = vel;
      }
    `,S),v=i.addVariable("texturePosition",`
      ${Me}
      uniform float uTime;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);
        pos.xyz += vel.xyz;
        gl_FragColor = pos;
      }
    `,l),i.setVariableDependencies(u,[v,u]),i.setVariableDependencies(v,[v,u]),Object.keys(L).forEach(z=>{u.material.uniforms[z]=F[z],v.material.uniforms[z]=F[z]});const D=i.init();if(D!==null)throw new Error(D)}function $(x){n.background!==void 0&&(x.background=new ee(n.background),n.fogDensity&&(x.fog=new qe(n.background,n.fogDensity))),pt(x,n.lights),b=new De(2,1,n.fishWidthSegments,1).rotateY(Math.PI/2);const D=new Float32Array(e*2),z=new Float32Array(e);let I=0,O=0;for(let w=0;w<o;w++)for(let H=0;H<o;H++)D[I++]=H/(o-1),D[I++]=w/(o-1),z[O++]=Math.floor(Math.random()*n.textureCount);b.setAttribute("gpuUv",new ye(D,2)),b.setAttribute("mapIndex",new ye(z,1));const k={side:Xe,...n.materialParams};switch(n.texture&&(k.map=new Ze().load(n.texture)),k.onBeforeCompile=w=>{w.defines={COMPUTE_NORMALS:n.material!=="basic",FISH_DZ:(2/n.fishWidthSegments).toFixed(10),TEXTURE_COUNT:n.textureCount.toFixed(10)},Object.keys(F).forEach(H=>{w.uniforms[H]=F[H]}),w.vertexShader=`
        uniform sampler2D uTexturePosition;
        uniform sampler2D uOldTexturePosition;
        uniform sampler2D uTextureVelocity;
        uniform vec3 uFishScale;
        uniform float uFishDisplacementScale;
        attribute vec2 gpuUv;
        attribute float mapIndex;
        varying vec4 vPos;
        varying vec4 vVel;
        varying float vMapIndex;

        mat3 lookAt(vec3 origin, vec3 target, vec3 up) {
          vec3 z = target - origin;
          if (z.x * z.x + z.y * z.y + z.z * z.z == 0.0) { z.z = 1.0; }
          z = normalize(z);
          vec3 x = cross(up, z);
          if (x.x * x.x + x.y * x.y + x.z * x.z == 0.0) {
            if (abs(up.z) == 1.0) { z.x += 0.0001; }
            else { z.z += 0.0001; }
            x = cross(up, z);
          }
          x = normalize(x);
          vec3 y = cross(z, x);
          return mat3(x, y, z);
        }

        mat4 iMatrix(vec3 pos, mat3 rmat, vec3 scale) {
          return mat4(
            rmat[0][0] * scale.x, rmat[0][1] * scale.x, rmat[0][2] * scale.x, 0.0,
            rmat[1][0] * scale.y, rmat[1][1] * scale.y, rmat[1][2] * scale.y, 0.0,
            rmat[2][0] * scale.z, rmat[2][1] * scale.z, rmat[2][2] * scale.z, 0.0,
            pos.x, pos.y, pos.z, 1.0
          );
        }
      `+w.vertexShader,w.vertexShader=w.vertexShader.replace("#include <defaultnormal_vertex>",""),w.vertexShader=w.vertexShader.replace("#include <normal_vertex>",""),w.vertexShader=w.vertexShader.replace("#include <begin_vertex>",`
        vPos = texture2D(uTexturePosition, gpuUv);
        vec4 oldPos = texture2D(uOldTexturePosition, gpuUv);
        vVel = texture2D(uTextureVelocity, gpuUv);
        vMapIndex = float(mapIndex);

        mat3 rmat = lookAt(oldPos.xyz, vPos.xyz, vec3(0, 1, 0));
        mat4 im = iMatrix(vPos.xyz, rmat, (0.5 + vPos.w) * uFishScale);

        vec3 transformed = vec3(position);

        #ifdef COMPUTE_NORMALS
          vec3 transformedNormal = objectNormal; 
        #endif

        float dz = transformed.z + 1.0;
        float sdz = smoothstep(2.0, 0.0, dz);
        transformed.x += sin(vVel.w + dz * PI * 1.5) * sdz * uFishDisplacementScale;

        #ifdef COMPUTE_NORMALS
          float dz1 = dz - 0.2;
          float sdz1 = smoothstep(2.0, 0.0, dz1);
          float dx1 = sin(vVel.w + dz1 * PI * 1.5) * sdz1 * uFishDisplacementScale - transformed.x;
          vec3 v1 = vec3(dx1, 0.0, -FISH_DZ);
          vec3 v2 = vec3(0.0, 1.0, 0.0);
          transformedNormal = normalize(cross(v1, v2));
        #endif

        #ifdef COMPUTE_NORMALS
          #ifdef USE_INSTANCING
            mat3 m = mat3( im );
            transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
            transformedNormal = m * transformedNormal;
          #endif
          transformedNormal = normalMatrix * transformedNormal;
          #ifdef FLIP_SIDED
            transformedNormal = - transformedNormal;
          #endif
          #ifdef USE_TANGENT
            vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
            #ifdef FLIP_SIDED
              transformedTangent = - transformedTangent;
            #endif
          #endif
          #ifndef FLAT_SHADED
            vNormal = normalize( transformedNormal );
            #ifdef USE_TANGENT
              vTangent = normalize( transformedTangent );
              vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
            #endif
          #endif
        #endif
      `),w.vertexShader=w.vertexShader.replace("#include <project_vertex>",`
        vec4 mvPosition = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          mvPosition = im * mvPosition;
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;
      `),w.fragmentShader=`
        varying float vMapIndex;
      `+w.fragmentShader,w.fragmentShader=w.fragmentShader.replace("#include <map_fragment>",`
        #ifdef USE_MAP
          vec2 uv = vUv;
          uv.x = (vMapIndex + vUv.x) / TEXTURE_COUNT;
          vec4 sampledDiffuseColor = texture2D(map, uv);
          diffuseColor *= sampledDiffuseColor;
        #endif
      `)},n.material){case"standard":R=new $e(k);break;case"phong":R=new Ke(k);break;default:R=new Be(k)}G=new Qe(b,R,e),_(n.colors),x.add(G)}function _(x){if(Array.isArray(x)&&x.length>1){const D=ft(x);for(let z=0;z<e;z++)G.setColorAt(z,D.getColorAt(z/e));G.instanceColor.needsUpdate=!0}}function B(x,D){const z=x.image.data,I=D.image.data;for(let O=0,k=z.length;O<k;O+=4)z[O+0]=Z(100),z[O+1]=Z(100),z[O+2]=Z(100),z[O+3]=gt(.1,1),I[O+0]=Z(.5),I[O+1]=Z(.5),I[O+2]=Z(.5),I[O+3]=0}}const bt="/assets/fishes.gqHgdH71.png";yt({el:document.getElementById("app"),gpgpuSize:96,background:204616,fogDensity:.025,texture:bt,textureCount:8,material:"phong",materialParams:{transparent:!0,alphaTest:.5},fishScale:[1,1,1],fishWidthSegments:8,fishSpeed:1.5,noiseCoordScale:.01,noiseTimeCoef:5e-4,noiseIntensity:5e-4,attractionRadius1:50,attractionRadius2:150,maxVelocity:.1});
