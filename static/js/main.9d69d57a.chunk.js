(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(281)},132:function(e,t,a){},133:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(16),c=a.n(o),i=a(30),s=a(27),l=a(9),h=a(38),m=a(95),u=a(96),p=a.n(u),g=function(){function e(){Object(s.a)(this,e),this._photos=[],this._searchTerm="",this.fetchPhotos()}return Object(h.a)(e,[{key:"fetchPhotos",value:function(){var e=this;p.a.get("https://picsum.photos/list").then(function(t){return e.photos=Object(m.shuffle)(t.data)})}},{key:"searchTerm",set:function(e){this._searchTerm=e.toLowerCase()},get:function(){return this._searchTerm}},{key:"photos",set:function(e){this._photos=e},get:function(){var e=this;return this.searchTerm?this._photos.filter(function(t){return t.author.toLowerCase().includes(e.searchTerm)}):this._photos}}]),e}();Object(l.g)(g,{_photos:l.l,_searchTerm:l.l,photos:l.d,searchTerm:l.d});var f=g,d=function e(){Object(s.a)(this,e),this.gallery=new f};Object(l.g)(d,{gallery:l.l});var y=new d,E=(a(132),a(106)),v=a(97),b=a(107),j=a(18),w=a.n(j),O=a(102),k=a.n(O),T=a(99),_=a.n(T),G=a(100),x=a.n(G),C=a(101),S=a.n(C),B=a(39),L=a.n(B),W=a(105),J=a.n(W),M=a(104),N=a.n(M),P=a(103),A=a.n(P),I=(a(133),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(E.a)(this,Object(v.a)(t).call(this,e))).loadMore=function(){a.setState(function(e){return{page:e.page+1}})},a.toggleGray=function(){a.setState(function(e){return{isGray:!e.isGray}})},a.search=function(e){var t=e.target.value;a.props.store.gallery.searchTerm=t,t||a.setState(function(e){return{page:1}})},a.state={page:1,isGray:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.store.gallery.photos,a=30*this.state.page,n=t.slice(0,a).map(function(t){return r.a.createElement(w.a,{key:t.id,item:!0},r.a.createElement(_.a,{style:{width:"300px"}},r.a.createElement(x.a,{style:{height:"300px"},image:"https://picsum.photos/".concat(e.state.isGray?"g/":"","300/300?image=").concat(t.id),title:"Contemplative Reptile"}),r.a.createElement(S.a,null,r.a.createElement(L.a,{component:"p"},t.author))))});return r.a.createElement("div",{className:"App"},r.a.createElement(w.a,{container:!0,justify:"center",spacing:16},r.a.createElement(w.a,{item:!0,xs:12,sm:10,md:8,lg:5,xl:3},r.a.createElement(k.a,{style:{width:"100%"},id:"outlined-search",label:"Search photos",type:"search",className:"",margin:"normal",variant:"outlined",onChange:function(t){return e.search(t)}}))),r.a.createElement(w.a,{container:!0,justify:"center",spacing:16},r.a.createElement(w.a,{item:!0,xs:12,sm:10,md:8,lg:5,xl:3},r.a.createElement(A.a,{control:r.a.createElement(N.a,{checked:this.state.isGray,onChange:this.toggleGray}),label:"Gray mode"}))),r.a.createElement(w.a,{container:!0,justify:"center",spacing:16},r.a.createElement(w.a,{item:!0},r.a.createElement(L.a,{variant:"h6",gutterBottom:!0},"displaying ",r.a.createElement("span",{style:{fontWeight:600}},n.length)," images"))),r.a.createElement(w.a,{container:!0,justify:"center",spacing:16},n),r.a.createElement(w.a,{container:!0,justify:"center",spacing:16},r.a.createElement(w.a,{item:!0},r.a.createElement(J.a,{onClick:this.loadMore,variant:"contained",color:"primary"},"Load more"))))}}]),t}(n.Component)),R=Object(i.b)("store")(Object(i.c)(I));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,{store:y},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,1,2]]]);
//# sourceMappingURL=main.9d69d57a.chunk.js.map