(this.webpackJsonpdog_api=this.webpackJsonpdog_api||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),s=n(7),a=n.n(s),c=n(2),i=n(3),d=n(5),u=n(4),l=(n(13),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"dog__item",onClick:function(){return e.props.openModal(e.props.item)},children:Object(r.jsx)("p",{children:this.props.item})})}}]),n}(o.Component)),h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).componentDidMount=function(){fetch("https://dog.ceo/api/breed/".concat(r.props.breed,"/images/random")).then((function(e){if(e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){return r.setState((function(t){return{image:e.message}}))}))},r.getRandomImage=function(){var e=r.state.breed;console.log("fetching"),fetch("https://dog.ceo/api/breed/".concat(e,"/images/random")).then((function(e){if(e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){return r.setState({image:e.message})}))},r.state={breed:r.props.breed,image:""},r}return Object(i.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"modal-wrapper",children:[console.log("BREED",this.state.breed),Object(r.jsxs)("div",{className:"modal",children:[Object(r.jsx)("img",{src:this.state.image,alt:this.props.breed}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{onClick:this.getRandomImage,children:"Random Image"}),Object(r.jsx)("button",{className:"red",onClick:this.props.close,children:"Close Modal"})]})]})]})}}]),n}(o.Component),b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={dogBreeds:"",breed:"",modal:!1},e.handleModal=function(t){e.setState({modal:!0,breed:t})},e.closeModal=function(){e.setState({modal:!1,breed:""})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://dog.ceo/api/breeds/list/all").then((function(e){if(e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(t){return e.setState({dogBreeds:t.message})}))}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"dog__wrapper",children:[this.state.modal&&Object(r.jsx)(h,{close:this.closeModal,breed:this.state.breed}),Object.keys(this.state.dogBreeds).map((function(t){return Object(r.jsx)(l,{item:t,openModal:e.handleModal},t)}))]})}}]),n}(o.Component);a.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.54dcf1c9.chunk.js.map