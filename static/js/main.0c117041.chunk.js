(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=(a(100),a(17)),m=a(18),o=a(20),s=a(19),u=a(21),d=a(38),E=a.n(d),p=a(27),h=a.n(p),C=a(92),f=a.n(C),y=a(2),N=a.n(y),g=a(16),v=a.n(g),b=a(15),I=a(94),T=a(87);var k=Object(T.a)(function(e,t){if("ADD_TO_CART"===t.type){var a=Object(I.a)(e.Cart);return a.push(t.product),Object(b.a)({},e,{Cart:a})}if("SET_PRODUCTS"===t.type)return Object(b.a)({},e,{Products:t.items});if("ITEM_TITLE"===t.type){var n=[];return n.push(t.title),Object(b.a)({},e,{Title:n})}if("ITEM_DESCRIPTION"===t.type){var r=[];return r.push(t.description),Object(b.a)({},e,{Description:r})}var c;if("MODAL"===t.type)return c=t.modal,Object(b.a)({},e,{Show:c});if("ITEM_PRICE"===t.type){var l=[];return l.push(t.price),Object(b.a)({},e,{Price:l})}if("ITEM_RATING"===t.type){var i=[];return i.push(t.rating),Object(b.a)({},e,{Rating:i})}return"TV"===t.type?Object(b.a)({},e,{TV:t.TV}):"Headphones"===t.type?Object(b.a)({},e,{Headphones:t.Headphones}):"Phones"===t.type?Object(b.a)({},e,{Phones:t.Phones}):"Cameras"===t.type?Object(b.a)({},e,{Cameras:t.Cameras}):"Watches"===t.type?Object(b.a)({},e,{Watches:t.Watches}):"Kitchen_Appliances"===t.type?Object(b.a)({},e,{Kitchen_Appliances:t.Kitchen_Appliances}):"ACCOUNT_NAME"===t.type?Object(b.a)({},e,{UserName:t.username}):e},{Cart:[],Products:[]}),S=a(8),A=a(7),B=a.n(A),P=[],O=[],x=[],D=[],j=[],L=[],M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={Products:[],TV:P,Headphones:O,Phones:x,Cameras:D,Watches:j,Kitchen_Appliances:L},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"AddToCart",value:function(e){for(var t=0;t<k.getState().Products.length;t++)if(k.getState().Products[t].title==e)if(k.getState().Cart.includes(k.getState().Products[t]))alert("Already in your Cart!");else if("Login"!==document.getElementById("FooterAccountName").innerHTML)k.dispatch({type:"ADD_TO_CART",product:k.getState().Products[t]}),alert('Added "'+k.getState().Products[t].title+'" To the Cart!');else{if("Login"!==document.getElementById("FooterAccountName").innerHTML)return null;document.location.href="/e-commerce/"}}},{key:"renderItems",value:function(){var e=this;return this.itemPusher(),k.getState().Products.map(function(a){return r.a.createElement("div",{className:"Item",key:a.id},r.a.createElement(N.a,{style:{width:"18rem",height:"425px"},id:a.id},r.a.createElement(N.a.Img,{variant:"top",src:a.img}),r.a.createElement("div",{className:"BorderLine"}),r.a.createElement(N.a.Body,{className:"CBody"},r.a.createElement(B.a,{variant:"flush"},r.a.createElement(B.a.Item,{className:"SuperItem"},r.a.createElement(N.a.Title,{id:a.title+"Title"},a.title)),r.a.createElement(S.b,{to:"/e-commerce/Store/Details",id:"DetailsBTN",onClick:function(){return t.setModal(a.title,a.description,a.price,a.rating)},className:"btn btn-outline-primary"},"Details"),r.a.createElement("div",{className:"SuperDiv"},r.a.createElement(N.a.Text,{className:"iflex"},"$",a.price),r.a.createElement(v.a,{className:"iflex CartBTN",variant:"outline-primary",id:a.title,onClick:function(){return e.AddToCart(a.title)}},"Add to Cart ",r.a.createElement("i",{className:"fas fa-cart-plus"})))))))})}},{key:"itemPusher",value:function(){P=[],O=[],x=[],D=[],j=[],L=[];for(var e=0;e<k.getState().Products.length;e++)"tv"===k.getState().Products[e].category?P.push(k.getState().Products[e]):"headphones"===k.getState().Products[e].category?O.push(k.getState().Products[e]):"phone"===k.getState().Products[e].category?x.push(k.getState().Products[e]):"action-camera"===k.getState().Products[e].category?D.push(k.getState().Products[e]):"watch"===k.getState().Products[e].category?j.push(k.getState().Products[e]):"small-appliance"===k.getState().Products[e].category?L.push(k.getState().Products[e]):"refrigerator"===k.getState().Products[e].category&&L.push(k.getState().Products[e])}},{key:"render",value:function(){return this.renderItems()}}],[{key:"handleShow",value:function(){k.dispatch({type:"MODAL",modal:!0})}},{key:"setModal",value:function(e,a,n,r){k.dispatch({type:"ITEM_TITLE",title:e}),k.dispatch({type:"ITEM_DESCRIPTION",description:a}),k.dispatch({type:"ITEM_PRICE",price:n}),k.dispatch({type:"ITEM_RATING",rating:r}),t.handleShow()}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={Products:[],TV:P,Headphones:O,Phones:x,Cameras:D,Watches:j,Kitchen_Appliances:L},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"AddToCart",value:function(e){for(var t=0;t<k.getState().Products.length;t++)if(k.getState().Products[t].title==e)if(k.getState().Cart.includes(k.getState().Products[t]))alert("Already in your Cart!");else if("Login"!==document.getElementById("FooterAccountName").innerHTML)k.dispatch({type:"ADD_TO_CART",product:k.getState().Products[t]}),alert('Added "'+k.getState().Products[t].title+'" To the Cart!');else{if("Login"!==document.getElementById("FooterAccountName").innerHTML)return null;document.location.href="/e-commerce/"}}},{key:"renderItems",value:function(e){var t=this;return"TV"===(e=document.location.href.includes("/TV")?"TV":document.location.href.includes("/Headphones")?"Headphones":document.location.href.includes("/Phones")?"Phones":document.location.href.includes("/Cameras")?"Cameras":document.location.href.includes("/Watches")?"Watches":document.location.href.includes("Kitchen_Appliances")?"Kitchen_Appliances":null)?this.state.TV.map(function(e){return r.a.createElement("div",{className:"Item",key:e.id},r.a.createElement(N.a,{style:{width:"18rem",height:"425px"},id:e.id},r.a.createElement(N.a.Img,{variant:"top",src:e.img}),r.a.createElement("div",{className:"BorderLine"}),r.a.createElement(N.a.Body,{className:"CBody"},r.a.createElement(B.a,{variant:"flush"},r.a.createElement(B.a.Item,{className:"SuperItem"},r.a.createElement(N.a.Title,{id:e.title+"Title"},e.title)),r.a.createElement(S.b,{to:"/e-commerce/Category/TV/Details",id:"DetailsBTN",onClick:function(){return M.setModal(e.title,e.description,e.price,e.rating)},className:"btn btn-outline-primary"},"Details"),r.a.createElement("div",{className:"SuperDiv"},r.a.createElement(N.a.Text,{className:"iflex"},"$",e.price),r.a.createElement(v.a,{className:"iflex CartBTN",variant:"outline-primary",id:e.title,onClick:function(){return t.AddToCart(e.title)}},"Add to Cart ",r.a.createElement("i",{className:"fas fa-cart-plus"})))))))}):"Headphones"===e?this.state.Headphones.map(function(e){return r.a.createElement("div",{className:"Item",key:e.id},r.a.createElement(N.a,{style:{width:"18rem",height:"425px"},id:e.id},r.a.createElement(N.a.Img,{variant:"top",src:e.img}),r.a.createElement("div",{className:"BorderLine"}),r.a.createElement(N.a.Body,{className:"CBody"},r.a.createElement(B.a,{variant:"flush"},r.a.createElement(B.a.Item,{className:"SuperItem"},r.a.createElement(N.a.Title,{id:e.title+"Title"},e.title)),r.a.createElement(S.b,{to:"/e-commerce/Category/Headphones/Details",id:"DetailsBTN",onClick:function(){return M.setModal(e.title,e.description,e.price,e.rating)},className:"btn btn-outline-primary"},"Details"),r.a.createElement("div",{className:"SuperDiv"},r.a.createElement(N.a.Text,{className:"iflex"},"$",e.price),r.a.createElement(v.a,{className:"iflex CartBTN",variant:"outline-primary",id:e.title,onClick:function(){return t.AddToCart(e.title)}},"Add to Cart ",r.a.createElement("i",{className:"fas fa-cart-plus"})))))))}):"Phones"===e?this.state.Phones.map(function(e){return r.a.createElement("div",{className:"Item",key:e.id},r.a.createElement(N.a,{style:{width:"18rem",height:"425px"},id:e.id},r.a.createElement(N.a.Img,{variant:"top",src:e.img}),r.a.createElement("div",{className:"BorderLine"}),r.a.createElement(N.a.Body,{className:"CBody"},r.a.createElement(B.a,{variant:"flush"},r.a.createElement(B.a.Item,{className:"SuperItem"},r.a.createElement(N.a.Title,{id:e.title+"Title"},e.title)),r.a.createElement(S.b,{to:"/e-commerce/Category/Phones/Details",id:"DetailsBTN",onClick:function(){return M.setModal(e.title,e.description,e.price,e.rating)},className:"btn btn-outline-primary"},"Details"),r.a.createElement("div",{className:"SuperDiv"},r.a.createElement(N.a.Text,{className:"iflex"},"$",e.price),r.a.createElement(v.a,{className:"iflex CartBTN",variant:"outline-primary",id:e.title,onClick:function(){return t.AddToCart(e.title)}},"Add to Cart ",r.a.createElement("i",{className:"fas fa-cart-plus"})))))))}):"Cameras"===e?this.state.Cameras.map(function(e){return r.a.createElement("div",{className:"Item",key:e.id},r.a.createElement(N.a,{style:{width:"18rem",height:"425px"},id:e.id},r.a.createElement(N.a.Img,{variant:"top",src:e.img}),r.a.createElement("div",{className:"BorderLine"}),r.a.createElement(N.a.Body,{className:"CBody"},r.a.createElement(B.a,{variant:"flush"},r.a.createElement(B.a.Item,{className:"SuperItem"},r.a.createElement(N.a.Title,{id:e.title+"Title"},e.title)),r.a.createElement(S.b,{to:"/e-commerce/Category/Cameras/Details",id:"DetailsBTN",onClick:function(){return M.setModal(e.title,e.description,e.price,e.rating)},className:"btn btn-outline-primary"},"Details"),r.a.createElement("div",{className:"SuperDiv"},r.a.createElement(N.a.Text,{className:"iflex"},"$",e.price),r.a.createElement(v.a,{className:"iflex CartBTN",variant:"outline-primary",id:e.title,onClick:function(){return t.AddToCart(e.title)}},"Add to Cart ",r.a.createElement("i",{className:"fas fa-cart-plus"})))))))}):"Watches"===e?this.state.Watches.map(function(e){return r.a.createElement("div",{className:"Item",key:e.id},r.a.createElement(N.a,{style:{width:"18rem",height:"425px"},id:e.id},r.a.createElement(N.a.Img,{variant:"top",src:e.img}),r.a.createElement("div",{className:"BorderLine"}),r.a.createElement(N.a.Body,{className:"CBody"},r.a.createElement(B.a,{variant:"flush"},r.a.createElement(B.a.Item,{className:"SuperItem"},r.a.createElement(N.a.Title,{id:e.title+"Title"},e.title)),r.a.createElement(S.b,{to:"/e-commerce/Category/Watches/Details",id:"DetailsBTN",onClick:function(){return M.setModal(e.title,e.description,e.price,e.rating)},className:"btn btn-outline-primary"},"Details"),r.a.createElement("div",{className:"SuperDiv"},r.a.createElement(N.a.Text,{className:"iflex"},"$",e.price),r.a.createElement(v.a,{className:"iflex CartBTN",variant:"outline-primary",id:e.title,onClick:function(){return t.AddToCart(e.title)}},"Add to Cart ",r.a.createElement("i",{className:"fas fa-cart-plus"})))))))}):"Kitchen_Appliances"===e?this.state.Kitchen_Appliances.map(function(e){return r.a.createElement("div",{className:"Item",key:e.id},r.a.createElement(N.a,{style:{width:"18rem",height:"425px"},id:e.id},r.a.createElement(N.a.Img,{variant:"top",src:e.img}),r.a.createElement("div",{className:"BorderLine"}),r.a.createElement(N.a.Body,{className:"CBody"},r.a.createElement(B.a,{variant:"flush"},r.a.createElement(B.a.Item,{className:"SuperItem"},r.a.createElement(N.a.Title,{id:e.title+"Title"},e.title)),r.a.createElement(S.b,{to:"/e-commerce/Category/Kitchen_Appliances/Details",id:"DetailsBTN",onClick:function(){return M.setModal(e.title,e.description,e.price,e.rating)},className:"btn btn-outline-primary"},"Details"),r.a.createElement("div",{className:"SuperDiv"},r.a.createElement(N.a.Text,{className:"iflex"},"$",e.price),r.a.createElement(v.a,{className:"iflex CartBTN",variant:"outline-primary",id:e.title,onClick:function(){return t.AddToCart(e.title)}},"Add to Cart ",r.a.createElement("i",{className:"fas fa-cart-plus"})))))))}):null}},{key:"render",value:function(){return this.renderItems()}}]),t}(n.Component),w=a(29),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={counter:5},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.setState(function(e){return{counter:e.counter-1}})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Redirect"},r.a.createElement("div",null,r.a.createElement("h3",null,"ERROR 404: Not Found."),r.a.createElement("p",null,"Redirecting in ",this.state.counter,"..."),this.state.counter<1?r.a.createElement(w.a,{to:"/e-commerce"}):null))}}]),t}(r.a.Component),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={Products:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"removeFromCart",value:function(e){for(var t=function(t){k.getState().Cart[t].title.includes(e)&&(k.getState().Cart=k.getState().Cart.filter(function(e){return e!==k.getState().Cart[t]}))},a=0;a<k.getState().Cart.length;a++)t(a);this.forceUpdate()}},{key:"Checkout",value:function(){alert("Checkout Feature Coming Soon!"),k.getState().Cart=[]}},{key:"calibratePrice",value:function(e,t){return isNaN(e*t)?e:(e*t).toFixed(2)}},{key:"renderCart",value:function(){var e=this;return k.getState().Cart.map(function(t){return r.a.createElement(B.a.Item,{className:"CartItem",key:t.id},r.a.createElement("div",null,r.a.createElement("img",{alt:t.title+" Image",className:"CartIMG",src:t.img})),r.a.createElement("div",{className:"CartDiv"},t.title," "),r.a.createElement("div",{className:"CartPrice"},"$",e.calibratePrice(t.price,document.getElementById(t.id).value)),r.a.createElement("div",{className:"SuperCartHolder"},"  ",r.a.createElement("select",{className:"CartSelect",id:t.id,onChange:function(){return e.forceUpdate()},onLoad:function(){return e.forceUpdate()}},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10")),r.a.createElement(v.a,{variant:"primary",id:t.title,onClick:function(){return e.removeFromCart(t.title)}},"Delete")))})}},{key:"render",value:function(){var e=this;return"Login"!==document.getElementById("FooterAccountName").innerHTML?"/Store"===document.location.history?"Login"!==document.getElementById("FooterAccountName").innerHTML?r.a.createElement("div",{className:"Item"},r.a.createElement(N.a,null,r.a.createElement(N.a.Header,{className:"CartBox"},r.a.createElement("h3",null,r.a.createElement("b",null,"Cart:"))),r.a.createElement(B.a,{variant:"flush"},this.renderCart(),r.a.createElement(B.a.Item,{className:"CartItem Checkout"},r.a.createElement(S.b,{to:"/e-commerce/Store",className:"btn btn-outline-primary",onClick:function(){return e.Checkout()}},"Checkout ",r.a.createElement("i",{className:"fas fa-credit-card"})))))):null:"/Category/TV"===document.location.history?"Login"!==document.getElementById("FooterAccountName").innerHTML?r.a.createElement("div",{className:"Item"},r.a.createElement(N.a,null,r.a.createElement(N.a.Header,{className:"CartBox"},r.a.createElement("h3",null,r.a.createElement("b",null,"Cart:"))),r.a.createElement(B.a,{variant:"flush"},this.renderCart(),r.a.createElement(B.a.Item,{className:"CartItem Checkout"},r.a.createElement(S.b,{to:"/Category/TV",className:"btn btn-outline-primary",onClick:function(){return e.Checkout()}},"Checkout ",r.a.createElement("i",{className:"fas fa-credit-card"})))))):null:"/Category/Headphones"===document.location.history?"Login"!==document.getElementById("FooterAccountName").innerHTML?r.a.createElement("div",{className:"Item"},r.a.createElement(N.a,null,r.a.createElement(N.a.Header,{className:"CartBox"},r.a.createElement("h3",null,r.a.createElement("b",null,"Cart:"))),r.a.createElement(B.a,{variant:"flush"},this.renderCart(),r.a.createElement(B.a.Item,{className:"CartItem Checkout"},r.a.createElement(S.b,{to:"/e-commerce/Category/Headphones",className:"btn btn-outline-primary",onClick:function(){return e.Checkout()}},"Checkout ",r.a.createElement("i",{className:"fas fa-credit-card"})))))):null:"/Category/Phones"===document.location.history?"Login"!==document.getElementById("FooterAccountName").innerHTML?r.a.createElement("div",{className:"Item"},r.a.createElement(N.a,null,r.a.createElement(N.a.Header,{className:"CartBox"},r.a.createElement("h3",null,r.a.createElement("b",null,"Cart:"))),r.a.createElement(B.a,{variant:"flush"},this.renderCart(),r.a.createElement(B.a.Item,{className:"CartItem Checkout"},r.a.createElement(S.b,{to:"/e-commerceCategory/Phones",className:"btn btn-outline-primary",onClick:function(){return e.Checkout()}},"Checkout ",r.a.createElement("i",{className:"fas fa-credit-card"})))))):null:"/Category/Cameras"===document.location.history?"Login"!==document.getElementById("FooterAccountName").innerHTML?r.a.createElement("div",{className:"Item"},r.a.createElement(N.a,null,r.a.createElement(N.a.Header,{className:"CartBox"},r.a.createElement("h3",null,r.a.createElement("b",null,"Cart:"))),r.a.createElement(B.a,{variant:"flush"},this.renderCart(),r.a.createElement(B.a.Item,{className:"CartItem Checkout"},r.a.createElement(S.b,{to:"/e-commerce/Category/Cameras",className:"btn btn-outline-primary",onClick:function(){return e.Checkout()}},"Checkout ",r.a.createElement("i",{className:"fas fa-credit-card"})))))):null:"/Category/Watches"===document.location.history?"Login"!==document.getElementById("FooterAccountName").innerHTML?r.a.createElement("div",{className:"Item"},r.a.createElement(N.a,null,r.a.createElement(N.a.Header,{className:"CartBox"},r.a.createElement("h3",null,r.a.createElement("b",null,"Cart:"))),r.a.createElement(B.a,{variant:"flush"},this.renderCart(),r.a.createElement(B.a.Item,{className:"CartItem Checkout"},r.a.createElement(S.b,{to:"/e-commerce/Category/Watches",className:"btn btn-outline-primary",onClick:function(){return e.Checkout()}},"Checkout ",r.a.createElement("i",{className:"fas fa-credit-card"})))))):null:"/Category/TV"===document.location.history?"Login"!==document.getElementById("FooterAccountName").innerHTML?r.a.createElement("div",{className:"Item"},r.a.createElement(N.a,null,r.a.createElement(N.a.Header,{className:"CartBox"},r.a.createElement("h3",null,r.a.createElement("b",null,"Cart:"))),r.a.createElement(B.a,{variant:"flush"},this.renderCart(),r.a.createElement(B.a.Item,{className:"CartItem Checkout"},r.a.createElement(S.b,{to:"/e-commerce/Category/Kitchen_Appliances",className:"btn btn-outline-primary",onClick:function(){return e.Checkout()}},"Checkout ",r.a.createElement("i",{className:"fas fa-credit-card"})))))):null:r.a.createElement("div",{className:"Item"},r.a.createElement(N.a,null,r.a.createElement(N.a.Header,{className:"CartBox"},r.a.createElement("h3",null,r.a.createElement("b",null,"Cart:"))),r.a.createElement(B.a,{variant:"flush"},this.renderCart(),r.a.createElement(B.a.Item,{className:"CartItem Checkout"},r.a.createElement(S.b,{to:"/e-commerce/Store",className:"btn btn-outline-primary",onClick:function(){return e.Checkout()}},"Checkout ",r.a.createElement("i",{className:"fas fa-credit-card"})))))):(document.location.href="/e-commerce/",null)}}]),t}(n.Component),R=a(33),V=a.n(R),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={show:k.getState().Show},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"AddToCart",value:function(e){for(var t=0;t<k.getState().Products.length;t++)if(k.getState().Products[t].title==e)if(k.getState().Cart.includes(k.getState().Products[t]))alert("Already in your Cart!");else if("Login"!==document.getElementById("FooterAccountName").innerHTML)k.dispatch({type:"ADD_TO_CART",product:k.getState().Products[t]}),alert('Added "'+k.getState().Products[t].title+'" To the Cart!');else{if("Login"!==document.getElementById("FooterAccountName").innerHTML)return null;document.location.href="/e-commerce/"}}},{key:"handleClose",value:function(){k.dispatch({type:"MODAL",modal:!1})}},{key:"renderModal",value:function(){var e=this;return r.a.createElement(V.a,{className:"Modalio fadeIn",show:this.state.show,onHide:function(){return e.handleClose()}},r.a.createElement(V.a.Header,null,r.a.createElement(V.a.Title,null,k.getState().Title)),r.a.createElement(V.a.Body,null,r.a.createElement("p",null,k.getState().Description),r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-star"}),k.getState().Rating)),r.a.createElement(V.a.Footer,{className:"MdFooter"},r.a.createElement("div",{className:"ModalPrice"},"$",k.getState().Price),r.a.createElement(v.a,{variant:"outline-primary",className:"ModalBTN",id:"ModalCart",onClick:function(){return e.AddToCart(k.getState().Title)+window.history.back()}},"Add to Cart ",r.a.createElement("i",{className:"fas fa-cart-plus"})),r.a.createElement(v.a,{variant:"outline-secondary",className:"ModalBTN",id:"ModalClose",onClick:function(){return window.history.back()}},"X")))}},{key:"render",value:function(){return this.renderModal()}}]),t}(n.Component),K=a(91),U=a.n(K),$=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"renderLogin",value:function(){var e=this;return"Login"===document.getElementById("FooterAccountName").innerHTML?r.a.createElement(N.a,{className:"loginCard"},r.a.createElement(N.a.Header,{className:"navLogin"},r.a.createElement(h.a,{variant:"tabs",defaultActiveKey:"/Login",className:"navLogin"},r.a.createElement(h.a.Item,null,r.a.createElement(h.a.Link,{href:"#Login"},"Login")),r.a.createElement(h.a.Item,null,r.a.createElement(h.a.Link,{href:"#NewAccount"},"Create Account")))),r.a.createElement(N.a.Body,{className:"loginBody"},r.a.createElement(U.a,null,r.a.createElement(N.a.Title,null,"Username:"),r.a.createElement(N.a.Text,null,r.a.createElement("input",{className:"loginInput usernameInput",id:"usernameInput"})),r.a.createElement(N.a.Title,null,"Password:"),r.a.createElement(N.a.Text,null,r.a.createElement("input",{className:"loginInput passwordInput",id:"passwordInput",type:"password"})),r.a.createElement(S.b,{to:"/e-commerce/Store",className:"btn btn-outline-primary",onClick:function(){return e.setAccount()}},"Submit")))):null}},{key:"setAccount",value:function(){var e=document.getElementById("usernameInput").value;k.dispatch({type:"ACCOUNT_NAME",username:e}),document.getElementById("FooterAccountName").innerHTML="Logout from: "+k.getState().UserName,document.getElementById("FooterAccountName").setAttribute("href","/e-commerce/")}},{key:"render",value:function(){return this.renderLogin()}}]),t}(n.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.subscribe(function(){return e.forceUpdate()}),fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products").then(function(e){return e.json()}).then(function(e){k.dispatch({type:"SET_PRODUCTS",items:e})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Main"},r.a.createElement(S.a,null,r.a.createElement(E.a,{bg:"light",expand:"lg",sticky:"top"},r.a.createElement(E.a.Brand,{to:"/"},"E-Commerce Template"),r.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(S.b,{className:"nav-link",to:"/e-commerce/Store"},"Store"),r.a.createElement(f.a,{title:"Categories",id:"basic-nav-dropdown"},r.a.createElement(S.b,{className:"dropdown-item",to:"/e-commerce/Category/TV",key:"TV"},"TV"),r.a.createElement(S.b,{className:"dropdown-item",to:"/e-commerce/Category/Headphones",key:"Headphones"},"Headphones"),r.a.createElement(S.b,{className:"dropdown-item",to:"/e-commerce/Category/Phones"},"Phones"),r.a.createElement(S.b,{className:"dropdown-item",to:"/e-commerce/Category/Cameras"},"Cameras"),r.a.createElement(S.b,{className:"dropdown-item",to:"/e-commerce/Category/Watches"},"Watches"),r.a.createElement(S.b,{className:"dropdown-item",to:"/e-commerce/Category/Kitchen_Appliances"},"Kitchen Appliances"))),r.a.createElement(S.b,{className:"nav-link",to:"/e-commerce/Cart"},"Cart ",r.a.createElement("i",{className:"fas fa-shopping-cart"})))),r.a.createElement("div",{className:"Switcher"},r.a.createElement(w.d,null,r.a.createElement(w.b,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement($,null))}}),r.a.createElement(w.b,{exact:!0,path:"/#/e-commerce/",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement($,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement($,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Store",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(M,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/TV",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/Headphones",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/Phones",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/Cameras",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/Watches",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/Kitchen_Appliances",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/TV/Details",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null),r.a.createElement(W,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/Headphones/Details",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null),r.a.createElement(W,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/Phones/Details",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null),r.a.createElement(W,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/Cameras/Details",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null),r.a.createElement(W,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/Watches/Details",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null),r.a.createElement(W,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Category/Kitchen_Appliances/Details",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(H,null),r.a.createElement(W,null))}}),r.a.createElement(w.b,{exact:!0,path:"/e-commerce/Cart",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(F,null)," ")}}),r.a.createElement(w.b,{path:"/e-commerce/Store/Details",render:function(){return r.a.createElement("div",{className:"Items"},r.a.createElement(M,null),r.a.createElement(W,null))}}),r.a.createElement(w.b,{path:"/RedirectJS",component:_}),r.a.createElement(w.b,{render:function(){return r.a.createElement("div",null,r.a.createElement(_,null))}})))))}}]),t}(n.Component);l.a.render(r.a.createElement(G,null),document.getElementById("root"))},95:function(e,t,a){e.exports=a(165)}},[[95,1,2]]]);
//# sourceMappingURL=main.0c117041.chunk.js.map