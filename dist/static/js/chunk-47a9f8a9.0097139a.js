(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47a9f8a9"],{"0f9e":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[n("login-top",{attrs:{topTitle:"注册bilibili",operation:"用户登录"},on:{operationClick:function(e){return t.$router.push("/login")}}}),n("login-text",{staticStyle:{margin:"4.267vw 0"},attrs:{label:"姓名",placeholder:"请输入姓名"},on:{contentRule:function(e){return t.model.name=e}}}),n("login-text",{attrs:{label:"账号",placeholder:"请输入账号"},on:{contentRule:function(e){return t.model.username=e}}}),n("login-text",{attrs:{label:"密码",placeholder:"请输入密码",type:"password"},on:{contentRule:function(e){return t.model.password=e}}}),n("login-button",{attrs:{text:"注册"},nativeOn:{click:function(e){return t.btnClick(e)}}})],1)},a=[],r=n("1da1"),i=(n("96cf"),n("b0c0"),n("b64b"),n("787c")),s=n("7621"),c=n("7b4b"),l={components:{LoginTop:i["a"],LoginText:s["a"],LoginButton:c["a"]},data:function(){return{model:{}}},watch:{},methods:{btnClick:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=/^.{6,16}$/,!(n.test(t.model.name)&&n.test(t.model.username)&&n.test(t.model.password)&&0!==Object.keys(t.model).length)){e.next=9;break}return e.next=4,t.$http.post("/register",t.model);case 4:o=e.sent,console.log(o),302===o.data.code?t.$msg.fail(o.data.msg):(t.$msg.success(o.data.msg),localStorage.setItem("id",o.data.id),localStorage.setItem("token",o.data.objtoken),setTimeout((function(){t.$router.push("/userinfo")}),1e3)),e.next=10;break;case 9:t.$msg.fail("请输入6-16字符");case 10:case"end":return e.stop()}}),e)})))()}}},u=l,d=n("2877"),m=Object(d["a"])(u,o,a,!1,null,"d2a52922",null);e["default"]=m.exports},b64b:function(t,e,n){var o=n("23e7"),a=n("7b0b"),r=n("df75"),i=n("d039"),s=i((function(){r(1)}));o({target:"Object",stat:!0,forced:s},{keys:function(t){return r(a(t))}})}}]);
//# sourceMappingURL=chunk-47a9f8a9.0097139a.js.map