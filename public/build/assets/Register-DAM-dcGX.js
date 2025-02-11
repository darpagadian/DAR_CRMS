import{T as _,o as c,e as f,b as e,u as o,w as m,F as g,Z as w,a as t,g as d,f as h,m as v,n as y,l as V}from"./app-BRGP3ZYi.js";import{A as x}from"./AuthenticationCard-DeHbVCiG.js";import{_ as k}from"./AuthenticationCardLogo-Dlv5GfGZ.js";import{_ as b}from"./Checkbox-CAfB0Ygc.js";import{_ as u,a as l}from"./TextInput-DbqPYPfE.js";import{_ as i}from"./InputLabel-Ya3CcP41.js";import{_ as $}from"./PrimaryButton-6h7jk-lS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dar-logo-BEVYNDow.js";const C={class:"text-center"},P=t("h1",{class:"text-center"},"REGISTER",-1),q={class:"mt-4"},A={class:"mt-4"},N={class:"mt-4"},R={key:0,class:"mt-4"},T={class:"flex items-center"},U={class:"ms-2"},E=["href"],F=["href"],B={class:"flex items-center justify-end mt-4"},K={__name:"Register",setup(S){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(n,a)=>(c(),f(g,null,[e(o(w),{title:"Register"}),e(x,{id:"AuthenticationCard"},{default:m(()=>[t("div",C,[e(k)]),P,t("form",{onSubmit:V(p,["prevent"])},[t("div",null,[e(i,{for:"name",value:"Name"}),e(u,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":a[0]||(a[0]=r=>o(s).name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.name},null,8,["message"])]),t("div",q,[e(i,{for:"email",value:"Email"}),e(u,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":a[1]||(a[1]=r=>o(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),t("div",A,[e(i,{for:"password",value:"Password"}),e(u,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":a[2]||(a[2]=r=>o(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),t("div",N,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(u,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=r=>o(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),n.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",R,[e(i,{for:"terms"},{default:m(()=>[t("div",T,[e(b,{id:"terms",checked:o(s).terms,"onUpdate:checked":a[4]||(a[4]=r=>o(s).terms=r),name:"terms",required:""},null,8,["checked"]),t("div",U,[d(" I agree to the "),t("a",{target:"_blank",href:n.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,E),d(" and "),t("a",{target:"_blank",href:n.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,F)])]),e(l,{class:"mt-2",message:o(s).errors.terms},null,8,["message"])]),_:1})])):h("",!0),t("div",B,[e(o(v),{href:n.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[d(" Already registered? ")]),_:1},8,["href"]),e($,{class:y(["ms-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:m(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{K as default};
