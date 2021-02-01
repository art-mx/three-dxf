!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("THREE")):"function"==typeof define&&define.amd?define(["THREE"],t):"object"==typeof exports?exports.ThreeDxf=t(require("THREE")):e.ThreeDxf=t(e.THREE)}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t),n.d(t,"Viewer",(function(){return a}));var o=n(0);function i(e,t){this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new o.Vector3,this.center=this.target,this.noZoom=!1,this.zoomSpeed=1,this.minDistance=0,this.maxDistance=1/0,this.noRotate=!1,this.rotateSpeed=1,this.noPan=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.noKeys=!1,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40};var n=this,i=new o.Vector2,r=new o.Vector2,a=new o.Vector2,s=new o.Vector2,c=new o.Vector2,p=new o.Vector2,l=new o.Vector3,u=new o.Vector3,h=new o.Vector2,d=new o.Vector2,f=new o.Vector2,m=1,y=new o.Vector3,v=(new o.Vector3,-1),x=0,g=1,b=2,w=3,E=4,M=5,P=v;this.target0=this.target.clone(),this.position0=this.object.position.clone();var L={type:"change"},j={type:"start"},S={type:"end"};function z(){return 2*Math.PI/60/60*n.autoRotateSpeed}function k(){return Math.pow(.95,n.zoomSpeed)}function V(e){if(!1!==n.enabled){e.preventDefault();var t=n.domElement===document?n.domElement.body:n.domElement;if(P===x){if(!0===n.noRotate)return;r.set(e.clientX,e.clientY),a.subVectors(r,i),n.rotateLeft(2*Math.PI*a.x/t.clientWidth*n.rotateSpeed),n.rotateUp(2*Math.PI*a.y/t.clientHeight*n.rotateSpeed),i.copy(r)}else if(P===g){if(!0===n.noZoom)return;d.set(e.clientX,e.clientY),f.subVectors(d,h),f.y>0?n.dollyIn():n.dollyOut(),h.copy(d)}else if(P===b){if(!0===n.noPan)return;c.set(e.clientX,e.clientY),p.subVectors(c,s),n.pan(p.x,p.y),s.copy(c)}n.update()}}function T(){!1!==n.enabled&&(n.domElement.removeEventListener("mousemove",V,!1),n.domElement.removeEventListener("mouseup",T,!1),n.dispatchEvent(S),P=v)}function C(e){if(!1!==n.enabled&&!0!==n.noZoom){e.preventDefault();var t=0;void 0!==e.wheelDelta?t=e.wheelDelta:void 0!==e.detail&&(t=-e.detail),t>0?n.dollyOut():n.dollyIn(),n.update(),n.dispatchEvent(j),n.dispatchEvent(S)}}this.rotateLeft=function(e){void 0===e&&(e=z()),e},this.rotateUp=function(e){void 0===e&&(e=z()),e},this.panLeft=function(e){var t=this.object.matrix.elements;l.set(t[0],t[1],t[2]),l.multiplyScalar(-e),y.add(l)},this.panUp=function(e){var t=this.object.matrix.elements;l.set(t[4],t[5],t[6]),l.multiplyScalar(e),y.add(l)},this.pan=function(e,t){var o=n.domElement===document?n.domElement.body:n.domElement;if(void 0!==n.object.fov){var i=n.object.position.clone().sub(n.target).length();i*=Math.tan(n.object.fov/2*Math.PI/180),n.panLeft(2*e*i/o.clientHeight),n.panUp(2*t*i/o.clientHeight)}else void 0!==n.object.top?(n.panLeft(e*(n.object.right-n.object.left)/o.clientWidth),n.panUp(t*(n.object.top-n.object.bottom)/o.clientHeight)):console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")},this.dollyIn=function(e){void 0===e&&(e=k()),m/=e},this.dollyOut=function(e){void 0===e&&(e=k()),m*=e},this.update=function(){void 0!==n.object.top&&(this.object.top=m*this.object.top,this.object.bottom=m*this.object.bottom,this.object.left=m*this.object.left,this.object.right=m*this.object.right,this.object.updateProjectionMatrix());var e=this.object.position;u.copy(e).sub(this.target),this.target.add(y),e.copy(this.target).add(u),this.object.lookAt(this.target),this.dispatchEvent(L),m=1,y.set(0,0,0)},this.reset=function(){P=v,this.target.copy(this.target0),this.object.position.copy(this.position0),this.update()},this.domElement.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),this.domElement.addEventListener("mousedown",(function(e){if(!1!==n.enabled){if(e.preventDefault(),0===e.button){if(!0===n.noRotate)return;P=x,i.set(e.clientX,e.clientY)}else if(1===e.button){if(!0===n.noZoom)return;P=g,h.set(e.clientX,e.clientY)}else if(2===e.button){if(!0===n.noPan)return;P=b,s.set(e.clientX,e.clientY)}n.domElement.addEventListener("mousemove",V,!1),n.domElement.addEventListener("mouseup",T,!1),n.dispatchEvent(j)}}),!1),this.domElement.addEventListener("mousewheel",C,!1),this.domElement.addEventListener("DOMMouseScroll",C,!1),this.domElement.addEventListener("touchstart",(function(e){if(!1!==n.enabled){switch(e.touches.length){case 1:if(!0===n.noRotate)return;P=w,i.set(e.touches[0].pageX,e.touches[0].pageY);break;case 2:if(!0===n.noZoom)return;P=E;var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,r=Math.sqrt(t*t+o*o);h.set(0,r);break;case 3:if(!0===n.noPan)return;P=M,s.set(e.touches[0].pageX,e.touches[0].pageY);break;default:P=v}n.dispatchEvent(j)}}),!1),this.domElement.addEventListener("touchend",(function(){!1!==n.enabled&&(n.dispatchEvent(S),P=v)}),!1),this.domElement.addEventListener("touchmove",(function(e){if(!1!==n.enabled){e.preventDefault(),e.stopPropagation();var t=n.domElement===document?n.domElement.body:n.domElement;switch(e.touches.length){case 1:if(!0===n.noRotate)return;if(P!==w)return;r.set(e.touches[0].pageX,e.touches[0].pageY),a.subVectors(r,i),n.rotateLeft(2*Math.PI*a.x/t.clientWidth*n.rotateSpeed),n.rotateUp(2*Math.PI*a.y/t.clientHeight*n.rotateSpeed),i.copy(r),n.update();break;case 2:if(!0===n.noZoom)return;if(P!==E)return;var o=e.touches[0].pageX-e.touches[1].pageX,l=e.touches[0].pageY-e.touches[1].pageY,u=Math.sqrt(o*o+l*l);d.set(0,u),f.subVectors(d,h),f.y>0?n.dollyOut():n.dollyIn(),h.copy(d),n.update();break;case 3:if(!0===n.noPan)return;if(P!==M)return;c.set(e.touches[0].pageX,e.touches[0].pageY),p.subVectors(c,s),n.pan(p.x,p.y),s.copy(c),n.update();break;default:P=v}}}),!1),window.addEventListener("keydown",(function(e){if(!1!==n.enabled&&!0!==n.noKeys&&!0!==n.noPan)switch(e.keyCode){case n.keys.UP:n.pan(0,n.keyPanSpeed),n.update();break;case n.keys.BOTTOM:n.pan(0,-n.keyPanSpeed),n.update();break;case n.keys.LEFT:n.pan(n.keyPanSpeed,0),n.update();break;case n.keys.RIGHT:n.pan(-n.keyPanSpeed,0),n.update()}}),!1)}i.prototype=Object.create(o.EventDispatcher.prototype);var r={Math:{}};function a(e,t,n,a,s,c){!function(e){var t,n;if(!e.tables||!e.tables.lineType)return;var o=e.tables.lineType.lineTypes;for(n in o)(t=o[n]).pattern&&(t.material=T(t.pattern))}(e);var p,l,u,h=new o.Scene,d={min:{x:!1,y:!1,z:!1},max:{x:!1,y:!1,z:!1}};for(p=0;p<e.entities.length;p++){if(u=S(l=e.entities[p],e,c)){var f=(new o.Box3).setFromObject(u);f.min.x&&(!1===d.min.x||d.min.x>f.min.x)&&(d.min.x=f.min.x),f.min.y&&(!1===d.min.y||d.min.y>f.min.y)&&(d.min.y=f.min.y),f.min.z&&(!1===d.min.z||d.min.z>f.min.z)&&(d.min.z=f.min.z),f.max.x&&(!1===d.max.x||d.max.x<f.max.x)&&(d.max.x=f.max.x),f.max.y&&(!1===d.max.y||d.max.y<f.max.y)&&(d.max.y=f.max.y),f.max.z&&(!1===d.max.z||d.max.z<f.max.z)&&(d.max.z=f.max.z),h.add(u)}u=null}var m=(n=n||t.clientWidth)/(a=a||t.clientHeight),y=d.max.x,v=d.max.y,x=d.min.x,g=d.min.y,b=y-x,w=v-g;c.width=b,c.height=w;var E=E||{x:b/2+x,y:w/2+g};m>Math.abs(b/w)?b=w*m:w=b/m;var M={bottom:-w/2,left:-b/2,top:w/2,right:b/2,center:{x:E.x,y:E.y}},P=new o.OrthographicCamera(M.left,M.right,M.top,M.bottom,.5,19);P.position.z=10,P.position.x=M.center.x,P.position.y=M.center.y,P.zoom=.9,this.camera=P;var L=this.renderer=new o.WebGLRenderer;L.setSize(n,a),L.setClearColor(268435455,1),t.appendChild(L.domElement),t.style.display="block";var j=new i(P,t);function S(e,t,n){var i;if("CIRCLE"===e.type||"ARC"===e.type)i=function(e,t){var n,i;"CIRCLE"===e.type?(n=e.startAngle||0,i=n+2*Math.PI):(n=e.startAngle,i=e.endAngle);var r=new o.ArcCurve(0,0,e.radius,n,i).getPoints(32),a=(new o.BufferGeometry).setFromPoints(r),s=new o.LineBasicMaterial({color:V(e,t)}),c=new o.Line(a,s);return c.position.x=e.center.x,c.position.y=e.center.y,c.position.z=e.center.z,c}(e,t);else if("LWPOLYLINE"===e.type||"LINE"===e.type||"POLYLINE"===e.type)i=function(e,t){var n,i,a,s,c,p,l,u,h=new o.Geometry,d=V(e,t);if(!e.vertices)return console.log("entity missing vertices.");for(u=0;u<e.vertices.length;u++)e.vertices[u].bulge?(l=e.vertices[u].bulge,s=e.vertices[u],c=u+1<e.vertices.length?e.vertices[u+1]:h.vertices[0],p=new r.BulgeGeometry(s,c,l),h.vertices.push.apply(h.vertices,p.vertices)):(a=e.vertices[u],h.vertices.push(new o.Vector3(a.x,a.y,0)));e.shape&&h.vertices.push(h.vertices[0]);e.lineType&&(i=t.tables.lineType.lineTypes[e.lineType]);n=i&&i.pattern&&0!==i.pattern.length?new o.LineDashedMaterial({color:d,gapSize:4,dashSize:4}):new o.LineBasicMaterial({linewidth:1,color:d});return new o.Line(h,n)}(e,t),n.sum_lengths+=function(e){var t=0;for(vert=e.vertices,point_num=vert.length,p=0;p<point_num-1;p++)v1=vert[p],v2=vert[p+1],t+=k(v1.x,v1.y,v2.x,v2.y);e.shape&&(t+=k(vert[point_num-1].x,vert[point_num-1].y,vert[0].x,vert[0].y));return t}(e);else if("TEXT"===e.type)i=function(e,t){var n,i,r;if(!s)return console.warn("Text is not supported without a Three.js font loaded with THREE.FontLoader! Load a font of your choice and pass this into the constructor. See the sample for this repository or Three.js examples at http://threejs.org/examples/?q=text#webgl_geometry_text for more details.");if(n=new o.TextGeometry(e.text,{font:s,height:0,size:e.textHeight||12}),e.rotation){var a=e.rotation*Math.PI/180;n.rotateZ(a)}return i=new o.MeshBasicMaterial({color:V(e,t)}),(r=new o.Mesh(n,i)).position.x=e.startPoint.x,r.position.y=e.startPoint.y,r.position.z=e.startPoint.z,r}(e,t);else if("SOLID"===e.type)i=function(e,t){var n,i,r=new o.Geometry;(i=r.vertices).push(new o.Vector3(e.points[0].x,e.points[0].y,e.points[0].z)),i.push(new o.Vector3(e.points[1].x,e.points[1].y,e.points[1].z)),i.push(new o.Vector3(e.points[2].x,e.points[2].y,e.points[2].z)),i.push(new o.Vector3(e.points[3].x,e.points[3].y,e.points[3].z));var a=new o.Vector3,s=new o.Vector3;a.subVectors(i[1],i[0]),s.subVectors(i[2],i[0]),a.cross(s),a.z<0?(r.faces.push(new o.Face3(2,1,0)),r.faces.push(new o.Face3(2,3,1))):(r.faces.push(new o.Face3(0,1,2)),r.faces.push(new o.Face3(1,3,2)));return n=new o.MeshBasicMaterial({color:V(e,t)}),new o.Mesh(r,n)}(e,t);else if("POINT"===e.type)i=function(e,t){var n,i,r;(n=new o.Geometry).vertices.push(new o.Vector3(e.position.x,e.position.y,e.position.z));var a=V(e,t),s=new Float32Array(3);s[0]=a.r,s[1]=a.g,s[2]=a.b,n.colors=s,n.computeBoundingBox(),i=new o.PointsMaterial({size:.05,vertexColors:o.VertexColors}),r=new o.Points(n,i),h.add(r)}(e,t);else if("INSERT"===e.type)i=function(e,t){var n=t.blocks[e.name];if(!n.entities)return null;var i=new o.Object3D;e.xScale&&(i.scale.x=e.xScale);e.yScale&&(i.scale.y=e.yScale);e.rotation&&(i.rotation.z=e.rotation*Math.PI/180);e.position&&(i.position.x=e.position.x,i.position.y=e.position.y,i.position.z=e.position.z);for(var r=0;r<n.entities.length;r++){var a=S(n.entities[r],t,i);a&&i.add(a)}return i}(e,t);else if("SPLINE"===e.type)i=function(e,t,n){var i,r=V(e,t),a=e.controlPoints.map((function(e){return new o.Vector2(e.x,e.y)})),s=[];if(2===e.degreeOfSplineCurve||3===e.degreeOfSplineCurve){var c=0;for(c=0;c+2<a.length;c+=2)i=2===e.degreeOfSplineCurve?new o.QuadraticBezierCurve(a[c],a[c+1],a[c+2]):new o.QuadraticBezierCurve3(a[c],a[c+1],a[c+2]),s.push.apply(s,i.getPoints(50));c<a.length&&(i=new o.QuadraticBezierCurve3(a[c],a[c+1],a[c+1]),s.push.apply(s,i.getPoints(50)))}else i=new o.SplineCurve(a),s=i.getPoints(100);n.sum_lengths+=z(i);var p=(new o.BufferGeometry).setFromPoints(s),l=new o.LineBasicMaterial({linewidth:1,color:r});return new o.Line(p,l)}(e,t,n);else if("MTEXT"===e.type)i=function(e,t){var n=V(e,t);if(!s)return console.log("font parameter not set. Ignoring text entity.");var i=new o.TextGeometry(e.text,{font:s,size:.8*e.height,height:1}),r=new o.MeshBasicMaterial({color:n}),a=new o.Mesh(i,r),c=new o.Box3;c.setFromObject(a);var p=c.max.x-c.min.x;if(p>e.width)return void console.log("Can't render this multipline MTEXT entity, sorry.",e);switch(a.position.z=0,e.attachmentPoint){case 1:a.position.x=e.position.x,a.position.y=e.position.y-e.height;break;case 2:a.position.x=e.position.x-p/2,a.position.y=e.position.y-e.height;break;case 3:a.position.x=e.position.x-p,a.position.y=e.position.y-e.height;break;case 4:a.position.x=e.position.x,a.position.y=e.position.y-e.height/2;break;case 5:a.position.x=e.position.x-p/2,a.position.y=e.position.y-e.height/2;break;case 6:a.position.x=e.position.x-p,a.position.y=e.position.y-e.height/2;break;case 7:a.position.x=e.position.x,a.position.y=e.position.y;break;case 8:a.position.x=e.position.x-p/2,a.position.y=e.position.y;break;case 9:a.position.x=e.position.x-p,a.position.y=e.position.y;break;default:return}return a}(e,t);else if("ELLIPSE"===e.type)i=function(e,t,n){var i=V(e,t),r=Math.sqrt(Math.pow(e.majorAxisEndPoint.x,2)+Math.pow(e.majorAxisEndPoint.y,2)),a=r*e.axisRatio,s=Math.atan2(e.majorAxisEndPoint.y,e.majorAxisEndPoint.x),c=new o.EllipseCurve(e.center.x,e.center.y,r,a,e.startAngle,e.endAngle,!1,s);n.sum_lengths+=z(c);var p=c.getPoints(50),l=(new o.BufferGeometry).setFromPoints(p),u=new o.LineBasicMaterial({linewidth:1,color:i});return new o.Line(l,u)}(e,t,n);else if("DIMENSION"===e.type){var a=7&e.dimensionType;0===a?i=function(e,t){var n=t.blocks[e.block];if(!n||!n.entities)return null;for(var i=new o.Object3D,r=0;r<n.entities.length;r++){var a=S(n.entities[r],t,i);a&&i.add(a)}return i}(e,t):console.log("Unsupported Dimension type: "+a)}else console.log("Unsupported Entity Type: "+e.type);return i}function z(e){var t=e.getLengths(100).reduce((e,t)=>e+t,0);return console.log(`entity ${l.type} length = ${t}`),t}function k(e,t,n,o){return Math.sqrt(Math.pow(n-e,2)+Math.pow(o-t,2))}function V(e,t){var n=0;return e.color?n=e.color:t.tables&&t.tables.layer&&t.tables.layer.layers[e.layer]&&(n=t.tables.layer.layers[e.layer].color),null!=n&&16777215!==n||(n=0),n}function T(e){var t,n={},i=0;for(t=0;t<e.length;t++)i+=Math.abs(e[t]);return n.uniforms=o.UniformsUtils.merge([o.UniformsLib.common,o.UniformsLib.fog,{pattern:{type:"fv1",value:e},patternLength:{type:"f",value:i}}]),n.vertexShader=["attribute float lineDistance;","varying float vLineDistance;",o.ShaderChunk.color_pars_vertex,"void main() {",o.ShaderChunk.color_vertex,"vLineDistance = lineDistance;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),n.fragmentShader=["uniform vec3 diffuse;","uniform float opacity;","uniform float pattern["+e.length+"];","uniform float patternLength;","varying float vLineDistance;",o.ShaderChunk.color_pars_fragment,o.ShaderChunk.fog_pars_fragment,"void main() {","float pos = mod(vLineDistance, patternLength);","for ( int i = 0; i < "+e.length+"; i++ ) {","pos = pos - abs(pattern[i]);","if( pos < 0.0 ) {","if( pattern[i] > 0.0 ) {","gl_FragColor = vec4(1.0, 0.0, 0.0, opacity );","break;","}","discard;","}","}",o.ShaderChunk.color_fragment,o.ShaderChunk.fog_fragment,"}"].join("\n"),n}j.target.x=P.position.x,j.target.y=P.position.y,j.target.z=0,j.zoomSpeed=3,this.render=function(){L.render(h,P)},j.addEventListener("change",this.render),this.render(),j.update(),this.update=function(){L.render(h,P),j.update()},this.resize=function(e,t){var n=e/L.domElement.width,o=t/L.domElement.height;P.top=o*P.top,P.bottom=o*P.bottom,P.left=n*P.left,P.right=n*P.right,L.setSize(e,t),L.setClearColor(268435455,1),this.render()}}r.Math.angle2=function(e,t){var n=new o.Vector2(e.x,e.y),i=new o.Vector2(t.x,t.y);return i.sub(n),i.normalize(),i.y<0?-Math.acos(i.x):Math.acos(i.x)},r.Math.polar=function(e,t,n){var o={};return o.x=e.x+t*Math.cos(n),o.y=e.y+t*Math.sin(n),o},r.BulgeGeometry=function(e,t,n,i){var a,s,c,p,l,u,h,d,f;for(o.Geometry.call(this),this.startPoint=p=e?new o.Vector2(e.x,e.y):new o.Vector2(0,0),this.endPoint=l=t?new o.Vector2(t.x,t.y):new o.Vector2(1,0),this.bulge=n=n||1,u=4*Math.atan(n),h=p.distanceTo(l)/2/Math.sin(u/2),c=r.Math.polar(e,h,r.Math.angle2(p,l)+(Math.PI/2-u/2)),this.segments=i=i||Math.max(Math.abs(Math.ceil(u/(Math.PI/18))),6),d=r.Math.angle2(c,p),f=u/i,this.vertices.push(new o.Vector3(p.x,p.y,0)),s=1;s<=i-1;s++)a=r.Math.polar(c,Math.abs(h),d+f*s),this.vertices.push(new o.Vector3(a.x,a.y,0))},r.BulgeGeometry.prototype=Object.create(o.Geometry.prototype)}])}));