"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{1771:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var o=n(4848),l=n(6540);let i=e=>{let{canvasRef:t,currentColor:n,brushSize:i,isEraser:s}=e,[u,r]=(0,l.useState)(!1),[a,c]=(0,l.useState)(0),[h,d]=(0,l.useState)(0);(0,l.useEffect)(()=>{let e=t.current;e.width=window.innerWidth,e.height=window.innerHeight},[t]);let f=()=>{r(!1)};return(0,o.jsx)("canvas",{ref:t,className:"absolute top-0 left-0 w-full h-full z-10",onMouseDown:e=>{r(!0),c(e.clientX),d(e.clientY)},onMouseMove:e=>{if(!u)return;let o=t.current.getContext("2d");o.beginPath(),o.lineWidth=i,o.lineCap="round",s?o.globalCompositeOperation="destination-out":(o.globalCompositeOperation="source-over",o.strokeStyle=n),o.moveTo(a,h),o.lineTo(e.clientX,e.clientY),o.stroke(),c(e.clientX),d(e.clientY)},onMouseUp:f,onMouseLeave:f})}}}]);