(this.webpackJsonppokemon_react=this.webpackJsonppokemon_react||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),i=n(18),l=n(19),m=n(23),u=n(22),s=(n(56),n(54)),p=n(112),h=p.a.Meta,f=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={name:"",height:0,weight:0,pokemon_front_img_url:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;fetch("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(e){return e.json()})).then((function(t){e.setState(Object(s.a)(Object(s.a)({},e.state),{},{name:t.name,weight:t.weight,height:t.height,pokemon_front_img_url:t.sprites.front_default}))}))}},{key:"render",value:function(){return r.a.createElement(p.a,{style:{width:300},cover:r.a.createElement("img",{alt:"example",src:this.state.pokemon_front_img_url})},r.a.createElement(h,{title:"pokemon name",description:this.state.name}),r.a.createElement(h,{title:"pokemon weight",description:"".concat(this.state.weight/10,"kg")}),r.a.createElement(h,{title:"pokemon height",description:"".concat(10*this.state.height,"cm")}))}}]),n}(a.Component),k=(n(106),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("ul",{className:"pokemons-wrapper"},r.a.createElement("li",{className:"pokemon-wrapper"},r.a.createElement(f,{id:"1"})),r.a.createElement("li",{className:"pokemon-wrapper"},r.a.createElement(f,{id:"2"})),r.a.createElement("li",{className:"pokemon-wrapper"},r.a.createElement(f,{id:"3"})),r.a.createElement("li",{className:"pokemon-wrapper"},r.a.createElement(f,{id:"4"})),r.a.createElement("li",{className:"pokemon-wrapper"},r.a.createElement(f,{id:"5"})))}}]),n}(a.Component)),E=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("main",null,r.a.createElement("section",{className:"center"},r.a.createElement(k,null))))}}]),n}(a.Component),b=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h1",{className:"text textColor"},"Pokemon Book"))}}]),n}(a.Component),j=(n(107),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(E,null))}}]),n}(a.Component));n(108);o.a.render(r.a.createElement(j,null),document.getElementById("root"))},56:function(e,t,n){},74:function(e,t,n){e.exports=n(109)}},[[74,1,2]]]);
//# sourceMappingURL=main.53b0182e.chunk.js.map