import{A as ne}from"./AppLayout-nowU_rAO.js";import{s as W}from"./vue-multiselect.css_vue_type_style_index_0_src_true_lang-DNSgPc1H.js";import{B as V,P as D,d as I,R as J,y as re,x as ie,j as A,o as M,c as N,w,a as O,b as E,e as x,t as X,f as R,u as S,g as oe,z as ae,A as se}from"./app-BRGP3ZYi.js";import"./index-DajnbktX.js";import le from"./PrintCSF-BCtLtlLy.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dar-logo-BEVYNDow.js";/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var Q=function(){return Q=Object.assign||function(d){for(var s,u=1,f=arguments.length;u<f;u++){s=arguments[u];for(var v in s)Object.prototype.hasOwnProperty.call(s,v)&&(d[v]=s[v])}return d},Q.apply(this,arguments)};var z;(function(a){var d=function(){function r(e,t,n,i){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<r.MIN_VERSION||e>r.MAX_VERSION)throw new RangeError("Version value out of range");if(i<-1||i>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var o=[],l=0;l<this.size;l++)o.push(!1);for(var l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();var c=this.addEccAndInterleave(n);if(this.drawCodewords(c),i==-1)for(var m=1e9,l=0;l<8;l++){this.applyMask(l),this.drawFormatBits(l);var _=this.getPenaltyScore();_<m&&(i=l,m=_),this.applyMask(l)}f(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}return r.encodeText=function(e,t){var n=a.QrSegment.makeSegments(e);return r.encodeSegments(n,t)},r.encodeBinary=function(e,t){var n=a.QrSegment.makeBytes(e);return r.encodeSegments([n],t)},r.encodeSegments=function(e,t,n,i,o,l){if(n===void 0&&(n=1),i===void 0&&(i=40),o===void 0&&(o=-1),l===void 0&&(l=!0),!(r.MIN_VERSION<=n&&n<=i&&i<=r.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");var c,m;for(c=n;;c++){var _=r.getNumDataCodewords(c,t)*8,g=v.getTotalBits(e,c);if(g<=_){m=g;break}if(c>=i)throw new RangeError("Data too long")}for(var p=0,C=[r.Ecc.MEDIUM,r.Ecc.QUARTILE,r.Ecc.HIGH];p<C.length;p++){var b=C[p];l&&m<=r.getNumDataCodewords(c,b)*8&&(t=b)}for(var h=[],y=0,L=e;y<L.length;y++){var P=L[y];s(P.mode.modeBits,4,h),s(P.numChars,P.mode.numCharCountBits(c),h);for(var B=0,U=P.getData();B<U.length;B++){var ee=U[B];h.push(ee)}}f(h.length==m);var $=r.getNumDataCodewords(c,t)*8;f(h.length<=$),s(0,Math.min(4,$-h.length),h),s(0,(8-h.length%8)%8,h),f(h.length%8==0);for(var G=236;h.length<$;G^=253)s(G,8,h);for(var F=[];F.length*8<h.length;)F.push(0);return h.forEach(function(te,K){return F[K>>>3]|=te<<7-(K&7)}),new r(c,t,F,o)},r.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},r.prototype.getModules=function(){return this.modules},r.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),n=t.length,e=0;e<n;e++)for(var i=0;i<n;i++)e==0&&i==0||e==0&&i==n-1||e==n-1&&i==0||this.drawAlignmentPattern(t[e],t[i]);this.drawFormatBits(0),this.drawVersion()},r.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,n=t,i=0;i<10;i++)n=n<<1^(n>>>9)*1335;var o=(t<<10|n)^21522;f(o>>>15==0);for(var i=0;i<=5;i++)this.setFunctionModule(8,i,u(o,i));this.setFunctionModule(8,7,u(o,6)),this.setFunctionModule(8,8,u(o,7)),this.setFunctionModule(7,8,u(o,8));for(var i=9;i<15;i++)this.setFunctionModule(14-i,8,u(o,i));for(var i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,u(o,i));for(var i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,u(o,i));this.setFunctionModule(8,this.size-8,!0)},r.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var n=this.version<<12|e;f(n>>>18==0);for(var t=0;t<18;t++){var i=u(n,t),o=this.size-11+t%3,l=Math.floor(t/3);this.setFunctionModule(o,l,i),this.setFunctionModule(l,o,i)}}},r.prototype.drawFinderPattern=function(e,t){for(var n=-4;n<=4;n++)for(var i=-4;i<=4;i++){var o=Math.max(Math.abs(i),Math.abs(n)),l=e+i,c=t+n;0<=l&&l<this.size&&0<=c&&c<this.size&&this.setFunctionModule(l,c,o!=2&&o!=4)}},r.prototype.drawAlignmentPattern=function(e,t){for(var n=-2;n<=2;n++)for(var i=-2;i<=2;i++)this.setFunctionModule(e+i,t+n,Math.max(Math.abs(i),Math.abs(n))!=1)},r.prototype.setFunctionModule=function(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0},r.prototype.addEccAndInterleave=function(e){var t=this.version,n=this.errorCorrectionLevel;if(e.length!=r.getNumDataCodewords(t,n))throw new RangeError("Invalid argument");for(var i=r.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t],o=r.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t],l=Math.floor(r.getNumRawDataModules(t)/8),c=i-l%i,m=Math.floor(l/i),_=[],g=r.reedSolomonComputeDivisor(o),p=0,C=0;p<i;p++){var b=e.slice(C,C+m-o+(p<c?0:1));C+=b.length;var h=r.reedSolomonComputeRemainder(b,g);p<c&&b.push(0),_.push(b.concat(h))}for(var y=[],L=function(P){_.forEach(function(B,U){(P!=m-o||U>=c)&&y.push(B[P])})},p=0;p<_[0].length;p++)L(p);return f(y.length==l),y},r.prototype.drawCodewords=function(e){if(e.length!=Math.floor(r.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,n=this.size-1;n>=1;n-=2){n==6&&(n=5);for(var i=0;i<this.size;i++)for(var o=0;o<2;o++){var l=n-o,c=(n+1&2)==0,m=c?this.size-1-i:i;!this.isFunction[m][l]&&t<e.length*8&&(this.modules[m][l]=u(e[t>>>3],7-(t&7)),t++)}}f(t==e.length*8)},r.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var n=0;n<this.size;n++){var i=void 0;switch(e){case 0:i=(n+t)%2==0;break;case 1:i=t%2==0;break;case 2:i=n%3==0;break;case 3:i=(n+t)%3==0;break;case 4:i=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:i=n*t%2+n*t%3==0;break;case 6:i=(n*t%2+n*t%3)%2==0;break;case 7:i=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&i&&(this.modules[t][n]=!this.modules[t][n])}},r.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var n=!1,i=0,o=[0,0,0,0,0,0,0],l=0;l<this.size;l++)this.modules[t][l]==n?(i++,i==5?e+=r.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,o),n||(e+=this.finderPenaltyCountPatterns(o)*r.PENALTY_N3),n=this.modules[t][l],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,o)*r.PENALTY_N3}for(var l=0;l<this.size;l++){for(var n=!1,c=0,o=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][l]==n?(c++,c==5?e+=r.PENALTY_N1:c>5&&e++):(this.finderPenaltyAddHistory(c,o),n||(e+=this.finderPenaltyCountPatterns(o)*r.PENALTY_N3),n=this.modules[t][l],c=1);e+=this.finderPenaltyTerminateAndCount(n,c,o)*r.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var l=0;l<this.size-1;l++){var m=this.modules[t][l];m==this.modules[t][l+1]&&m==this.modules[t+1][l]&&m==this.modules[t+1][l+1]&&(e+=r.PENALTY_N2)}for(var _=0,g=0,p=this.modules;g<p.length;g++){var C=p[g];_=C.reduce(function(y,L){return y+(L?1:0)},_)}var b=this.size*this.size,h=Math.ceil(Math.abs(_*20-b*10)/b)-1;return f(0<=h&&h<=9),e+=h*r.PENALTY_N4,f(0<=e&&e<=2568888),e},r.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6],i=this.size-7;n.length<e;i-=t)n.splice(1,0,i);return n},r.getNumRawDataModules=function(e){if(e<r.MIN_VERSION||e>r.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return f(208<=t&&t<=29648),t},r.getNumDataCodewords=function(e,t){return Math.floor(r.getNumRawDataModules(e)/8)-r.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*r.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},r.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],n=0;n<e-1;n++)t.push(0);t.push(1);for(var i=1,n=0;n<e;n++){for(var o=0;o<t.length;o++)t[o]=r.reedSolomonMultiply(t[o],i),o+1<t.length&&(t[o]^=t[o+1]);i=r.reedSolomonMultiply(i,2)}return t},r.reedSolomonComputeRemainder=function(e,t){for(var n=t.map(function(m){return 0}),i=function(m){var _=m^n.shift();n.push(0),t.forEach(function(g,p){return n[p]^=r.reedSolomonMultiply(g,_)})},o=0,l=e;o<l.length;o++){var c=l[o];i(c)}return n},r.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var n=0,i=7;i>=0;i--)n=n<<1^(n>>>7)*285,n^=(t>>>i&1)*e;return f(n>>>8==0),n},r.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];f(t<=this.size*3);var n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)},r.prototype.finderPenaltyTerminateAndCount=function(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)},r.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},r.MIN_VERSION=1,r.MAX_VERSION=40,r.PENALTY_N1=3,r.PENALTY_N2=3,r.PENALTY_N3=40,r.PENALTY_N4=10,r.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],r.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],r}();a.QrCode=d;function s(r,e,t){if(e<0||e>31||r>>>e)throw new RangeError("Value out of range");for(var n=e-1;n>=0;n--)t.push(r>>>n&1)}function u(r,e){return(r>>>e&1)!=0}function f(r){if(!r)throw new Error("Assertion error")}var v=function(){function r(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}return r.makeBytes=function(e){for(var t=[],n=0,i=e;n<i.length;n++){var o=i[n];s(o,8,t)}return new r(r.Mode.BYTE,e.length,t)},r.makeNumeric=function(e){if(!r.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],n=0;n<e.length;){var i=Math.min(e.length-n,3);s(parseInt(e.substring(n,n+i),10),i*3+1,t),n+=i}return new r(r.Mode.NUMERIC,e.length,t)},r.makeAlphanumeric=function(e){if(!r.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],n;for(n=0;n+2<=e.length;n+=2){var i=r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n))*45;i+=r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n+1)),s(i,11,t)}return n<e.length&&s(r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n)),6,t),new r(r.Mode.ALPHANUMERIC,e.length,t)},r.makeSegments=function(e){return e==""?[]:r.isNumeric(e)?[r.makeNumeric(e)]:r.isAlphanumeric(e)?[r.makeAlphanumeric(e)]:[r.makeBytes(r.toUtf8ByteArray(e))]},r.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)s(e,8,t);else if(e<16384)s(2,2,t),s(e,14,t);else if(e<1e6)s(6,3,t),s(e,21,t);else throw new RangeError("ECI assignment value out of range");return new r(r.Mode.ECI,0,t)},r.isNumeric=function(e){return r.NUMERIC_REGEX.test(e)},r.isAlphanumeric=function(e){return r.ALPHANUMERIC_REGEX.test(e)},r.prototype.getData=function(){return this.bitData.slice()},r.getTotalBits=function(e,t){for(var n=0,i=0,o=e;i<o.length;i++){var l=o[i],c=l.mode.numCharCountBits(t);if(l.numChars>=1<<c)return 1/0;n+=4+c+l.bitData.length}return n},r.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],n=0;n<e.length;n++)e.charAt(n)!="%"?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substring(n+1,n+3),16)),n+=2);return t},r.NUMERIC_REGEX=/^[0-9]*$/,r.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,r.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",r}();a.QrSegment=v})(z||(z={}));(function(a){(function(d){var s=function(){function u(f,v){this.ordinal=f,this.formatBits=v}return u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),u}();d.Ecc=s})(a.QrCode||(a.QrCode={}))})(z||(z={}));(function(a){(function(d){var s=function(){function u(f,v){this.modeBits=f,this.numBitsCharCount=v}return u.prototype.numCharCountBits=function(f){return this.numBitsCharCount[Math.floor((f+7)/17)]},u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),u}();d.Mode=s})(a.QrSegment||(a.QrSegment={}))})(z||(z={}));var k=z,Z="H",H={L:k.QrCode.Ecc.LOW,M:k.QrCode.Ecc.MEDIUM,Q:k.QrCode.Ecc.QUARTILE,H:k.QrCode.Ecc.HIGH},de=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function q(a){return a in H}function j(a,d){d===void 0&&(d=0);var s=[];return a.forEach(function(u,f){var v=null;u.forEach(function(r,e){if(!r&&v!==null){s.push("M".concat(v+d," ").concat(f+d,"h").concat(e-v,"v1H").concat(v+d,"z")),v=null;return}if(e===u.length-1){if(!r)return;v===null?s.push("M".concat(e+d,",").concat(f+d," h1v1H").concat(e+d,"z")):s.push("M".concat(v+d,",").concat(f+d," h").concat(e+1-v,"v1H").concat(v+d,"z"));return}r&&v===null&&(v=e)})}),s.join("")}var Y={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:Z,validator:function(a){return q(a)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},ce=Q(Q({},Y),{renderAs:{type:String,required:!1,default:"canvas",validator:function(a){return["canvas","svg"].indexOf(a)>-1}}}),fe=V({name:"QRCodeSvg",props:Y,setup:function(a){var d=I(0),s=I(""),u=function(){var f=a.value,v=a.level,r=a.margin,e=k.QrCode.encodeText(f,H[v]).getModules();d.value=e.length+r*2,s.value=j(e,r)};return u(),J(u),function(){return D("svg",{width:a.size,height:a.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d.value," ").concat(d.value)},[D("path",{fill:a.background,d:"M0,0 h".concat(d.value,"v").concat(d.value,"H0z")}),D("path",{fill:a.foreground,d:s.value})])}}}),ve=V({name:"QRCodeCanvas",props:Y,setup:function(a){var d=I(null),s=function(){var u=a.value,f=a.level,v=a.size,r=a.margin,e=a.background,t=a.foreground,n=d.value;if(n){var i=n.getContext("2d");if(i){var o=k.QrCode.encodeText(u,H[f]).getModules(),l=o.length+r*2,c=window.devicePixelRatio||1,m=v/l*c;n.height=n.width=v*c,i.scale(m,m),i.fillStyle=e,i.fillRect(0,0,l,l),i.fillStyle=t,de?i.fill(new Path2D(j(o,r))):o.forEach(function(_,g){_.forEach(function(p,C){p&&i.fillRect(C+r,g+r,1,1)})})}}};return re(s),J(s),function(){return D("canvas",{ref:d,style:{width:"".concat(a.size,"px"),height:"".concat(a.size,"px")}})}}}),T=V({name:"Qrcode",render:function(){var a=this.$props,d=a.renderAs,s=a.value,u=a.size,f=a.margin,v=a.level,r=a.background,e=a.foreground,t=u>>>0,n=f>>>0,i=q(v)?v:Z;return D(d==="svg"?fe:ve,{value:s,size:t,margin:n,level:i,background:r,foreground:e})},props:ce});const he=a=>(ae("data-v-5d5d6f7a"),a=a(),se(),a),me=he(()=>O("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," View ",-1)),_e={class:"py-10",style:{"margin-left":"80px","margin-right":"80px"}},pe={class:"max-w-7x1 mx-auto sm:px-6 lg:px-8"},ge={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},Ee={key:0},we={key:1},Ce={class:"p-5 m-5",label:"URL"},be={key:0},Me={style:{display:"flex","justify-content":"center","align-items":"center"},class:"mb-10"},Re={__name:"View",props:{division:Object,section:Object,sub_section_types:Object,user:Object},setup(a){const d=a,s=ie({generated_url:null,selected_sub_section:"",sub_section_type:"",client_type:""}),u=I(null),f=I(!1),v=async(i,o)=>{f.value=!0,d.section.data[0].id==8?(u.value=4,s.generated_url=r+"/divisions/csf?office_id="+d.user.office_id+"&division_id="+d.division.id+"&section_id="+d.section.data[0].id+"&client_type="+s.client_type):i?o?(u.value=1.1,s.generated_url=r+"/divisions/csf?office_id="+d.user.office_id+"&division_id="+d.division.id+"&section_id="+d.section.data[0].id+"&sub_section_id="+i.id+"&sub_section_type="+s.sub_section_type.type_name):(u.value=1.2,s.generated_url=r+"/divisions/csf?office_id="+d.user.office_id+"&division_id="+d.division.id+"&section_id="+d.section.data[0].id+"&sub_section_id="+i.id):(u.value=0,s.generated_url=r+"/divisions/csf?office_id="+d.user.office_id+"&division_id="+d.division.id+"&section_id="+d.section.data[0].id)},r=window.location.origin,e=I(!1),t=()=>{const i=document.createElement("textarea");i.value=s.generated_url,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),e.value=!0,setTimeout(()=>{e.value=!1},2e3)},n=I(!1);return(i,o)=>{const l=A("v-divider"),c=A("v-card-title"),m=A("v-card"),_=A("v-col"),g=A("v-btn"),p=A("v-row"),C=A("v-text-field"),b=A("v-card-body");return M(),N(ne,{title:"Dashboard"},{header:w(()=>[me]),default:w(()=>[O("div",_e,[O("div",pe,[O("div",ge,[E(m,{class:"mb-3"},{default:w(()=>[E(c,{class:"m-3"},{default:w(()=>[a.division?(M(),x("div",Ee," DIVISION : "+X(a.division.division_name),1)):R("",!0),E(l,{class:"border-opacity-100"}),a.section?(M(),x("div",we," SECTION : "+X(d.section.data[0].section_name),1)):R("",!0)]),_:1})]),_:1}),E(m,{class:"mb-3",height:"600px"},{default:w(()=>[E(b,{class:"overflow-visible"},{default:w(()=>[E(p,{class:"p-5",key:""},{default:w(()=>[a.section.data[0].sub_sections.length>0?(M(),N(_,{key:0,class:"my-auto ml-5"},{default:w(()=>[E(S(W),{modelValue:s.selected_sub_section,"onUpdate:modelValue":o[0]||(o[0]=h=>s.selected_sub_section=h),"prepend-icon":"mdi-account",options:a.section.data[0].sub_sections,multiple:!1,placeholder:"Select Sub Section*",label:"sub_section_name","track-by":"sub_section_name","allow-empty":!1},null,8,["modelValue","options"])]),_:1})):R("",!0),a.sub_section_types.length>0&&s.selected_sub_section?(M(),N(_,{key:1,class:"my-auto"},{default:w(()=>[E(S(W),{modelValue:s.sub_section_type,"onUpdate:modelValue":o[1]||(o[1]=h=>s.sub_section_type=h),options:a.sub_section_types,multiple:!1,placeholder:"Select Sub Section Type",label:"type_name","track-by":"type_name","allow-empty":!1},null,8,["modelValue","options"])]),_:1})):R("",!0),E(_,{class:"my-auto text-right"},{default:w(()=>[E(g,{disabled:a.section.data[0].sub_sections.length>0&&s.selected_sub_section==""||s.selected_sub_section==3&&s.sub_section_type=="","prepend-icon":"mdi-plus",onClick:o[2]||(o[2]=h=>v(s.selected_sub_section,s.sub_section_type))},{default:w(()=>[oe("Generate URL ")]),_:1},8,["disabled"])]),_:1})]),_:1}),O("div",Ce,[E(p,null,{default:w(()=>[E(_,{cols:"10",md:"11"},{default:w(()=>[E(C,{modelValue:s.generated_url,"onUpdate:modelValue":o[3]||(o[3]=h=>s.generated_url=h),variant:"outlined",label:"URL",readonly:""},null,8,["modelValue"])]),_:1}),E(_,null,{default:w(()=>[E(g,{color:"none",icon:"mdi-content-copy",onClick:o[4]||(o[4]=h=>t())}),e.value?(M(),x("span",be,"copied")):R("",!0)]),_:1})]),_:1})]),O("div",Me,[u.value==0?(M(),N(T,{key:0,"render-as":"svg",value:`${S(r)}/divisions/csf?office_id=${a.user.office_id}&division_id=${d.division.id}&section_id=${d.section.data[0].id}`,size:145,foreground:"#000",level:"L",style:{border:"3px #ffffff solid",width:"300px",height:"300px"}},null,8,["value"])):R("",!0),u.value==1.1?(M(),N(T,{key:1,"render-as":"svg",value:`${S(r)}/divisions/csf?office_id=${a.user.office_id}&division_id=${d.division.id}&section_id=${a.section.data[0].id}&sub_section_id=${s.selected_sub_section.id}`,size:145,foreground:"#000",level:"L",style:{border:"3px #ffffff solid",width:"300px",height:"300px"}},null,8,["value"])):R("",!0),u.value==1.2?(M(),N(T,{key:2,"render-as":"svg",value:`${S(r)}/divisions/csf?office_id=${a.user.office_id}&division_id=${d.division.id}&section_id=${a.section.data[0].id}&sub_section_id=${s.selected_sub_section.id}&sub_section_type=${s.sub_section_type.id}`,size:145,foreground:"#000",level:"L",style:{border:"3px #ffffff solid",width:"300px",height:"300px"}},null,8,["value"])):R("",!0),u.value==2?(M(),N(T,{key:3,"render-as":"svg",value:`${S(r)}/divisions/csf?office_id=${a.user.office_id}&division_id=${d.division.id}&section_id=${a.section.data[0].id}&sub_section_id=${s.selected_sub_section.id}`,size:145,foreground:"#000",level:"L",style:{border:"3px #ffffff solid",width:"300px",height:"300px"}},null,8,["value"])):R("",!0),u.value==3?(M(),N(T,{key:4,"render-as":"svg",value:`${S(r)}/divisions/csf?office_id=${a.user.office_id}&division_id=${d.division.id}&section_id=${a.section.data[0].id}`,size:145,foreground:"#000",level:"L",style:{border:"3px #ffffff solid",width:"300px",height:"300px"}},null,8,["value"])):R("",!0)])]),_:1})]),_:1})])])]),f.value==!0?(M(),N(le,{key:0,is_printing:n.value,form:s,data:d},null,8,["is_printing","form","data"])):R("",!0)]),_:1})}}},Le=ue(Re,[["__scopeId","data-v-5d5d6f7a"]]);export{Le as default};
