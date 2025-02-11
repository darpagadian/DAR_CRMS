import{T as u,o as f,e as _,b as e,u as o,w as d,F as w,Z as g,a,n as V,g as v,l as b}from"./app-BRGP3ZYi.js";import{A as k}from"./AuthenticationCard-DeHbVCiG.js";import{_ as x}from"./AuthenticationCardLogo-Dlv5GfGZ.js";import{_ as l,a as i}from"./TextInput-DbqPYPfE.js";import{_ as m}from"./InputLabel-Ya3CcP41.js";import{_ as h}from"./PrimaryButton-6h7jk-lS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dar-logo-BEVYNDow.js";const P={class:"text-center"},S=a("h1",{class:"text-center"},"RESET PASSWORD",-1),y={class:"mt-4"},C={class:"mt-4"},R={class:"flex items-center justify-end mt-4"},j={__name:"ResetPassword",props:{email:String,token:String},setup(p){const n=p,s=u({token:n.token,email:n.email,password:"",password_confirmation:""}),c=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return($,t)=>(f(),_(w,null,[e(o(g),{title:"Reset Password"}),e(k,{id:"AuthenticationCard"},{default:d(()=>[a("div",P,[e(x)]),S,a("form",{onSubmit:b(c,["prevent"])},[a("div",null,[e(m,{for:"email",value:"Email"}),e(l,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":t[0]||(t[0]=r=>o(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),a("div",y,[e(m,{for:"password",value:"Password"}),e(l,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":t[1]||(t[1]=r=>o(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),a("div",C,[e(m,{for:"password_confirmation",value:"Confirm Password"}),e(l,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=r=>o(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),a("div",R,[e(h,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:d(()=>[v(" Reset Password ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{j as default};
