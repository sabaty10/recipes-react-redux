(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{79:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t),c.d(t,"store",(function(){return U}));var a=c(0),n=c(20),r=c.n(n),i=c(27),s=c(5),l=c(44),j=c(26),o=c.n(j),d=c(31),b=c(45),u=c.n(b),O=function(e){return function(){var t=Object(d.a)(o.a.mark((function t(c){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.create({baseURL:"https://api.edamam.com"}).get("search?q=".concat(e,"&app_id=").concat("f17223a0","&app_key=").concat("791fc894be8ec0e32c1603992c861080"));case 2:a=t.sent,console.log(a),n=a.data.hits,c({type:"IS_LOADING",payload:!1}),c({type:"INITIAL_RECIPES",payload:n});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return{type:"PICK_RECIPE",payload:e}},h=c(21),x=c(4),f=c(16),v=c(2),m=function(){var e=Object(a.useState)(new Date),t=Object(f.a)(e,2),c=t[0],n=(t[1],Object(a.useState)(null)),r=Object(f.a)(n,2),i=r[0],s=r[1],l=Object(a.useState)(c.toLocaleTimeString("it-IT")),j=Object(f.a)(l,2),o=j[0],d=j[1];return Object(a.useEffect)((function(){var e=c.getDay();s(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]);var t=setInterval((function(){d((new Date).toLocaleTimeString("it-IT"))}),1e3);return function(){clearInterval(t)}}),[]),Object(v.jsxs)("div",{className:"date-container",children:[Object(v.jsxs)("span",{children:[" ",i," "]}),Object(v.jsxs)("span",{children:[" ",o]})]})},y=function(e){var t=e.recipe,c=Object(a.useState)(t),n=Object(f.a)(c,2),r=n[0],i=(n[1],Object(s.b)());return Object(v.jsx)(h.b,{to:"/recipe",children:Object(v.jsxs)("div",{className:"favorite-recipe",onClick:function(){return i(p(r))},children:[Object(v.jsx)("h1",{children:r.label}),Object(v.jsxs)("p",{children:["Calories: ",Math.floor(r.calories)]}),Object(v.jsx)("img",{src:r.image})]})})},g=c(96),E=function(){var e=Object(s.c)((function(e){return e.likesList.likes})),t=Object(a.useState)(!1),c=Object(f.a)(t,2),n=c[0],r=c[1];return Object(v.jsxs)("div",{children:[Object(v.jsxs)(g.a,{variant:"contained",color:"primary",className:"favorites-button",onClick:function(){r(!n)},children:[Object(v.jsx)("i",{class:"clipboard icon"}),Object(v.jsx)("label",{children:"My Favorites"})]}),Object(v.jsxs)("div",{className:" ".concat(n?"sidebar-active":""),children:[n&&Object(v.jsx)("button",{className:"close-button",onClick:function(){return r(!n)},children:Object(v.jsx)("i",{class:"close icon"})}),n&&(e.length>0?Object(v.jsxs)("div",{children:[Object(v.jsx)("ol",{children:e.map((function(e){return Object(v.jsx)(y,{recipe:e})}))})," "]}):Object(v.jsx)("p",{children:'"no favorite yet"'}))]})]})},S=c(97),N=c.p+"static/media/logo2.81d3752c.png",I=function(){var e=Object(s.c)((function(e){return e.search.search})),t=Object(s.b)();return Object(v.jsx)("div",{children:Object(v.jsxs)("header",{className:"app-header",children:[Object(v.jsxs)("div",{className:"header-logo-favorites",children:[Object(v.jsx)(E,{}),Object(v.jsx)(h.b,{to:"/",children:Object(v.jsx)("img",{className:"logo",src:N})})]}),Object(v.jsxs)("form",{onSubmit:function(c){c.preventDefault(),""!==e&&t(function(e){return function(t){t({type:"IS_LOADING",payload:!0}),t({type:"SET_QUERY",payload:e})}}(e))},className:"search-form",children:[Object(v.jsx)(S.a,{className:"search-bar",type:"text",value:e,onChange:function(e){return t({type:"SET_SEARCH",payload:e.target.value})}}),Object(v.jsx)(g.a,{variant:"contained",color:"primary",type:"submit",className:"button-search",children:"Search"})]}),Object(v.jsx)(m,{})]})})},_=function(){var e=Object(s.c)((function(e){return e.recipeDetails.recipeDetails}));return Object(v.jsx)("div",{className:"display-text",children:Object(v.jsxs)("div",{className:"recipe-details",children:[Object(v.jsxs)("div",{className:"recipe-details-img-name",children:[Object(v.jsx)("img",{src:e.image}),Object(v.jsxs)("span",{children:[Object(v.jsx)("h1",{children:e.label}),Object(v.jsxs)("p",{children:["Calories: ",Math.floor(e.calories)]}),Object(v.jsxs)("p",{children:["If you want to make it...  ",Object(v.jsx)("a",{href:e.url,target:"_blank",children:Object(v.jsx)("i",{class:"globe icon"})})]})]})]}),Object(v.jsxs)("ul",{className:"details-ul",children:[Object(v.jsx)("p",{children:"Ingredients:"}),e.ingredients.map((function(e){return Object(v.jsx)("li",{children:e.text})}))]})]})})},k=function(e){var t=e.recipe,c=Object(s.b)(),n=Object(a.useState)(t.recipe),r=Object(f.a)(n,2),i=r[0],l=(r[1],Object(a.useState)(!1)),j=Object(f.a)(l,2),o=j[0],d=j[1],b=function(){d(!o),c(function(e,t){return function(c,a){var n=a().likesList.likes;t?(n.push(e),c({type:"SET_LIKE",payload:n})):c({type:"REMOVE_LIKE",payload:n.filter((function(t){return t.label!==e.label}))})}}(i,!o))};return Object(v.jsxs)("div",{className:"recipe-item",children:[o?Object(v.jsx)("i",{onClick:b,class:"heart icon"}):Object(v.jsx)("i",{onClick:b,class:"heart outline icon"}),console.log(o),Object(v.jsx)("div",{onClick:function(){return c(p(i))},children:Object(v.jsx)(h.b,{to:"/recipe",children:Object(v.jsxs)("div",{className:"recipe-item-details",children:[Object(v.jsx)("h1",{children:i.label}),Object(v.jsxs)("p",{children:["Calories: ",Math.floor(i.calories)]}),Object(v.jsx)("img",{src:i.image}),Object(v.jsx)("ul",{className:"recipe-ingredient",children:i.ingredients.map((function(e){return Object(v.jsx)("li",{children:e.text})}))})]})})})]})},L=c.p+"static/media/insert-image.66608ba4.png",C=c.p+"static/media/loading-image.3cdd3a7c.png",T=function(){var e=Object(s.c)((function(e){return e.recipes.recipes})),t=Object(s.c)((function(e){return e.search.query})),c=Object(s.c)((function(e){return e.search.isLoading}));return Object(v.jsx)("div",{children:0===e.length&&""===t?Object(v.jsxs)("div",{className:"display-text",children:[Object(v.jsx)("div",{children:"Please insert value"}),Object(v.jsx)("img",{src:L})]}):0!==e.length||""===t||c?c?Object(v.jsxs)("div",{className:"display-text",children:[Object(v.jsx)("img",{src:C}),Object(v.jsx)("div",{children:"Loading..."})]}):Object(v.jsx)("div",{className:"recipes-container",children:e.map((function(e){return Object(v.jsx)(k,{recipe:e},e.recipe.label)}))}):Object(v.jsx)("div",{className:"display-text",children:"There are no matches"})})};c(79);var w=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.search.query}));return Object(a.useEffect)(Object(d.a)(o.a.mark((function c(){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:e(O(t));case 1:case"end":return c.stop()}}),c)}))),[t]),Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(h.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(I,{}),Object(v.jsx)(x.a,{path:"/",exact:!0,component:T}),Object(v.jsx)(x.a,{path:"/recipe",exact:!0,component:_})]})})})},D=c(8),R={recipes:[]},A={search:"",query:"",isLoading:!1},M={likes:[]},P={recipeDetails:{}},q=Object(i.b)({recipes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIAL_RECIPES":return Object(D.a)(Object(D.a)({},e),{},{recipes:t.payload});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH":return Object(D.a)(Object(D.a)({},e),{},{search:t.payload});case"SET_QUERY":return Object(D.a)(Object(D.a)({},e),{},{query:t.payload,search:""});case"IS_LOADING":return Object(D.a)(Object(D.a)({},e),{},{isLoading:t.payload});default:return e}},likesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIKE":case"REMOVE_LIKE":return Object(D.a)(Object(D.a)({},e),{},{likes:t.payload});default:return e}},recipeDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PICK_RECIPE":return Object(D.a)(Object(D.a)({},e),{},{recipeDetails:t.payload});default:return e}}}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,U=Object(i.d)(q,K(Object(i.a)(l.a)));U.subscribe((function(){console.log("store changed!",U.getState())})),r.a.render(Object(v.jsx)(s.a,{store:U,children:Object(v.jsx)(w,{})}),document.querySelector("#root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.d27ecd44.chunk.js.map