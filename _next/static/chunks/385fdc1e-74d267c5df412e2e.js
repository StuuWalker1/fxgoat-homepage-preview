"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8246],{2816:(e,r,t)=>{t.d(r,{Ci:()=>o2,RC:()=>r3});var o=t(5115),n=t(8797),a=t(7476),i=t(1866),l=t(5293),c=t(2265),d=t(7094),u=t(7292),s=t(4844),p=t(2115),v=t(5155),_=t(4538),k=t(1138),m=t(490),h=t(9863),g=t(2332),f=t(4837),b=t(6033),x=t(7269),y=t(831),w=t(3162),z=t(7650),I=t(4357),j=t(7628),C=t(7149),S=t(2790),E=t(7035),A=t(7071);(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var P=e=>Array.isArray(e)?[...e]:(e=>{if("object"!=typeof e||null===e)return!1;let r=Object.getPrototypeOf(e);return r===Object.prototype||null===r})(e)?(0,s.IA)({},e):{};function L(e,r,t){let o=r.split("."),n=(0,s.IA)({},e),a=n;for(let e=0;e<o.length;e++){let[r,n]=o[e].replace("]","").split("["),i=e===o.length-1;if(void 0!==n){a[r]=Array.isArray(a[r])?[...a[r]]:[];let e=Number(n);if(i){a[r][e]=t;continue}a[r][e]=P(a[r][e]),a=a[r][e];continue}if(i){a[r]=t;continue}a[r]=P(a[r]),a=a[r]}return n}(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var D=/^(data-.*)$/,T=(0,d.d)("Button",{Button:"_Button_oe4qj_1","Button--medium":"_Button--medium_oe4qj_34","Button--large":"_Button--large_oe4qj_62","Button-icon":"_Button-icon_oe4qj_89","Button--primary":"_Button--primary_oe4qj_93","Button--disabled":"_Button--disabled_oe4qj_123","Button--secondary":"_Button--secondary_oe4qj_135","Button--flush":"_Button--flush_oe4qj_171","Button--fullWidth":"_Button--fullWidth_oe4qj_179","Button-spinner":"_Button-spinner_oe4qj_184"}),M=e=>{var{children:r,href:t,onClick:o,variant:n="primary",type:a,disabled:l,tabIndex:c,newTab:d,fullWidth:u,icon:_,size:k="medium",loading:m=!1}=e,h=(0,s.YG)(e,["children","href","onClick","variant","type","disabled","tabIndex","newTab","fullWidth","icon","size","loading"]);let[g,f]=(0,p.useState)(m);(0,p.useEffect)(()=>f(m),[m]);let b=(e=>{let r={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&D.test(t)&&(r[t]=e[t]);return r})(h);return(0,v.jsxs)(t?"a":a?"button":"span",(0,s.ko)((0,s.IA)({className:T({primary:"primary"===n,secondary:"secondary"===n,disabled:l,fullWidth:u,[k]:!0}),onClick:e=>{o&&(f(!0),Promise.resolve(o(e)).then(()=>{f(!1)}))},type:a,disabled:l||g,tabIndex:c,target:d?"_blank":void 0,rel:d?"noreferrer":void 0,href:t},b),{children:[_&&(0,v.jsx)("div",{className:T("icon"),children:_}),r,g&&(0,v.jsx)("div",{className:T("spinner"),children:(0,v.jsx)(i.aH,{size:14})})]}))};(0,s.hY)(),(0,s.hY)();var B={InputWrapper:"_InputWrapper_qyenz_1","Input-label":"_Input-label_qyenz_5","Input-labelIcon":"_Input-labelIcon_qyenz_17","Input-disabledIcon":"_Input-disabledIcon_qyenz_24","Input-input":"_Input-input_qyenz_29","Input-select":"_Input-select_qyenz_61","Input-selectIcon":"_Input-selectIcon_qyenz_71",Input:"_Input_qyenz_1","Input--readOnly":"_Input--readOnly_qyenz_111","Input-radioGroupItems":"_Input-radioGroupItems_qyenz_150","Input-radio":"_Input-radio_qyenz_150","Input-radioInner":"_Input-radioInner_qyenz_179","Input-radioInput":"_Input-radioInput_qyenz_261"},N=(0,d.d)("Input",B),F=({children:e,icon:r,label:t,el:o="label",readOnly:n,className:a})=>{let l=(0,i.JX)("field-readonly");return(0,v.jsxs)(o,{className:a,children:[(0,v.jsxs)("div",{className:N("label"),children:[r?(0,v.jsx)("div",{className:N("labelIcon"),children:r}):(0,v.jsx)(v.Fragment,{}),t,n&&(0,v.jsx)("div",{className:N("disabledIcon"),title:l,children:(0,v.jsx)(i.LM,{size:"12"})})]}),e]})},R=({children:e,icon:r,label:t,el:o="label",readOnly:n})=>{let a=(0,i.CU)(e=>e.overrides),l=(0,p.useMemo)(()=>a.fieldLabel||F,[a]);return t?(0,v.jsx)(l,{label:t,icon:r,className:N({readOnly:n}),readOnly:n,el:o,children:e}):(0,v.jsx)(v.Fragment,{children:e})};(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var O={ArrayField:"_ArrayField_62huh_5","ArrayField--isDraggingFrom":"_ArrayField--isDraggingFrom_62huh_30","ArrayField-addButton":"_ArrayField-addButton_62huh_38","ArrayField--hasItems":"_ArrayField--hasItems_62huh_58","ArrayField-inner":"_ArrayField-inner_62huh_93",ArrayFieldItem:"_ArrayFieldItem_62huh_101","ArrayFieldItem--isDragging":"_ArrayFieldItem--isDragging_62huh_110","ArrayFieldItem--isExpanded":"_ArrayFieldItem--isExpanded_62huh_114","ArrayFieldItem-summary":"_ArrayFieldItem-summary_62huh_132","ArrayFieldItem--noFields":"_ArrayFieldItem--noFields_62huh_167","ArrayField--addDisabled":"_ArrayField--addDisabled_62huh_176","ArrayFieldItem-body":"_ArrayFieldItem-body_62huh_228","ArrayFieldItem-fieldset":"_ArrayFieldItem-fieldset_62huh_237","ArrayFieldItem-rhs":"_ArrayFieldItem-rhs_62huh_250","ArrayFieldItem-actions":"_ArrayFieldItem-actions_62huh_256"};function Y(e,r){let t=(0,p.useContext)(e);if(!t)throw Error("useContextStore must be used inside context");return(0,k.P)(t,(0,_.k)(r))}(0,s.hY)(),(0,s.hY)();var U=function(e){let r=(0,p.createContext)((0,m.y)((0,h.eh)(()=>e)));return{ctx:r,Provider:({children:e,value:t})=>{let[o]=(0,p.useState)(()=>(0,m.y)(()=>t));return(0,v.jsx)(r.Provider,{value:o,children:e})}}}({}),q=()=>(0,p.useContext)(U.ctx);function H(e){let r=(0,p.useContext)(U.ctx);if(!r)throw Error("useContextStore must be used inside context");return(0,k.P)(r,(0,_.k)(e))}(0,s.hY)(),(0,s.hY)();var $=(0,d.d)("DragIcon",{DragIcon:"_DragIcon_5e515_1","DragIcon--disabled":"_DragIcon--disabled_5e515_10"}),V=({isDragDisabled:e})=>(0,v.jsx)("div",{className:$({disabled:e}),children:(0,v.jsx)("svg",{viewBox:"0 0 20 20",width:"12",fill:"currentColor",children:(0,v.jsx)("path",{d:"M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"})})});(0,s.hY)(),(0,s.hY)();var{Delay:Z,Distance:W}=b.il,X=[new Z({value:200,tolerance:10})],J=[new Z({value:200,tolerance:10}),new W({value:5})],G=({other:e=J,mouse:r,touch:t=X}={touch:X,other:J})=>{let[o]=(0,p.useState)(()=>[b.AN.configure({activationConstraints(o,n){var a;let{pointerType:i,target:l}=o;return"mouse"===i&&(0,x.vq)(l)&&(n.handle===l||(null==(a=n.handle)?void 0:a.contains(l)))?r:"touch"===i?t:e}})]);return o};(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var K=(e,r,t,o,n)=>{},Q="increasing";(0,s.hY)();var ee=(e,r)=>{if("dynamic"===e){if(!(Math.abs(r.y)>Math.abs(r.x)))return 0===r.x?null:r.x>0?"right":"left"}else if("x"===e)return 0===r.x?null:r.x>0?"right":"left";return 0===r.y?null:r.y>0?"down":"up"};(0,s.hY)(),(0,s.hY)();var er={current:{x:0,y:0},delta:{x:0,y:0},previous:{x:0,y:0},direction:null};(0,s.hY)();var et=({dragOperation:e,droppable:r})=>{let t=e.position.current;if(!t)return null;let{id:o}=r;return r.shape&&r.shape.containsPoint(t)?{id:o,value:1/w.bR.distance(r.shape.center,t),type:y.Bp.PointerIntersection,priority:y.zY.High}:null};(0,s.hY)();var eo=(0,m.y)(()=>({fallbackEnabled:!1})),en="",ea=(e,r=.05)=>t=>{var o,n,a,i,l;let{dragOperation:c,droppable:d}=t,{position:u}=c,p=null==(o=c.shape)?void 0:o.current,{shape:v}=d;if(!p||!v)return null;let{center:_}=p,{fallbackEnabled:k}=eo.getState(),m=((e,r="dynamic")=>(er.current=e,er.delta={x:e.x-er.previous.x,y:e.y-er.previous.y},er.direction=ee(r,er.delta)||er.direction,(Math.abs(er.delta.x)>10||Math.abs(er.delta.y)>10)&&(er.previous=w.bR.from(e)),er))(u.current,e),h={direction:m.direction},{center:g}=v,f=((e,r,t,o=0)=>{let n=e.boundingRectangle,a=r.center;if("down"===t){let e=o*r.boundingRectangle.height;return n.bottom>=a.y+e}if("up"===t){let e=o*r.boundingRectangle.height;return n.top<a.y-e}if("left"===t){let e=o*r.boundingRectangle.width;return a.x-e>=n.left}let i=o*r.boundingRectangle.width;return n.right-i>=a.x})(p,v,m.direction,r);if((null==(n=c.source)?void 0:n.id)===d.id){let e=((e,r)=>{var t;let{dragOperation:o,droppable:n}=e,{shape:a}=n,{position:i}=o,l=null==(t=o.shape)?void 0:t.current;if(!l||!a)return null;let c=a.center,d=Math.sqrt(Math.pow(c.x-r.x,2)+Math.pow(c.y-r.y,2)),u=Math.sqrt(Math.pow(c.x-i.current.x,2)+Math.pow(c.y-i.current.y,2));return(Q=u===d?Q:u<d?"decreasing":"increasing",K(l.center,c,n.id.toString(),"rebeccapurple"),"decreasing"===Q)?{id:n.id,value:1,type:y.Bp.Collision}:null})(t,m.previous);if(K(_,g,d.id.toString(),"yellow"),e)return(0,s.ko)((0,s.IA)({},e),{priority:y.zY.Highest,data:h})}let b=p.intersectionArea(v),x=b/v.area;if(b&&f){K(_,g,d.id.toString(),"green",m.direction);let e={id:d.id,value:x,priority:y.zY.High,type:y.Bp.Collision},r=en===d.id;return en="",(0,s.ko)((0,s.IA)({},e),{id:r?"flush":e.id,data:h})}if(k&&(null==(a=c.source)?void 0:a.id)!==d.id){let r=v.boundingRectangle.right>p.boundingRectangle.left&&v.boundingRectangle.left<p.boundingRectangle.right,o=v.boundingRectangle.bottom>p.boundingRectangle.top&&v.boundingRectangle.top<p.boundingRectangle.bottom;if("y"===e&&r||o){let r=(e=>{let{dragOperation:r,droppable:t}=e,{shape:o,position:n}=r;if(!t.shape)return null;let a=o?w.M_.from(o.current.boundingRectangle).corners:void 0,i=w.M_.from(t.shape.boundingRectangle).corners.reduce((e,r,t)=>{var o;return e+w.bR.distance(w.bR.from(r),null!=(o=null==a?void 0:a[t])?o:n.current)},0);return{id:t.id,value:1/(i/4),type:y.Bp.Collision,priority:y.zY.Normal}})(t);if(r){let t=ee(e,{x:p.center.x-((null==(i=d.shape)?void 0:i.center.x)||0),y:p.center.y-((null==(l=d.shape)?void 0:l.center.y)||0)});return(h.direction=t,b)?(K(_,g,d.id.toString(),"red",t||""),en=d.id,(0,s.ko)((0,s.IA)({},r),{priority:y.zY.Low,data:h})):(K(_,g,d.id.toString(),"orange",t||""),(0,s.ko)((0,s.IA)({},r),{priority:y.zY.Lowest,data:h}))}}}return K(_,g,d.id.toString(),"hotpink"),null};(0,s.hY)();var ei=(e,r="ltr")=>"up"===e||"ltr"===r&&"left"===e||"rtl"===r&&"right"===e?"before":"after",el=({position:e,sourceIndex:r,targetIndex:t,isSameZone:o})=>{let n=t;return o&&n>=r&&(n-=1),"after"===e&&(n+=1),n},ec=({children:e,onDragStart:r,onDragEnd:t,onMove:o})=>{let n=G({mouse:[new b.il.Distance({value:5})]});return(0,v.jsx)(g.XU,{sensors:n,onDragStart:e=>{var t,o;return r(null!=(o=null==(t=e.operation.source)?void 0:t.id.toString())?o:"")},onDragOver:(e,r)=>{var t;e.preventDefault();let{operation:n}=e,{source:a,target:i}=n;if(!a||!i)return;let l=a.data.index,c=i.data.index,d=null==(t=r.collisionObserver.collisions[0])?void 0:t.data;l!==c&&a.id!==i.id&&o({source:l,target:el({position:ei(null==d?void 0:d.direction),sourceIndex:l,targetIndex:c,isSameZone:!0})})},onDragEnd:()=>{setTimeout(()=>{t()},250)},children:e})},ed=({id:e,index:r,disabled:t,children:o,type:n="item"})=>{let{ref:a,isDragging:i,isDropping:l,handleRef:c}=(0,f.gl)({id:e,type:n,index:r,disabled:t,data:{index:r},collisionDetector:ea("y")});return o({isDragging:i,isDropping:l,ref:a,handleRef:c})};(0,s.hY)();var eu=(0,p.createContext)({}),es=()=>{let e=(0,p.useContext)(eu);return(0,s.ko)((0,s.IA)({},e),{readOnlyFields:e.readOnlyFields||{}})},ep=({children:e,name:r,subName:t,wildcardName:o=r,readOnlyFields:n})=>{let a=`${r}.${t}`,i=`${o}.${t}`,l=(0,p.useMemo)(()=>Object.keys(n).reduce((e,t)=>{if(t.indexOf(a)>-1||t.indexOf(i)>-1){let a=new RegExp(`^(${r}|${o}).`.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\./g,"\\.").replace(/\*/g,"\\*")),i=t.replace(a,"");return(0,s.ko)((0,s.IA)({},e),{[i]:n[t]})}return e},{}),[r,t,o,n]);return(0,v.jsx)(eu.Provider,{value:{readOnlyFields:l,localName:t},children:e})};(0,s.hY)();var ev=(e,r)=>r.split(".").reduce((e,r)=>{if(!e)return;let[t,o]=r.replace("]","").split("["),n=e[t];return o&&n?n[parseInt(o)]:n},e);(0,s.hY)();var e_=(0,p.memo)(({field:e,id:r,index:t,name:o,subName:n,localName:a,onChange:i,forceReadOnly:l})=>{let c=void 0!==t?`${o}[${t}]`:o,d=o?`${c}.${n}`:n,u=void 0!==t?`${a}[${t}]`:null!=a?a:n,p=void 0!==t?`${a}[*]`:a,_=`${u}.${n}`,k=`${p}.${n}`,{readOnlyFields:m}=es(),h=l||(void 0!==m[d]?m[_]:m[k]),g=e.label||n;return(0,v.jsx)(ep,{name:u,wildcardName:p,subName:n,readOnlyFields:m,children:(0,v.jsx)(eH,{name:d,label:g,id:r,readOnly:h,field:(0,s.ko)((0,s.IA)({},e),{label:g}),onChange:(e,r)=>{i(e,r,n)}})})}),ek=(0,d.d)("ArrayField",O),em=(0,d.d)("ArrayFieldItem",O),eh=(0,p.memo)(({index:e,originalIndex:r,field:t,name:o})=>{let n=H(r=>ev(r,`${[o]}[${e}]`)),a=(0,i.JX)("field-arrayitem-summary",{index:r});return(0,p.useMemo)(()=>n&&t.getItemSummary?t.getItemSummary(n,e):a,[n,t,r,e,a])}),eg=(0,p.memo)(({id:e,arrayId:r,index:t,dragIndex:o,originalIndex:n,field:a,onChange:l,onToggleExpand:c,readOnly:d,actions:u,name:s,localName:_})=>{let k=(0,i.CU)(t=>{var o;return(null==(o=t.state.ui.arrayState[r])?void 0:o.openId)===e}),m=(0,i.CU)(e=>e.permissions.getPermissions({item:e.selectedItem}).edit),h=(0,p.useMemo)(()=>!!a.arrayFields&&Object.values(a.arrayFields).some(e=>"slot"!==e.type&&!1!==e.visible),[a.arrayFields]);return(0,v.jsx)(ed,{id:e,index:o,disabled:d,children:({isDragging:r,ref:o,handleRef:i})=>(0,v.jsxs)("div",{ref:o,className:em({isExpanded:k&&h,isDragging:r,noFields:!h}),children:[(0,v.jsxs)("div",{ref:i,onClick:t=>{!r&&(t.preventDefault(),t.stopPropagation(),h&&c(e,k))},className:em("summary"),children:[(0,v.jsx)(eh,{index:t,originalIndex:n,field:a,name:s}),(0,v.jsxs)("div",{className:em("rhs"),children:[!d&&(0,v.jsx)("div",{className:em("actions"),children:u}),(0,v.jsx)("div",{children:(0,v.jsx)(V,{})})]})]}),(0,v.jsx)("div",{className:em("body"),children:k&&h&&(0,v.jsx)("fieldset",{className:em("fieldset"),children:Object.keys(a.arrayFields).map(r=>{let o=a.arrayFields[r];return(0,v.jsx)(e_,{id:`${e}_${r}`,name:s,index:t,subName:r,localName:_,field:o,onChange:l,forceReadOnly:!m},`${e}_${r}_${t}`)})})})]})})});(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var ef=(e,r=!0)=>H(t=>r?ev(t,e):void 0);(0,s.hY)();var eb=(e,r,{tracked:t=!0,fallback:o}={})=>{let n=ef(e,t),a=(0,i.CU)(r=>r.state.ui.field.focus===e),[l,c]=(0,p.useState)(n),d=(0,p.useCallback)((e,...t)=>{c(e),r(e,...t)},[r]);return((0,p.useEffect)(()=>{t&&(a||c(n))},[t,a,n]),t)?[void 0!==o&&null==l?o:l,d]:[void 0,r]},ex=(0,d.d)("Input",B),ey=({field:e,onChange:r,readOnly:t,id:o,name:n=o,label:a,labelIcon:l,Label:c})=>{let[d,u]=eb(n,r,{fallback:""});return(0,v.jsx)(c,{label:a||n,icon:l||(0,v.jsxs)(v.Fragment,{children:["text"===e.type&&(0,v.jsx)(i.ZU,{size:16}),"number"===e.type&&(0,v.jsx)(i.Vw,{size:16})]}),readOnly:t,children:(0,v.jsx)("input",{className:ex("input"),autoComplete:"off",type:e.type,title:a||n,name:n,value:d,onChange:r=>{if("number"===e.type){let t=Number(r.currentTarget.value);(void 0===e.min||!(t<e.min))&&(void 0!==e.max&&t>e.max||u(t))}else u(r.currentTarget.value)},readOnly:t,tabIndex:t?-1:void 0,id:o,min:"number"===e.type?e.min:void 0,max:"number"===e.type?e.max:void 0,placeholder:"text"===e.type||"number"===e.type?e.placeholder:void 0,step:"number"===e.type?e.step:void 0})})};(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var ew={"ExternalInput-actions":"_ExternalInput-actions_143vl_1","ExternalInput-button":"_ExternalInput-button_143vl_5","ExternalInput--dataSelected":"_ExternalInput--dataSelected_143vl_34","ExternalInput--readOnly":"_ExternalInput--readOnly_143vl_41","ExternalInput-detachButton":"_ExternalInput-detachButton_143vl_48",ExternalInput:"_ExternalInput_143vl_1",ExternalInputModal:"_ExternalInputModal_143vl_118","ExternalInputModal-grid":"_ExternalInputModal-grid_143vl_128","ExternalInputModal--filtersToggled":"_ExternalInputModal--filtersToggled_143vl_139","ExternalInputModal-filters":"_ExternalInputModal-filters_143vl_144","ExternalInputModal-masthead":"_ExternalInputModal-masthead_143vl_164","ExternalInputModal-tableWrapper":"_ExternalInputModal-tableWrapper_143vl_173","ExternalInputModal-table":"_ExternalInputModal-table_143vl_173","ExternalInputModal-thead":"_ExternalInputModal-thead_143vl_189","ExternalInputModal-th":"_ExternalInputModal-th_143vl_189","ExternalInputModal-td":"_ExternalInputModal-td_143vl_204","ExternalInputModal-tr":"_ExternalInputModal-tr_143vl_210","ExternalInputModal-tbody":"_ExternalInputModal-tbody_143vl_217","ExternalInputModal--hasData":"_ExternalInputModal--hasData_143vl_244","ExternalInputModal-loadingBanner":"_ExternalInputModal-loadingBanner_143vl_248","ExternalInputModal--isLoading":"_ExternalInputModal--isLoading_143vl_265","ExternalInputModal-searchForm":"_ExternalInputModal-searchForm_143vl_269","ExternalInputModal-search":"_ExternalInputModal-search_143vl_269","ExternalInputModal-searchIcon":"_ExternalInputModal-searchIcon_143vl_306","ExternalInputModal-searchIconText":"_ExternalInputModal-searchIconText_143vl_333","ExternalInputModal-searchInput":"_ExternalInputModal-searchInput_143vl_343","ExternalInputModal-searchActions":"_ExternalInputModal-searchActions_143vl_358","ExternalInputModal-searchActionIcon":"_ExternalInputModal-searchActionIcon_143vl_371","ExternalInputModal-footerContainer":"_ExternalInputModal-footerContainer_143vl_375","ExternalInputModal-footer":"_ExternalInputModal-footer_143vl_375","ExternalInputModal-field":"_ExternalInputModal-field_143vl_388"};(0,s.hY)(),(0,s.hY)();var ez=(0,d.d)("Modal",{Modal:"_Modal_g5xob_1","Modal--isOpen":"_Modal--isOpen_g5xob_15","Modal-inner":"_Modal-inner_g5xob_19"}),eI=({children:e,onClose:r,isOpen:t})=>{let[o,n]=(0,p.useState)(null);return((0,p.useEffect)(()=>{n(document.getElementById("puck-portal-root"))},[]),o)?(0,z.createPortal)((0,v.jsx)("div",{className:ez({isOpen:t}),onClick:r,children:(0,v.jsx)("div",{className:ez("inner"),onClick:e=>e.stopPropagation(),children:e})}),o):(0,v.jsx)("div",{})};(0,s.hY)(),(0,s.hY)();var ej=(0,d.d)("Heading",{Heading:"_Heading_97eh4_1","Heading--xxxxl":"_Heading--xxxxl_97eh4_12","Heading--xxxl":"_Heading--xxxl_97eh4_18","Heading--xxl":"_Heading--xxl_97eh4_22","Heading--xl":"_Heading--xl_97eh4_26","Heading--l":"_Heading--l_97eh4_30","Heading--m":"_Heading--m_97eh4_34","Heading--s":"_Heading--s_97eh4_38","Heading--xs":"_Heading--xs_97eh4_42"}),eC=({children:e,rank:r,size:t="m"})=>{let o=r?`h${r}`:"span";return(0,v.jsx)(o,{className:ej({[t]:!0}),children:e})};(0,s.hY)();var eS=(0,d.d)("ExternalInput",ew),eE=(0,d.d)("ExternalInputModal",ew),eA=({count:e})=>{let r=(0,i.JX)("field-external-result-singular",{count:e}),t=(0,i.JX)("field-external-result-plural",{count:e});return(0,v.jsx)("span",{className:eE("footer"),children:1===e?r:t})},eP={},eL=({field:e,onChange:r,value:t=null,name:o,id:n,readOnly:a})=>{var l;let{mapProp:c=e=>e,mapRow:d=e=>e,filterFields:u}=e||{},{enabled:_}=null!=(l=e.cache)?l:{enabled:!0},[k,m]=(0,p.useState)([]),[h,g]=(0,p.useState)(!1),[f,b]=(0,p.useState)(!0),x=!!u,[y,w]=(0,p.useState)(e.initialFilters||{}),[z,I]=(0,p.useState)(x),j=(0,p.useMemo)(()=>k.map(d),[k]),C=(0,p.useMemo)(()=>{let e=new Set;for(let r of j)for(let t of Object.keys(r))("string"==typeof r[t]||"number"==typeof r[t]||(0,p.isValidElement)(r[t]))&&e.add(t);return Array.from(e)},[j]),[S,E]=(0,p.useState)(e.initialQuery||""),A=(0,p.useCallback)((r,t)=>(0,s.BU)(null,null,function*(){let o;b(!0);let a=`${n}-${r}-${JSON.stringify(t)}`;(o=_&&eP[a]?eP[a]:yield e.fetchList({query:r,filters:t}))&&(m(o),b(!1),_&&(eP[a]=o))}),[n,e]),P=(0,p.useCallback)(r=>e.renderFooter?e.renderFooter(r):(0,v.jsx)(eA,{count:r.items.length}),[e.renderFooter]);(0,p.useEffect)(()=>{A(S,y)},[]);let L=(0,i.JX)("field-external-item"),D=(0,i.JX)("field-external-search"),T=(0,i.JX)("field-external-togglefilters"),B=(0,i.JX)("field-external-selectdata");return(0,v.jsxs)("div",{className:eS({dataSelected:!!t,modalVisible:h,readOnly:a}),id:n,children:[(0,v.jsxs)("div",{className:eS("actions"),children:[(0,v.jsx)("button",{type:"button",onClick:()=>g(!0),className:eS("button"),disabled:a,children:t?e.getItemSummary?e.getItemSummary(t):L:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.N_,{size:"16"}),(0,v.jsx)("span",{children:e.placeholder})]})}),t&&(0,v.jsx)("button",{type:"button",className:eS("detachButton"),onClick:()=>{r(null)},disabled:a,children:(0,v.jsx)(i.eV,{size:16})})]}),(0,v.jsx)(eI,{onClose:()=>g(!1),isOpen:h,children:(0,v.jsxs)("form",{className:eE({isLoading:f,loaded:!f,hasData:j.length>0,filtersToggled:z}),onSubmit:e=>{e.preventDefault(),e.stopPropagation(),A(S,y)},children:[(0,v.jsx)("div",{className:eE("masthead"),children:e.showSearch?(0,v.jsxs)("div",{className:eE("searchForm"),children:[(0,v.jsxs)("label",{className:eE("search"),children:[(0,v.jsx)("span",{className:eE("searchIconText"),children:D}),(0,v.jsx)("div",{className:eE("searchIcon"),children:(0,v.jsx)(i.vj,{size:"18"})}),(0,v.jsx)("input",{className:eE("searchInput"),name:"q",type:"search",placeholder:e.placeholder,onChange:e=>{E(e.currentTarget.value)},autoComplete:"off",value:S})]}),(0,v.jsxs)("div",{className:eE("searchActions"),children:[(0,v.jsx)(M,{type:"submit",loading:f,fullWidth:!0,children:D}),x&&(0,v.jsx)("div",{className:eE("searchActionIcon"),children:(0,v.jsx)(i.K0,{type:"button",title:T,onClick:e=>{e.preventDefault(),e.stopPropagation(),I(!z)},children:(0,v.jsx)(i.lC,{size:20})})})]})]}):(0,v.jsx)(eC,{rank:"2",size:"xs",children:e.placeholder||B})}),(0,v.jsxs)("div",{className:eE("grid"),children:[x&&(0,v.jsx)("div",{className:eE("filters"),children:x&&Object.keys(u).map(e=>{let r=u[e];return(0,v.jsx)("div",{className:eE("field"),children:(0,v.jsx)(F,{label:r.label||e,children:(0,v.jsx)(eV,{field:r,id:`external_field_${e}_filter`,value:y[e],onChange:r=>{w(t=>{let o=(0,s.ko)((0,s.IA)({},t),{[e]:r});return A(S,o),o})}})})},e)})}),(0,v.jsxs)("div",{className:eE("tableWrapper"),children:[(0,v.jsxs)("table",{className:eE("table"),children:[(0,v.jsx)("thead",{className:eE("thead"),children:(0,v.jsx)("tr",{className:eE("tr"),children:C.map(e=>(0,v.jsx)("th",{className:eE("th"),style:{textAlign:"left"},children:e},e))})}),(0,v.jsx)("tbody",{className:eE("tbody"),children:j.map((e,t)=>(0,v.jsx)("tr",{style:{whiteSpace:"nowrap"},className:eE("tr"),onClick:()=>{r(c(k[t])),g(!1)},children:C.map(r=>(0,v.jsx)("td",{className:eE("td"),children:e[r]},r))},t))})]}),(0,v.jsx)("div",{className:eE("loadingBanner"),children:(0,v.jsx)(i.aH,{size:24})})]})]}),(0,v.jsx)("div",{className:eE("footerContainer"),children:(0,v.jsx)(P,{items:j})})]})})]})};(0,s.hY)();var eD=(0,d.d)("Input",B);(0,s.hY)();var eT=(0,d.d)("Input",B);(0,s.hY)();var eM=(0,d.d)("Input",B);(0,s.hY)(),(0,s.hY)();var eB=(0,p.memo)(e=>{var r;return(0,v.jsx)(o.I,(0,s.ko)((0,s.IA)({},e),{editor:null,menu:(0,v.jsx)(a.s,{field:e.field,editor:null,editorState:null,readOnly:null!=(r=e.readOnly)&&r}),children:(0,v.jsx)("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:e.content},contentEditable:!0})}))});eB.displayName="EditorFallback";var eN=(0,p.lazy)(()=>Promise.all([t.e(277),t.e(5004),t.e(3713),t.e(7060),t.e(1415),t.e(1539)]).then(t.bind(t,1539)).then(e=>({default:e.Editor})));(0,s.hY)(),(0,s.hY)();var eF=(0,d.d)("ObjectField",{ObjectField:"_ObjectField_c5reb_1","ObjectField-fieldset":"_ObjectField-fieldset_c5reb_10"});(0,s.hY)();var eR=()=>{if(void 0!==p.useId)return p.useId();let[e]=(0,p.useState)((0,l.$C)());return e},eO=(0,d.d)("Input",B),eY=(0,d.d)("InputWrapper",B),eU={array:({field:e,onChange:r,id:t,name:o=t,label:n,labelIcon:a,readOnly:c,Label:d=e=>(0,v.jsx)("div",(0,s.IA)({},e))})=>{let _=(0,i.CU)(e=>e.setUi),k=(0,i.sL)(),m=q(),{localName:h=o}=es(),g=()=>{var e;return null!=(e=ev(m.getState(),o))?e:[]},f=(0,p.useCallback)(()=>{var e;let{state:r}=k.getState(),o=r.ui.arrayState[t];return(null==(e=null==o?void 0:o.items)?void 0:e.length)?o:{items:Array.from(g()||[]).map((e,r)=>({_originalIndex:r,_currentIndex:r,_arrayId:`${t}-${r}`})),openId:""}},[k,t,g,o]),b=H(()=>g().length),x=(0,p.useMemo)(f,[f]),y=(0,i.CU)(e=>{let r=e.state.ui.arrayState[t];return null!=r?r:x}),w=(0,i.sL)(),z=(0,p.useCallback)(e=>{let r=w.getState().state;return{arrayState:(0,s.ko)((0,s.IA)({},r.ui.arrayState),{[t]:(0,s.IA)((0,s.IA)({},f()),e)})}},[w]),I=(0,p.useCallback)(()=>f().items.reduce((e,r)=>r._originalIndex>e?r._originalIndex:e,-1),[]),j=(0,p.useCallback)(e=>{let r=I(),o=f(),n=Array.from(e||[]).map((e,n)=>{var a,i,l;let c=o.items[n],d={_originalIndex:null!=(a=null==c?void 0:c._originalIndex)?a:r+1,_currentIndex:null!=(i=null==c?void 0:c._currentIndex)?i:n,_arrayId:(null==(l=o.items[n])?void 0:l._arrayId)||`${t}-${r+1}`};return d._originalIndex>r&&(r=d._originalIndex),d});return(0,s.ko)((0,s.IA)({},o),{items:n})},[]),[C,S]=(0,p.useState)(""),E=!!C,A=(0,p.useRef)([]);(0,p.useEffect)(()=>{A.current=g()},[]);let P=(0,p.useCallback)(r=>{if("array"!==e.type||!e.arrayFields)return;let t=w.getState().config;return(0,u.Ur)({value:r,fields:e.arrayFields,mappers:{slot:({value:e})=>e.map(e=>(0,l.fq)(e,t,!0))},config:t})},[w,e]),D=(0,p.useCallback)(()=>{let e=f(),r=e.items.map((e,r)=>(0,s.ko)((0,s.IA)({},e),{_currentIndex:r})),o=w.getState().state;_({arrayState:(0,s.ko)((0,s.IA)({},o.ui.arrayState),{[t]:(0,s.ko)((0,s.IA)({},e),{items:r})})},!1)},[]),T=(0,p.useCallback)(e=>{_(z(j(e)),!1),r(e)},[j,_,z,r]);(0,p.useEffect)(()=>{_(z(j(g())),!1)},[b]);let M=(0,i.JX)("field-arrayitem-duplicate"),B=(0,i.JX)("field-arrayitem-delete");if("array"!==e.type||!e.arrayFields)return null;let N=void 0!==e.max&&(null==y?void 0:y.items.length)>=e.max||c;return(0,v.jsx)(d,{label:n||o,icon:a||(0,v.jsx)(i.B8,{size:16}),el:"div",readOnly:c,children:(0,v.jsx)(ec,{onDragStart:e=>{A.current=g(),S(e),D()},onDragEnd:()=>{S(""),r(A.current);let e=m.getState();m.setState(L(e,o,A.current)),D()},onMove:e=>{let r=f();if(r.items[e.source]._arrayId!==C)return;let o=(0,i.FQ)(A.current,e.source,e.target),n=(0,i.FQ)(r.items,e.source,e.target),a=w.getState().state;_({arrayState:(0,s.ko)((0,s.IA)({},a.ui.arrayState),{[t]:(0,s.ko)((0,s.IA)({},r),{items:n})})},!1),A.current=o},children:(0,v.jsxs)("div",{className:ek({hasItems:b>0,addDisabled:N}),children:[y.items.length>0&&(0,v.jsx)("div",{className:ek("inner"),"data-dnd-container":!0,children:y.items.map((n,a)=>{let{_arrayId:l=`${t}-${a}`,_originalIndex:d=a,_currentIndex:u=a}=n;return(0,v.jsx)(eg,{index:u,dragIndex:a,originalIndex:d,arrayId:t,id:l,readOnly:c,field:e,name:o,localName:h,onChange:(e,t,o)=>{let n=g(),l=Array.from(n||[])[a]||{};r((0,i.HC)(n,a,(0,s.ko)((0,s.IA)({},l),{[o]:e})),t)},onToggleExpand:(e,r)=>{r?_(z({openId:""})):_(z({openId:e}))},actions:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:em("action"),children:(0,v.jsx)(i.K0,{type:"button",disabled:!!N,onClick:e=>{e.stopPropagation();let r=[...g()||[]],t=P(r[a]);r.splice(a,0,t),T(r)},title:M,children:(0,v.jsx)(i.QR,{size:16})})}),(0,v.jsx)("div",{className:em("action"),children:(0,v.jsx)(i.K0,{type:"button",disabled:void 0!==e.min&&e.min>=y.items.length,onClick:e=>{e.stopPropagation();let r=[...g()||[]];r.splice(a,1),T(r)},title:B,children:(0,v.jsx)(i.lM,{size:16})})})]})},l)})}),!N&&(0,v.jsx)("button",{type:"button",className:ek("addButton"),onClick:()=>{var r;if(E)return;let t=g()||[],o="function"==typeof e.defaultItemProps?e.defaultItemProps(t.length):null!=(r=e.defaultItemProps)?r:{};T([...t,(0,u.lH)(P(o),e.arrayFields)])},children:(0,v.jsx)(i.FW,{size:21})})]})})})},external:({field:e,onChange:r,id:t,name:o=t,label:n,labelIcon:a,Label:l,readOnly:c})=>{var d,u,_;let k=ef(o),m=(0,i.JX)("field-external-selectdata");return((0,p.useEffect)(()=>{e.adaptor&&console.error("Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release.")},[]),"external"!==e.type)?null:(0,v.jsx)(l,{label:n||o,icon:a||(0,v.jsx)(i.N_,{size:16}),el:"div",children:(0,v.jsx)(eL,{name:o,field:(0,s.ko)((0,s.IA)({},e),{placeholder:(null==(d=e.adaptor)?void 0:d.name)?`Select from ${e.adaptor.name}`:e.placeholder||m,mapProp:(null==(u=e.adaptor)?void 0:u.mapProp)||e.mapProp,mapRow:e.mapRow,fetchList:(null==(_=e.adaptor)?void 0:_.fetchList)?()=>(0,s.BU)(null,null,function*(){return yield e.adaptor.fetchList(e.adaptorParams)}):e.fetchList}),onChange:r,value:k,id:t,readOnly:c})})},object:({field:e,onChange:r,id:t,name:o=t,label:n,labelIcon:a,Label:l,readOnly:c})=>{let{localName:d=o}=es(),u=q(),p=(0,i.CU)(e=>e.permissions.getPermissions({item:e.selectedItem}).edit);return"object"===e.type&&e.objectFields?(0,v.jsx)(l,{label:n||o,icon:a||(0,v.jsx)(i.Yb,{size:16}),el:"div",readOnly:c,children:(0,v.jsx)("div",{className:eF(),children:(0,v.jsx)("fieldset",{className:eF("fieldset"),children:Object.keys(e.objectFields).map(n=>{let a=e.objectFields[n],i=`${d}.${n}`;return(0,v.jsx)(e_,{id:`${t}_${n}`,name:o,subName:n,localName:d,field:a,forceReadOnly:!p,onChange:(e,t,n)=>{let a=(()=>{var e;return null!=(e=ev(u.getState(),o))?e:{}})();a[n]!==e&&r((0,s.ko)((0,s.IA)({},a),{[n]:e}),t)}},i)})})})}):null},select:({field:e,onChange:r,label:t,labelIcon:o,Label:n,id:a,name:l=a,readOnly:c})=>{let d=ef(l);return"select"===e.type&&e.options?(0,v.jsx)(n,{label:t||l,icon:o||(0,v.jsx)(i.yQ,{size:16}),readOnly:c,children:(0,v.jsxs)("div",{className:eT("select"),children:[(0,v.jsx)("select",{id:a,title:t||l,className:eT("input"),disabled:c,onChange:e=>{r(JSON.parse(e.target.value).value)},value:JSON.stringify({value:d}),children:e.options.map(e=>(0,v.jsx)("option",{label:e.label,value:JSON.stringify({value:e.value})},e.label+JSON.stringify(e.value)))}),(0,v.jsx)(i.yQ,{size:18,className:eT("selectIcon")})]})}):null},textarea:({field:e,onChange:r,readOnly:t,id:o,name:n=o,label:a,labelIcon:l,Label:c})=>{let[d,u]=eb(n,r,{fallback:""});return(0,v.jsx)(c,{label:a||n,icon:l||(0,v.jsx)(i.ZU,{size:16}),readOnly:t,children:(0,v.jsx)("textarea",{id:o,className:eM("input"),autoComplete:"off",name:n,value:d,onChange:e=>u(e.currentTarget.value),readOnly:t,tabIndex:t?-1:void 0,rows:5,placeholder:"textarea"===e.type?e.placeholder:void 0})})},radio:({field:e,onChange:r,readOnly:t,id:o,name:n=o,label:a,labelIcon:l,Label:c})=>{let d=ef(n);return"radio"===e.type&&e.options?(0,v.jsx)(c,{icon:l||(0,v.jsx)(i.Dc,{size:16}),label:a||n,readOnly:t,el:"div",children:(0,v.jsx)("div",{className:eD("radioGroupItems"),id:o,children:e.options.map(e=>{var o;return(0,v.jsxs)("label",{className:eD("radio"),children:[(0,v.jsx)("input",{type:"radio",className:eD("radioInput"),value:JSON.stringify({value:e.value}),name:n,onChange:e=>{r(JSON.parse(e.target.value).value)},disabled:t,checked:d===e.value}),(0,v.jsx)("div",{className:eD("radioInner"),children:e.label||(null==(o=e.value)?void 0:o.toString())})]},e.label+e.value)})})}):null},text:ey,number:ey,richtext:({onChange:e,readOnly:r=!1,id:t,name:o=t,label:n,labelIcon:a,Label:l,field:c})=>{let d={onChange:e,content:ef(o),readOnly:r,field:c,id:t,name:o};return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(l,{label:n||o,icon:a||(0,v.jsx)(i.ZU,{size:16}),readOnly:r,el:"div",children:(0,v.jsx)(p.Suspense,{fallback:(0,v.jsx)(eB,(0,s.IA)({},d)),children:(0,v.jsx)(eN,(0,s.IA)({},d))})})})}};function eq(e){var r,t,o;let n=(0,i.CU)(e=>e.dispatch),a=(0,i.CU)(e=>e.overrides),l=(0,i.CU)((0,_.k)(e=>{var r;return null==(r=e.selectedItem)?void 0:r.readOnly})),c=(0,p.useContext)(eu),{id:d,Label:u=R}=e,k=e.field,m=k.label,h=k.labelIcon,g=eR(),f=d||g,b=(0,p.useMemo)(()=>{var e,r,t,o,n,i,l,c,d,u;return(0,s.ko)((0,s.IA)({},a.fieldTypes),{custom:null==(e=a.fieldTypes)?void 0:e.custom,array:(null==(r=a.fieldTypes)?void 0:r.array)||eU.array,external:(null==(t=a.fieldTypes)?void 0:t.external)||eU.external,object:(null==(o=a.fieldTypes)?void 0:o.object)||eU.object,select:(null==(n=a.fieldTypes)?void 0:n.select)||eU.select,textarea:(null==(i=a.fieldTypes)?void 0:i.textarea)||eU.textarea,radio:(null==(l=a.fieldTypes)?void 0:l.radio)||eU.radio,text:(null==(c=a.fieldTypes)?void 0:c.text)||eU.text,number:(null==(d=a.fieldTypes)?void 0:d.number)||eU.number,richtext:(null==(u=a.fieldTypes)?void 0:u.richtext)||eU.richtext})},[a]),x="custom"===k.type||!!(null==(r=a.fieldTypes)?void 0:r[k.type]),y=null!=(t=e.name)?t:f,w=q(),z=(0,p.useMemo)(()=>x?(r,t)=>{var o;null==(o=e.onChange)||o.call(e,r,t),w.setState(L(w.getState(),y,r))}:e.onChange,[x,e.onChange,y,w]),[I,j]=eb(y,z,{tracked:x}),C=(0,p.useMemo)(()=>(0,s.ko)((0,s.IA)({},e),{field:k,label:m,labelIcon:h,Label:u,id:f,value:I,onChange:j}),[e,k,m,h,u,f,I,j]),S=(0,p.useCallback)(e=>{C.name&&("INPUT"===e.target.nodeName||"TEXTAREA"===e.target.nodeName)&&(e.stopPropagation(),n({type:"setUi",ui:{field:{focus:C.name}}}))},[C.name]),E=(0,p.useCallback)(e=>{"name"in e.target&&n({type:"setUi",ui:{field:{focus:null}}})},[]),A=(0,p.useMemo)(()=>"custom"!==k.type&&"slot"!==k.type?eU[k.type]:e=>null,[k.type]),P="custom"===k.type?k.key:void 0,D=(0,p.useMemo)(()=>"custom"!==k.type||b[k.type]?"slot"!==k.type?b[k.type]:void 0:k.render?k.render:null,[k.type,P,b]),{visible:T=!0}=e.field;if(!T||"slot"===k.type)return null;if(!D)throw Error(`Field type for ${k.type} did not exist.`);return(0,v.jsx)(eu.Provider,{value:{readOnlyFields:c.readOnlyFields||l||{},localName:null!=(o=c.localName)?o:C.name},children:(0,v.jsx)("div",{className:eY(),onFocus:S,onBlur:E,onClick:e=>{e.stopPropagation()},children:(0,v.jsx)(D,(0,s.ko)((0,s.IA)({},C),{children:(0,v.jsx)(A,(0,s.IA)({},C))}))})})}function eH(e){return(0,v.jsx)(eq,(0,s.IA)({},e))}function e$(e){var{value:r}=e,t=(0,s.YG)(e,["value"]);let o=(0,p.useMemo)(()=>e=>(0,v.jsx)("div",(0,s.ko)((0,s.IA)({},e),{className:eO({readOnly:t.readOnly})})),[t.readOnly]),n=q(),a=(0,p.useCallback)(e=>{t.id&&(n.setState({[t.id]:e}),t.onChange(e))},[n,t.onChange,t.id]);return(0,p.useEffect)(()=>{t.id&&n.setState({[t.id]:r})},[t.id,r,n]),(0,v.jsx)(eq,(0,s.ko)((0,s.IA)({},t),{onChange:a,Label:o}))}function eV(e){let r=eR();return"slot"===e.field.type?null:(0,v.jsx)(U.Provider,{value:{[r]:e.value},children:(0,v.jsx)(e$,(0,s.ko)((0,s.IA)({},e),{id:r}))})}function eZ(e){let r={x:0,y:0},t=e;for(;t&&t!==document.documentElement;){let e=t.parentElement;e&&(r.x+=e.scrollLeft,r.y+=e.scrollTop),t=e}return r}(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var eW=(0,p.createContext)(null),eX=(0,p.createContext)((0,m.y)(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:()=>{},unregisterRootVirtualizer:()=>{},scrollToComponent:()=>!1}))),eJ=({children:e,store:r})=>(0,v.jsx)(eX.Provider,{value:r,children:e}),eG=({children:e,value:r})=>{let t=(0,i.CU)(e=>e.dispatch),o=(0,p.useCallback)(e=>{t({type:"registerZone",zone:e})},[t]),n=(0,p.useMemo)(()=>(0,s.IA)({registerZone:o},r),[r]);return(0,v.jsx)(v.Fragment,{children:n&&(0,v.jsx)(eW.Provider,{value:n,children:e})})};(0,s.hY)();var eK=(e,r=[])=>{let t=(0,i.sL)();return(0,p.useCallback)(()=>{let r=()=>{},o=t=>{t?e(!1):(setTimeout(()=>{e(!0)},0),r&&r())},n=t.getState().state.ui.isDragging;return o(n),n&&(r=t.subscribe(e=>e.state.ui.isDragging,e=>{o(e)})),r},[t,...r])};(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var eQ=()=>{if("undefined"==typeof window)return;let e=document.querySelector("#preview-frame");return(null==e?void 0:e.tagName)==="IFRAME"?e.contentDocument||document:(null==e?void 0:e.ownerDocument)||document};(0,s.hY)(),(0,s.hY)();var e0=e=>"undefined"!=typeof CSS&&"function"==typeof CSS.escape?CSS.escape(e):e,e1=e=>`[data-puck-component="${e0(e)}"]`,e2=e=>`[data-puck-dropzone="${e0(e)}"]`,e4={duration:250,easing:"ease"},e3=e=>{var r,t;return null!=(t=null==(r=e.defaultView)?void 0:r.matchMedia("(prefers-reduced-motion: reduce)").matches)&&t},e6=(e,{zones:r,itemId:t,targetZone:o,getExpectedOrder:n,initialExpectedOrder:a=[]},i)=>{let l=new Set(a),c=0,d=()=>{var a;let u=e.querySelector(e2(o)),s=n(),p=null!=t?t:s.find(e=>!l.has(e)),v=p&&null!=(a=null==u?void 0:u.querySelector(`:scope > ${e1(p)}:not([data-dnd-dragging]):not([data-dnd-placeholder])`))?a:null,_=u?Array.from(u.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(e=>e.getAttribute("data-puck-component")):[],k=new Set(_),m=s.filter(e=>k.has(e)),h=_.length===m.length&&_.every((e,r)=>e===m[r]),g=r.every(r=>r===o||!p||!e.querySelector(`${e2(r)} > ${e1(p)}`));if((!v||!h||!g)&&c<10){c++,requestAnimationFrame(d);return}i(v)};requestAnimationFrame(d)};(0,s.hY)();var e5=(e,r)=>{var t,o;return null!=(o=null==(t=e.indexes.zones[r])?void 0:t.contentIds)?o:[]},e8=(e,r)=>{let t=(0,i.sL)();return(0,p.useCallback)(o=>{var n;let a=Object.values(null!=(n=e.getState().previewIndex)?n:{}),i=r?a.find(e=>(null==e?void 0:e.props.id)===r&&!e.ghost):a.find(e=>(null==e?void 0:e.type)==="insert"),l=r?(null==i?void 0:i.linePlaceholder)||(null==i?void 0:i.type)==="insert":!!i;return((e,r)=>{var t,o,n;let a=null==(t=e.source.manager)?void 0:t.dragOperation;return!(null!=(o=null==a?void 0:a.canceled)&&o||(null==(n=null==a?void 0:a.target)?void 0:n.type)==="void")&&r?void(({feedbackElement:e,itemId:r,targetZone:t,getExpectedOrder:o})=>{var n;let a=e.ownerDocument,i=null!=(n=eQ())?n:a;if(e3(a))return;let l=e.getBoundingClientRect(),c=o(),d=e.cloneNode(!0);d.removeAttribute("id"),d.removeAttribute("popover"),d.removeAttribute("data-puck-component"),d.removeAttribute("data-puck-dnd"),d.removeAttribute("data-dnd-dragging"),d.setAttribute("inert","true"),Object.assign(d.style,{position:"fixed",left:`${l.left}px`,top:`${l.top}px`,width:`${l.width}px`,height:`${l.height}px`,margin:"0",overflow:"hidden",pointerEvents:"none",transform:"none",transition:"none",translate:"none",zIndex:"2147483647"});let u=i.createElement("style");u.textContent=`
    ${r?`${e1(r)} { visibility: hidden !important; }`:""}
    [data-puck-overlay] { opacity: 0 !important; }
  `,i.head.appendChild(u),a.body.appendChild(d);let p=()=>{d.remove(),u.remove()};e6(i,{zones:[t],itemId:r,targetZone:t,getExpectedOrder:o,initialExpectedOrder:c},e=>{if(!e)return void p();let t=e.getAttribute("data-puck-component");!r&&t&&(u.textContent+=`
          ${e1(t)} { visibility: hidden !important; }
        `);let o=((e,r)=>{var t,o;let n=e.getBoundingClientRect();if(e.ownerDocument===r)return n;let a=((e,r)=>{var t,o;let n={x:0,y:0,scaleX:1,scaleY:1},a=null==(t=e.ownerDocument.defaultView)?void 0:t.frameElement;for(;a&&a!==r;){let e=a.getBoundingClientRect(),r=a.offsetWidth?e.width/a.offsetWidth:1,t=a.offsetHeight?e.height/a.offsetHeight:1;n.x+=e.left,n.y+=e.top,n.scaleX*=r,n.scaleY*=t,a=null==(o=a.ownerDocument.defaultView)?void 0:o.frameElement}return n})(e,null!=(o=null==(t=r.defaultView)?void 0:t.frameElement)?o:null);return{left:n.left*a.scaleX+a.x,top:n.top*a.scaleY+a.y,width:n.width*a.scaleX,height:n.height*a.scaleY}})(e,a);d.animate({left:[`${l.left}px`,`${o.left}px`],top:[`${l.top}px`,`${o.top}px`],width:[`${l.width}px`,`${o.width}px`],height:[`${l.height}px`,`${o.height}px`]},(0,s.ko)((0,s.IA)({},e4),{fill:"forwards"})).finished.catch(()=>void 0).then(p)})})((0,s.ko)((0,s.IA)({},r),{feedbackElement:e.feedbackElement})):(({element:e,feedbackElement:r,placeholder:t,translate:o})=>{var n;if(e3(r.ownerDocument))return;let a=null!=t?t:e,i={frameTransform:r.ownerDocument===a.ownerDocument?null:void 0},l=new x.yS(r,i),c=new x.yS(a,i),d=null!=(n=(0,x.g)((0,x.qt)(r).translate))?n:o,u={x:d.x-(l.center.x-c.center.x),y:d.y-(l.center.y-c.center.y)};return r.setAttribute("data-dnd-dropping",""),r.animate({translate:[`${d.x}px ${d.y}px 0`,`${u.x}px ${u.y}px 0`]},e4).finished.catch(()=>void 0).then(()=>{r.removeAttribute("data-dnd-dropping")})})(e)})(o,i&&l?{itemId:"move"===i.type?r:void 0,targetZone:i.zone,getExpectedOrder:()=>e5(t.getState().state,i.zone)}:void 0)},[t,e,r])};function e9(e,r){e.forEach(e=>{"function"==typeof e?e(r):e&&"object"==typeof e&&"current"in e&&(e.current=r)})}(0,s.hY)();var e7=(0,d.d)("DraggableComponent",{DraggableComponent:"_DraggableComponent_1627v_1","DraggableComponent-overlayWrapper":"_DraggableComponent-overlayWrapper_1627v_6","DraggableComponent-overlay":"_DraggableComponent-overlay_1627v_6","DraggableComponent-loadingOverlay":"_DraggableComponent-loadingOverlay_1627v_38","DraggableComponent--hover":"_DraggableComponent--hover_1627v_54","DraggableComponent--isSelected":"_DraggableComponent--isSelected_1627v_72","DraggableComponent-actionsOverlay":"_DraggableComponent-actionsOverlay_1627v_89","DraggableComponent-actions":"_DraggableComponent-actions_1627v_89","DraggableComponent-actionsAction":"_DraggableComponent-actionsAction_1627v_111"}),re=({label:e,children:r,parentAction:t})=>(0,v.jsxs)(i.E7,{children:[(0,v.jsxs)(i.E7.Group,{children:[t,e&&(0,v.jsx)(i.E7.Label,{label:e})]}),(0,v.jsx)(i.E7.Group,{children:r})]}),rr=({children:e})=>(0,v.jsx)(v.Fragment,{children:e}),rt=({children:e,depth:r,componentType:t,id:n,index:a,zoneCompound:c,isLoading:d=!1,isSelected:u=!1,debug:k,label:m,autoDragAxis:h,userDragAxis:g,inDroppableZone:x=!0,itemRef:y})=>{let w=(0,i.CU)(e=>{var r;return(null==(r=e.selectedItem)?void 0:r.props.id)===n?e.zoomConfig.zoom:1}),I=(0,i.CU)(e=>e._experimentalFullScreenCanvas),j=(0,i.CU)(e=>e.overrides),C=(0,i.CU)(e=>e.dispatch),S=(0,i.CU)(e=>e.iframe),E=(0,p.useRef)(0),A=(0,p.useContext)(eW),[P,L]=(0,p.useState)({}),D=(0,p.useCallback)((e,r)=>{var t;null==(t=null==A?void 0:A.registerLocalZone)||t.call(A,e,r),L(t=>(0,s.ko)((0,s.IA)({},t),{[e]:r}))},[L]),T=(0,p.useCallback)(e=>{var r;null==(r=null==A?void 0:A.unregisterLocalZone)||r.call(A,e),L(r=>{let t=(0,s.IA)({},r);return delete t[e],t})},[L]),M=Object.values(P).filter(Boolean).length>0,B=(0,i.CU)((0,_.k)(e=>{var r;return null==(r=e.state.indexes.nodes[n])?void 0:r.path})),N=(0,i.CU)((0,_.k)(e=>{let r=(0,l.Gq)({index:a,zone:c},e.state);return e.permissions.getPermissions({item:r})})),F=(0,p.useContext)(eX),R=(0,i.sL)(),[O,U]=(0,p.useState)(g||h),q=(0,p.useMemo)(()=>ea(O),[O]),H=e8(F,n),{ref:$,isDragging:V,sortable:Z}=(0,f.gl)({id:n,index:a,group:c,type:"component",data:{areaId:null==A?void 0:A.areaId,zone:c,index:a,componentType:t,containsActiveZone:M,depth:r,path:B||[],inDroppableZone:x},collisionPriority:r,collisionDetector:q,transition:{duration:200,easing:"cubic-bezier(0.2, 0, 0, 1)"},plugins:e=>[...e,b.Gb.configure({feedback:"clone",dropAnimation:H})]});(0,p.useEffect)(()=>{let e=F.getState().enabledIndex[c];Z.droppable.disabled=!e,Z.draggable.disabled=!N.drag;let r=F.subscribe(e=>{Z.droppable.disabled=!e.enabledIndex[c]});return X.current&&!N.drag?(X.current.setAttribute("data-puck-disabled",""),()=>{var e;null==(e=X.current)||e.removeAttribute("data-puck-disabled"),r()}):r},[N.drag,c]);let[,W]=(0,p.useState)(0),X=(0,p.useRef)(null),J=(0,p.useCallback)(e=>{$(e),X.current!==e&&(X.current=e,W(e=>e+1),y&&e9([y],e))},[y,$]),[G,K]=(0,p.useState)();(0,p.useEffect)(()=>{var e,r,t;K(S.enabled?null==(e=X.current)?void 0:e.ownerDocument.body:null!=(t=null==(r=X.current)?void 0:r.closest("[data-puck-preview]"))?t:document.body)},[S.enabled]);let Q=(0,p.useCallback)(()=>{var e,r;if(!X.current)return;let t=X.current,o=t.getBoundingClientRect(),n=S.enabled?null:t.closest("[data-puck-preview]"),a=(()=>{let e=t;for(;e&&e!==document.documentElement;){if("fixed"===getComputedStyle(e).position)return!0;e=e.parentElement}return!1})(),i=null==n?void 0:n.getBoundingClientRect(),l=n?eZ(n):{x:0,y:0},c=a?{x:0,y:0}:eZ(t),d=a?{x:0,y:0}:{x:c.x-l.x-(null!=(e=null==i?void 0:i.left)?e:0),y:c.y-l.y-(null!=(r=null==i?void 0:i.top)?r:0)};return{left:`${o.left+d.x}px`,top:`${o.top+d.y}px`,height:`${o.height}px`,width:`${o.width}px`,position:a?"fixed":void 0}},[S.enabled]),[ee,er]=(0,p.useState)(),et=(0,p.useRef)(null),eo=(0,p.useRef)(null),en=(0,p.useCallback)(()=>{er(Q()),y&&e9([y],X.current)},[Q,y]),ei=(0,p.useCallback)(()=>{null==eo.current&&(eo.current=requestAnimationFrame(()=>{eo.current=null,en()}))},[en]);(0,p.useEffect)(()=>()=>{null!=eo.current&&(cancelAnimationFrame(eo.current),eo.current=null)},[]),(0,p.useEffect)(()=>{if(X.current){let e=new ResizeObserver(()=>{ei()});return e.observe(X.current),()=>{e.disconnect()}}},[ei,y]);let el=(0,i.CU)(e=>e.nodes.registerNode),ec=(0,i.CU)(e=>e.nodes.unregisterNode),ed=(0,p.useCallback)(()=>{ey(!1)},[]),eu=(0,p.useCallback)(()=>{ey(!0)},[]),es=(0,p.useRef)({sync:()=>null,hideOverlay:()=>null,showOverlay:()=>null});(0,p.useLayoutEffect)(()=>{es.current.sync=en,es.current.hideOverlay=ed,es.current.showOverlay=eu},[ed,eu,en]),(0,p.useEffect)(()=>(el(n,es.current),()=>{ec(n)}),[n,el,ec]);let ep=(0,p.useMemo)(()=>j.actionBar||re,[j.actionBar]),ev=(0,p.useMemo)(()=>j.componentOverlay||rr,[j.componentOverlay]),e_=(0,p.useCallback)(e=>{F.getState().draggedItem||(e.target.closest("[data-puck-overlay-portal]")||e.stopPropagation(),I?C({type:"setUi",ui:{itemSelector:u?null:{index:a,zone:c}}}):C({type:"setUi",ui:{itemSelector:{index:a,zone:c}}}))},[a,c,n,u,I]),ek=(0,p.useCallback)(()=>{let{nodes:e,zones:r}=R.getState().state.indexes,t=e[n],o=(null==t?void 0:t.parentId)?e[null==t?void 0:t.parentId]:null;if(!o||!t.parentId)return;let a=`${o.parentId}:${o.zone}`,i=r[a].contentIds.indexOf(t.parentId);C({type:"setUi",ui:{itemSelector:{zone:a,index:i}}})},[A,B]),em=(0,p.useCallback)(()=>{C({type:"duplicate",sourceIndex:a,sourceZone:c})},[a,c]),eh=(0,p.useCallback)(()=>{C({type:"remove",index:a,zone:c})},[a,c]),[eg,ef]=(0,p.useState)(!1),eb=Y(eX,e=>e.hoveringComponent===n);(0,p.useEffect)(()=>{if(!X.current)return;let e=X.current,r=e=>{F.getState().draggedItem?V?ef(!0):ef(!1):ef(!0),e.stopPropagation()},t=e=>{e.stopPropagation(),ef(!1)};return e.setAttribute("data-puck-component",n),e.setAttribute("data-puck-dnd",n),e.style.position="relative",e.addEventListener("click",e_),e.addEventListener("mouseover",r),e.addEventListener("mouseout",t),()=>{e.removeAttribute("data-puck-component"),e.removeAttribute("data-puck-dnd"),e.removeEventListener("click",e_),e.removeEventListener("mouseover",r),e.removeEventListener("mouseout",t)}},[X.current,e_,M,c,n,V,x]);let[ex,ey]=(0,p.useState)(!1),[ew,ez]=(0,p.useState)(!0),[eI,ej]=(0,p.useTransition)();(0,p.useEffect)(()=>{ej(()=>{eg||eb||u?(ei(),ey(!0),eS(!1)):ey(!1)})},[eg,eb,u,S]);let[eC,eS]=(0,p.useState)(!1),eE=eK(e=>{e?ej(()=>{en(),ez(!0)}):ez(!1)});(0,p.useEffect)(()=>{V&&eS(!0)},[V]),(0,p.useEffect)(()=>{if(eC)return eE()},[eC,eE]),(0,p.useEffect)(()=>{if(!ew||!(u||V))return;let e=X.current;if(!e)return;let r=e.ownerDocument,t=r.defaultView;if(!t)return;E.current=0,ei();let o=()=>ei(),n=()=>ei();r.addEventListener("scroll",o,!0),t.addEventListener("resize",n);let a=0,i=e=>{if(e-E.current>=100){E.current=e;let r=X.current;if(r){let e=r.getBoundingClientRect(),t=et.current;(!t||Math.abs(e.x-t.x)>.5||Math.abs(e.y-t.y)>.5||Math.abs(e.width-t.width)>.5||Math.abs(e.height-t.height)>.5)&&(et.current=e,ei())}}a=requestAnimationFrame(i)};return a=requestAnimationFrame(i),()=>{r.removeEventListener("scroll",o,!0),t.removeEventListener("resize",n),cancelAnimationFrame(a)}},[ew,u,V,ei]);let eA=(0,p.useCallback)(e=>{if(e&&e.ownerDocument.defaultView){let r=e.getBoundingClientRect(),t=r.x<0,o=r.y;t&&(e.style.transformOrigin="left top",e.style.left="0px"),o<0&&(e.style.top="12px",t||(e.style.transformOrigin="right top"))}},[w]),eP=(0,p.useRef)(null);(0,p.useEffect)(()=>{eA(eP.current)},[eP.current,eA]),(0,p.useEffect)(()=>{if(g)return void U(g);if(X.current){let e=window.getComputedStyle(X.current);if("inline"===e.display||"inline-block"===e.display)return void U("x")}U(h)},[X,g,h]);let eL=(0,i.JX)("action-selectparent"),eD=(0,i.JX)("action-duplicate"),eT=(0,i.JX)("action-delete"),eM=(0,p.useMemo)(()=>(null==A?void 0:A.areaId)&&(null==A?void 0:A.areaId)!=="root"&&(0,v.jsx)(i.E7.Action,{onClick:ek,label:eL,children:(0,v.jsx)(i.AB,{size:16})}),[null==A?void 0:A.areaId,eL]),eB=(0,p.useMemo)(()=>(0,s.ko)((0,s.IA)({},A),{areaId:n,zoneCompound:c,index:a,depth:r+1,registerLocalZone:D,unregisterLocalZone:T}),[A,n,c,a,r,D,T]),eN=(0,i.CU)(e=>{var r;return(null==(r=e.currentRichText)?void 0:r.inlineComponentId)===n?e.currentRichText:null}),eF=N.duplicate||N.delete;return(0,v.jsxs)(eG,{value:eB,children:[ew&&ex&&(0,z.createPortal)((0,v.jsxs)("div",{className:e7({isSelected:u,isDragging:V,hover:eg||eb}),style:(0,s.IA)({},ee),"data-puck-overlay":!0,children:[k,d&&(0,v.jsx)("div",{className:e7("loadingOverlay"),children:(0,v.jsx)(i.aH,{})}),(0,v.jsx)("div",{className:e7("actionsOverlay"),style:{top:52/w},children:(0,v.jsx)("div",{className:e7("actions"),style:{transform:`scale(${1/w}`,top:-44/w,right:0,paddingLeft:8,paddingRight:8},ref:eP,children:(0,v.jsxs)(ep,{parentAction:eM,label:m,children:[eN&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.e,{editor:eN.editor,field:eN.field,inline:!0,readOnly:!1}),eF&&(0,v.jsx)(i.E7.Separator,{})]}),N.duplicate&&(0,v.jsx)(i.E7.Action,{onClick:em,label:eD,children:(0,v.jsx)(i.QR,{className:e7("actionsAction")})}),N.delete&&(0,v.jsx)(i.E7.Action,{onClick:eh,label:eT,children:(0,v.jsx)(i.lM,{className:e7("actionsAction")})})]})})}),(0,v.jsx)("div",{className:e7("overlayWrapper"),children:(0,v.jsx)(ev,{componentId:n,componentType:t,hover:eg,isSelected:u,children:(0,v.jsx)("div",{className:e7("overlay")})})})]}),G||document.body),e(J)]})};(0,s.hY)();var ro={DropZone:"_DropZone_wc2ks_1","DropZone--hasChildren":"_DropZone--hasChildren_wc2ks_11","DropZone--isAreaSelected":"_DropZone--isAreaSelected_wc2ks_24","DropZone--hoveringOverArea":"_DropZone--hoveringOverArea_wc2ks_25","DropZone--isRootZone":"_DropZone--isRootZone_wc2ks_25","DropZone-item":"_DropZone-item_wc2ks_39","DropZone-linePlaceholder":"_DropZone-linePlaceholder_wc2ks_43","DropZone-hitbox":"_DropZone-hitbox_wc2ks_55","DropZone--isEnabled":"_DropZone--isEnabled_wc2ks_63","DropZone--isAnimating":"_DropZone--isAnimating_wc2ks_74"};(0,s.hY)();var rn=(e,{allow:r,disallow:t})=>{if(!e)return!0;let o=new Set(r),n=new Set(t);return t?(n.has(e)&&o.has(e)&&n.delete(e),!n.has(e)):!r||o.has(e)};(0,s.hY)(),(0,s.hY)();var ra={Drawer:"_Drawer_1n90m_1","Drawer-draggable":"_Drawer-draggable_1n90m_8","Drawer-draggableBg":"_Drawer-draggableBg_1n90m_12","DrawerItem-draggable":"_DrawerItem-draggable_1n90m_22","DrawerItem--disabled":"_DrawerItem--disabled_1n90m_38",DrawerItem:"_DrawerItem_1n90m_22","Drawer--isDraggingFrom":"_Drawer--isDraggingFrom_1n90m_48","DrawerItem-name":"_DrawerItem-name_1n90m_72"};(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var ri=class{constructor(e,r){var t;this.scaleFactor=1,this.frameEl=null,this.frameRect=null,this.target=e,this.original=r,this.frameEl=document.querySelector("iframe#preview-frame"),this.frameEl&&(this.frameRect=this.frameEl.getBoundingClientRect(),this.scaleFactor=this.frameRect.width/((null==(t=this.frameEl.contentWindow)?void 0:t.innerWidth)||1))}get x(){return this.original.x}get y(){return this.original.y}get global(){return document!==this.target.ownerDocument&&this.frameRect?{x:this.x*this.scaleFactor+this.frameRect.left,y:this.y*this.scaleFactor+this.frameRect.top}:this.original}get frame(){return document===this.target.ownerDocument&&this.frameRect?{x:(this.x-this.frameRect.left)/this.scaleFactor,y:(this.y-this.frameRect.top)/this.scaleFactor}:this.original}};(0,s.hY)();var rl="undefined"!=typeof PointerEvent?PointerEvent:Event,rc=class extends rl{constructor(e,r){super(e,r),this._originalTarget=null,this.originalTarget=r.originalTarget}set originalTarget(e){this._originalTarget=e}get originalTarget(){return this._originalTarget}};(0,s.hY)(),(0,s.hY)();var rd=(e,{isDraggingBetweenSlots:r=!1,isNewComponent:t=!1}={})=>"auto"===e?r||t?"static":"fluid":e;(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var ru=(e,r)=>{let t=e.indexes.nodes[r];if(!t)return;let o=`${t.parentId}:${t.zone}`,n=e.indexes.zones[o].contentIds.indexOf(r);return{zone:o,index:n}};function rs(e,r,t="force",o=!1,n){return(0,s.BU)(this,null,function*(){let a=yield r().resolveComponentData(e,t);if(!a.didChange&&!o)return;let i=ru(r().state,a.node.props.id);if(!i)return void console.warn(`Warning: Could not find component with id "${e.props.id}" to resolve its data. Component may have been removed or the id is invalid.`);r().dispatch({type:"replace",data:(0,u.Rn)(a.node),destinationIndex:i.index,destinationZone:i.zone,ui:n})})}(0,s.hY)();var rp=(e,r,t,o)=>(0,s.BU)(null,null,function*(){var n,a,i;(0,o.getState().dispatch)({type:"move",sourceIndex:r.index,sourceZone:null!=(n=r.zone)?n:u.Ln,destinationIndex:t.index,destinationZone:null!=(a=t.zone)?a:u.Ln,recordHistory:!1});let l=null==(i=o.getState().state.indexes.nodes[e])?void 0:i.data;l&&(yield rs(l,o.getState,"move"))});function rv(e){return e?function e(r){return r?r.getAttribute("dir")||e(r.parentElement):"ltr"}(e):"ltr"}(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var r_=(e,r,t)=>Math.max(r,Math.min(t,e)),rk=(e,r)=>{let t=r_(e.x,Math.min(r.x1,r.x2),Math.max(r.x1,r.x2)),o=r_(e.y,Math.min(r.y1,r.y2),Math.max(r.y1,r.y2));return Math.hypot(e.x-t,e.y-o)};(0,s.hY)();var rm=(e,r,t=r.getComputedStyle(e))=>{let o=t.display,n="rtl"===rv(e);if("flex"===o||"inline-flex"===o){let e=t.flexDirection;if(e.startsWith("row")){let r="row-reverse"===e;return{axis:"x",reversed:n?!r:r}}return{axis:"y",reversed:"column-reverse"===e}}return("grid"===o||"inline-grid"===o)&&(t.gridAutoFlow.startsWith("column")||(e=>{let r=e.replace(/\[[^\]]*\]/g," ").trim();return r&&"none"!==r?r.split(/\s+/).length:0})(t.gridTemplateColumns)>1)?{axis:"x",reversed:n}:{axis:"y",reversed:!1}},rh=({axis:e,reversed:r})=>{let t="x"===e,o=r?-1:1;return{horizontal:t,reversed:r,forward:o,start:e=>t?r?e.right:e.left:r?e.bottom:e.top,end:e=>t?r?e.left:e.right:r?e.top:e.bottom,isBefore:(e,r)=>o>0?e<=r:e>=r}},rg=(e,r,t)=>{var o,n;let a=e.ownerDocument.defaultView;if(!a)return null;let i=new Map(t.map((e,r)=>[e,r])),l=Array.from(e.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(e=>{var r,t;return{index:null!=(t=i.get(null!=(r=e.getAttribute("data-puck-component"))?r:""))?t:-1,el:e}}).filter(e=>-1!==e.index).sort((e,r)=>e.index-r.index).map(({index:e,el:r})=>({index:e,rect:r.getBoundingClientRect()}));if(0===l.length)return 0;let{horizontal:c,reversed:d,start:u,end:s}=rh(rm(e,a)),p=(e,r,t,o=[t])=>{let n=1/0,a=-1/0;for(let e of o)n=Math.min(n,c?e.top:e.left),a=Math.max(a,c?e.bottom:e.right);return c?{index:e,x1:r,x2:r,y1:t.top,y2:t.bottom,laneStart:n,laneEnd:a}:{index:e,x1:t.left,x2:t.right,y1:r,y2:r,laneStart:n,laneEnd:a}},v=[],_=(e,r,t)=>p(e,"before"===t?u(r):s(r),r);for(let e=0;e<=l.length;e++){let r=l[e-1],t=l[e];if(t)if(r)if(t.index-r.index>1)v.push(_(r.index+1,r.rect,"after")),v.push(_(t.index,t.rect,"before"));else if(d?s(r.rect)<u(t.rect):s(r.rect)>u(t.rect))v.push(_(t.index,t.rect,"before")),v.push(_(t.index,r.rect,"after"));else{let e=(s(r.rect)+u(t.rect))/2;v.push(p(t.index,e,t.rect,[r.rect,t.rect]))}else v.push(_(t.index,t.rect,"before"));else v.push(_(r.index+1,r.rect,"after"))}let k=c?r.y:r.x,m=null,h=1/0,g=null,f=1/0;for(let e of v){let t=rk(r,e);t<h&&(h=t,m=e),k>=e.laneStart&&k<=e.laneEnd&&t<f&&(f=t,g=e)}return null!=(n=null==(o=null!=g?g:m)?void 0:o.index)?n:null};(0,s.hY)();var rf=(e,r)=>{var t;let o=document.querySelector("iframe#preview-frame");if(!o||e.ownerDocument!==o.contentDocument)return r;let n=o.getBoundingClientRect(),a=n.width/((null==(t=o.contentWindow)?void 0:t.innerWidth)||1);return a>0?{x:(r.x-n.left)/a,y:(r.y-n.top)/a}:r},rb=(0,p.createContext)({dragListeners:{}}),rx=({children:e,disableAutoScroll:r,behavior:t="auto"})=>{let o=(0,i.CU)(e=>e.dispatch),n=(0,i.CU)(e=>e.instanceId),a=(0,i.sL)(),c=(0,p.useRef)(null),d=(e=>{let r=(0,p.useRef)(null);return(0,p.useCallback)(e=>{eo.setState({fallbackEnabled:!1});let t=(0,l.$C)();r.current=t,setTimeout(()=>{r.current===t&&(eo.setState({fallbackEnabled:!0}),e.collisionObserver.forceUpdate(!0))},100)},[])})(0),[_]=(0,p.useState)(()=>{let e=new Map;return(0,m.y)(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:(r,t)=>{e.set(r,t)},unregisterRootVirtualizer:r=>{e.delete(r)},scrollToComponent:r=>{let t=Array.from(e.values());if(t.length>0)for(let e of t){let t=e.resolveIndex(r);t<0||e.virtualizer.scrollToIndex(t,{behavior:"auto",align:"auto"})}else{let e=eQ(),t=null==e?void 0:e.querySelector(e1(r));null==t||t.scrollIntoView({behavior:"smooth"})}}}))}),k=(0,p.useCallback)(e=>{let{zoneDepthIndex:r={},areaDepthIndex:t={}}=_.getState()||{},o=Object.keys(r).length>0,n=Object.keys(t).length>0,a=!1,i=!1;return e.zone&&!r[e.zone]?a=!0:!e.zone&&o&&(a=!0),e.area&&!t[e.area]?i=!0:!e.area&&n&&(i=!0),{zoneChanged:a,areaChanged:i}},[_]),h=(0,p.useCallback)((e,r)=>{let{zoneChanged:t,areaChanged:o}=k(e);(t||o)&&(_.setState({zoneDepthIndex:e.zone?{[e.zone]:!0}:{},areaDepthIndex:e.area?{[e.area]:!0}:{}}),d(r),setTimeout(()=>{r.collisionObserver.forceUpdate(!0)},50),c.current=null)},[_]),f=(0,I.YQ)(h,100),x=()=>{f.cancel(),c.current=null};(0,p.useEffect)(()=>{},[]);let[w]=(0,p.useState)(()=>[...r?b.FS.plugins.filter(e=>e!==b.ys):b.FS.plugins,(({onChange:e},r)=>class extends y.k_{constructor(t,o){if(super(t),"undefined"==typeof window)return;this.registerEffect(()=>{let o=function(e,r){let t,o=()=>performance.now(),n=0;return function(...r){let a=o(),i=this;a-n>=50?(e.apply(i,r),n=a):(null==t||t(),t=function(e,r){let t=setTimeout(e,r);return()=>clearTimeout(t)}(()=>{e.apply(i,r),n=o()},50-(a-n)))}}(o=>{let n=new ri(o instanceof rc&&o.originalTarget||o.target,{x:o.clientX,y:o.clientY});document.elementsFromPoint(n.global.x,n.global.y).some(e=>e.id===r)&&e(((e,r)=>{var t;let o=((e,r)=>{let t=[],o=e.target.ownerDocument.elementsFromPoint(e.x,e.y),n=o.find(e=>e.getAttribute("data-puck-preview")),a=o.find(e=>e.getAttribute("data-puck-drawer"));if(a&&(o=[a]),n){let r=eQ();r&&(o=r.elementsFromPoint(e.frame.x,e.frame.y))}if(o)for(let n=0;n<o.length;n++){let a=o[n],i=a.getAttribute("data-puck-dropzone"),l=a.getAttribute("data-puck-dnd"),c=a.hasAttribute("data-puck-dnd-void");if((i||l)&&!c){let r=a.getBoundingClientRect(),t={left:r.left+6,right:r.right-6,top:r.top+6,bottom:r.bottom-6};if(e.frame.x<t.left||e.frame.x>t.right||e.frame.y>t.bottom||e.frame.y<t.top)continue}if(i){let e=r.registry.droppables.get(i);e&&t.push(e)}if(l){let e=r.registry.droppables.get(l);e&&t.push(e)}}return t})(e,r);if(o.length>0){let e=o.sort((e,r)=>{let t=e.data,o=r.data;return t.depth>o.depth?1:o.depth>t.depth?-1:0}),n=r.dragOperation.source,a=e.findIndex(e=>e.id===(null==n?void 0:n.id)),i=null==n?void 0:n.id,l=[...e];i&&a>-1&&l.splice(a,1),(l=l.filter(e=>{let r=e.data;if(i&&a>-1&&r.path.indexOf(i)>-1)return!1;if("dropzone"===e.type){let r=e.data;if(!r.isDroppableTarget||r.areaId===i)return!1}else if("component"===e.type&&!e.data.inDroppableZone)return!1;return!0})).reverse();let c=l[0];if(!c)return{zone:null,area:null};let d=c.data,u="containsActiveZone"in d;return{zone:(e=>{let r=null==e?void 0:e.id;if(!e)return null;if("component"===e.type){let t=e.data;r=t.containsActiveZone?null:t.zone}else if("void"===e.type)return"void";return r})(c),area:u&&d.containsActiveZone?l[0].id:null==(t=l[0])?void 0:t.data.areaId}}return{zone:u.Ln,area:u.ho}})(n,t),t)},50),n=e=>{o(e)};return document.body.addEventListener("pointermove",n,{capture:!0}),()=>{document.body.removeEventListener("pointermove",n,{capture:!0})}})}})({onChange:(e,r)=>{let t=_.getState(),{zoneChanged:o,areaChanged:n}=k(e),a=r.dragOperation.status.dragging;if(n||o){let r={},t={};e.zone&&(r={[e.zone]:!0}),e.area&&(t={[e.area]:!0}),_.setState({nextZoneDepthIndex:r,nextAreaDepthIndex:t})}if("void"!==e.zone&&(null==t?void 0:t.zoneDepthIndex.void))return void h(e,r);if(n){if(a){let t=c.current;t&&t.area===e.area&&t.zone===e.zone||(x(),f(e,r),c.current=e)}else x(),h(e,r);return}o&&h(e,r),x()}},n)]),z=G(),[C,S]=(0,p.useState)({}),E=(0,p.useRef)(null),A=(0,p.useRef)(void 0),{getTargetIndex:P,setActive:L,startScrollTracking:D,stopScrollTracking:T,update:M}=(e=>{let r=(0,i.sL)(),t=(0,p.useRef)(null),o=(0,p.useCallback)(e=>{var r;let t=null==(r=eQ())?void 0:r.querySelector("[data-puck-entry]");e?null==t||t.setAttribute("data-puck-line-drag","true"):null==t||t.removeAttribute("data-puck-line-drag")},[]),n=(0,p.useCallback)((e,t)=>{var o;let n=null==(o=eQ())?void 0:o.querySelector(e2(e));if(!n)return null;let a=rf(n,t.dragOperation.position.current);return rg(n,a,e5(r.getState().state,e))},[r]),a=(0,p.useCallback)(t=>{var o;let{previewIndex:n={}}=e.getState(),a=Object.values(n).find(e=>null==e?void 0:e.linePlaceholder);if(!a)return;let i=null==(o=eQ())?void 0:o.querySelector(e2(a.zone));if(!i)return;let l=rf(i,t.dragOperation.position.current),c=i.getBoundingClientRect();if(!(l.x>=c.left&&l.x<=c.right&&l.y>=c.top&&l.y<=c.bottom))return;let d=rg(i,l,e5(r.getState().state,a.zone));null!==d&&d!==a.index&&e.setState({previewIndex:(0,s.ko)((0,s.IA)({},n),{[a.zone]:(0,s.ko)((0,s.IA)({},a),{index:d})})})},[r,e]),l=(0,p.useCallback)(()=>{var e;null==(e=t.current)||e.call(t),t.current=null},[]),c=(0,p.useCallback)(e=>{l();let r=eQ();if(!r)return;let o=null,n=()=>{null===o&&(o=requestAnimationFrame(()=>{o=null,a(e)}))};r.addEventListener("scroll",n,{capture:!0,passive:!0}),t.current=()=>{null!==o&&cancelAnimationFrame(o),r.removeEventListener("scroll",n,{capture:!0})}},[l,a]);return(0,p.useEffect)(()=>l,[l]),{getTargetIndex:n,setActive:o,startScrollTracking:c,stopScrollTracking:l,update:a}})(_),B=(0,p.useMemo)(()=>({mode:"edit",areaId:"root",depth:0}),[]);return(0,v.jsx)(rb.Provider,{value:{dragListeners:C,setDragListeners:S},children:(0,v.jsx)(g.XU,{plugins:w,sensors:z,onDragEnd:(e,r)=>{var t,n;let i;T();let c=null==(t=eQ())?void 0:t.querySelector("[data-puck-entry]");null==c||c.removeAttribute("data-puck-dragging");let{source:d,target:u}=e.operation;if(!d){L(!1),_.setState({draggedItem:null});return}let{zone:p,index:v}=d.data,{previewIndex:k={}}=_.getState()||{},m=null!=(n=Object.values(k).find(e=>(null==e?void 0:e.props.id)===d.id&&!e.ghost))?n:null,h=!e.canceled&&(null==u?void 0:u.type)!=="void"&&(null==m?void 0:m.linePlaceholder)?(({zones:e,itemId:r,targetZone:t,getExpectedOrder:o})=>{let n=eQ();if(!n||e3(n))return()=>{};let a=Array.from(new Set(e)).map(e=>`${e2(e)} > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`).join(", "),i=()=>{let e=new Map;return n.querySelectorAll(a).forEach(t=>{let o=t.getAttribute("data-puck-component");o&&o!==r&&e.set(o,{el:t,rect:t.getBoundingClientRect()})}),e},l=i(),c=o();return()=>{e6(n,{zones:e,itemId:r,targetZone:t,getExpectedOrder:o,initialExpectedOrder:c},()=>{i().forEach(({el:e,rect:r},t)=>{var o;let n=null==(o=l.get(t))?void 0:o.rect;if(!n)return;let a=n.x-r.x,i=n.y-r.y;1>Math.abs(a)&&1>Math.abs(i)||e.animate({translate:[`${a}px ${i}px 0`,"0px 0px 0"]},e4)})})}})({zones:A.current?[A.current.zone,m.zone]:[m.zone],itemId:"move"===m.type?m.props.id:void 0,targetZone:m.zone,getExpectedOrder:()=>e5(a.getState().state,m.zone)}):null;i=(0,j.QZ)(()=>{"idle"===d.status&&((()=>{var t,n,i,c,d;if(L(!1),_.setState({draggedItem:null}),e.canceled||(null==u?void 0:u.type)==="void"){_.setState({previewIndex:{}}),null==(t=C.dragend)||t.forEach(t=>{t(e,r)}),o({type:"setUi",ui:{itemSelector:null,isDragging:!1}});return}let k=m&&m.linePlaceholder&&A.current&&m.zone===A.current.zone&&m.index>A.current.index?m.index-1:null!=(n=null==m?void 0:m.index)?n:v;m&&(_.setState({previewIndex:{}}),"insert"===m.type?((e,r,t,o)=>(0,s.BU)(null,null,function*(){let{getState:n}=o,a=(0,l.$C)(e),i={type:"insert",componentType:e,destinationIndex:t,destinationZone:r,id:a},c=n().state,d=(0,l.Qk)(c,i,n()),u=n().dispatch;u((0,s.ko)((0,s.IA)({},i),{recordHistory:!0}));let p={index:t,zone:r};u({type:"setUi",ui:{itemSelector:p}});let v=(0,l.Gq)(p,d);v&&(yield rs(v,n,"insert"))}))(m.componentType,m.zone,m.index,a):A.current&&rp(m.props.id,A.current,(0,s.ko)((0,s.IA)({},m),{index:k}),a),null==h||h());let g=(null==(i=A.current)?void 0:i.zone)!==(null==m?void 0:m.zone)||(null==(c=A.current)?void 0:c.index)!==k;o({type:"setUi",ui:{itemSelector:m?{index:k,zone:m.zone}:{index:v,zone:p},isDragging:!1},recordHistory:g}),null==(d=C.dragend)||d.forEach(t=>{t(e,r)})})(),null==i||i())})},onDragMove:(e,r)=>{var t;M(r),null==(t=C.dragmove)||t.forEach(t=>{t(e,r)})},onDragOver:(e,r)=>{var o,n,i,c,d,u;if(e.preventDefault(),!(null==(o=_.getState())?void 0:o.draggedItem))return;x();let{source:s,target:p}=e.operation;if(!p||!s||"void"===p.type)return;let[v]=s.id.split(":"),[k]=p.id.split(":"),m=s.data,h=m.zone,g=m.index,f="",b=0;if("component"===p.type){let e=p.data;f=e.zone;let t=null==(n=r.collisionObserver.collisions[0])?void 0:n.data;b=el({position:ei(null==t?void 0:t.direction,rv(p.element)),sourceIndex:g,targetIndex:e.index,isSameZone:h===f})}else f=p.id.toString(),b=0;let y=(null==(i=a.getState().state.indexes.nodes[p.id])?void 0:i.path)||[];if(!(k===v||y.find(e=>{let[r]=e.split(":");return r===v}))){if("new"===E.current){let e="static"===rd(t,{isNewComponent:!0});e&&(b=null!=(c=P(f,r))?c:b),L(e),_.setState({previewIndex:{[f]:{componentType:m.componentType,type:"insert",index:b,zone:f,element:s.element,props:{id:s.id.toString()},linePlaceholder:e}}})}else{A.current||(A.current={zone:m.zone,index:m.index});let e=(0,l.Gq)(A.current,a.getState().state);if(e){let o=A.current.zone,n=o!==f,a="static"===rd(t,{isDraggingBetweenSlots:n});a&&(b=null!=(d=P(f,r))?d:b),L(a);let i={[f]:{componentType:m.componentType,type:"move",index:b,zone:f,props:e.props,element:s.element,linePlaceholder:a}};if(a&&n){let r=_.getState().previewIndex[o],t=A.current.index;r&&!r.linePlaceholder&&(t=r.index),i[o]={componentType:m.componentType,type:"move",index:t,zone:o,props:e.props,element:s.element,ghost:!0}}_.setState({previewIndex:i})}}null==(u=C.dragover)||u.forEach(t=>{t(e,r)})}},onDragStart:(e,r)=>{var o;"fluid"!==t&&D(r);let{source:n}=e.operation;if((null==n?void 0:n.type)==="component"){let e=n.data,r={zone:e.zone,index:e.index};A.current=r;let o=(0,l.Gq)(r,a.getState().state);if(o){let r="static"===rd(t);L(r),_.setState({previewIndex:{[e.zone]:{componentType:e.componentType,type:"move",index:e.index,zone:e.zone,props:o.props,element:n.element,linePlaceholder:r}}})}}null==(o=C.dragstart)||o.forEach(t=>{t(e,r)})},onBeforeDragStart:e=>{var r,t,n,i;E.current=(null==(r=e.operation.source)?void 0:r.type)==="drawer"?"new":"existing",A.current=void 0,_.setState({draggedItem:e.operation.source}),(null==(t=a.getState().selectedItem)?void 0:t.props.id)!==(null==(n=e.operation.source)?void 0:n.id)?o({type:"setUi",ui:{itemSelector:null,isDragging:!0},recordHistory:!1}):o({type:"setUi",ui:{isDragging:!0},recordHistory:!1});let l=null==(i=eQ())?void 0:i.querySelector("[data-puck-entry]");null==l||l.setAttribute("data-puck-dragging","true"),L(!1)},children:(0,v.jsx)(eJ,{store:_,children:(0,v.jsx)(eG,{value:B,children:e})})})})},ry=({children:e,disableAutoScroll:r,behavior:t})=>"LOADING"===(0,i.CU)(e=>e.status)?e:(0,v.jsx)(rx,{disableAutoScroll:r,behavior:t,children:e}),rw=(0,d.d)("Drawer",ra),rz=(0,d.d)("DrawerItem",ra),rI=({children:e,name:r,label:t,dragRef:o,isDragDisabled:n})=>{let a=(0,p.useMemo)(()=>e||(({children:e})=>(0,v.jsx)("div",{className:rz("default"),children:e})),[e]);return(0,v.jsx)("div",{className:rz({disabled:n}),ref:o,onMouseDown:e=>e.preventDefault(),"data-testid":o?`drawer-item:${r}`:"","data-puck-drawer-item":!0,children:(0,v.jsx)(a,{name:r,children:(0,v.jsx)("div",{className:rz("draggableWrapper"),children:(0,v.jsxs)("div",{className:rz("draggable"),children:[(0,v.jsx)("div",{className:rz("name"),children:null!=t?t:r}),(0,v.jsx)("div",{className:rz("icon"),children:(0,v.jsx)(V,{})})]})})})})},rj=({children:e,name:r,label:t,id:o,isDragDisabled:n})=>{let a=e8((0,p.useContext)(eX)),{ref:i}=(0,g.PM)({id:o,data:{componentType:r},disabled:n,type:"drawer",plugins:[b.Gb.configure({dropAnimation:a})]});return(0,v.jsxs)("div",{className:rw("draggable"),children:[(0,v.jsx)("div",{className:rw("draggableBg"),children:(0,v.jsx)(rI,{name:r,label:t,children:e})}),(0,v.jsx)("div",{className:rw("draggableFg"),children:(0,v.jsx)(rI,{name:r,label:t,dragRef:i,isDragDisabled:n,children:e})})]})},rC=({children:e,droppableId:r,direction:t})=>{r&&console.error("Warning: The `droppableId` prop on Drawer is deprecated and no longer required."),t&&console.error("Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging.");let o=eR(),{ref:n}=(0,g.zM)({id:o,type:"void",collisionPriority:0});return(0,v.jsx)("div",{className:rw(),ref:n,"data-puck-dnd":o,"data-puck-drawer":!0,"data-puck-dnd-void":!0,children:e})};rC.Item=({name:e,children:r,id:t,label:o,index:n,isDragDisabled:a})=>{let i=t||e,[c,d]=(0,p.useState)((0,l.$C)(i));return void 0!==n&&console.error("Warning: The `index` prop on Drawer.Item is deprecated and no longer required."),!function(e,r,t=[]){let{setDragListeners:o}=(0,p.useContext)(rb);(0,p.useEffect)(()=>{o&&o(t=>(0,s.ko)((0,s.IA)({},t),{[e]:[...t[e]||[],r]}))},t)}("dragend",()=>{d((0,l.$C)(i))},[i]),(0,v.jsx)("div",{children:(0,v.jsx)(rj,{name:e,label:o,id:c,isDragDisabled:a,children:r})},c)},(0,s.hY)();var rS=(e,r)=>e.getState().state.indexes.zones[r].contentIds.length;(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var rE=({componentId:e,zone:r})=>{let t=(0,i.CU)(e=>e.config),o=(0,i.CU)(e=>e.metadata),a=(0,i.CU)((0,_.k)(t=>{var o,n;let a=t.state.indexes;return(null!=(n=null==(o=a.zones[`${e}:${r}`])?void 0:o.contentIds)?n:[]).map(e=>a.nodes[e].flatData)}));return(0,v.jsx)(n.vO,{content:a,zone:r,config:t,metadata:o})};function rA(e,r,t,o,a){let i=(0,p.useRef)(null),l=(0,p.useRef)(null),c=(0,p.useRef)(r.props),d=(0,p.useMemo)(()=>(0,n.hB)(t,o,a),[t,o,a]),v=(0,p.useMemo)(()=>{var t,o,n,a;let p,v="root"===r.type?e.root:null==(t=e.components)?void 0:t[r.type],_=null!=(o=null==v?void 0:v.fields)?o:{},k=i.current!==d,m=!1;if(!l.current||k)for(let e in r.props)(null==(n=_[e])?void 0:n.type)==="slot"&&(m=!0);else for(let e of(p=["id"],new Set([...Object.keys(r.props),...Object.keys(l.current)])))r.props[e]!==l.current[e]&&(p.push(e),(null==(a=_[e])?void 0:a.type)==="slot"&&(m=!0));let h=(0,u.YP)(r,d,e,!1,m,p).props;return l.current=r.props,i.current=d,c.current=p?(0,s.IA)((0,s.IA)({},c.current),h):h,c.current},[e,r,d]);return(0,p.useMemo)(()=>(0,s.IA)((0,s.IA)({},r.props),v),[r.props,v])}(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var rP=(e,r={})=>{if(!e)return;let{disableDrag:t=!1,disableDragOnFocus:o=!0}=r,n=e=>{e.stopPropagation()};e.addEventListener("mouseover",n,{capture:!0});let a=()=>{setTimeout(()=>{e.addEventListener("pointerdown",n,{capture:!0})},200)},i=()=>{e.removeEventListener("pointerdown",n,{capture:!0})};return t?e.addEventListener("pointerdown",n,{capture:!0}):o&&(e.addEventListener("focus",a,{capture:!0}),e.addEventListener("blur",i,{capture:!0})),e.setAttribute("data-puck-overlay-portal","true"),()=>{e.removeEventListener("mouseover",n,{capture:!0}),t?e.removeEventListener("pointerdown",n,{capture:!0}):o&&(e.removeEventListener("focus",a,{capture:!0}),e.removeEventListener("blur",i,{capture:!0})),e.removeAttribute("data-puck-overlay-portal")}};(0,s.hY)();var rL=(0,d.d)("InlineTextField",{InlineTextField:"_InlineTextField_104qp_1"}),rD=(0,p.memo)(({propPath:e,componentId:r,value:t,isReadOnly:o,opts:n={}})=>{var a;let l=(0,p.useRef)(null),c=(0,i.sL)(),d=null!=(a=n.disableLineBreaks)&&a;(0,p.useEffect)(()=>{let o=c.getState(),n=o.state.indexes.nodes[r].data;if(!o.getComponentConfig(n.type))throw Error(`InlineTextField Error: No config defined for ${n.type}`);if(l.current){let o=null!=t?t:"";o!==l.current.innerText&&l.current.replaceChildren(o);let n=rP(l.current),a=t=>(0,s.BU)(null,null,function*(){let o=c.getState().state.indexes.nodes[r],n=t.target.innerText;d&&(n=n.replaceAll(/\n/gm,""));let a=L(o.data.props,e,n);yield rs((0,s.ko)((0,s.IA)({},o.data),{props:a}),c.getState,"replace",!0)});return l.current.addEventListener("input",a),()=>{var e;null==(e=l.current)||e.removeEventListener("input",a),null==n||n()}}},[c,l.current,t,d]);let[u,_]=(0,p.useState)(!1),[k,m]=(0,p.useState)(!1);return(0,v.jsx)("span",{className:rL(),ref:l,contentEditable:u||k?"plaintext-only":"false",onClick:e=>{e.preventDefault(),e.stopPropagation()},onClickCapture:e=>{e.preventDefault(),e.stopPropagation();let t=ru(c.getState().state,r);c.getState().setUi({itemSelector:t})},onKeyDown:e=>{e.stopPropagation(),(d&&"Enter"===e.key||o)&&e.preventDefault()},onKeyUp:e=>{e.stopPropagation(),e.preventDefault()},onMouseOverCapture:()=>_(!0),onMouseOutCapture:()=>_(!1),onFocus:()=>m(!0),onBlur:()=>m(!1)})});(0,s.hY)();var rT=(0,p.lazy)(()=>Promise.all([t.e(277),t.e(5004),t.e(3713),t.e(7060),t.e(1415),t.e(1539)]).then(t.bind(t,1539)).then(e=>({default:e.Editor}))),rM=(0,p.lazy)(()=>Promise.all([t.e(277),t.e(5004),t.e(3713),t.e(1415),t.e(6536)]).then(t.bind(t,6536)).then(e=>({default:e.RichTextRender}))),rB=(0,p.memo)(({value:e,componentId:r,propPath:t,field:o,id:a})=>{let l=(0,p.useRef)(null),c=(0,i.sL)();(0,p.useEffect)(()=>{if(!l.current)return;let e=rP(l.current,{disableDragOnFocus:!0});return()=>null==e?void 0:e()},[l.current]);let d=(0,p.useCallback)((e,o)=>(0,s.BU)(null,null,function*(){let n=c.getState().state.indexes.nodes[r],a=L(n.data.props,t,e);yield rs((0,s.ko)((0,s.IA)({},n.data),{props:a}),c.getState,"replace",!0,o)}),[c,r,t]),u=(0,p.useCallback)(e=>{c.setState({currentRichText:{inlineComponentId:r,inline:!0,field:o,editor:e,id:a}})},[o,r]);if(!o.contentEditable)return(0,v.jsx)(p.Suspense,{fallback:(0,v.jsx)(n.Sj,{content:e}),children:(0,v.jsx)(rM,{content:e,field:o})});let _={content:e,onChange:d,field:o,inline:!0,onFocus:u,id:a,name:t};return(0,v.jsx)("div",{ref:l,onClick:e=>{e.preventDefault(),e.stopPropagation()},onClickCapture:e=>{e.preventDefault(),e.stopPropagation();let t=ru(c.getState().state,r);c.getState().setUi({itemSelector:t})},children:(0,v.jsx)(p.Suspense,{fallback:(0,v.jsx)(eB,(0,s.IA)({},_)),children:(0,v.jsx)(rT,(0,s.IA)({},_))})})});rB.displayName="InlineEditorWrapper",(0,s.hY)(),(0,s.hY)();var rN=(0,p.memo)(({Component:e,componentProps:r})=>(0,v.jsx)(e,(0,s.IA)({},r)),(e,r)=>{let t=!0;return"puck"in e.componentProps&&"puck"in r.componentProps&&(t=(0,C.bD)(e.componentProps.puck,r.componentProps.puck)),e.Component===r.Component&&function(e,r,t=[]){if(Object.is(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r||Object.getPrototypeOf(e)!==Object.getPrototypeOf(r))return!1;let o=new Set(t),n=Object.keys(e).filter(e=>!o.has(e)),a=Object.keys(r).filter(e=>!o.has(e));if(n.length!==a.length)return!1;for(let t=0;t<n.length;t++){let o=n[t];if(!Object.prototype.hasOwnProperty.call(r,o)||!Object.is(e[o],r[o]))return!1}return!0}(e.componentProps,r.componentProps,["puck"])&&t});(0,s.hY)();var rF=new Map,rR=({contentIds:e,zoneCompound:r,renderItem:t})=>{let o=(0,i.CU)(e=>{var r,t;return null!=(t=null==(r=e.selectedItem)?void 0:r.props.id)?t:null}),n=eQ(),a=(0,p.useContext)(eX),l=Y(eX,e=>{var r;let t=null==(r=e.draggedItem)?void 0:r.id;return t?String(t):null}),c=Y(eX,e=>{var r,t,o;if(null==(r=e.draggedItem)?void 0:r.id){let[r]=null!=(o=Object.entries(null!=(t=e.previewIndex)?t:{}).find(([,e])=>!(null==e?void 0:e.ghost)))?o:[];return null==r?void 0:r.split(":")[0]}return null}),d=null==n?void 0:n.defaultView,u=(0,p.useRef)(new Map),s=(0,i.sL)(),_=(0,p.useCallback)(r=>{var t,o,n,a;if(!r||"root"===r)return -1;let i=e.indexOf(r);if(i>-1)return i;let l=null!=(n=null==(o=null==(t=s.getState().state.indexes.nodes)?void 0:t[r])?void 0:o.path)?n:[];for(let r=l.length-1;r>=0;r-=1){let t=null==(a=l[r])?void 0:a.split(":")[0];if(!t||"root"===t)continue;let o=e.indexOf(t);if(o>-1)return o}return -1},[s,e]),k=(0,p.useMemo)(()=>{let e=new Set;return[o,l,c].forEach(r=>{let t=_(r);t>-1&&e.add(t)}),Array.from(e).sort((e,r)=>e-r)},[c,l,_,o]),m=(0,p.useCallback)(e=>{let r=(0,S.vp)(e);return k.forEach(e=>{r.includes(e)||r.push(e)}),r.sort((e,r)=>e-r),r},[k]),h=(0,E.Te)({count:e.length,getItemKey:r=>e[r],estimateSize:r=>(e=>{var r;return null!=(r=rF.get(e))?r:320})(e[r]),getScrollElement:()=>null!=d?d:null,overscan:5,observeElementRect:(e,r)=>d?(0,S.TH)(e,r):(0,S.T6)(e,r),observeElementOffset:(e,r)=>d?(0,S.MH)(e,r):(0,S.AO)(e,r),scrollToFn:(e,r,t)=>d?(0,S.e8)(e,r,t):(0,S.Ox)(e,r,t),rangeExtractor:m,initialOffset:()=>d?d.scrollY:0});(0,p.useEffect)(()=>(a.getState().registerRootVirtualizer(r,{resolveIndex:e=>_(e),virtualizer:h}),()=>{a.getState().unregisterRootVirtualizer(r)}),[_,h,r,a]);let g=(0,p.useCallback)(e=>{let r=u.current.get(e);if(r)return r;let t=r=>{if(!r)return;let t=Math.ceil(r.getBoundingClientRect().height)||320;"number"==typeof t&&t>0&&((e,r)=>{r<=0||rF.set(e,r)})(e,t)};return u.current.set(e,t),t},[]);(0,p.useEffect)(()=>{let r=new Set(e);Array.from(u.current.keys()).forEach(e=>{r.has(e)||u.current.delete(e)})},[e]);let f=h.getVirtualItems(),b=h.getTotalSize(),x=(0,p.useMemo)(()=>{let r=[],o=0,n=-1;f.forEach(a=>{if(!a)return;let i=e[a.index],l=Math.max(a.start-o,0);l>0&&r.push((0,v.jsx)("div",{style:{height:`${l}px`}},`gap:${n}:${a.index}`)),r.push(t({componentId:i,index:a.index,measureRef:g(i)})),o=a.end,n=a.index});let a=Math.max(b-o,0);return a>0&&r.push((0,v.jsx)("div",{style:{height:`${a}px`}},`gap:${n}:end`)),r},[b,f,g]);return(0,v.jsx)(v.Fragment,{children:x})};(0,s.hY)();var rO=(0,d.d)("DropZone",ro),rY="var(--puck-line-placeholder-width, 2px)",rU=({zoneRef:e,contentIds:r,index:t})=>{let[o,n]=(0,p.useState)();return((0,p.useLayoutEffect)(()=>{var o,a,i,l;let c,d=e.current,u=null==d?void 0:d.ownerDocument.defaultView;if(!d||!u)return;let s=e=>parseFloat(null!=e?e:"")||0,p=e=>{let t=r[e];if(void 0===t)return;let o=d.querySelector(`:scope > ${e1(t)}:not([data-dnd-dragging])`);if(o)return{el:o,rect:o.getBoundingClientRect()}},v=d.getBoundingClientRect(),_=u.getComputedStyle(d),k=p(t-1),m=p(t),h=null!=m?m:k,{horizontal:g,reversed:f,forward:b,start:x,end:y,isBefore:w}=rh(rm(d,u,_)),z=s(g?_.columnGap:_.rowGap),I=(e,r)=>{var t;return s(null==(t=(e=>e?u.getComputedStyle(e):void 0)(e))?void 0:t["start"===r==!f?g?"marginLeft":"marginTop":g?"marginRight":"marginBottom"])},j=s(_.borderLeftWidth),C=s(_.borderTopWidth),S=s(_.borderRightWidth),E=s(_.borderBottomWidth);c=m?k&&w(y(k.rect),x(m.rect))?(y(k.rect)+x(m.rect))/2:x(m.rect)-b*(Math.max(I(m.el,"start"),z)/2):k?y(k.rect)+b*(Math.max(I(k.el,"end"),z)/2):g?f?v.right-S-s(_.paddingRight):v.left+j+s(_.paddingLeft):f?v.bottom-E-s(_.paddingBottom):v.top+C+s(_.paddingTop),g?n({top:(null!=(o=null==h?void 0:h.rect.top)?o:v.top+C+s(_.paddingTop))-v.top+d.scrollTop-C,height:null!=(a=null==h?void 0:h.rect.height)?a:v.height-C-E-s(_.paddingTop)-s(_.paddingBottom),left:r_(c-v.left+d.scrollLeft-j,0,d.scrollWidth),width:rY,transform:"translateX(-50%)"}):n({left:(null!=(i=null==h?void 0:h.rect.left)?i:v.left+j+s(_.paddingLeft))-v.left+d.scrollLeft-j,width:null!=(l=null==h?void 0:h.rect.width)?l:v.width-j-S-s(_.paddingLeft)-s(_.paddingRight),top:r_(c-v.top+d.scrollTop-C,0,d.scrollHeight),height:rY,transform:"translateY(-50%)"})},[e,r,t]),o)?(0,v.jsx)("div",{className:rO("linePlaceholder"),style:o,"data-puck-line-placeholder":!0}):null},rq=(0,d.d)("DropZone",ro),rH=({element:e,label:r,override:t})=>e?(0,v.jsx)("div",{dangerouslySetInnerHTML:{__html:e.outerHTML}}):(0,v.jsx)(rI,{name:r,children:t}),r$=e=>(0,v.jsx)(rZ,(0,s.IA)({},e)),rV=(0,p.memo)(({zoneCompound:e,componentId:r,index:t,dragAxis:o,collisionAxis:a,inDroppableZone:l,itemRef:c})=>{var d,k,m,h;let g=(0,i.CU)(e=>e.metadata),f=(0,p.useContext)(eW),{depth:b=1}=null!=f?f:{},x=(0,p.useContext)(eX),y=(0,i.CU)((0,_.k)(e=>{var t;return null==(t=e.state.indexes.nodes[r])?void 0:t.flatData.props})),w=(0,i.CU)(e=>{var t;return null==(t=e.state.indexes.nodes[r])?void 0:t.data.type}),z=(0,i.CU)((0,_.k)(e=>{var t;return null==(t=e.state.indexes.nodes[r])?void 0:t.data.readOnly})),I=(0,i.sL)(),j=(0,p.useMemo)(()=>{if(y)return(0,u.hE)({type:w,props:y});let t=x.getState().previewIndex[e];return r===(null==t?void 0:t.props.id)?{type:t.componentType,props:t.props,previewType:t.type,element:t.element}:null},[I,r,e,w,y]),C=(0,i.CU)(e=>(null==j?void 0:j.type)?e.config.components[j.type]:null),S=(0,p.useMemo)(()=>({renderDropZone:r$,isEditing:!0,dragRef:null,metadata:(0,s.IA)((0,s.IA)({},g),null==C?void 0:C.metadata)}),[g,null==C?void 0:C.metadata]),E=(0,i.CU)(e=>e.overrides),A=(0,i.CU)(e=>{var t;return(null==(t=e.componentState[r])?void 0:t.loadingCount)>0}),P=(0,i.CU)(e=>{var t;return(null==(t=e.selectedItem)?void 0:t.props.id)===r}),L=(0,i.JX)("label-component"),D=(0,i.JX)("canvas-noconfig",{type:null!=(k=null==(d=null==j?void 0:j.type)?void 0:d.toString())?k:""}),T=null!=(h=null!=(m=null==C?void 0:C.label)?m:null==j?void 0:j.type.toString())?h:L,M=(0,p.useMemo)(()=>(0,s.ko)((0,s.IA)((0,s.IA)({},null==C?void 0:C.defaultProps),null==j?void 0:j.props),{puck:S,editMode:!0}),[null==C?void 0:C.defaultProps,null==j?void 0:j.props,S]),B=(0,p.useMemo)(()=>{var e;return{type:null!=(e=null==j?void 0:j.type)?e:w,props:M}},[null==j?void 0:j.type,w,M]),N=(0,i.CU)(e=>e.config),F=(0,i.CU)(e=>e.plugins),R=(0,i.CU)(e=>e.fieldTransforms),O=rA(N,B,(0,p.useMemo)(()=>(0,s.IA)((0,s.IA)((0,s.IA)((0,s.IA)((0,s.IA)({},(0,n.BQ)(r$,e=>(0,v.jsx)(rE,{componentId:r,zone:e.zone}))),{text:({value:e,componentId:r,field:t,propPath:o,isReadOnly:n})=>t.contentEditable?(0,v.jsx)(rD,{propPath:o,componentId:r,value:e,opts:{disableLineBreaks:!0},isReadOnly:n}):e,textarea:({value:e,componentId:r,field:t,propPath:o,isReadOnly:n})=>t.contentEditable?(0,v.jsx)(rD,{propPath:o,componentId:r,value:e,isReadOnly:n}):e,custom:({value:e,componentId:r,field:t,propPath:o,isReadOnly:n})=>t.contentEditable&&"string"==typeof e?(0,v.jsx)(rD,{propPath:o,componentId:r,value:e,isReadOnly:n}):e}),{richtext:({value:e,componentId:r,field:t,propPath:o,isReadOnly:n})=>{let{contentEditable:a=!0,tiptap:i}=t;if(!1===a||n)return(0,v.jsx)(rM,{content:e,field:t});let l=`${r}_${t.type}_${o}`;return(0,v.jsx)(rB,{value:e,componentId:r,propPath:o,field:t,id:l},l)}}),F.reduce((e,r)=>(0,s.IA)((0,s.IA)({},e),r.fieldTransforms),{})),R),[F,R]),z,A);if(!j)return;let Y=C?C.render:()=>(0,v.jsx)("div",{style:{padding:48,textAlign:"center"},children:D}),U=j.type,q="previewType"in j&&"insert"===j.previewType;return(0,v.jsx)(rt,{id:r,componentType:U,zoneCompound:e,depth:b+1,index:t,isLoading:A,isSelected:P,label:T,autoDragAxis:o,userDragAxis:a,inDroppableZone:l,itemRef:c,children:e=>{var r;return(null==C?void 0:C.inline)&&!q?(0,v.jsx)(rN,{Component:Y,componentProps:(0,s.ko)((0,s.IA)({},O),{puck:(0,s.ko)((0,s.IA)({},O.puck),{dragRef:e})})}):(0,v.jsx)("div",{ref:e,children:q?(0,v.jsx)(rH,{label:T,override:null!=(r=E.componentItem)?r:E.drawerItem,element:"element"in j&&j.element?j.element:void 0}):(0,v.jsx)(rN,{Component:Y,componentProps:O})})}})}),rZ=(0,p.forwardRef)(function({zone:e,allow:r,disallow:t,style:o,className:n,minEmptyHeight:a="128px",collisionAxis:c,as:d},k){let m=(0,p.useContext)(eW),h=(0,i.sL)(),{areaId:f,depth:b=0,registerLocalZone:x,unregisterLocalZone:y}=null!=m?m:{},w=(0,i.CU)((0,_.k)(e=>{var r;return f?null==(r=e.state.indexes.nodes[f])?void 0:r.path:null})),z=u.Ln;f&&e!==u.Ln&&(z=`${f}:${e}`);let I=z===u.Ln||e===u.Ln||"root"===f,j=Y(eX,e=>e.nextAreaDepthIndex[f||""]),C=(0,i.CU)((0,_.k)(e=>{var r;return null==(r=e.state.indexes.zones[z])?void 0:r.contentIds})),S=(0,i.CU)((0,_.k)(e=>{var r;return null==(r=e.state.indexes.zones[z])?void 0:r.type}));(0,p.useEffect)(()=>{(!S||"dropzone"===S)&&(null==m?void 0:m.registerZone)&&(null==m||m.registerZone(z))},[S,h]),(0,p.useEffect)(()=>{"dropzone"===S&&z!==u.Ln&&console.warn("DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots")},[S]);let E=(0,p.useMemo)(()=>C||[],[C]),A=(0,p.useRef)(null),P=(0,p.useCallback)(e=>rn(e,{allow:r,disallow:t}),[r,t]),L=Y(eX,e=>{var r;return P(null==(r=e.draggedItem)?void 0:r.data.componentType)}),D=j||I,T=Y(eX,e=>{var r;let t=!0;return(t=null!=(r=e.zoneDepthIndex[z])&&r)&&(t=L),t});(0,p.useEffect)(()=>(x&&x(z,L||T),()=>{y&&y(z)}),[L,T,z]);let[M,B]=((e,r)=>{let t=(0,p.useContext)(eX),o=Y(eX,e=>e.previewIndex[r]),n=(0,i.CU)(e=>e.state.ui.isDragging),[a,c]=(0,p.useState)(e),[d,u]=(0,p.useState)(o),v=function(e,r){let t=(0,g.uF)();return(0,p.useCallback)((...r)=>(0,s.BU)(null,null,function*(){return yield null==t?void 0:t.renderer.rendering,e(...r)}),[...r,t])}((e,r,t,o,n,a)=>{(!t||n)&&(r&&!r.linePlaceholder?c((0,l.Yr)(e.filter(e=>e!==r.props.id),r.index,r.props.id)):c(n&&!a?e.filter(e=>e!==o):e),u(r))},[]);return(0,p.useEffect)(()=>{var r;let a=t.getState(),i=null==(r=a.draggedItem)?void 0:r.id,l=Object.values(a.previewIndex||{});v(e,o,n,i,l.length>0,l.some(e=>null==e?void 0:e.linePlaceholder))},[e,o,n]),[a,d]})(E,z),N=B&&!B.linePlaceholder?1:0,F=M.length===N,R=T&&F,O=(0,p.useContext)(eX);(0,p.useEffect)(()=>{let{enabledIndex:e}=O.getState();O.setState({enabledIndex:(0,s.ko)((0,s.IA)({},e),{[z]:T})})},[T,O,z]);let U={id:z,collisionPriority:T?b:0,disabled:!R,collisionDetector:et,type:"dropzone",data:{areaId:f,depth:b,isDroppableTarget:L,path:w||[]}},{ref:q}=(0,g.zM)(U),H=(0,i.CU)(e=>(null==e?void 0:e.selectedItem)&&f===(null==e?void 0:e.selectedItem.props.id)),[$]=((e,r)=>{let t=(0,i.CU)(e=>e.status),[o,n]=(0,p.useState)(r||"y"),a=(0,p.useCallback)(()=>{if(e.current){let r=window.getComputedStyle(e.current);"grid"===r.display?n("dynamic"):"flex"===r.display&&"row"===r.flexDirection?n("x"):n("y")}},[e.current]);return(0,p.useEffect)(()=>{let e=()=>{a()};return window.addEventListener("viewportchange",e),()=>{window.removeEventListener("viewportchange",e)}},[]),(0,p.useEffect)(a,[t,r]),[o,a]})(A,c),[V,Z]=(({zoneCompound:e,userMinEmptyHeight:r,ref:t})=>{let o=(0,i.sL)(),[n,a]=(0,p.useState)(0),[l,c]=(0,p.useState)(!1),{draggedItem:d,isZone:u}=Y(eX,r=>{var t,o;return{draggedItem:(null==(t=r.draggedItem)?void 0:t.data.zone)===e?r.draggedItem:null,isZone:(null==(o=r.draggedItem)?void 0:o.data.zone)===e}}),s=(0,p.useRef)(0),v=eK(r=>{if(r){let r=rS(o,e);if(a(0),r||0===s.current)return void c(!1);let t=o.getState().selectedItem,n=o.getState().state.indexes.zones,i=o.getState().nodes;i.setOverlayVisible(null==t?void 0:t.props.id,!1),setTimeout(()=>{var r;let o=(null==(r=n[e])?void 0:r.contentIds)||[];i.syncNodes(o),t&&setTimeout(()=>{i.syncNode(t.props.id),i.setOverlayVisible(t.props.id,!0)},200),c(!1)},100)}},[o,n,e]);(0,p.useEffect)(()=>{if(d&&t.current&&u){let r=t.current.getBoundingClientRect();return s.current=rS(o,e),a(r.height),c(!0),v()}},[t.current,d,v]);let _=isNaN(Number(r))?r:`${r}px`;return[n?`${n}px`:_,l]})({zoneCompound:z,userMinEmptyHeight:a,ref:A}),W=(0,p.useCallback)(e=>{e9([A,q,k],e)},[q]),X=(0,i.CU)(e=>e._experimentalVirtualization),J=(null!=f?f:u.ho)===u.ho&&0===b;return(0,v.jsxs)(null!=d?d:"div",{className:`${rq({isRootZone:I,hoveringOverArea:D,isEnabled:T,isAreaSelected:H,hasChildren:E.length>0,isAnimating:Z})}${n?` ${n}`:""}`,ref:W,"data-testid":`dropzone:${z}`,"data-puck-dropzone":z,style:(0,s.ko)((0,s.IA)({},o),{"--puck-slot-min-empty-height":V,backgroundColor:null==o?void 0:o.backgroundColor}),children:[X&&J?(0,v.jsx)(rR,{contentIds:M,zoneCompound:z,renderItem:e=>(0,v.jsx)(rV,{zoneCompound:z,componentId:e.componentId,dragAxis:$,index:e.index,collisionAxis:c,inDroppableZone:L,itemRef:e.measureRef},e.componentId)}):M.map((e,r)=>(0,v.jsx)(rV,{zoneCompound:z,componentId:e,dragAxis:$,index:r,collisionAxis:c,inDroppableZone:L},e)),(null==B?void 0:B.linePlaceholder)&&(0,v.jsx)(rU,{zoneRef:A,contentIds:E,index:B.index})]})}),rW=({config:e,item:r,metadata:t})=>{let o=e.components[r.type],a=(0,n.Ht)(e,r,r=>(0,v.jsx)(n.vO,(0,s.ko)((0,s.IA)({},r),{config:e,metadata:t}))),i=(0,p.useMemo)(()=>({areaId:a.id,depth:1}),[a]),l=(0,n.tw)(o.fields,a);return(0,v.jsx)(eG,{value:i,children:(0,v.jsx)(o.render,(0,s.ko)((0,s.IA)((0,s.IA)({},a),l),{puck:(0,s.ko)((0,s.IA)({},a.puck),{renderDropZone:rX,metadata:(0,s.IA)((0,s.IA)({},t),o.metadata)})}))},a.id)},rX=e=>(0,v.jsx)(rJ,(0,s.IA)({},e)),rJ=(0,p.forwardRef)(function({className:e,style:r,zone:t,as:o},n){let a=(0,p.useContext)(eW),{areaId:i="root"}=a||{},{config:l,data:c,metadata:d}=(0,p.useContext)(rQ),s=`${i}:${t}`,_=(null==c?void 0:c.content)||[];return((0,p.useEffect)(()=>{!_&&(null==a?void 0:a.registerZone)&&(null==a||a.registerZone(s))},[_]),c&&l)?(s!==u.Ln&&(_=(0,u.W8)(c,s).zones[s]),(0,v.jsx)(null!=o?o:"div",{className:e,style:r,ref:n,children:_.map(e=>l.components[e.type]?(0,v.jsx)(rW,{config:l,item:e,metadata:d},e.props.id):null)})):null}),rG=e=>(0,v.jsx)(rK,(0,s.IA)({},e)),rK=(0,p.forwardRef)(function(e,r){let t=(0,p.useContext)(eW);return(null==t?void 0:t.mode)==="edit"?(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(rZ,(0,s.ko)((0,s.IA)({},e),{ref:r}))}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(rJ,(0,s.ko)((0,s.IA)({},e),{ref:r}))})}),rQ=p.createContext({config:{components:{}},data:{root:{},content:[]},metadata:{}});function r0({config:e,data:r,metadata:t={}}){var o,a;let i=(0,s.ko)((0,s.IA)({},r),{root:r.root||{},content:r.content||[]}),l="props"in i.root?i.root.props:i.root,c=(null==l?void 0:l.title)||"",d=(0,s.ko)((0,s.IA)({},l),{puck:{renderDropZone:rG,isEditing:!1,dragRef:null,metadata:t},title:c,editMode:!1,id:"puck-root"}),_=(0,n.Ht)(e,{type:"root",props:d},r=>(0,v.jsx)(n.P7,(0,s.ko)((0,s.IA)({},r),{config:e,metadata:t}))),k=(0,n.tw)(null==(o=e.root)?void 0:o.fields,d),m=(0,p.useMemo)(()=>({mode:"render",depth:0}),[]);return(null==(a=e.root)?void 0:a.render)?(0,v.jsx)(rQ.Provider,{value:{config:e,data:i,metadata:t},children:(0,v.jsx)(eG,{value:m,children:(0,v.jsx)(e.root.render,(0,s.ko)((0,s.IA)((0,s.IA)({},_),k),{children:(0,v.jsx)(rX,{zone:u.bo})}))})}):(0,v.jsx)(rQ.Provider,{value:{config:e,data:i,metadata:t},children:(0,v.jsx)(eG,{value:m,children:(0,v.jsx)(rX,{zone:u.bo})})})}(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var r1=(e,r)=>{let t={back:e.history.back,forward:e.history.forward,setHistories:e.history.setHistories,setHistoryIndex:e.history.setHistoryIndex,hasPast:e.history.hasPast(),hasFuture:e.history.hasFuture(),histories:e.history.histories,index:e.history.index},o={appState:(0,l.Vg)(e.state),config:e.config,dispatch:e.dispatch,getPermissions:e.permissions.getPermissions,refreshPermissions:e.permissions.refreshPermissions,resolveDataById:(e,t)=>(function(e,r,t){return(0,s.BU)(this,null,function*(){let o=r().state.indexes.nodes[e];if(!o)return void console.warn(`Warning: Could not find component with id "${e}" to resolve its data. Component may have been removed or the id is invalid.`);yield rs(o.data,r,t)})})(e,r,t),resolveDataBySelector:(e,t)=>(function(e,r,t){return(0,s.BU)(this,null,function*(){let o=(0,l.Gq)(e,r().state);if(!o)return void console.warn(`Warning: Could not find component for selector "${JSON.stringify(e)}" to resolve its data. Component may have been removed or the selector is invalid.`);let n=(0,u.Rn)(o);yield rs(n,r,t)})})(e,r,t),history:t,selectedItem:e.selectedItem||null,getItemBySelector:r=>(0,l.Gq)(r,e.state),getItemById:r=>e.state.indexes.nodes[r].data,getSelectorForId:r=>ru(e.state,r),getParentById:r=>{let t=e.state.indexes.nodes[r].parentId;if(null===t)return;let o=e.state.indexes.nodes[t];if(o)return o.data},dictionary:e.dictionary};return o.__private={appState:e.state},o},r2=(0,p.createContext)(null),r4=e=>({state:e.state,config:e.config,dispatch:e.dispatch,permissions:e.permissions,history:e.history,selectedItem:e.selectedItem,dictionary:e.dictionary});function r3(){return function(e){let r=(0,p.useContext)(r2);if(!r)throw Error("usePuck must be used inside <Puck>.");return(0,k.P)(r,null!=e?e:e=>e)}}(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var r6=(0,d.d)("ComponentList",{ComponentList:"_ComponentList_htktj_1","ComponentList--isExpanded":"_ComponentList--isExpanded_htktj_5","ComponentList-content":"_ComponentList-content_htktj_9","ComponentList-title":"_ComponentList-title_htktj_17","ComponentList-titleIcon":"_ComponentList-titleIcon_htktj_63"}),r5=({name:e,label:r})=>{var t;let o=(0,i.CU)(e=>e.overrides),n=(0,i.CU)(r=>r.permissions.getPermissions({type:e}).insert);return(0,p.useEffect)(()=>{o.componentItem&&console.warn("The `componentItem` override has been deprecated and renamed to `drawerItem`")},[o]),(0,v.jsx)(rC.Item,{label:r,name:e,isDragDisabled:!n,children:null!=(t=o.componentItem)?t:o.drawerItem})},r8=({children:e,title:r,id:t})=>{let o=(0,i.CU)(e=>e.config),n=(0,i.CU)(e=>e.setUi),a=(0,i.CU)(e=>e.state.ui.componentList),{expanded:l=!0}=a[t]||{},c=`puck-drawer-category-${t}`,d=(0,i.JX)("drawer-category-collapse",{title:null!=r?r:""}),u=(0,i.JX)("drawer-category-expand",{title:null!=r?r:""});return(0,v.jsxs)("div",{className:r6({isExpanded:l}),children:[r&&(0,v.jsxs)("button",{type:"button",className:r6("title"),"aria-expanded":l,"aria-controls":c,onClick:()=>n({componentList:(0,s.ko)((0,s.IA)({},a),{[t]:(0,s.ko)((0,s.IA)({},a[t]),{expanded:!l})})}),title:l?d:u,children:[(0,v.jsx)("div",{children:r}),(0,v.jsx)("div",{className:r6("titleIcon"),children:l?(0,v.jsx)(i.rX,{size:12}):(0,v.jsx)(i.yQ,{size:12})})]}),(0,v.jsx)("div",{className:r6("content"),id:c,children:(0,v.jsx)(rC,{children:e||Object.keys(o.components).map(e=>{var r;return(0,v.jsx)(r5,{label:null!=(r=o.components[e].label)?r:e,name:e},e)})})})]})};r8.Item=r5;var r9=()=>{let e=(0,i.CU)(e=>e.overrides),r=(()=>{let[e,r]=(0,p.useState)(),t=(0,i.CU)(e=>e.config),o=(0,i.CU)(e=>e.state.ui.componentList),n=(0,i.JX)("drawer-category-other");return(0,p.useEffect)(()=>{var e,a,i;if(Object.keys(o).length>0){let l,c=[];l=Object.entries(o).map(([e,r])=>{var o,n;return r.components?(r.components.forEach(e=>{c.push(e)}),!1===r.visible)?null:(0,v.jsx)(r8,{id:e,title:(null==(n=null==(o=t.categories)?void 0:o[e])?void 0:n.title)||r.title||e,children:r.components.map((e,r)=>{var o;let n=t.components[e]||{};return(0,v.jsx)(r8.Item,{label:null!=(o=n.label)?o:e,name:e,index:r},e)})},e):null});let d=Object.keys(t.components).filter(e=>-1===c.indexOf(e));!(d.length>0)||(null==(e=o.other)?void 0:e.components)||(null==(a=o.other)?void 0:a.visible)===!1||l.push((0,v.jsx)(r8,{id:"other",title:(null==(i=o.other)?void 0:i.title)||n,children:d.map((e,r)=>{var o;let n=t.components[e]||{};return(0,v.jsx)(r8.Item,{name:e,label:null!=(o=n.label)?o:e,index:r},e)})},"other")),r(l)}},[t.categories,t.components,o,n]),e})(),t=(0,p.useMemo)(()=>(e.components&&console.warn("The `components` override has been deprecated and renamed to `drawer`"),e.components||e.drawer||"div"),[e]);return(0,v.jsx)(t,{children:r||(0,v.jsx)(r8,{id:"all"})})};(0,s.hY)();var r7=(0,d.d)("BlocksPlugin",{BlocksPlugin:"_BlocksPlugin_9af19_1"});(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var te=(e,r,t)=>{var o;let[n,a]=e.split(":");if(!a)return;let i=null==(o=t[n])?void 0:o.data.type,l=i&&i!==u.ho?r.components[i]:r.root;return function(e,r){let t;if("string"!=typeof e)throw Error(`Can't get field definition for path (${e}): Path should be a string`);if(!r||"object"!=typeof r)return;let o=e.split(/\.|\[\d+\]/).filter(Boolean),n=r;for(let e=0;e<o.length;e++){if(t=n[o[e]],e===o.length-1)return t;if(!t||("object"!==t.type||!t.objectFields)&&("array"!==t.type||!t.arrayFields))return;"object"===t.type&&(n=t.objectFields),"array"===t.type&&(n=t.arrayFields)}}(a,null==l?void 0:l.fields)},tr={},tt="outline-item",to=(e,r,t)=>{let o=e.get(r);if(void 0!==o)return o;let n=t();return e.set(r,n),n},tn=(e,r,t,o,n)=>to(e,`zone:${r}`,()=>rn(t,((e,r,t)=>{var o;if((null==(o=t.zones[e])?void 0:o.type)!=="slot")return tr;let n=te(e,r,t.nodes);return(null==n?void 0:n.type)!=="slot"?tr:{allow:n.allow,disallow:n.disallow}})(r,o,n))),ta=(e,r)=>t=>{if(t.type!==tt)return!1;let o=t.data,n=e.outlineStore.getState().acceptCache,{config:a,state:i}=e.appStore.getState(),l=i.indexes;return!((e,r,t,o)=>to(e,`subtree:${r}`,()=>{var e;return r===t||((null==(e=o[r])?void 0:e.path)||[]).some(e=>e.split(":")[0]===t)}))(n,"row"===r.kind?r.itemId:r.zoneCompound.split(":")[0],o.itemId,l.nodes)&&("zone"===r.kind?tn(n,r.zoneCompound,o.componentType,a,l):tn(n,r.zoneCompound,o.componentType,a,l)||((e,r,t,o,n)=>to(e,`childZones:${r}`,()=>Object.keys(n.zones).some(a=>a.startsWith(`${r}:`)&&tn(e,a,t,o,n))))(n,r.itemId,o.componentType,a,l))};(0,s.hY)();var ti=()=>{let e=null,r=null,t=()=>{null!==e&&(clearTimeout(e),e=null),r=null};return(0,m.y)((o,n)=>({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map,startDrag:e=>o({status:"dragging",draggedRow:e,acceptCache:new Map}),setTarget:(e,r)=>{var t,a,i,l;let c=n();((null==(t=c.indicator)?void 0:t.targetId)!==e.targetId||(null==(a=c.indicator)?void 0:a.position)!==e.position||(null==(i=c.drop)?void 0:i.zone)!==r.zone||(null==(l=c.drop)?void 0:l.index)!==r.index)&&o({indicator:e,drop:r})},clearTarget:()=>{(null!==n().indicator||null!==n().drop)&&o({indicator:null,drop:null})},scheduleExpand:(a,i)=>{r===a||n().tempExpandedIds.has(a)||(t(),r=a,o({expandCandidateId:a}),e=setTimeout(()=>{e=null,r=null,o(e=>({tempExpandedIds:new Set(e.tempExpandedIds).add(a),expandCandidateId:null})),i()},600))},cancelPendingExpand:()=>{t(),null!==n().expandCandidateId&&o({expandCandidateId:null})},endDrag:()=>{t(),o({status:"dropping",indicator:null,drop:null,expandCandidateId:null})},reset:()=>{t(),o({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map})}}))},tl=(0,p.createContext)(ti()),tc=()=>(0,p.useContext)(tl),td=e=>Y(tl,e),tu=({kind:e,zoneCompound:r})=>{let t=(0,i.sL)(),o=tc(),n=`${e}:${r}`,a=(0,p.useMemo)(()=>ta({appStore:t,outlineStore:o},{kind:"zone",zoneCompound:r}),[t,o,r]),{ref:l}=(0,g.zM)({id:n,type:"outline-zone",accept:a,collisionDetector:et,data:{kind:"zone",zoneCompound:r}}),c=td(e=>{var r;return(null==(r=e.indicator)?void 0:r.targetId)===n});return(0,p.useMemo)(()=>({isDropTarget:c,ref:l}),[c,l])};(0,s.hY)(),(0,s.hY)();var ts=(0,d.d)("DropLine",{DropLine:"_DropLine_eyz3q_2","DropLine--top":"_DropLine--top_eyz3q_12","DropLine--bottom":"_DropLine--bottom_eyz3q_16","DropLine--outset":"_DropLine--outset_eyz3q_20"}),tp=({edge:e,outset:r})=>(0,v.jsx)("div",{className:ts({top:"top"===e,bottom:"bottom"===e,outset:!!r})});(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var tv=(...e)=>[...e].filter(Boolean).join(" ");(0,s.hY)();var t_=(0,d.d)("LayerTree",{"LayerTree-helper":"_LayerTree-helper_1m7e4_2","LayerTree-helperRoot":"_LayerTree-helperRoot_1m7e4_11"}),tk=({zoneCompound:e})=>{let{ref:r,isDropTarget:t}=tu({kind:"empty",zoneCompound:e}),o=(0,i.JX)("outline-empty"),[n]=e.split(":"),a=n===u.ho;return(0,v.jsxs)("li",{className:tv(t_("helper"),a?t_("helperRoot"):void 0),"data-puck-drop-target":t||void 0,ref:r,children:[o,t&&(0,v.jsx)(tp,{edge:"top"})]})};(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var tm=(0,d.d)("LayerActions",{LayerActions:"_LayerActions_d90t9_2","LayerActions--visible":"_LayerActions--visible_d90t9_18"}),th=({node:e,visible:r})=>{let t=(0,i.CU)(e=>e.dispatch),o=tc(),n=(0,i.CU)((0,_.k)(r=>{let t=(0,l.Gq)({index:e.index,zone:e.zoneCompound},r.state),o=r.permissions.getPermissions({item:t});return{delete:o.delete,duplicate:o.duplicate}})),a=(0,i.JX)("outline-item-duplicate"),c=(0,i.JX)("outline-item-delete"),d=(0,p.useCallback)(r=>{r.stopPropagation(),"idle"===o.getState().status&&t({type:"remove",index:e.index,zone:e.zoneCompound})},[t,o,e]),u=(0,p.useCallback)(r=>{r.stopPropagation(),"idle"===o.getState().status&&t({type:"duplicate",sourceIndex:e.index,sourceZone:e.zoneCompound})},[t,o,e.index,e.zoneCompound]);return n.delete||n.duplicate?(0,v.jsxs)("div",{className:tm({visible:r}),children:[n.duplicate&&(0,v.jsx)(i.K0,{onClick:u,title:a,type:"button",children:(0,v.jsx)(i.QR,{})}),n.delete&&(0,v.jsx)(i.K0,{onClick:d,title:c,type:"button",children:(0,v.jsx)(i.lM,{})})]}):null},tg=(0,d.d)("Layer",{Layer:"_Layer_onfgu_1","Layer-inner":"_Layer-inner_onfgu_8","Layer--isSortable":"_Layer--isSortable_onfgu_18","Layer-content":"_Layer-content_onfgu_22","Layer-clickable":"_Layer-clickable_onfgu_29","Layer-caret":"_Layer-caret_onfgu_57","Layer--containsZone":"_Layer--containsZone_onfgu_68","Layer-title":"_Layer-title_onfgu_76","Layer-name":"_Layer-name_onfgu_85","Layer-icon":"_Layer-icon_onfgu_91","Layer-zones":"_Layer-zones_onfgu_101","Layer--isExpanded":"_Layer--isExpanded_onfgu_106","Layer--isSelected":"_Layer--isSelected_onfgu_115","Layer--isExpandCandidate":"_Layer--isExpandCandidate_onfgu_138","Layer--isDragSource":"_Layer--isDragSource_onfgu_143"}),tf=(0,p.forwardRef)(function({dataIndex:e,depth:r,isSelected:t,node:o,selectedId:n},a){let c=(0,i.CU)(e=>e.dispatch),d=(0,i.CU)(e=>{var r,t;return null!=(t=null==(r=e.state.ui.itemExpanded)?void 0:r[o.itemId])&&t}),u=Y(eX,e=>e.hoveringComponent===o.itemId),_=(0,i.CU)(e=>{var r;let t=(0,l.Gq)({index:o.index,zone:o.zoneCompound},e.state);return null==(r=e.permissions.getPermissions({item:t}))?void 0:r.drag}),{indicatorPosition:k,isDragSource:m,isExpandCandidate:h,isTempExpanded:g,rowRef:x}=(({componentType:e,index:r,itemId:t,zoneCompound:o})=>{let n=(0,i.sL)(),a=tc(),l=(0,p.useMemo)(()=>ta({appStore:n,outlineStore:a},{kind:"row",itemId:t,zoneCompound:o}),[n,a,t,o]),c=(0,p.useMemo)(()=>ea("y"),[]),{handleRef:d,ref:u,isDragSource:s}=(0,f.gl)({id:t,index:r,group:o,type:tt,accept:l,data:{kind:"row",itemId:t,zoneCompound:o,index:r,componentType:e},collisionPriority:1,collisionDetector:c,transition:{duration:0},plugins:e=>[...e,b.Gb.configure({feedback:"clone",dropAnimation:null})]}),{indicatorPosition:v,isExpandCandidate:_,isTempExpanded:k}=td(e=>{var r;return{indicatorPosition:(null==(r=e.indicator)?void 0:r.targetId)===t?e.indicator.position:null,isExpandCandidate:e.expandCandidateId===t,isTempExpanded:e.tempExpandedIds.has(t)}});return{rowRef:(0,p.useCallback)(e=>{u(e),d(e)},[u,d]),isDragSource:s,indicatorPosition:v,isExpandCandidate:_,isTempExpanded:k}})({componentType:o.componentType,index:o.index,itemId:o.itemId,zoneCompound:o.zoneCompound}),y=(0,p.useContext)(eX),w=tc(),z=(0,i.JX)("outline-item-collapse"),I=(0,i.JX)("outline-item-expand"),j=o.childZones.length>0,C=(0,p.useCallback)(e=>{c({type:"setUi",ui:{itemSelector:e}})},[c]),S=d||g,E=1!==o.childZones.length;return(0,v.jsxs)("li",{ref:a,className:tg({containsZone:j,isDragSource:m,isExpandCandidate:h,isExpanded:S,isHovering:u,isSelected:t,isSortable:_}),"data-index":e,"data-puck-layer-tree-id":o.itemId,children:[null!==k&&(0,v.jsx)(tp,{edge:"before"===k?"top":"bottom",outset:!0}),(0,v.jsxs)("div",{className:tg("inner"),ref:x,onMouseEnter:e=>{e.stopPropagation(),"idle"===w.getState().status&&y.setState({hoveringComponent:o.itemId})},onMouseLeave:e=>{e.stopPropagation(),y.setState({hoveringComponent:null})},children:[(0,v.jsx)("div",{className:tg("caret"),children:(0,v.jsx)(i.K0,{onClick:e=>{e.stopPropagation(),"idle"===w.getState().status&&c({type:"setUi",ui:e=>{var r;let t=(0,s.IA)({},e.itemExpanded);return(null==(r=e.itemExpanded)?void 0:r[o.itemId])?delete t[o.itemId]:t[o.itemId]=!0,{itemExpanded:t}},recordHistory:!1})},title:d?z:I,type:"button",children:(0,v.jsx)(i.c_,{})})}),(0,v.jsxs)("div",{className:tg("content"),children:[(0,v.jsx)("button",{type:"button",className:tg("clickable"),onClick:()=>{"idle"===w.getState().status&&(C({index:o.index,zone:o.zoneCompound}),y.getState().scrollToComponent(o.itemId))},children:(0,v.jsxs)("div",{className:tg("title"),children:[(0,v.jsx)("div",{className:tg("icon"),children:"Text"===o.componentType||"Heading"===o.componentType?(0,v.jsx)(i.ZU,{}):(0,v.jsx)(i.D6,{})}),(0,v.jsx)("div",{className:tg("name"),children:o.label})]})}),(0,v.jsx)(th,{node:o,visible:u&&!m})]})]}),j&&S&&o.childZones.map(e=>(0,v.jsx)("div",{className:tg("zones"),children:(0,v.jsx)(tS,{depth:E?r+1:r,selectedId:n,tree:E?e:(0,s.ko)((0,s.IA)({},e),{label:void 0})})},e.zoneCompound))]})});(0,s.hY)();var tb={LayerTree:"_LayerTree_o5tyt_1","LayerTree--nested":"_LayerTree--nested_o5tyt_12"},tx=(0,d.d)("LayerTree",tb),ty=({depth:e,selectedId:r,tree:t})=>(0,v.jsxs)("ul",{className:tx({nested:e>0}),children:[0===t.items.length&&(0,v.jsx)(tk,{zoneCompound:t.zoneCompound}),t.items.map(t=>(0,v.jsx)(tf,{depth:e,isSelected:r===t.itemId,node:t,selectedId:r},t.itemId))]});(0,s.hY)();var tw=(0,d.d)("LayerTree",tb),tz=new Map,tI=({depth:e,selectedId:r,tree:t})=>{let o=(0,p.useRef)(null),n=td(e=>{var r;return(null==(r=e.draggedRow)?void 0:r.zoneCompound)===t.zoneCompound?e.draggedRow.index:null}),a=(0,p.useCallback)(e=>{let r=(0,S.vp)(e);return null===n||r.includes(n)||(r.push(n),r.sort((e,r)=>e-r)),r},[n]),i=(0,E.Te)({count:t.items.length,estimateSize:e=>(e=>{var r;return null!=(r=tz.get(e))?r:32})(t.items[e].itemId),getItemKey:e=>t.items[e].itemId,getScrollElement:()=>(e=>{var r;let t=null!=(r=null==e?void 0:e.parentElement)?r:null;for(;t;){let{overflow:e,overflowY:r}=getComputedStyle(t);if([e,r].some(e=>/auto|scroll/.test(e)))return t;t=t.parentElement}return null})(o.current),overscan:8,rangeExtractor:a,measureElement:e=>{let r=Math.ceil(e.getBoundingClientRect().height),t=e.dataset.puckLayerTreeId;return t&&((e,r)=>{r<=0||tz.set(e,r)})(t,r),r||32}}),l=i.getVirtualItems(),c=i.getTotalSize(),d=[],u=0,s=-1;l.forEach(o=>{let n=t.items[o.index],a=Math.max(o.start-u,0);a>0&&d.push((0,v.jsx)("li",{"aria-hidden":"true",style:{height:`${a}px`}},`gap:${t.zoneCompound}:${s}:${o.index}`)),d.push((0,v.jsx)(tf,{dataIndex:o.index,depth:e,isSelected:r===n.itemId,node:n,ref:i.measureElement,selectedId:r},n.itemId)),u=o.end,s=o.index});let _=Math.max(c-u,0);return _>0&&d.push((0,v.jsx)("li",{"aria-hidden":"true",style:{height:`${_}px`}},`gap:${t.zoneCompound}:${s}:end`)),(0,v.jsxs)("ul",{className:tw({nested:e>0}),ref:o,children:[0===t.items.length&&(0,v.jsx)(tk,{zoneCompound:t.zoneCompound}),d]})};(0,s.hY)();var tj=(0,d.d)("LayerTree",{"LayerTree-zoneTitle":"_LayerTree-zoneTitle_fvhlh_2","LayerTree-zoneIcon":"_LayerTree-zoneIcon_fvhlh_19"}),tC=({label:e,zoneCompound:r})=>{let{ref:t,isDropTarget:o}=tu({kind:"label",zoneCompound:r});return(0,v.jsxs)("div",{className:tj("zoneTitle"),"data-puck-drop-target":o||void 0,ref:t,children:[(0,v.jsx)("div",{className:tj("zoneIcon"),children:(0,v.jsx)(i.zg,{})}),e,o&&(0,v.jsx)(tp,{edge:"bottom"})]})},tS=({depth:e,selectedId:r,tree:t})=>{let o=0===e&&t.items.length>=25;return(0,v.jsxs)(v.Fragment,{children:[t.label&&(0,v.jsx)(tC,{label:t.label,zoneCompound:t.zoneCompound}),o?(0,v.jsx)(tI,{depth:e,selectedId:r,tree:t}):(0,v.jsx)(ty,{depth:e,selectedId:r,tree:t})]})};(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var tE=e=>{if("undefined"==typeof document)return;let r=document.getElementById("preview-frame");e?null==r||r.setAttribute("data-puck-outline-dragging","true"):null==r||r.removeAttribute("data-puck-outline-dragging")},tA=(e,r,t)=>{var o,n,a;let i=t.outlineDndStore.getState(),l=i.draggedRow;if(!l)return;let c=e.operation.target;if(!c){i.cancelPendingExpand(),i.clearTarget();return}let d=c.data;if("zone"===d.kind){i.cancelPendingExpand(),i.setTarget({targetId:c.id.toString(),position:"inside"},{zone:d.zoneCompound,index:0});return}let{config:u,state:s}=t.appStore.getState(),p=s.indexes;if(tn(i.acceptCache,d.zoneCompound,l.componentType,u,p)){let e=null==(o=r.collisionObserver.collisions[0])?void 0:o.data,t=ei(null==e?void 0:e.direction);i.setTarget({targetId:c.id.toString(),position:t},{zone:d.zoneCompound,index:el({position:t,sourceIndex:l.index,targetIndex:d.index,isSameZone:d.zoneCompound===l.zoneCompound})})}else i.clearTarget();let v=!!(null==(n=s.ui.itemExpanded)?void 0:n[d.itemId])||i.tempExpandedIds.has(d.itemId),_=(a=d.itemId,Object.keys(p.zones).some(e=>e.startsWith(`${a}:`)));!v&&_?i.scheduleExpand(d.itemId,()=>{requestAnimationFrame(()=>r.collisionObserver.forceUpdate(!0))}):i.cancelPendingExpand()},tP=[],tL=({children:e})=>{let r=(0,i.sL)(),t=(0,p.useContext)(eX),[o]=(0,p.useState)(()=>ti()),n=(0,i.CU)(e=>{var r,t;return null!=(t=null==(r=e.dnd)?void 0:r.disableOutlineDrag)&&t}),a=G({mouse:[new b.il.Distance({value:5})]}),c=(0,p.useMemo)(()=>({outlineDndStore:o,appStore:r,scrollToComponent:e=>t.getState().scrollToComponent(e)}),[o,r,t]);return(0,v.jsx)(tl.Provider,{value:o,children:(0,v.jsx)(g.XU,{sensors:n?tP:a,onBeforeDragStart:e=>{((e,r)=>{let t=e.operation.source,o=null==t?void 0:t.data;if(!t||!o)return;let n=r.appStore.getState(),a=(0,l.Gq)({zone:o.zoneCompound,index:o.index},n.state);if(!a||!n.permissions.getPermissions({item:a}).drag)return e.preventDefault();r.outlineDndStore.getState().startDrag({itemId:o.itemId,zoneCompound:o.zoneCompound,index:o.index,componentType:o.componentType}),tE(!0),n.dispatch({type:"setUi",ui:{isDragging:!0},recordHistory:!1})})(e,c)},onDragOver:(e,r)=>{e.preventDefault(),tA(e,r,c)},onDragMove:(e,r)=>{tA(e,r,c)},onDragEnd:e=>{((e,r)=>{let{source:t}=e.operation,o=r.outlineDndStore.getState(),n=o.draggedRow,a=e.canceled?null:o.drop,i=r.appStore.getState().dispatch;if(tE(!1),n&&a){rp(n.itemId,{zone:n.zoneCompound,index:n.index},{zone:a.zone,index:a.index},r.appStore);let e=a.zone!==n.zoneCompound||a.index!==n.index;i({type:"setUi",ui:{itemSelector:{zone:a.zone,index:a.index},isDragging:!1},recordHistory:e}),((e,r)=>{let t,o=0,n=0,a=()=>{var i;let l=null==(i=eQ())?void 0:i.querySelector(`[data-puck-component="${e}"]`),c=l?l.getBoundingClientRect().top:null;if(o=c===t?o+1:0,t=c,n+=1,o>=2||n>=60)return void r(e);requestAnimationFrame(a)};requestAnimationFrame(a)})(n.itemId,r.scrollToComponent)}else i({type:"setUi",ui:{isDragging:!1},recordHistory:!1});o.endDrag();let l=()=>r.outlineDndStore.getState().reset();if(t&&"idle"!==t.status){let e=(0,j.QZ)(()=>{"idle"===t.status&&(l(),null==e||e())})}else l()})(e,c)},children:e})})};(0,s.hY)(),(0,s.hY)();var tD=e=>{let r={};return Object.keys(e).forEach(e=>{let[t]=e.split(":");t&&(r[t]||(r[t]=[]),r[t].push(e))}),r},tT=({config:e,label:r,nodes:t,zoneCompound:o,zones:n,zonesByParent:a=tD(n),componentFallbackLabel:i})=>{var l,c;return{items:(null!=(c=null==(l=n[o])?void 0:l.contentIds)?c:[]).map((r,i)=>(({config:e,itemId:r,index:t,nodes:o,zoneCompound:n,zones:a,zonesByParent:i,componentFallbackLabel:l})=>{var c,d,u,s;let p=o[r],v=null!=(d=null==(c=null==p?void 0:p.data.type)?void 0:c.toString())?d:l,_=null!=(s=null==(u=e.components[v])?void 0:u.label)?s:v;return{childZones:(i[r]||[]).map(r=>tT({config:e,nodes:o,zoneCompound:r,zones:a,zonesByParent:i})),componentType:v,index:t,itemId:r,label:_,zoneCompound:n}})({config:e,itemId:r,index:i,nodes:t,zoneCompound:o,zones:n,zonesByParent:a})),label:((e,r,t,o)=>{var n,a;if(void 0!==o)return o;let[,i]=e.split(":");if(i)return null!=(a=null==(n=te(e,t,r))?void 0:n.label)?a:i})(o,t,e,r),zoneCompound:o}},tM=(0,d.d)("LayerTreeRoot",{LayerTreeRoot:"_LayerTreeRoot_1qowl_1"}),tB=({selectedId:e,trees:r})=>{let t=(0,i.CU)(e=>{var r,t;return null!=(t=null==(r=e.dnd)?void 0:r.disableOutlineDrag)&&t});return(0,v.jsx)(tL,{children:(0,v.jsx)("div",{className:tM(),"data-puck-dnd-disabled":t||void 0,children:r.map(r=>(0,v.jsx)(tS,{depth:0,selectedId:e,tree:r},r.zoneCompound))})})};(0,s.hY)(),(0,s.hY)();var tN=(0,d.d)("CollapseAll",{CollapseAll:"_CollapseAll_1r4cy_1","CollapseAll-icon":"_CollapseAll-icon_1r4cy_5","CollapseAll--visible":"_CollapseAll--visible_1r4cy_10"}),tF=function({className:e}){let r=(0,i.CU)(e=>{var r;return Object.keys(null!=(r=e.state.ui.itemExpanded)?r:{}).length>0}),t=(0,i.CU)(e=>e.dispatch),o=(0,i.JX)("outline-header-collapseall");return(0,v.jsx)("div",{className:tv(tN({visible:r}),e),children:(0,v.jsx)(i.K0,{title:o,onClick:()=>{t({type:"setUi",ui:{itemExpanded:{}}})},children:(0,v.jsx)(i.WE,{className:tN("icon")})})})};(0,s.hY)(),(0,s.hY)();var tR=(0,d.d)("OutlineHeader",{OutlineHeader:"_OutlineHeader_ntv8r_1"}),tO=({children:e,title:r})=>{let t=(0,i.JX)("outline-header-title");return(0,v.jsxs)("div",{className:tR(),children:[(0,v.jsx)(eC,{rank:"2",size:"xs",children:null!=t?t:r}),e]})};(0,s.hY)();var tY=(0,d.d)("OutlineWrapper",{OutlineWrapper:"_OutlineWrapper_b9ln0_1","OutlineWrapper-collapseAll":"_OutlineWrapper-collapseAll_b9ln0_9","OutlineWrapper-layers":"_OutlineWrapper-layers_b9ln0_15"}),tU=({children:e})=>(0,v.jsx)("div",{className:tY(),children:e}),tq=()=>{let e=(0,i.CU)(e=>e.overrides.outline),r=(0,i.CU)(e=>e.config),t=(0,i.CU)(e=>e.state.indexes.nodes),o=(0,i.CU)(e=>e.state.indexes.zones),n=(0,i.CU)(e=>{var r;return(null==(r=e.selectedItem)?void 0:r.props.id)||null}),a=(0,i.JX)("label-component"),l=(0,i.CU)((0,_.k)(e=>Object.keys(e.state.indexes.zones).filter(e=>"root"===e.split(":")[0]))),c=(0,p.useMemo)(()=>l.map(e=>tT({config:r,label:1===l.length?"":e.split(":")[1],nodes:t,zoneCompound:e,zones:o,componentFallbackLabel:a})),[r,t,l,o,a]),d=(0,p.useMemo)(()=>e||tU,[e]);return(0,v.jsxs)(d,{children:[(0,v.jsx)(tO,{children:(0,v.jsx)(tF,{className:tY("collapseAll")})}),(0,v.jsx)("div",{className:tY("layers"),children:(0,v.jsx)(tB,{selectedId:n,trees:c})})]})};(0,s.hY)();var tH=(0,d.d)("OutlinePlugin",{OutlinePlugin:"_OutlinePlugin_1ylsc_1"});(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var t$=(0,d.d)("Breadcrumbs",{Breadcrumbs:"_Breadcrumbs_8c6w5_1","Breadcrumbs-breadcrumbLabel":"_Breadcrumbs-breadcrumbLabel_8c6w5_7","Breadcrumbs-breadcrumb":"_Breadcrumbs-breadcrumb_8c6w5_7"}),tV=({children:e,numParents:r=1})=>{let t=(0,i.CU)(e=>e.setUi),o=(e=>{let r=(0,i.CU)(e=>{var r;return null==(r=e.selectedItem)?void 0:r.props.id}),t=(0,i.CU)(e=>e.config),o=(0,i.CU)(e=>{var t;return null==(t=e.state.indexes.nodes[r])?void 0:t.path}),n=(0,i.sL)(),a=(0,i.JX)("label-page"),l=(0,i.JX)("label-component");return(0,p.useMemo)(()=>{let r=(null==o?void 0:o.map(e=>{var r,o,i,c;let[d]=e.split(":");if("root"===d)return{label:(null==(r=null==t?void 0:t.root)?void 0:r.label)||a,selector:null};let u=n.getState().state.indexes.nodes[d],s=u.path[u.path.length-1],p=((null==(o=n.getState().state.indexes.zones[s])?void 0:o.contentIds)||[]).indexOf(d);return{label:u?null!=(c=null==(i=t.components[u.data.type])?void 0:i.label)?c:u.data.type:l,selector:u?{index:p,zone:u.path[u.path.length-1]}:null}}))||[];return e?r.slice(r.length-e):r},[o,e,a,l])})(r);return(0,v.jsxs)("div",{className:t$(),children:[o.map((e,r)=>(0,v.jsxs)("div",{className:t$("breadcrumb"),children:[(0,v.jsx)("button",{type:"button",className:t$("breadcrumbLabel"),onClick:()=>t({itemSelector:e.selector}),children:e.label}),(0,v.jsx)(i.c_,{size:16})]},r)),e]})};(0,s.hY)(),(0,s.hY)();var tZ=(0,d.d)("PuckFields",{PuckFields:"_PuckFields_wnj25_1","PuckFields--isLoading":"_PuckFields--isLoading_wnj25_6","PuckFields-loadingOverlay":"_PuckFields-loadingOverlay_wnj25_10","PuckFields-loadingOverlayInner":"_PuckFields-loadingOverlayInner_wnj25_25","PuckFields-field":"_PuckFields-field_wnj25_32","PuckFields--wrapFields":"_PuckFields--wrapFields_wnj25_36"}),tW=({children:e})=>(0,v.jsx)(v.Fragment,{children:e}),tX=({fieldName:e})=>{let r=(0,i.CU)(r=>r.fields.fields[e]),t=(0,i.CU)(r=>((r.selectedItem?r.selectedItem.readOnly:r.state.data.root.readOnly)||{})[e]),o=(0,i.CU)(t=>r?t.selectedItem?`${t.selectedItem.props.id}_${r.type}_${e}`:`root_${r.type}_${e}`:null),n=(0,i.CU)((0,_.k)(e=>{let{selectedItem:r,permissions:t}=e;return r?t.getPermissions({item:r}):t.getPermissions({root:!0})})),a=(0,i.sL)(),l=(0,p.useCallback)(((e,r)=>(t,o)=>(0,s.BU)(null,null,function*(){let{dispatch:n,state:a,selectedItem:i,resolveComponentData:l}=r.getState(),{data:c,ui:d}=a,{itemSelector:p}=d,v=c.root.props||c.root,_=i?i.props:v,k=(0,s.ko)((0,s.IA)({},_),{[e]:t});if(i&&p){let e=yield l((0,s.ko)((0,s.IA)({},i),{props:k}),"replace"),t=ru(r.getState().state,i.props.id);if(!t)return;n({type:"replace",destinationIndex:t.index,destinationZone:t.zone||u.Ln,data:e.node,ui:o});return}if(c.root.props)return void n({type:"replaceRoot",root:(yield l((0,s.ko)((0,s.IA)({},c.root),{props:k}),"replace")).node,ui:(0,s.IA)((0,s.IA)({},d),o),recordHistory:!0});n({type:"setData",data:{root:k}})}))(e,a),[e]),{visible:c=!0}=null!=r?r:{},d=(0,p.useContext)(U.ctx);return((0,p.useEffect)(()=>a.subscribe(r=>{var t;return null==(t=r.getCurrentData().props)?void 0:t[e]},r=>{d.setState({[e]:r})}),[a,d]),r&&o&&c&&"slot"!==r.type)?(0,v.jsx)("div",{className:tZ("field"),children:(0,v.jsx)(eH,{field:r,name:e,id:o,readOnly:!n.edit||t,onChange:l})},o):null},tJ=(0,p.memo)(({fieldName:e})=>{let r=(0,i.sL)(),t=(0,p.useMemo)(()=>{var t;let o=null==(t=r.getState().getCurrentData().props)?void 0:t[e];return{[e]:o}},[]);return(0,v.jsx)(U.Provider,{value:t,children:(0,v.jsx)(tX,{fieldName:e})})}),tG=(0,p.memo)(({wrapFields:e=!0})=>{let r=(0,i.CU)(e=>e.overrides),t=(0,i.CU)(e=>{var r,t;let o=e.selectedItem?null==(r=e.componentState[e.selectedItem.props.id])?void 0:r.loadingCount:null==(t=e.componentState.root)?void 0:t.loadingCount;return(null!=o?o:0)>0}),o=(0,i.CU)((0,_.k)(e=>e.state.ui.itemSelector)),n=(0,i.CU)(e=>{var r;return null==(r=e.selectedItem)?void 0:r.props.id}),a=(0,i.sL)();(0,i.os)(a,n);let l=(0,i.CU)(e=>e.fields.loading),c=(0,i.CU)((0,_.k)(e=>e.fields.id===n?Object.keys(e.fields.fields):[])),d=l||t,u=(0,p.useMemo)(()=>r.fields||tW,[r]);return(0,v.jsxs)("form",{className:tZ({wrapFields:e}),onSubmit:e=>{e.preventDefault()},children:[(0,v.jsx)(u,{isLoading:d,itemSelector:o,children:c.map(e=>(0,v.jsx)(tJ,{fieldName:e},e))}),d&&(0,v.jsx)("div",{className:tZ("loadingOverlay"),children:(0,v.jsx)("div",{className:tZ("loadingOverlayInner"),children:(0,v.jsx)(i.aH,{size:16})})})]})});(0,s.hY)();var tK=(0,d.d)("FieldsPlugin",{FieldsPlugin:"_FieldsPlugin_18cj3_1","FieldsPlugin-header":"_FieldsPlugin-header_18cj3_7"}),tQ=()=>{let e=(0,i.JX)("label-page"),r=(0,i.CU)(e=>{var r,t;let o=e.selectedItem;return o?null!=(t=null==(r=e.config.components[o.type])?void 0:r.label)?t:o.type:null});return null!=r?r:e};(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var t0=`@import "https://rsms.me/inter/inter.css";

/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* bundle/index.css */

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_5vdfr_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_5vdfr_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {
  padding-inline-start: 0;
}
._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_5vdfr_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_5vdfr_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_5vdfr_38:empty {
  display: none;
}
._ActionBarAction_5vdfr_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_5vdfr_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction_5vdfr_30 svg {
  max-width: none !important;
}
._ActionBarAction_5vdfr_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),
._ActionBarAction--active_5vdfr_104 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_5vdfr_38 * {
  margin: 0;
}
._ActionBar-separator_5vdfr_117 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/styles.module.css/#css-module-data */
._InputWrapper_qyenz_1 + ._InputWrapper_qyenz_1 {
  margin-top: var(--puck-space-3);
}
._Input-label_qyenz_5 {
  align-items: center;
  color: var(--puck-field-label-color-text, var(--puck-color-text-secondary));
  display: flex;
  padding-bottom: var(--puck-field-label-space-y, var(--puck-space-3));
  font-size: var(--puck-field-label-font-size, var(--puck-font-size-xxs));
  font-weight: var( --puck-field-label-font-weight, var(--puck-font-weight-semibold) );
}
._Input-labelIcon_qyenz_17 {
  color: var(--puck-field-label-color-icon, var(--puck-color-text-subtle));
  display: flex;
  margin-inline-end: var(--puck-space-1);
  padding-inline-start: var(--puck-space-1);
}
._Input-disabledIcon_qyenz_24 {
  color: var(--puck-color-text-muted);
  margin-inline-start: auto;
}
._Input-input_qyenz_29 {
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  color: var(--puck-field-color-text, var(--puck-color-text));
  font-family: inherit;
  font-size: var(--puck-font-size-xs);
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
}
@media (min-width: 458px) {
  ._Input-input_qyenz_29 {
    font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  }
}
._Input-select_qyenz_61 {
  position: relative;
  width: 100%;
}
select._Input-input_qyenz_29 {
  appearance: none;
  cursor: pointer;
}
._Input-selectIcon_qyenz_71 {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  fill: var(--puck-field-color-border, var(--puck-color-border));
  stroke-width: 0;
}
._Input-selectIcon_qyenz_71:dir(rtl) {
  right: auto;
  left: 12px;
}
@media (hover: hover) and (pointer: fine) {
  ._Input_qyenz_1:has(> input):hover ._Input-input_qyenz_29:not([readonly]),
  ._Input_qyenz_1:has(> textarea):hover ._Input-input_qyenz_29:not([readonly]) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:has(> ._Input-select_qyenz_61):hover ._Input-input_qyenz_29:not([disabled]) {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:not(._Input--readOnly_qyenz_111):has(> ._Input-select_qyenz_61):hover ._Input-selectIcon_qyenz_71 {
    fill: var(--puck-field-color-border-hover, var(--puck-color-border-hover));
  }
}
._Input-input_qyenz_29:focus {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-input_qyenz_29,
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  cursor: default;
  opacity: 1;
  outline: 0;
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 ~ ._Input-selectIcon_qyenz_71 {
  fill: var(--puck-field-color-text-disabled, var(--puck-color-text-secondary));
}
._Input-radioGroupItems_qyenz_150 {
  --_puck-field-radio-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-radio-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-radio-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  display: flex;
  border: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  border-radius: var(--_puck-field-radio-radius);
  flex-wrap: wrap;
}
._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  flex-grow: 1;
}
._Input-radio_qyenz_150:first-of-type {
  border-bottom-left-radius: var(--_puck-field-radio-radius);
  border-top-left-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:first-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radio_qyenz_150:last-of-type {
  border-bottom-right-radius: var(--_puck-field-radio-radius);
  border-inline-end: 0;
  border-top-right-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:last-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-radio-border-width)) );
  text-align: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Input-radio_qyenz_150:has(:focus-visible) {
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-radioInner_qyenz_179:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._Input--readOnly_qyenz_111 ._Input-radioGroupItems_qyenz_150 {
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._Input--readOnly_qyenz_111 ._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text-secondary));
  cursor: default;
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--puck-field-color-border-disabled, var(--puck-color-border));
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150:last-of-type {
  border-inline-end: 0;
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-medium);
}
._Input--readOnly_qyenz_111 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
textarea._Input-input_qyenz_29 {
  margin-bottom: calc(var(--puck-space-1) * -1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data */
._ArrayField_62huh_5 {
  --_puck-field-array-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  --_puck-field-array-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-array-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-array-radius-inner: calc( var(--_puck-field-array-radius) - var(--_puck-field-array-border-width) );
  display: flex;
  flex-direction: column;
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  border: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-radius: var(--_puck-field-array-radius);
}
._ArrayField--isDraggingFrom_62huh_30 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  overflow: hidden;
}
._ArrayField-addButton_62huh_38 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: none;
  border-radius: var(--_puck-field-array-radius-inner);
  display: flex;
  color: var(--puck-field-array-add-color-icon, var(--puck-color-interactive));
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: calc(var(--puck-field-space-y, var(--puck-space-3)) + 2px) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  text-align: left;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayField--hasItems_62huh_58 > ._ArrayField-addButton_62huh_38 {
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayField-addButton_62huh_38:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayField-inner_62huh_93 {
  margin-top: -1px;
}
._ArrayFieldItem_62huh_101 {
  display: block;
  position: relative;
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
}
._ArrayFieldItem--isDragging_62huh_110 {
  border-top: transparent;
}
._ArrayFieldItem--isExpanded_62huh_114::before {
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 {
  border-bottom: 0;
  outline-offset: 0px !important;
  outline: var(--_puck-field-array-border-width) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring)) !important;
  z-index: 2;
}
._ArrayFieldItem--isDragging_62huh_110 {
  outline: var(--puck-border-width-focus) var(--puck-field-color-border-dragging, var(--puck-color-selection-border)) solid !important;
}
._ArrayFieldItem--isDragging_62huh_110 ._ArrayFieldItem-summary_62huh_132:active {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
}
._ArrayFieldItem_62huh_101 + ._ArrayFieldItem_62huh_101 {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayFieldItem-summary_62huh_132 {
  --_puck-drag-icon-color: var(--puck-field-color-text, var(--puck-color-text));
  --_puck-drag-icon-color-hover: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  list-style: none;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  position: relative;
  overflow: hidden;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayFieldItem--noFields_62huh_167 > ._ArrayFieldItem-summary_62huh_132 {
  cursor: grab;
}
._ArrayFieldItem_62huh_101:first-of-type > ._ArrayFieldItem-summary_62huh_132 {
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem_62huh_101:last-of-type:not(._ArrayFieldItem--isExpanded_62huh_114) > ._ArrayFieldItem-summary_62huh_132 {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem--isExpanded_62huh_114:last-of-type {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayFieldItem-summary_62huh_132:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayFieldItem-summary_62huh_132:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayFieldItem-summary_62huh_132:active {
  background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-summary_62huh_132 {
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-semibold);
  transition: none;
}
._ArrayFieldItem-body_62huh_228 {
  background: var(--puck-field-color-surface, var(--puck-color-surface));
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-body_62huh_228 {
  display: block;
}
._ArrayFieldItem-fieldset_62huh_237 {
  border: none;
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
}
._ArrayFieldItem-rhs_62huh_250 {
  display: flex;
  gap: var(--puck-space-1);
  align-items: center;
}
._ArrayFieldItem-actions_62huh_256 {
  color: var(--puck-color-text-secondary);
  display: flex;
  gap: var(--puck-space-1);
  opacity: 0;
}
._ArrayFieldItem-summary_62huh_132:focus-within > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256,
._ArrayFieldItem-summary_62huh_132:hover > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256 {
  opacity: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/IconButton/IconButton.module.css/#css-module-data */
._IconButton_1pxxt_1 {
  align-items: center;
  background: var(--puck-iconbutton-color-bg, transparent);
  border: none;
  border-radius: var(--puck-iconbutton-radius, var(--puck-radius-m));
  color: var(--puck-iconbutton-color-icon, currentColor);
  display: flex;
  font-family: var(--puck-font-family);
  justify-content: center;
  padding: var(--puck-iconbutton-space, var(--puck-space-1));
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._IconButton--active_1pxxt_15 {
  color: var( --puck-iconbutton-color-icon-active, var(--puck-color-interactive) );
}
._IconButton_1pxxt_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._IconButton_1pxxt_1:hover:not(._IconButton--disabled_1pxxt_28) {
    background: var( --_puck-iconbutton-color-bg-hover, var( --puck-iconbutton-color-bg-hover, var(--puck-color-interactive-neutral-hover) ) );
    color: var( --puck-iconbutton-color-icon-hover, var(--puck-color-interactive) );
    cursor: pointer;
    transition: none;
  }
}
._IconButton_1pxxt_1:active {
  background: var( --puck-iconbutton-color-bg-active, var(--puck-color-interactive-soft) );
  transition: none;
}
._IconButton--disabled_1pxxt_28 {
  color: var( --puck-iconbutton-color-icon-disabled, var(--puck-color-text-subtle) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DragIcon/styles.module.css/#css-module-data */
._DragIcon_5e515_1 {
  color: var(--_puck-drag-icon-color, var(--puck-color-text-muted));
  cursor: grab;
  padding: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
}
._DragIcon--disabled_5e515_10 {
  cursor: no-drop;
}
@media (hover: hover) and (pointer: fine) {
  ._DragIcon_5e515_1:not(._DragIcon--disabled_5e515_10):hover {
    color: var(--_puck-drag-icon-color-hover, var(--puck-color-focus-ring));
  }
}

/* components/Sortable/styles.css */
[data-dnd-placeholder]:not([data-puck-line-drag] *) * {
  opacity: 0 !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --_puck-field-array-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ExternalInput/styles.module.css/#css-module-data */
._ExternalInput-actions_143vl_1 {
  display: flex;
}
._ExternalInput-button_143vl_5 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  font-weight: var(--puck-font-weight-medium);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  cursor: pointer;
}
._ExternalInput--dataSelected_143vl_34 ._ExternalInput-button_143vl_5 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  display: block;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
._ExternalInput--readOnly_143vl_41 ._ExternalInput-button_143vl_5 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
}
._ExternalInput-detachButton_143vl_48 {
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-bottom-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  background-color: var( --puck-field-external-detach-color-bg, var(--puck-color-surface-subtle) );
  color: var( --puck-field-external-detach-color-text, var(--puck-color-text-muted) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  padding: var(--puck-space-2) var(--puck-space-3);
  position: relative;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  margin-inline-start: -1px;
  cursor: pointer;
}
._ExternalInput-button_143vl_5:focus-visible,
._ExternalInput-detachButton_143vl_48:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  z-index: 1;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover,
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    transition: none;
  }
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-external-detach-color-text, var(--puck-color-text-muted)) );
  }
  ._ExternalInput--dataSelected_143vl_34:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  }
}
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:active,
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ExternalInputModal_143vl_118 {
  color: var(--puck-color-text);
  display: grid;
  grid-template-rows: min-content minmax(128px, 100%) min-content;
  grid-template-columns: 100%;
  position: relative;
  min-height: 50dvh;
  max-height: 90dvh;
}
._ExternalInputModal-grid_143vl_128 {
  display: flex;
  flex-direction: column;
}
@media (min-width: 458px) {
  ._ExternalInputModal-grid_143vl_128 {
    display: grid;
    grid-template-columns: 100%;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-grid_143vl_128 {
    grid-template-columns: 25% 75%;
  }
}
._ExternalInputModal-filters_143vl_144 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}
._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
  display: none;
}
@media (min-width: 458px) {
  ._ExternalInputModal-filters_143vl_144 {
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
    display: none;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
    display: block;
  }
}
._ExternalInputModal-masthead_143vl_164 {
  background-color: var(--puck-color-surface-subtle);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-5);
  padding: var(--puck-space-5);
}
._ExternalInputModal-tableWrapper_143vl_173 {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  flex-grow: 1;
}
._ExternalInputModal-table_143vl_173 {
  border-collapse: unset;
  border-spacing: 0px;
  color: var(--puck-color-text);
  position: relative;
  z-index: 0;
  min-width: 100%;
}
._ExternalInputModal-thead_143vl_189 {
  background-color: var(--puck-color-surface);
  position: sticky;
  top: 0;
  z-index: 1;
}
._ExternalInputModal-th_143vl_189 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-td_143vl_204 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-tr_143vl_210 ._ExternalInputModal-td_143vl_204:first-of-type {
  font-weight: var(--puck-font-weight-medium);
  width: 1%;
  white-space: nowrap;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover {
    background: var(--puck-color-interactive-soft-hover);
    color: var(--puck-color-interactive);
    cursor: pointer;
    position: relative;
    margin-inline-start: -5px;
  }
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover ._ExternalInputModal-td_143vl_204:first-of-type {
    border-inline-start: var(--puck-border-width-strong) solid var(--puck-color-interactive);
    padding-inline-start: 20px;
  }
}
._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:last-of-type ._ExternalInputModal-td_143vl_204 {
  border-bottom: none;
}
._ExternalInputModal-tableWrapper_143vl_173 {
  display: none;
}
._ExternalInputModal--hasData_143vl_244 ._ExternalInputModal-tableWrapper_143vl_173 {
  display: block;
}
._ExternalInputModal-loadingBanner_143vl_248 {
  display: none;
  background-color: color-mix(in srgb, var(--puck-color-surface) 90%, transparent);
  padding: 64px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
._ExternalInputModal--isLoading_143vl_265 ._ExternalInputModal-loadingBanner_143vl_248 {
  display: flex;
}
._ExternalInputModal-searchForm_143vl_269 {
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-3);
  flex-grow: 1;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchForm_143vl_269 {
    flex-wrap: nowrap;
  }
}
._ExternalInputModal-search_143vl_269 {
  display: flex;
  background: var(--puck-color-surface);
  border-width: var(--puck-border-width-regular);
  border-style: solid;
  border-color: var(--puck-color-border);
  border-radius: var(--puck-radius-m);
  flex-grow: 1;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within {
  border-color: var(--puck-color-border-hover);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover {
    border-color: var(--puck-color-border-hover);
    transition: none;
  }
}
._ExternalInputModal-searchIcon_143vl_306 {
  align-items: center;
  background: var(--puck-color-surface-subtle);
  border-bottom-left-radius: var(--puck-radius-m);
  border-top-left-radius: var(--puck-radius-m);
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-subtle);
  display: flex;
  justify-content: center;
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within ._ExternalInputModal-searchIcon_143vl_306 {
  color: var(--puck-color-text-secondary);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover ._ExternalInputModal-searchIcon_143vl_306 {
    color: var(--puck-color-text-secondary);
    transition: none;
  }
}
._ExternalInputModal-searchIconText_143vl_333 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._ExternalInputModal-searchInput_143vl_343 {
  border: none;
  border-radius: var(--puck-radius-m);
  background: var(--puck-color-surface);
  font-family: inherit;
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  width: 100%;
}
._ExternalInputModal-searchInput_143vl_343:focus {
  outline: 0;
}
._ExternalInputModal-searchActions_143vl_358 {
  display: flex;
  gap: var(--puck-space-2);
  height: 44px;
  width: 100%;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchActions_143vl_358 {
    width: auto;
  }
}
._ExternalInputModal-searchActionIcon_143vl_371 {
  align-self: center;
}
._ExternalInputModal-footerContainer_143vl_375 {
  background-color: var(--puck-color-surface-subtle);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
}
._ExternalInputModal-footer_143vl_375 {
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  text-align: right;
}
._ExternalInputModal-field_143vl_388 {
  color: var(--puck-color-text-secondary);
  margin: var(--puck-space-4);
  margin-bottom: var(--puck-space-3);
  display: block;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Modal/styles.module.css/#css-module-data */
._Modal_g5xob_1 {
  background: var(--puck-color-overlay-backdrop);
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 32px;
}
._Modal--isOpen_g5xob_15 {
  display: flex;
}
._Modal-inner_g5xob_19 {
  width: 100%;
  max-width: 1024px;
  border-radius: var(--puck-radius-l);
  overflow: hidden;
  background: var(--puck-color-surface);
  display: flex;
  flex-direction: column;
  max-height: 90dvh;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Heading/styles.module.css/#css-module-data */
._Heading_97eh4_1 {
  display: block;
  color: var(--_puck-heading-color, var(--puck-color-text));
  font-weight: var(--puck-font-weight-bold);
  margin: 0;
}
._Heading_97eh4_1 b {
  font-weight: var(--puck-font-weight-bold);
}
._Heading--xxxxl_97eh4_12 {
  font-size: var(--puck-font-size-xxxxl);
  letter-spacing: var(--puck-letter-spacing-heading);
  font-weight: var(--puck-font-weight-heavy);
}
._Heading--xxxl_97eh4_18 {
  font-size: var(--puck-font-size-xxxl);
}
._Heading--xxl_97eh4_22 {
  font-size: var(--puck-font-size-xxl);
}
._Heading--xl_97eh4_26 {
  font-size: var(--puck-font-size-xl);
}
._Heading--l_97eh4_30 {
  font-size: var(--puck-font-size-l);
}
._Heading--m_97eh4_34 {
  font-size: var(--puck-font-size-m);
}
._Heading--s_97eh4_38 {
  font-size: var(--puck-font-size-s);
}
._Heading--xs_97eh4_42 {
  font-size: var(--puck-font-size-xs);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Button/Button.module.css/#css-module-data */
._Button_oe4qj_1 {
  --_puck-button-default-space-x: 20px;
  --_puck-button-default-font-size: var(--puck-font-size-xxs);
  --_puck-button-default-font-weight: var(--puck-font-weight-regular);
  --_puck-button-default-color-bg-disabled: var(--puck-color-bg-disabled);
  --_puck-button-default-color-text-disabled: var(--puck-color-text-disabled);
  appearance: none;
  background: none;
  border: var(--puck-border-width-regular) solid transparent;
  border-radius: var(--puck-button-radius, var(--puck-radius-m));
  color: var(--puck-color-text-inverse);
  display: inline-flex;
  align-items: center;
  gap: var(--puck-space-2);
  letter-spacing: var(--puck-letter-spacing-ui);
  font-family: var(--puck-font-family);
  box-sizing: border-box;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
}
._Button_oe4qj_1:hover,
._Button_oe4qj_1:active {
  transition: none;
}
._Button--medium_oe4qj_34 {
  min-height: 34px;
  padding-bottom: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-medium-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-medium-font-size, var(--_puck-button-default-font-size) );
}
._Button--large_oe4qj_62 {
  padding-bottom: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-large-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-large-font-size, var(--_puck-button-default-font-size) );
}
._Button-icon_oe4qj_89 {
  margin-top: 2px;
}
._Button--primary_oe4qj_93 {
  background: var( --puck-button-primary-color-bg, var(--puck-color-interactive) );
  border-color: var(--puck-button-primary-color-border, transparent);
  color: var(--puck-button-primary-color-text, var(--puck-color-text-inverse));
}
._Button_oe4qj_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--primary_oe4qj_93:hover {
    background-color: var( --puck-button-primary-color-bg-hover, var(--puck-color-interactive-hover) );
  }
}
._Button--primary_oe4qj_93:active {
  background-color: var( --puck-button-primary-color-bg-active, var(--puck-color-interactive-active) );
}
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123,
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-primary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-primary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--secondary_oe4qj_135 {
  background: var(--puck-button-secondary-color-bg, transparent);
  border-color: var(--puck-button-secondary-color-border, currentColor);
  color: var(--puck-button-secondary-color-text, currentColor);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--secondary_oe4qj_135:hover {
    background-color: var( --puck-button-secondary-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var(--puck-button-secondary-color-text, var(--puck-color-text));
  }
}
._Button--secondary_oe4qj_135:active {
  background-color: var( --puck-button-secondary-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-button-secondary-color-text, var(--puck-color-text));
}
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123,
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-secondary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-secondary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--flush_oe4qj_171 {
  border-radius: var(--puck-radius-none);
}
._Button--disabled_oe4qj_123:hover {
  cursor: not-allowed;
}
._Button--fullWidth_oe4qj_179 {
  justify-content: center;
  width: 100%;
}
._Button-spinner_oe4qj_184 {
  padding-inline-start: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Select/styles.module.css/#css-module-data */
._Select_1n4iv_1 {
  position: relative;
  z-index: 1;
}
._Select-buttonInner_1n4iv_6 {
  align-items: center;
  display: flex;
}
._Select-buttonIcon_1n4iv_11 {
  align-items: center;
  display: flex;
  justify-content: center;
}
._Select--standalone_1n4iv_17 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Select--actionBar_1n4iv_22 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._Select-items_1n4iv_27 {
  background: var(--puck-color-surface);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-l);
  margin: 10px 8px;
  margin-left: 0;
  padding: var(--puck-space-1);
  z-index: 2;
  list-style: none;
}
._SelectItem_1n4iv_38 {
  background: transparent;
  border-radius: var(--puck-radius-m);
  border: none;
  color: var(--puck-color-text-secondary);
  cursor: pointer;
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  font-size: var(--puck-font-size-xxs);
  margin: 0;
  padding: var(--puck-space-2) var(--puck-space-3);
  width: 100%;
}
._SelectItem--isSelected_1n4iv_53 {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
  font-weight: var(--puck-font-weight-medium);
}
._SelectItem--isSelected_1n4iv_53 ._SelectItem-icon_1n4iv_59 {
  color: var(--puck-color-interactive);
}
._SelectItem_1n4iv_38:hover {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextEditor/styles.module.css/#css-module-data */
._RichTextEditor_5wzos_1 .ProseMirror {
  white-space: pre-wrap;
  word-wrap: break-word;
  cursor: text;
  outline: none;
  position: relative;
}
._RichTextEditor_5wzos_1 .rich-text * {
  white-space: pre-wrap;
  user-select: auto;
  -webkit-user-select: auto;
}
._RichTextEditor_5wzos_1 .rich-text blockquote {
  margin: 1em 0;
  padding: 0 1em;
  border-left: var(--puck-border-width-strong) solid var(--puck-color-border);
}
._RichTextEditor_5wzos_1 .rich-text code {
  background-color: var(--puck-color-surface-muted);
  padding: var(--puck-space-1) var(--puck-space-2);
  border-radius: var(--puck-radius-m);
}
._RichTextEditor_5wzos_1 .rich-text p:empty::before {
  content: "\\a0";
}
._RichTextEditor_5wzos_1 .rich-text pre code {
  display: block;
  padding: var(--puck-space-2) var(--puck-space-3);
}
._RichTextEditor_5wzos_1 .rich-text > *:first-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:first-child,
._RichTextEditor_5wzos_1 .rich-text * p:first-of-type {
  margin-top: 0;
}
._RichTextEditor_5wzos_1 .rich-text > *:last-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:last-child,
._RichTextEditor_5wzos_1 .rich-text * p:last-of-type {
  margin-bottom: 0;
}
._RichTextEditor--editor_5wzos_50 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  resize: vertical;
  text-align: initial;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
  min-height: 128px;
}
._RichTextEditor--editor_5wzos_50 .rich-text {
  flex-grow: 1;
}
._RichTextEditor--editor_5wzos_50 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50 .rich-text .ProseMirror {
  height: 100%;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}
._RichTextEditor--editor_5wzos_50 .rich-text ul,
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  padding-left: var(--puck-space-5);
}
._RichTextEditor--editor_5wzos_50 .rich-text li {
  line-height: 1.5;
}
._RichTextEditor--editor_5wzos_50 .rich-text p {
  margin-block: var(--puck-space-3);
}
._RichTextEditor--editor_5wzos_50 .rich-text ul {
  list-style: disc;
}
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  list-style: decimal;
}
._RichTextEditor--editor_5wzos_50:focus-within {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._RichTextEditor--editor_5wzos_50:hover:not(._RichTextEditor--disabled_5wzos_123) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 {
  background: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text .ProseMirror {
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .ProseMirror[contenteditable=false] {
  cursor: default;
}
._RichTextEditor_5wzos_1:not(:focus-within):not(._RichTextEditor--isActive_5wzos_159) .ProseMirror ::selection {
  background-color: transparent;
}
._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  position: sticky;
  top: 0;
  z-index: 1;
}
._RichTextEditor--disabled_5wzos_123 ._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ObjectField/styles.module.css/#css-module-data */
._ObjectField_c5reb_1 {
  display: flex;
  flex-direction: column;
  background-color: var(--puck-field-color-surface, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
}
._ObjectField-fieldset_c5reb_10 {
  border: none;
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1627v_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent-overlayWrapper_1627v_6 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1627v_6 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_1627v_38 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {
  display: none;
}
._DraggableComponent-actionsOverlay_1627v_89 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1627v_89 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_1627v_111 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Fields/styles.module.css/#css-module-data */
._PuckFields_wnj25_1 {
  position: relative;
  font-family: var(--puck-font-family);
}
._PuckFields--isLoading_wnj25_6 {
  min-height: 48px;
}
._PuckFields-loadingOverlay_wnj25_10 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  top: 0px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}
._PuckFields-loadingOverlayInner_wnj25_25 {
  display: flex;
  padding: var(--puck-space-4);
  position: sticky;
  top: 0;
}
._PuckFields-field_wnj25_32 * {
  box-sizing: border-box;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 {
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
  padding-bottom: var(--puck-space-3);
  display: block;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 + ._PuckFields-field_wnj25_32 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-top: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ComponentList/styles.module.css/#css-module-data */
._ComponentList_htktj_1 {
  max-width: 100%;
}
._ComponentList--isExpanded_htktj_5 + ._ComponentList_htktj_1 {
  margin-top: var(--puck-space-3);
}
._ComponentList-content_htktj_9 {
  display: none;
}
._ComponentList--isExpanded_htktj_5 > ._ComponentList-content_htktj_9 {
  display: block;
}
._ComponentList-title_htktj_17 {
  background-color: transparent;
  border: 0;
  color: var(--puck-drawer-category-color-text, var(--puck-color-text-muted));
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: var(--puck-drawer-category-font-size, var(--puck-font-size-xxxs));
  list-style: none;
  margin-bottom: 6px;
  padding: var(--puck-drawer-category-space, var(--puck-space-2));
  text-transform: uppercase;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  gap: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  width: 100%;
}
._ComponentList-title_htktj_17:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ComponentList-title_htktj_17:hover {
    background-color: var( --puck-drawer-category-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var( --puck-drawer-category-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._ComponentList-title_htktj_17:active {
  background-color: var( --puck-drawer-category-color-bg-active, var(--puck-color-interactive-subtle) );
  transition: none;
}
._ComponentList-titleIcon_htktj_63 {
  margin-inline-start: auto;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Preview/styles.module.css/#css-module-data */
._PuckPreview_zbic3_1 {
  position: relative;
  height: 100%;
}
._PuckPreview-frame_zbic3_6 {
  border: none;
  height: 100%;
  width: 100%;
}
._PuckPreview-frame_zbic3_6[data-puck-outline-dragging] {
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/drop-line/styles.module.css/#css-module-data */
._DropLine_eyz3q_2 {
  background: var(--_puck-outline-color-drop-indicator);
  border-radius: calc(var(--_puck-outline-drop-indicator-size) / 2);
  height: var(--_puck-outline-drop-indicator-size);
  inset-inline: 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropLine--top_eyz3q_12 {
  top: 0;
}
._DropLine--bottom_eyz3q_16 {
  bottom: 0;
}
._DropLine--top_eyz3q_12._DropLine--outset_eyz3q_20 {
  top: calc(-1 * var(--_puck-outline-drop-indicator-size));
}
._DropLine--bottom_eyz3q_16._DropLine--outset_eyz3q_20 {
  bottom: calc(-1 * var(--_puck-outline-drop-indicator-size));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/empty-zone-placeholder/styles.module.css/#css-module-data */
._LayerTree-helper_1m7e4_2 {
  color: var(--puck-outline-color-text-helper, var(--puck-color-text-subtle));
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-helperRoot_1m7e4_11 {
  padding-inline-start: var(--puck-space-3);
}
._LayerTree-helper_1m7e4_2[data-puck-drop-target] {
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer/styles.module.css/#css-module-data */
._Layer_onfgu_1 {
  position: relative;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
}
._Layer-inner_onfgu_8 {
  align-items: center;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Layer--isSortable_onfgu_18 > ._Layer-inner_onfgu_8 {
  cursor: grab;
}
._Layer-content_onfgu_22 {
  display: flex;
  gap: var(--puck-space-4);
  flex: 1 1 auto;
  min-width: 0;
}
._Layer-clickable_onfgu_29 {
  align-items: center;
  background: none;
  border: 0;
  border-radius: var(--_puck-outline-radius);
  color: inherit;
  cursor: inherit;
  display: flex;
  flex: 1 1 auto;
  font: inherit;
  min-width: 0;
  padding: 0;
}
[data-puck-dnd-disabled] ._Layer-inner_onfgu_8,
[data-puck-dnd-disabled] ._Layer-clickable_onfgu_29 {
  cursor: pointer;
}
._Layer-clickable_onfgu_29:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
  z-index: 1;
}
._Layer-caret_onfgu_57 {
  visibility: hidden;
  display: flex;
  flex-shrink: 0;
}
._Layer-caret_onfgu_57 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-content_onfgu_22 {
  font-weight: var(--puck-font-weight-bold);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 {
  visibility: visible;
}
._Layer-title_onfgu_76 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  margin: var(--puck-space-1);
  cursor: pointer;
}
._Layer-name_onfgu_85 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._Layer-icon_onfgu_91 {
  color: var(--puck-outline-color-icon, var(--puck-color-text-subtle));
  margin-top: var(--puck-space-1);
}
._Layer-icon_onfgu_91 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._Layer-zones_onfgu_101 {
  display: none;
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-4));
}
._Layer--isExpanded_onfgu_106 > ._Layer-zones_onfgu_101 {
  display: block;
}
._Layer--isExpanded_onfgu_106 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 svg {
  transform: rotate(90deg);
}
@media (hover: hover) and (pointer: fine) {
  ._Layer_onfgu_1:not(._Layer--isSelected_onfgu_115) > ._Layer-inner_onfgu_8:hover {
    --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-hover);
    border-color: var(--_puck-outline-color-border-hover);
    background: var(--_puck-outline-color-bg-hover);
    transition: none;
  }
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  border-color: var( --puck-outline-color-border-selected, var(--puck-color-selection-border) );
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-selected);
  background: var(--_puck-outline-color-bg-selected);
}
._Layer--isExpandCandidate_onfgu_138 > ._Layer-inner_onfgu_8 {
  border-color: var(--_puck-outline-color-border-hover);
  background: var(--_puck-outline-color-bg-hover);
}
._Layer--isDragSource_onfgu_143 > ._Layer-inner_onfgu_8 {
  color: var(--puck-color-text-muted);
  background: transparent;
}
._Layer--isDragSource_onfgu_143 > ._Layer-zones_onfgu_101 {
  opacity: 0.5;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-actions/styles.module.css/#css-module-data */
._LayerActions_d90t9_2 {
  position: sticky;
  inset-inline-end: calc(var(--puck-space-1) * -1);
  padding-inline: var(--puck-space-1);
  display: flex;
  visibility: hidden;
  flex-shrink: 0;
  color: var(--_puck-outline-color-text);
  background: var(--_puck-outline-actions-color-bg);
  border-top-right-radius: var(--_puck-outline-radius);
  border-bottom-right-radius: var(--_puck-outline-radius);
}
._LayerActions--visible_d90t9_18 {
  visibility: visible;
}
._LayerActions_d90t9_2 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-items/styles.module.css/#css-module-data */
._LayerTree_o5tyt_1 {
  color: var(--_puck-outline-color-text);
  font-family: var(--puck-outline-font-family, var(--puck-font-family));
  font-size: var(--puck-outline-font-size, var(--puck-font-size-xxxs));
  margin: 0;
  position: relative;
  list-style: none;
  padding: 0;
}
._LayerTree--nested_o5tyt_12 {
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-3));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-zone/styles.module.css/#css-module-data */
._LayerTree-zoneTitle_fvhlh_2 {
  color: var(--_puck-outline-zone-color-text);
  font-size: var( --puck-outline-zone-font-size, calc(var(--puck-font-size-xxxs) * 0.9) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-zoneIcon_fvhlh_19 {
  margin-top: var(--puck-space-1);
}
._LayerTree-zoneIcon_fvhlh_19 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._LayerTree-zoneTitle_fvhlh_2[data-puck-drop-target] {
  color: var(--_puck-outline-color-text-hover);
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/styles.module.css/#css-module-data */
._LayerTreeRoot_1qowl_1 {
  min-width: max-content;
  --_puck-iconbutton-color-bg-hover: transparent;
  --_puck-outline-color-text: var( --puck-outline-color-text, var(--puck-color-text-primary) );
  --_puck-outline-border-width: var( --puck-outline-border-width, var(--puck-border-width-regular) );
  --_puck-outline-radius: var(--puck-outline-radius, var(--puck-radius-m));
  --_puck-outline-caret-size: var( --puck-outline-action-size, var(--puck-icon-size-s) );
  --_puck-outline-icon-size: var( --puck-outline-icon-size, var(--puck-icon-size-xs) );
  --_puck-outline-color-bg-selected: var( --puck-outline-color-bg-selected, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-bg-hover: var( --puck-outline-color-bg-hover, var(--puck-color-interactive-soft) );
  --_puck-outline-color-border-hover: var( --puck-outline-color-border-hover, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-text-hover: var( --puck-outline-color-text-hover, var(--puck-color-interactive) );
  --_puck-outline-color-drop-indicator: var( --puck-outline-color-drop-indicator, var(--puck-color-line-placeholder) );
  --_puck-outline-drop-indicator-size: var(--puck-line-placeholder-width);
  --_puck-outline-zone-color-text: var( --puck-outline-zone-color-text, var(--puck-color-text-muted) );
  --_puck-outline-actions-color-bg: transparent;
  --_puck-outline-caret-slot: calc( var(--_puck-outline-caret-size) + var(--puck-iconbutton-space, var(--puck-space-1)) * 2 );
  --_puck-outline-label-indent: calc( var(--_puck-outline-caret-slot) + var(--puck-space-2) + var(--_puck-outline-border-width) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/collapse-all/styles.module.css/#css-module-data */
._CollapseAll_1r4cy_1 {
  visibility: hidden;
}
._CollapseAll-icon_1r4cy_5 {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._CollapseAll--visible_1r4cy_10 {
  visibility: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/outline-header/styles.module.css/#css-module-data */
._OutlineHeader_ntv8r_1 {
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--puck-space-2);
  padding-block: var(--puck-space-3);
  padding-inline: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/styles.module.css/#css-module-data */
._OutlineWrapper_b9ln0_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
}
._OutlineWrapper-collapseAll_b9ln0_9 {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}
._OutlineWrapper-layers_b9ln0_15 {
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  padding: var(--puck-space-1);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Layout/styles.module.css/#css-module-data */
._Puck_tzaxg_19 {
  font-family: var(--puck-font-family);
  overflow-x: hidden;
  visibility: visible !important;
}
@media (min-width: 766px) {
  ._Puck_tzaxg_19 {
    overflow-x: auto;
  }
}
._Puck-portal_tzaxg_31 {
  position: relative;
  z-index: 2;
}
._PuckLayout_tzaxg_36 {
  height: 100dvh;
}
._PuckLayout-inner_tzaxg_40 {
  --puck-frame-width: auto;
  --puck-pluginbar-width: min-content;
  --puck-sidebar-width: 0px;
  --puck-sidebar-left-width: var( --puck-user-sidebar-left-width, var(--puck-sidebar-width) );
  --puck-sidebar-right-width: var( --puck-user-sidebar-right-width, var(--puck-sidebar-width) );
  background-color: var(--puck-color-surface-subtle);
  display: grid;
  grid-template-areas: "header" "editor" "left" "right" "sidenav";
  grid-template-columns: var(--puck-frame-width);
  grid-template-rows: min-content auto 0 0 var(--puck-pluginbar-width);
  height: 100%;
  position: relative;
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-exit);
  z-index: 0;
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 68px;
    grid-template-areas: "header header header header" "sidenav left editor right";
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) 0;
    grid-template-rows: min-content auto;
  }
  ._Puck--hidePlugins_tzaxg_73 ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 0;
  }
}
._PuckLayout--mounted_tzaxg_78 ._PuckLayout-inner_tzaxg_40 {
  --puck-sidebar-width: 186px;
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 30% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 55% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto min-content 0 var(--puck-pluginbar-width);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
@media (min-width: 638px) {
  ._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 458px) {
  ._PuckLayout-mounted_tzaxg_156 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: minmax(266px, auto);
  }
}
@media (min-width: 638px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: minmax(186px, 250px);
  }
}
@media (min-width: 766px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: auto;
  }
}
@media (min-width: 990px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 256px;
  }
}
@media (min-width: 1198px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 274px;
  }
}
@media (min-width: 1398px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 290px;
  }
}
@media (min-width: 1598px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 320px;
  }
}
._PuckLayout-nav_tzaxg_197 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  background-color: var( --puck-pluginbar-color-bg, var(--puck-color-surface-subtle) );
  grid-area: sidenav;
  overflow: hidden;
  width: 100%;
}
@media (min-width: 638px) {
  ._PuckLayout-nav_tzaxg_197 {
    border-top: 0;
    border-right: var(--puck-border-width-regular) solid var(--puck-color-border);
    box-sizing: border-box;
  }
}
._PuckLayout-header_tzaxg_217 {
  grid-area: header;
}
._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
    overflow: auto;
  }
}
._PuckPluginTab_tzaxg_231 {
  display: none;
  flex-grow: 1;
  max-height: 100%;
}
._PuckPluginTab--visible_tzaxg_237 {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
._PuckPluginTab-body_tzaxg_243 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/MenuBar/styles.module.css/#css-module-data */
._MenuBar_1hxnj_1 {
  background-color: var(--_puck-menu-bar-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: none;
  left: 0;
  margin-top: 1px;
  padding: var(--puck-space-2) var(--puck-space-4);
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
}
._MenuBar--menuOpen_1hxnj_14 {
  display: block;
}
@media (min-width: 638px) {
  ._MenuBar_1hxnj_1 {
    border: none;
    display: block;
    margin-top: 0;
    overflow-y: visible;
    padding: 0;
    position: static;
  }
}
._MenuBar-inner_1hxnj_29 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-2) var(--puck-space-4);
  justify-content: flex-end;
}
@media (min-width: 638px) {
  ._MenuBar-inner_1hxnj_29 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
._MenuBar-history_1hxnj_45 {
  display: flex;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Header/styles.module.css/#css-module-data */
._PuckHeader_c2nei_1 {
  --_puck-menu-bar-color-bg: var( --puck-header-color-bg, var(--puck-color-surface) );
  background: var(--puck-header-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-header-color-text, var(--puck-color-text));
  --_puck-heading-color: var(--puck-header-color-text, var(--puck-color-text));
  grid-area: header;
  position: relative;
  max-width: 100vw;
}
@media (min-width: 638px) {
  ._PuckHeader_c2nei_1 {
    padding-left: 67px;
  }
  ._PuckHeader--hidePlugins_c2nei_21 {
    padding-left: 0;
  }
}
._PuckHeader-inner_c2nei_26 {
  align-items: end;
  display: grid;
  gap: var(--puck-space-chrome-gutter);
  grid-template-areas: "left middle right";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  padding: var(--puck-space-chrome-gutter);
}
@media (min-width: 638px) {
  ._PuckHeader-inner_c2nei_26 {
    border-left: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
  ._PuckHeader--hidePlugins_c2nei_21 ._PuckHeader-inner_c2nei_26 {
    border-left: none;
  }
}
._PuckHeader-toggle_c2nei_46 {
  display: flex;
  margin-inline-start: calc(var(--puck-space-1) * -1);
  padding-top: 2px;
}
._PuckHeader-rightSideBarToggle_c2nei_52,
._PuckHeader-leftSideBarToggle_c2nei_53 {
  display: none;
}
@media (min-width: 638px) {
  ._PuckHeader-rightSideBarToggle_c2nei_52,
  ._PuckHeader-leftSideBarToggle_c2nei_53 {
    display: block;
  }
}
._PuckHeader-title_c2nei_64 {
  align-self: center;
}
._PuckHeader-path_c2nei_68 {
  font-family: var(--puck-font-family-monospaced);
  font-size: var(--puck-font-size-xxs);
  font-weight: normal;
  word-break: break-all;
}
._PuckHeader-tools_c2nei_75 {
  display: flex;
  gap: var(--puck-space-4);
  justify-content: flex-end;
}
._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text-muted);
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._PuckHeader--menuOpen_c2nei_86 ._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text);
}
@media (min-width: 638px) {
  ._PuckHeader-menuButton_c2nei_81 {
    display: none;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/SidebarSection/styles.module.css/#css-module-data */
._SidebarSection_1uv88_1 {
  display: flex;
  position: relative;
  flex-direction: column;
  color: var(--puck-color-text);
}
._SidebarSection_1uv88_1:last-of-type {
  flex-grow: 1;
}
._SidebarSection-title_1uv88_12 {
  background: var(--_puck-sidebar-section-color-bg, var(--puck-color-surface));
  padding: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  overflow-x: auto;
}
._SidebarSection--noBorderTop_1uv88_20 > ._SidebarSection-title_1uv88_12 {
  border-top: 0px;
}
._SidebarSection-content_1uv88_24:last-child {
  padding-bottom: var(--puck-space-1);
}
._SidebarSection_1uv88_1:last-of-type ._SidebarSection-content_1uv88_24 {
  border-bottom: none;
  flex-grow: 1;
}
._SidebarSection-breadcrumbLabel_1uv88_33 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._SidebarSection-breadcrumbLabel_1uv88_33:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._SidebarSection-breadcrumbLabel_1uv88_33:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._SidebarSection-breadcrumbLabel_1uv88_33:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._SidebarSection-breadcrumbs_1uv88_62 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-breadcrumb_1uv88_33 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-heading_1uv88_74 {
  padding-inline-end: var(--puck-space-4);
}
._SidebarSection-loadingOverlay_1uv88_78 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Breadcrumbs/styles.module.css/#css-module-data */
._Breadcrumbs_8c6w5_1 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Breadcrumbs-breadcrumbLabel_8c6w5_7:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._Breadcrumbs-breadcrumb_8c6w5_7 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ViewportControls/styles.module.css/#css-module-data */
._ViewportControls_v26yb_1 {
  position: relative;
}
._ViewportControls--fullScreen_v26yb_5 {
  border-radius: 32px;
  display: flex;
  position: absolute;
  bottom: var(--puck-space-3);
  right: var(--puck-space-3);
  overflow: hidden;
}
._ViewportControls-toggleButton_v26yb_14 {
  display: none;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14 {
  align-items: center;
  background-color: var(--puck-color-surface-inverse);
  border: var(--puck-border-width-regular) solid var(--puck-color-border-inverse);
  border-radius: var(--puck-radius-pill);
  cursor: pointer;
  color: var(--puck-color-text-inverse);
  display: flex;
  justify-content: center;
  width: 42px;
  height: 42px;
  z-index: 1;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14:hover {
  color: var(--puck-color-interactive-inverse-hover);
  border: var(--puck-border-width-regular) solid var(--puck-color-interactive-inverse-hover);
}
._ViewportControls-actions_v26yb_39 {
  display: flex;
}
._ViewportControls-actionsInner_v26yb_43 {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  background: var(--puck-color-surface-muted);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-pill);
  margin-left: none;
  margin-right: none;
  padding-right: 42px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(100%);
  transition: transform var(--puck-duration-medium) var(--puck-ease-emphasized);
}
._ViewportControls--fullScreen_v26yb_5._ViewportControls--isExpanded_v26yb_67 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(42px);
}
._ViewportControls-divider_v26yb_72 {
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-bottom: var(--puck-space-2);
  margin-top: var(--puck-space-2);
}
._ViewportControls-zoomSelect_v26yb_79 {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23c3c3c3'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 10px;
  color: currentColor;
  background-position: calc(100% - 12px) calc(50% + 3px);
  background-repeat: no-repeat;
  border: 0;
  font-size: var(--puck-font-size-xxxs);
  padding: 0;
  padding-left: var(--puck-space-2);
  width: 96px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
  display: none;
}
@media (min-width: 638px) {
  ._ViewportControls-zoom_v26yb_79,
  ._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
    display: flex;
    justify-content: center;
  }
}
._ViewportControls-zoomSelect_v26yb_79:dir(rtl) {
  background-position: 12px calc(50% + 3px);
}
._ViewportButton-inner_v26yb_110 {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
}
._ViewportButton--isActive_v26yb_118 ._ViewportButton-inner_v26yb_110 {
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Canvas/styles.module.css/#css-module-data */
._PuckCanvas_zw9iy_1 {
  color: var(--puck-canvas-color-text, var(--puck-color-text));
  background: var(--puck-canvas-color-bg, var(--puck-color-surface-muted));
  display: flex;
  grid-area: editor;
  flex-direction: column;
  padding: var(--puck-space-chrome-gutter);
  position: relative;
  overflow: auto;
}
@media (min-width: 1198px) {
  ._PuckCanvas_zw9iy_1 {
    padding: calc(var(--puck-space-chrome-gutter) * 1.5);
    padding-top: calc(var(--puck-space-chrome-gutter) * 0.5);
  }
  ._PuckCanvas_zw9iy_1:not(._PuckCanvas_zw9iy_1:has(._PuckCanvas-controls_zw9iy_18)) {
    padding-top: calc(var(--puck-space-chrome-gutter) * 1.5);
  }
}
._PuckCanvas--fullScreen_zw9iy_23 {
  padding: 0;
  overflow: hidden;
}
@media (min-width: 1198px) {
  ._PuckCanvas--fullScreen_zw9iy_23 {
    padding: 0;
  }
}
._PuckCanvas-inner_zw9iy_34 {
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 288px;
  position: relative;
  width: 100%;
}
._PuckCanvas-root_zw9iy_43 {
  background: var(--puck-canvas-preview-color-bg, var(--puck-color-surface));
  outline: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: content-box;
  min-width: 321px;
  position: absolute;
  pointer-events: none;
  transform-origin: top;
  top: 0;
  bottom: 0;
  opacity: 0;
}
@media (min-width: 1198px) {
  ._PuckCanvas-root_zw9iy_43 {
    min-width: unset;
  }
}
@media (prefers-reduced-motion: reduce) {
  ._PuckCanvas-root_zw9iy_43 {
    transition: none !important;
  }
}
._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-root_zw9iy_43 {
  pointer-events: unset;
  opacity: 1;
}
._PuckCanvas-loader_zw9iy_73 {
  align-items: center;
  color: var(--puck-color-text-subtle);
  display: flex;
  height: 100%;
  justify-content: center;
  transition: opacity var(--puck-duration-slow) var(--puck-ease-entrance);
  opacity: 0;
  pointer-events: none;
}
._PuckCanvas--showLoader_zw9iy_84 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 1;
}
._PuckCanvas--showLoader_zw9iy_84._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 0;
  height: 0;
  transition: none;
}
._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: calc(var(--puck-space-chrome-gutter) * 0.5);
}
._PuckCanvas--fullScreen_zw9iy_23 ._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: 0;
  z-index: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/ResizeHandle/styles.module.css/#css-module-data */
@media (min-width: 766px) {
  ._ResizeHandle_144bf_2 {
    position: absolute;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    background: transparent;
    top: 0;
  }
  ._ResizeHandle_144bf_2:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ._ResizeHandle--left_144bf_16 {
    right: -3px;
  }
  ._ResizeHandle--right_144bf_20 {
    left: -3px;
  }
}

/* components/Puck/components/ResizeHandle/styles.css */
[data-resize-overlay] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  cursor: col-resize;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Sidebar/styles.module.css/#css-module-data */
._Sidebar_16oed_1 {
  border-block-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  position: relative;
  display: none;
  flex-direction: column;
  overflow-y: auto;
}
._Sidebar--isVisible_16oed_10 {
  display: flex;
}
._Sidebar--left_16oed_14 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-left-color-bg, var(--puck-color-surface) );
  background: var( --puck-sidebar-left-color-bg, var(--puck-color-surface-subtle) );
  grid-area: left;
}
@media (min-width: 766px) {
  ._Sidebar--left_16oed_14 {
    border-block-start: 0;
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar--right_16oed_34 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-right-color-bg, var(--puck-color-surface) );
  background: var(--puck-sidebar-right-color-bg, var(--puck-color-surface));
  grid-area: right;
}
@media (min-width: 766px) {
  ._Sidebar--right_16oed_34 {
    border-block-start: 0;
    border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar-resizeHandle_16oed_51 {
  position: absolute;
  height: 100%;
}
._Sidebar--left_16oed_14 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: left;
  justify-self: end;
}
._Sidebar--right_16oed_34 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: right;
  justify-self: start;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Nav/styles.module.css/#css-module-data */
._Nav_vll2r_1 {
  display: flex;
}
._Nav-list_vll2r_5 {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  gap: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._Nav-list_vll2r_5 {
    padding-top: 32px;
    flex-direction: column;
    gap: var(--puck-space-4);
    width: 100%;
  }
}
._Nav-mobileActions_vll2r_23 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline-start: auto;
  padding: var(--puck-space-1) var(--puck-space-4);
  border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
}
@media (min-width: 638px) {
  ._Nav-mobileActions_vll2r_23 {
    display: none;
  }
}
._NavItem-link_vll2r_39 {
  text-align: center;
  align-items: center;
  color: var(--puck-pluginbar-color-text, var(--puck-color-text-secondary));
  display: flex;
  gap: var(--puck-space-2);
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--puck-radius-m);
  padding: var(--puck-space-2) var(--puck-space-1);
  width: 64px;
  box-sizing: border-box;
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    width: auto;
  }
}
._NavItem_vll2r_39:first-of-type {
  padding-left: var(--puck-space-4);
}
._NavItem_vll2r_39:last-of-type {
  padding-right: var(--puck-space-4);
}
@media (min-width: 638px) {
  ._NavItem_vll2r_39:first-of-type,
  ._NavItem_vll2r_39:last-of-type {
    padding: 0;
  }
}
._NavItem-link_vll2r_39 {
  border-top: var(--puck-border-width-strong) solid transparent;
  border-bottom: var(--puck-border-width-strong) solid transparent;
  border-radius: var(--puck-radius-none);
  flex-direction: column;
  font-size: var(--puck-pluginbar-font-size, var(--puck-font-size-xxxs));
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    border: 0;
    border-left: var(--puck-border-width-strong) solid transparent;
    border-right: var(--puck-border-width-strong) solid transparent;
  }
}
._NavItem-linkIcon_vll2r_90 {
  height: 2em;
  width: 2em;
}
._NavItem-linkIcon_vll2r_90 svg {
  height: 100%;
  width: 100%;
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: var(--puck-color-interactive-subtle);
  color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  font-weight: var(--puck-font-weight-semibold);
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: transparent;
  border-top-color: var(--puck-color-interactive);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: var(--puck-font-weight-semibold);
}
@media (min-width: 638px) {
  ._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
    border-top-color: transparent;
    border-right-color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  }
}
._NavItem_vll2r_39:not(._NavItem--active_vll2r_100) > ._NavItem-link_vll2r_39:hover {
  background-color: var( --puck-pluginbar-color-bg-hover, var(--puck-color-interactive-soft) );
  color: var(--puck-pluginbar-color-text-hover, var(--puck-color-interactive));
}
@media (min-width: 638px) {
  ._NavItem--mobileOnly_vll2r_136 {
    display: none;
  }
}
._NavItem--desktopOnly_vll2r_141 {
  display: none;
}
@media (min-width: 638px) {
  ._NavItem--desktopOnly_vll2r_141 {
    display: block;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/blocks/styles.module.css/#css-module-data */
._BlocksPlugin_9af19_1 {
  padding: var(--puck-drawer-space, var(--puck-space-4));
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/outline/styles.module.css/#css-module-data */
._OutlinePlugin_1ylsc_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
  position: relative;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/fields/styles.module.css/#css-module-data */
._FieldsPlugin_18cj3_1 {
  background: var(--puck-color-surface);
  height: 100%;
  overflow-y: auto;
}
._FieldsPlugin-header_18cj3_7 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  font-weight: var(--puck-font-weight-semibold);
  padding-bottom: var(--puck-space-2);
  padding-left: var(--puck-space-4);
  padding-right: var(--puck-space-4);
  padding-top: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._FieldsPlugin-header_18cj3_7 {
    padding: var(--puck-space-4);
  }
}`,t1="data-puck-style-source",t2="puck",t4={uiDefault:"ui-default",iframeInteractions:"iframe-styles"},t3=new WeakMap,t6=(e,r,t=!1)=>{let o=e.head;if(o){if(r.parentElement!==o)return void(t?o.prepend(r):o.append(r));t&&o.firstChild!==r&&o.prepend(r),t||o.lastChild===r||o.append(r)}},t5=e=>(null==e?void 0:e.getAttribute(t1))===t2,t8=e=>{let r=(e=>e||("undefined"!=typeof document?document:void 0))(null==e?void 0:e.document);(0,p.useInsertionEffect)(()=>{if(!e||!r)return;let t=(e=>{let r=t3.get(e);if(r)return r;let t=new Map;return t3.set(e,t),t})(r),o=t.get(e.id);if(o)o.count=o.count+1,o.el.textContent!==e.cssText&&(o.el.textContent=e.cssText),t6(r,o.el,e.prepend);else{let o=((e,r,t,o=!1)=>{let n=e.createElement("style");return n.setAttribute(t1,t2),n.setAttribute("data-puck-style-id",r),n.textContent=t,t6(e,n,o),n})(r,e.id,e.cssText,e.prepend);t.set(e.id,{count:1,el:o})}return()=>{let r=t.get(e.id);r&&(r.count=r.count-1,r.count<=0&&(r.el.remove(),t.delete(e.id)))}},[null==e?void 0:e.cssText,null==e?void 0:e.id,null==e?void 0:e.prepend,null==e?void 0:e.document,r])},t9=null,t7='style, link[rel="stylesheet"]',oe="data-puck-style-mirror",or=e=>!(!e.matches(t7)||t5(e))&&("STYLE"!==e.tagName||!!e.innerHTML.trim()),ot=e=>Array.from(document.styleSheets).find(r=>r.ownerNode.href===e.href),oo=(e,r)=>{let t=e.attributes;(null==t?void 0:t.length)>0&&Array.from(t).forEach(e=>{r.setAttribute(e.name,e.value)})},on=e=>setTimeout(e,0),oa=({children:e,debug:r=!1,onStylesLoaded:t=()=>null,syncHostStyles:o=!0})=>{let{document:n,window:a}=ol();return(e=>{t8(e?{cssText:'/* styles/color.css */\n@layer puck-tokens {\n  :root {\n    --puck-color-rose-01: #4a001c;\n    --puck-color-rose-02: #670833;\n    --puck-color-rose-03: #87114c;\n    --puck-color-rose-04: #a81a66;\n    --puck-color-rose-05: #bc5089;\n    --puck-color-rose-06: #cc7ca5;\n    --puck-color-rose-07: #d89aba;\n    --puck-color-rose-08: #e3b8cf;\n    --puck-color-rose-09: #efd6e3;\n    --puck-color-rose-10: #f6eaf1;\n    --puck-color-rose-11: #faf4f8;\n    --puck-color-rose-12: #fef8fc;\n    --puck-color-azure-01: #00175d;\n    --puck-color-azure-02: #002c77;\n    --puck-color-azure-03: #014292;\n    --puck-color-azure-04: #0158ad;\n    --puck-color-azure-05: #3479be;\n    --puck-color-azure-06: #6499cf;\n    --puck-color-azure-07: #88b0da;\n    --puck-color-azure-08: #abc7e5;\n    --puck-color-azure-09: #cfdff0;\n    --puck-color-azure-10: #e7eef7;\n    --puck-color-azure-11: #f3f6fb;\n    --puck-color-azure-12: #f7faff;\n    --puck-color-green-01: #002000;\n    --puck-color-green-02: #043604;\n    --puck-color-green-03: #084e08;\n    --puck-color-green-04: #0c680c;\n    --puck-color-green-05: #1d882f;\n    --puck-color-green-06: #2faa53;\n    --puck-color-green-07: #56c16f;\n    --puck-color-green-08: #7dd78b;\n    --puck-color-green-09: #b8e8bf;\n    --puck-color-green-10: #ddf3e0;\n    --puck-color-green-11: #eff8f0;\n    --puck-color-green-12: #f3fcf4;\n    --puck-color-yellow-01: #211000;\n    --puck-color-yellow-02: #362700;\n    --puck-color-yellow-03: #4c4000;\n    --puck-color-yellow-04: #645a00;\n    --puck-color-yellow-05: #877614;\n    --puck-color-yellow-06: #ab9429;\n    --puck-color-yellow-07: #bfac4e;\n    --puck-color-yellow-08: #d4c474;\n    --puck-color-yellow-09: #e6deb1;\n    --puck-color-yellow-10: #f3efd9;\n    --puck-color-yellow-11: #f9f7ed;\n    --puck-color-yellow-12: #fcfaf0;\n    --puck-color-red-01: #4c0000;\n    --puck-color-red-02: #6a0a10;\n    --puck-color-red-03: #8a1422;\n    --puck-color-red-04: #ac1f35;\n    --puck-color-red-05: #bf5366;\n    --puck-color-red-06: #ce7e8e;\n    --puck-color-red-07: #d99ca8;\n    --puck-color-red-08: #e4b9c2;\n    --puck-color-red-09: #efd7db;\n    --puck-color-red-10: #f6eaec;\n    --puck-color-red-11: #faf4f5;\n    --puck-color-red-12: #fff9fa;\n    --puck-color-grey-01: #181818;\n    --puck-color-grey-02: #292929;\n    --puck-color-grey-03: #404040;\n    --puck-color-grey-04: #5a5a5a;\n    --puck-color-grey-05: #767676;\n    --puck-color-grey-06: #949494;\n    --puck-color-grey-07: #ababab;\n    --puck-color-grey-08: #c3c3c3;\n    --puck-color-grey-09: #dcdcdc;\n    --puck-color-grey-10: #efefef;\n    --puck-color-grey-11: #f5f5f5;\n    --puck-color-grey-12: #fafafa;\n    --puck-color-black: #000000;\n    --puck-color-white: #ffffff;\n  }\n}\n\n/* styles/tokens.css */\n@layer puck-tokens {\n  :root {\n    --puck-color-surface: var(--puck-color-white);\n    --puck-color-surface-muted: var(--puck-color-grey-11);\n    --puck-color-surface-subtle: var(--puck-color-grey-12);\n    --puck-color-surface-inverse: var(--puck-color-grey-01);\n    --puck-color-border: var(--puck-color-grey-09);\n    --puck-color-border-hover: var(--puck-color-grey-05);\n    --puck-color-border-muted: var(--puck-color-grey-10);\n    --puck-color-border-inverse: var(--puck-color-grey-05);\n    --puck-color-text: var(--puck-color-black);\n    --puck-color-text-secondary: var(--puck-color-grey-04);\n    --puck-color-text-muted: var(--puck-color-grey-05);\n    --puck-color-text-subtle: var(--puck-color-grey-07);\n    --puck-color-text-inverse: var(--puck-color-white);\n    --puck-opacity-text-inverse: 0.75;\n    --puck-color-interactive: var(--puck-color-azure-04);\n    --puck-color-interactive-hover: var(--puck-color-azure-03);\n    --puck-color-interactive-active: var(--puck-color-azure-02);\n    --puck-color-interactive-subtle: var(--puck-color-azure-10);\n    --puck-color-interactive-soft: var(--puck-color-azure-11);\n    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);\n    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);\n    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);\n    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);\n    --puck-color-focus-ring: var(--puck-color-azure-05);\n    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );\n    --puck-color-selection-border: var(--puck-color-azure-08);\n    --puck-color-line-placeholder: var(--puck-color-azure-06);\n    --puck-color-highlight: var(--puck-color-rose-07);\n    --puck-color-bg-disabled: var(--puck-color-grey-07);\n    --puck-color-text-disabled: var(--puck-color-grey-03);\n    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );\n    --puck-space-1: 4px;\n    --puck-space-2: 8px;\n    --puck-space-3: 12px;\n    --puck-space-4: 16px;\n    --puck-space-5: 24px;\n    --puck-space-chrome-gutter: var(--puck-space-4);\n    --puck-radius-none: 0;\n    --puck-radius-xs: 2px;\n    --puck-radius-s: 3px;\n    --puck-radius-m: 4px;\n    --puck-radius-l: 8px;\n    --puck-radius-pill: 30px;\n    --puck-radius-round: 100%;\n    --puck-border-width-hairline: 0.5px;\n    --puck-border-width-regular: 1px;\n    --puck-border-width-focus: 2px;\n    --puck-border-width-strong: 4px;\n    --puck-duration-fast: 50ms;\n    --puck-duration-medium: 150ms;\n    --puck-duration-slow: 250ms;\n    --puck-ease-exit: ease-in;\n    --puck-ease-emphasized: ease-in-out;\n    --puck-ease-entrance: ease-out;\n    --puck-font-weight-regular: 400;\n    --puck-font-weight-medium: 500;\n    --puck-font-weight-semibold: 600;\n    --puck-font-weight-bold: 700;\n    --puck-font-weight-heavy: 800;\n    --puck-letter-spacing-ui: 0.05ch;\n    --puck-letter-spacing-heading: 0.08ch;\n    --puck-icon-size-xs: 14px;\n    --puck-icon-size-s: 16px;\n    --puck-icon-size-m: 18px;\n    --puck-icon-size-l: 24px;\n    --puck-space-m-unitless: 24;\n    --puck-user-sidebar-left-width: var(--puck-sidebar-width);\n    --puck-user-sidebar-right-width: var(--puck-sidebar-width);\n    --puck-slot-min-empty-height: 128px;\n    --puck-line-placeholder-width: 2px;\n  }\n}\n\n/* styles/typography.css */\n@layer puck-tokens {\n  :root {\n    --puck-font-size-scale-base-unitless: 12;\n    --puck-font-size-xxxs-unitless: 12;\n    --puck-font-size-xxs-unitless: 14;\n    --puck-font-size-xs-unitless: 16;\n    --puck-font-size-s-unitless: 18;\n    --puck-font-size-m-unitless: 21;\n    --puck-font-size-l-unitless: 24;\n    --puck-font-size-xl-unitless: 28;\n    --puck-font-size-xxl-unitless: 36;\n    --puck-font-size-xxxl-unitless: 48;\n    --puck-font-size-xxxxl-unitless: 56;\n    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );\n    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);\n    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);\n    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);\n    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);\n    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);\n    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);\n    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);\n    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );\n    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );\n    --puck-font-size-base: var(--puck-font-size-xs);\n    --puck-line-height-reset: 1;\n    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );\n    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );\n    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );\n    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );\n    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );\n    --puck-line-height-base: var(--puck-line-height-m);\n    --puck-fallback-font-stack:\n      -apple-system,\n      BlinkMacSystemFont,\n      Segoe UI,\n      Helvetica Neue,\n      sans-serif,\n      Apple Color Emoji,\n      Segoe UI Emoji,\n      Segoe UI Symbol;\n    --puck-font-family: Inter, var(--puck-fallback-font-stack);\n    --puck-font-family-monospaced:\n      ui-monospace,\n      "Cascadia Code",\n      "Source Code Pro",\n      Menlo,\n      Consolas,\n      "DejaVu Sans Mono",\n      monospace;\n  }\n  @supports (font-variation-settings: normal) {\n    :root {\n      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);\n    }\n  }\n}\n\n/* bundle/core.css */\n:root {\n  --_puck-styles-loaded: "true";\n}\n#frame-root {\n  height: 1px;\n  min-height: 100vh;\n}\n[data-puck-entry] {\n  position: relative;\n  z-index: 0;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */\n._ActionBar_5vdfr_1 {\n  align-items: center;\n  cursor: default;\n  display: flex;\n  width: auto;\n  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));\n  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));\n  padding-inline-start: var(--puck-actionbar-space-x, 0);\n  padding-inline-end: var(--puck-actionbar-space-x, 0);\n  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));\n  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));\n  color: var(--puck-color-text-inverse);\n  font-family: var(--puck-font-family);\n  min-height: 26px;\n}\n._ActionBar-label_5vdfr_17 {\n  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));\n  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));\n  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));\n  font-weight: var(--puck-font-weight-medium);\n  padding-inline-start: var(--puck-space-2);\n  padding-inline-end: var(--puck-space-2);\n  margin-inline-start: var(--puck-space-1);\n  margin-inline-end: var(--puck-space-1);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {\n  padding-inline-start: 0;\n}\n._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {\n  margin-inline-start: calc(var(--puck-space-1) * -1);\n}\n._ActionBar-group_5vdfr_38 {\n  align-items: center;\n  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));\n  display: flex;\n  height: 100%;\n  padding-inline-start: var(--puck-space-1);\n  padding-inline-end: var(--puck-space-1);\n}\n._ActionBar-group_5vdfr_38:first-of-type {\n  border-inline-start: 0;\n}\n._ActionBar-group_5vdfr_38:empty {\n  display: none;\n}\n._ActionBarAction_5vdfr_30 {\n  background: transparent;\n  border: none;\n  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));\n  cursor: pointer;\n  padding: var(--puck-actionbar-action-space, 6px);\n  margin-inline-start: var(--puck-space-1);\n  margin-inline-end: var(--puck-space-1);\n  border-radius: var(--puck-radius-m);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));\n  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);\n}\n._ActionBarAction--disabled_5vdfr_74 {\n  cursor: auto;\n  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );\n  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);\n}\n._ActionBarAction_5vdfr_30 svg {\n  max-width: none !important;\n}\n._ActionBarAction_5vdfr_30:focus-visible {\n  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);\n  outline-offset: calc(var(--puck-border-width-focus) * -1);\n}\n@media (hover: hover) and (pointer: fine) {\n  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {\n    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );\n    opacity: 1;\n    transition: none;\n  }\n}\n._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),\n._ActionBarAction--active_5vdfr_104 {\n  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );\n  opacity: 1;\n  transition: none;\n}\n._ActionBar-group_5vdfr_38 * {\n  margin: 0;\n}\n._ActionBar-separator_5vdfr_117 {\n  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );\n  margin-inline: var(--puck-space-1);\n  width: var( --puck-border-width-hairline );\n  height: 100%;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */\n._DraggableComponent_1627v_1 {\n  position: absolute;\n  pointer-events: none;\n}\n._DraggableComponent-overlayWrapper_1627v_6 {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  pointer-events: none;\n  box-sizing: border-box;\n  z-index: 1;\n}\n._DraggableComponent-overlay_1627v_6 {\n  cursor: pointer;\n  height: 100%;\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;\n  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);\n  width: 100%;\n}\n._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {\n  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);\n}\n._DraggableComponent-loadingOverlay_1627v_38 {\n  background: var(--puck-color-surface);\n  color: var(--puck-color-text);\n  border-radius: var(--puck-radius-m);\n  display: flex;\n  padding: var(--puck-space-2);\n  top: var(--puck-space-2);\n  right: var(--puck-space-2);\n  position: absolute;\n  z-index: 1;\n  pointer-events: all;\n  box-sizing: border-box;\n  opacity: 0.8;\n  z-index: 1;\n}\n._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {\n  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;\n}\n._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {\n  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );\n}\n._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {\n  display: none;\n}\n._DraggableComponent-actionsOverlay_1627v_89 {\n  position: sticky;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n}\n._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {\n  opacity: 1;\n  pointer-events: auto;\n}\n._DraggableComponent-actions_1627v_89 {\n  position: absolute;\n  width: auto;\n  cursor: grab;\n  display: flex;\n  box-sizing: border-box;\n  transform-origin: right top;\n  min-height: 36px;\n}\n._DraggableComponent-actionsAction_1627v_111 {\n  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */\n._Drawer_1n90m_1 {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--puck-font-family);\n  gap: var(--puck-space-3);\n}\n._Drawer-draggable_1n90m_8 {\n  position: relative;\n}\n._Drawer-draggableBg_1n90m_12 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: -1;\n}\n._DrawerItem-draggable_1n90m_22 {\n  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));\n  color: var(--puck-drawer-item-color-text, var(--puck-color-text));\n  cursor: grab;\n  padding: var(--puck-drawer-item-space, var(--puck-space-3));\n  display: flex;\n  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;\n  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));\n  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));\n  justify-content: space-between;\n  align-items: center;\n  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);\n}\n._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {\n  background: var(--puck-color-surface-muted);\n  color: var(--puck-color-text-muted);\n  cursor: not-allowed;\n}\n._DrawerItem_1n90m_22:focus-visible {\n  outline: 0;\n}\n._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {\n  border-radius: var(--puck-radius-m);\n  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);\n  outline-offset: var(--puck-border-width-focus);\n}\n@media (hover: hover) and (pointer: fine) {\n  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {\n    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );\n    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );\n    transition: none;\n  }\n}\n._DrawerItem-name_1n90m_72 {\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */\n._DropZone_wc2ks_1 {\n  position: relative;\n  height: 100%;\n  min-height: var(--puck-slot-min-empty-height);\n  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);\n  width: 100%;\n}\n._DropZone--hasChildren_wc2ks_11 {\n  min-height: 0;\n}\n._DropZone_wc2ks_1:empty {\n  min-height: var(--puck-slot-min-empty-height);\n}\n[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {\n  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);\n}\n._DropZone--isAreaSelected_wc2ks_24,\n._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {\n  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone_wc2ks_1:empty {\n  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone-item_wc2ks_39 {\n  position: relative;\n}\n._DropZone-linePlaceholder_wc2ks_43 {\n  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );\n  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);\n  pointer-events: none;\n  position: absolute;\n  z-index: 1;\n}\n._DropZone-hitbox_wc2ks_55 {\n  position: absolute;\n  bottom: calc(var(--puck-space-3) * -1);\n  height: var(--puck-space-5);\n  width: 100%;\n  z-index: 1;\n}\n[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {\n  opacity: 0;\n}\nbody:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {\n  opacity: 0 !important;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */\n._InlineTextField_104qp_1 {\n  cursor: text;\n  display: inline-block;\n  white-space: pre-wrap;\n  text-decoration: inherit;\n}\n[data-dnd-dragging] ._InlineTextField_104qp_1 {\n  cursor: none;\n  caret-color: transparent;\n}\n[data-dnd-dragging] ._InlineTextField_104qp_1::selection {\n  display: none;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */\n@keyframes _loader-animation_1w5zn_1 {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(0.8);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}\n._Loader_1w5zn_13 {\n  background: transparent;\n  border-radius: var(--puck-radius-round);\n  border: var(--puck-border-width-focus) solid currentColor;\n  border-bottom-color: transparent;\n  display: inline-block;\n  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;\n  animation-fill-mode: both;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */\n._RichTextMenu_1ve2j_1 {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n._RichTextMenu--form_1ve2j_7 {\n  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));\n  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));\n  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);\n  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );\n  position: relative;\n  scrollbar-width: none;\n  overflow-x: auto;\n}\n._RichTextMenu-group_1ve2j_21 {\n  display: flex;\n  align-items: space-between;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  padding-inline: 6px;\n  gap: 2px;\n  position: relative;\n}\n._RichTextMenu-group_1ve2j_21:first-of-type {\n  padding-left: 0;\n}\n._RichTextMenu-group_1ve2j_21:last-of-type {\n  padding-right: 0;\n}\n._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {\n  color: var(--puck-color-text-inverse);\n  gap: 0px;\n  flex-wrap: nowrap;\n}\n._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {\n  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );\n}\n._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {\n  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */\n._Control_id4pm_1 .lucide {\n  height: var(--puck-icon-size-m);\n  width: var(--puck-icon-size-m);\n}\n._Control--inline_id4pm_6 .lucide {\n  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n}\n\n/* components/DraggableComponent/styles.css */\n[data-puck-component] * {\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n[data-puck-component] {\n  cursor: grab;\n  pointer-events: auto !important;\n  user-select: none;\n  -webkit-user-select: none;\n}\n[data-puck-dropzone] {\n  pointer-events: auto !important;\n}\n[data-puck-disabled] {\n  cursor: pointer;\n}\n[data-dnd-placeholder]:not([data-puck-line-drag] *) {\n  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;\n  border: none !important;\n  color: transparent !important;\n  opacity: 0.3 !important;\n  outline: none !important;\n  transition: none !important;\n}\n[data-dnd-placeholder]:not([data-puck-line-drag] *) *,\n[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,\n[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {\n  opacity: 0 !important;\n}\n[data-puck-line-drag] [data-dnd-placeholder] {\n  opacity: 0.4 !important;\n  outline: none !important;\n  transition: none !important;\n}\n[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {\n  opacity: 0.9 !important;\n}\n[data-dnd-dragging][data-puck-component] {\n  pointer-events: none !important;\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;\n  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;\n}\n[data-dnd-dragging][data-puck-component] > :first-child {\n  margin-top: 0 !important;\n}\n[data-dnd-dragging][data-puck-component] > :last-child {\n  margin-bottom: 0 !important;\n}\n\n/* lib/overlay-portal/styles.css */\n[data-puck-overlay-portal],\n[data-puck-overlay-portal] * {\n  pointer-events: auto !important;\n}\n[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],\n[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {\n  pointer-events: none !important;\n}\n[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {\n  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;\n  outline-offset: 2px;\n}\n[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {\n  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;\n  outline-offset: 2px;\n}',document:e,id:t4.iframeInteractions}:null)})(n),(0,p.useEffect)(()=>{if(!a||!n)return()=>{};let e=[],i={},l=()=>{e.forEach(({mirror:e})=>{e.remove()}),e=[],Array.from(n.head.querySelectorAll(`[${oe}="true"]`)).forEach(e=>{e.remove()}),Object.keys(i).forEach(e=>{delete i[e]})},c=r=>e.findIndex(e=>e.original===r),d=(e,t=!1)=>(0,s.BU)(null,null,function*(){let o;if("LINK"===e.nodeName&&t){(o=document.createElement("style")).type="text/css";let t=ot(e);t||(yield new Promise(r=>{let t=()=>{r(),e.removeEventListener("load",t)};e.addEventListener("load",t)}),t=ot(e));let n=(e=>{if(e)try{return Array.from(e.cssRules).map(e=>e.cssText).join("")}catch(r){console.warn("Access to stylesheet %s is denied. Ignoring…",e.href)}return""})(t);if(!n){r&&console.warn("Tried to load styles for link element, but couldn't find them. Skipping...");return}o.innerHTML=n,o.setAttribute("data-href",e.getAttribute("href"))}else o=e.cloneNode(!0);return o.setAttribute(oe,"true"),o}),u=new MutationObserver(t=>{t.forEach(t=>{"childList"===t.type&&(t.addedNodes.forEach(t=>{if(t.nodeType===Node.TEXT_NODE||t.nodeType===Node.ELEMENT_NODE){let o=t.nodeType===Node.TEXT_NODE?t.parentElement:t;o&&or(o)&&on(()=>(t=>(0,s.BU)(null,null,function*(){let o=c(t);if(o>-1){r&&console.log("Tried to add an element that was already mirrored. Updating instead..."),e[o].mirror.innerText=t.innerText;return}let a=yield d(t);if(!a)return;let l=A(a.outerHTML);if(i[l]){r&&console.log("iframe already contains element that is being mirrored. Skipping...");return}i[l]=!0,n.head.append(a),e.push({original:t,mirror:a}),r&&console.log(`Added style node ${t.outerHTML}`)}))(o))}}),t.removedNodes.forEach(t=>{if(t.nodeType===Node.TEXT_NODE||t.nodeType===Node.ELEMENT_NODE){let o=t.nodeType===Node.TEXT_NODE?t.parentElement:t;o&&o.matches(t7)&&!t5(o)&&on(()=>(t=>{var o,n;let a=c(t);if(-1===a){r&&console.log("Tried to remove an element that did not exist. Skipping...");return}let l=A(t.outerHTML);null==(n=null==(o=e[a])?void 0:o.mirror)||n.remove(),delete i[l],r&&console.log(`Removed style node ${t.outerHTML}`)})(o))}}))})});if(!o)return t(),()=>{u.disconnect(),l()};let p=a.parent.document,v=(e=>{let r=[];return e.querySelectorAll(t7).forEach(e=>{or(e)&&r.push(e)}),r})(p),_=[],k=0;return oo(p.getElementsByTagName("html")[0],n.documentElement),oo(p.getElementsByTagName("body")[0],n.body),Promise.all(v.map((r,t)=>(0,s.BU)(null,null,function*(){if("LINK"===r.nodeName){let e=r.href;if(_.indexOf(e)>-1)return;_.push(e)}let t=yield d(r);if(t)return e.push({original:r,mirror:t}),t}))).then(e=>{let r=e.filter(e=>void 0!==e);r.forEach(e=>{e.onload=()=>{(k+=1)>=r.length&&t()},e.onerror=()=>{let o=e instanceof HTMLLinkElement?e.href:void 0;console.warn(`AutoFrame couldn't load a stylesheet${o?`: ${o}`:""}. This can happen if the parent document's stylesheet is blocked by the iframe's CSP, returns a non-2xx status, or fails to reach the network.`),(k+=1)>=r.length&&t()}}),n.head.querySelectorAll(`[${oe}="true"]`).forEach(e=>{e.remove()}),n.head.append(...r),r.forEach(e=>{"STYLE"===e.nodeName&&(k+=1)}),k>=r.length&&t(),u.observe(p.head,{childList:!0,subtree:!0}),r.forEach(e=>{i[A(e.outerHTML)]=!0})}),()=>{u.disconnect(),l()}},[o]),(0,v.jsx)(v.Fragment,{children:e})},oi=(0,p.createContext)({}),ol=()=>(0,p.useContext)(oi);function oc(e){var{children:r,className:t,debug:o,id:n,onReady:a=()=>{},onNotReady:i=()=>{},frameRef:l,syncHostStyles:c=!0}=e,d=(0,s.YG)(e,["children","className","debug","id","onReady","onNotReady","frameRef","syncHostStyles"]);let[u,_]=(0,p.useState)(!1),[k,m]=(0,p.useState)({}),[h,g]=(0,p.useState)(),[f,b]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{u&&b(!c)},[u,c]),(0,p.useEffect)(()=>{var e;if(l.current){let r=l.current.contentDocument,t=l.current.contentWindow;m({document:r||void 0,window:t||void 0}),g(null==(e=l.current.contentDocument)?void 0:e.getElementById("frame-root")),r&&t&&f?a():i()}},[l,u,f]),(0,v.jsx)("iframe",(0,s.ko)((0,s.IA)({},d),{className:t,id:n,srcDoc:'<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',ref:l,onLoad:()=>{_(!0)},children:(0,v.jsx)(oi.Provider,{value:k,children:u&&h&&(0,v.jsx)(oa,{debug:o,onStylesLoaded:()=>b(!0),syncHostStyles:c,children:(0,z.createPortal)(r,h)})})}))}oc.displayName="AutoFrame",(0,s.hY)();var od=(0,n.BQ)(r$),ou=(0,p.memo)(()=>{var e,r,t,o;let a=(0,i.CU)((0,_.k)(e=>{var r;return null==(r=e.state.indexes.nodes.root)?void 0:r.flatData.props})),l=(0,i.CU)(e=>e.config),c=(0,i.CU)(e=>e.metadata),d=rA(l,(0,p.useMemo)(()=>{let e=(0,u.Rn)({props:null!=a?a:{}});return(0,u.hE)(e)},[a]),od),k=(0,p.useMemo)(()=>(0,s.ko)((0,s.IA)({},d),{children:(0,v.jsx)(rG,{zone:u.Ln}),puck:{renderDropZone:rG,isEditing:!0,dragRef:null,metadata:c},editMode:!0}),[d,c]),m=(0,n.tw)(null!=(r=null==(e=l.root)?void 0:e.fields)?r:{},k);return(null==(t=l.root)?void 0:t.render)?null==(o=l.root)?void 0:o.render((0,s.ko)((0,s.IA)((0,s.IA)({},k),m),{id:"puck-root"})):(0,v.jsx)(v.Fragment,{children:k.children})});ou.displayName="EditorPage",(0,s.hY)();var os=(0,d.d)("PuckPreview",{PuckPreview:"_PuckPreview_zbic3_1","PuckPreview-frame":"_PuckPreview-frame_zbic3_6"}),op=({id:e="puck-preview"})=>{let r=(0,i.CU)(e=>e.dispatch),t=(0,i.CU)(e=>e.config),o=(0,i.CU)(e=>e.setStatus),n=(0,i.CU)(e=>e.iframe),a=(0,i.CU)(e=>e.overrides),l=(0,i.CU)(e=>e.metadata),c=(0,i.CU)(e=>"edit"===e.state.ui.previewMode?null:e.state.data),d=(0,p.useMemo)(()=>a.iframe,[a]),u=(0,p.useRef)(null);(e=>{let r=(0,i.CU)(e=>e.status);(0,p.useEffect)(()=>{if(e.current&&"READY"===r){let r=e.current,t=e=>{let t=new rc("pointermove",(0,s.ko)((0,s.IA)({},e),{bubbles:!0,cancelable:!1,clientX:e.clientX,clientY:e.clientY,pointerId:e.pointerId,pointerType:e.pointerType,isPrimary:e.isPrimary,originalTarget:e.target}));r.dispatchEvent(t)},o=()=>{var e;null==(e=r.contentDocument)||e.removeEventListener("pointermove",t)};return(()=>{var e;o(),null==(e=r.contentDocument)||e.addEventListener("pointermove",t,{capture:!0})})(),()=>{o()}}},[r])})(u),(e=>{let r=(0,i.CU)(e=>e.state.ui.previewMode),t=(0,i.CU)(e=>e.status),o=(0,i.CU)(e=>e.iframe.enabled);(0,p.useEffect)(()=>{var t,n;let a=o?null==(n=null==(t=e.current)?void 0:t.contentDocument)?void 0:n.querySelector("[data-puck-entry]"):e.current;null==a||a.setAttribute("data-puck-preview-mode",r)},[r,t,o])})(u);let _=c?(0,v.jsx)(r0,{data:c,config:t,metadata:l}):(0,v.jsx)(ou,{});return(0,p.useEffect)(()=>{n.enabled||o("READY")},[n.enabled]),(0,v.jsx)("div",{className:os(),id:e,"data-puck-preview":!0,onClick:e=>{let t=e.target;t.hasAttribute("data-puck-component")||t.hasAttribute("data-puck-dropzone")||r({type:"setUi",ui:{itemSelector:null}})},children:n.enabled?(0,v.jsx)(oc,{id:"preview-frame",className:os("frame"),"data-rfd-iframe":!0,syncHostStyles:n.syncHostStyles,onReady:()=>{o("READY")},onNotReady:()=>{o("MOUNTED")},frameRef:u,children:(0,v.jsx)(oi.Consumer,{children:({document:e})=>d?(0,v.jsx)(d,{document:e,children:_}):_})}):(0,v.jsx)("div",{id:"preview-frame",className:os("frame"),ref:u,"data-puck-entry":!0,children:_})})};(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var ov={Puck:"_Puck_tzaxg_19","Puck-portal":"_Puck-portal_tzaxg_31",PuckLayout:"_PuckLayout_tzaxg_36","PuckLayout-inner":"_PuckLayout-inner_tzaxg_40","Puck--hidePlugins":"_Puck--hidePlugins_tzaxg_73","PuckLayout--mounted":"_PuckLayout--mounted_tzaxg_78","PuckLayout--mobilePanelHeightToggle":"_PuckLayout--mobilePanelHeightToggle_tzaxg_82","PuckLayout--leftSideBarVisible":"_PuckLayout--leftSideBarVisible_tzaxg_82","PuckLayout--isExpanded":"_PuckLayout--isExpanded_tzaxg_90","PuckLayout--mobilePanelHeightMinContent":"_PuckLayout--mobilePanelHeightMinContent_tzaxg_110","PuckLayout--rightSideBarVisible":"_PuckLayout--rightSideBarVisible_tzaxg_137","PuckLayout-mounted":"_PuckLayout-mounted_tzaxg_156","PuckLayout-nav":"_PuckLayout-nav_tzaxg_197","PuckLayout-header":"_PuckLayout-header_tzaxg_217",PuckPluginTab:"_PuckPluginTab_tzaxg_231","PuckPluginTab--visible":"_PuckPluginTab--visible_tzaxg_237","PuckPluginTab-body":"_PuckPluginTab-body_tzaxg_243"};(0,s.hY)();var o_=({children:e})=>(0,v.jsx)(v.Fragment,{children:e});(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var ok=(0,d.d)("MenuBar",{MenuBar:"_MenuBar_1hxnj_1","MenuBar--menuOpen":"_MenuBar--menuOpen_1hxnj_14","MenuBar-inner":"_MenuBar-inner_1hxnj_29","MenuBar-history":"_MenuBar-history_1hxnj_45"});function om({menuOpen:e=!1,renderHeaderActions:r,setMenuOpen:t}){let o=(0,i.CU)(e=>e.history.back),n=(0,i.CU)(e=>e.history.forward),a=(0,i.CU)(e=>e.history.hasFuture()),l=(0,i.CU)(e=>e.history.hasPast()),c=(0,i.JX)("header-undo"),d=(0,i.JX)("header-redo");return(0,v.jsx)("div",{className:ok({menuOpen:e}),onClick:e=>{var r;let o=e.target;!window.matchMedia("(min-width: 638px)").matches&&"A"===o.tagName&&(null==(r=o.getAttribute("href"))?void 0:r.startsWith("#"))&&t(!1)},children:(0,v.jsxs)("div",{className:ok("inner"),children:[(0,v.jsxs)("div",{className:ok("history"),children:[(0,v.jsx)(i.K0,{type:"button",title:c,disabled:!l,onClick:o,children:(0,v.jsx)(i.bE,{size:21})}),(0,v.jsx)(i.K0,{type:"button",title:d,disabled:!a,onClick:n,children:(0,v.jsx)(i.HZ,{size:21})})]}),(0,v.jsx)(v.Fragment,{children:r&&r()})]})})}(0,s.hY)();var oh=(0,d.d)("PuckHeader",{PuckHeader:"_PuckHeader_c2nei_1","PuckHeader--hidePlugins":"_PuckHeader--hidePlugins_c2nei_21","PuckHeader-inner":"_PuckHeader-inner_c2nei_26","PuckHeader-toggle":"_PuckHeader-toggle_c2nei_46","PuckHeader-rightSideBarToggle":"_PuckHeader-rightSideBarToggle_c2nei_52","PuckHeader-leftSideBarToggle":"_PuckHeader-leftSideBarToggle_c2nei_53","PuckHeader-title":"_PuckHeader-title_c2nei_64","PuckHeader-path":"_PuckHeader-path_c2nei_68","PuckHeader-tools":"_PuckHeader-tools_c2nei_75","PuckHeader-menuButton":"_PuckHeader-menuButton_c2nei_81","PuckHeader--menuOpen":"_PuckHeader--menuOpen_c2nei_86"}),og=(0,p.memo)(({hidePlugins:e})=>{let{onPublish:r,renderHeader:t,renderHeaderActions:o,headerTitle:n,headerPath:a,iframe:l}=o0(),c=(0,i.CU)(e=>e.dispatch),d=(0,i.sL)(),u=(0,p.useMemo)(()=>t?(console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"),e=>{var{actions:r}=e,o=(0,s.YG)(e,["actions"]);let n=(0,i.CU)(e=>e.state);return(0,v.jsx)(t,(0,s.ko)((0,s.IA)({},o),{dispatch:c,state:n,children:r}))}):o_,[t]),_=(0,p.useMemo)(()=>o?(console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."),e=>{let r=(0,i.CU)(e=>e.state);return(0,v.jsx)(o,(0,s.ko)((0,s.IA)({},e),{dispatch:c,state:r}))}):o_,[o]),k=(0,i.CU)(e=>e.overrides.header||u),m=(0,i.CU)(e=>e.overrides.headerActions||_),[h,g]=(0,p.useState)(!1),f=(0,i.CU)(e=>{var r,t;return null!=(t=(null==(r=e.state.indexes.nodes.root)?void 0:r.data).props.title)?t:""}),b=(0,i.CU)(e=>e.state.ui.leftSideBarVisible),x=(0,i.CU)(e=>e.state.ui.rightSideBarVisible),y=(0,p.useCallback)(e=>{let r=window.matchMedia("(min-width: 638px)").matches,t="left"===e?b:x;c({type:"setUi",ui:(0,s.IA)({[`${e}SideBarVisible`]:!t},r?{}:{["left"===e?"rightSideBarVisible":"leftSideBarVisible"]:!1})})},[c,b,x]),w=(0,i.JX)("header-publish"),z=(0,i.JX)("label-page"),I=(0,i.JX)("header-toggle-leftsidebar"),j=(0,i.JX)("header-toggle-rightsidebar"),C=(0,i.JX)("header-toggle-menubar");return(0,v.jsx)(k,{actions:(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m,{children:(0,v.jsx)(M,{onClick:()=>{let e=d.getState().state.data;r&&r(e)},icon:(0,v.jsx)(i.qz,{size:"14px"}),children:w})})}),children:(0,v.jsx)("header",{className:oh({leftSideBarVisible:b,rightSideBarVisible:x,hidePlugins:e}),children:(0,v.jsxs)("div",{className:oh("inner"),children:[(0,v.jsxs)("div",{className:oh("toggle"),children:[(0,v.jsx)("div",{className:oh("leftSideBarToggle"),children:(0,v.jsx)(i.K0,{type:"button",onClick:()=>{y("left")},title:I,children:(0,v.jsx)(i.e6,{focusable:"false"})})}),(0,v.jsx)("div",{className:oh("rightSideBarToggle"),children:(0,v.jsx)(i.K0,{type:"button",onClick:()=>{y("right")},title:j,children:(0,v.jsx)(i.jz,{focusable:"false"})})})]}),(0,v.jsx)("div",{className:oh("title"),children:(0,v.jsxs)(eC,{rank:"2",size:"xs",children:[n||f||z,a&&(0,v.jsxs)(v.Fragment,{children:[" ",(0,v.jsx)("code",{className:oh("path"),children:a})]})]})}),(0,v.jsxs)("div",{className:oh("tools"),children:[(0,v.jsx)("div",{className:oh("menuButton"),children:(0,v.jsx)(i.K0,{type:"button",onClick:()=>g(!h),title:C,children:h?(0,v.jsx)(i.rX,{focusable:"false"}):(0,v.jsx)(i.yQ,{focusable:"false"})})}),(0,v.jsx)(om,{dispatch:c,onPublish:r,menuOpen:h,renderHeaderActions:()=>(0,v.jsx)(m,{children:(0,v.jsx)(M,{onClick:()=>{let e=d.getState().state.data;r&&r(e)},icon:(0,v.jsx)(i.qz,{size:"14px"}),children:w})}),setMenuOpen:g})]})]})})})});(0,s.hY)(),(0,s.hY)();var of=(0,d.d)("SidebarSection",{SidebarSection:"_SidebarSection_1uv88_1","SidebarSection-title":"_SidebarSection-title_1uv88_12","SidebarSection--noBorderTop":"_SidebarSection--noBorderTop_1uv88_20","SidebarSection-content":"_SidebarSection-content_1uv88_24","SidebarSection-breadcrumbLabel":"_SidebarSection-breadcrumbLabel_1uv88_33","SidebarSection-breadcrumbs":"_SidebarSection-breadcrumbs_1uv88_62","SidebarSection-breadcrumb":"_SidebarSection-breadcrumb_1uv88_33","SidebarSection-heading":"_SidebarSection-heading_1uv88_74","SidebarSection-loadingOverlay":"_SidebarSection-loadingOverlay_1uv88_78"}),ob=({children:e,title:r,background:t,showBreadcrumbs:o,noBorderTop:n,isLoading:a})=>(0,v.jsxs)("div",{className:of({noBorderTop:n}),style:{background:t},children:[(0,v.jsx)("div",{className:of("title"),children:(0,v.jsxs)("div",{className:of("breadcrumbs"),children:[o&&(0,v.jsx)(tV,{}),(0,v.jsx)("div",{className:of("heading"),children:(0,v.jsx)(eC,{rank:"2",size:"xs",children:r})})]})}),(0,v.jsx)("div",{className:of("content"),children:e}),a&&(0,v.jsx)("div",{className:of("loadingOverlay"),children:(0,v.jsx)(i.aH,{size:32})})]});(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var ox={ViewportControls:"_ViewportControls_v26yb_1","ViewportControls--fullScreen":"_ViewportControls--fullScreen_v26yb_5","ViewportControls-toggleButton":"_ViewportControls-toggleButton_v26yb_14","ViewportControls-actions":"_ViewportControls-actions_v26yb_39","ViewportControls-actionsInner":"_ViewportControls-actionsInner_v26yb_43","ViewportControls--isExpanded":"_ViewportControls--isExpanded_v26yb_67","ViewportControls-divider":"_ViewportControls-divider_v26yb_72","ViewportControls-zoomSelect":"_ViewportControls-zoomSelect_v26yb_79","ViewportControls-zoom":"_ViewportControls-zoom_v26yb_79","ViewportButton-inner":"_ViewportButton-inner_v26yb_110","ViewportButton--isActive":"_ViewportButton--isActive_v26yb_118"},oy={Smartphone:(0,v.jsx)(i.wO,{size:16}),Tablet:(0,v.jsx)(i.jp,{size:16}),Monitor:(0,v.jsx)(i.VA,{size:16}),FullWidth:(0,v.jsx)(i.J,{size:16})},ow=(0,d.d)("ViewportControls",ox),oz=(0,d.d)("ViewportButton",ox),oI=({children:e,title:r,onClick:t,isActive:o,disabled:n})=>(0,v.jsx)("span",{className:oz({isActive:o}),suppressHydrationWarning:!0,children:(0,v.jsx)(i.K0,{type:"button",title:r,disabled:n||o,onClick:t,suppressHydrationWarning:!0,children:(0,v.jsx)("span",{className:oz("inner"),children:e})})}),oj=[{label:"25%",value:.25},{label:"50%",value:.5},{label:"75%",value:.75},{label:"100%",value:1},{label:"125%",value:1.25},{label:"150%",value:1.5},{label:"200%",value:2}],oC=({viewport:e,isActive:r,onClick:t})=>{var o;let n=(0,i.JX)("viewport-switch",{label:null!=(o=e.label)?o:""}),a=(0,i.JX)("viewport-switch-default");return(0,v.jsx)(oI,{title:e.label?n:a,onClick:t,isActive:r,children:"string"==typeof e.icon?oy[e.icon]||e.icon:e.icon||oy.Smartphone})},oS=({autoZoom:e,zoom:r,onViewportChange:t,onZoom:o,fullScreen:n})=>{var a,l;let c=(0,i.CU)(e=>e.viewports),d=(0,i.CU)(e=>e.state.ui.viewports),u=oj.find(r=>r.value===e),s=(0,i.JX)("viewport-zoom-auto",{zoom:(100*e).toFixed(0)}),_=(0,p.useMemo)(()=>[...oj,...u?[]:[{value:e,label:s}]].filter(r=>r.value<=e).sort((e,r)=>e.value>r.value?1:-1),[e,s]),[k,m]=(0,p.useState)(d.current.width);(0,p.useEffect)(()=>{m(d.current.width)},[d.current]);let[h,g]=(0,p.useState)(!1),f=(0,i.JX)("viewport-zoom-out"),b=(0,i.JX)("viewport-zoom-in"),x=(0,i.JX)("viewport-toggle-menu");return(0,v.jsxs)("div",{className:ow({isExpanded:h,fullScreen:n}),suppressHydrationWarning:!0,children:[(0,v.jsx)("div",{className:ow("actions"),children:(0,v.jsxs)("div",{className:ow("actionsInner"),children:[c.map((e,r)=>(0,v.jsx)(oC,{viewport:e,onClick:()=>{m(e.width),t(e)},isActive:k===e.width},r)),(0,v.jsx)("div",{className:ow("divider")}),(0,v.jsx)(oI,{title:f,disabled:r<=(null==(a=_[0])?void 0:a.value),onClick:e=>{e.stopPropagation(),o(_[Math.max(_.findIndex(e=>e.value===r)-1,0)].value)},children:(0,v.jsx)(i.en,{size:16})}),(0,v.jsx)(oI,{title:b,disabled:r>=(null==(l=_[_.length-1])?void 0:l.value),onClick:e=>{e.stopPropagation(),o(_[Math.min(_.findIndex(e=>e.value===r)+1,_.length-1)].value)},children:(0,v.jsx)(i.$Z,{size:16})}),(0,v.jsxs)("div",{className:ow("zoom"),children:[(0,v.jsx)("div",{className:ow("divider")}),(0,v.jsx)("select",{className:ow("zoomSelect"),value:r.toString(),onClick:e=>{e.stopPropagation()},onChange:e=>{o(parseFloat(e.currentTarget.value))},children:_.map(e=>(0,v.jsx)("option",{value:e.value,label:e.label},e.label))})]})]})}),(0,v.jsx)("button",{className:ow("toggleButton"),title:x,onClick:()=>g(e=>!e),children:h?(0,v.jsx)(i.X,{size:16}):(0,v.jsx)(i.VA,{size:16})})]})};(0,s.hY)(),(0,s.hY)();var oE=(0,p.createContext)(null),oA=({children:e})=>{let r=(0,p.useRef)(null),t=(0,p.useMemo)(()=>({frameRef:r}),[]);return(0,v.jsx)(oE.Provider,{value:t,children:e})},oP=()=>{let e=(0,p.useContext)(oE);if(null===e)throw Error("useCanvasFrame must be used within a FrameProvider");return e},oL=(0,d.d)("PuckCanvas",{PuckCanvas:"_PuckCanvas_zw9iy_1","PuckCanvas-controls":"_PuckCanvas-controls_zw9iy_18","PuckCanvas--fullScreen":"_PuckCanvas--fullScreen_zw9iy_23","PuckCanvas-inner":"_PuckCanvas-inner_zw9iy_34","PuckCanvas-root":"_PuckCanvas-root_zw9iy_43","PuckCanvas--ready":"_PuckCanvas--ready_zw9iy_68","PuckCanvas-loader":"_PuckCanvas-loader_zw9iy_73","PuckCanvas--showLoader":"_PuckCanvas--showLoader_zw9iy_84"}),oD=()=>{var e;let{frameRef:r}=oP(),t=(0,i.Zr)(r),{viewports:o=c.lu,ui:n}=o0(),{dispatch:a,overrides:l,setUi:d,zoomConfig:u,setZoomConfig:k,status:m,iframe:h,_experimentalFullScreenCanvas:g}=(0,i.CU)((0,_.k)(e=>({dispatch:e.dispatch,overrides:e.overrides,setUi:e.setUi,zoomConfig:e.zoomConfig,setZoomConfig:e.setZoomConfig,status:e.status,iframe:e.iframe,_experimentalFullScreenCanvas:e._experimentalFullScreenCanvas}))),{leftSideBarVisible:f,rightSideBarVisible:b,leftSideBarWidth:x,rightSideBarWidth:y,viewports:w}=(0,i.CU)((0,_.k)(e=>({leftSideBarVisible:e.state.ui.leftSideBarVisible,rightSideBarVisible:e.state.ui.rightSideBarVisible,leftSideBarWidth:e.state.ui.leftSideBarWidth,rightSideBarWidth:e.state.ui.rightSideBarWidth,viewports:e.state.ui.viewports}))),[z,I]=(0,p.useState)(!1),j=(0,p.useRef)(!1),C=(0,p.useMemo)(()=>({children:e})=>(0,v.jsx)(v.Fragment,{children:e}),[]),S=(0,p.useMemo)(()=>l.preview||C,[l]),E=(0,p.useCallback)(()=>{if(r.current){let e=r.current,t=(0,i.YH)(e);return{width:t.contentBox.width,height:t.contentBox.height}}return{width:0,height:0}},[r]);(0,p.useEffect)(()=>{t()},[r,f,b,x,y,w]),(0,p.useEffect)(()=>{let{height:e}=E();"auto"===w.current.height&&k((0,s.ko)((0,s.IA)({},u),{rootHeight:e/u.zoom}))},[u.zoom,E,k]),(0,p.useEffect)(()=>{t()},[w.current.width,w]),(0,p.useEffect)(()=>{if(!r.current)return;let e=new ResizeObserver(()=>{j.current||t()});return e.observe(r.current),()=>{e.disconnect()}},[r.current]);let[A,P]=(0,p.useState)(!1);(0,p.useEffect)(()=>{setTimeout(()=>{P(!0)},500)},[]);let L=(0,i.sL)();return(0,p.useEffect)(()=>{var e,t;if("undefined"==typeof window||(null==(e=null==n?void 0:n.viewports)?void 0:e.current))return;let a=window.innerWidth,i=null==(t=r.current)?void 0:t.getBoundingClientRect().width;if(!a||!i||0===o.length)return;let l=Object.values(o).find(e=>"100%"===e.width),c=Object.entries(o).filter(([e,r])=>"100%"!==r.width).map(([e,r])=>({key:e,diff:Math.abs(a-("string"==typeof r.width?a:r.width)),value:r})).sort((e,r)=>e.diff>r.diff?1:-1)[0].value;if(c.width<i&&l&&(c=l),h.enabled){let e=L.getState(),r={state:(0,s.ko)((0,s.IA)({},e.state),{ui:(0,s.ko)((0,s.IA)({},e.state.ui),{viewports:(0,s.ko)((0,s.IA)({},e.state.ui.viewports),{current:(0,s.ko)((0,s.IA)({},e.state.ui.viewports.current),{height:(null==c?void 0:c.height)||"auto",width:null==c?void 0:c.width})})})})},t=e.history;1===e.history.histories.length&&(t=(0,s.ko)((0,s.IA)({},t),{histories:[r]})),L.setState((0,s.ko)((0,s.IA)({},r),{history:t}))}},[o,r.current,h,L,null==(e=null==n?void 0:n.viewports)?void 0:e.current]),(0,v.jsxs)("div",{className:oL({ready:"READY"===m||!h.enabled||!h.waitForStyles,showLoader:A,fullScreen:g}),onClick:e=>{let r=e.target;r.hasAttribute("data-puck-component")||r.hasAttribute("data-puck-dropzone")||a({type:"setUi",ui:{itemSelector:null},recordHistory:!1})},children:[w.controlsVisible&&h.enabled&&(0,v.jsx)("div",{className:oL("controls"),children:(0,v.jsx)(oS,{fullScreen:g,autoZoom:u.autoZoom,zoom:u.zoom,onViewportChange:e=>{I(!0),j.current=!0;let r=(0,s.ko)((0,s.IA)({},e),{height:e.height||"auto",zoom:u.zoom});d({viewports:(0,s.ko)((0,s.IA)({},w),{current:r})}),t({viewports:(0,s.ko)((0,s.IA)({},w),{current:r})})},onZoom:e=>{I(!0),j.current=!0,k((0,s.ko)((0,s.IA)({},u),{zoom:e}))}})}),(0,v.jsxs)("div",{className:oL("inner"),ref:r,children:[(0,v.jsx)("div",{className:oL("root"),style:{width:h.enabled?w.current.width:"100%",height:u.rootHeight,transform:h.enabled?`scale(${u.zoom})`:void 0,transition:z?"width 150ms ease-out, height 150ms ease-out, transform 150ms ease-out":"",overflow:h.enabled?void 0:"auto"},suppressHydrationWarning:!0,id:"puck-canvas-root",onTransitionEnd:()=>{I(!1),j.current=!1},children:(0,v.jsx)(S,{children:(0,v.jsx)(op,{})})}),(0,v.jsx)("div",{className:oL("loader"),children:(0,v.jsx)(i.aH,{size:24})})]})]})};function oT(e,r){let[t,o]=(0,p.useState)(null),n=(0,p.useRef)(null),a=(0,i.CU)(r=>"left"===e?r.state.ui.leftSideBarWidth:r.state.ui.rightSideBarWidth);return(0,p.useEffect)(()=>{if("undefined"!=typeof window&&!a)try{let t=localStorage.getItem("puck-sidebar-widths");if(t){let o=JSON.parse(t)[e],n="left"===e?"leftSideBarWidth":"rightSideBarWidth";o&&r({type:"setUi",ui:{[n]:o}})}}catch(r){console.error(`Failed to load ${e} sidebar width from localStorage`,r)}},[r,e,a]),(0,p.useEffect)(()=>{void 0!==a&&o(a)},[a]),{width:t,setWidth:o,sidebarRef:n,handleResizeEnd:(0,p.useCallback)(t=>{r({type:"setUi",ui:{["left"===e?"leftSideBarWidth":"rightSideBarWidth"]:t}});let o={};try{let e=localStorage.getItem("puck-sidebar-widths");o=e?JSON.parse(e):{}}catch(r){console.error(`Failed to save ${e} sidebar width to localStorage`,r)}finally{localStorage.setItem("puck-sidebar-widths",JSON.stringify((0,s.ko)((0,s.IA)({},o),{[e]:t})))}window.dispatchEvent(new CustomEvent("viewportchange",{bubbles:!0,cancelable:!1}))},[r,e])}}(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var oM=(0,d.d)("ResizeHandle",{ResizeHandle:"_ResizeHandle_144bf_2","ResizeHandle--left":"_ResizeHandle--left_144bf_16","ResizeHandle--right":"_ResizeHandle--right_144bf_20"}),oB=({position:e,sidebarRef:r,onResize:t,onResizeEnd:o})=>{let{frameRef:n}=oP(),a=(0,i.Zr)(n),l=(0,p.useRef)(null),c=(0,p.useRef)(!1),d=(0,p.useRef)(0),u=(0,p.useRef)(0),s=(0,p.useCallback)(r=>{if(!c.current)return;let o=r.clientX-d.current;t(Math.max(192,"left"===e?u.current+o:u.current-o)),r.preventDefault()},[t,e]),_=(0,p.useCallback)(()=>{var e;if(!c.current)return;c.current=!1,document.body.style.cursor="",document.body.style.userSelect="";let t=document.getElementById("resize-overlay");t&&document.body.removeChild(t),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",_),o((null==(e=r.current)?void 0:e.getBoundingClientRect().width)||0),a()},[o]),k=(0,p.useCallback)(e=>{var t;c.current=!0,d.current=e.clientX,u.current=(null==(t=r.current)?void 0:t.getBoundingClientRect().width)||0,document.body.style.cursor="col-resize",document.body.style.userSelect="none";let o=document.createElement("div");o.id="resize-overlay",o.setAttribute("data-resize-overlay",""),document.body.appendChild(o),document.addEventListener("mousemove",s),document.addEventListener("mouseup",_),e.preventDefault()},[e,s,_]);return(0,v.jsx)("div",{ref:l,className:oM({[e]:!0}),onMouseDown:k})};(0,s.hY)();var oN=(0,d.d)("Sidebar",{Sidebar:"_Sidebar_16oed_1","Sidebar--isVisible":"_Sidebar--isVisible_16oed_10","Sidebar--left":"_Sidebar--left_16oed_14","Sidebar--right":"_Sidebar--right_16oed_34","Sidebar-resizeHandle":"_Sidebar-resizeHandle_16oed_51"}),oF=({position:e,sidebarRef:r,isVisible:t,onResize:o,onResizeEnd:n,children:a})=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{ref:r,className:oN({[e]:!0,isVisible:t}),children:a}),(0,v.jsx)("div",{className:`${oN("resizeHandle")}`,children:(0,v.jsx)(oB,{position:e,sidebarRef:r,onResize:o,onResizeEnd:n})})]});(0,s.hY)(),(0,s.hY)(),(0,s.hY)();var oR={Nav:"_Nav_vll2r_1","Nav-list":"_Nav-list_vll2r_5","Nav-mobileActions":"_Nav-mobileActions_vll2r_23","NavItem-link":"_NavItem-link_vll2r_39",NavItem:"_NavItem_vll2r_39","NavItem-linkIcon":"_NavItem-linkIcon_vll2r_90","NavItem--active":"_NavItem--active_vll2r_100","NavItem--mobileOnly":"_NavItem--mobileOnly_vll2r_136","NavItem--desktopOnly":"_NavItem--desktopOnly_vll2r_141"},oO=(0,d.d)("Nav",oR),oY=(0,d.d)("NavItem",oR),oU=({label:e,icon:r,onClick:t,isActive:o,mobileOnly:n,desktopOnly:a})=>(0,v.jsx)("li",{className:oY({active:o,mobileOnly:n,desktopOnly:a}),children:t&&(0,v.jsxs)("div",{className:oY("link"),onClick:t,children:[r&&(0,v.jsx)("span",{className:oY("linkIcon"),children:r}),(0,v.jsx)("span",{className:oY("linkLabel"),children:e})]})}),oq=({items:e,mobileActions:r})=>(0,v.jsxs)("nav",{className:oO(),children:[(0,v.jsx)("ul",{className:oO("list"),children:Object.entries(e).map(([e,r])=>(0,v.jsx)(oU,(0,s.IA)({},r),e))}),r&&(0,v.jsx)("div",{className:oO("mobileActions"),children:r})]});(0,s.hY)();var oH=e=>(0,s.IA)({enabled:!0,waitForStyles:!0,syncHostStyles:!0},e),o$=(0,d.d)("Puck",ov),oV=(0,d.d)("PuckLayout",ov),oZ=(0,d.d)("PuckPluginTab",ov),oW="undefined"==typeof window?p.useEffect:p.useLayoutEffect,oX=()=>{let e=(0,i.JX)("label-page"),r=(0,i.CU)(e=>{var r,t,o;return e.selectedItem?null!=(t=null==(r=e.config.components[e.selectedItem.type])?void 0:r.label)?t:e.selectedItem.type.toString():null==(o=e.config.root)?void 0:o.label});return(0,v.jsx)(ob,{noBorderTop:!0,showBreadcrumbs:!0,title:r||e,children:(0,v.jsx)(tG,{})})},oJ=({children:e,visible:r,mobileOnly:t})=>(0,v.jsx)("div",{className:oZ({visible:r,mobileOnly:t}),children:(0,v.jsx)("div",{className:oZ("body"),children:e})}),oG=({children:e})=>{var r,t;let{iframe:o,initialHistory:n,plugins:a,height:l}=o0(),c=(0,i.CU)(e=>e.dnd),d=(0,p.useMemo)(()=>oH(o),[o]);t8((null!==t9?t9:"undefined"!=typeof document&&(t9=""!==getComputedStyle(document.documentElement).getPropertyValue("--_puck-styles-loaded").trim()))?null:{cssText:t0,id:t4.uiDefault,prepend:!0}),(0,p.useEffect)(()=>{},[]);let u=(0,i.CU)(e=>e.dispatch),_=(0,i.CU)(e=>e.state.ui.leftSideBarVisible),k=(0,i.CU)(e=>e.state.ui.rightSideBarVisible),m=(0,i.CU)(e=>e.instanceId),{width:h,setWidth:g,sidebarRef:f,handleResizeEnd:b}=oT("left",u),{width:x,setWidth:y,sidebarRef:w,handleResizeEnd:z}=oT("right",u);(0,p.useEffect)(()=>{window.matchMedia("(min-width: 638px)").matches||u({type:"setUi",ui:{leftSideBarVisible:!1,rightSideBarVisible:!1}});let e=()=>{window.matchMedia("(min-width: 638px)").matches||u({type:"setUi",ui:e=>(0,s.IA)((0,s.IA)({},e),e.rightSideBarVisible?{leftSideBarVisible:!1}:{})})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let I=(0,i.CU)(e=>e.overrides),j=(0,p.useMemo)(()=>I.puck||o_,[I]),[C,S]=(0,p.useState)(!1);oW(()=>{S(!0)},[]);let E=(0,i.CU)(e=>"READY"===e.status);(0,i.RU)(),(0,p.useEffect)(()=>{if(E&&d.enabled){let e=eQ();if(e)return(0,i.uK)(e)}},[E,d.enabled]),(()=>{let e=(0,i.sL)(),r=(0,p.useCallback)(()=>{(0,e.getState().dispatch)({type:"setUi",ui:e=>({previewMode:"edit"===e.previewMode?"interactive":"edit"})})},[e]);(0,i.EE)({meta:!0,i:!0},r),(0,i.EE)({ctrl:!0,i:!0},r)})(),(()=>{let e=(0,i.sL)(),r=(0,p.useCallback)(r=>{var t;if((e=>{var r;if(null==e?void 0:e.defaultPrevented)return!0;let t=(null==(r=null==e?void 0:e.composedPath)?void 0:r.call(e)[0])||(null==e?void 0:e.target)||document.activeElement;if(t instanceof HTMLElement){let e=t.tagName.toLowerCase();if("input"===e||"textarea"===e||"select"===e||t.isContentEditable)return!0;let r=t.getAttribute("role");if("textbox"===r||"combobox"===r||"searchbox"===r||"listbox"===r||"grid"===r)return!0}let o=document.querySelector('dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]');return!!(o&&(e=>{let r=e;for(;r&&r!==document.body;){let e=window.getComputedStyle(r);if("none"===e.display||"hidden"===e.visibility||"0"===e.opacity||"true"===r.getAttribute("aria-hidden")||r.hasAttribute("hidden"))return!1;r=r.parentElement}return!0})(o))})(r))return!1;let{state:o,dispatch:n,permissions:a,selectedItem:i}=e.getState(),l=null==(t=o.ui)?void 0:t.itemSelector;return null==l||!l.zone||!i||!a.getPermissions({item:i}).delete||(n({type:"remove",index:l.index,zone:l.zone}),!0)},[e]);(0,i.EE)({delete:!0},r),(0,i.EE)({backspace:!0},r)})();let A={};h&&(A["--puck-user-sidebar-left-width"]=`${h}px`),x&&(A["--puck-user-sidebar-right-width"]=`${x}px`);let P=(0,i.CU)(e=>e.setUi),L=(0,i.CU)(e=>{var r;return null==(r=e.state.ui.plugin)?void 0:r.current}),D=(0,i.sL)(),T=(0,p.useMemo)(()=>!!(null==a?void 0:a.find(e=>"legacy-side-bar"===e.name)),[a]),M=(0,i.JX)("plugin-blocks"),B=(0,i.JX)("plugin-outline"),N=(0,i.JX)("plugin-fields"),F=(0,p.useMemo)(()=>{let e={},r=[((e={})=>{var r,t;return{name:"blocks",label:null!=(r=e.label)?r:"Blocks",render:()=>(0,v.jsx)("div",{className:r7(),children:(0,v.jsx)(r9,{})}),icon:null!=(t=e.icon)?t:(0,v.jsx)(i.pj,{})}})({label:M}),((e={})=>{var r,t;return{name:"outline",label:null!=(r=e.label)?r:"Outline",render:()=>(0,v.jsx)("div",{className:tH(),children:(0,v.jsx)(tq,{})}),icon:null!=(t=e.icon)?t:(0,v.jsx)(i.zg,{})}})({label:B})],t=e=>"legacy-side-bar"===e.name?-1:0,o=[...r,...null!=a?a:[]].sort((e,r)=>t(e)-t(r));return(null==a?void 0:a.some(e=>"fields"===e.name))||o.push((({desktopSideBar:e="right",label:r,icon:t}={})=>({name:"fields",label:null!=r?r:"Fields",render:()=>(0,v.jsxs)("div",{className:tK(),children:[(0,v.jsx)("div",{className:tK("header"),children:(0,v.jsx)(tV,{numParents:2,children:(0,v.jsx)(tQ,{})})}),(0,v.jsx)(tG,{})]}),icon:null!=t?t:(0,v.jsx)(i.fL,{}),mobileOnly:"right"===e}))({label:N})),null==o||o.forEach(r=>{var t,o,n;r.name&&r.render&&(e[r.name]&&delete e[r.name],e[r.name]={label:null!=(t=r.label)?t:r.name,icon:null!=(o=r.icon)?o:(0,v.jsx)(i.Yf,{}),onClick:()=>{r.name===L?_?P({leftSideBarVisible:!1}):P({leftSideBarVisible:!0}):r.name&&P({plugin:{current:r.name},leftSideBarVisible:!0})},isActive:_&&L===r.name,render:r.render,mobilePanelHeight:null!=(n=r.mobilePanelHeight)?n:"toggle",mobileOnly:T||r.mobileOnly,desktopOnly:"legacy-side-bar"===r.name||r.desktopOnly})}),e},[a,L,D,_,M,B,N]),R=null!=L?L:Object.keys(F)[0],O=null!=(t=null==(r=F[R])?void 0:r.mobilePanelHeight)?t:"toggle";(0,p.useEffect)(()=>{L||P({plugin:{current:Object.keys(F)[0]}})},[F,L]);let Y=F.fields&&!1===F.fields.mobileOnly,U=(0,i.CU)(e=>{var r;return null!=(r=e.state.ui.mobilePanelExpanded)&&r}),q=(0,i.JX)("layout-maximize"),H=(0,i.JX)("layout-minimize");return(0,v.jsxs)("div",{className:`Puck ${o$({hidePlugins:T})}`,id:m,style:{height:l,visibility:"hidden"},children:[(0,v.jsx)(ry,{disableAutoScroll:null==c?void 0:c.disableAutoScroll,behavior:null==c?void 0:c.behavior,children:(0,v.jsx)(j,{children:e||(0,v.jsx)(oA,{children:(0,v.jsx)("div",{className:oV({leftSideBarVisible:_,mounted:C,rightSideBarVisible:!Y&&k,isExpanded:U,mobilePanelHeightToggle:"toggle"===O,mobilePanelHeightMinContent:"min-content"===O}),style:{height:l},children:(0,v.jsxs)("div",{className:oV("inner"),style:A,children:[(0,v.jsx)("div",{className:oV("header"),children:(0,v.jsx)(og,{hidePlugins:T})}),(0,v.jsx)("div",{className:oV("nav"),children:(0,v.jsx)(oq,{items:F,mobileActions:_&&"toggle"===O&&(0,v.jsx)(i.K0,{type:"button",title:U?H:q,onClick:()=>{P({mobilePanelExpanded:!U})},children:U?(0,v.jsx)(i.xq,{size:21}):(0,v.jsx)(i.h1,{size:21})})})}),(0,v.jsx)(oF,{position:"left",sidebarRef:f,isVisible:_,onResize:g,onResizeEnd:b,children:Object.entries(F).map(([e,{mobileOnly:r,render:t,label:o}])=>(0,v.jsx)(oJ,{visible:L===e,mobileOnly:r,children:(0,v.jsx)(t,{})},e))}),(0,v.jsx)(oD,{}),!Y&&(0,v.jsx)(oF,{position:"right",sidebarRef:w,isVisible:k,onResize:y,onResizeEnd:z,children:(0,v.jsx)(oX,{})})]})})})})}),(0,v.jsx)("div",{id:"puck-portal-root",className:o$("portal")})]})},oK=(0,p.createContext)({});function oQ(e){return(0,v.jsx)(oK.Provider,{value:e,children:e.children})}var o0=()=>(0,p.useContext)(oK);function o1({children:e}){let{config:r,data:t,ui:o,onChange:n,permissions:a={},plugins:d,overrides:_,viewports:k=c.lu,iframe:h,dnd:g,initialHistory:f,metadata:b,dictionary:x,onAction:y,fieldTransforms:w,_experimentalFullScreenCanvas:z,_experimentalVirtualization:I}=o0(),j=(0,p.useMemo)(()=>oH(h),[h]),[S]=(0,p.useState)(()=>{var e,n,a;let i=(0,s.IA)((0,s.IA)({},c.Kn.ui),o);!(Object.keys((null==t?void 0:t.root)||{}).length>0)||(null==(e=null==t?void 0:t.root)?void 0:e.props)||console.warn("Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically.");let d=(null==(n=null==t?void 0:t.root)?void 0:n.props)||(null==t?void 0:t.root)||{},p=(0,s.IA)((0,s.IA)({},null==(a=r.root)?void 0:a.defaultProps),d),v=(0,l.fq)((0,u.Rn)((0,s.ko)((0,s.IA)({},null==t?void 0:t.root),{props:p})),r),_=(0,s.ko)((0,s.IA)({},c.Kn),{data:(0,s.ko)((0,s.IA)({},t),{root:(0,s.ko)((0,s.IA)({},null==t?void 0:t.root),{props:v.props}),content:t.content||[]}),ui:(0,s.ko)((0,s.IA)((0,s.IA)({},i),{}),{componentList:r.categories?Object.entries(r.categories).reduce((e,[r,t])=>(0,s.ko)((0,s.IA)({},e),{[r]:{title:t.title,components:t.components,expanded:t.defaultExpanded,visible:t.visible}}),{}):{}})});return(0,u.CS)(_,r)}),{appendData:E=!0}=f||{},[A]=(0,p.useState)([...(null==f?void 0:f.histories)||[],...E?[{state:S}]:[]].map(e=>{let t=(0,s.IA)((0,s.IA)({},S),e.state);return e.state.indexes||(t=(0,u.CS)(t,r)),(0,s.ko)((0,s.IA)({},e),{state:t})})),P=(0,p.useMemo)(()=>(null==f?void 0:f.index)!==void 0&&(null==f?void 0:f.index)>=0&&(null==f?void 0:f.index)<A.length?null==f?void 0:f.index:A.length-1,[]),L=A[P].state,D=(({overrides:e,plugins:r})=>(0,p.useMemo)(()=>(({overrides:e,plugins:r})=>{let t=(0,s.IA)({},e);return null==r||r.forEach(e=>{e.overrides&&Object.keys(e.overrides).forEach(r=>{var o;if(!(null==(o=e.overrides)?void 0:o[r]))return;if("fieldTypes"===r){let r=e.overrides.fieldTypes;Object.keys(r).forEach(e=>{t.fieldTypes=t.fieldTypes||{};let o=t.fieldTypes[e];t.fieldTypes[e]=t=>r[e]((0,s.ko)((0,s.IA)({},t),{children:o?o(t):t.children}))});return}let n=t[r];t[r]=t=>e.overrides[r]((0,s.ko)((0,s.IA)({},t),{children:n?n(t):t.children}))})}),t})({overrides:e,plugins:r}),[r,e]))({overrides:_,plugins:d}),T=(0,p.useMemo)(()=>{let e=(d||[]).reduce((e,r)=>(0,s.IA)((0,s.IA)({},e),r.fieldTransforms),{});return(0,s.IA)((0,s.IA)({},e),w)},[w,d]),M=eR(),B=(0,p.useCallback)(e=>({instanceId:M,state:e,config:r,plugins:d||[],overrides:D,viewports:k,iframe:j,_experimentalFullScreenCanvas:!!z,_experimentalVirtualization:!!I,onAction:y,metadata:b,dictionary:x||{},dnd:g,fieldTransforms:T}),[M,L,r,d,D,k,j,z,I,y,b,x,g,T]),[N]=(0,p.useState)(()=>(0,i.pq)(B(L)));(0,p.useEffect)(()=>{},[N]),(0,p.useEffect)(()=>{let e=N.getState().state;N.setState((0,s.IA)({},B(e)))},[B]),(0,i.Fz)(N,{histories:A,index:P,initialAppState:L});let F=(0,p.useRef)(null);(0,p.useEffect)(()=>N.subscribe(e=>e.state.data,e=>{n&&((0,C.bD)(e,F.current)||(n(e),F.current=e))}),[n]),(0,i.DQ)(N,a);let R=(e=>{let[r]=(0,p.useState)(()=>(0,m.y)(()=>r1(r4(e.getState()),e.getState)));return(0,p.useEffect)(()=>e.subscribe(e=>r4(e),t=>{r.setState(r1(t,e.getState))}),[]),r})(N);return(0,p.useEffect)(()=>{let{resolveAndCommitData:e}=N.getState();setTimeout(()=>{e()},0)},[]),(0,v.jsx)(i.u0.Provider,{value:N,children:(0,v.jsx)(r2.Provider,{value:R,children:e})})}function o2(e){return(0,v.jsx)(oQ,(0,s.ko)((0,s.IA)({},e),{children:(0,v.jsx)(o1,(0,s.ko)((0,s.IA)({},e),{children:(0,v.jsx)(oG,{children:e.children})}))}))}o2.Components=r9,o2.Fields=tG,o2.Layout=oG,o2.Outline=tq,o2.Preview=op,(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)(),(0,s.hY)()}}]);