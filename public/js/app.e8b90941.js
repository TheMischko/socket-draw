(function(){"use strict";var t={6453:function(t,n,o){var e=o(9242),r=o(3396);const c=(0,r.Uk)("Active user count: "),s={ref:"userCountText"};function i(t,n,o,e,i,a){const l=(0,r.up)("HeaderComponent"),d=(0,r.up)("MainCanvas"),u=(0,r.up)("DrawingSettings"),h=(0,r.up)("OverlayWrapper");return(0,r.wg)(),(0,r.j4)(h,null,{"top-content":(0,r.w5)((()=>[(0,r.Wm)(l),(0,r._)("div",null,[c,(0,r._)("span",s,"1",512)])])),"center-content":(0,r.w5)((()=>[(0,r.Wm)(d,{ref:"canvas",onCanvasClick:a.onCanvasClick,onCanvasDraw:a.onCanvasDraw,settings:t.drawSettings},null,8,["onCanvasClick","onCanvasDraw","settings"])])),"left-content":(0,r.w5)((()=>[(0,r.Wm)(u,{onSettingsChanged:a.onSettingsChange},null,8,["onSettingsChanged"])])),_:1})}const a={class:"center"};function l(t,n,o,e,c,s){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("canvas",{onClick:n[0]||(n[0]=(...t)=>s.canvasClick&&s.canvasClick(...t)),onMousedown:n[1]||(n[1]=(...t)=>s.drawStart&&s.drawStart(...t)),ref:"canvas"},null,544)])}var d={name:"MainCanvas",props:{settings:Object},data(){return{name:"Name",coord:{x:0,y:0},ctx:null}},mounted(){this.ctx=this.$refs.canvas.getContext("2d"),window.addEventListener("resize",this.resize),window.addEventListener("mouseup",this.drawStop),this.resize()},emits:{"canvas-click":null,"canvas-draw":null},methods:{canvasClick(t){this.reposition(t),this.$emit("canvas-click",this.coord)},drawStart(t){this.$el.addEventListener("mousemove",this.draw),this.reposition(t)},drawStop(){this.$el.removeEventListener("mousemove",this.draw)},resize(){this.ctx.canvas.width=800,this.ctx.canvas.height=600},reposition(t){this.coord.x=t.clientX-this.$el.offsetLeft,this.coord.y=t.clientY-this.$el.offsetTop},draw(t){this.ctx.beginPath(),this.ctx.lineWidth=this.settings.brushSize,this.ctx.lineCap="round",this.ctx.strokeStyle=this.settings.color;const n=[this.coord.x,this.coord.y];this.ctx.moveTo(this.coord.x,this.coord.y),this.reposition(t),this.ctx.lineTo(this.coord.x,this.coord.y),this.ctx.stroke(),this.$emit("canvas-draw",{settings:{brushSize:this.settings.brushSize,color:this.settings.color},moveTo:{x:n[0],y:n[1]},lineTo:{x:this.coord.x,y:this.coord.y}})},drawForeign({settings:t,lineTo:n,moveTo:o}){this.ctx.beginPath(),this.ctx.lineWidth=t.brushSize,this.ctx.lineCap="round",this.ctx.strokeStyle=t.color,this.ctx.moveTo(o.x,o.y),this.ctx.lineTo(n.x,n.y),this.ctx.stroke()},drawInitialImage(t){this.ctx.drawImage(t,0,0,800,600)}}},u=o(89);const h=(0,u.Z)(d,[["render",l]]);var p=h;const v={class:"drawing-settings noselect"},f={class:"settings-row"},g=(0,r.Uk)("Brush size: "),w={ref:"brushSizeText"},C=(0,r.Uk)(" px"),m={class:"settings-row"},x=(0,r._)("label",null,"Brush type:",-1),k={class:"settings-row row"},S=(0,r._)("label",null,"Color:",-1);function b(t,n,o,e,c,s){const i=(0,r.up)("BrushRadioGroup"),a=(0,r.up)("ColorPicker"),l=(0,r.up)("CardWrapper");return(0,r.wg)(),(0,r.j4)(l,null,{default:(0,r.w5)((()=>[(0,r._)("div",v,[(0,r._)("div",f,[(0,r._)("label",null,[g,(0,r._)("span",w,"?",512),C]),(0,r._)("input",{type:"range",min:"1",max:"100",value:"5",class:"slider",ref:"brushSizeInput",onChange:n[0]||(n[0]=(...t)=>s.onChange&&s.onChange(...t))},null,544)]),(0,r._)("div",m,[x,(0,r.Wm)(i,{ref:"brushRadioGroup",onValueChanged:s.onChange},null,8,["onValueChanged"])]),(0,r._)("div",k,[S,(0,r.Wm)(a,{ref:"colorInput",onValueChanged:s.onChange},null,8,["onValueChanged"])])])])),_:1})}const _={class:"card"};function y(t,n,o,e,c,s){return(0,r.wg)(),(0,r.iD)("div",_,[(0,r.WI)(t.$slots,"default",{},void 0,!0)])}var I={name:"CardWrapper"};const $=(0,u.Z)(I,[["render",y],["__scopeId","data-v-312d350d"]]);var z=$;const W=t=>((0,r.dD)("data-v-ad5df8c4"),t=t(),(0,r.Cn)(),t),B={class:"radio-group"},T=W((()=>(0,r._)("input",{type:"radio",value:"solidBrush",name:"brushType",id:"solidBrush"},null,-1))),D={for:"solidBrush"},M=W((()=>(0,r._)("input",{type:"radio",value:"softBrush",name:"brushType",id:"softBrush"},null,-1))),O={for:"softBrush"};function L(t,n,o,e,c,s){const i=(0,r.up)("SolidBrushIcon"),a=(0,r.up)("SoftBrushIcon");return(0,r.wg)(),(0,r.iD)("div",B,[(0,r._)("div",{class:"radio-wrapper selected",onClick:n[0]||(n[0]=(...t)=>s.onClick&&s.onClick(...t))},[T,(0,r._)("label",D,[(0,r.Wm)(i,{fill:"#000000"})])]),(0,r._)("div",{class:"radio-wrapper",onClick:n[1]||(n[1]=(...t)=>s.onClick&&s.onClick(...t))},[M,(0,r._)("label",O,[(0,r.Wm)(a)])])])}const Z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},E=(0,r._)("title",null,"Solid brush icon",-1),P=["fill"];function j(t,n,o,e,c,s){return(0,r.wg)(),(0,r.iD)("svg",Z,[E,(0,r._)("circle",{cx:"16",cy:"16",r:"16",fill:o.fill},null,8,P)])}var F={name:"SolidBrushIcon",props:{fill:String}};const G=(0,u.Z)(F,[["render",j]]);var A=G;const N={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},V=(0,r.uE)('<defs><radialGradient id="softBrushGradient" cx="16" cy="16" r="16" gradientUnits="userSpaceOnUse"><stop offset="0"></stop><stop offset="0.23" stop-color="#040404"></stop><stop offset="0.43" stop-color="#0f0f0f"></stop><stop offset="0.63" stop-color="#212121"></stop><stop offset="0.67" stop-color="#262626"></stop><stop offset="0.7" stop-color="#2e2e2e"></stop><stop offset="0.75" stop-color="#444"></stop><stop offset="0.81" stop-color="#676767"></stop><stop offset="0.88" stop-color="#989898"></stop><stop offset="0.96" stop-color="#d6d6d6"></stop><stop offset="1" stop-color="#fff"></stop></radialGradient></defs><title>Soft brush icon</title><circle cx="16" cy="16" r="16" fill="url(#softBrushGradient)"></circle>',3),U=[V];function R(t,n,o,e,c,s){return(0,r.wg)(),(0,r.iD)("svg",N,U)}var q={name:"SoftBrushIcon"};const H=(0,u.Z)(q,[["render",R]]);var J=H,X={name:"BrushRadioGroup",components:{SolidBrushIcon:A,SoftBrushIcon:J},emits:{"value-changed":null},methods:{onClick(t){t.stopPropagation();let n=t.target;document.querySelectorAll(".radio-wrapper").forEach((t=>{t.classList.remove("selected")})),n.classList.add("selected"),document.querySelectorAll('input[name="brushType"]').forEach((t=>{t.checked=!1})),n.childNodes.forEach((t=>{"INPUT"===t.tagName&&this.$emit("value-changed",t.value)}))},getValue(){const t=document.querySelector(".radio-wrapper.selected > input");return t.value}}};const Y=(0,u.Z)(X,[["render",L],["__scopeId","data-v-ad5df8c4"]]);var K=Y;const Q={class:"color-picker-wrapper"},tt=["value"],nt={id:"secondColor",ref:"secondColorDiv"};function ot(t,n,o,e,c,s){return(0,r.wg)(),(0,r.iD)("div",Q,[(0,r._)("input",{type:"color",ref:"input",onChange:n[0]||(n[0]=(...t)=>s.onInputChange&&s.onInputChange(...t)),value:c.color1},null,40,tt),(0,r._)("div",nt,null,512),(0,r._)("button",{id:"switchButton",onClick:n[1]||(n[1]=(...t)=>s.onSwitchClick&&s.onSwitchClick(...t))},"⇆")])}var et={name:"ColorPicker",emits:{"value-changed":null},data(){return{color1:"#FFFFFF",color2:"#000000"}},mounted(){this.$refs.input.value=this.color1,this.$refs.secondColorDiv.style.backgroundColor=this.color2},methods:{getValue(){return this.color1},onSwitchClick(){this.switchColors(),this.$emit("value-changed",this.color1)},onInputChange(){this.color1=this.$refs.input.value,this.$emit("value-changed",this.color1)},switchColors(){const t=this.color2;this.color2=this.color1,this.color1=t,this.$refs.secondColorDiv.style.backgroundColor=this.color2}}};const rt=(0,u.Z)(et,[["render",ot],["__scopeId","data-v-0f512fea"]]);var ct=rt,st={name:"DrawingSettings",components:{CardWrapper:z,BrushRadioGroup:K,ColorPicker:ct},data(){return{settings:{}}},emits:{"settings-changed":null},mounted(){this.onChange()},methods:{onChange(){this.settings={brushSize:this.$refs.brushSizeInput.value,brushType:this.$refs.brushRadioGroup.getValue(),color:this.$refs.colorInput.getValue()},this.$refs.brushSizeText.innerText=this.settings.brushSize,this.$emit("settings-changed",this.settings)}}};const it=(0,u.Z)(st,[["render",b]]);var at=it;const lt={class:"overlay"},dt={class:"top"},ut={class:"left"},ht={class:"center"},pt={class:"right"},vt={class:"bottom"};function ft(t,n,o,e,c,s){return(0,r.wg)(),(0,r.iD)("div",lt,[(0,r._)("div",dt,[(0,r.WI)(t.$slots,"top-content",{},void 0,!0)]),(0,r._)("div",ut,[(0,r.WI)(t.$slots,"left-content",{},void 0,!0)]),(0,r._)("div",ht,[(0,r.WI)(t.$slots,"center-content",{},void 0,!0)]),(0,r._)("div",pt,[(0,r.WI)(t.$slots,"right-content",{},void 0,!0)]),(0,r._)("div",vt,[(0,r.WI)(t.$slots,"bottom-content",{},void 0,!0)])])}var gt={name:"StaticWrapper"};const wt=(0,u.Z)(gt,[["render",ft],["__scopeId","data-v-3bc93e0d"]]);var Ct=wt;const mt=t=>((0,r.dD)("data-v-59e23d60"),t=t(),(0,r.Cn)(),t),xt={class:"header-wrapper"},kt={class:"logo-wrapper"},St=mt((()=>(0,r._)("h1",null,"Paint.io",-1)));function bt(t,n,o,e,c,s){const i=(0,r.up)("LogoIcon");return(0,r.wg)(),(0,r.iD)("div",xt,[(0,r._)("div",kt,[(0,r.Wm)(i),St])])}const _t={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1979.6263 1639.8857","enable-background":"new 0 0 1979.6263 1639.8857","xml:space":"preserve"},yt=(0,r.uE)('<g data-v-74d4d65f><path d="M835.8322,20.1846c22.1637,7.6774,45.3654,11.9992,68.7844,13.3994c25.0369,1.9558,50.3149,0.5553,75.2549,4.032\r\n\t\tc26.1713,3.887,49.7352,17.7211,69.726,34.5731c32.183,25.3263,44.0133,69.7501,38.5811,109.1281\r\n\t\tc-2.2694,12.9166-6.5427,28.1509-19.2422,34.4284c-11.444,5.0942-23.057-3.8632-27.7166-13.9307\r\n\t\tc-10.5264-18.7836-3.1145-42.1303-14.2446-60.6239c-3.3317-6.06-9.3434-9.8265-15.6448-12.0717\r\n\t\tc2.2693,10.3573,5.3356,21.5357,0.8691,31.7724c-3.4526,8.8124-13.4477,14.0033-22.6464,12.5064\r\n\t\tc-10.9612-1.3038-18.3972-10.8403-22.8879-20.1116c-7.5327-14.2685-8.4985-30.855-15.6207-45.2688\r\n\t\tc-8.3779-18.3247-21.9223-36.3355-42.082-42.2508C882.2601,55.4821,852.9742,44.4484,835.8322,20.1846z" data-v-74d4d65f></path><path d="M736.9412,68.5918c6.1566-17.1417,13.2546-34.3559,24.8194-48.6489c28.0546,41.4059,76.6793,61.3241,122.8896,74.9169\r\n\t\tc28.8512,29.6239,48.8903,68.6877,52.4151,110.2144c2.8971,28.9478-1.8349,57.9682-8.619,86.071\r\n\t\tc-57.7026-7.4846-113.3773,22.1876-153.6241,61.3964c-33.1249-34.2109-51.2808-80.6388-56.3266-127.525\r\n\t\tC712.9429,172.384,719.6064,118.5687,736.9412,68.5918z" data-v-74d4d65f></path><path d="M857.8751,351.4069c22.067-9.7298,45.7518-18.1075,70.2332-16.9245c0.0722,20.5943,0.2172,41.1887-0.0725,61.8069\r\n\t\tc-26.8715,7.8949-51.4976,21.9223-74.3132,37.9294c-11.9509,8.8362-24.6261,17.3106-33.7766,29.2375\r\n\t\tc-3.0904,3.7904-6.0358,7.8466-10.2368,10.5265c-4.3459-24.578-8.7399-49.1558-12.9649-73.758\r\n\t\tC813.8135,380.3789,833.8768,362.3922,857.8751,351.4069z" data-v-74d4d65f></path><path d="M1247.5969,357.2739c66.3701-15.621,135.0819-23.1779,203.2146-17.8903c94.0865,7.4119,185.3724,40.2229,264.8041,90.7547\r\n\t\tc54.733,34.3559,104.2993,77.6209,142.4698,129.9876c69.3396,93.7971,102.0056,212.4373,96.9597,328.4944\r\n\t\tc-2.4626,47.0312-10.2852,94.4487-29.0446,137.9309c-11.2509,26.7024-29.6964,49.7594-50.6526,69.5088\r\n\t\tc-26.5577,24.8433-60.1896,42.6368-96.3562,47.9244c-51.6669,7.9672-104.7579-7.3156-148.4091-34.9353\r\n\t\tc-20.1355-12.4823-36.6497-29.8895-57.0265-42.0095c-34.8148-22.3083-77.0173-33.7765-118.3265-28.6581\r\n\t\tc-37.3739,4.0559-72.623,18.8557-105.2649,36.9149c-35.5389,20.0149-65.1145,51.9807-79.0453,90.6342\r\n\t\tc-7.4606,20.715-10.092,44.3997-1.3038,65.1387c6.4464,15.7899,20.2562,27.8132,36.0941,33.7524\r\n\t\tc19.7977,7.8224,41.5509,7.5569,62.4589,5.9153c27.8856,0,56.3265,12.2888,73.9271,34.2593\r\n\t\tc13.7133,17.3108,16.6587,41.0919,11.299,62.1449c-10.3575,41.3575-39.6915,73.8788-67.0945,105.1201\r\n\t\tc-14.7998-11.9266-27.0887-26.5093-40.8986-39.4742c-99.2775-98.6013-198.7963-197.0096-296.7218-296.9148\r\n\t\tc-13.1338-105.434-24.1675-211.2783-36.5288-316.8571c-13.1097-115.2606-26.1713-230.5208-39.3297-345.757\r\n\t\tC1057.9751,421.3501,1150.42,380.4756,1247.5969,357.2739 M1231.1072,449.3324c-12.9169,4.394-22.6948,14.5582-30.7827,25.1572\r\n\t\tc-5.8911,7.7019-15.3071,12.9408-25.1333,12.6269c-14.0033-0.2172-26.3646-7.4602-38.9432-12.6028\r\n\t\tc-16.8762-6.8083-38.0741,3.4284-42.9027,21.0287c-3.6458,11.7578,1.183,23.7572,6.5669,34.1387\r\n\t\tc3.839,8.1121,9.6093,18.18,4.0803,26.8958c-5.8669,7.0499-13.1821,13.1099-17.1901,21.5843\r\n\t\tc-6.0599,10.3815-6.6877,25.2538,2.9454,33.7765c11.13,9.2227,26.8958,13.2064,34.7906,26.1472\r\n\t\tc3.3076,5.915-1.9799,11.6852-3.4043,17.3831c-5.5769,20.2321,5.3597,43.8203,24.6503,52.3671\r\n\t\tc14.6552,6.6636,31.6519,4.7078,46.476-0.4827c10.285-3.6215,20.4012-10.1162,24.9885-20.4255\r\n\t\tc5.9875-12.3372,3.0419-26.5577,6.4703-39.4501c1.5693-6.4948,7.4121-11.1059,13.9307-11.927\r\n\t\tc21.1738-3.4765,43.9166-5.4803,62.0483-18.1313c11.3475-7.6777,17.4316-21.8015,15.9106-35.3217\r\n\t\tc-1.328-12.2892-4.4906-26.0024-15.1379-33.6077c-9.271-7.3155-21.8982-7.7499-31.3864-14.4618\r\n\t\tc-6.8807-6.5189-2.0763-16.5865,1.3036-23.6364c7.9432-14.8482,7.0258-33.897-2.4866-47.7794\r\n\t\tC1260.2964,450.7568,1244.6274,444.1657,1231.1072,449.3324 M1496.5389,449.3563c-11.637,3.9354-21.9221,13.9066-23.2501,26.5338\r\n\t\tc-1.2555,9.464,6.7119,17.2139,5.6979,26.7024c0.0483,8.9329-8.4502,14.5344-16.2726,16.4176\r\n\t\tc-11.8545,2.7524-22.7671,11.1058-26.0505,23.2017c-5.215,16.852,5.77,35.2492,21.5116,41.7919\r\n\t\tc13.786,5.8911,29.7689,11.1059,38.0499,24.6506c3.694,6.0358,1.0624,13.4477-3.9838,17.7695\r\n\t\tc-15.5966,15.7654-22.236,40.8262-13.1096,61.5655c8.8124,20.1113,26.5576,37.253,48.2383,42.4922\r\n\t\tc29.0929,7.2188,61.2759-10.5023,72.092-38.1708c4.2733-11.6128,8.3534-24.0709,17.8903-32.5452\r\n\t\tc8.3293-7.6291,20.1597-9.2227,31.0242-9.0779c24.2642,0.7003,47.9728-11.0576,63.8109-29.1167\r\n\t\tc10.454-11.9992,17.6487-28.5856,13.4961-44.5927c-4.0079-16.3934-17.6731-28.1512-31.7969-36.0944\r\n\t\tc-13.1339-7.3878-28.6824-6.5911-43.1925-6.567c-5.3839-0.338-12.4097,0.1931-15.3068-5.3356\r\n\t\tc-1.835-7.8949,2.511-15.2346,5.2875-22.3084c5.4081-12.7961,6.1322-28.6584-1.666-40.6334\r\n\t\tc-4.7079-7.243-13.6169-10.937-22.067-9.9954c-13.0856,1.1588-24.6019,8.233-35.2009,15.476\r\n\t\tc-10.7681,7.3155-25.5438,8.0396-36.9395,1.7866c-8.619-4.0801-14.4135-11.8303-20.7148-18.5902\r\n\t\tC1517.1333,447.3767,1505.7135,446.0006,1496.5389,449.3563 M1714.0703,736.8553c-12.5544,3.4282-19.3868,16.5623-20.5219,28.7548\r\n\t\tc-2.2693,14.8962,4.2251,31.4586-4.5389,45.0754c-3.8628,6.8085-12.2888,6.9049-19.073,7.7982\r\n\t\tc-13.2308,1.7144-25.4471,11.2992-28.8514,24.433c-5.3597,18.0112,5.2634,38.0258,21.7773,46.0173\r\n\t\tc17.1901,7.0016,34.356,22.767,32.1588,42.9269c-3.5249,16.9484,3.3318,34.8387,15.6693,46.5965\r\n\t\tc14.1959,13.9791,36.6978,17.5764,55.1917,11.082c21.1976-8.8365,30.1549-33.6801,29.7927-55.1919\r\n\t\tc0.3622-9.4157-6.8807-16.8762-6.8566-26.1955c-0.7003-9.2951,2.9213-19.9424,11.782-24.2158\r\n\t\tc9.0537-4.732,19.4835-1.4969,29.1892-2.9454c13.6652-1.5935,25.9781-10.1884,33.0762-21.8737\r\n\t\tc11.0095-18.3492,10.7198-44.2549-4.0559-60.4792c-9.1504-10.3334-23.395-14.0996-36.698-14.293\r\n\t\tc-14.9204-0.7966-31.1688,2.2697-44.6893-5.6736c-11.106-6.1322-14.0997-19.5078-22.8396-27.9095\r\n\t\tC1744.322,740.1871,1728.8944,732.8475,1714.0703,736.8553 M1307.0137,852.019c-30.2274,6.9533-59.2717,21.3187-81.3387,43.3133\r\n\t\tc-18.2041,19.556-34.1145,41.4297-46.0657,65.3801c-16.9725,33.9937-25.1571,73.4925-17.2142,111.1077\r\n\t\tc4.8046,19.6044,17.4556,39.2087,37.4222,45.7756c9.2712,3.5251,21.6084,0.845,25.9299-8.8605\r\n\t\tc16.8761-31.6038,38.5813-61.3966,67.5771-82.9084c29.6481-22.4047,65.4771-34.7181,101.4261-42.6368\r\n\t\tc17.3109-3.2113,32.7144-15.2346,39.8607-31.3864c7.8707-17.0212,6.0599-37.5914-3.1143-53.7431\r\n\t\tc-9.9955-17.8903-26.8474-31.145-45.1967-39.716C1361.626,846.9973,1333.2092,846.2245,1307.0137,852.019z" data-v-74d4d65f></path><path d="M295.1664,494.0698c48.8177-44.6169,115.4053-66.708,181.0509-66.1286c4.2976,71.9473,14.2688,145.1739,45.0274,211.1095\r\n\t\tc-28.2237,28.3684-42.6855,66.5147-58.2096,102.585c-6.4464,15.6932-12.12,31.6761-17.0453,47.9245\r\n\t\tc-47.3934-14.486-95.3662-28.4651-144.8359-33.366c-32.1346-3.4526-64.7043-2.4144-96.5492,3.1626\r\n\t\tC188.7427,663.4354,222.7847,559.5948,295.1664,494.0698z" data-v-74d4d65f></path><path d="M823.2295,531.637c17.2625-45.3896,58.7648-79.0211,104.9752-92.0586c26.2679,232.1383,52.4876,464.2763,78.7075,696.4387\r\n\t\tc0.9655,5.2151-0.1933,11.782,4.5629,15.5243c102.73,104.9027,205.1703,210.0953,308.0933,314.8292\r\n\t\tc20.3528,20.7148,42.2509,41.0675,55.2397,67.5046c6.8811,13.6411,10.2371,29.9379,5.36,44.8099\r\n\t\tc-5.3839,15.307-17.4316,27.6926-31.4104,35.5392c-15.1621,8.4019-33.9215,6.8566-49.2526-0.1692\r\n\t\tc-25.9058-11.7095-46.1862-32.2555-65.7905-52.222c-67.022-66.6838-133.8748-133.4645-201.0175-200.0033\r\n\t\tc5.0458,50.7493,11.613,101.3295,16.8036,152.0789c1.4489,23.2742,2.1246,47.345-5.1425,69.8468\r\n\t\tc-4.0077,12.7233-12.6992,24.5536-25.3022,29.7686c-16.6589,6.712-37.1324,5.4323-51.5701-5.7461\r\n\t\tc-13.8824-10.623-21.9221-26.8716-27.5234-42.9994c-10.5023-30.2997-12.1439-62.5793-15.8137-94.1591\r\n\t\tc-8.6193-80.9282-17.6248-161.8325-26.0024-242.7853c-110.6488-111.156-222.2154-221.4667-332.0676-333.4194\r\n\t\tc13.5927-47.6109,30.7103-95.342,60.5034-135.4202c82.9081,84.0189,165.5266,168.3517,248.1212,252.7084\r\n\t\tC857.6337,851.6809,839.8884,691.683,823.2295,531.637z" data-v-74d4d65f></path><path d="M42.6755,753.0796c25.278-56.7126,68.1566-103.6955,115.5742-142.8804c-11.275,28.4893-13.7135,59.5134-15.7898,89.8134\r\n\t\tc-2.1488,50.6285-0.0242,102.8022,17.5523,150.8475c6.8808,20.4735,21.8254,36.5531,31.7966,55.4089\r\n\t\tc7.9191,14.7757,14.8965,30.7106,15.7415,47.7073c0.5794,10.744-2.9937,22.7673-12.5061,28.8514\r\n\t\tc-7.9916,5.3356-18.325,3.4282-26.7027,0.2172c-16.8278-6.6394-28.9237-22.1395-33.9212-39.1846\r\n\t\tc-4.3217-13.11-4.3217-27.0166-4.3217-40.6332c-0.7003-18.1558-4.2734-36.6497-13.2788-52.6084\r\n\t\tc-2.8249-5.2392-6.9775-9.609-11.975-12.7477c-7.1225,18.035-0.4589,37.2291,0.9175,55.6747\r\n\t\tc0.7,9.2709,1.5932,20.7148-6.1325,27.499c-10.3334,7.0016-24.1192,4.1529-34.3559-1.5691\r\n\t\tc-18.6147-10.6231-30.3-30.2033-36.2633-50.2666C17.9524,830.5313,26.7648,789.0774,42.6755,753.0796z" data-v-74d4d65f></path><path d="M763.8611,638.8334c4.2009-4.9736,8.0396-10.4784,13.5927-14.0516c10.0917,85.0811,20.1354,170.1622,30.01,255.2675\r\n\t\tc-34.6215-34.8145-69.2188-69.6293-103.9369-104.3475c-5.2393-5.7461-11.782-10.5748-15.9587-17.1176\r\n\t\tC709.78,716.7921,733.8508,675.6037,763.8611,638.8334z" data-v-74d4d65f></path><path d="M504.1271,748.7337c9.464-25.616,29.0684-45.2446,47.2001-64.8973c15.0413,15.1379,30.4447,29.9136,45.3412,45.2208\r\n\t\tc-30.2516,40.0295-44.8824,88.8231-60.2858,135.8785c-15.3313-15.0413-30.3725-30.3239-45.5585-45.4618\r\n\t\tC491.7416,795.4271,496.063,771.4043,504.1271,748.7337z" data-v-74d4d65f></path><path d="M608.7885,998.907c81.4354,80.2043,163.402,159.9258,244.5718,240.3954c5.6978,42.13,9.0779,84.7189,13.955,127.0422\r\n\t\tc5.7703,53.9845,11.4197,107.993,17.2383,161.9775c-71.7539-29.1409-136.2651-74.6752-190.5876-129.6012\r\n\t\tc-55.7469-57.7993-84.9361-136.7238-93.2174-215.6244C593.9886,1121.7483,598.0445,1059.5553,608.7885,998.907 M751.3064,1237.9021\r\n\t\tc-11.7578,2.6558-17.1659,16.3207-29.672,17.3832c-11.9028,4.3698-22.2362-7.895-33.9698-3.7183\r\n\t\tc-12.6269,4.2976-17.6003,22.1155-9.4398,32.5214c6.6394,9.1985,21.4393,3.4281,27.7407,13.158\r\n\t\tc7.1222,14.3169-10.6714,25.8816-7.6052,40.2471c3.1868,16.2242,22.1154,27.9821,37.9774,22.2843\r\n\t\tc7.0016-2.3661,11.4198-9.7299,19.025-10.6232c7.1705,2.1971,13.5203,7.2672,21.3185,7.4119\r\n\t\tc15.621,0.9658,28.0065-17.1176,22.3568-31.4827c-2.4143-7.3881-11.8783-10.3577-12.313-18.687\r\n\t\tc-0.6519-12.7235,10.2851-23.395,7.6536-36.4083C790.6602,1251.0602,771.8282,1232.156,751.3064,1237.9021z" data-v-74d4d65f></path><path d="M1094.1417,1481.7257c24.1195,23.3948,48.1661,46.8379,72.1887,70.3054c3.4526,2.2451,0,5.0217-2.4626,5.8666\r\n\t\tc-21.1493,11.782-45.8483,15.3311-69.7499,13.7378C1094.2626,1541.6735,1094.1901,1511.6874,1094.1417,1481.7257z" data-v-74d4d65f></path></g>',1),It=[yt];function $t(t,n,o,e,c,s){return(0,r.wg)(),(0,r.iD)("svg",_t,It)}var zt={name:"LogoIcon"};const Wt=(0,u.Z)(zt,[["render",$t],["__scopeId","data-v-74d4d65f"]]);var Bt=Wt,Tt={name:"HeaderComponent",components:{LogoIcon:Bt}};const Dt=(0,u.Z)(Tt,[["render",bt],["__scopeId","data-v-59e23d60"]]);var Mt=Dt,Ot={hostAddress:"io-socket-draw.herokuapp.com",localhost:"localhost:5001",heroku:"io-socket-draw.herokuapp.com"},Lt={name:"App",components:{MainCanvas:p,DrawingSettings:at,OverlayWrapper:Ct,HeaderComponent:Mt},data:function(){return{connection:null,drawSettings:{}}},created:function(){console.log(`Starting connection to WebSocket Server ws://${Ot.hostAddress}`),this.connection=new WebSocket(`ws://${Ot.hostAddress}`),this.connection.component=this,this.connection.onmessage=function(t){const n=JSON.parse(t.data);try{this.component[n.event](n.data)}catch(o){console.log(`No handler for "${n.event}"`),console.log(o)}},this.connection.onopen=function(t){console.log(t),console.log("Successfully connected to the websocket server...")}},methods:{onCanvasClick(t){this.connection.send(JSON.stringify({event:"click",data:{pos:t}}))},onSettingsChange(t){this.drawSettings=t},onCanvasDraw(t){this.connection.send(JSON.stringify({event:"draw",data:t}))},usersChanged({userCount:t}){this.$refs.userCountText.innerText=t},draw(t){this.$refs.canvas.drawForeign(t)},imageInit(){const t=new Image;t.src=`http://${Ot.hostAddress}/canvas.png`,t.onload=()=>{this.$refs.canvas.drawInitialImage(t)}}}};const Zt=(0,u.Z)(Lt,[["render",i]]);var Et=Zt;(0,e.ri)(Et).mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,o),c.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,c){if(!e){var s=1/0;for(d=0;d<t.length;d++){e=t[d][0],r=t[d][1],c=t[d][2];for(var i=!0,a=0;a<e.length;a++)(!1&c||s>=c)&&Object.keys(o.O).every((function(t){return o.O[t](e[a])}))?e.splice(a--,1):(i=!1,c<s&&(s=c));if(i){t.splice(d--,1);var l=r();void 0!==l&&(n=l)}}return n}c=c||0;for(var d=t.length;d>0&&t[d-1][2]>c;d--)t[d]=t[d-1];t[d]=[e,r,c]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,c,s=e[0],i=e[1],a=e[2],l=0;if(s.some((function(n){return 0!==t[n]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(a)var d=a(o)}for(n&&n(e);l<s.length;l++)c=s[l],o.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return o.O(d)},e=self["webpackChunkclient"]=self["webpackChunkclient"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(6453)}));e=o.O(e)})();
//# sourceMappingURL=app.e8b90941.js.map