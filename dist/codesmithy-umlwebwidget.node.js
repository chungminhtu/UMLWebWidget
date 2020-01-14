!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CodeSmithyUMLWebWidget=e():t.CodeSmithyUMLWebWidget=e()}(global,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);class n extends Error{}class s{constructor(t){this.width=600,this.height=200,this.canMove=!1,this.canResize=!1,this.logLevel="none",this.debug=!1,t&&(t.width&&(this.width=t.width),t.height&&(this.height=t.height),t.interactive&&t.interactive.canMove&&(this.canMove=t.interactive.canMove),null!=t.logLevel&&(this.logLevel=t.logLevel))}}class o{constructor(){this.style={defaults:{"margin-left":12,"margin-right":12,"margin-top":9,"margin-bottom":9},classtemplate:{"margin-right":15,"margin-top":12},classtemplateparameters:{"margin-left":8,"margin-right":8,"margin-top":4,"margin-bottom":4},lifeline:{"execution-specification-bar-width":8,"execution-specification-bar-overhang":5,"execution-specification-bar-margin":15}}}getTopMargin(t){return this.getValueOrDefault(this,t,"margin-top")}getBottomMargin(t){return this.getValueOrDefault(this,t,"margin-bottom")}getLeftMargin(t){return this.getValueOrDefault(this,t,"margin-left")}getRightMargin(t){return this.getValueOrDefault(this,t,"margin-right")}getExecutionSpecificationBarWidth(){return this.style.lifeline["execution-specification-bar-width"]}getExecutionSpecificationBarOverhang(){return this.style.lifeline["execution-specification-bar-overhang"]}getExecutionSpecificationBarMargin(){return this.style.lifeline["execution-specification-bar-margin"]}getValueOrDefault(t,e,i){return t.style[e]&&t.style[e][i]?t.style[e][i]:t.style.defaults[i]}}class a{constructor(t){switch(t){case"top-center":this.type=r;break;case"top-right":this.type=h;break;case"right-center":this.type=l;break;case"bottom-right":this.type=c;break;case"bottom-center":this.type=g;break;case"bottom-left":this.type=y;break;case"left-center":this.type=p;break;case"top-left":this.type=u}}equals(t){return this.type===t.type}static get TopCenter(){return x}static get TopRight(){return d}static get RightCenter(){return f}static get BottomRight(){return m}static get BottomCenter(){return b}static get BottomLeft(){return L}static get LeftCenter(){return C}static get TopLeft(){return w}}let r=0,h=1,l=2,c=3,g=4,y=5,p=6,u=7,x=new a("top-center"),d=new a("top-right"),f=new a("right-center"),m=new a("bottom-right"),b=new a("bottom-center"),L=new a("bottom-left"),C=new a("left-center"),w=new a("top-left");class v{constructor(t){this.layout=t,null==this.layout&&(this.layout={}),null==this.layout.elements&&(this.layout.elements={}),null==this.layout.connectorpositions&&(this.layout.connectorpositions={})}doLayout(t){for(let e of t.classboxes.values())this.setElementPosition(e);for(let e of t.lifelines.values())this.setElementPosition(e);for(let e of t.components.values())this.setElementPosition(e);for(let e of t.nodes.values())this.setElementPosition(e);for(let e of t.actors.values())this.setElementPosition(e);for(let e of t.usecases.values())this.setElementPosition(e);this.layoutMessages(t.lifelines,t.messages)}setElementPosition(t){let e=this.layout.elements[t.id];e&&e.position&&t.move(e.position.x,e.position.y)}layoutConnectors(t){for(var e=0;e<t.length;e++){let i=t[e],n=i.connectionPoint1,s=i.connectionPoint2,o=n.element.getConnectionPointsRectangle(),r=s.element.getConnectionPointsRectangle(),h=this.getConnectionPositions(o,r,i.type),l=n.element.id+"-"+s.element.id+"-"+i.type,c=this.layout.elements[l];if(c&&c.end)switch(c.end){case"top-center":h.end=a.TopCenter;break;case"right-center":h.end=a.RightCenter;break;case"bottom-center":h.end=a.BottomCenter;break;case"left-center":h.end=a.LeftCenter}n.setPosition(h.start),s.setPosition(h.end)}}layoutMessages(t,e){let i=0;for(let e of t.values())i=Math.max(i,e.getFirstConnectionPointPosition().y);let n=!0;for(let t of e){n?(n=!1,t.hasNonEmptyLabel()&&"creationmessage"!=t.type&&(i+=10)):t.hasNonEmptyLabel()&&(i+=16);let e=t.connectionPoint1,s=t.connectionPoint2,o=e.element,a=s.element;if("creationmessage"!=t.type&&"destructionmessage"!=t.type)o!=a?(e.move(o.getLineTopPosition().x,i),s.move(a.getLineTopPosition().x,i),i+=14):(e.move(o.getLineTopPosition().x,i),s.move(a.getLineTopPosition().x,i+20),"returnmessage"!=t.type&&(i+=34));else if("creationmessage"==t.type){a.move(a.x,i);let t=a.getCreationConnectionPointPosition().y;e.move(o.getLineTopPosition().x,t),s.move(a.getCreationConnectionPointPosition().x,t),i+=34}else"destructionmessage"==t.type&&(a.needToAdjustDestructionPosition()?s.move(a.getLineTopPosition().x,i+25):s.move(a.getLineTopPosition().x,i),i+=14)}if(e.length>0)for(let e of t.values())e.doLayout(),e.uptodate=!1;for(let t of e){let e=t.connectionPoint1,i=t.connectionPoint2,n=e.element,s=i.element;if(n==s){let t=e.y,o=e.x+n.getHorizontalOffset(t,"right");e.move(o,t);let a=i.y,r=i.x+s.getHorizontalOffset(a,"right");i.move(r,a)}else if(s.x>=n.x){let t=e.y,o=e.x+n.getHorizontalOffset(t,"right");e.move(o,t);let a=i.y,r=i.x+s.getHorizontalOffset(a,"left");i.move(r,a)}else{let t=e.y,o=e.x+n.getHorizontalOffset(t,"left");e.move(o,t);let a=i.y,r=i.x+s.getHorizontalOffset(a,"right");i.move(r,a)}t.uptodate=!1}}getConnectionPositions(t,e,i){let n={start:a.TopCenter,end:a.TopCenter};return"usecaseassociation"!=i?e.y+e.height<t.y?(n.start=a.TopCenter,n.end=a.BottomCenter):t.y+t.height<e.y?(n.start=a.BottomCenter,n.end=a.TopCenter):e.x+e.width<t.x?(n.start=a.LeftCenter,n.end=a.RightCenter):t.x+t.width<e.x&&(n.start=a.RightCenter,n.end=a.LeftCenter):t.x<e.x?(n.start=a.RightCenter,n.end=a.LeftCenter):t.x>e.x+e.width?(n.start=a.LeftCenter,n.end=a.RightCenter):t.y<e.y?(n.start=a.BottomCenter,n.end=a.TopCenter):(n.start=a.TopCenter,n.end=a.BottomCenter),n}}class P{constructor(t){this.svg=t,this.defs=[]}group(){let t=this.svg.defs().group();return this.defs.push(t),t}circle(t){let e=this.svg.defs().circle(t);return this.defs.push(e),e}line(t,e,i,n){let s=this.svg.defs().line(t,e,i,n);return this.defs.push(s),s}polygon(t){let e=this.svg.defs().polygon(t);return this.defs.push(e),e}rect(t,e){let i=this.svg.defs().rect(t,e);return this.defs.push(i),i}text(t){let e=this.svg.defs().text(t);return this.defs.push(e),e}write(t){let e=this;null==t&&(t=e.svg),e.defs.forEach((function(e){e.clone(t),e.remove()}))}merge(t){this.defs=this.defs.concat(t.defs)}clear(){this.defs.forEach((function(t){t.remove()})),this.defs.length=0}}class M{constructor(t){this.svg=t,this.layers={}}getLayer(t){return this.layers[t]}createLayer(t){let e=new P(this.svg);return this.layers[t]=e,e}merge(t){let e=this;Object.keys(e.layers).forEach((function(i){e.layers[i].merge(t.layers[i])}))}clearEachLayer(){let t=this;Object.keys(t.layers).forEach((function(e){t.layers[e].clear()}))}}var T=Symbol();class k{constructor(t,e,i){this.type=e,this.id=i,this.layers=new M(t),this.uptodate=!1,this[T]={x:0,y:0}}getLayers(){return this.update(),this.layers}get x(){return this[T].x}get y(){return this[T].y}move(t,e){this.uptodate=!1,this[T].x=t,this[T].y=e}getConnectionPointsRectangle(){return this.update(),this.doGetConnectionPointsRectangle()}update(){this.uptodate||(this.doUpdate(),this.uptodate=!0)}doUpdate(){}doGetConnectionPointsRectangle(){return null}}class R extends k{constructor(t,e,i=a.BottomCenter){super(t),this.element=e,this.position=i}setPosition(t){this.position=t;let e=0,i=0,n=this.element.getConnectionPointsRectangle();switch(this.position){case a.TopCenter:e=n.cx,i=n.y;break;case a.RightCenter:e=n.x+n.width,i=n.cy;break;case a.BottomCenter:e=n.cx,i=n.y+n.height;break;case a.LeftCenter:e=n.x,i=n.cy}this.move(e,i)}}class D{static addClassCompartmentText(t,e,i,n,s,o){e+=n.getTopMargin("classbox");let a=function(t,e,i,n,s){let o=0,a=0,r=i.group().addClass(s);for(var h=0;h<n.length;h++){let i=S(r,n[h]);i.move(t,e+a),o=Math.max(o,i.bbox().width),a+=i.bbox().height}return{width:o,height:a}}(t+n.getLeftMargin("classbox"),e,i,s,o);return a.height+=n.getTopMargin("classbox")+n.getBottomMargin("classbox"),a}}function S(t,e){let i={public:"+ ",protected:"# ",private:"- "}[e.visibility]+e.name;return e.return&&(i+=" : "+e.return),t.text(i)}class U extends k{constructor(t,e,i,n,s){super(t,"class",e),this.shapeLayer=this.layers.createLayer("shape"),this.textLayer=this.layers.createLayer("text"),this.classDescription=i,this.canMove=n,this.style=s,this.connectionPointsRectangle=null,this.connectionPoints=[]}createConnectionPoint(t){let e=new R(t,this);return this.connectionPoints.push(e),e}doUpdate(){!function(t,e,i,n){var s=t.shapeLayer.group().addClass("UMLClassBox");let o={width:0,height:0},a={top:t.y+1,left:t.x+1};o.height=n.getTopMargin("classbox");var r=t.textLayer.group().addClass("UMLClassName").text(e.name).move(a.left+n.getLeftMargin("classbox"),a.top+o.height);o.width=Math.max(o.width,r.bbox().width),o.height+=r.bbox().height+n.getBottomMargin("classbox");var h=a.top+o.height;let l=D.addClassCompartmentText(a.left,h,t.textLayer,n,e.attributes,"UMLClassAttributes");o.width=Math.max(o.width,l.width),o.height+=l.height;var c=a.top+o.height;let g=D.addClassCompartmentText(a.left,c,t.textLayer,n,e.operations,"UMLClassOperations");o.width=Math.max(o.width,g.width),o.height+=g.height,o.width>r.bbox().width&&r.dx((o.width-r.bbox().width)/2);o.width+=n.getLeftMargin("classbox")+n.getRightMargin("classbox");let y=s.rect(o.width,o.height).move(a.left,a.top);s.line(a.left,h,a.left+o.width,h),s.line(a.left,c,a.left+o.width,c),t.connectionPointsRectangle=y.bbox(),i&&(s.draggable(!0),s.on("dragmove.namespace",(function(e){t.fire("positionchanged")})),s.on("dragend.namespace",(function(e){t.fire("positionchanged")})))}(this,this.classDescription,this.canMove,this.style)}doGetConnectionPointsRectangle(){return this.connectionPointsRectangle}fire(t){if("positionchanged"==t)for(let t=0;t<this.connectionPoints.length;t++)this.connectionPoints[t].draw()}}class B extends k{constructor(t,e,i,n){super(t,"classtemplate",e),this.shapeLayer=this.layers.createLayer("shape"),this.textLayer=this.layers.createLayer("text"),this.classTemplateDescription=i,this.style=n,this.connectionPointsRectangle=null,this.connectionPoints=[]}createConnectionPoint(t){let e=new R(t,this);return this.connectionPoints.push(e),e}doUpdate(){var t=this.shapeLayer.group().addClass("UMLClassTemplate");let e={width:0,height:0},i={top:this.y+1,left:this.x+1};var n=this.textLayer.group().addClass("UMLClassTemplateParameters").text(this.classTemplateDescription.parameters[0]).move(i.left+this.style.getLeftMargin("classtemplateparameters"),i.top+this.style.getTopMargin("classtemplateparameters"));let s=this.style.getLeftMargin("classtemplateparameters")+this.style.getRightMargin("classtemplateparameters")+n.bbox().width,o=this.style.getTopMargin("classtemplateparameters")+this.style.getBottomMargin("classtemplateparameters")+n.bbox().height,a=i.top+this.style.getTopMargin("classtemplateparameters")+n.bbox().height/2,r=a+this.style.getTopMargin("classtemplate"),h=this.textLayer.group().addClass("UMLClassName").text(this.classTemplateDescription.name).move(i.left+this.style.getLeftMargin("classtemplate"),r);e.width=Math.max(e.width,h.bbox().width),e.height=this.style.getTopMargin("classtemplate")+h.bbox().height+this.style.getBottomMargin("classtemplate");let l=i.top+e.height+n.bbox().height/2,c=D.addClassCompartmentText(i.left,l,this.textLayer,this.style,this.classTemplateDescription.attributes,"UMLClassAttributes");e.width=Math.max(e.width,c.width),e.height+=c.height;let g=i.top+e.height+n.bbox().height/2,y=D.addClassCompartmentText(i.left,g,this.textLayer,this.style,this.classTemplateDescription.operations,"UMLClassOperations");e.width=Math.max(e.width,y.width),e.height+=y.height,e.width>h.bbox().width&&h.dx((e.width-h.bbox().width)/2),e.width+=this.style.getLeftMargin("classtemplate")+this.style.getRightMargin("classtemplate");let p=t.rect(e.width,e.height).move(i.left,a);t.line(i.left,l,i.left+e.width,l),t.line(i.left,g,i.left+e.width,g),n.dx(e.width-s/2);t.rect(s,o).move(i.left+e.width-s/2,i.top).attr("stroke-dasharray","4, 4");this.connectionPointsRectangle=p.bbox()}doGetConnectionPointsRectangle(){return this.connectionPointsRectangle}}var O=Symbol();class E{constructor(t,e,i){this.svg=t,this.layers=new M(t),this.shapeLayer=this.layers.createLayer("shape"),this.textLayer=this.layers.createLayer("text"),this.uptodate=!1,this.x=0,this.y=0,this.component=e,this.name=i,this.textGroup=this.textLayer.group(),this[O]=this.textGroup.text(this.name).move(0,0),this.width=this[O].bbox().width+5}getLayers(){return this.uptodate||this.update(),this.layers}move(t,e){this.uptodate=!1,this.x=t,this.y=e}moveConnectionPoint(t,e){this.uptodate=!1,e-=this[O].bbox().height+3,this.move(t,e)}update(){this.shapeLayer.clear(),this[O].move(this.x,this.y);let t=this.shapeLayer.group().addClass("UMLComponent");t.circle(10).move(this.x+this.width/2-5,this.y+22),t.line(this.x+10+this.width/2-5,this.y+27,this.x+this.width,this.y+27)}getAssemblyConnectionPoint(){return{x:this.x+this.width/2-4,y:this.y+this[O].bbox().height+5}}}var N=Symbol();class j{constructor(t,e,i){this.svg=t,this.layers=new M(t),this.shapeLayer=this.layers.createLayer("shape"),this.textLayer=this.layers.createLayer("text"),this.uptodate=!1,this.x=0,this.y=0,this.component=e,this.name=i,this.textGroup=this.textLayer.group(),this[N]=this.textGroup.text(this.name).move(0,0),this.width=this[N].bbox().width+5}getLayers(){return this.uptodate||this.update(),this.layers}move(t,e){this.uptodate=!1,this.x=t,this.y=e}moveConnectionPoint(t,e){this.uptodate=!1,e-=this[N].bbox().height+6,this.move(t,e)}update(){this.shapeLayer.clear(),this[N].move(this.x+5,this.y);let t=this.shapeLayer.group().addClass("UMLComponent");t.line(this.x,this.y+this[N].bbox().height+8,this.x+this.width/2,this.y+this[N].bbox().height+8);let e=this.svg.clip();e.rect(10,17).move(this.x+this.width/2-1,this.y+this[N].bbox().height,0),t.circle(15).move(this.x+this.width/2,this.y+this[N].bbox().height+1).clipWith(e),this.uptodate=!0}getAssemblyConnectionPoint(){return{x:this.x+this.width/2-1+10,y:this.y+this[N].bbox().height+8}}}class A{constructor(t){this.svgParentGroup=t,this.x=0,this.y=0,this.width=15,this.height=20}move(t,e){this.x=t,this.y=e}draw(){let t=this.svgParentGroup.group().addClass("UMLComponentStereotype");t.rect(11,15).move(4+this.x,this.y),t.rect(8,3).move(this.x,this.y+3),t.rect(8,3).move(this.x,this.y+9)}}class G extends k{constructor(t,e,i,n){if(super(t,"component",e),this.shapeLayer=this.layers.createLayer("shape"),this.textLayer=this.layers.createLayer("text"),this.svg=t,this.componentDescription=i,this.style=n,this.ballConnectors=[],this.socketConnectors=[],this.componentDescription.interfaces)for(let t=0;t<this.componentDescription.interfaces.length;t++){let e=new E(this.svg,this,this.componentDescription.interfaces[t].name);this.ballConnectors.push(e)}if(this.componentDescription.dependencies)for(let t=0;t<this.componentDescription.dependencies.length;t++){let e=new j(this.svg,this,this.componentDescription.dependencies[t].name);this.socketConnectors.push(e)}}getSocketConnector(t){for(var e=0;e<this.socketConnectors.length;e++)if(this.socketConnectors[e].name==t)return this.socketConnectors[e];return null}getBallConnector(t){for(var e=0;e<this.ballConnectors.length;e++)if(this.ballConnectors[e].name==t)return this.ballConnectors[e];return null}createDependencyConnectionPoint(t,e){return new R(t,this.getSocketConnector(e))}createInterfaceConnectionPoint(t,e){return new R(t,this.getBallConnector(e))}doUpdate(){this.layers.clearEachLayer();var t=this.shapeLayer.group().addClass("UMLComponent");let e=0;for(let t=0;t<this.ballConnectors.length;t++)e=Math.max(e,this.ballConnectors[t].width);let i={x:this.x+1,y:this.y+1},n={width:0,height:0};n.height=this.style.getTopMargin("component");let s=new A(t);n.height+=s.height;var o=this.textLayer.group().addClass("UMLComponentName").text(this.componentDescription.name).addClass("UMLComponentName").move(i.x+e+this.style.getLeftMargin("component"),i.y+n.height);n.width=Math.max(n.width,o.bbox().width),n.height+=o.bbox().height+this.style.getBottomMargin("component"),n.width+=this.style.getLeftMargin("component")+this.style.getRightMargin("component"),t.rect(n.width,n.height).move(i.x+e,i.y),s.move(i.x+e+(n.width-this.style.getRightMargin("component")-s.width),i.y+this.style.getTopMargin("component")),s.draw();for(let t=0;t<this.ballConnectors.length;t++)this.ballConnectors[t].moveConnectionPoint(i.x,i.y+n.height/2),this.layers.merge(this.ballConnectors[t].getLayers());for(let t=0;t<this.socketConnectors.length;t++)this.socketConnectors[t].moveConnectionPoint(i.x+n.width+e,i.y+n.height/2),this.layers.merge(this.socketConnectors[t].getLayers())}getBallConnectionPoint(t){this.uptodate||this.update();for(let t=0;t<this.ballConnectors.length;t++)return this.ballConnectors[t].getAssemblyConnectionPoint()}getSocketConnectionPoint(t){this.uptodate||this.update();for(let t=0;t<this.socketConnectors.length;t++)return this.socketConnectors[t].getAssemblyConnectionPoint()}}class H{constructor(){this.depthChanges=[]}getDepth(t){let e=0,i=-1;for(let n=0;n<this.depthChanges.length&&t>=this.depthChanges[n][0];n++)e=this.depthChanges[n][1],i=t>this.depthChanges[n][0]?n:n-1;return i>=0&&(e=Math.max(e,this.depthChanges[i][1])),e}dolayout(t,e){this.depthChanges.length=0;for(let s=0;s<t.length;s++){let o=t[s];switch(o.type){case"synchronous-start":z(this.depthChanges,o.point.y);break;case"synchronous-end":W(this.depthChanges,o.point.y);break;case"return-start":V(this.depthChanges,o.point.y);break;case"return-end":F(this.depthChanges,o.point.y);break;case"creation-start":z(this.depthChanges,o.point.y);break;case"destruction-end":e&&V(this.depthChanges,o.point.y-25),i=this.depthChanges,n=o.point.y,i.push([n,0])}}var i,n}}function z(t,e){t.push([e,1]),_(t)}function W(t,e){0==t.length?t.push([e,1]):t.push([e,t[t.length-1][1]+1]),_(t)}function V(t,e){let i=0,n=t.length;n>0&&(i=Math.max(0,t[n-1][1]-1)),t.push([e,i]),_(t)}function F(t,e){let i=t.length;0==i?t.push([e,1]):t.push([e,t[i-1][1]]),_(t)}function _(t){let e=t.length;e>=3&&t[e-3][1]==t[e-2][1]&&(t[e-2][0]=t[e-1][0],t[e-2][1]=t[e-1][1],t.pop())}class I extends k{constructor(t,e,i,n,s){super(t,"lifeline",e),this.shapeLayer=this.layers.createLayer("shape"),this.textLayer=this.layers.createLayer("text"),this.svg=t,this.lifelineDescription=i,this.style=n,this.log=s,this.lineTopPosition={x:0,y:0},this.boxHeight=0,this.connectionPoints=[],this.adjustmentNeeded=!1,this.lifelineLayout=new H}createConnectionPoint(t,e){let i=new R(t,this);return this.connectionPoints.push({point:i,type:e}),i}getLineTopPosition(){return this.uptodate||this.update(),this.lineTopPosition}getFirstConnectionPointPosition(){let t=this.getLineTopPosition();return t.y+=this.style.getExecutionSpecificationBarMargin()+this.style.getExecutionSpecificationBarOverhang(),t}getCreationConnectionPointPosition(){return this.uptodate||this.update(),{x:this.x,y:this.y+this.boxHeight/2}}getActiveLineWidth(){return this.style.getExecutionSpecificationBarWidth()}getHorizontalOffset(t,e){let i=0;return"right"==e?i=this.lifelineLayout.getDepth(t)*(this.getActiveLineWidth()/2):"left"==e&&(i=-this.lifelineLayout.getDepth(t)*(this.getActiveLineWidth()/2)),i}needToAdjustDestructionPosition(){return this.connectionPoints.length>1&&"return-start"!=this.connectionPoints[this.connectionPoints.length-1].type&&"creation-end"!=this.connectionPoints[this.connectionPoints.length-1].type&&(this.adjustmentNeeded=!0),this.adjustmentNeeded}doLayout(){this.lifelineLayout.dolayout(this.connectionPoints,this.adjustmentNeeded)}doUpdate(){this.log.info("Lifeline "+this.id+": updating"),this.layers.clearEachLayer();let t=this.shapeLayer.group().addClass("UMLLifeline");!function(t,e,i,n,s){let o={width:0,height:0},a={top:t.y+1,left:t.x+1};o.height=n.getTopMargin("lifeline");var r=t.textLayer.group().addClass("UMLInstanceName").text(":"+i.name).move(a.left+n.getLeftMargin("lifeline"),a.top+o.height);o.width=Math.max(o.width,r.bbox().width),o.height+=r.bbox().height+n.getBottomMargin("lifeline"),o.width+=n.getLeftMargin("lifeline")+n.getRightMargin("lifeline"),e.rect(o.width,o.height).move(a.left,a.top),t.boxHeight=o.height,s.x=a.left+o.width/2,s.y=a.top+o.height}(this,t,this.lifelineDescription,this.style,this.lineTopPosition),function(t,e,i,n,s){let o=s.getExecutionSpecificationBarOverhang(),a="Lifeline "+t.id+": depth changes: [";for(let t of n)a+=" "+t[1];if(a+=" ]",t.log.debug(a),1==n.length)n[0][1]>0?(e.line(t.lineTopPosition.x,t.lineTopPosition.y,t.lineTopPosition.x,n[0][0]-o),e.rect(8,2*o).move(t.lineTopPosition.x-4,n[0][0]-o)):e.line(t.lineTopPosition.x,t.lineTopPosition.y,t.lineTopPosition.x,n[0][0]);else if(n.length>1){e.line(t.lineTopPosition.x,t.lineTopPosition.y,t.lineTopPosition.x,n[0][0]-o);let i=0;for(let t of n)i=Math.max(i,t[1]);let s=[],a=[];for(let e=0;e<=i;e++)s.push(-1),a.push(new P(t.svg));for(let e=1;e<n.length;e++){let i=n[e-1][1],r=n[e][1];if(t.log.trace("Lifeline "+t.id+": handling depth change "+e+" from "+i+" to "+r),0==i)t.log.trace("Lifeline "+t.id+": drawing line"),a[i].line(t.lineTopPosition.x,n[e-1][0],t.lineTopPosition.x,n[e][0]);else if(r>i)t.log.trace("Lifeline "+t.id+": deferring drawing"),s[i]=n[e-1][0];else if(r<=i){t.log.trace("Lifeline "+t.id+": drawing rectangle");let r=n[e-1][0];-1!=s[i]&&(r=s[i]);let h=5*(i-1);a[i].rect(8,n[e][0]-r+2*o).move(t.lineTopPosition.x-4+h,r-o),s[i]=-1}}0==n[n.length-2][1]&&n[n.length-1][1]>0&&a[n[n.length-1][1]].rect(8,2*o).move(t.lineTopPosition.x-4,n[n.length-1][0]-o);let r=n[n.length-1][0];for(let e=0;e<s.length;e++)-1!=s[e]&&a[e].rect(8,r-s[e]+2*o).move(t.lineTopPosition.x-4,s[e]-o);for(let t=0;t<a.length;t++)a[t].write(e)}}(this,t,this.lifelineDescription,this.lifelineLayout.depthChanges,this.style)}}class J extends k{constructor(t,e,i,n){super(t,"node",e),this.shapeLayer=this.layers.createLayer("shape"),this.textLayer=this.layers.createLayer("text"),this.nodeDescription=i,this.style=n,this.connectionPointsRectangle=null}createConnectionPoint(t){return new R(t,this)}doUpdate(){var t=this.shapeLayer.group().addClass("UMLNode");let e={width:0,height:0},i={top:this.y+1,left:this.x+1};e.height=this.style.getTopMargin("node");var n=this.textLayer.group().addClass("UMLNodeName").text(this.nodeDescription.name).move(i.left+this.style.getLeftMargin("node"),i.top+e.height+10);if(e.width=Math.max(e.width,n.bbox().width),e.height+=n.bbox().height+this.style.getBottomMargin("node"),e.width>n.bbox().width&&n.dx((e.width-n.bbox().width)/2),null!=this.nodeDescription.elements&&this.nodeDescription.elements.length>0){(new lt).createFromJSON(this.layers.svg,this.nodeDescription)}e.width+=this.style.getLeftMargin("node")+this.style.getRightMargin("node");let s=i.left+12+","+i.top,o=i.left+e.width+10+","+i.top,a=i.left+e.width+","+(i.top+10),r=i.left+","+(i.top+10);t.polygon(s+" "+o+" "+a+" "+r);let h=i.left+e.width+","+(i.top+e.height+10),l=i.left+e.width+10+","+(i.top+e.height-1);t.polygon(o+" "+a+" "+h+" "+l);let c=t.rect(e.width,e.height).move(i.left,i.top+10);this.connectionPointsRectangle=c.bbox(),this.connectionPointsRectangle.cy-=5,this.connectionPointsRectangle.width+=5}doGetConnectionPointsRectangle(){return this.connectionPointsRectangle}}class q extends k{constructor(t,e,i){super(t,"actor",e),this.shapeLayer=this.layers.createLayer("shape"),this.textLayer=this.layers.createLayer("text"),this.actorDescription=i,this.connectionPointsRectangle=null}createConnectionPoint(t){return new R(t,this)}doUpdate(){let t={top:this.y,left:this.x},e=this.shapeLayer.group().addClass("UMLActor"),i=this.textLayer.group().text(this.actorDescription.name).move(t.left,t.top+35),n=i.bbox().width,s=(n-16)/2;e.circle(12).move(t.left+2+s,t.top+1),e.line(t.left+8+s,t.top+13,t.left+8+s,t.top+26),e.line(t.left+s,t.top+18,t.left+16+s,t.top+18),e.line(t.left+8+s,t.top+26,t.left+s,t.top+33),e.line(t.left+8+s,t.top+26,t.left+16+s,t.top+33),this.connectionPointsRectangle={x:t.left,y:t.top,w:n,width:n,height:35+i.bbox().height,h:35+i.bbox().height,x2:t.left+n,y2:t.top+35+i.bbox().height,cx:t.left+n/2,cy:t.top+(35+i.bbox().height)/2}}doGetConnectionPointsRectangle(){return this.connectionPointsRectangle}}class K extends k{constructor(t,e,i){super(t,"usecase",e),this.shapeLayer=this.layers.createLayer("shape"),this.textLayer=this.layers.createLayer("text"),this.useCaseDescription=i,this.connectionPointsRectangle=null}createConnectionPoint(t){return new R(t,this)}doUpdate(){let t=this.y,e=this.x,i=this.shapeLayer.group().addClass("UMLUseCase"),n=this.textLayer.group().text(this.useCaseDescription.title),s=i.ellipse(1.2*n.bbox().width,3*n.bbox().height).move(e+1,t+1);n.move(e+1+.1*n.bbox().width,t+1+n.bbox().height),this.connectionPointsRectangle=s.bbox()}doGetConnectionPointsRectangle(){return this.connectionPointsRectangle}}class Q{constructor(t){this.text=t}empty(){return null==this.text||""==this.text}}class X extends k{constructor(t,e,i,n,s){super(t),this.shapeLayer=this.layers.createLayer("shape"),this.textLayer=this.layers.createLayer("text"),this.type=e,this.connectionPoint1=i,this.connectionPoint2=n,this.label=null,null!=s&&(this.label=new Q(s)),null==this.label&&"creationmessage"==e&&(this.label=new Q("new"))}hasNonEmptyLabel(){return null!=this.label&&!this.label.empty()}doUpdate(){if(this.layers.clearEachLayer(),"inheritance"==this.type){!function(t,e,i){let n=st(i.position),s=function(t,e){let i={x:0,y:0};switch(e){case nt:i={x:t.x-12,y:t.y};break;case it:i={x:t.x+12,y:t.y};break;case tt:i={x:t.x,y:t.y+12};break;case et:i={x:t.x,y:t.y-12}}return i}(i,n);ot(t,e,s,n),function(t,e,i){let n={x:0,y:0},s={x:0,y:0};switch(i){case nt:n={x:e.x-12,y:e.y-10},s={x:e.x-12,y:e.y+10};break;case it:n.x=e.x+12,n.y=e.y-10,s.x=e.x+12,s.y=e.y+10;break;case tt:n.x=e.x-10,n.y=e.y+12,s.x=e.x+10,s.y=e.y+12;break;case et:n.x=e.x-10,n.y=e.y-12,s.x=e.x+10,s.y=e.y-12}let o=e.x+","+e.y+" "+n.x+","+n.y+" "+s.x+","+s.y;t.polygon(o)}(t,i,n)}(this.shapeLayer.group().addClass("UMLInheritanceRelationship"),this.connectionPoint1,this.connectionPoint2)}else if("composition"==this.type){Y(this.shapeLayer.group().addClass("UMLCompositionRelationship"),this.connectionPoint1,this.connectionPoint2)}else if("aggregation"==this.type){Y(this.shapeLayer.group().addClass("UMLAggregationRelationship"),this.connectionPoint1,this.connectionPoint2)}else if("synchronousmessage"==this.type){let t=this.shapeLayer.group().addClass("UMLSynchronousMessage"),e=null;null!=this.label&&null!=this.label.text&&""!=this.label.text&&(e=this.textLayer.group()),Z(t,e,this.connectionPoint1,this.connectionPoint2,this.label)}else if("returnmessage"==this.type){if(null!=this.connectionPoint1.element&&this.connectionPoint1.element!=this.connectionPoint2.element){!function(t,e,i){t.line(e.x,e.y,i.x,e.y).attr("stroke-dasharray","4, 4"),i.x>=e.x?(t.line(i.x,e.y,i.x-10,i.y-6),t.line(i.x,e.y,i.x-10,i.y+6)):(t.line(i.x,e.y,i.x+10,i.y-6),t.line(i.x,e.y,i.x+10,i.y+6))}(this.shapeLayer.group().addClass("UMLReturnMessage"),this.connectionPoint1,this.connectionPoint2)}}else if("creationmessage"==this.type){Z(this.shapeLayer.group().addClass("UMLCreationMessage"),this.textLayer.group(),this.connectionPoint1,this.connectionPoint2,this.label)}else if("destructionmessage"==this.type){!function(t,e){t.line(e.x-10,e.y-10,e.x+10,e.y+10),t.line(e.x-10,e.y+10,e.x+10,e.y-10)}(this.shapeLayer.group().addClass("UMLDestructionMessage"),this.connectionPoint2)}else if("usecaseassociation"==this.type){!function(t,e,i){t.line(e.x,e.y,i.x,i.y)}(this.shapeLayer.group().addClass("UMLUseCaseAssociation"),this.connectionPoint1,this.connectionPoint2)}else if("assemblyconnector"==this.type){!function(t,e,i){if(e.x<i.x)t.line(e.x,e.y,i.x,i.y).attr("stroke-dasharray","8, 4");else{let n=e.y+(i.y-e.y)/2;t.line(e.x,e.y,e.x+25,e.y).attr("stroke-dasharray","8, 4"),t.line(e.x+25,e.y,e.x+25,n).attr("stroke-dasharray","8, 4"),t.line(e.x+25,n,i.x-35,n).attr("stroke-dasharray","8, 4"),t.line(i.x-35,n,i.x-35,i.y).attr("stroke-dasharray","8, 4"),t.line(i.x-35,i.y,i.x,i.y).attr("stroke-dasharray","8, 4")}t.line(i.x-13,i.y+5,i.x,i.y),t.line(i.x-13,i.y-5,i.x,i.y)}(this.shapeLayer.group().addClass("UMLAssemblyConnector"),this.connectionPoint1,this.connectionPoint2)}else if("communicationpath"==this.type){!function(t,e,i){t.line(e.x,e.y,i.x,i.y)}(this.shapeLayer.group().addClass("UMLCommunicationPath"),this.connectionPoint1,this.connectionPoint2)}}}function Y(t,e,i){let n=st(i.position);ot(t,e,function(t,e){let i={x:0,y:0};switch(e){case nt:i={x:t.x-20,y:t.y};break;case it:i={x:t.x+20,y:t.y};break;case tt:i={x:t.x,y:t.y+20};break;case et:i={x:t.x,y:t.y-20}}return i}(i,n),n),function(t,e,i){let n={x:0,y:0},s={x:0,y:0},o={x:0,y:0};switch(i){case nt:n={x:e.x-10,y:e.y-8},s={x:e.x-20,y:e.y},o={x:e.x-10,y:e.y+8};break;case it:n={x:e.x+10,y:e.y-8},s={x:e.x+20,y:e.y},o={x:e.x+10,y:e.y+8};break;case tt:n={x:e.x+8,y:e.y+10},s={x:e.x,y:e.y+20},o={x:e.x-8,y:e.y+10};break;case et:n={x:e.x+8,y:e.y-10},s={x:e.x,y:e.y-20},o={x:e.x-8,y:e.y-10}}let a=e.x+","+e.y+" "+n.x+","+n.y+" "+s.x+","+s.y+" "+o.x+","+o.y;t.polygon(a)}(t,i,n)}function Z(t,e,i,n,s){if(null!=i.element&&i.element==n.element){if(null!=e&&null!=s&&null!=s.text&&""!=s.text){let t=e.text(s.text);t.move(i.x+8,i.y-t.bbox().height-3)}t.line(i.x,i.y,i.x+30,i.y),t.line(i.x+30,i.y,i.x+30,n.y),t.line(i.x+30,n.y,n.x+12,n.y);let o=n.x+","+n.y+" "+(n.x+12)+","+(n.y-6)+" "+(n.x+12)+","+(n.y+6);t.polygon(o)}else if(i.x<n.x){if(null!=e&&null!=s&&null!=s.text&&""!=s.text){let t=e.text(s.text),o=n.x-i.x;t.bbox().width<o?t.move(i.x+(o-t.bbox().width)/2,i.y-t.bbox().height-2):t.move(i.x+2,i.y-6-t.bbox().height-2)}t.line(i.x,i.y,n.x-12,n.y);let o=n.x-12+","+(n.y-6)+" "+n.x+","+n.y+" "+(n.x-12)+","+(n.y+6);t.polygon(o)}else if(i.x>n.x){if(null!=e&&null!=s&&null!=s.text&&""!=s.text){let t=e.text(s.text),o=i.x-n.x;t.bbox().width<o?t.move(n.x+(o-t.bbox().width)/2,n.y-t.bbox().height-2):t.move(n.x+2,n.y-6-t.bbox().height-2)}t.line(i.x,i.y,n.x+12,n.y);let o=n.x+12+","+(n.y-6)+" "+n.x+","+n.y+" "+(n.x+12)+","+(n.y+6);t.polygon(o)}else{if(null!=e&&null!=s&&null!=s.text&&""!=s.text){let t=e.text(s.text);t.move(i.x+8,i.y-t.bbox().height-3)}t.line(i.x,i.y,i.x+30,i.y),t.line(i.x+30,i.y,n.x+30,n.y),t.line(n.x+30,n.y,n.x+12,n.y);let o=n.x+","+n.y+" "+(n.x+12)+","+(n.y-6)+" "+(n.x+12)+","+(n.y+6);t.polygon(o)}}var tt=0,et=1,it=2,nt=3;function st(t){switch(t){case a.TopCenter:return et;case a.RightCenter:return it;case a.BottomCenter:return tt;case a.LeftCenter:return nt}}function ot(t,e,i,n){switch(n){case tt:case et:switch(function(t,e,i){let n=at.Straight;n=e.x==t.x?at.Straight:i==et&&t.position==a.RightCenter?at.TopRightCorner:i==et&&t.position==a.LeftCenter?at.TopLeftCorner:i==tt&&t.position==a.RightCenter?at.BottomRightCorner:i==tt&&t.position==a.LeftCenter?at.BottomLeftCorner:at.HorizontalStep;return n}(e,i,n)){case at.Straight:t.line(e.x,e.y,i.x,i.y);break;case at.TopRightCorner:case at.TopLeftCorner:case at.BottomRightCorner:case at.BottomLeftCorner:t.line(e.x,e.y,i.x,e.y),t.line(i.x,e.y,i.x,i.y);break;case at.HorizontalStep:let n=i.y+(e.y-i.y)/2;t.line(e.x,e.y,e.x,n),t.line(e.x,n,i.x,n),t.line(i.x,n,i.x,i.y)}break;case it:case nt:switch(function(t,e,i){let n=at.Straight;n=e.y==t.y?at.Straight:i==nt&&t.position==a.BottomCenter?at.BottomLeftCorner:i==nt&&t.position==a.TopCenter?at.TopLeftCorner:i==it&&t.position==a.BottomCenter?at.BottomRightCorner:i==it&&t.position==a.TopCenter?at.TopRightCorner:at.VerticalStep;return n}(e,i,n)){case at.Straight:t.line(e.x,e.y,i.x,i.y);break;case at.TopRightCorner:case at.TopLeftCorner:case at.BottomRightCorner:case at.BottomLeftCorner:t.line(e.x,e.y,e.x,i.y),t.line(e.x,i.y,i.x,i.y);break;case at.VerticalStep:let n=i.x+(e.x-i.x)/2;t.line(e.x,e.y,n,e.y),t.line(n,e.y,n,i.y),t.line(n,i.y,i.x,i.y)}}}var at={Straight:0,TopRightCorner:1,TopLeftCorner:2,BottomRightCorner:3,BottomLeftCorner:4,HorizontalStep:5,VerticalStep:6};class rt{constructor(t){switch(t){case"none":this.level=0;break;case"error":this.level=1;break;case"warn":this.level=2;break;case"info":this.level=3;break;case"debug":this.level=4;break;case"trace":this.level=5}}info(t){this.level>=3&&console.log(t)}debug(t){this.level>=4&&console.log(t)}trace(t){this.level>=5&&console.log(t)}}class ht{constructor(){}}class lt{constructor(t){this.settings=new s(t),this.log=new rt(this.settings.logLevel),this.metrics=new ht,this.diagramDescription={},this.classboxes=new Map,this.classtemplates=new Map,this.lifelines=new Map,this.components=new Map,this.nodes=new Map,this.actors=new Map,this.usecases=new Map,this.messages=[]}createFromDiv(t,e){let i=JSON.parse($("#"+t).text());$("#"+t).empty();var n=SVG(t).size(this.settings.width,this.settings.height);this.createFromJSON(n,i,e)}createFromJSON(t,e,i){null==e&&(e={}),this.diagramDescription=e;let n=new o;this.diagramDescription.elements&&this.drawDiagram(t,this.diagramDescription.elements,n,i)}drawDiagram(t,e,i,n){let s=new v(n),o=[],a=[];for(var r=0;r<e.length;r++){let n=e[r];if(n.class)this.classboxes.set(n.class.name,new U(t,n.class.name,n.class,this.settings.canMove,i));else if(n.classtemplate)this.classtemplates.set(n.classtemplate.name,new B(t,n.classtemplate.name,n.classtemplate,i));else if(n.lifeline)this.lifelines.set(n.lifeline.name,new I(t,n.lifeline.name,n.lifeline,i,this.log));else if(n.component)this.components.set(n.component.name,new G(t,n.component.name,n.component,i));else if(n.node)this.nodes.set(n.node.name,new J(t,n.node.name,n.node,i));else if(n.actor)this.actors.set(n.actor.name,new q(t,n.actor.name,n.actor));else if(n.usecase)this.usecases.set(n.usecase.title,new K(t,n.usecase.title,n.usecase));else if(n.relationship){let e,i;"inheritance"==n.relationship.type?(e=this.classboxes.get(n.relationship.derivedclass),null==e&&(e=this.classtemplates.get(n.relationship.derivedclass)),i=this.classboxes.get(n.relationship.baseclass),null==i&&(i=this.classtemplates.get(n.relationship.baseclass))):"composition"!=n.relationship.type&&"aggregation"!=n.relationship.type||(e=this.classboxes.get(n.relationship.containedclass),i=this.classboxes.get(n.relationship.containingclass));let s=e.createConnectionPoint(t),a=i.createConnectionPoint(t),r=new X(t,n.relationship.type,s,a);o.push(r)}else if(n.messages)for(var h=0;h<n.messages.length;h++){let e,i=n.messages[h];if(i.synchronousmessage){let n=this.lifelines.get(i.synchronousmessage.caller),s=this.lifelines.get(i.synchronousmessage.callee),o=n.createConnectionPoint(t,"synchronous-start"),a=s.createConnectionPoint(t,"synchronous-end");e=new X(t,"synchronousmessage",o,a,i.synchronousmessage.name)}else if(i.returnmessage){let n=this.lifelines.get(i.returnmessage.callee),s=this.lifelines.get(i.returnmessage.caller),o=n.createConnectionPoint(t,"return-start"),a=s.createConnectionPoint(t,"return-end");e=new X(t,"returnmessage",o,a,null)}else if(i.creationmessage){let n=this.lifelines.get(i.creationmessage.caller),s=this.lifelines.get(i.creationmessage.callee),o=n.createConnectionPoint(t,"creation-start"),a=s.createConnectionPoint(t,"creation-end");e=new X(t,"creationmessage",o,a,null)}else if(i.destructionmessage){let n=this.lifelines.get(i.destructionmessage.callee).createConnectionPoint(t,"destruction-end");e=new X(t,"destructionmessage",n,n,"")}this.messages.push(e)}else if(n.assemblyconnector){let e=this.components.get(n.assemblyconnector.consumer),i=this.components.get(n.assemblyconnector.provider),s=e.createDependencyConnectionPoint(t,n.assemblyconnector.interface),o=i.createInterfaceConnectionPoint(t,n.assemblyconnector.interface),r=new X(t,"assemblyconnector",s,o);a.push(r)}else if(n.association){let e=this.actors.get(n.association.actor).createConnectionPoint(t),i=this.usecases.get(n.association.usecase).createConnectionPoint(t),s=new X(t,"usecaseassociation",e,i);o.push(s)}else if(n.communicationpath){let e=this.nodes.get(n.communicationpath.firstnode).createConnectionPoint(t),i=this.nodes.get(n.communicationpath.secondnode).createConnectionPoint(t),s=new X(t,"communicationpath",e,i);o.push(s)}}s.doLayout(this),function(t,e,i){null!=e&&t.layoutConnectors(e);if(null!=i)for(var n=0;n<i.length;n++){let t=i[n];t.connectionPoint1.move(t.connectionPoint1.element.component.getSocketConnectionPoint("").x,t.connectionPoint1.element.component.getSocketConnectionPoint("").y),t.connectionPoint2.move(t.connectionPoint2.element.component.getBallConnectionPoint("").x,t.connectionPoint2.element.component.getBallConnectionPoint("").y)}}(s,o,a),function(t,e,i,n,s,o,a,r,h,l){if(null!=t)for(let e of t)e.getLayers().getLayer("shape").write(),e.getLayers().getLayer("text").write();if(null!=e)for(let t of e)t.getLayers().getLayer("shape").write(),t.getLayers().getLayer("text").write();if(null!=i)for(let t of i)t.getLayers().getLayer("shape").write(),t.getLayers().getLayer("text").write();if(null!=n)for(let t of n)t.getLayers().getLayer("shape").write(),t.getLayers().getLayer("text").write();if(null!=s)for(let t of s)t.getLayers().getLayer("shape").write(),t.getLayers().getLayer("text").write();if(null!=o)for(let t of o)t.getLayers().getLayer("shape").write(),t.getLayers().getLayer("text").write();if(null!=a)for(let t of a)t.getLayers().getLayer("shape").write(),t.getLayers().getLayer("text").write();for(var c=0;c<r.length;c++){let t=r[c];t.getLayers().getLayer("shape").write(),t.getLayers().getLayer("text").write()}for(c=0;c<h.length;c++){let t=h[c];t.getLayers().getLayer("shape").write(),t.getLayers().getLayer("text").write()}if(null!=l)for(c=0;c<l.length;c++){let t=l[c];t.getLayers().getLayer("shape").write(),t.getLayers().getLayer("text").write()}}(this.classboxes.values(),this.classtemplates.values(),this.lifelines.values(),this.components.values(),this.nodes.values(),this.actors.values(),this.usecases.values(),o,this.messages,a)}}class ct extends k{constructor(t,e,i,n){super(t),this.shapeLayer=this.layers.createLayer("shape"),this.textLayer=this.layers.createLayer("text"),this.id=e,this.noteDescription=i,this.style=n}update(){this.uptodate=!0}}i.d(e,"UMLWebWidgetError",(function(){return n})),i.d(e,"Settings",(function(){return s})),i.d(e,"Style",(function(){return o})),i.d(e,"Diagram",(function(){return lt})),i.d(e,"DiagramElement",(function(){return k})),i.d(e,"Connector",(function(){return X})),i.d(e,"ConnectionPoint",(function(){return R})),i.d(e,"ConnectionPointPosition",(function(){return a})),i.d(e,"LayoutManager",(function(){return v})),i.d(e,"ClassBox",(function(){return U})),i.d(e,"ClassTemplate",(function(){return B})),i.d(e,"Lifeline",(function(){return I})),i.d(e,"LifelineLayout",(function(){return H})),i.d(e,"Actor",(function(){return q})),i.d(e,"UseCase",(function(){return K})),i.d(e,"Component",(function(){return G})),i.d(e,"Node",(function(){return J})),i.d(e,"Note",(function(){return ct})),i.d(e,"SVGLayer",(function(){return P})),i.d(e,"SVGLayerSet",(function(){return M})),i.d(e,"Log",(function(){return rt})),i.d(e,"Metrics",(function(){return ht}))}])}));