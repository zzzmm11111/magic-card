import{q as Ne,g as he,h as ae,i as _e,b as g,j as ve,c as q,a as v,k as pe,d as Le,e as D,l as ue,m as fe,u as me,f as je,n as Ae,o as s,p as Z}from"./light-BRMEBvMj.js";import{o as Ke,R as Ve,m as K,h as oe,a as ge,c as N,j as ye,p as qe,U as Ce,V as $e,s as Qe,d as Q,k as h,T as Pe,W as Ye,z as we,y as Xe,X as Ue,u as Je}from"./index-B8BPln--.js";function Ze(e,n){if(e===void 0)return!1;if(n){const{context:{ids:a}}=n;return a.has(e)}return Ne(e)!==null}function eo(){const e=K(!1);return Ke(()=>{e.value=!0}),Ve(e)}const re=typeof document<"u"&&typeof window<"u";function be(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}function Se(e,...n){if(Array.isArray(e))e.forEach(a=>Se(a,...n));else return e(...n)}const xe=ye("n-form-item");function oo(e,{defaultSize:n="medium",mergedSize:a,mergedDisabled:l}={}){const t=oe(xe,null);qe(xe,null);const c=N(a?()=>a(t):()=>{const{size:d}=e;if(d)return d;if(t){const{mergedSize:W}=t;if(W.value!==void 0)return W.value}return n}),P=N(l?()=>l(t):()=>{const{disabled:d}=e;return d!==void 0?d:t?t.disabled.value:!1}),r=N(()=>{const{status:d}=e;return d||(t==null?void 0:t.mergedValidationStatus.value)});return ge(()=>{t&&t.restoreValidation()}),{mergedSizeRef:c,mergedDisabledRef:P,mergedStatusRef:r,nTriggerFormBlur(){t&&t.handleContentBlur()},nTriggerFormChange(){t&&t.handleContentChange()},nTriggerFormFocus(){t&&t.handleContentFocus()},nTriggerFormInput(){t&&t.handleContentInput()}}}function ro(e,n,a){if(!n)return;const l=he(),t=N(()=>{const{value:r}=n;if(!r)return;const d=r[e];if(d)return d}),c=oe(Ce,null),P=()=>{Qe(()=>{const{value:r}=a,d=`${r}${e}Rtl`;if(Ze(d,l))return;const{value:W}=t;W&&W.style.mount({id:d,head:!0,anchorMetaName:ae,props:{bPrefix:r?`.${r}-`:void 0},ssr:l,parent:c==null?void 0:c.styleMountTarget})})};return l?P():$e(P),t}function Te(e,n,a){if(!n)return;const l=he(),t=oe(Ce,null),c=()=>{const P=a.value;n.mount({id:P===void 0?e:P+e,head:!0,anchorMetaName:ae,props:{bPrefix:P?`.${P}-`:void 0},ssr:l,parent:t==null?void 0:t.styleMountTarget}),t!=null&&t.preflightStyleDisabled||_e.mount({id:"n-global",head:!0,anchorMetaName:ae,ssr:l,parent:t==null?void 0:t.styleMountTarget})};l?c():$e(c)}const He=Q({name:"BaseIconSwitchTransition",setup(e,{slots:n}){const a=eo();return()=>h(Pe,{name:"icon-switch-transition",appear:a.value},n)}}),{cubicBezierEaseInOut:to}=ve;function le({originalTransform:e="",left:n=0,top:a=0,transition:l=`all .3s ${to} !important`}={}){return[g("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${e} scale(0.75)`,left:n,top:a,opacity:0}),g("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:n,top:a,opacity:1}),g("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:n,top:a,transition:l})]}const no=Q({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:n}){function a(r){e.width?r.style.maxWidth=`${r.offsetWidth}px`:r.style.maxHeight=`${r.offsetHeight}px`,r.offsetWidth}function l(r){e.width?r.style.maxWidth="0":r.style.maxHeight="0",r.offsetWidth;const{onLeave:d}=e;d&&d()}function t(r){e.width?r.style.maxWidth="":r.style.maxHeight="";const{onAfterLeave:d}=e;d&&d()}function c(r){if(r.style.transition="none",e.width){const d=r.offsetWidth;r.style.maxWidth="0",r.offsetWidth,r.style.transition="",r.style.maxWidth=`${d}px`}else if(e.reverse)r.style.maxHeight=`${r.offsetHeight}px`,r.offsetHeight,r.style.transition="",r.style.maxHeight="0";else{const d=r.offsetHeight;r.style.maxHeight="0",r.offsetWidth,r.style.transition="",r.style.maxHeight=`${d}px`}r.offsetWidth}function P(r){var d;e.width?r.style.maxWidth="":e.reverse||(r.style.maxHeight=""),(d=e.onAfterEnter)===null||d===void 0||d.call(e)}return()=>{const{group:r,width:d,appear:W,mode:V}=e,S=r?Ye:Pe,j={name:d?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:W,onEnter:c,onAfterEnter:P,onBeforeLeave:a,onLeave:l,onAfterLeave:t};return r||(j.mode=V),h(S,j,n)}}}),io=g([g("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),q("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[v("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[le()]),v("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[le({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),v("container",`
 animation: rotator 3s linear infinite both;
 `,[v("icon",`
 height: 1em;
 width: 1em;
 `)])])]),se="1.6s",so={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},ao=Q({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},so),setup(e){Te("-base-loading",io,we(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:n,strokeWidth:a,stroke:l,scale:t}=this,c=n/t;return h("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},h(He,null,{default:()=>this.show?h("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},h("div",{class:`${e}-base-loading__container`},h("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*c} ${2*c}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},h("g",null,h("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${c} ${c};270 ${c} ${c}`,begin:"0s",dur:se,fill:"freeze",repeatCount:"indefinite"}),h("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":a,"stroke-linecap":"round",cx:c,cy:c,r:n-a/2,"stroke-dasharray":5.67*n,"stroke-dashoffset":18.48*n},h("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${c} ${c};135 ${c} ${c};450 ${c} ${c}`,begin:"0s",dur:se,fill:"freeze",repeatCount:"indefinite"}),h("animate",{attributeName:"stroke-dashoffset",values:`${5.67*n};${1.42*n};${5.67*n}`,begin:"0s",dur:se,fill:"freeze",repeatCount:"indefinite"})))))):h("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:O}=ve;function lo({duration:e=".2s",delay:n=".1s"}={}){return[g("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),g("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),g("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${O},
 max-width ${e} ${O} ${n},
 margin-left ${e} ${O} ${n},
 margin-right ${e} ${O} ${n};
 `),g("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${O} ${n},
 max-width ${e} ${O},
 margin-left ${e} ${O},
 margin-right ${e} ${O};
 `)]}const co=q("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),uo=Q({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Te("-base-wave",co,we(e,"clsPrefix"));const n=K(null),a=K(!1);let l=null;return ge(()=>{l!==null&&window.clearTimeout(l)}),{active:a,selfRef:n,play(){l!==null&&(window.clearTimeout(l),a.value=!1,l=null),Xe(()=>{var t;(t=n.value)===null||t===void 0||t.offsetHeight,a.value=!0,l=window.setTimeout(()=>{a.value=!1,l=null},1e3)})}}},render(){const{clsPrefix:e}=this;return h("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),fo=re&&"chrome"in window;re&&navigator.userAgent.includes("Firefox");const bo=re&&navigator.userAgent.includes("Safari")&&!fo;function L(e){return pe(e,[255,255,255,.16])}function ee(e){return pe(e,[0,0,0,.12])}const xo=ye("n-button-group"),ho={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};function vo(e){const{heightTiny:n,heightSmall:a,heightMedium:l,heightLarge:t,borderRadius:c,fontSizeTiny:P,fontSizeSmall:r,fontSizeMedium:d,fontSizeLarge:W,opacityDisabled:V,textColor2:S,textColor3:j,primaryColorHover:y,primaryColorPressed:z,borderColor:Y,primaryColor:I,baseColor:f,infoColor:k,infoColorHover:T,infoColorPressed:i,successColor:b,successColorHover:$,successColorPressed:o,warningColor:B,warningColorHover:H,warningColorPressed:G,errorColor:E,errorColorHover:C,errorColorPressed:M,fontWeight:R,buttonColor2:A,buttonColor2Hover:F,buttonColor2Pressed:x,fontWeightStrong:X}=e;return Object.assign(Object.assign({},ho),{heightTiny:n,heightSmall:a,heightMedium:l,heightLarge:t,borderRadiusTiny:c,borderRadiusSmall:c,borderRadiusMedium:c,borderRadiusLarge:c,fontSizeTiny:P,fontSizeSmall:r,fontSizeMedium:d,fontSizeLarge:W,opacityDisabled:V,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:A,colorSecondaryHover:F,colorSecondaryPressed:x,colorTertiary:A,colorTertiaryHover:F,colorTertiaryPressed:x,colorQuaternary:"#0000",colorQuaternaryHover:F,colorQuaternaryPressed:x,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:S,textColorTertiary:j,textColorHover:y,textColorPressed:z,textColorFocus:y,textColorDisabled:S,textColorText:S,textColorTextHover:y,textColorTextPressed:z,textColorTextFocus:y,textColorTextDisabled:S,textColorGhost:S,textColorGhostHover:y,textColorGhostPressed:z,textColorGhostFocus:y,textColorGhostDisabled:S,border:`1px solid ${Y}`,borderHover:`1px solid ${y}`,borderPressed:`1px solid ${z}`,borderFocus:`1px solid ${y}`,borderDisabled:`1px solid ${Y}`,rippleColor:I,colorPrimary:I,colorHoverPrimary:y,colorPressedPrimary:z,colorFocusPrimary:y,colorDisabledPrimary:I,textColorPrimary:f,textColorHoverPrimary:f,textColorPressedPrimary:f,textColorFocusPrimary:f,textColorDisabledPrimary:f,textColorTextPrimary:I,textColorTextHoverPrimary:y,textColorTextPressedPrimary:z,textColorTextFocusPrimary:y,textColorTextDisabledPrimary:S,textColorGhostPrimary:I,textColorGhostHoverPrimary:y,textColorGhostPressedPrimary:z,textColorGhostFocusPrimary:y,textColorGhostDisabledPrimary:I,borderPrimary:`1px solid ${I}`,borderHoverPrimary:`1px solid ${y}`,borderPressedPrimary:`1px solid ${z}`,borderFocusPrimary:`1px solid ${y}`,borderDisabledPrimary:`1px solid ${I}`,rippleColorPrimary:I,colorInfo:k,colorHoverInfo:T,colorPressedInfo:i,colorFocusInfo:T,colorDisabledInfo:k,textColorInfo:f,textColorHoverInfo:f,textColorPressedInfo:f,textColorFocusInfo:f,textColorDisabledInfo:f,textColorTextInfo:k,textColorTextHoverInfo:T,textColorTextPressedInfo:i,textColorTextFocusInfo:T,textColorTextDisabledInfo:S,textColorGhostInfo:k,textColorGhostHoverInfo:T,textColorGhostPressedInfo:i,textColorGhostFocusInfo:T,textColorGhostDisabledInfo:k,borderInfo:`1px solid ${k}`,borderHoverInfo:`1px solid ${T}`,borderPressedInfo:`1px solid ${i}`,borderFocusInfo:`1px solid ${T}`,borderDisabledInfo:`1px solid ${k}`,rippleColorInfo:k,colorSuccess:b,colorHoverSuccess:$,colorPressedSuccess:o,colorFocusSuccess:$,colorDisabledSuccess:b,textColorSuccess:f,textColorHoverSuccess:f,textColorPressedSuccess:f,textColorFocusSuccess:f,textColorDisabledSuccess:f,textColorTextSuccess:b,textColorTextHoverSuccess:$,textColorTextPressedSuccess:o,textColorTextFocusSuccess:$,textColorTextDisabledSuccess:S,textColorGhostSuccess:b,textColorGhostHoverSuccess:$,textColorGhostPressedSuccess:o,textColorGhostFocusSuccess:$,textColorGhostDisabledSuccess:b,borderSuccess:`1px solid ${b}`,borderHoverSuccess:`1px solid ${$}`,borderPressedSuccess:`1px solid ${o}`,borderFocusSuccess:`1px solid ${$}`,borderDisabledSuccess:`1px solid ${b}`,rippleColorSuccess:b,colorWarning:B,colorHoverWarning:H,colorPressedWarning:G,colorFocusWarning:H,colorDisabledWarning:B,textColorWarning:f,textColorHoverWarning:f,textColorPressedWarning:f,textColorFocusWarning:f,textColorDisabledWarning:f,textColorTextWarning:B,textColorTextHoverWarning:H,textColorTextPressedWarning:G,textColorTextFocusWarning:H,textColorTextDisabledWarning:S,textColorGhostWarning:B,textColorGhostHoverWarning:H,textColorGhostPressedWarning:G,textColorGhostFocusWarning:H,textColorGhostDisabledWarning:B,borderWarning:`1px solid ${B}`,borderHoverWarning:`1px solid ${H}`,borderPressedWarning:`1px solid ${G}`,borderFocusWarning:`1px solid ${H}`,borderDisabledWarning:`1px solid ${B}`,rippleColorWarning:B,colorError:E,colorHoverError:C,colorPressedError:M,colorFocusError:C,colorDisabledError:E,textColorError:f,textColorHoverError:f,textColorPressedError:f,textColorFocusError:f,textColorDisabledError:f,textColorTextError:E,textColorTextHoverError:C,textColorTextPressedError:M,textColorTextFocusError:C,textColorTextDisabledError:S,textColorGhostError:E,textColorGhostHoverError:C,textColorGhostPressedError:M,textColorGhostFocusError:C,textColorGhostDisabledError:E,borderError:`1px solid ${E}`,borderHoverError:`1px solid ${C}`,borderPressedError:`1px solid ${M}`,borderFocusError:`1px solid ${C}`,borderDisabledError:`1px solid ${E}`,rippleColorError:E,waveOpacity:"0.6",fontWeight:R,fontWeightStrong:X})}const po={common:Le,self:vo},mo=g([q("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[D("color",[v("border",{borderColor:"var(--n-border-color)"}),D("disabled",[v("border",{borderColor:"var(--n-border-color-disabled)"})]),ue("disabled",[g("&:focus",[v("state-border",{borderColor:"var(--n-border-color-focus)"})]),g("&:hover",[v("state-border",{borderColor:"var(--n-border-color-hover)"})]),g("&:active",[v("state-border",{borderColor:"var(--n-border-color-pressed)"})]),D("pressed",[v("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),D("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[v("border",{border:"var(--n-border-disabled)"})]),ue("disabled",[g("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[v("state-border",{border:"var(--n-border-focus)"})]),g("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[v("state-border",{border:"var(--n-border-hover)"})]),g("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[v("state-border",{border:"var(--n-border-pressed)"})]),D("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[v("state-border",{border:"var(--n-border-pressed)"})])]),D("loading","cursor: wait;"),q("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[D("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),re&&"MozBoxSizing"in document.createElement("div").style?g("&::moz-focus-inner",{border:0}):null,v("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),v("border",`
 border: var(--n-border);
 `),v("state-border",`
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `),v("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[q("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[le({top:"50%",originalTransform:"translateY(-50%)"})]),lo()]),v("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[g("~",[v("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),D("block",`
 display: flex;
 width: 100%;
 `),D("dashed",[v("border, state-border",{borderStyle:"dashed !important"})]),D("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),g("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),g("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),go=Object.assign(Object.assign({},me.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!bo}}),$o=Q({name:"Button",props:go,slots:Object,setup(e){const n=K(null),a=K(null),l=K(!1),t=Ue(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),c=oe(xo,{}),{mergedSizeRef:P}=oo({},{defaultSize:"medium",mergedSize:i=>{const{size:b}=e;if(b)return b;const{size:$}=c;if($)return $;const{mergedSize:o}=i||{};return o?o.value:"medium"}}),r=N(()=>e.focusable&&!e.disabled),d=i=>{var b;r.value||i.preventDefault(),!e.nativeFocusBehavior&&(i.preventDefault(),!e.disabled&&r.value&&((b=n.value)===null||b===void 0||b.focus({preventScroll:!0})))},W=i=>{var b;if(!e.disabled&&!e.loading){const{onClick:$}=e;$&&Se($,i),e.text||(b=a.value)===null||b===void 0||b.play()}},V=i=>{switch(i.key){case"Enter":if(!e.keyboard)return;l.value=!1}},S=i=>{switch(i.key){case"Enter":if(!e.keyboard||e.loading){i.preventDefault();return}l.value=!0}},j=()=>{l.value=!1},{inlineThemeDisabled:y,mergedClsPrefixRef:z,mergedRtlRef:Y}=Je(e),I=me("Button","-button",mo,po,e,z),f=ro("Button",Y,z),k=N(()=>{const i=I.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:$},self:o}=i,{rippleDuration:B,opacityDisabled:H,fontWeight:G,fontWeightStrong:E}=o,C=P.value,{dashed:M,type:R,ghost:A,text:F,color:x,round:X,circle:te,textColor:_,secondary:ze,tertiary:de,quaternary:Be,strong:Ee}=e,Fe={"--n-font-weight":Ee?E:G};let p={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const U=R==="tertiary",ce=R==="default",u=U?"default":R;if(F){const m=_||x;p={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":m||o[s("textColorText",u)],"--n-text-color-hover":m?L(m):o[s("textColorTextHover",u)],"--n-text-color-pressed":m?ee(m):o[s("textColorTextPressed",u)],"--n-text-color-focus":m?L(m):o[s("textColorTextHover",u)],"--n-text-color-disabled":m||o[s("textColorTextDisabled",u)]}}else if(A||M){const m=_||x;p={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":x||o[s("rippleColor",u)],"--n-text-color":m||o[s("textColorGhost",u)],"--n-text-color-hover":m?L(m):o[s("textColorGhostHover",u)],"--n-text-color-pressed":m?ee(m):o[s("textColorGhostPressed",u)],"--n-text-color-focus":m?L(m):o[s("textColorGhostHover",u)],"--n-text-color-disabled":m||o[s("textColorGhostDisabled",u)]}}else if(ze){const m=ce?o.textColor:U?o.textColorTertiary:o[s("color",u)],w=x||m,J=R!=="default"&&R!=="tertiary";p={"--n-color":J?Z(w,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":J?Z(w,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":J?Z(w,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":J?Z(w,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":w,"--n-text-color-hover":w,"--n-text-color-pressed":w,"--n-text-color-focus":w,"--n-text-color-disabled":w}}else if(de||Be){const m=ce?o.textColor:U?o.textColorTertiary:o[s("color",u)],w=x||m;de?(p["--n-color"]=o.colorTertiary,p["--n-color-hover"]=o.colorTertiaryHover,p["--n-color-pressed"]=o.colorTertiaryPressed,p["--n-color-focus"]=o.colorSecondaryHover,p["--n-color-disabled"]=o.colorTertiary):(p["--n-color"]=o.colorQuaternary,p["--n-color-hover"]=o.colorQuaternaryHover,p["--n-color-pressed"]=o.colorQuaternaryPressed,p["--n-color-focus"]=o.colorQuaternaryHover,p["--n-color-disabled"]=o.colorQuaternary),p["--n-ripple-color"]="#0000",p["--n-text-color"]=w,p["--n-text-color-hover"]=w,p["--n-text-color-pressed"]=w,p["--n-text-color-focus"]=w,p["--n-text-color-disabled"]=w}else p={"--n-color":x||o[s("color",u)],"--n-color-hover":x?L(x):o[s("colorHover",u)],"--n-color-pressed":x?ee(x):o[s("colorPressed",u)],"--n-color-focus":x?L(x):o[s("colorFocus",u)],"--n-color-disabled":x||o[s("colorDisabled",u)],"--n-ripple-color":x||o[s("rippleColor",u)],"--n-text-color":_||(x?o.textColorPrimary:U?o.textColorTertiary:o[s("textColor",u)]),"--n-text-color-hover":_||(x?o.textColorHoverPrimary:o[s("textColorHover",u)]),"--n-text-color-pressed":_||(x?o.textColorPressedPrimary:o[s("textColorPressed",u)]),"--n-text-color-focus":_||(x?o.textColorFocusPrimary:o[s("textColorFocus",u)]),"--n-text-color-disabled":_||(x?o.textColorDisabledPrimary:o[s("textColorDisabled",u)])};let ne={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};F?ne={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ne={"--n-border":o[s("border",u)],"--n-border-hover":o[s("borderHover",u)],"--n-border-pressed":o[s("borderPressed",u)],"--n-border-focus":o[s("borderFocus",u)],"--n-border-disabled":o[s("borderDisabled",u)]};const{[s("height",C)]:ie,[s("fontSize",C)]:We,[s("padding",C)]:Ie,[s("paddingRound",C)]:ke,[s("iconSize",C)]:De,[s("borderRadius",C)]:Re,[s("iconMargin",C)]:Ge,waveOpacity:Me}=o,Oe={"--n-width":te&&!F?ie:"initial","--n-height":F?"initial":ie,"--n-font-size":We,"--n-padding":te||F?"initial":X?ke:Ie,"--n-icon-size":De,"--n-icon-margin":Ge,"--n-border-radius":F?"initial":te||X?ie:Re};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":$,"--n-ripple-duration":B,"--n-opacity-disabled":H,"--n-wave-opacity":Me},Fe),p),ne),Oe)}),T=y?je("button",N(()=>{let i="";const{dashed:b,type:$,ghost:o,text:B,color:H,round:G,circle:E,textColor:C,secondary:M,tertiary:R,quaternary:A,strong:F}=e;b&&(i+="a"),o&&(i+="b"),B&&(i+="c"),G&&(i+="d"),E&&(i+="e"),M&&(i+="f"),R&&(i+="g"),A&&(i+="h"),F&&(i+="i"),H&&(i+=`j${be(H)}`),C&&(i+=`k${be(C)}`);const{value:x}=P;return i+=`l${x[0]}`,i+=`m${$[0]}`,i}),k,e):void 0;return{selfElRef:n,waveElRef:a,mergedClsPrefix:z,mergedFocusable:r,mergedSize:P,showBorder:t,enterPressed:l,rtlEnabled:f,handleMousedown:d,handleKeydown:S,handleBlur:j,handleKeyup:V,handleClick:W,customColorCssVars:N(()=>{const{color:i}=e;if(!i)return null;const b=L(i);return{"--n-border-color":i,"--n-border-color-hover":b,"--n-border-color-pressed":ee(i),"--n-border-color-focus":b,"--n-border-color-disabled":i}}),cssVars:y?void 0:k,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:n,onRender:a}=this;a==null||a();const l=fe(this.$slots.default,t=>t&&h("span",{class:`${e}-button__content`},t));return h(n,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&l,h(no,{width:!0},{default:()=>fe(this.$slots.icon,t=>(this.loading||this.renderIcon||t)&&h("span",{class:`${e}-button__icon`,style:{margin:Ae(this.$slots.default)?"0":""}},h(He,null,{default:()=>this.loading?h(ao,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):h("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():t)})))}),this.iconPlacement==="left"&&l,this.text?null:h(uo,{ref:"waveElRef",clsPrefix:e}),this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});export{$o as B};
