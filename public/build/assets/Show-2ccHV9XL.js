import{A as p}from"./AppLayout-nowU_rAO.js";import c from"./DeleteUserForm-B5pWYdfq.js";import{o,c as l,w as m,a as i,e as r,b as t,f as a,F as u}from"./app-BRGP3ZYi.js";import{S as s}from"./SectionBorder-Cv2ijYQJ.js";import f from"./TwoFactorAuthenticationForm-AbWgg7xT.js";import d from"./UpdatePasswordForm-_S_jIQuv.js";import _ from"./UpdateProfileInformationForm-tPRq-wpT.js";import"./dar-logo-BEVYNDow.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-CfCGtAdF.js";import"./SectionTitle-BnqJmXGN.js";import"./DangerButton-CaV-VQ-D.js";import"./TextInput-DbqPYPfE.js";import"./SecondaryButton-O0qUFPMe.js";import"./PrimaryButton-6h7jk-lS.js";import"./InputLabel-Ya3CcP41.js";import"./ActionMessage-CGqJQ-1e.js";import"./FormSection-CHEfxI9u.js";const h=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),g={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},$={key:0},w={key:1},y={key:2},L={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(n){return(e,k)=>(o(),l(p,{title:"Profile"},{header:m(()=>[h]),default:m(()=>[i("div",null,[i("div",g,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",$,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(d,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":n.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(u,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{L as default};
