"use strict";(self["webpackChunkdev_server"]=self["webpackChunkdev_server"]||[]).push([[518],{2518:function(e,o,t){t.r(o),t.d(o,{default:function(){return V}});var n=t(3396);const i={class:"main-content-mod"},a={class:"mod-header-container"},u={class:"page-mod-container"};function l(e,o,t,l,p,r){const s=(0,n.up)("router-link"),c=(0,n.up)("ModHeader"),d=(0,n.up)("ModComponent");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",a,[(0,n.Wm)(s,{class:"header-component",to:{name:"admin"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Cours")])),_:1}),(0,n.Wm)(c)]),(0,n._)("div",u,[(0,n.Wm)(d)])])}var p=t(9242);const r={class:"mod-content-container"},s={class:"add-cours"},c={class:"top-cours-composition"},d=(0,n.uE)('<option value="0">Date du cours</option><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option>',6),m=[d],v=(0,n.uE)('<option value="0">Type de cours</option><option value="Cm">Cm</option><option value="Td">Td</option><option value="Fiches">Fiches</option><option value="Partiels">Partiels</option><option value="Tp">Tp</option>',6),h=[v],y={class:"bottom-cours-composition"},f=(0,n.uE)('<option value="0">Promotion</option><option value="SHPI1A">SHPI 1A</option><option value="SHPI2A">SHPI 2A</option><option value="MT3A">MT 3A</option><option value="ME3A">ME 3A</option><option value="GInd3A">GInd 3A</option><option value="GM3A">GM 3A</option><option value="GInfo3A">GInfo 3A</option><option value="Cyber3A">Cyber 3A</option><option value="GCB3A">GCB 3A</option>',10),A=[f],b=(0,n.uE)('<option value="0">Matière</option><option value="Analyse">Analyse</option><option value="Algebre">Algèbre</option><option value="OMP">OMP</option><option value="Base De Donnees">Base De Données</option><option value="Electromagnetisme">Electromagnétisme</option><option value="Analyse numerique">Analyse numérique</option><option value="Genie logiciel">Génie logiciel</option><option value="Electrostatique">Electrostatique</option><option value="Electrocinetique">Electrocinétique</option><option value="Mecanique">Mécanique</option><option value="Automatique">Automatique</option><option value="Architecture">Architecture</option><option value="Probabilite">Probabilité</option><option value="Magnetostatique">Magnétostatique</option><option value="Chime des Materiaux">Chime des Matériaux</option><option value="Thermodynamique">Thermodynamique</option><option value="Optique geometrique">Optique géométrique</option><option value="Optique ondulatoire">Optique ondulatoire</option><option value="Algo">Algo</option><option value="Physique des ondes">Physique des ondes</option><option value="Calcul formel">Calcul formel</option>',22),g=[b],_={class:"input-file-cours"},C={type:"file",ref:"fileInput"};function M(e,o,t,i,a,u){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",s,[(0,n._)("div",c,[(0,n.wy)((0,n._)("input",{class:"name-cours",type:"text",placeholder:"Nom","onUpdate:modelValue":o[0]||(o[0]=e=>a.name=e)},null,512),[[p.nr,a.name]]),(0,n.wy)((0,n._)("select",{class:"year-selected",name:"year-selected",id:"year-selected","onUpdate:modelValue":o[1]||(o[1]=e=>a.year=e)},m,512),[[p.bM,a.year]]),(0,n.wy)((0,n._)("select",{name:"type-cours",id:"type-cours","onUpdate:modelValue":o[2]||(o[2]=e=>a.type=e)},h,512),[[p.bM,a.type]])]),(0,n._)("div",y,[(0,n.wy)((0,n._)("select",{name:"promotion",id:"promotion","onUpdate:modelValue":o[3]||(o[3]=e=>a.promotion=e)},A,512),[[p.bM,a.promotion]]),(0,n.wy)((0,n._)("select",{class:"name",name:"Name",id:"name_id","onUpdate:modelValue":o[4]||(o[4]=e=>a.matiere=e)},g,512),[[p.bM,a.matiere]]),(0,n.wy)((0,n._)("input",{class:"auteur-cours",type:"text",placeholder:"Auteur","onUpdate:modelValue":o[5]||(o[5]=e=>a.auteur=e)},null,512),[[p.nr,a.auteur]])]),(0,n._)("div",_,[(0,n._)("input",C,null,512),(0,n._)("button",{class:"cours-submit",onClick:o[6]||(o[6]=(...e)=>u.uploadFile&&u.uploadFile(...e))},"Submit")])])])}var q=t(4161),w={data(){return{name:"",year:"0",promotion:"0",type:"0",path_folder:"",matiere:"0",auteur:""}},methods:{onChangedFile:function(e){var o=e.target.files[0];const t=new FormData;t.append("file",o),console.log(t)},updateFileName:function(e){return e.replace(/[^a-zA-Z0-9 -]/g,"").replace(/\s/g,"_").replace(/\//g,"")},uploadFile:async function(){const e=this.$refs.fileInput.files[0];if("0"==this.year||"0"==this.promotion||"0"==this.type||"0"==this.matiere||""==this.name||""==this.auteur||void 0==e)return void alert("Tous les champs sont obligatoire !");const o=this.matiere+"/"+this.promotion+"/"+this.type+"/",t=this.updateFileName(this.name),n=new FormData;n.append("file",e),n.append("newName",o+t),n.append("extension",e.name.split(".").pop());try{await q.Z.post("/api/cours",{name:this.name,year:this.year,shpi:this.promotion,type:this.type,path:o+t,matiere:this.matiere,auteur:this.auteur}).then((()=>{alert("Fichier ajouter a la base de donnée !")})).catch((()=>{alert("Une erreure est survenue, contactez l'admin")}))}catch(i){alert("Une erreure est survenue, contactez l'admin")}try{await q.Z.post("/api/upload",n).then((()=>{alert("Upload du fichier effectué !")})).catch((e=>{console.log(e)}))}catch(i){alert("Une erreure est survenue, contactez l'admin")}window.location.reload()}}},P=t(89);const E=(0,P.Z)(w,[["render",M]]);var U=E;t(7658);const k={class:"header-home-container"},F={class:"button-header-container"},D=(0,n._)("button",{class:"cours"},"Cours",-1);function G(e,o,t,i,a,u){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("div",F,[(0,n._)("button",{onClick:o[0]||(o[0]=e=>this.$router.push("/"))},"Accueil"),D,(0,n.Wm)(l,{class:"header-component",to:{name:"admin"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Cours")])),_:1})])])}var I={data(){return{bool:!1}},methods:{displayContent:async function(){const e=`; ${document.cookie}`;let o=e.split("; session=");2===o.length&&(o=o.pop().split(";").shift()),q.Z.defaults.headers.common={Authorization:`Bearer ${o}`};try{await q.Z.get("/api/admin",{withCredentials:!0}),this.bool=!0}catch(t){this.bool=!1}}},mounted(){this.displayContent()}};const T=(0,P.Z)(I,[["render",G]]);var Z=T,H={components:{ModComponent:U,ModHeader:Z}};const O=(0,P.Z)(H,[["render",l]]);var V=O}}]);
//# sourceMappingURL=518.2157e8cf.js.map