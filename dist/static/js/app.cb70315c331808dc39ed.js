webpackJsonp([1],[,,,,,,,,,,,,,function(e,t,s){"use strict";function n(e){e.client=new o.a({host:"47.94.2.0",port:80}),e.client.connect()||alert("连接失败")}var i=s(33),r=s(0),o=s(111),a=s(32);i.a.use(r.a);var u=new r.a.Store({state:{client:null,users:[],me:null,sessions:[],currentSession:null,filterKey:""},getters:{client:function(e){return e.client},users:function(e){return e.users},onlineUsers:function(e){var t=e.users,s=e.myLoginName;return t.filter(function(e){return e.loginName!==s})},me:function(e){return e.me},myLoginName:function(e){return e.myLoginName},sessions:function(e){var t=e.sessions,s=e.filterKey;return t&&t.filter(function(e){return!s||e.loginName.toUpperCase().includes(s.toUpperCase())})},currentSession:function(e){return e.currentSession}},mutations:{initSessions:function(e,t){e.sessions=t},setCurrentSession:function(e,t){t.messages||(t.messages=[]);var n=s.i(a.a)(t.loginName);n?e.currentSession=n:(n=t,e.currentSession=t,e.sessions.push(t)),n.messages.forEach(function(t){e.me.loginName===t.to&&e.client.read(t)})},initUsers:function(e,t){e.me=t,e.users=t.onlineUsers},refreshUser:function(e,t){var n;if(n=s.i(a.b)(t.loginName))return s.i(a.c)(n,t),e.users[e.users.indexOf(n)]=t;e.users.push(t)},setFilterKey:function(e,t){return e.filterKey=t},logout:function(e){return e.me=null}},actions:{register:function(e,t){var s=e.state;n(s),s.client.register(t)},login:function(e,t){var s=e.state;n(s),s.client.login(t)},sendMsg:function(e,t){var n=e.state,i=s.i(a.d)(),r={id:i,from:n.me.loginName,to:n.currentSession.loginName,content:t,self:!0,read:!1,date:new Date},o={};s.i(a.c)(o,n.currentSession),o.messages.push(r),n.currentSession=o,n.client.sendMsg({id:i,from:n.me.loginName,to:n.currentSession.loginName,content:t})}}});t.a=u},,,,,,,,,,,,,,,,,,,function(e,t,s){"use strict";function n(e){for(var t=m.a.getters.sessions,s=0;s<t.length;s++)if(t[s].loginName===e)return t[s]}function i(e){for(var t=m.a.getters.users,s=0;s<t.length;s++)if(t[s].loginName===e)return t[s]}function r(e,t){if(!e||!t)return console.error("target and source must not be null");for(var s in t)e[s]=t[s]}function o(e,t){if(!t){var s=window.localStorage.getItem(e);return s?JSON.parse(s):null}"object"===(void 0===t?"undefined":d()(t))&&(t=c()(t)),window.localStorage.setItem(e,t)}function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}s.d(t,"a",function(){return n}),s.d(t,"b",function(){return i}),s.d(t,"c",function(){return r}),s.d(t,"e",function(){return o}),s.d(t,"d",function(){return a});var u=s(99),c=s.n(u),l=s(103),d=s.n(l),m=s(13)},,,,,,,,,,,,function(e,t,s){function n(e){s(65)}var i=s(2)(s(104),s(58),n,"data-v-b822579a",null);e.exports=i.exports},function(e,t){},function(e,t,s){function n(e){s(61)}var i=s(2)(s(105),s(54),n,"data-v-59b0957b",null);e.exports=i.exports},function(e,t,s){function n(e){s(64)}var i=s(2)(s(106),s(57),n,"data-v-ab3957ee",null);e.exports=i.exports},function(e,t,s){function n(e){s(62)}var i=s(2)(s(107),s(55),n,"data-v-5ca4d274",null);e.exports=i.exports},function(e,t,s){function n(e){s(59)}var i=s(2)(s(108),s(52),n,"data-v-081a726c",null);e.exports=i.exports},function(e,t,s){function n(e){s(60)}var i=s(2)(s(109),s(53),n,"data-v-0e640443",null);e.exports=i.exports},function(e,t,s){function n(e){s(63)}var i=s(2)(s(110),s(56),n,"data-v-5d03e1c0",null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"scroll-bottom",rawName:"v-scroll-bottom"}],staticClass:"message"},[e.currentSession?s("ul",e._l(e.currentSession.messages,function(t){return s("li",[s("p",{staticClass:"time"},[s("span",[e._v(e._s(e._f("time")(t.date)))])]),e._v(" "),s("div",{staticClass:"main",class:{self:t.self}},[s("img",{staticClass:"avatar",attrs:{width:"30",height:"30",src:t.self?e.me.img:e.currentSession.img}}),e._v(" "),s("div",{staticClass:"text"},[e._v(e._s(t.content))]),e._v(" "),t.self?s("div",{staticClass:"read-text"},[e._v(e._s(e._f("readFilter")(t.read))+" ")]):e._e()])])})):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{disabled:!e.currentSession,placeholder:"按 Enter 发送"},domProps:{value:e.content},on:{keyup:e.onKeyup,input:function(t){t.target.composing||(e.content=t.target.value)}}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("header",[s("img",{staticClass:"avatar",attrs:{width:"40",height:"40",alt:e.me.name,src:e.me.img}}),e._v(" "),s("p",{staticClass:"name"},[e._v(e._s(e.me.loginName))])]),e._v(" "),s("footer",[s("input",{staticClass:"search",attrs:{type:"text",placeholder:"search user..."},on:{keyup:e.onKeyup}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"loginPanel"}},[s("div",{attrs:{id:"loginForm"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showLoginForm,expression:"showLoginForm"}],staticClass:"login"},[s("p",[s("span",{staticClass:"soul-label"},[e._v("\n        账号:\n        ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.loginName,expression:"user.loginName"}],staticClass:"soul-input",attrs:{type:"text"},domProps:{value:e.user.loginName},on:{input:function(t){t.target.composing||(e.user.loginName=t.target.value)}}})]),e._v(" "),s("p",[s("span",{staticClass:"soul-label"},[e._v("\n         密码:\n        ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"soul-input",attrs:{type:"text"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||(e.user.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"loginButtonPanel"},[s("a",{staticClass:"toggle",on:{click:e.toggleLogin}},[e._v("还没注册？")]),e._v(" "),s("button",{staticClass:"soul-button",on:{click:e.denglu}},[e._v("登录")])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.showLoginForm,expression:"!showLoginForm"}],staticClass:"register"},[s("p",[s("span",{staticClass:"soul-label"},[e._v("\n        账号:\n        ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.loginName,expression:"user.loginName"}],staticClass:"soul-input",attrs:{type:"text"},domProps:{value:e.user.loginName},on:{input:function(t){t.target.composing||(e.user.loginName=t.target.value)}}})]),e._v(" "),s("p",[s("span",{staticClass:"soul-label"},[e._v("\n         密码:\n        ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"soul-input",attrs:{type:"text"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||(e.user.password=t.target.value)}}})]),e._v(" "),s("p",[s("span",{staticClass:"soul-label"},[e._v("\n         确认密码:\n        ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"soul-input",attrs:{type:"text"},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||(e.user.confirmPassword=t.target.value)}}})]),e._v(" "),s("p",[s("span",{staticClass:"soul-label"},[e._v("\n         注册秘钥:\n        ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.registerCode,expression:"user.registerCode"}],staticClass:"soul-input",attrs:{type:"text"},domProps:{value:e.user.registerCode},on:{input:function(t){t.target.composing||(e.user.registerCode=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"loginButtonPanel"},[s("a",{staticClass:"toggle",on:{click:e.toggleLogin}},[e._v("已经注册？")]),e._v(" "),s("button",{staticClass:"soul-button",on:{click:e.zhuce}},[e._v("注册")])])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("\n  当前登录用户\n  "),s("ul",e._l(e.onlineUsers,function(t){return s("li",[s("img",{staticStyle:{width:"20px",height:"20px",display:"inline-block","vertical-align":"middle"},attrs:{src:t.img}}),e._v(" "),s("a",{attrs:{href:"#"},on:{click:function(s){e.setCurrentSession(t)}}},[e._v(e._s(t.loginName))]),e._v(" "),s("span",[e._v(e._s(t.notReadMsgCount))])])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list"},[s("ul",e._l(e.sessions,function(t,n){return s("li",{class:{active:e.currentSession?t.loginName===e.currentSession.loginName:0==n},on:{click:function(s){e.setCurrentSession(t)}}},[s("img",{staticClass:"avatar",attrs:{width:"30",height:"30",alt:t.loginName,src:t.img}}),e._v(" "),s("p",{staticClass:"name"},[e._v(e._s(e._f("truncateStr")(t.loginName)))])])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.me?s("div",{staticClass:"view"},[s("div",{staticClass:"sidebar"},[s("card"),e._v(" "),s("list")],1),e._v(" "),s("div",{staticClass:"main"},[s("message"),e._v(" "),s("TextBox")],1),e._v(" "),s("div",{staticClass:"userListPanel"},[s("userListPanel")],1)]):s("div",{staticClass:"view"},[s("loginPanel")],1)},staticRenderFns:[]}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(5),i=s.n(n),r=s(46),o=s.n(r),a=s(47),u=s.n(a),c=s(50),l=s.n(c),d=s(49),m=s.n(d),f=s(48),v=s.n(f),g=s(51),p=s.n(g),h=s(13),_=s(0);t.default={components:{Card:o.a,List:u.a,TextBox:l.a,Message:m.a,loginPanel:v.a,userListPanel:p.a},computed:i()({},s.i(_.b)(["me"])),mounted:function(){window.onunload=function(){h.a.state.client.disconnect()}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(5),i=s.n(n),r=s(0);t.default={computed:i()({},s.i(r.b)(["me"])),methods:i()({},s.i(r.c)(["setFilterKey"]),{onKeyup:function(e){this.setFilterKey(e.target.value)}})}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(5),i=s.n(n),r=s(0);t.default={computed:i()({},s.i(r.b)(["sessions","currentSession"])),methods:i()({},s.i(r.c)(["setCurrentSession"])),filters:{truncateStr:function(e){if(e)return e.substring(0,10)}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(5),i=s.n(n),r=s(0),o=s(32);t.default={data:function(){return{showLoginForm:!0,user:{loginName:"",password:"",confirmPassword:"",registerCode:""}}},methods:i()({},s.i(r.d)(["login","register"]),{denglu:function(){return this.user.loginName?this.user.password?void this.login(this.user):void alert("密码不能为空"):void alert("用户名不能为空")},zhuce:function(){return this.user.loginName?this.user.password?this.user.password?this.user.password!==this.user.password?void alert("两次输入密码不一致"):void this.register(this.user):void alert("确认密码不能为空"):void alert("密码不能为空"):void alert("用户名不能为空")},toggleLogin:function(){this.showLoginForm=!this.showLoginForm}}),mounted:function(){var e=s.i(o.e)("credential");e&&(e.autoLogin?this.$store.dispatch("login",e):(this.user.loginName=e.loginName,this.user.password=e.password))}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(5),i=s.n(n),r=s(0);t.default={computed:i()({},s.i(r.b)(["me","currentSession"])),filters:{time:function(e){return"string"==typeof e&&(e=new Date(e)),e.getHours()+":"+e.getMinutes()},readFilter:function(e){return e?"已读":"未读"}},directives:{"scroll-bottom":{componentUpdated:function(e){e.scrollTop=e.scrollHeight-e.clientHeight}}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(5),i=s.n(n),r=s(0);t.default={computed:i()({},s.i(r.b)(["currentSession"])),data:function(){return{content:""}},methods:{onKeyup:function(e){13===e.keyCode&&this.content.length&&(this.$store.dispatch("sendMsg",this.content),this.content="")}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(5),i=s.n(n),r=s(0);t.default={computed:i()({},s.i(r.b)(["onlineUsers"])),methods:i()({},s.i(r.c)(["setCurrentSession"]))}},function(e,t,s){"use strict";function n(){this.socket.on("register",r),this.socket.on("login",r),this.socket.on("receiveMsg",a),this.socket.on("disconnect",u),this.socket.on("notifyUserLogin",c),this.socket.on("kickOff",l),this.socket.on("receiveRead",o)}function i(e){var t=e.host,s=e.port;this.host=t,this.port=s,this.socket=null,this.events=[],this.register=function(e){this.socket.emit("register",e)},this.login=function(e){this.socket.emit("login",e)},this.sendMsg=function(e){this.socket.emit("sendMsg",e)},this.read=function(e){this.socket.emit("read",e)}}function r(e){var t=e.code,n=e.rMsg,i=e.rData;1===t?(d.a.commit("initUsers",i),d.a.commit("initSessions",i.sessions),s.i(m.e)("credential",i)):alert(n)}function o(e){var t=d.a.state.currentSession;if(t&&t.loginName===e.to){var n={};return s.i(m.c)(n,t),n.messages.find(function(t){return t.id===e.id}).read=!0,d.a.state.currentSession=n}}function a(e){var t=void 0,n=d.a.state.sessions,i=d.a.state.currentSession;if(i&&i.loginName===e.from){var r={};return s.i(m.c)(r,i),r.messages.push(e),d.a.state.currentSession=r,d.a.state.client.read(e)}var o=s.i(m.b)(e.from);(t=s.i(m.a)(e.from))?t.messages.push(e):(t={loginName:e.from,img:o.img,messages:[e]},n.push(t))}function u(e){d.a.state.users=d.a.state.users.filter(function(t){return t.loginName!==e})}function c(e){d.a.commit("refreshUser",e)}function l(e){var t=e.rData;d.a.commit("logout"),alert(t)}t.a=i;var d=s(13),m=s(32);i.prototype.on=function(e,t){return this.events[e]=t,this},i.prototype.connect=function(e){if(!("io"in window))return alert("浏览器不支持socket.io"),!1;var t="http://"+this.host+":"+this.port;return this.socket=io.connect(t),n.call(this),!0}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(33),i=s(44),r=s.n(i),o=s(13),a=s(45);s.n(a);n.a.config.devtools=!0,new n.a({el:"#app",template:"<App/>",components:{App:r.a},store:o.a})}],[112]);
//# sourceMappingURL=app.cb70315c331808dc39ed.js.map