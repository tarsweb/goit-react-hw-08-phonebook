"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[687],{8849:function(e,a,s){s.r(a),s.d(a,{default:function(){return C}});var r=s(885),l=s(2791),i=s(9434),n=s(9273),t=s(5705),o=s(7103),c=s(4476),d=s(9391),u=s(7205),h=s(8254),m=s(3746),p=s(165),v=s(4281),x=s(9481),f=s(8789),Z=s(3811),w=s(3329),j=o.Ry().shape({email:o.Z_().min(3,"Name must be at least 3 characters").matches("","E-mail is not valid").required("E-mail is required"),password:o.Z_().min(7,"Password must be at least 7 characters").required("Password is required")}),b=function(){var e=(0,i.I0)(),a=(0,f.Fg)(),s=(0,l.useState)(!1),o=(0,r.Z)(s,2),b=o[0],g=o[1],y=(0,t.TA)({initialValues:{email:"",password:""},validationSchema:j,onSubmit:function(a,s){var r=s.resetForm;e((0,n.x4)(a)),g(!1),r()}});return(0,w.jsxs)(c.Z,{as:"form",display:"flex",gridGap:a.space.large,flexDirection:"column",py:a.space.large,autocomplete:"off",onSubmit:y.handleSubmit,children:[(0,w.jsxs)(c.Z,{display:"flex",children:[(0,w.jsx)(v.Z,{sx:{color:"action.active",mr:1,my:.5}}),(0,w.jsx)(d.Z,{label:"E-mail",type:"email",name:"email",value:y.values.email,onChange:y.handleChange,error:!!y.errors.email,helperText:y.touched.email&&y.errors.email?y.errors.email:null,size:"small",sx:{width:"100%"}})]}),(0,w.jsxs)(c.Z,{display:"flex",children:[(0,w.jsx)(x.Z,{sx:{color:"action.active",mr:1,my:.5}}),(0,w.jsx)(d.Z,{label:"Password",type:b?"text":"password",name:"password",value:y.values.password,onChange:y.handleChange,error:!!y.errors.password,helperText:y.touched.password&&y.errors.password?y.errors.password:null,size:"small",sx:{width:"100%"},InputProps:{endAdornment:(0,w.jsx)(h.Z,{position:"end",children:(0,w.jsx)(Z.Z,{"aria-label":"toggle password visibility",onClick:function(){return g(!b)},onMouseDown:function(e){e.preventDefault()},edge:"end",sx:b?{color:"warning.main"}:null,children:b?(0,w.jsx)(p.Z,{}):(0,w.jsx)(m.Z,{})})})}})]}),(0,w.jsx)(u.Z,{variant:"contained",type:"submit",children:" Log In "})]})},g=s(5399),y=s(5450),z=s(7689),C=function(){var e=(0,z.s0)();return(0,w.jsx)(c.Z,{as:"main",display:"flex",mx:"auto",justifyContent:"center",minHeight:"calc(100vh - 80px)",children:(0,w.jsx)(g.Z,{open:!0,onClose:function(){return e("/")},children:(0,w.jsx)(y.Z,{children:(0,w.jsx)(b,{})})})})}},4281:function(e,a,s){var r=s(4836);a.Z=void 0;var l=r(s(5649)),i=s(3329),n=(0,l.default)((0,i.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email");a.Z=n},9481:function(e,a,s){var r=s(4836);a.Z=void 0;var l=r(s(5649)),i=s(3329),n=(0,l.default)((0,i.jsx)("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"Password");a.Z=n},3746:function(e,a,s){var r=s(4836);a.Z=void 0;var l=r(s(5649)),i=s(3329),n=(0,l.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");a.Z=n},165:function(e,a,s){var r=s(4836);a.Z=void 0;var l=r(s(5649)),i=s(3329),n=(0,l.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");a.Z=n}}]);
//# sourceMappingURL=687.4c912119.chunk.js.map