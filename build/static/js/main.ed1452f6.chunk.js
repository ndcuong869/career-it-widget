(this["webpackJsonpit-career-bot-frontend"]=this["webpackJsonpit-career-bot-frontend"]||[]).push([[0],{219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},541:function(e,t,n){},542:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(9),i=n.n(c),r=(n(219),n(220),n(16)),o=n(567),l=n(570),d=n(571),j=n(572),h=n(588),b=n(587),u=n(573),x=n(574),O=n(575),p=n(35),m=(n(221),n(108)),g=n.n(m),f=n(82),v=n.n(f),y=n(10),k=n(37),w="http://localhost:5000/",C=n(48),S=n.n(C),_=n(566),T=n.p+"static/media/login.ff90b07d.png",N=n(2);function F(){var e=Object(y.f)(),t=Object(a.useState)(""),n=Object(r.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),m=Object(r.a)(i,2),f=m[0],C=m[1],F=Object(_.a)(["user"]),W=Object(r.a)(F,2),R=(W[0],W[1]);return Object(N.jsx)("div",{className:"container-form",children:Object(N.jsx)(o.a,{style:{width:"800px",height:"370px",padding:"20px"},className:"form-login",variant:"outlined",children:Object(N.jsxs)("div",{className:"container-elements",style:{display:"flex"},children:[Object(N.jsx)("div",{className:"container-images",children:Object(N.jsx)("img",{width:400,height:400,style:{objectFit:"cover",marginRight:"20px"},src:T})}),Object(N.jsxs)("div",{children:[Object(N.jsx)(l.a,{title:"IT Career Bot",subheader:"Powered by FIT-HCMUS"}),Object(N.jsx)(d.a,{children:Object(N.jsxs)("form",{children:[Object(N.jsxs)(j.a,{fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(h.a,{htmlFor:"outlined-adornment-password",children:"Email"}),Object(N.jsx)(b.a,{id:"outlined-adornment-amount",labelWidth:60,onChange:function(e){return c(e.target.value)},startAdornment:Object(N.jsx)(u.a,{position:"start",children:Object(N.jsx)(g.a,{})})})]}),Object(N.jsx)("div",{style:{marginTop:"20px"}}),Object(N.jsxs)(j.a,{fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(h.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(N.jsx)(b.a,{id:"outlined-adornment-amount",labelWidth:100,type:"password",onChange:function(e){return C(e.target.value)},startAdornment:Object(N.jsx)(u.a,{position:"start",children:Object(N.jsx)(v.a,{})})})]})]})}),Object(N.jsxs)(x.a,{children:[Object(N.jsx)(O.a,{variant:"contained",style:{backgroundColor:"#0062e6",color:"#ffffff",width:"365px",height:"50px",marginLeft:"8px"},onClick:function(){var t={username:s,password:f};S.a.post(w+"/api/login",t).then((function(t){R("user",t.data.id,{path:"/"}),new BroadcastChannel("app-data").postMessage({is_login:!0,user_id:t.data.id,user_name:t.data.name}),e.push("/login_success")}))},children:"Login"}),Object(N.jsx)("div",{})]}),Object(N.jsxs)("div",{style:{margin:"10px"},children:[Object(N.jsx)(p.a,{variant:"inherit",children:"Don't have account?"}),Object(N.jsx)(k.b,{style:{marginLeft:"8px",marginRight:"15px"},variant:"inherit",href:"#",onClick:function(t){t.preventDefault(),e.push("/register")},children:"Sign up"})]}),Object(N.jsx)(p.a,{variant:"caption",style:{marginTop:"20px",marginBottom:"20px"},children:"Copyright \xa9 2021 IT Career Bot"})]})]})})})}var W=n(586),R=n(205),A=n.n(R),B=n(206),I=n.n(B),E=n(83),M=n(576),D=n(577),L=n(578),P=n(579),U=n(585),Y=n(580),J=n(581),K=n(582),H=n(583),q=function(e){var t=e.isChecked,n=e.content,s=e.setSkill,c=Object(a.useState)(t),i=Object(r.a)(c,2),o=i[0],l=i[1];return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(W.a,{color:"primary",checked:o,onChange:function(e){l(e.target.checked),e.target.checked?s(n,!0):s(n,!1)}})})},G=function(e,t,n){return!0===e?(console.log("Render checkbox"),Object(N.jsx)(q,{isChecked:!0,content:t,setSkill:n})):Object(N.jsx)(q,{isChecked:!1,content:t,setSkill:n})},Q=function(e,t,n,a){return Object(N.jsxs)(L.a,{item:!0,xs:12,md:6,children:[Object(N.jsx)(p.a,{variant:"h6",children:e}),Object(N.jsx)(P.a,{children:t.map((function(e){return function(e,t,n){return t.includes(e)?(console.log(e),Object(N.jsxs)(M.a,{children:[G(!0,e,n),Object(N.jsx)(D.a,{children:e})]},e)):Object(N.jsxs)(M.a,{children:[G(!1,e,n),Object(N.jsx)(D.a,{children:e})]})}(e,n,a)}))})]})};function z(e){var t=e.isOpen,n=e.closeDialog,s=e.isUpdate,c=e.setSkills,i=Object(a.useState)([]),o=Object(r.a)(i,2),l=o[0],d=o[1],j=Object(a.useState)([]),h=Object(r.a)(j,2),b=h[0],u=h[1],x=Object(a.useState)([]),p=Object(r.a)(x,2),m=p[0],g=p[1],f=Object(_.a)(["user"]),v=Object(r.a)(f,2),y=v[0],k=(v[1],Object(a.useState)([])),C=Object(r.a)(k,2),T=C[0],F=C[1],W=Object(a.useState)([]),R=Object(r.a)(W,2),A=R[0],B=R[1];console.log("Previous skills"),console.log(A);var I=function(){var e=y.user,t={};t.user_id=e,t.user_skills=[];for(var n=0;n<T.length;n++)t.user_skills.push(T[n]);S.a.post(w+"/api/user/skills",t),new BroadcastChannel("app-data").postMessage({is_update_skills:!0})},M=function(){console.log("Set skills for new user"),c(T),n()},D=function(){console.log("Cancel"),F(Object(E.a)(A)),n()},P=function(e,t){if(t)F([].concat(Object(E.a)(T),[e]));else{var n=Object(E.a)(T);F(n.filter((function(t){return t!==e})))}};return Object(a.useEffect)((function(){var e=[],t=[],n=[];if(S.a.get(w+"/api/skills").then((function(a){for(var s=0;s<a.data.length;s++)"Knowledge"===a.data[s].type&&e.push(a.data[s].name),"TechnicalSkill"===a.data[s].type&&t.push(a.data[s].name),"Technology"===a.data[s].type&&n.push(a.data[s].name)})).then((function(){d(e),g(n),u(t)})),!0===s){var a=y.user;console.log("Get skills of the current user"),console.log(a),S.a.get(w+"/api/"+a+"/skills").then((function(e){for(var t=[],n=0;n<e.data.length;n++)t.push(e.data[n].skill_name);F(t)}))}}),[]),console.log("Reload"),console.log(T),Object(a.useEffect)((function(){!0===t&&B(Object(E.a)(T))}),[t]),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(U.a,{maxWidth:"sm",open:t,"aria-labelledby":"simple-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(N.jsx)(Y.a,{children:"Add existed skills"}),Object(N.jsxs)(J.a,{children:[Object(N.jsx)(K.a,{children:"Add your existed skills to provide the best career path for you."}),Object(N.jsxs)(L.a,{container:!0,spacing:2,children:[Q("Technical skill",b,T,P),Q("Knowledge",l,T,P),Q("Technology",m,T,P)]})]}),Object(N.jsx)(H.a,{children:Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(O.a,{onClick:D,children:"Cancel"}),Object(N.jsx)(O.a,{color:"primary",onClick:!0===s?I:M,children:"Update"})]})})]})})}var V=n.p+"static/media/register.2896700b.png";function X(){var e=Object(y.f)(),t=Object(a.useState)(!1),n=Object(r.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)([]),m=Object(r.a)(i,2),f=m[0],C=m[1],_=Object(a.useState)(""),T=Object(r.a)(_,2),F=T[0],R=T[1],B=Object(a.useState)(""),E=Object(r.a)(B,2),M=E[0],D=E[1],L=Object(a.useState)(""),P=Object(r.a)(L,2),U=P[0],Y=P[1],J=Object(a.useState)(""),K=Object(r.a)(J,2),H=K[0],q=K[1];return Object(N.jsxs)("div",{className:"container-form",children:[Object(N.jsx)(z,{isOpen:s,closeDialog:function(){c(!1)},setSkills:C}),Object(N.jsxs)(o.a,{style:{},children:[Object(N.jsx)(l.a,{title:"Register your account",subheader:"Explore more your career path"}),Object(N.jsxs)(d.a,{style:{display:"flex"},children:[Object(N.jsx)("div",{className:"container-image",children:Object(N.jsx)("img",{width:400,height:400,style:{objectFit:"cover",marginRight:"20px"},src:V})}),Object(N.jsxs)("div",{className:"container-two-forms",style:{display:"flex",flexDirection:"column"},children:[Object(N.jsxs)("div",{style:{display:"flex"},children:[Object(N.jsxs)("form",{children:[Object(N.jsxs)(j.a,{fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(h.a,{htmlFor:"outlined-adornment-password",children:"Email"}),Object(N.jsx)(b.a,{id:"outlined-adornment-amount",labelWidth:60,onChange:function(e){return R(e.target.value)},startAdornment:Object(N.jsx)(u.a,{position:"start",children:Object(N.jsx)(g.a,{})})})]}),Object(N.jsx)("div",{style:{marginTop:"20px"}}),Object(N.jsxs)(j.a,{fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(h.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(N.jsx)(b.a,{id:"outlined-adornment-amount",labelWidth:100,type:"password",onChange:function(e){return D(e.target.value)},startAdornment:Object(N.jsx)(u.a,{position:"start",children:Object(N.jsx)(v.a,{})})})]}),Object(N.jsx)("div",{style:{marginTop:"20px"}}),Object(N.jsxs)(j.a,{fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(h.a,{htmlFor:"outlined-adornment-password",children:"Re-type password"}),Object(N.jsx)(b.a,{id:"outlined-adornment-amount",labelWidth:150,type:"password",startAdornment:Object(N.jsx)(u.a,{position:"start",children:Object(N.jsx)(v.a,{})})})]})]}),Object(N.jsxs)("form",{style:{marginLeft:"20px",display:"flex",flexDirection:"column"},children:[Object(N.jsxs)(j.a,{fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(h.a,{htmlFor:"outlined-adornment-password",children:"Your name"}),Object(N.jsx)(b.a,{id:"outlined-adornment-amount",labelWidth:100,onChange:function(e){return q(e.target.value)},startAdornment:Object(N.jsx)(u.a,{position:"start",children:Object(N.jsx)(A.a,{})})})]}),Object(N.jsxs)(j.a,{fullWidth:!0,variant:"outlined",style:{marginTop:"20px"},children:[Object(N.jsx)(h.a,{htmlFor:"outlined-adornment-password",children:"Job title"}),Object(N.jsx)(b.a,{id:"outlined-adornment-amount",labelWidth:100,onChange:function(e){return Y(e.target.value)},startAdornment:Object(N.jsx)(u.a,{position:"start",children:Object(N.jsx)(I.a,{})})})]}),Object(N.jsx)(O.a,{variant:"contained",style:{backgroundColor:"#1abc9c",color:"#ffffff",width:"250px",height:"55px",marginTop:"20px"},onClick:function(){c(!0)},children:"Add your skills"})]})]}),Object(N.jsx)("div",{className:"verify-checkbox",children:Object(N.jsxs)("div",{style:{display:"flex",alignItems:"center",marginTop:"15px"},children:[Object(N.jsx)(W.a,{color:"primary"}),Object(N.jsxs)(p.a,{variant:"caption",children:["I accept the ",Object(N.jsx)(k.b,{children:"Terms of use"})," and Privacy policy"]})]})}),Object(N.jsx)("div",{className:"container-buttons",style:{display:"flex",marginTop:"20px"},children:Object(N.jsx)(O.a,{variant:"contained",style:{backgroundColor:"#0062e6",color:"#ffffff",width:"260px",height:"50px"},onClick:function(){var t={username:F,password:M,job_title:U,fullname:H,skills:f};console.log(t),S.a.post(w+"/api/register",t).then((function(t){200===t.status&&e.push("/register_success")}))},children:"Register"})}),Object(N.jsx)("div",{style:{marginTop:"10px"},children:Object(N.jsx)(x.a,{children:Object(N.jsxs)(p.a,{variant:"caption",children:[Object(N.jsx)(p.a,{variant:"inherit",children:"Already have an account?"}),Object(N.jsx)(k.b,{style:{marginLeft:"8px",marginRight:"45px"},variant:"inherit",href:"#",onClick:function(t){t.preventDefault(),e.push("/login")},children:"Login now"})]})})})]})]})]})]})}n(152);function Z(){return Object(N.jsx)("div",{className:"container-form",children:Object(N.jsx)(o.a,{children:Object(N.jsx)(l.a,{title:Object(N.jsx)(p.a,{variant:"h5",style:{color:"#1abc9c"},children:"You login successfully."}),subheader:"Close this window and enjoy the IT career bot now."})})})}var $=n(209),ee=n.n($);n(541);function te(){var e=Object(a.useRef)(null),t=function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)},n=new BroadcastChannel("app-data");return n.addEventListener("message",(function(t){if(!0===t.data.is_login){var n=t.data.user_id,a=t.data.user_name;e.current&&e.current.sendMessage&&e.current.sendMessage('/greetWithName{"user_id": "'+n+'","user_name": "'+a+'"}')}})),n.addEventListener("message",(function(t){!0===t.data.is_update_skills&&e.current&&e.current.sendMessage&&e.current.sendMessage("/update_user_skills")})),console.log("Rasa webchat init"),Object(N.jsx)(ee.a,{ref:e,initPayload:"/greet",socketUrl:"http://localhost:5005",customData:{language:"en"},title:"IT Career Bot",subtitle:"Powered by FIT-HCMUS",showFullScreenButton:!0,showMessageDate:!1,profileAvatar:"https://i.ibb.co/wQqdKPf/chatbot-icon.png",onSocketEvent:{bot_uttered:function(e){console.log(e),"You are directed to the login page."===e.text&&t("/login"),"You are directed to the register page."===e.text&&t("/register"),"You are directed to the skill page."===e.text&&t("/user/skills"),"You are directed to the survey page."===e.text&&t("https://bit.ly/it_career_bot_survey")}}})}var ne=n(544),ae=n.p+"static/media/guideline.ae9118fc.png";function se(){return Object(N.jsx)("div",{className:"container-form",children:Object(N.jsxs)(o.a,{children:[Object(N.jsx)(l.a,{title:"IT CAREER BOT INSTRUCTION",subheader:"Official guideline"}),Object(N.jsxs)("div",{className:"main-container",style:{display:"flex"},children:[Object(N.jsx)("img",{width:400,height:400,style:{objectFit:"cover",marginRight:"20px",marginLeft:"20px"},src:ae}),Object(N.jsx)("div",{className:"content",children:Object(N.jsx)(d.a,{children:[{step:"Step 1",content:"Click the right bottom icon in the website."},{step:"Step 2",content:"Ask the chatbot about your learning path."},{step:"Step 3",content:"Complete the survey at the end of the conversation to improve your experience next time."}].map((function(e){return t=e.step,n=e.content,Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(ne.a,{variant:"outlined",style:{maxWidth:"450px",marginBottom:"20px",padding:"10px"},children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",color:"textPrimary",component:"h2",align:"left",children:t}),Object(N.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",align:"left",children:n})]})});var t,n}))})})]}),Object(N.jsxs)("div",{className:"footer",children:[Object(N.jsx)(p.a,{variant:"h5",style:{marginBottom:"20px"},children:"Thank you for taking the time to complete this survey."}),Object(N.jsx)(p.a,{style:{marginBottom:"10px"},variant:"caption",children:Object(N.jsx)(k.b,{children:"Report if you cannot use the bot."})})]})]})})}function ce(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(te,{}),Object(N.jsx)(se,{})]})}function ie(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"container-form",children:Object(N.jsx)(z,{isUpdate:!0,isOpen:!0})})})}function re(){return Object(N.jsx)("div",{className:"container-form",children:Object(N.jsx)(o.a,{children:Object(N.jsx)(l.a,{title:Object(N.jsx)(p.a,{variant:"h5",style:{color:"#1abc9c"},children:"You register successfully."}),subheader:"Close this window and enjoy the IT career bot now."})})})}var oe=function(){return document.title="IT Career Bot",Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(y.c,{children:[Object(N.jsx)(y.a,{path:"/login",children:Object(N.jsx)(F,{})}),Object(N.jsx)(y.a,{path:"/register",children:Object(N.jsx)(X,{})}),Object(N.jsx)(y.a,{path:"/login_success",children:Object(N.jsx)(Z,{})}),Object(N.jsx)(y.a,{path:"/user/skills",children:Object(N.jsx)(ie,{})}),Object(N.jsx)(y.a,{path:"/register_success",children:Object(N.jsx)(re,{})}),Object(N.jsx)(y.a,{path:"/",children:Object(N.jsx)(ce,{})})]})})},le=n(584);i.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(le.a,{children:Object(N.jsx)(k.a,{children:Object(N.jsx)(oe,{})})})}),document.getElementById("root"))}},[[542,1,2]]]);
//# sourceMappingURL=main.ed1452f6.chunk.js.map