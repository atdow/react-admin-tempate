(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{421:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=n(72).c},452:function(e,t,n){"use strict";t.a=n.p+"./fonts/logo.5d5d9eef.svg"},453:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(485),r=n.n(a),i=n(157),o=n.n(i),s=n(139),l=n.n(s);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=JSON.parse(r()(e));if(0===e.length)return[];o()(t).call(t,(function(e){o()(t).call(t,(function(t){e.parentId===t.id&&(t.children?t.children.push(e):t.children=[e])}))}));var n=l()(t).call(t,(function(e){return 0===e.parentId}));return n}},489:function(e,t,n){e.exports={"s-header":"s-header--3xehHd",sHeader:"s-header--3xehHd","avatar-dropdown":"avatar-dropdown--2MT6Is",avatarDropdown:"avatar-dropdown--2MT6Is"}},527:function(e,t,n){},534:function(e,t,n){e.exports={img:"img--2PHdgW"}},535:function(e,t,n){e.exports={"ant-menu-inline-collapsed":"ant-menu-inline-collapsed--2u70Kk",antMenuInlineCollapsed:"ant-menu-inline-collapsed--2u70Kk","ant-layout-sider-children":"ant-layout-sider-children--17pI0X",antLayoutSiderChildren:"ant-layout-sider-children--17pI0X","s-menu":"s-menu--F9F42V",sMenu:"s-menu--F9F42V","s-menu-max":"s-menu-max--2LqM7w",sMenuMax:"s-menu-max--2LqM7w","s-menu-min":"s-menu-min--3CODZA",sMenuMin:"s-menu-min--3CODZA","s-menu-header":"s-menu-header--kzaAse",sMenuHeader:"s-menu-header--kzaAse","s-menu-header-title":"s-menu-header-title--3YVpV0",sMenuHeaderTitle:"s-menu-header-title--3YVpV0","s-menu-header-title-min":"s-menu-header-title-min--bhzRtR",sMenuHeaderTitleMin:"s-menu-header-title-min--bhzRtR","s-menu-fold":"s-menu-fold--3fpHHp",sMenuFold:"s-menu-fold--3fpHHp"}},549:function(e,t,n){e.exports={tagsview:"tagsview--3jyvmJ","tagsview-content":"tagsview-content--3nRYI1",tagsviewContent:"tagsview-content--3nRYI1","tagsview-active":"tagsview-active--1grnkM",tagsviewActive:"tagsview-active--1grnkM",close:"close--1JEkcg"}},664:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ue}));var a=n(34),r=n.n(a),i=n(53),o=n(54),s=n(81),l=n(80),c=n(55),u=(n(527),n(0)),f=n.n(u),p=n(105),h=n(113),m=n(421),v=n(47),d=n(14),y=n(82),g=n(83),O=(n(484),n(442)),k=n(166),b=n.n(k),j=n(434),w=n.n(j),E=n(157),M=n.n(E),C=n(452),P=n(534),D=n.n(P);function N(e){return f.a.createElement(f.a.Fragment,null,f.a.createElement("img",{alt:"logo",src:C.a,className:D.a.img}))}var H,I=n(535),S=n.n(I),x=n(453),T=n(522),R=n(521),K=n(425);function V(e){var t=function(){if("undefined"==typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var i=Object(c.a)(this).constructor;n=r()(a,arguments,i)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var A=O.a.SubMenu;var F=Object(m.a)((function(e){var t=e.user;return{count:t.count,menu:t.menu}}),(function(e){return{getPerssionList:e.user.getPerssionList}}))(H=function(e){Object(s.a)(n,e);var t=V(n);function n(e){var a;return Object(i.a)(this,n),a=t.call(this,e),Object(g.a)(Object(y.a)(a),"renderTree",(function(e){return b()(e).call(e,(function(e){var t,n,r,i,o,s;if(e.children){if(null!==(t=e.meta)&&void 0!==t&&t.show)return f.a.createElement(A,{key:e.path,title:null==e||null===(n=e.meta)||void 0===n?void 0:n.title,icon:a.renderIcon(null==e||null===(r=e.meta)||void 0===r?void 0:r.icon)},a.renderTree(e.children))}else if(null!==(i=e.meta)&&void 0!==i&&i.show)return f.a.createElement(O.a.Item,{key:e.path,icon:a.renderIcon(null==e||null===(o=e.meta)||void 0===o?void 0:o.icon),onClick:w()(s=a.menuClick).call(s,Object(y.a)(a),e)},f.a.createElement("span",null,e.meta.title))}))})),Object(g.a)(Object(y.a)(a),"toggleCollapsed",(function(){a.setState({collapsed:!a.state.collapsed})})),a.state={collapsed:!1,formatMenu:[],defaultSelectedKeys:[],defaultOpenKeys:[]},a}return Object(o.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.init(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.init(e)}},{key:"init",value:function(e){var t,n,a=e.menu,r=void 0===a?[]:a,i=Object(x.a)(r),o=null===(t=this.props.history)||void 0===t||null===(n=t.location)||void 0===n?void 0:n.pathname,s=this.calDefaultOpenKeys(r,o);this.setState({formatMenu:i,defaultSelectedKeys:[o],defaultOpenKeys:s})}},{key:"renderIcon",value:function(e){return e?f.a.createElement(K[e],{style:{fontSize:"16px",color:"#fff"}}):""}},{key:"calDefaultOpenKeys",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=[],a="";function r(t){M()(e).call(e,(function(e){e.id===t.parentId&&(n.push(e.path),0!==e.parentId&&r(e))}))}return M()(e).call(e,(function(e){e.path===t&&(a=e)})),r(a),n}},{key:"menuClick",value:function(e){this.props.history.push(e.path)}},{key:"render",value:function(){return f.a.createElement("div",{className:[S.a.sMenu,this.state.collapsed?S.a["".concat("sMenu","Min")]:S.a["".concat("sMenu","Max")]].join(" ")},f.a.createElement("div",{className:S.a.sMenuHeader},f.a.createElement(N,null),f.a.createElement("h1",{className:[S.a["".concat("sMenu","HeaderTitle")],"over-ellipsis-1",this.state.collapsed?S.a["".concat("sMenu","HeaderTitleMin")]:""].join(" ")},"react-admin")),f.a.createElement("div",null,this.state.formatMenu.length&&f.a.createElement(O.a,{defaultOpenKeys:this.state.defaultOpenKeys,defaultSelectedKeys:this.state.defaultSelectedKeys,mode:"inline",theme:"dark",inlineCollapsed:this.state.collapsed},this.renderTree(this.state.formatMenu)),f.a.createElement("div",{className:S.a["".concat("sMenu","Fold")],onClick:this.toggleCollapsed},f.a.createElement(this.state.collapsed?T.a:R.a))))}}]),n}(f.a.Component))||H,B=n(489),L=n.n(B),W=(n(490),n(465)),z=(n(541),n(652)),J=n(201),U=n.n(J),Y=n(525),_=n(523),q=n(520);function X(e){var t=function(){if("undefined"==typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var i=Object(c.a)(this).constructor;n=r()(a,arguments,i)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var Z,G=function(e){Object(s.a)(n,e);var t=X(n);function n(){var e,a;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return a=t.call.apply(t,U()(e=[this]).call(e,o)),Object(g.a)(Object(y.a)(a),"onMenuClick",(function(e){e.key})),a}return Object(o.a)(n,[{key:"render",value:function(){var e=f.a.createElement(O.a,{className:L.a.menu,selectedKeys:[],onClick:this.onMenuClick},f.a.createElement(O.a.Item,{key:"center"},f.a.createElement(Y.a,null),"个人中心"),f.a.createElement(O.a.Item,{key:"settings"},f.a.createElement(_.a,null),"个人设置"),f.a.createElement(O.a.Divider,null),f.a.createElement(O.a.Item,{key:"logout"},f.a.createElement(q.a,null),"退出登录"));return f.a.createElement("div",{className:L.a.avatarDropdown},f.a.createElement(W.a,{overlay:e,placement:"bottomCenter"},f.a.createElement(z.a,{size:"small",className:L.a.avatar,alt:"avatar"})))}}]),n}(f.a.Component);function Q(e){var t=function(){if("undefined"==typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var i=Object(c.a)(this).constructor;n=r()(a,arguments,i)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var $,ee=Object(m.a)((function(e){var t=e.user;return{count:t.count,menu:t.menu}}),(function(e){return{getPerssionList:e.user.getPerssionList}}))(Z=function(e){Object(s.a)(n,e);var t=Q(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasPermission:!1},a}return Object(o.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){}},{key:"render",value:function(){return f.a.createElement("div",{className:L.a.sHeader},f.a.createElement(G,null))}}]),n}(f.a.Component))||Z,te=n(544),ne=n.n(te),ae=n(549),re=n.n(ae),ie=n(160);function oe(e){var t=function(){if("undefined"==typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var i=Object(c.a)(this).constructor;n=r()(a,arguments,i)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var se,le=Object(m.a)((function(e){return{menu:e.user.menu,tagsviewData:e.tagsview.tagsviewData}}),(function(e){return{setTagsviewData:e.tagsview.setTagsviewData}}))($=function(e){Object(s.a)(n,e);var t=oe(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={collapsed:!1,tagsViewData:[]},a}return Object(o.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){var e=this.props,t=e.menu,n=(e.history,this.props.history.location.pathname),a=this.props.tagsviewData,r=this.calTagsviewData(n,t,a);this.setState({tagsViewData:r})}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"calTagsviewData",value:function(e,t,n){var a=!1,r=n;return M()(n).call(n,(function(t){t.path==e&&(a=!0)})),!1===a&&M()(t).call(t,(function(t){t.path==e&&r.push(t)})),r}},{key:"componentWillReceiveProps",value:function(e){console.log("componentWillReceiveProps:")}},{key:"initTagsView",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,a=null==n||null===(e=n.location)||void 0===e?void 0:e.pathname,r=[];M()(t).call(t,(function(e){a==e.path&&r.push(e)})),this.setState({tagsViewData:r})}},{key:"tagsviewClick",value:function(e,t){this.props.history.location.pathname!==e.path&&this.props.history.push(e.path)}},{key:"closeTag",value:function(e,t,n){e.stopPropagation();var a=this.props.tagsviewData;1!==a.length&&(ne()(a).call(a,n,1),this.props.setTagsviewData(a),this.setState({tagsViewData:a}),this.props.history.location.pathname===t.path&&a.length>0&&this.props.history.push(a[a.length-1].path))}},{key:"render",value:function(){var e,t=this;return f.a.createElement("div",{className:re.a.tagsview},f.a.createElement("ul",{className:re.a.tagsviewContent},b()(e=this.state.tagsViewData).call(e,(function(e,n){var a;return f.a.createElement("li",{className:t.props.history.location.pathname===e.path?re.a.tagsviewActive:"",onClick:w()(a=t.tagsviewClick).call(a,t,e,n),key:n},f.a.createElement("span",{className:"margin-right-5"},e.meta.title),n>0&&f.a.createElement(ie.a,{className:re.a.close,onClick:function(a){return t.closeTag(a,e,n)}}))}))))}}]),n}(f.a.Component))||$;function ce(e){var t=function(){if("undefined"==typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var i=Object(c.a)(this).constructor;n=r()(a,arguments,i)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var ue=Object(m.a)((function(e){var t=e.user;return{count:t.count,menu:t.menu}}),(function(e){return{getPerssionList:e.user.getPerssionList}}))(se=function(e){Object(s.a)(n,e);var t=ce(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasPermission:!1},a}return Object(o.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){var e=this,t=this.props.menu,n=this.props.location.pathname;0==t.length?(console.log("请求了权限..."),this.props.getPerssionList().then((function(t){var a=t,r=a.menu,i=void 0===r?[]:r;a.permission;e.judgeHasPermission(i,n)})).catch((function(){e.props.history.push("/user/login")}))):(console.log("缓存的权限..."),this.judgeHasPermission(t,n))}},{key:"judgeHasPermission",value:function(e,t){for(var n=!1,a=0;a<e.length;a++)if(e[a].path===t){n=!0;break}n?this.setState({hasPermission:!0}):this.props.history.push(d.a+"/user/login")}},{key:"render",value:function(){var e=Object(p.a)(this.props.routes);return f.a.createElement("div",null,this.state.hasPermission&&f.a.createElement("div",{className:"s-security-layout"},f.a.createElement(F,{history:v.a}),f.a.createElement("div",{className:"s-content"},f.a.createElement(ee,{history:v.a}),f.a.createElement(le,{history:v.a}),f.a.createElement("div",{className:"s-content-route"},f.a.createElement(h.d,null,e)))))}}]),n}(f.a.Component))||se}}]);