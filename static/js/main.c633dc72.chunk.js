(this.webpackJsonpvishwakarma=this.webpackJsonpvishwakarma||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),c=a.n(i),l=(a(89),a(9)),s=a(10),o=a(12),m=a(11),u=(a(90),a(73)),d=a(135),p=a(5),g=a(26),h=a(57),b=a(50),f=a.n(b),E=a(129),v=a(134),y=a(47),x=a.n(y),j=a(133),k=a(132),O=a(138),w=a(136),N=a(139),C=(a(98),{charcoalGrey:"#3a3f42",coolGrey:"#b6b9bb",turquoise:"#00c4b5",lightTurquoise:"#ebfbf9",battleshipGrey:"#707274",rosyPink:"#ef5d60",paleGrey:"#eef0f2",lightGrey:"#e7eceb",border:"#f1f0f0"}),M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).toggleMenuDrawer=function(t){return function(){e.setState({menuOpen:t})}},e.state={menuOpen:!1},e}return Object(s.a)(a,[{key:"renderLogoAndTitle",value:function(){var e=this.props,t=(e.classes,e.metadata.name);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{item:!0},r.a.createElement("a",{href:"/",className:"black_title_big"},t)))}},{key:"renderMenuList",value:function(){var e=this.props,t=e.classes,a=e.metadata.mainMenuItems.map((function(e,t){return r.a.createElement(k.a,{key:t,button:!0,component:"a",href:e.url},r.a.createElement(O.a,{primary:e.name,className:"black_title"}))}));return r.a.createElement("div",{className:t.menuContainer},r.a.createElement(j.a,null,a))}},{key:"renderMenu",value:function(){var e=this.props;e.classes;return e.metadata.mainMenuItems.map((function(e,t){return r.a.createElement(E.a,{item:!0,key:t,style:{margin:"0px 16px"}},r.a.createElement("a",{href:e.url,className:"black_title_link"},e.name))}))}},{key:"renderMenuAndLogin",value:function(){this.props.classes;if(Object(N.b)("md",this.props.width))return this.renderMenu();var e=this.renderMenuList();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"pointer",onClick:this.toggleMenuDrawer(!0)},r.a.createElement(x.a,null)),r.a.createElement(w.a,{anchor:"right",open:this.state.menuOpen,onClose:this.toggleMenuDrawer(!1)},e))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.headerRoot},r.a.createElement("div",{className:e.headerContent},r.a.createElement(E.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(E.a,{container:!0,className:e.subGrid},this.renderLogoAndTitle()),r.a.createElement(E.a,{container:!0,className:e.subGrid,alignItems:"center"},this.renderMenuAndLogin()))))}}]),a}(r.a.Component),_=(Object(N.a)()(Object(p.a)({headerRoot:{background:"#fff"},headerContent:{height:80,padding:"24px 48px"},subGrid:{width:"auto"},menuContainer:{width:200},menuLinkExpanded:{marginLeft:16,marginRight:16}})(M)),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).toggleMenuDrawer=function(t){return function(){e.setState({menuOpen:t})}},e.state={menuOpen:!1},e}return Object(s.a)(a,[{key:"renderMenuList",value:function(){var e=this.props,t=e.classes,a=e.metadata.mainMenuItems.map((function(e,t){return r.a.createElement(k.a,{key:t,button:!0,component:"AnchorLink",href:e.url},r.a.createElement(O.a,{primary:e.name,className:"black_title"}))}));return r.a.createElement("div",{className:t.menuContainer},r.a.createElement(j.a,null,a))}},{key:"renderMenu",value:function(){var e=this.props,t=e.classes,a=e.metadata,n=(a.name,a.mainMenuItems.map((function(e,t){return r.a.createElement(E.a,{item:!0,key:t,className:"white_title_link",style:{margin:"0px 16px"}},r.a.createElement("a",{href:e.url},e.name))})));return r.a.createElement(E.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(E.a,{container:!0,className:t.subGrid},n))}},{key:"renderMenuGrid",value:function(){if(Object(N.b)("md",this.props.width))return this.renderMenu();var e=this.renderMenuList();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"pointer",onClick:this.toggleMenuDrawer(!0)},r.a.createElement(x.a,{className:"white"})),r.a.createElement(w.a,{anchor:"right",open:this.state.menuOpen,onClose:this.toggleMenuDrawer(!1)},e))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.metadata,n=a.name,i=a.background;return r.a.createElement("div",null,r.a.createElement("div",{className:t.headerBody},r.a.createElement(E.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(E.a,{container:!0,className:t.subGrid},r.a.createElement("a",{href:"/index.html",className:"white_title_big"},n)),r.a.createElement(E.a,{container:!0,className:t.subGrid},this.renderMenuGrid()))),r.a.createElement("div",{className:t.header},r.a.createElement("img",{src:i,alt:n,className:t.headerBackground})))}}]),a}(r.a.Component)),G=Object(N.a)()(Object(p.a)({header:{position:"relative"},headerBackground:{width:"100%"},headerBody:{padding:"24px 48px",minHeight:"600px",position:"absolute",left:"0",right:"0",zIndex:"99"},subGrid:{width:"auto"},menuItem:{margin:"0px 16px",color:"#fff"}})(_)),I=a(137),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).togglePopup=function(t){return function(){e.setState({previewOpen:t}),console.log(e.state)}},e.state={popupOpen:!1},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.image;return r.a.createElement("div",null,r.a.createElement("div",{className:t.imageBottom},r.a.createElement("img",{src:a,alt:"image new",className:"full-width pointer",onClick:this.togglePopup(!0)})),r.a.createElement(I.a,{open:this.state.previewOpen,className:t.modal,onClose:this.togglePopup(!1),closeAfterTransition:!0},r.a.createElement("div",{className:t.modalDiv},r.a.createElement("img",{src:a,alt:"image new",className:"full-width"}))))}}]),a}(r.a.Component),L=Object(N.a)()(Object(p.a)({imageBottom:{marginBottom:"24px"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},modalDiv:{maxWidth:"70%",maxHeight:"70%"}})(A)),T=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={},e}return Object(s.a)(a,[{key:"imageGrid",value:function(){var e=this.props.metadata.images.map((function(e){return r.a.createElement(L,{image:e})}));return r.a.createElement("div",{className:"image_grid"},e)}},{key:"render",value:function(){var e=this.props,t=(e.classes,e.metadata.imagePageName);return r.a.createElement("div",{className:"background-white"},r.a.createElement("div",{style:{padding:"24px 0px",margin:"auto",width:"200px"}},r.a.createElement("span",{className:"black_title_big"},t)),this.imageGrid())}}]),a}(r.a.Component),D=Object(N.a)()(Object(p.a)({imageGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gridGap:"24px",padding:"24px 48px"}})(T)),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.call(this)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.classes,e.metadata),a=t.email,n=t.contact_no,i=t.address;return r.a.createElement("div",{className:"background-white black_body",style:{borderTop:"1px solid black",padding:"24px 48px"}},r.a.createElement("a",{href:"mailto:"+a},a),r.a.createElement("div",null,n),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}}))}}]),a}(r.a.Component),H=(Object(N.a)()(Object(p.a)({})(B)),a(51)),S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target.getAttribute("name");n.setState({message:Object(H.a)(Object(H.a)({},n.state.message),{},Object(g.a)({},t,e.target.value))})},n.state={buttonDisabled:!0,message:{fromEmail:"",subject:"",body:""},submitting:!1,error:null},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background-white",style:{paddingBottom:"24px"}},r.a.createElement("div",{style:{padding:"24px 0px",margin:"auto",width:"200px"}},r.a.createElement("span",{className:"black_title_big"},"Contact")),r.a.createElement("div",null,r.a.createElement("div",null,this.state.error),r.a.createElement("form",{style:{display:"flex",margin:"auto",flexDirection:"column",maxWidth:"500px",padding:"0px 10px"},method:"post"},r.a.createElement("label",{htmlFor:"fromEmail"},"Your email address:"),r.a.createElement("input",{type:"email",name:"fromEmail",id:"fromEmail",value:this.state.message.fromEmail,onChange:this.onChange}),r.a.createElement("label",{htmlFor:"subject"},"Subject:"),r.a.createElement("input",{type:"text",name:"subject",id:"subject",value:this.state.message.subject,onChange:this.onChange}),r.a.createElement("label",{htmlFor:"body"},"Message:"),r.a.createElement("textarea",{style:{height:"150px"},name:"body",id:"body",value:this.state.message.body,onChange:this.onChange}),r.a.createElement("button",{style:{marginTop:"7px"},type:"submit",disabled:this.state.submitting,onClick:this.onClick},"Send message")))))}}]),a}(r.a.Component),F=a(60),R=a.n(F),P=a(61),W=a.n(P),q=a(62),J=a.n(q),z=a(63),U=a.n(z),V=a(64),Y=a.n(V),$=a(65),K=a.n($),Q=a(66),X=a.n(Q),Z=a(67),ee=a.n(Z),te=a(68),ae=a.n(te),ne=a(69),re=a.n(ne),ie=a(70),ce=a.n(ie),le=a(71),se=a.n(le),oe=a(72),me=a.n(oe),ue={name:"RACHANA",favicon:"",background:R.a,pageTitle:"RACHANA",mainMenuItems:[{name:"Portfolio",url:"#portfolio"},{name:"Contact",url:"#contact"}],imagePageName:"Portfolio",images:[W.a,J.a,U.a,Y.a,K.a,X.a,ee.a,ae.a,re.a,ce.a,se.a,me.a],email:"a@b.com",contact_no:"9898989898",address:"some street, some area,<br> some city<br>",socialMediaLinks:{}},de=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).renderDesign=function(){var e=ue.images;return r.a.createElement("div",{style:{margin:"48px 0px"}},r.a.createElement("div",{className:"black_big_text"},'" CREATE WITH THE HEART, BUILD WITH THE MIND. "'),r.a.createElement("div",{className:"hide_below_720"},r.a.createElement("div",{style:{display:"flex",margin:"24px auto",width:"44%"}},r.a.createElement("img",{src:e[0],style:{width:"320px"}}),r.a.createElement("div",{className:"black_title",style:{backgroundColor:"antiquewhite",padding:"16px",margin:"70px 16px"}},"Immersive storytelling by design")),r.a.createElement("div",{style:{display:"flex",margin:"36px auto",width:"44%"}},r.a.createElement("div",{className:"black_title",style:{backgroundColor:"darkgray",padding:"16px",margin:"70px 0px 70px 48px"}},"We're designing for life"),r.a.createElement("img",{src:e[1],style:{width:"320px"}}))))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement("title",null,ue.name),r.a.createElement("link",{rel:"shortcut icon",href:ue.favicon})),r.a.createElement(G,{metadata:ue}),this.renderDesign(),r.a.createElement(f.a,{id:"portfolio"},r.a.createElement("div",null,r.a.createElement(D,{metadata:ue}))),r.a.createElement(f.a,{id:"contact"},r.a.createElement("div",null,r.a.createElement(S,null))))}}]),a}(r.a.Component),pe=Object(p.a)((function(e){return{footerContainer:{maxWidth:1156,margin:"auto",padding:"0 32px",color:C.battleshipGrey},footerDivider:{backgroundColor:C.coolGrey,height:1},footerLinkSaperator:{display:"inline-block",marginLeft:8,marginRight:8},footerToggleAlign:Object(g.a)({},e.breakpoints.down("sm"),{alignItems:"flex-end",textAlign:"right"})}}))(de),ge=Object(u.a)({typography:{useNextVariants:!0}}),he=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(d.a,{theme:ge},r.a.createElement("div",{className:e.root},r.a.createElement(pe,null)))}}]),a}(n.Component),be=Object(p.a)({root:{height:"100%",width:"100%",margin:"auto",fontFamily:["Nunito Sans","Roboto","Helvetica","Arial","sans-serif"]}})(he);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a.p+"static/media/perks.7c6a930d.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/1.1728c2e4.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/2.51af2507.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/3.827bfccd.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/4.7981cd33.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/5.26acc1a3.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/6.c467f6d8.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/7.e0e69c84.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/8.745eb603.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/9.610ee470.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/10.f41f9f43.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/11.a7db2278.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/12.b3487b33.jpg"},84:function(e,t,a){e.exports=a(105)},89:function(e,t,a){},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.c633dc72.chunk.js.map