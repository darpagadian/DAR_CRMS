import{A as z}from"./AppLayout-nowU_rAO.js";import{_ as D}from"./Modal.vue_vue_type_script_setup_true_lang-oPQ7ZWZp.js";import{d as c,i as O,j as l,o as r,c as $,w as t,a as e,b as o,g as u,t as i,e as m,h as L,F as w,O as k}from"./app-BRGP3ZYi.js";import{S as U}from"./sweetalert2.all-CCs1Ll_A.js";import"./dar-logo-BEVYNDow.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const j=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Assignatorees ",-1),F={class:"py-12"},R={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},T={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},E={class:"w-full m-5 text-right"},M={class:"text-right m-5"},Y=e("thead",null,[e("tr",null,[e("th",{class:"text-left"}," # "),e("th",{class:"text-left"}," Name "),e("th",{class:"text-left"}," Designation "),e("th",{class:"text-center"}," Actions ")])],-1),q={class:"text-center"},G={key:1,span:""},H={class:"m-2"},J={style:{color:"gray"}},K={class:"text-center"},te={__name:"Index",props:{assignatorees:Object},setup(d){const f=c(!1),x=c(null);c({});const _=c({}),p=c("");O(()=>p.value,s=>{k.get("/assignatorees",{search:s},{preserveState:!0})});const g=async(s,a,v)=>{f.value=s,x.value=a,_.value=v},b=async s=>{U.fire({html:'<div style="font-weight: bold; font-size:25px">Are you sure you want to delete this record?</div> ',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, I'm sure",showLoaderOnConfirm:!0}).then(a=>{a.isConfirmed&&k.post("/assignatorees/delete",{id:s})})},C=async()=>{_.value={}};return(s,a)=>{const v=l("v-text-field"),y=l("v-col"),h=l("v-btn"),A=l("v-row"),B=l("v-pagination"),S=l("v-table"),V=l("v-card");return r(),$(z,{title:"Dashboard"},{header:t(()=>[j]),default:t(()=>[e("div",F,[e("div",R,[e("div",T,[o(A,{style:{"margin-bottom":"-30px"}},{default:t(()=>[o(y,null,{default:t(()=>[e("div",E,[o(v,{loading:s.loading,"append-inner-icon":"mdi-magnify",density:"compact",label:"Search",variant:"solo","hide-details":"","single-line":"",modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=n=>p.value=n),"onClick:appendInner":s.onClick},null,8,["loading","modelValue","onClick:appendInner"])])]),_:1}),o(y,null,{default:t(()=>[e("div",M,[o(h,{onClick:a[1]||(a[1]=n=>g(!0,"Add",null)),size:"small","prepend-icon":"mdi-plus",color:"green"},{default:t(()=>[u(" Assignatoree ")]),_:1})])]),_:1})]),_:1}),o(V,{class:"m-3"},{default:t(()=>[o(S,null,{bottom:t(()=>[e("div",H,[e("span",J,[u(" Showing "+i(d.assignatorees.from)+" to "+i(d.assignatorees.to)+" out of ",1),e("b",null,i(d.assignatorees.total)+" records",1)]),e("div",K,[o(B,{length:d.assignatorees.last_page,circle:"",onClick:s.getAssignatorees},null,8,["length","onClick"])])])]),default:t(()=>[Y,e("tbody",null,[(r(!0),m(w,null,L(d.assignatorees.data,(n,I)=>(r(),m("tr",{key:n.id,class:"hover:bg-gray-200"},[n?(r(),m(w,{key:0},[e("td",null,i(I+1),1),e("td",null,i(n.name),1),e("td",null,i(n.designation),1),e("td",q,[o(h,{size:"small",onClick:N=>b(n.id),"prepend-icon":"mdi-delete",color:"red",class:"mr-5"},{default:t(()=>[u(" Delete ")]),_:2},1032,["onClick"]),o(h,{onClick:N=>g(!0,"Update",n),size:"small","prepend-icon":"mdi-update",color:"primary"},{default:t(()=>[u(" Update ")]),_:2},1032,["onClick"])])],64)):(r(),m("td",G," No data at the moment"))]))),128))])]),_:1})]),_:1})])])]),o(D,{value:f.value,assignatoree:_.value,action:x.value,onInput:g,onReloadAssignatorees:C},null,8,["value","assignatoree","action"])]),_:1})}}};export{te as default};
