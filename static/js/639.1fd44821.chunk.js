"use strict";(self.webpackChunkgoit_test_task_tweets=self.webpackChunkgoit_test_task_tweets||[]).push([[639],{639:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var r=n(433),s=n(861),a=n(439),c=n(757),o=n.n(c),u=n(791),i=n(683);var l=n.p+"static/media/logo.fd4ef749d37f796c02d5c218abefbc99.svg",d=n(765),p="Card_card__-SwHU",f="Card_tweets__MD4FS",_="Card_followers__oYm9T",x="Card_span__oLbeM",v="Card_btn__GDQIk",h="Card_btnFollowed__Bp66D",m="Card_line__UUbUI",w="Card_circle__SUNdJ",g="Card_avatar__UWcIt",b="Card_logo__etg-V",k="Card_messages__Qxed8",C=n(184),j=function(t){var e=t.users,n=t.setUsers,r=(t.updateUser,function(t){t.currentTarget.classList.toggle(h);var e=t.currentTarget.textContent;t.currentTarget.textContent="Follow"===e?"Following":"Follow";var r=t.currentTarget.id;n((function(t){return t.map((function(t){return t.id===r?(0,i.Z)((0,i.Z)({},t),{},{followers:"Follow"===e?t.followers+1:+(t.followers-1)}):t}))}))});return e.map((function(t){return(0,C.jsxs)("li",{className:p,children:[(0,C.jsx)("img",{src:l,alt:"logo",className:b}),(0,C.jsx)("img",{src:d,alt:"messages",className:k}),(0,C.jsx)("div",{className:m,children:(0,C.jsx)("div",{className:w,children:(0,C.jsx)("img",{className:g,src:t.avatar,alt:t})})}),(0,C.jsxs)("p",{className:f,children:[(0,C.jsx)("span",{className:x,children:t.tweets}),(0,C.jsx)("span",{children:"Tweets"})]}),(0,C.jsxs)("p",{className:_,children:[(0,C.jsx)("span",{className:x,children:t.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),(0,C.jsx)("span",{children:"Followers"})]}),(0,C.jsx)("button",{type:"button",id:t.id,className:v,onClick:r,children:"Follow"})]},t.id)}))},N=function(t){var e=t.onClick,n=t.className;return(0,C.jsx)("button",{className:n,type:"button",onClick:e,children:"Load more"})},Z=n(243);Z.Z.defaults.baseURL="https://6456da1e5f9a4f23614d2d7b.mockapi.io";var U=function(){var t=(0,s.Z)(o().mark((function t(){var e,n,r=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,Z.Z.get("/tweets?page=".concat(e,"&limit=3"));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=(0,s.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.Z.put("/tweets/".concat(e.id),e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=n(689),L="CardsList_btn_back__XqGNU",S="CardsList_btn_load__OvPhR";function T(){var t=(0,F.s0)(),e=(0,u.useState)([]),n=(0,a.Z)(e,2),c=n[0],i=n[1],l=(0,u.useState)(1),d=(0,a.Z)(l,2),p=d[0],f=d[1];(0,u.useEffect)((function(){function t(){return(t=(0,s.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U();case 3:e=t.sent,i(e),f((function(t){return t+1})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var _=function(){var t=(0,s.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:n=t.sent,i((function(t){return t.map((function(t){return t.id===e.id?n:e}))})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return(0,C.jsxs)("div",{children:[(0,C.jsx)("button",{type:"button",className:L,onClick:function(){return t("/")},children:"Back"}),(0,C.jsx)("ul",{children:(0,C.jsx)(j,{users:c,setUsers:i,updateUser:_})}),(0,C.jsx)(N,{onClick:function(){function t(){return(t=(0,s.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U(p);case 3:e=t.sent,i((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(e))})),f((function(t){return t+1})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},className:S})]})}function B(){return(0,C.jsx)("div",{children:(0,C.jsx)(T,{})})}},765:function(t,e,n){t.exports=n.p+"static/media/picture.92ac7be459c2a240dbba.png"}}]);
//# sourceMappingURL=639.1fd44821.chunk.js.map