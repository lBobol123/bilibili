(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54674f00"],{"0475":function(t,e,n){t.exports=n.p+"media/video.c641e36a.mp4"},"0dab":function(t,e,n){t.exports=n.p+"img/like.b3b3cd45.svg"},"10a8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home_detail",on:{click:function(e){return t.$router.push("/article/"+t.detailItem.id)}}},[i("div",{staticClass:"detail_info"},[i("div",{staticClass:"img_bottom"},[t._m(0),i("div",[i("img",{attrs:{src:n("9c54"),alt:""}}),i("span",[t._v(t._s(t.detailItem.commentlen?t.detailItem.commentlen:323))])])]),i("img",{staticClass:"detail_img",attrs:{src:n("23cb1"),alt:""}})]),i("div",{staticClass:"detail_title"},[t._v(t._s(t.detailItem.name))])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{staticClass:"paly_svg",attrs:{src:n("cc2e"),alt:""}}),i("span",[t._v("666")])])}],o={props:["detailItem"],data:function(){return{}},methods:{}},a=o,r=(n("115e"),n("2877")),s=Object(r["a"])(a,i,c,!1,null,"46bf62a5",null);e["a"]=s.exports},"10aa":function(t,e,n){"use strict";n("9b40")},"115e":function(t,e,n){"use strict";n("f6a2")},"15c0":function(t,e,n){"use strict";n("3fa1")},"1dde":function(t,e,n){var i=n("d039"),c=n("b622"),o=n("2d00"),a=c("species");t.exports=function(t){return o>=51||!i((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"23cb1":function(t,e,n){t.exports=n.p+"img/detail_img.52b62000.jpg"},2724:function(t,e,n){"use strict";n("cbfd")},"2a9a":function(t,e,n){},"3fa1":function(t,e,n){},"598a":function(t,e,n){t.exports=n.p+"img/share.b05108c6.svg"},"65f0":function(t,e,n){var i=n("861d"),c=n("e8b5"),o=n("b622"),a=o("species");t.exports=function(t,e){var n;return c(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?i(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var i=n("c04e"),c=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var a=i(e);a in t?c.f(t,a,o(0,n)):t[a]=n}},"8dde":function(t,e,n){"use strict";n("d1c9")},"99af":function(t,e,n){"use strict";var i=n("23e7"),c=n("d039"),o=n("e8b5"),a=n("861d"),r=n("7b0b"),s=n("50c4"),l=n("8418"),m=n("65f0"),u=n("1dde"),p=n("b622"),d=n("2d00"),f=p("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",g=d>=51||!c((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),_=u("concat"),b=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},C=!g||!_;i({target:"Array",proto:!0,forced:C},{concat:function(t){var e,n,i,c,o,a=r(this),u=m(a,0),p=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?a:arguments[e],b(o)){if(c=s(o.length),p+c>v)throw TypeError(h);for(n=0;n<c;n++,p++)n in o&&l(u,p,o[n])}else{if(p>=v)throw TypeError(h);l(u,p++,o)}return u.length=p,u}})},"9b40":function(t,e,n){},"9c54":function(t,e,n){t.exports=n.p+"img/comment.2351b8ac.svg"},c7ea:function(t,e,n){"use strict";n("2a9a")},cbfd:function(t,e,n){},cc2e:function(t,e,n){t.exports=n.p+"img/play.9773f9f6.svg"},d0bf:function(t,e,n){t.exports=n.p+"img/collect.a2bf5275.svg"},d1c9:function(t,e,n){},d296:function(t,e,n){t.exports=n.p+"img/collect_active.bada1a1f.svg"},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},f6a2:function(t,e,n){},f7ae:function(t,e,n){t.exports=n.p+"img/cached.77465659.svg"},fa20:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.model?n("div",{staticClass:"article"},[n("nav-bar"),t._m(0),n("article-info",{attrs:{model:t.model,artivleCollect:t.artivleCollect,scriptionActive:t.scriptionActive},on:{collectionClick:t.collectionClick,subscription:t.subscription,subscriptionActive:t.subscriptionActive}}),n("van-tabs",{attrs:{color:"#fb7299",animated:"",swipeable:"",sticky:"","title-active-color":"#fb7299","offset-top":"0"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{title:"相关推荐"}},[n("div",{staticClass:"recommend_parent"},t._l(t.recommend,(function(t){return n("home-detail",{key:t.index,attrs:{detailItem:t}})})),1)]),n("van-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("评论 "+t._s(t.commentCount))]},proxy:!0}],null,!1,1662026229)},[n("comment-title",{on:{postComment:t.postComment}}),n("comment-info",{ref:"commentInfo",on:{iptShow:t.iptShow}})],1)],1),n("van-action-sheet",{attrs:{"close-on-click-action":""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"post_comment"},[t.comChild?n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"postipt",attrs:{type:"text",placeholder:"回复 @"+t.comChild.userinfo.name+"："},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text",placeholder:"回复"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),n("span",{staticClass:"publish",on:{click:function(e){return t.postComment(t.content)}}},[t._v("发表")])])])],1):t._e()},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article_video"},[i("video",{staticClass:"article_video",attrs:{src:n("0475"),controls:""}})])}],o=n("1da1"),a=(n("99af"),n("96cf"),n("8f0e")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article_info"},[i("div",[i("span",{staticClass:"title_left"},[t._v(t._s(t.model.category.title))]),i("span",{staticClass:"title_right"},[t._v(t._s(t.model.name))])]),i("div",{staticClass:"article_user"},[i("span",{staticClass:"article_author"},[t._v(t._s(t.model.userinfo.name))]),t.scriptionActive?i("span",{staticClass:"subscription_active",on:{click:t.subscriptionActive}},[t._v("已关注")]):i("span",{staticClass:"subscription",on:{click:t.subscription}},[t._v("+关注")])]),i("div",{staticClass:"artivle_center"},[i("span",[t._v("154.3万次观看")]),i("span",[t._v("1.2万次弹幕")]),i("span",[t._v(t._s(t.model.date))])]),i("div",{staticClass:"article_bottom"},[i("div",{staticClass:"bottom_info",on:{click:t.collectClick}},[t.artivleCollect?i("img",{attrs:{src:n("d296"),alt:""}}):i("img",{attrs:{src:n("d0bf"),alt:""}}),i("span",{class:{active:t.artivleCollect}},[t._v("收藏")])]),t._m(0),t._m(1)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom_info"},[i("img",{attrs:{src:n("f7ae"),alt:""}}),i("span",[t._v("缓存")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom_info"},[i("img",{attrs:{src:n("598a"),alt:""}}),i("span",[t._v("分享")])])}],l={props:["model","artivleCollect","scriptionActive"],data:function(){return{}},methods:{collectClick:function(){this.$emit("collectionClick")},subscription:function(){this.$emit("subscription")},subscriptionActive:function(){this.$emit("subscriptionActive")}}},m=l,u=(n("2724"),n("2877")),p=Object(u["a"])(m,r,s,!1,null,"6b7d042e",null),d=p.exports,f=n("10a8"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article_comment_title"},[i("div",{staticClass:"comment_write"},[t.userInfo?i("img",{attrs:{src:t.userInfo.user_img,alt:""}}):i("img",{attrs:{src:n("0508"),alt:""}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],attrs:{type:"text",placeholder:"说点什么吧"},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}}),i("span",{staticClass:"publish",on:{click:t.publishClick}},[t._v("发表")])])])},h=[],g={data:function(){return{userInfo:null,commentText:""}},created:function(){localStorage.getItem("token")&&this.getUserInfo()},methods:{getUserInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/user/"+localStorage.getItem("id"));case 2:n=e.sent,t.userInfo=n.data[0];case 4:case"end":return e.stop()}}),e)})))()},publishClick:function(){localStorage.getItem("token")||localStorage.getItem("id")||this.userInfo?(this.$emit("postComment",this.commentText),this.commentText=""):this.$msg.fail("请先登录")}}},_=g,b=(n("8dde"),Object(u["a"])(_,v,h,!1,null,"14a2a6f0",null)),C=b.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comment_info"},t._l(t.commentList,(function(e){return i("div",{key:e.index,staticClass:"comment_item"},[i("div",{staticClass:"comment_title"},[i("div",{staticClass:"comment_left"},[e.userinfo.user_img?i("img",{attrs:{src:e.userinfo.user_img,alt:""}}):i("img",{attrs:{src:n("0508"),alt:""}}),i("div",{staticClass:"comment_user"},[i("div",{staticClass:"user_name"},[t._v(t._s(e.userinfo.name))]),i("div",{staticClass:"comment_data"},[t._v(t._s(e.comment_date))])])]),t._m(0,!0)]),i("p",{staticClass:"comment_text",on:{click:function(n){return t.iptShow(e)}}},[t._v(t._s(e.comment_content))]),0===e.child.length?i("div"):i("div",{staticClass:"comment_child"},[i("comment-item",{attrs:{commentChild:e.child},on:{iptShow:t.iptShow}})],1)])})),0)},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"coment_right"},[i("img",{attrs:{src:n("0dab"),alt:""}}),i("span",[t._v("2.9万")])])}],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"commentitems"},t._l(t.commentChild,(function(e){return n("div",{key:e.index},[n("div",{staticClass:"commentitem",on:{click:function(n){return t.iptShow(e)}}},[t.temp?n("span",{staticClass:"items_name"},[t._v(t._s(e.userinfo.name)+"："),n("span",[t._v("回复 @"+t._s(e.parent_user_info.name)+"：")])]):n("span",{staticClass:"items_name"},[t._v(t._s(e.userinfo.name)+"：")]),n("span",[t._v(t._s(e.comment_content))])]),n("comment-item",{attrs:{commentChild:e.child,temp:!0},on:{iptShow:t.iptShow}})],1)})),0)},$=[],I={name:"commentItem",props:["commentChild","temp"],data:function(){return{}},methods:{iptShow:function(t){this.$emit("iptShow",t)}}},S=I,A=(n("c7ea"),Object(u["a"])(S,k,$,!1,null,"5f958bb8",null)),R=A.exports,y={components:{CommentItem:R},data:function(){return{model:null,commentList:null}},created:function(){this.getComment()},methods:{getComment:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/comment/"+t.$route.params.id);case 2:n=e.sent,t.model=n.data,t.getFirstComment(n.data);case 5:case"end":return e.stop()}}),e)})))()},getFirstComment:function(t){function e(n){for(var i=[],c=0;c<t.length;c++)t[c].parent_id==n&&(i.push(t[c]),t[c].child=e(t[c].comment_id));return i}this.commentList=e(null)},iptShow:function(t){this.$emit("iptShow",t)}}},j=y,O=(n("15c0"),Object(u["a"])(j,x,w,!1,null,"614fc310",null)),E=O.exports,T={name:"Article",components:{NavBar:a["a"],ArticleInfo:d,HomeDetail:f["a"],CommentTitle:C,CommentInfo:E},data:function(){return{active:0,model:null,artivleCollect:!1,scriptionActive:!1,recommend:null,commentCount:"",show:!1,content:"",comChild:null,postCom:{comment_content:"",comment_date:"",parent_id:null,article_id:null}}},created:function(){this.getArticle(),this.getRecommend(),this.getCommentCount(),this.collectInit()},watch:{$route:function(){this.getArticle(),this.getRecommend(),this.collectInit()}},methods:{getArticle:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/article/"+t.$route.params.id);case 2:n=e.sent,t.model=n.data[0],t.model&&t.subscriptionInit();case 5:case"end":return e.stop()}}),e)})))()},getRecommend:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/commend");case 2:n=e.sent,t.recommend=n.data;case 4:case"end":return e.stop()}}),e)})))()},getCommentCount:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/comment/"+t.$route.params.id);case 2:n=e.sent,t.commentCount=n.data.length;case 4:case"end":return e.stop()}}),e)})))()},postComment:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var i,c,o,a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""===t){n.next=23;break}return i=new Date,c=i.getMonth()+1,o=i.getDay(),c<10&&(c="0"+c),o<10&&(o="0"+o),a="".concat(c,"-").concat(o),e.postCom.comment_content=t,e.postCom.comment_date=a,e.postCom.article_id=e.$route.params.id,n.next=12,e.$http.post("/comment_post/"+localStorage.getItem("id"),e.postCom);case 12:r=n.sent,console.log(r),e.commentCount+=1,e.content="",e.show=!1,e.$refs.commentInfo.getComment(),e.postCom.parent_id=null,console.log(e.postCom.parent_id),200===r.status&&e.$msg.success("回复成功"),n.next=24;break;case 23:e.$msg.fail("请输入内容");case 24:case"end":return n.stop()}}),n)})))()},iptShow:function(t){this.show=Boolean(t),this.comChild=t,this.postCom.parent_id=this.comChild.comment_id},collectionClick:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")){e.next=4;break}t.$msg.fail("请先登录"),e.next=9;break;case 4:return e.next=6,t.$http.post("/collection/"+localStorage.getItem("id"),{article_id:t.$route.params.id});case 6:n=e.sent,t.artivleCollect=!t.artivleCollect,t.$msg.success(n.data.msg);case 9:case"end":return e.stop()}}),e)})))()},collectInit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem("token")){e.next=5;break}return e.next=3,t.$http.get("/collection/"+localStorage.getItem("id"),{params:{article_id:t.$route.params.id}});case 3:n=e.sent,t.artivleCollect=n.data.success;case 5:case"end":return e.stop()}}),e)})))()},subscription:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")){e.next=4;break}t.$msg.fail("请先登录"),e.next=8;break;case 4:return e.next=6,t.$http.post("/sub_scription/"+localStorage.getItem("id"),{sub_id:t.model.userid});case 6:n=e.sent,"关注成功"==n.data.msg&&(t.scriptionActive=!0,t.$msg.success(n.data.msg));case 8:case"end":return e.stop()}}),e)})))()},subscriptionActive:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/sub_scription/"+localStorage.getItem("id"),{sub_id:t.model.userid});case 2:n=e.sent,"取消关注成功"==n.data.msg&&(t.scriptionActive=!1,t.$msg.success(n.data.msg));case 4:case"end":return e.stop()}}),e)})))()},subscriptionInit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem("token")){e.next=6;break}return e.next=3,t.$http.get("/sub_scription/"+localStorage.getItem("id"),{params:{sub_id:t.model.userid}});case 3:n=e.sent,!1===n.data.success?t.scriptionActive=!1:t.scriptionActive=!0,console.log(n);case 6:case"end":return e.stop()}}),e)})))()}}},N=T,B=(n("10aa"),Object(u["a"])(N,i,c,!1,null,"5635a518",null));e["default"]=B.exports}}]);
//# sourceMappingURL=chunk-54674f00.7535350c.js.map