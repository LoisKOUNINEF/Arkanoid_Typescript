parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sbZq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CanvasView=void 0;var t=function(){function t(t){this.canvas=document.querySelector(t),this.context=this.canvas.getContext("2d"),this.scoreDisplay=document.querySelector("#score"),this.start=document.querySelector("#start"),this.info=document.querySelector("#info")}return t.prototype.clear=function(){var t;null===(t=this.context)||void 0===t||t.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.initStartButton=function(t){var e,i=this;null===(e=this.start)||void 0===e||e.addEventListener("click",function(){return t(i)})},t.prototype.drawScore=function(t){this.scoreDisplay&&(this.scoreDisplay.innerHTML=t.toString())},t.prototype.drawInfo=function(t){this.info&&(this.info.innerHTML=t)},t.prototype.drawSprite=function(t){var e;t&&(null===(e=this.context)||void 0===e||e.drawImage(t.image,t.pos.x,t.pos.y,t.width,t.height))},t.prototype.drawBricks=function(t){var e=this;t.map(function(t){return e.drawSprite(t)})},t}();exports.CanvasView=t;
},{}],"iRAe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ball=void 0;var e=function(){function e(e,t,i,o){this.ballSize=t,this.position=i,this.ballImage=new Image,this.ballSize=t,this.position=i,this.speed={x:e,y:-e},this.ballImage.src=o}return Object.defineProperty(e.prototype,"width",{get:function(){return this.ballSize},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.ballSize},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pos",{get:function(){return this.position},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"image",{get:function(){return this.ballImage},enumerable:!1,configurable:!0}),e.prototype.changeYDirection=function(){this.speed.y=-this.speed.y},e.prototype.changeXDirection=function(){this.speed.x=-this.speed.x},e.prototype.moveBall=function(){this.pos.x+=this.speed.x,this.pos.y+=this.speed.y},e}();exports.Ball=e;
},{}],"mj5d":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Paddle=void 0;var e=function(){function e(e,t,i,o,r){var n=this;this.speed=e,this.paddleWidth=t,this.paddleHeight=i,this.position=o,this.paddleImage=new Image,this.handleKeyUp=function(e){"ArrowLeft"!==e.code&&"ArrowLeft"!==e.key||(n.moveLeft=!1),"ArrowRight"!==e.code&&"ArrowRight"!==e.key||(n.moveRight=!1)},this.handleKeyDown=function(e){"ArrowLeft"!==e.code&&"ArrowLeft"!==e.key||(n.moveLeft=!0),"ArrowRight"!==e.code&&"ArrowRight"!==e.key||(n.moveRight=!0)},this.speed=e,this.paddleWidth=t,this.paddleHeight=i,this.position=o,this.moveLeft=!1,this.moveRight=!1,this.paddleImage.src=r,document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}return Object.defineProperty(e.prototype,"width",{get:function(){return this.paddleWidth},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.paddleHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pos",{get:function(){return this.position},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"image",{get:function(){return this.paddleImage},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isMovingLeft",{get:function(){return this.moveLeft},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isMovingRight",{get:function(){return this.moveRight},enumerable:!1,configurable:!0}),e.prototype.movePaddle=function(){this.moveLeft&&(this.pos.x-=this.speed),this.moveRight&&(this.pos.x+=this.speed)},e}();exports.Paddle=e;
},{}],"r70f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collision=void 0;var o=function(){function o(){}return o.prototype.isCollidingBrick=function(o,i){return o.pos.x<i.pos.x+i.width&&o.pos.x+o.width>i.pos.x&&o.pos.y<i.pos.y+i.height&&o.pos.y+o.height>i.pos.y},o.prototype.isCollidingBricks=function(o,i){var t=this,e=!1;return i.map(function(n,s){t.isCollidingBrick(o,n)&&(o.changeYDirection(),1===n.energy?i.splice(s,1):n.energy-=1,e=!0)}),e},o.prototype.checkBallCollision=function(o,i,t){o.pos.x+o.width>i.pos.x&&o.pos.x<i.pos.x+i.width&&o.pos.y+o.height===i.pos.y&&o.changeYDirection(),(o.pos.x>t.canvas.width-o.width||o.pos.x<0)&&o.changeXDirection(),o.pos.y<0&&o.changeYDirection()},o}();exports.Collision=o;
},{}],"Mnqt":[function(require,module,exports) {
module.exports="paddle.5755c017.png";
},{}],"YebZ":[function(require,module,exports) {
module.exports="ball.eef8eb9b.png";
},{}],"ITQG":[function(require,module,exports) {
"use strict";function r(){var t=["2qfImxi","679720KmXDxH","226325vZwVig","99JnbxIk","139432BrSVcp","1265520wTcOrF","17659shozMv","900FFloTw","36159pcItPf","188DSHPQj","63894wpNlTL","539zeTBSC"];return(r=function(){return t})()}function t(e,n){var s=r();return(t=function(r,t){return s[r-=489]})(e,n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.API_KEY=void 0,function(e,n){for(var s=t,p=r();;)try{if(593217===parseInt(s(494))/1*(-parseInt(s(500))/2)+-parseInt(s(496))/3*(parseInt(s(497))/4)+parseInt(s(489))/5+parseInt(s(498))/6*(-parseInt(s(499))/7)+parseInt(s(492))/8*(parseInt(s(491))/9)+parseInt(s(493))/10+parseInt(s(490))/11*(parseInt(s(495))/12))break;p.push(p.shift())}catch(a){p.push(p.shift())}}();var e="UAe1mYoNu01KhE3h";exports.API_KEY=e;
},{}],"EnDH":[function(require,module,exports) {
module.exports="brick-red.40fbdc6a.png";
},{}],"BSit":[function(require,module,exports) {
module.exports="brick-blue.4fcb1121.png";
},{}],"REqJ":[function(require,module,exports) {
module.exports="brick-green.d41f673b.png";
},{}],"RjJe":[function(require,module,exports) {
module.exports="brick-yellow.8aeca30f.png";
},{}],"B8XN":[function(require,module,exports) {
module.exports="brick-purple.54fb03e2.png";
},{}],"uO1H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LEVEL=exports.BRICK_ENERGY=exports.BRICK_IMAGES=exports.BALL_STARTY=exports.BALL_STARTX=exports.BALL_SIZE=exports.BALL_SPEED=exports.PADDLE_SPEED=exports.PADDLE_STARTX=exports.PADDLE_HEIGHT=exports.PADDLE_WIDTH=exports.BRICK_HEIGHT=exports.BRICK_WIDTH=exports.BRICK_PADDING=exports.STAGE_COLS=exports.STAGE_ROWS=exports.STAGE_PADDING=void 0;var r=s(require("./images/brick-red.png")),e=s(require("./images/brick-blue.png")),t=s(require("./images/brick-green.png")),o=s(require("./images/brick-yellow.png")),p=s(require("./images/brick-purple.png"));function s(r){return r&&r.__esModule?r:{default:r}}var E=document.querySelector("#playField"),_=10;exports.STAGE_PADDING=_;var x=20;exports.STAGE_ROWS=x;var A=10;exports.STAGE_COLS=A;var a=5;exports.BRICK_PADDING=a;var D=E?Math.floor((E.width-2*_)/A)-a:100;exports.BRICK_WIDTH=D;var L=E?Math.floor((E.height-2*_)/x)-a:30;exports.BRICK_HEIGHT=L;var I=150;exports.PADDLE_WIDTH=I;var T=25;exports.PADDLE_HEIGHT=T;var S=450;exports.PADDLE_STARTX=S;var i=10;exports.PADDLE_SPEED=i;var u=5;exports.BALL_SPEED=u;var v=20;exports.BALL_SIZE=v;var R=500;exports.BALL_STARTX=R;var l=400;exports.BALL_STARTY=l;var B={1:r.default,2:t.default,3:o.default,4:e.default,5:p.default};exports.BRICK_IMAGES=B;var G={1:1,2:1,3:2,4:2,5:3};exports.BRICK_ENERGY=G;var P=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,2,2,2,2,2,2,2,2,0,0,3,3,3,3,3,3,3,3,0,0,0,4,4,4,4,4,4,0,0,0,0,5,5,0,0,5,5,0,0];exports.LEVEL=P;
},{"./images/brick-red.png":"EnDH","./images/brick-blue.png":"BSit","./images/brick-green.png":"REqJ","./images/brick-yellow.png":"RjJe","./images/brick-purple.png":"B8XN"}],"A92X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Brick=void 0;var e=function(){function e(e,t,i,r,n){this.brickWidth=e,this.brickHeight=t,this.position=i,this.brickEnergy=r,this.brickImage=new Image,this.brickWidth=e,this.brickHeight=t,this.position=i,this.brickEnergy=r,this.brickImage.src=n}return Object.defineProperty(e.prototype,"width",{get:function(){return this.brickWidth},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.brickHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pos",{get:function(){return this.position},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"image",{get:function(){return this.brickImage},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"energy",{get:function(){return this.brickEnergy},set:function(e){this.brickEnergy=e},enumerable:!1,configurable:!0}),e}();exports.Brick=e;
},{}],"uCOr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createBricks=I;var r=require("./sprites/Brick"),e=require("./setup"),t=function(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;var I=Array(r),n=0;for(e=0;e<t;e++)for(var _=arguments[e],u=0,o=_.length;u<o;u++,n++)I[n]=_[u];return I};function I(){return e.LEVEL.reduce(function(I,n,_){var u=Math.floor((_+1)/e.STAGE_COLS),o=_%e.STAGE_COLS,G=e.STAGE_PADDING+o*(e.BRICK_WIDTH+e.BRICK_PADDING),i=e.STAGE_PADDING+u*(e.BRICK_HEIGHT+e.BRICK_PADDING);return 0===n?I:t(I,[new r.Brick(e.BRICK_WIDTH,e.BRICK_HEIGHT,{x:G,y:i},e.BRICK_ENERGY[n],e.BRICK_IMAGES[n])])},[])}
},{"./sprites/Brick":"A92X","./setup":"uO1H"}],"QCba":[function(require,module,exports) {
"use strict";var e=require("./view/CanvasView"),r=require("./sprites/Ball"),t=require("./sprites/Paddle"),n=require("./Collision"),a=s(require("./images/paddle.png")),o=s(require("./images/ball.png")),i=require("./key.js"),c=require("./setup"),l=require("./helpers");function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e,r,t,n){return new(t||(t=Promise))(function(a,o){function i(e){try{l(n.next(e))}catch(r){o(r)}}function c(e){try{l(n.throw(e))}catch(r){o(r)}}function l(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(i,c)}l((n=n.apply(e,r||[])).next())})},f=function(e,r){var t,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(c){o=[6,c],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},d=!1,p=0,h=localStorage.bestArkanoidScore?JSON.parse(localStorage.bestArkanoidScore):0;function S(){var e=parseInt(localStorage.currentArkanoidScore),r=localStorage.sharcadEmail?JSON.parse(localStorage.sharcadEmail):prompt("Enter your shaRcade email to send your score !");if(r){localStorage.setItem("sharcadEmail",JSON.stringify(r));var t={score_token:{hi_score:e,api_key:i.API_KEY,user_email:r}};fetch("https://sharcade-api.herokuapp.com/sharcade_api",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).catch(function(e){return console.log(e)})}}function v(e){e.drawInfo("Game Over !"),d=!1,S()}function w(e){e.drawInfo("Nice Job !"),d=!1,S()}function y(e,r,t,n,a){return u(this,void 0,void 0,function(){return f(this,function(o){return e.clear(),e.drawBricks(r),e.drawSprite(t),e.drawSprite(n),n.moveBall(),(t.isMovingLeft&&t.pos.x>0||t.isMovingRight&&t.pos.x<e.canvas.width-t.width)&&t.movePaddle(),a.checkBallCollision(n,t,e),a.isCollidingBricks(n,r)&&(p+=1,localStorage.setItem("currentArkanoidScore",JSON.stringify(p)),e.drawScore(p),p>h&&localStorage.setItem("bestArkanoidScore",JSON.stringify(p))),n.pos.y>e.canvas.height&&(d=!0),0===r.length?[2,w(e)]:d?[2,v(e)]:(requestAnimationFrame(function(){return y(e,r,t,n,a)}),[2])})})}function g(e){return u(this,void 0,void 0,function(){var i,s,u,d;return f(this,function(f){switch(f.label){case 0:return p=0,e.drawInfo(""),e.drawScore(0),i=new n.Collision,s=(0,l.createBricks)(),u=new r.Ball(c.BALL_SPEED,c.BALL_SIZE,{x:c.BALL_STARTX,y:c.BALL_STARTY},o.default),d=new t.Paddle(c.PADDLE_SPEED,c.PADDLE_WIDTH,c.PADDLE_HEIGHT,{x:c.PADDLE_STARTX,y:e.canvas.height-c.PADDLE_HEIGHT-5},a.default),[4,y(e,s,d,u,i)];case 1:return f.sent(),[2]}})})}var b=new e.CanvasView("#playField");b.initStartButton(g);
},{"./view/CanvasView":"sbZq","./sprites/Ball":"iRAe","./sprites/Paddle":"mj5d","./Collision":"r70f","./images/paddle.png":"Mnqt","./images/ball.png":"YebZ","./key.js":"ITQG","./setup":"uO1H","./helpers":"uCOr"}]},{},["QCba"], null)
//# sourceMappingURL=src.282d6861.js.map