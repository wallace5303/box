(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56710314"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var r=[],n=0;n<t.length;n+=3)for(var a=t[n]<<16|t[n+1]<<8|t[n+2],o=0;o<4;o++)8*n+6*o<=8*t.length?r.push(e.charAt(a>>>6*(3-o)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,a=0;n<t.length;a=++n%4)0!=a&&r.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*a+8)-1)<<2*a|e.indexOf(t.charAt(n))>>>6-2*a);return r}};t.exports=r})()},"044b":function(t,e){function r(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&r(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},6821:function(t,e,r){(function(){var e=r("00d8"),n=r("9a634").utf8,a=r("044b"),o=r("9a634").bin,i=function(t,r){t.constructor==String?t=r&&"binary"===r.encoding?o.stringToBytes(t):n.stringToBytes(t):a(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var s=e.bytesToWords(t),l=8*t.length,c=1732584193,u=-271733879,f=-1732584194,d=271733878,h=0;h<s.length;h++)s[h]=16711935&(s[h]<<8|s[h]>>>24)|4278255360&(s[h]<<24|s[h]>>>8);s[l>>>5]|=128<<l%32,s[14+(l+64>>>9<<4)]=l;var g=i._ff,p=i._gg,y=i._hh,m=i._ii;for(h=0;h<s.length;h+=16){var v=c,b=u,w=f,_=d;c=g(c,u,f,d,s[h+0],7,-680876936),d=g(d,c,u,f,s[h+1],12,-389564586),f=g(f,d,c,u,s[h+2],17,606105819),u=g(u,f,d,c,s[h+3],22,-1044525330),c=g(c,u,f,d,s[h+4],7,-176418897),d=g(d,c,u,f,s[h+5],12,1200080426),f=g(f,d,c,u,s[h+6],17,-1473231341),u=g(u,f,d,c,s[h+7],22,-45705983),c=g(c,u,f,d,s[h+8],7,1770035416),d=g(d,c,u,f,s[h+9],12,-1958414417),f=g(f,d,c,u,s[h+10],17,-42063),u=g(u,f,d,c,s[h+11],22,-1990404162),c=g(c,u,f,d,s[h+12],7,1804603682),d=g(d,c,u,f,s[h+13],12,-40341101),f=g(f,d,c,u,s[h+14],17,-1502002290),u=g(u,f,d,c,s[h+15],22,1236535329),c=p(c,u,f,d,s[h+1],5,-165796510),d=p(d,c,u,f,s[h+6],9,-1069501632),f=p(f,d,c,u,s[h+11],14,643717713),u=p(u,f,d,c,s[h+0],20,-373897302),c=p(c,u,f,d,s[h+5],5,-701558691),d=p(d,c,u,f,s[h+10],9,38016083),f=p(f,d,c,u,s[h+15],14,-660478335),u=p(u,f,d,c,s[h+4],20,-405537848),c=p(c,u,f,d,s[h+9],5,568446438),d=p(d,c,u,f,s[h+14],9,-1019803690),f=p(f,d,c,u,s[h+3],14,-187363961),u=p(u,f,d,c,s[h+8],20,1163531501),c=p(c,u,f,d,s[h+13],5,-1444681467),d=p(d,c,u,f,s[h+2],9,-51403784),f=p(f,d,c,u,s[h+7],14,1735328473),u=p(u,f,d,c,s[h+12],20,-1926607734),c=y(c,u,f,d,s[h+5],4,-378558),d=y(d,c,u,f,s[h+8],11,-2022574463),f=y(f,d,c,u,s[h+11],16,1839030562),u=y(u,f,d,c,s[h+14],23,-35309556),c=y(c,u,f,d,s[h+1],4,-1530992060),d=y(d,c,u,f,s[h+4],11,1272893353),f=y(f,d,c,u,s[h+7],16,-155497632),u=y(u,f,d,c,s[h+10],23,-1094730640),c=y(c,u,f,d,s[h+13],4,681279174),d=y(d,c,u,f,s[h+0],11,-358537222),f=y(f,d,c,u,s[h+3],16,-722521979),u=y(u,f,d,c,s[h+6],23,76029189),c=y(c,u,f,d,s[h+9],4,-640364487),d=y(d,c,u,f,s[h+12],11,-421815835),f=y(f,d,c,u,s[h+15],16,530742520),u=y(u,f,d,c,s[h+2],23,-995338651),c=m(c,u,f,d,s[h+0],6,-198630844),d=m(d,c,u,f,s[h+7],10,1126891415),f=m(f,d,c,u,s[h+14],15,-1416354905),u=m(u,f,d,c,s[h+5],21,-57434055),c=m(c,u,f,d,s[h+12],6,1700485571),d=m(d,c,u,f,s[h+3],10,-1894986606),f=m(f,d,c,u,s[h+10],15,-1051523),u=m(u,f,d,c,s[h+1],21,-2054922799),c=m(c,u,f,d,s[h+8],6,1873313359),d=m(d,c,u,f,s[h+15],10,-30611744),f=m(f,d,c,u,s[h+6],15,-1560198380),u=m(u,f,d,c,s[h+13],21,1309151649),c=m(c,u,f,d,s[h+4],6,-145523070),d=m(d,c,u,f,s[h+11],10,-1120210379),f=m(f,d,c,u,s[h+2],15,718787259),u=m(u,f,d,c,s[h+9],21,-343485551),c=c+v>>>0,u=u+b>>>0,f=f+w>>>0,d=d+_>>>0}return e.endian([c,u,f,d])};i._ff=function(t,e,r,n,a,o,i){var s=t+(e&r|~e&n)+(a>>>0)+i;return(s<<o|s>>>32-o)+e},i._gg=function(t,e,r,n,a,o,i){var s=t+(e&n|r&~n)+(a>>>0)+i;return(s<<o|s>>>32-o)+e},i._hh=function(t,e,r,n,a,o,i){var s=t+(e^r^n)+(a>>>0)+i;return(s<<o|s>>>32-o)+e},i._ii=function(t,e,r,n,a,o,i){var s=t+(r^(e|~n))+(a>>>0)+i;return(s<<o|s>>>32-o)+e},i._blocksize=16,i._digestsize=16,t.exports=function(t,r){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var n=e.wordsToBytes(i(t,r));return r&&r.asBytes?n:r&&r.asString?o.bytesToString(n):e.bytesToHex(n)}})()},"77cc":function(t,e,r){"use strict";var n=r("e5c0"),a=r.n(n);a.a},"88bc":function(t,e,r){(function(e){var r=1/0,n=9007199254740991,a="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function f(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function d(t,e){var r=-1,n=t?t.length:0,a=Array(n);while(++r<n)a[r]=e(t[r],r,t);return a}function h(t,e){var r=-1,n=e.length,a=t.length;while(++r<n)t[a+r]=e[r];return t}var g=Object.prototype,p=g.hasOwnProperty,y=g.toString,m=u.Symbol,v=g.propertyIsEnumerable,b=m?m.isConcatSpreadable:void 0,w=Math.max;function _(t,e,r,n,a){var o=-1,i=t.length;r||(r=x),a||(a=[]);while(++o<i){var s=t[o];e>0&&r(s)?e>1?_(s,e-1,r,n,a):h(a,s):n||(a[a.length]=s)}return a}function S(t,e){return t=Object(t),T(t,e,(function(e,r){return r in t}))}function T(t,e,r){var n=-1,a=e.length,o={};while(++n<a){var i=e[n],s=t[i];r(s,i)&&(o[i]=s)}return o}function k(t,e){return e=w(void 0===e?t.length-1:e,0),function(){var r=arguments,n=-1,a=w(r.length-e,0),o=Array(a);while(++n<a)o[n]=r[e+n];n=-1;var i=Array(e+1);while(++n<e)i[n]=r[n];return i[e]=o,f(t,this,i)}}function x(t){return j(t)||O(t)||!!(b&&t&&t[b])}function M(t){if("string"==typeof t||$(t))return t;var e=t+"";return"0"==e&&1/t==-r?"-0":e}function O(t){return B(t)&&p.call(t,"callee")&&(!v.call(t,"callee")||y.call(t)==a)}var j=Array.isArray;function C(t){return null!=t&&F(t.length)&&!A(t)}function B(t){return U(t)&&C(t)}function A(t){var e=L(t)?y.call(t):"";return e==o||e==i}function F(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}function L(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function U(t){return!!t&&"object"==typeof t}function $(t){return"symbol"==typeof t||U(t)&&y.call(t)==s}var q=k((function(t,e){return null==t?{}:S(t,d(_(e,1),M))}));t.exports=q}).call(this,r("c8ba"))},"8b2f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("standard-form-row",{staticStyle:{"padding-bottom":"11px"},attrs:{title:"",block:""}},[t.token?t._e():r("router-link",{attrs:{to:{name:"login"}}},[r("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"default",icon:"login"}},[t._v(" 去登录 ")])],1),r("span",{staticStyle:{"margin-right":"10px"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type2"],expression:"['type2']"}],staticStyle:{width:"100px"},attrs:{placeholder:"类型"},on:{change:t.handleType2}},[r("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),t._l(t.myTypes,(function(e,n){return r("a-select-option",{key:n,attrs:{value:e.uwtid}},[t._v(t._s(e.name))])}))],2)],1),r("a-radio-group",{staticStyle:{"margin-right":"10px"},on:{change:function(e){return t.handleChangeType(t.category)}},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},[r("a-radio-button",{attrs:{value:"1"}},[t._v("普通")]),r("a-radio-button",{attrs:{value:"2"}},[t._v("隐私")])],1),"2"!==t.category||t.unlockFlag?"2"===t.category&&t.unlockFlag?r("span",[r("a-button",{staticStyle:{"margin-right":"10px"},on:{click:t.handleLock}},[t._v(" 立即上锁 ")])],1):t._e():r("a-input-search",{staticStyle:{"margin-right":"10px",width:"200px"},attrs:{type:"password",placeholder:"请输入密码"},on:{search:t.handleUnlock},model:{value:t.pwdText,callback:function(e){t.pwdText=e},expression:"pwdText"}},[r("a-button",{attrs:{slot:"enterButton"},slot:"enterButton"},[t._v(" 解锁 ")])],1),r("a-radio-group",{staticStyle:{"margin-right":"10px"},on:{change:function(e){return t.handleSort(t.sort)}},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}},[r("a-radio-button",{attrs:{value:"uwsid"}},[t._v("时间")]),r("a-radio-button",{attrs:{value:"name"}},[t._v("名称")])],1)],1),t.isShowData?r("a-card",{staticStyle:{"margin-top":"0px"},attrs:{bordered:!0,title:""}},[r("div",{staticClass:"operate"},[r("a-button",{staticStyle:{width:"100%"},attrs:{type:"dashed",icon:"plus"},on:{click:t.handleAdd}},[t._v("添加")])],1),r("a-list",{attrs:{loading:t.loading,size:"large"}},[t._l(t.webList,(function(e,n){return r("a-list-item",{key:n,staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[r("a-list-item-meta",{attrs:{description:e.url}},[e.img?r("a-avatar",{attrs:{slot:"avatar",size:"default",shape:"square",src:e.img},slot:"avatar"}):r("a-avatar",{style:e.style||"color: #fff;backgroundColor:#2BA245;",attrs:{slot:"avatar",size:"default",shape:"square",src:e.img},slot:"avatar"},[t._v(" "+t._s(e.name.substr(0,1))+" ")]),r("a",{attrs:{slot:"title",href:e.url,target:"_blank"},slot:"title"},[t._v(t._s(e.name))])],1),r("div",{staticClass:"list-number"},[r("span",[t._v(t._s(e.type_name))])]),r("div",{staticClass:"list-number"},[r("a-tooltip",[r("template",{slot:"title"},[t._v(" 数字大的在前 ")]),r("span",[t._v("排序："+t._s(e.sort))])],2)],1),r("div",{staticClass:"list-view"},[r("a",{attrs:{href:e.url,target:"_blank"}},[t._v("查看")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(r){return t.handleEdit(e)}}},[t._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"确定删除么？"},on:{confirm:function(r){return t.delConfirm(e.uwsid)}}},[r("a-icon",{staticStyle:{color:"red"},attrs:{slot:"icon",type:"question-circle-o"},slot:"icon"}),r("a",{attrs:{href:"#"}},[t._v("删除")])],1)],1)],1)})),r("span"),t.pageInfo.next_page_url?r("div",{staticStyle:{"text-align":"center","margin-top":"1px"},attrs:{slot:"footer"},slot:"footer"},[r("a-button",{attrs:{loading:t.loadingMore},on:{click:t.loadMore}},[t._v("加载更多")])],1):t._e()],2),r("user-web-form",{ref:"webSaveModal",attrs:{visible:t.visible,loading:t.confirmLoading,model:t.mdl,category:t.category,pMyTypes:t.myTypes},on:{cancel:t.handleCancel,ok:t.handleOk}})],1):t._e()],1)},a=[],o=(r("99af"),r("b0c0"),r("a9e3"),r("d3b7"),r("6821")),i=r.n(o),s=r("8ded"),l=r.n(s),c=r("9fb0"),u=r("d0eb"),f=r("a358"),d=r("2af9"),h={name:"WebSiteManage",components:{UserWebForm:u["a"],StandardFormRow:d["b"]},data:function(){return{token:null,webList:[],pageInfo:{},myTypes:[],loading:!1,loadingMore:!1,page:1,sort:"uwsid",visible:!1,confirmLoading:!1,type2:0,mdl:null,pwdText:"",category:this.$route.params.category||"1",isShowData:!0}},mounted:function(){this.getToken(),this.getUnlockFlag(),this.getMyTypes(),this.getManageUserSite()},methods:{getToken:function(){this.token=l.a.get(c["a"])},handleUnlock:function(t){if(!this.token)return this.$message.error("请登录"),!1;var e=l.a.get(c["d"]);if(e!==i()(t))return this.$message.error("密码错误"),!1;var r=(new Date).getTime()+3e5;l.a.set(c["p"],r),this.unlockFlag=1,this.isShowData=!0,this.getMyTypes(),this.getManageUserSite(),this.pwdText=""},handleLock:function(){l.a.remove(c["p"]),this.unlockFlag=0,this.handleChangeType("1")},getUnlockFlag:function(){var t=Number(l.a.get(c["p"])),e=(new Date).getTime();this.unlockFlag=e<t?1:0},handleSearch:function(t){this.sort="uwsid",this.page=1,this.getManageUserSite()},handleChangeType:function(t){this.category=t,this.sort="uwsid",this.page=1,this.webList=[],this.getMyTypes(),this.getManageUserSite()},handleSort:function(t){this.sort=t,this.page=1,this.webList=[],this.getManageUserSite()},handleType2:function(t){this.type2=t,this.page=1,this.webList=[],this.getManageUserSite()},handleAdd:function(){if(!this.token)return this.$message.error("请登录"),!1;this.mdl={id:0,name:"",url:"",sort:0},this.visible=!0},delConfirm:function(t){var e=this;this.loading=!0;var r={out_url:"delMySite",method:"POST",data:{uwsid:t,category:this.category}};Object(f["a"])(r).then((function(t){0===t.code&&(e.handleChangeType(e.category),e.$message.info("删除成功"))})).catch((function(t){})).finally((function(){}))},handleEdit:function(t){if(!this.token)return this.$message.error("请登录"),!1;this.mdl={id:t.uwsid,name:t.name,url:t.url,sort:t.sort},this.visible=!0},getManageUserSite:function(){var t=this;if(!this.token)return this.isShowData=!1,!1;if("2"===this.category&&!this.unlockFlag)return this.isShowData=!1,!1;this.isShowData=!0,this.loading=!0;var e={out_url:"manageUserSite",method:"POST",data:{page:this.page,sort:this.sort,type2:this.type2,category:this.category}};Object(f["a"])(e).then((function(e){0===e.code&&(t.pageInfo=e.data.list,t.webList=t.webList.concat(t.pageInfo.data))})).catch((function(t){})).finally((function(){t.loading=!1,t.loadingMore=!1}))},loadMore:function(){this.loadingMore=!0,this.page+=1,this.getManageUserSite()},getMyTypes:function(){var t=this;if(!this.token)return!1;if("2"===this.category&&!this.unlockFlag)return!1;var e={out_url:"myTypes",method:"POST",data:{category:this.category}};Object(f["a"])(e).then((function(e){if(0!==e.code)return!1;t.myTypes=e.data})).catch((function(t){}))},handleCancel:function(){this.visible=!1,this.confirmLoading=!1;this.$refs.webSaveModal.form},handleOk:function(){var t=this,e=this.$refs.webSaveModal.form;this.confirmLoading=!0,e.validateFields((function(e,r){var n="网络异常";if(e)t.confirmLoading=!1;else{var a={out_url:"saveMySite",method:"POST",data:{uwsid:r.id,category:t.category,type:r.type,name:r.name,url:r.url,sort:r.sort}};Object(f["a"])(a).then((function(e){if(0!==e.code)return t.$message.info(n+"["+e.code+"]"),!1;t.handleChangeType(t.category)})).catch((function(t){})).finally((function(){t.visible=!1,t.confirmLoading=!1}))}}))}}},g=h,p=(r("77cc"),r("2877")),y=Object(p["a"])(g,n,a,!1,null,"af39e4cc",null);e["default"]=y.exports},"9a634":function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r},d0eb:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-modal",{attrs:{title:"编辑",width:640,visible:t.visible,confirmLoading:t.loading},on:{ok:function(){t.$emit("ok")},cancel:function(){t.$emit("cancel")}}},[r("a-spin",{attrs:{spinning:t.loading}},[r("a-form",t._b({attrs:{form:t.form}},"a-form",t.formLayout,!1),[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:0}],expression:"['id', { initialValue: 0 }]"}],attrs:{type:"hidden"}})],1),r("a-form-item",{attrs:{label:"类型"}},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:12}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:t.firstOption}],expression:"['type', { initialValue: firstOption }]"}]},t._l(t.myTypes,(function(e,n){return r("a-select-option",{key:n,attrs:{value:e.uwtid}},[t._v(t._s(e.name))])})),1)],1),r("a-col",{attrs:{span:12}},[r("router-link",{attrs:{to:{name:"homeManageWebType",params:{category:this.category}}}},[r("a-button",[t._v("添加")])],1)],1)],1)],1),r("a-form-item",{attrs:{label:"名称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请填写名称"}]}],expression:"['name', {rules:[{required: true, message: '请填写名称'}]}]"}]})],1),r("a-form-item",{attrs:{label:"地址"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请正确填写地址"}]}],expression:"['url', {rules:[{required: true, message: '请正确填写地址'}]}]"}],attrs:{placeholder:"如：http://wwwbaidu.com/"}})],1),r("a-form-item",{attrs:{label:"排序"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0,rules:[{required:!1,message:"请填写数字"}]}],expression:"['sort', {initialValue: 0, rules:[{required: false, message: '请填写数字'}]}]"}]})],1)],1)],1)],1)},a=[],o=(r("4160"),r("8ded"),r("9fb0"),r("88bc")),i=r.n(o),s=(r("a358"),["id","type","name","url","sort"]),l={props:{visible:{type:Boolean,required:!0},loading:{type:Boolean,default:function(){return!1}},model:{type:Object,default:function(){return null}},category:{type:String,required:!0},pMyTypes:{type:Array,required:!0,default:function(){return[]}}},data:function(){return this.formLayout={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}}},{token:null,form:this.$form.createForm(this),myTypes:[],firstOption:0}},created:function(){var t=this;s.forEach((function(e){return t.form.getFieldDecorator(e)})),this.$watch("model",(function(){t.model&&t.form.setFieldsValue(i()(t.model,s)),t.myTypes=t.pMyTypes,t.myTypes.length>0&&(t.firstOption=t.myTypes[0].uwtid)}))},mounted:function(){},methods:{}},c=l,u=r("2877"),f=Object(u["a"])(c,n,a,!1,null,null,null);e["a"]=f.exports},e5c0:function(t,e,r){}}]);