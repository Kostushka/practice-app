(this["webpackJsonppractice-app"]=this["webpackJsonppractice-app"]||[]).push([[0],{130:function(e,t,n){e.exports={modal:"Event_modal__3d345",btn:"Event_btn__2NRqj"}},158:function(e,t,n){e.exports={row:"Login_row__3CkaB"}},160:function(e,t,n){e.exports={error:"LoginForm_error__34K5h"}},166:function(e,t,n){e.exports={name:"Navigation_name__3bnXN"}},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),u=n(29),s=n.n(u),o=n(43),i=n(97),l=n(122),j=n(157),b=n(3);!function(e){e.SET_AUTH="SET_AUTH",e.SET_USER="SET_USER",e.SET_IS_LOADING="SET_IS_LOADING",e.SET_ERROR="SET_ERROR"}(r||(r={}));var O,d={isAuth:!1,user:{},isLoading:!1,error:""},f=function(e){return{type:r.SET_AUTH,payload:e}},h=function(e){return{type:r.SET_USER,payload:e}},p=function(e){return{type:r.SET_IS_LOADING,payload:e}},m=function(e){return{type:r.SET_ERROR,payload:e}};!function(e){e.SET_GUESTS="SET_GUESTS",e.SET_EVENT="SET_EVENT"}(O||(O={}));var v,x={guests:[],events:[]},g=function(e){return{type:O.SET_EVENT,payload:e}},S=Object(l.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_AUTH:return Object(b.a)(Object(b.a)({},e),{},{isAuth:t.payload,isLoading:!1});case r.SET_USER:return Object(b.a)(Object(b.a)({},e),{},{user:t.payload});case r.SET_IS_LOADING:return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.payload});case r.SET_ERROR:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload,isLoading:!1});default:return e}},event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.SET_GUESTS:return Object(b.a)(Object(b.a)({},e),{},{guests:t.payload});case O.SET_EVENT:return Object(b.a)(Object(b.a)({},e),{},{events:t.payload});default:return e}}}),E=Object(l.c)(S,Object(l.a)(j.a)),y=n(291),_=n(20),T=o.c,I=n(79),w=n(158),N=n.n(w),L=n(4),R=n(293),k=n(292),A=n(295),C=n(56),U=n(52),G=n.n(U),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435";return{required:!0,message:e}},F=function(e){return function(){return{validator:function(t,n){return n.isSameOrAfter(G()())?Promise.resolve():Promise.reject(new Error(e))}}}},V=n(33),H=n(25),J=n.n(H),M=n(10),P=n(12),q=n(159),z=n.n(q),B=function(){function e(){Object(M.a)(this,e)}return Object(P.a)(e,null,[{key:"getUsers",value:function(){var e=Object(V.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z.a.get("./users.json"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),K=function(e,t){return function(){var n=Object(V.a)(J.a.mark((function n(r){var a,c;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(p(!0)),n.next=4,B.getUsers();case 4:a=n.sent,(c=a.data.find((function(n){return n.username===e&&n.password===t})))?(localStorage.setItem("auth","true"),localStorage.setItem("username",c.username),r(h(c)),r(f(!0))):r(m("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")),r(p(!1)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),r(m("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},X=function(){return function(){var e=Object(V.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("auth"),localStorage.removeItem("username"),t(h({})),t(f(!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=n(160),Q=n.n(Y),W=n(7),Z=function(){var e=Object(a.useState)(""),t=Object(L.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),u=Object(L.a)(c,2),s=u[0],i=u[1],l=Object(o.b)(),j=T((function(e){return e.auth})),b=j.isLoading,O=j.error;return Object(W.jsx)(R.a,{labelCol:{span:12},wrapperCol:{span:16},onFinish:function(){l(K(n,s))},children:Object(W.jsxs)(k.a,{children:[O&&Object(W.jsx)("div",{className:Q.a.error,children:O}),Object(W.jsx)(R.a.Item,{label:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"username",rules:[D("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!")],children:Object(W.jsx)(A.a,{value:n,onChange:function(e){return r(e.target.value)}})}),Object(W.jsx)(R.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[D("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!")],children:Object(W.jsx)(A.a.Password,{value:s,onChange:function(e){return i(e.target.value)}})}),Object(W.jsx)(R.a.Item,{wrapperCol:{offset:8,span:16},children:Object(W.jsx)(C.a,{type:"primary",htmlType:"submit",loading:b,children:"\u0412\u0445\u043e\u0434"})})]})})},$=function(){return Object(W.jsx)(y.a,{children:Object(W.jsx)(I.a,{justify:"center",align:"middle",className:N.a.row,children:Object(W.jsx)(Z,{})})})},ee=n(297),te=n(296),ne=function(e){var t=e.getFullYear(),n=e.getMonth()<10?"0".concat(e.getMonth()+1):e.getMonth()+1,r=e.getDay()<10?"0".concat(e.getDay()+1):e.getDay()+1;return"".concat(t,".").concat(n,".").concat(r)},re=function(e){var t=e.events;return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(te.a,{dateCellRender:function(e){var n=ne(e.toDate()),r=t.filter((function(e){return e.data===n}));return Object(W.jsx)("div",{children:r.map((function(e,t){return Object(W.jsx)("div",{children:e.descr},t)}))})}})})},ae=n(294),ce=n(131),ue=function(e){var t=e.guests,n=e.submit,r=Object(a.useState)({author:"",data:"",descr:"",guest:""}),c=Object(L.a)(r,2),u=c[0],s=c[1],o=T((function(e){return e.auth})).user;return Object(W.jsxs)(R.a,{onFinish:function(){n(Object(b.a)(Object(b.a)({},u),{},{author:o.username}))},children:[Object(W.jsx)(R.a.Item,{label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f",name:"desc",rules:[D()],children:Object(W.jsx)(A.a,{onChange:function(e){return s(Object(b.a)(Object(b.a)({},u),{},{descr:e.target.value}))},value:u.descr})}),Object(W.jsx)(R.a.Item,{label:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0430\u0442\u0443",name:"date",rules:[D(),F("\u041d\u0435\u043b\u044c\u0437\u044f \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u043d\u0430 \u044d\u0442\u0443 \u0434\u0430\u0442\u0443")],children:Object(W.jsx)(ae.a,{onChange:function(e){return function(e){e&&s(Object(b.a)(Object(b.a)({},u),{},{data:ne(e.toDate())}))}(e)}})}),Object(W.jsx)(R.a.Item,{label:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0441\u0442\u044f",name:"guest",rules:[D()],children:Object(W.jsx)(ce.a,{style:{width:120},onChange:function(e){return s(Object(b.a)(Object(b.a)({},u),{},{guest:e}))},children:t.map((function(e){return Object(W.jsx)(ce.a.Option,{value:e.username,children:e.username},e.password)}))})}),Object(W.jsx)(I.a,{justify:"end",children:Object(W.jsx)(R.a.Item,{children:Object(W.jsx)(C.a,{type:"primary",htmlType:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})})]})},se=n(130),oe=n.n(se),ie=function(){var e=Object(a.useState)(!1),t=Object(L.a)(e,2),n=t[0],r=t[1],c=Object(o.b)(),u=T((function(e){return e.event})),s=u.guests,i=u.events,l=T((function(e){return e.auth})).user;Object(a.useEffect)((function(){var e;c(function(){var e=Object(V.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.getUsers();case 3:n=e.sent,t((r=n.data,{type:O.SET_GUESTS,payload:r})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}var r}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),c((e=l.username,function(){var t=Object(V.a)(J.a.mark((function t(n){var r,a,c;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{r=localStorage.getItem("events")||"[]",a=JSON.parse(r),c=a.filter((function(t){return t.author===e||t.guest===e})),n(g(c))}catch(u){console.log(u)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[]);return Object(W.jsxs)(y.a,{className:oe.a.modal,children:[Object(W.jsx)(re,{events:i}),Object(W.jsx)(I.a,{justify:"center",children:Object(W.jsx)(C.a,{className:oe.a.btn,onClick:function(){return r(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435"})}),Object(W.jsx)(ee.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435",visible:n,footer:null,onCancel:function(){return r(!1)},children:Object(W.jsx)(ue,{guests:s,submit:function(e){r(!1),c(function(e){return function(){var t=Object(V.a)(J.a.mark((function t(n){var r,a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{r=localStorage.getItem("events")||"[]",(a=JSON.parse(r)).push(e),n(g(a)),localStorage.setItem("events",JSON.stringify(a))}catch(c){console.log(c)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}})})]})};!function(e){e.LOGIN="login",e.EVENT="/",e.ALL="*"}(v||(v={}));var le=[{path:v.LOGIN,element:Object(W.jsx)($,{})},{path:v.ALL,element:Object(W.jsx)($,{})}],je=[{path:v.EVENT,element:Object(W.jsx)(ie,{})},{path:v.ALL,element:Object(W.jsx)(ie,{})}],be=function(){var e=T((function(e){return e.auth})).isAuth;return Object(W.jsx)(W.Fragment,{children:e?Object(W.jsx)(_.c,{children:je.map((function(e){return Object(W.jsx)(_.a,{path:e.path,element:e.element},e.path)}))}):Object(W.jsx)(_.c,{children:le.map((function(e){return Object(W.jsx)(_.a,{path:e.path,element:e.element},e.path)}))})})},Oe=n(298),de=n(166),fe=n.n(de),he=function(){var e=Object(_.f)(),t=T((function(e){return e.auth})),n=t.isAuth,r=t.user,a=Object(o.b)();return Object(W.jsx)(y.a.Header,{children:Object(W.jsx)(I.a,{justify:"end",gutter:6,children:n?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{className:fe.a.name,children:r.username}),Object(W.jsx)(Oe.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(W.jsx)(Oe.a.Item,{onClick:function(){return a(X())},children:"\u0412\u044b\u0439\u0442\u0438"},"1")})]}):Object(W.jsx)(Oe.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(W.jsx)(Oe.a.Item,{onClick:function(){return e(v.LOGIN)},children:"\u041b\u043e\u0433\u0438\u043d"},"1")})})})},pe=(n(287),function(){var e=Object(o.b)();return Object(a.useEffect)((function(){localStorage.getItem("auth")&&(e(h({username:localStorage.getItem("username")})),e(f(!0)))}),[]),Object(W.jsxs)(y.a,{children:[Object(W.jsx)(he,{}),Object(W.jsx)(y.a.Content,{children:Object(W.jsx)(be,{})})]})});n(288);s.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(o.a,{store:E,children:Object(W.jsx)(i.a,{children:Object(W.jsx)(pe,{})})})}),document.getElementById("root"))}},[[289,1,2]]]);
//# sourceMappingURL=main.2a9f0904.chunk.js.map