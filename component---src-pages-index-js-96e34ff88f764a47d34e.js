(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{172:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(180),r=n(174),l=(n(21),n(34),n(196)),c=n.n(l),s=n(175),d=n(11),m=n.n(d),p=(n(176),n(177),r.b.div.withConfig({displayName:"childLayout__PageEdge",componentId:"fn6xch-0"})(["width:100vw;height:100vh;height:-webkit-fill-available;margin:40px 0;padding:0;background-size:cover;@media (max-width:","){border:none;}"],function(e){return e.theme.medium})),u=(r.b.div.withConfig({displayName:"childLayout__Border",componentId:"fn6xch-1"})(["position:fixed;top:0;left:0;width:100%;height:100%;margin:0;padding:0;box-sizing:border-box;"]),r.b.div.withConfig({displayName:"childLayout__Container",componentId:"fn6xch-2"})(["position:relative;top:50%;transform:perspective(1px) translateY(-50%);margin:0 auto;max-width:960px;padding:0px 1.0875rem 1.45rem;@media (max-width:","){padding:0px 0.7rem 0.7rem;}"],function(e){return e.theme.medium})),h=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null,i.a.createElement(u,null,i.a.createElement("main",null,t))))};h.propTypes={children:m.a.node.isRequired};var f=h;n(182);var g=r.b.span.withConfig({displayName:"revolve__DoWord",componentId:"h0cdhe-0"})(["color:red;"]),w=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).cw=0,n.state={word:n.props.word[0],words:n.props.word},n.changeWord=n.changeWord.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){setInterval(this.changeWord,2e3)},o.changeWord=function(){this.cw=(this.cw+1)%this.props.word.length,this.setState({word:this.props.word[this.cw]})},o.render=function(){return i.a.createElement(g,null,this.state.word)},a}(i.a.Component),b=r.b.div.withConfig({displayName:"title__Slate",componentId:"sc-135430u-0"})(["text-shadow:1px 1px 10px #848181;"]),x=r.b.h1.withConfig({displayName:"title__TitleText",componentId:"sc-135430u-1"})(["color:white;font-size:5em;@media (max-width:","){font-size:5em;text-align:center;}@media (max-width:","){font-size:4em;text-align:center;}"],function(e){return e.theme.large},function(e){return e.theme.xsmall}),y=r.b.h2.withConfig({displayName:"title__DoText",componentId:"sc-135430u-2"})(["color:white;font-size:2em;@media (max-width:","){font-size:2em;text-align:center;}"],function(e){return e.theme.large}),v=r.b.div.withConfig({displayName:"title__Links",componentId:"sc-135430u-3"})(["display:flex;width:460px;@media (max-width:","){margin:0 auto;}@media (max-width:","){flex-wrap:wrap;justify-content:center;width:auto;}"],function(e){return e.theme.large},function(e){return e.theme.small}),E=r.b.div.withConfig({displayName:"title__Buttons",componentId:"sc-135430u-4"})(["padding:5px 20px;@media (max-width:","){padding:5px 0;width:70%;}"],function(e){return e.theme.small}),_=r.b.button.withConfig({displayName:"title__TitleButton",componentId:"sc-135430u-5"})(['background-color:#ffffff;border:0.1em solid #ffffff;border-radius:0.12em;box-sizing:border-box;color:#000000;display:block;float:left;font-family:"Roboto",sans-serif;font-weight:800;margin:0 0.3em 0.3em 0;padding:0.35em 1.2em;text-decoration:none;text-align:center;transition:all 0.2s;:hover{background-color:rgba(255,255,255,0);color:#ffffff;}@media (max-width:',"){width:100%;}"],function(e){return e.theme.small}),C=r.b.div.withConfig({displayName:"title__Icons",componentId:"sc-135430u-6"})(["font-size:3rem;opacity:1;i{color:white;padding:0 20px;}@media (max-width:","){text-align:center;width:100%;i{font-size:2.5rem;padding:10px 15px;}}"],function(e){return e.theme.small}),k=function(e){var t=e.name,n=e.word,a=e.but;return i.a.createElement(b,null,i.a.createElement(x,null,"Hi there!",i.a.createElement("br",null)," I am ",t,"."),i.a.createElement(y,null,"I like to... ",i.a.createElement(w,{word:n,color:"red"})," "),i.a.createElement(v,null,i.a.createElement(E,null,i.a.createElement(_,{onClick:a},"Learn more")),i.a.createElement(C,null,i.a.createElement("a",{href:"https://www.linkedin.com/in/smowrey/"},i.a.createElement("i",{class:"fab fa-linkedin"})),i.a.createElement("a",{href:"https://github.com/seanmowz"},i.a.createElement("i",{class:"fab fa-github"})),i.a.createElement("a",{href:"mailto:sean.mowrey@edu.uwaterloo.ca"},i.a.createElement("i",{class:"fas fa-envelope"})))))},I=n(200),N=n.n(I),z=r.b.div.withConfig({displayName:"about__Slate",componentId:"sc-8xjndh-0"})(['display:flex;flex-wrap:wrap;font-family:"Roboto",sans-serif;justify-content:center;padding:5px;']),F=r.b.h3.withConfig({displayName:"about__TitleText",componentId:"sc-8xjndh-1"})(["color:red;font-size:2em;"]),j=r.b.div.withConfig({displayName:"about__Text",componentId:"sc-8xjndh-2"})(["color:black;font-size:1em;margin:5px;width:75%;a{color:red;font-weight:100;text-decoration:none;}a:hover{text-decoration:underline;}@media (max-width:","){width:100%;}"],function(e){return e.theme.medium}),W=r.b.img.withConfig({displayName:"about__HeroImg",componentId:"sc-8xjndh-3"})(["max-height:20%;max-width:20%;width:auto;height:auto;margin:60px 0;-webkit-filter:blur(0);filter:blur(0);-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;box-shadow:10px 10px 5px #ccc;:hover{-webkit-filter:blur(2px);filter:blur(2px);}@media (max-width:","){max-height:200px;max-width:200px;width:auto;height:auto;}"],function(e){return e.theme.medium}),S=function(){return i.a.createElement(z,null,i.a.createElement(j,null,i.a.createElement(F,null,"About Me."),"Hi! I am a 2B Computer Engineering student at the ",i.a.createElement("a",{href:"https://uwaterloo.ca/"},"University of Waterloo"),". I love building things that other people can use. I develop/build tools, websites, games, apps, and lego in the most efficient, user friendly, and modern ways. ",i.a.createElement("br",null),i.a.createElement("br",null)," I am currently an Undergraduate Research Assistant at the"," ",i.a.createElement("a",{href:"https://ov-research.uwaterloo.ca/NLP_lab.html"},"Natural Language Processing Lab")," ","affiliated with the"," ",i.a.createElement("a",{href:"https://uwaterloo.ca/artificial-intelligence-institute/"},"Waterloo.AI")," ","insitute at the University of Waterloo. I have had 3 coops so far with my last one being at EA Vancouver on the User Research team. In my spare time you can find me playing/watching hockey or eating sushi."),i.a.createElement(W,{src:N.a}))};n(201);var T=r.b.div.withConfig({displayName:"experienceCard__Container",componentId:"sc-239dzm-0"})(['flex-basis:calc(100% / 4);flex-grow:1;font-family:"Roboto",sans-serif;padding:5px;@media (max-width:',"){flex-basis:50%;}@media (max-width:","){flex-basis:100%;}"],function(e){return e.theme.medium},function(e){return e.theme.small}),A=r.b.div.withConfig({displayName:"experienceCard__Image",componentId:"sc-239dzm-1"})(["background-position:center;background-repeat:no-repeat;background-size:cover;border:1px solid ",";border-radius:5px;height:140px;overflow:hidden;transition:all 0.6s ease;width:100%;-webkit-transition:all 0.6s ease;&:hover{box-shadow:0px 5px 18px 0px rgba(0,0,0,0.3);transform:translateY(-5px);}"],function(e){return e.theme.border}),L=r.b.div.withConfig({displayName:"experienceCard__Title",componentId:"sc-239dzm-2"})(["font-size:1.1rem;font-weight:600;padding:5px 5px;"]),D=r.b.div.withConfig({displayName:"experienceCard__TimePeriod",componentId:"sc-239dzm-3"})(["font-size:0.7rem;padding:0 5px;padding-bottom:5px;"]),R=r.b.div.withConfig({displayName:"experienceCard__Subtitle",componentId:"sc-239dzm-4"})(["color:",";font-size:0.75rem;font-weight:100;line-height:1.6em;padding:0 5px;"],function(e){return e.theme.greyColor}),P=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return i.a.createElement(T,null,i.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(A,{style:{backgroundImage:"url("+this.props.logo+")",backgroundColor:this.props.colour}})),i.a.createElement(L,null,this.props.title),i.a.createElement(D,null,this.props.timeperiod),i.a.createElement(R,null,this.props.subtitle))},a}(i.a.Component),M=n(202),q=n.n(M),B=n(203),J=n.n(B),O=n(204),U=n.n(O),H=n(205),Y=n.n(H);var V=r.b.div.withConfig({displayName:"experienceSection__Container",componentId:"xqe21n-0"})(["display:flex;flex-flow:row;flex-wrap:wrap;justify-content:space-around;"]),G=r.b.h2.withConfig({displayName:"experienceSection__Title",componentId:"xqe21n-1"})([""]),K=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(G,null,"Work Experience"),i.a.createElement(V,null,i.a.createElement(P,{logo:Y.a,colour:"#FFFFFF",title:"Electronic Arts",link:"https://www.ea.com/",timeperiod:"May 2019 - September 2019",subtitle:"Developer on the User Research team building a Natural Language Processing Tool to analyze massive amounts of text in seconds."}),i.a.createElement(P,{logo:U.a,colour:"#FFFFFF",title:"Ciena",link:"https://www.ciena.com/",timeperiod:"September 2018 - January 2019",subtitle:"Worked on next generation products, involved in data acquisition, board design, mechanical assemblies and software development."}),i.a.createElement(P,{logo:q.a,colour:"#FFFFFF",title:"Toronto Water",link:"https://www.toronto.ca/services-payments/water-environment/",timeperiod:"January 2018 - May 2018",subtitle:"Worked in Capital Works Delivery, helping to manage multi-million dollar projects on water treatment or delivery infrastructure."}),i.a.createElement(P,{logo:J.a,colour:"#FFFFFF",title:"Scentuals",link:"https://www.scentuals.com/",timeperiod:"June 2016- Present",subtitle:"Developed E-commerce websites as well as worked on production line optimizing efficiency and commissioning automated machinery. "})))},a}(i.a.Component),Q={callbacks:["onLeave"],scrollOverflow:!0,responsiveWidth:1100},X=function(e){return i.a.createElement(c.a,Object.assign({},e,Q,{render:function(t){t.state;var n=t.fullpageApi;return i.a.createElement("div",{id:"fullpage-wrapper"},i.a.createElement("div",{className:"section section1"},i.a.createElement(s.a,null,i.a.createElement(k,{name:e.name,word:e.words,but:function(){return n.moveSectionDown()}}))),i.a.createElement("div",{className:"section fp-auto-height-responsive"},i.a.createElement(f,null,i.a.createElement(S,null))),i.a.createElement("div",{className:"section fp-auto-height-responsive"},i.a.createElement(f,null,i.a.createElement(K,null))))}}))},Z={xsmall:"480px",small:"736px",medium:"980px",large:"1280px",xlarge:"1800px",greyColor:"#A5A5A5",greyLight:"#CCCCCC",border:"#D8D8D8",borderdark:"#3A3A3A"};t.default=function(){return i.a.createElement("div",null,i.a.createElement(o.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Sean's Website"),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Space+Mono&display=swap",rel:"stylesheet"}),i.a.createElement("script",{src:"https://kit.fontawesome.com/a9a21b29b4.js",crossorigin:"anonymous"})),i.a.createElement(r.a,{theme:Z},i.a.createElement(X,{name:"Sean Mowrey",words:["develop","create","play hockey","volunteer","eat sushi","learn","sleep","build lego","hike"]})))}},175:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(11),r=n.n(o),l=n(174),c=n(176),s=n.n(c),d=(n(177),l.b.div.withConfig({displayName:"layout__PageEdge",componentId:"ii2kc2-0"})(["width:100vw;height:100vh;margin:0;padding:0;border:50px solid #fff;background-image:url(",");background-size:cover;position:fixed;top:0;left:0;@media (max-width:","){border:none;}"],s.a,function(e){return e.theme.medium})),m=(l.b.div.withConfig({displayName:"layout__Border",componentId:"ii2kc2-1"})(["position:fixed;top:0;left:0;width:100%;height:100%;margin:0;padding:0;box-sizing:border-box;"]),l.b.div.withConfig({displayName:"layout__Container",componentId:"ii2kc2-2"})(["margin:0 auto;max-width:960px;padding:0px 1.0875rem 1.45rem;position:relative;top:50%;transform:perspective(1px) translateY(-50%);@media (max-width:","){padding:0px 0.7rem 0.7rem;}"],function(e){return e.theme.medium})),p=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null,i.a.createElement(m,null,i.a.createElement("main",null,t))))};p.propTypes={children:r.a.node.isRequired},t.a=p},176:function(e,t,n){e.exports=n.p+"static/bg-ed9804083b7e1e2b5c2f1210ffeed8b9.jpg"},200:function(e,t,n){e.exports=n.p+"static/headshot-13c5bc89baae9125a5be10084fef782c.jpg"},202:function(e,t,n){e.exports=n.p+"static/toronto-d6f20e80a53a91df9239fa6e7345b401.jpg"},203:function(e,t,n){e.exports=n.p+"static/scentuals-c77a03e653e4e8bd1495bc9faf9c12ae.jpg"},204:function(e,t,n){e.exports=n.p+"static/ciena-84263320a943c32ac7b21c6f0daf6e67.jpg"},205:function(e,t,n){e.exports=n.p+"static/ea-a8e790091498bc8feb73a62497413435.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-96e34ff88f764a47d34e.js.map