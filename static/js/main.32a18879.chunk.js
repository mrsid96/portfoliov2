(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{120:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),s=(a(120),a(47)),o=a(15),l=a(32),d=a.n(l),u=a(41),j=a(49),b=a(183),p=a(134),h=a(182),m=a(73),g=a(174),x=a(194),O=a(186),f=a(185),v=a(92),y=a.n(v),w=a(91),k=a.n(w),S=a(57);a(122),a(133);S.a.initializeApp({apiKey:"AIzaSyAfftIb1daTuGvputUlU1LdHSFQSsrY_Ns",authDomain:"portfolio-1b3d4.firebaseapp.com",databaseURL:"https://portfolio-1b3d4.firebaseio.com",projectId:"portfolio-1b3d4",storageBucket:"portfolio-1b3d4.appspot.com",messagingSenderId:"321246014449",appId:"1:321246014449:web:b0bae2ea77a6522cc93250",measurementId:"G-60ET1GEPDS"});var N=S.a.auth(),C=new S.a.auth.GoogleAuthProvider;C.setCustomParameters({prompt:"select_account"});var D=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.a.firestore(),e.next=3,t.collection("about").doc("Yv8rWhvN4oMwkpj3Q9RQ").get();case 3:return a=e.sent,e.abrupt("return",a.data());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:a=e.sent,t({type:"setAboutDetails",payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=a(184),F=a(178),T=a(179),A=a(180),H=a(90),L=a.n(H),G=a(181),U=a(21),E=a(3),R=Object(g.a)((function(e){return{title:{flexGrow:1},pane:{marginTop:"inherit"}}})),B=function(){var e=R(),t=Object(U.c)((function(e){return e.about}));return Object(E.jsxs)("div",{className:e.pane,children:[Object(E.jsxs)(m.a,{variant:"h4",className:e.title,children:["Hey there ",Object(E.jsx)("span",{className:"wave",children:"\ud83d\udc4b"}),Object(E.jsx)("br",{}),"This is Sidharth Patnaik."]}),Object(E.jsx)(m.a,{variant:"body1",className:e.title,children:Object(E.jsx)("p",{dangerouslySetInnerHTML:{__html:t.intro}})}),Object(E.jsx)(m.a,{style:{marginTop:"inherit"},variant:"h5",className:e.title,children:"His life in a nutshell \ud83e\uddd1\u200d\ud83d\udcbc"}),Object(E.jsx)(F.a,{children:t.life.map((function(t,a){return Object(E.jsxs)(T.a,{children:[Object(E.jsx)(A.a,{children:Object(E.jsx)(L.a,{})}),Object(E.jsx)(G.a,{children:Object(E.jsx)(m.a,{variant:"body1",className:e.title,children:t})})]},"life-".concat(a))}))})]})};function M(e){var t="dark"===e.theme?"#FFF":"#000";return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(m.a,{variant:"body2",color:"textSecondary",children:["\xa9 Sidharth Patnaik - ".concat((new Date).getFullYear()," | "),Object(E.jsx)(s.b,{style:{color:t},to:"/dashboard",color:"white",children:"Dashboard"})]}),Object(E.jsx)(m.a,{variant:"body2",color:"textSecondary",children:"Made with \u2764\ufe0f using React and Firebase"})]})}var W=Object(g.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://firebasestorage.googleapis.com/v0/b/portfolio-1b3d4.appspot.com/o/homeSide.jpg?alt=media&token=f40e3ca2-1404-4e4e-97e8-cc2f666e955b)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column"},tabPane:{display:"flex",flexDirection:"column",alignItems:"flex-end"},toggleTheme:{position:"absolute"},footer:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"flex-end",color:"#FFF"}}})),q=function(){var e=W(),t=Object(n.useState)(0),a=Object(j.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(!0),s=Object(j.a)(c,2),o=s[0],l=s[1],m=Object(U.b)(),g=Object(U.c)((function(e){return e.theme}));Object(U.c)((function(e){return e.about}));return Object(n.useEffect)(Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(m);case 2:l(!1);case 3:case"end":return e.stop()}}),e)})))),Object(E.jsxs)(h.a,{container:!0,component:"main",className:e.root,children:[Object(E.jsx)(b.a,{}),Object(E.jsx)(h.a,{item:!0,xs:!1,sm:4,md:4,className:e.image}),Object(E.jsxs)(h.a,{item:!0,xs:12,sm:8,md:8,component:p.a,elevation:6,square:!0,children:[o&&Object(E.jsx)(P.a,{}),Object(E.jsx)("div",{className:e.toggleTheme,children:Object(E.jsx)(f.a,{onClick:function(){m({type:"toggleDarkMode"})},"aria-label":"delete",children:"dark"===g?Object(E.jsx)(k.a,{}):Object(E.jsx)(y.a,{})})}),Object(E.jsxs)("div",{className:e.paper,children:[Object(E.jsx)("div",{className:e.tabPane,children:Object(E.jsxs)(x.a,{value:r,indicatorColor:"dark"===g?"secondary":"primary",textColor:"inherit","aria-label":"disabled tabs example",onChange:function(e,t){i(t)},children:[Object(E.jsx)(O.a,{label:"Home"}),Object(E.jsx)(O.a,{label:"Work"}),Object(E.jsx)(O.a,{label:"Contact"})]})}),!o&&Object(E.jsx)(B,{})]}),Object(E.jsx)("div",{className:e.footer,children:Object(E.jsx)(M,{theme:g})})]})]})},_=a(198),z=a(103),Y=a.n(z),Q=a(54),J=a(187),K=a(188),V=a(189),X=a(99),Z=a.n(X),$=a(22),ee=a(196),te=a(190),ae=a(100),ne=a.n(ae),re=a(191),ie=a(101),ce=a.n(ie),se=a(102),oe=a.n(se),le=a(93),de=a.n(le),ue=a(94),je=a.n(ue),be=a(96),pe=a.n(be),he=a(95),me=a.n(he),ge=a(97),xe=a.n(ge),Oe=a(98),fe=a.n(Oe),ve=240,ye=Object(g.a)((function(e){return{root:{flexGrow:1},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(ve,"px)"),marginLeft:ve,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:e.spacing(2)},title:{flexGrow:1},hide:{display:"none"},drawer:{width:ve,flexShrink:0},drawerPaper:{width:ve},drawerHeader:Object(Q.a)(Object(Q.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),we=function(){var e=Object(o.g)(),t=ye(),a=(Object($.a)(),r.a.useState(!1)),n=Object(j.a)(a,2),i=n[0],c=n[1],s=Object(U.b)(),l=function(e){switch(e){case"About":return Object(E.jsx)(de.a,{});case"Skills":return Object(E.jsx)(je.a,{});case"Projects":return Object(E.jsx)(me.a,{});case"Experience":return Object(E.jsx)(pe.a,{});case"Contact":return Object(E.jsx)(xe.a,{})}};return Object(E.jsxs)("div",{className:t.root,children:[Object(E.jsx)(J.a,{position:"static",children:Object(E.jsxs)(K.a,{children:[Object(E.jsx)(m.a,{variant:"h6",className:t.title,children:"Dashboard"}),Object(E.jsx)(V.a,{startIcon:Object(E.jsx)(fe.a,{}),onClick:function(){return e.push("/")},color:"inherit",children:"Home"}),Object(E.jsx)(f.a,{edge:"end",onClick:function(){c(!0)},className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(E.jsx)(Z.a,{})})]})}),Object(E.jsxs)(ee.a,{className:t.drawer,variant:"persistent",anchor:"right",open:i,classes:{paper:t.drawerPaper},children:[Object(E.jsx)("div",{className:t.drawerHeader,children:Object(E.jsx)(f.a,{onClick:function(){c(!1)},children:Object(E.jsx)(ne.a,{})})}),Object(E.jsx)(te.a,{}),Object(E.jsx)(F.a,{children:["About","Skills","Projects","Experience","Contact"].map((function(e,t){return Object(E.jsxs)(T.a,{button:!0,children:[Object(E.jsx)(re.a,{children:l(e)}),Object(E.jsx)(G.a,{primary:e})]},e)}))}),Object(E.jsx)(te.a,{}),Object(E.jsx)(F.a,{children:["All messages"].map((function(e,t){return Object(E.jsxs)(T.a,{button:!0,children:[Object(E.jsx)(re.a,{children:Object(E.jsx)(ce.a,{})}),Object(E.jsx)(G.a,{primary:e})]},e)}))}),Object(E.jsx)(te.a,{}),Object(E.jsx)(F.a,{children:["Logout"].map((function(e,t){return Object(E.jsxs)(T.a,{button:!0,children:[Object(E.jsx)(re.a,{children:Object(E.jsx)(oe.a,{})}),Object(E.jsx)(G.a,{onClick:function(){return s({type:"removeUserDetails"})},primary:e})]},e)}))})]})]})},ke=a(70),Se=a(193),Ne=Object(g.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Ce=function(e){var t=Object(U.b)(),a=Object(n.useState)(),r=Object(j.a)(a,2),i=r[0],c=r[1],s=function(){var e=Object(u.a)(d.a.mark((function e(a){var n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Handling submit"),a.preventDefault(),n=i.email,r=i.password,e.prev=3,e.next=6,N.signInWithEmailAndPassword(n,r);case 6:c=e.sent,console.log(c.user.uid),t({type:"addUserDetails",payload:{email:c.user.email,uid:c.user.uid,displayName:c.user.displayName}}),t({type:"inc"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),o=function(e){var t=e.target,a=t.name,n=t.value;c(Object(Q.a)(Object(Q.a)({},i),{},Object(ke.a)({},a,n)))},l=Ne();return Object(E.jsxs)("form",{className:l.form,onSubmit:s,children:[Object(E.jsx)(Se.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:o}),Object(E.jsx)(Se.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:o}),Object(E.jsx)(V.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:l.submit,children:"Sign In"})]})},De=Object(g.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://firebasestorage.googleapis.com/v0/b/portfolio-1b3d4.appspot.com/o/login_sidebar.jpg?alt=media&token=dc0c2fc9-07a3-47b8-a4b1-f4e7910b5ed5)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center",transition:e.transitions.create("all",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},panel:{transition:e.transitions.create("all",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},paper:{margin:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{color:e.palette.error[50]},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Ie(e){e.theme;return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:"\xa9 Sidharth Patnaik - ".concat((new Date).getFullYear())})})}var Pe=function(){var e=De(),t=Object(U.c)((function(e){return e.user})),a=Object(U.c)((function(e){return e.count})),n=Object(U.c)((function(e){return e.theme}));return console.log("THis is count",a),console.log("This is user",t),console.log("THis is userId",t.uid),Object(E.jsxs)(h.a,{container:!0,component:"main",className:e.root,children:[Object(E.jsx)(b.a,{}),Object(E.jsx)(h.a,{item:!0,xs:!1,sm:!t.uid&&4,md:t.uid?4:8,className:e.image}),Object(E.jsxs)(h.a,{item:!0,xs:12,sm:t.uid?12:8,md:t.uid?8:4,component:p.a,elevation:6,square:!0,className:e.panel,children:[t.uid&&Object(E.jsx)(we,{}),!t.uid&&Object(E.jsxs)("div",{className:e.paper,children:[Object(E.jsx)(_.a,{className:e.avatar,children:Object(E.jsx)(Y.a,{})}),Object(E.jsx)(m.a,{component:"h1",variant:"h5",children:"Authentication Required"}),Object(E.jsx)(Ce,{setUser:!0})]}),Object(E.jsx)(Ie,{theme:n})]})]})},Fe=function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{children:"no page exists"}),Object(E.jsx)(s.b,{to:"/",children:"Go Home"})]})},Te=a(104),Ae=a(192);var He=function(){var e=Object(U.c)((function(e){return e.theme})),t=Object(Te.a)({palette:{type:e}});return Object(E.jsx)(Ae.a,{theme:t,children:Object(E.jsx)(s.a,{children:Object(E.jsxs)(o.d,{children:[Object(E.jsx)(o.b,{exact:!0,path:"/",component:q}),Object(E.jsx)(o.b,{exact:!0,path:"/dashboard",component:Pe}),Object(E.jsx)(o.b,{exact:!0,path:"/uh-oh",component:Fe}),Object(E.jsx)(o.a,{to:"/uh-oh"})]})})})},Le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,199)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))},Ge=a(72),Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(console.log("UserReducer",e,t),t.type){case"addUserDetails":return t.payload;case"removeUserDetails":return{};default:return e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(console.log("countReducer",e,t),t.type){case"inc":return e+1;default:return e}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dark",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"toggleDarkMode":return"dark"===e?"light":"dark";default:return e}},Be={intro:"",life:[]},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setAboutDetails":return t.payload;default:return e}},We=Object(Ge.a)({user:Ue,count:Ee,theme:Re,about:Me}),qe=Object(Ge.b)(We);c.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(U.a,{store:qe,children:Object(E.jsx)(He,{})})}),document.getElementById("root")),Le()}},[[131,1,2]]]);
//# sourceMappingURL=main.32a18879.chunk.js.map