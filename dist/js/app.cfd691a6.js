(()=>{"use strict";var e={607:(e,l,n)=>{var t=n(963),o=n(252);const a={class:"topnav",id:"myTopnav"},i=(0,o.uE)('<a href="#top" class="active">Home</a><a href="#uitslagen">Uitslagen</a><a href="#data">Data</a><a href="#deelnemers">Deelnemers</a><a href="#leden">Leden</a><a href="#clubs">Clubs</a><a href="#website">Website</a><a href="#overig">Overig</a>',8),r=(0,o._)("i",{class:"fa fa-bars"},null,-1),s=[r],d={id:"main",ref:"top"},u={id:"uitslagen",class:"top-level-section",ref:"uitslagen"},c={class:"top-level-section",ref:"data"},p={class:"top-level-section",ref:"deelnemers"},b={id:"leden",class:"top-level-section",ref:"leden"},h={class:"top-level-section",ref:"clubs"},m={class:"top-level-section",ref:"website"},_={class:"top-level-section",ref:"overig"};function w(e,l,n,r,w,g){const v=(0,o.up)("Uitslagen"),f=(0,o.up)("Data"),A=(0,o.up)("Deelnemers"),y=(0,o.up)("Leden"),C=(0,o.up)("Clubs"),k=(0,o.up)("Website"),U=(0,o.up)("Overig");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[i,(0,o._)("a",{href:"javascript:void(0);",id:"nav-button",class:"icon",onClick:l[0]||(l[0]=e=>g.toggleResponsive())},s)]),(0,o._)("div",d,[(0,o._)("button",{onClick:l[1]||(l[1]=e=>g.toggleResponsive())}),(0,o.wy)((0,o._)("section",u,[(0,o.Wm)(v,{todo:w.todo},null,8,["todo"])],512),[[t.F8,!w.hideUitslagen]]),(0,o.wy)((0,o._)("section",c,[(0,o.Wm)(f,{todo:w.todo},null,8,["todo"])],512),[[t.F8,!w.hideData]]),(0,o.wy)((0,o._)("section",p,[(0,o.Wm)(A,{todo:w.todo},null,8,["todo"])],512),[[t.F8,!w.hideDeelnemers]]),(0,o.wy)((0,o._)("section",b,[(0,o.Wm)(y,{todo:w.todo},null,8,["todo"])],512),[[t.F8,!w.hideLeden]]),(0,o.wy)((0,o._)("section",h,[(0,o.Wm)(C,{todo:w.todo},null,8,["todo"])],512),[[t.F8,!w.hideClubs]]),(0,o.wy)((0,o._)("section",m,[(0,o.Wm)(k,{todo:w.todo},null,8,["todo"])],512),[[t.F8,!w.hideWebsite]]),(0,o.wy)((0,o._)("section",_,[(0,o.Wm)(U,{todo:w.todo},null,8,["todo"])],512),[[t.F8,!w.hideOverig]])],512)],64)}const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAQ1JREFUaEPt1tEJwzAMBFBlk3aStpt0k4zWjtJRisAOJZiCudMJg/yd2Pckg7zZ4mtbPL8VILuD1YHqAFiBukJgAeHfqwNwCcEN1B14mdnFzK5g7uN3JcDD39vJHxZCBfgN36tHQSgAo/COWAIQGt6rENmB8PCRAEn4KIAsfARAGp4NkIdnAlLCswBp4RmA1PAowB9lTzPbBw8zn7KPNm1Z77bhPuggS0egAK9KKoIBSEWwAGkIJiAFwQbIEREAKSIKIENEAiSIaMA/xLtNa2hSKwAjBCU8+haarVyf2DdG5fvhqg708xzhDz3aUgNowbM6UIBzBeoK0e/E5IbVgcmC0T+vDtBLOrnh8h34AnvqPTGcwphpAAAAAElFTkSuQmCC";function v(e,l,n,t,o,a){return null}const f={name:"Uitslagen"};var A=n(744);const y=(0,A.Z)(f,[["render",v]]),C=y;function k(e,l,n,t,o,a){return null}const U={name:"Data"},E=(0,A.Z)(U,[["render",k]]),L=E;function O(e,l,n,t,o,a){return null}const S={name:"Deelnemers"},j=(0,A.Z)(S,[["render",O]]),q=j;var D=n(577);const B=(0,o._)("h1",null,"Leden",-1),z=(0,o._)("label",{for:"clubpre"},"Club",-1),W=["value"],V=(0,o._)("label",{for:"lid"},"Lid",-1),N=(0,o._)("option",{disabled:"",value:""},"Selecteer een lid",-1),F=(0,o._)("option",{value:"wmemelink"},"Wim Memelink",-1),I=(0,o._)("option",{value:"theocorts"},"TheoCorts",-1),K=(0,o._)("option",{value:"keesschieven"},"Kees Schieven",-1),M=[N,F,I,K],P=["src"],x=(0,o._)("br",null,null,-1),J=(0,o._)("br",null,null,-1),Z=(0,o._)("span",null,"Lid sinds: ",-1),G={class:"antwoord",id:"lidsinds"},R=(0,o._)("hr",null,null,-1),T=(0,o._)("span",null,"Achternaam: ",-1),H={class:"antwoord",id:"achternaam"},Q=(0,o._)("hr",null,null,-1),Y=(0,o._)("span",null,"Voornaam: ",-1),X={class:"antwoord",id:"voornaam"},$=(0,o._)("hr",null,null,-1),ee=(0,o._)("span",null,"Adres: ",-1),le={class:"antwoord",id:"adres"},ne=(0,o._)("hr",null,null,-1),te=(0,o._)("span",null,"Postcode: ",-1),oe={class:"antwoord",id:"postcode"},ae=(0,o._)("hr",null,null,-1),ie=(0,o._)("span",null,"Woonplaats: ",-1),re={class:"antwoord",id:"woonplaats"},se=(0,o._)("hr",null,null,-1),de=(0,o._)("span",null,"Geboortedatum: ",-1),ue={class:"antwoord",id:"geboortedatum"},ce=(0,o._)("hr",null,null,-1),pe=(0,o._)("span",null,"E-mail: ",-1),be={class:"antwoord",id:"email"},he=(0,o._)("hr",null,null,-1),me=(0,o._)("span",null,"Club: ",-1),_e={class:"antwoord",id:"club"},we=(0,o._)("hr",null,null,-1),ge=(0,o._)("span",null,"Licentie: ",-1),ve={class:"antwoord",id:"licentie"},fe=(0,o._)("hr",null,null,-1),Ae={class:"button-wrapper"},ye=["src"],Ce=(0,o._)("br",null,null,-1),ke=(0,o._)("br",null,null,-1),Ue=(0,o._)("label",{for:"input-lidsinds"},[(0,o.Uk)("Lid sinds"),(0,o._)("span",{class:"required"}," *")],-1),Ee=(0,o._)("br",null,null,-1),Le=(0,o._)("label",{for:"input-achternaam"},[(0,o.Uk)("Achternaam"),(0,o._)("span",{class:"required"}," *")],-1),Oe=(0,o._)("br",null,null,-1),Se=(0,o._)("label",{for:"input-voornaam"},[(0,o.Uk)("Voornaam"),(0,o._)("span",{class:"required"}," *")],-1),je=(0,o._)("br",null,null,-1),qe=(0,o._)("label",{for:"input-adres"},[(0,o.Uk)("Adres"),(0,o._)("span",{class:"required"}," *")],-1),De=(0,o._)("br",null,null,-1),Be=(0,o._)("label",{for:"input-postcode"},[(0,o.Uk)("Postcode"),(0,o._)("span",{class:"required"}," *")],-1),ze=(0,o._)("br",null,null,-1),We=(0,o._)("label",{for:"input-woonplaats"},[(0,o.Uk)("Woonplaats"),(0,o._)("span",{class:"required"}," *")],-1),Ve=(0,o._)("br",null,null,-1),Ne=(0,o._)("label",{for:"input-geboortedatum"},[(0,o.Uk)("Geboortedatum"),(0,o._)("span",{class:"required"}," *")],-1),Fe=(0,o._)("br",null,null,-1),Ie=(0,o._)("label",{for:"input-email"},[(0,o.Uk)("Email"),(0,o._)("span",{class:"required"}," *")],-1),Ke=(0,o._)("br",null,null,-1),Me=(0,o._)("label",{for:"select-club"},"Club",-1),Pe=(0,o._)("option",{disabled:"",value:""},"Selecteer een club",-1),xe=(0,o._)("option",{value:"GEK"},"GEK",-1),Je=(0,o._)("option",{value:"ONA"},"ONA",-1),Ze=(0,o._)("option",{value:"Jannao"},"Jannao",-1),Ge=[Pe,xe,Je,Ze],Re=(0,o._)("label",{for:"select-licentie"},"Licentie",-1),Te=(0,o._)("option",{disabled:"",value:""},"?",-1),He=(0,o._)("option",{value:"A"},"A",-1),Qe=(0,o._)("option",{value:"B"},"B",-1),Ye=(0,o._)("option",{value:"C"},"C",-1),Xe=[Te,He,Qe,Ye],$e={class:"button-wrapper"};function el(e,l,n,a,i,r){return(0,o.wg)(),(0,o.iD)(o.HY,null,[B,(0,o._)("form",null,[(0,o._)("div",null,[z,(0,o.wy)((0,o._)("select",{id:"clubpre","onUpdate:modelValue":l[0]||(l[0]=e=>i.selectedClub=e),style:(0,D.j5)({color:i.clubprecolor}),onChange:l[1]||(l[1]=e=>r.setColor("clubpre")),required:""},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.clubs,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.naam,value:e.naam},(0,D.zw)(e.naam),9,W)))),128))],36),[[t.bM,i.selectedClub]])]),(0,o._)("div",null,[V,(0,o.wy)((0,o._)("select",{id:"lid","onUpdate:modelValue":l[2]||(l[2]=e=>i.lidselected=e),style:(0,D.j5)({color:i.lidcolor}),onChange:l[3]||(l[3]=e=>r.setColor("lid")),required:""},M,36),[[t.bM,i.lidselected]])])]),(0,o.wy)((0,o._)("div",null,[(0,o._)("img",{src:i.profielafbeelding},null,8,P),x,J,Z,(0,o._)("b",G,(0,D.zw)(i.lidsinds),1),R,T,(0,o._)("b",H,(0,D.zw)(i.achternaam),1),Q,Y,(0,o._)("b",X,(0,D.zw)(i.voornaam),1),$,ee,(0,o._)("b",le,(0,D.zw)(i.adres),1),ne,te,(0,o._)("b",oe,(0,D.zw)(i.postcode),1),ae,ie,(0,o._)("b",re,(0,D.zw)(i.woonplaats),1),se,de,(0,o._)("b",ue,(0,D.zw)(i.geboortedatum),1),ce,pe,(0,o._)("b",be,(0,D.zw)(i.email),1),he,me,(0,o._)("b",_e,(0,D.zw)(i.club),1),we,ge,(0,o._)("b",ve,(0,D.zw)(i.licentie),1),fe,(0,o._)("div",Ae,[(0,o._)("button",{onClick:l[4]||(l[4]=(...e)=>r.handleEditLid&&r.handleEditLid(...e))},"Wijzig")])],512),[[t.F8,!i.isEditMode]]),(0,o.wy)((0,o._)("div",null,[(0,o._)("img",{src:i.profielafbeelding},null,8,ye),Ce,ke,Ue,(0,o.wy)((0,o._)("input",{id:"input-lidsinds","onUpdate:modelValue":l[5]||(l[5]=e=>i.lidsinds=e),type:"text",placeholder:"dd/mm/jjjj",required:""},null,512),[[t.nr,i.lidsinds]]),Ee,Le,(0,o.wy)((0,o._)("input",{id:"input-achternaam","onUpdate:modelValue":l[6]||(l[6]=e=>i.achternaam=e),type:"text",placeholder:"Achternaam",required:""},null,512),[[t.nr,i.achternaam]]),Oe,Se,(0,o.wy)((0,o._)("input",{id:"input-voornaam","onUpdate:modelValue":l[7]||(l[7]=e=>i.voornaam=e),type:"text",placeholder:"Voornaam",required:""},null,512),[[t.nr,i.voornaam]]),je,qe,(0,o.wy)((0,o._)("input",{id:"input-adres","onUpdate:modelValue":l[8]||(l[8]=e=>i.adres=e),type:"text",placeholder:"Adres",required:""},null,512),[[t.nr,i.adres]]),De,Be,(0,o.wy)((0,o._)("input",{id:"input-postcode","onUpdate:modelValue":l[9]||(l[9]=e=>i.postcode=e),type:"tel",placeholder:"Postcode",required:""},null,512),[[t.nr,i.postcode]]),ze,We,(0,o.wy)((0,o._)("input",{id:"input-woonplaats","onUpdate:modelValue":l[10]||(l[10]=e=>i.woonplaats=e),type:"text",placeholder:"Woonplaats",required:""},null,512),[[t.nr,i.woonplaats]]),Ve,Ne,(0,o.wy)((0,o._)("input",{id:"input-geboortedatum","onUpdate:modelValue":l[11]||(l[11]=e=>i.geboortedatum=e),type:"tel",placeholder:"Geboortedatum",required:""},null,512),[[t.nr,i.geboortedatum]]),Fe,Ie,(0,o.wy)((0,o._)("input",{id:"input-email","onUpdate:modelValue":l[12]||(l[12]=e=>i.email=e),type:"email",placeholder:"Email",required:""},null,512),[[t.nr,i.email]]),Ke,(0,o._)("div",null,[Me,(0,o.wy)((0,o._)("select",{id:"select-club","onUpdate:modelValue":l[13]||(l[13]=e=>i.club=e),style:(0,D.j5)({color:i.clubcolor}),onChange:l[14]||(l[14]=e=>r.setColor("club")),required:""},Ge,36),[[t.bM,i.club]])]),(0,o._)("div",null,[Re,(0,o.wy)((0,o._)("select",{id:"select-licentie","onUpdate:modelValue":l[15]||(l[15]=e=>i.licentie=e),style:(0,D.j5)({color:i.licentiecolor}),onChange:l[16]||(l[16]=e=>r.setColor("licentie")),required:""},Xe,36),[[t.bM,i.licentie]])]),(0,o._)("div",$e,[(0,o._)("button",{onClick:l[17]||(l[17]=(...e)=>r.handleUpdateLid&&r.handleUpdateLid(...e))},"Opslaan")])],512),[[t.F8,i.isEditMode]])],64)}const ll=n.p+"img/wmemelink.5383ff57.jpg",nl={name:"Leden",props:{todo:Boolean},data(){return{profielafbeelding:ll,clubpreselected:"",clubprecolor:"",lidselected:"",lidcolor:"",clubcolor:"",licentiecolor:"",lidsinds:String,achternaam:String,voornaam:String,adres:String,postcode:String,woonplaats:String,geboortedatum:String,email:String,club:String,licentie:String,isEditMode:!1,clubs:[],selectedClub:null}},mounted(){},async created(){this.clubs=await this.fetchClubs(),console.log("clubs: ",this.clubs);const e=await this.fetchLid();console.log(e),this.lidsinds=e.lidsinds,this.achternaam=e.achternaam,this.voornaam=e.voornaam,this.adres=e.adres,this.postcode=e.postcode,this.woonplaats=e.woonplaats,this.geboortedatum=e.geboortedatum,this.email=e.email,this.club=e.club,this.licentie=e.licentie},methods:{setColor(e){switch(e){case"clubpre":this.clubprecolor="black";break;case"lid":this.lidcolor="red";break;case"club":this.clubcolor="black";break;case"licentie":this.licentiecolor="black";break}},handleEditLid(){this.isEditMode=!0},async handleUpdateLid(){const e={lidsinds:this.lidsinds,achternaam:this.achternaam,voornaam:this.voornaam,adres:this.adres,postcode:this.postcode,woonplaats:this.woonplaats,geboortedatum:this.geboortedatum,club:this.club,licentie:this.licentie,email:this.email};await this.updateLid(e);this.isEditMode=!1},async fetchClubs(){try{const e=await fetch("get-clubs");return await e.json()}catch(e){console.error("Error fetching clubs form MongoDB",e)}},async fetchLid(){const e=await fetch("get-lid");return await e.json()},async updateLid(e){const l=await fetch("update-lid",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)});return await l.json()}}},tl=(0,A.Z)(nl,[["render",el]]),ol=tl;function al(e,l,n,t,o,a){return null}const il={name:"Clubs"},rl=(0,A.Z)(il,[["render",al]]),sl=rl;function dl(e,l,n,t,o,a){return null}const ul={name:"Website"},cl=(0,A.Z)(ul,[["render",dl]]),pl=cl;function bl(e,l,n,t,o,a){return null}const hl={name:"Overig"},ml=(0,A.Z)(hl,[["render",bl]]),_l=ml,wl={name:"App",components:{Uitslagen:C,Data:L,Deelnemers:q,Leden:ol,Clubs:sl,Website:pl,Overig:_l},data(){return{source:"",backButtonImage:g,hideUitslagen:!0,hideData:!0,hideDeelnemers:!0,hideLeden:!1,hideClubs:!0,hideWebsite:!0,hideOverig:!0,todo:!1}},methods:{toggleResponsive(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}}},gl=(0,A.Z)(wl,[["render",w]]),vl=gl;n(148);(0,t.ri)(vl).mount("#app")}},l={};function n(t){var o=l[t];if(void 0!==o)return o.exports;var a=l[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(l,t,o,a)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,o,a]=e[u],r=!0,s=0;s<t.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](t[s])))?t.splice(s--,1):(r=!1,a<i&&(i=a));if(r){e.splice(u--,1);var d=o();void 0!==d&&(l=d)}}return l}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,o,a]}})(),(()=>{n.d=(e,l)=>{for(var t in l)n.o(l,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:l[t]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l)})(),(()=>{n.p="/"})(),(()=>{var e={143:0};n.O.j=l=>0===e[l];var l=(l,t)=>{var o,a,[i,r,s]=t,d=0;if(i.some((l=>0!==e[l]))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(s)var u=s(n)}for(l&&l(t);d<i.length;d++)a=i[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},t=self["webpackChunkwkb_bestuurapp"]=self["webpackChunkwkb_bestuurapp"]||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))})();var t=n.O(void 0,[998],(()=>n(607)));t=n.O(t)})();
//# sourceMappingURL=app.cfd691a6.js.map