"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{755:(e,r,a)=>{a.r(r),a.d(r,{default:()=>t});var s=a(4848);a(6540);var l=a(949);let t=e=>{let{searchQuery:r,setSearchQuery:a,yearRange:t,setYearRange:o,allSkills:n,selectedSkills:i,toggleSkill:d,sortOrder:c,setSortOrder:b,setSelectedSkills:u}=e;return(0,s.jsxs)(l.P.div,{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-6xl mx-auto mb-8",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center gap-4",children:[(0,s.jsx)("label",{className:"sr-only",htmlFor:"search",children:"Search by role, company, or skill"}),(0,s.jsx)("input",{id:"search",type:"text",placeholder:"Search by role, company, skill...",value:r,onChange:e=>a(e.target.value.toLowerCase()),className:"flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-800  focus:ring-2 focus:ring-pink-400 focus:outline-none bg-white shadow-sm","aria-label":"Search experiences by role, company, or skill"}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("label",{htmlFor:"year-start",className:"text-sm font-semibold text-gray-700",children:"Year:"}),(0,s.jsx)("input",{id:"year-start",type:"number",className:"w-20 px-2 py-1 rounded-lg border border-gray-300 text-center  text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none",value:t[0],onChange:e=>{o([parseInt(e.target.value)||2015,t[1]])},"aria-label":"Start year filter"}),(0,s.jsx)("span",{className:"text-gray-600",children:"–"}),(0,s.jsx)("input",{id:"year-end",type:"number",className:"w-20 px-2 py-1 rounded-lg border border-gray-300 text-center  text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none",value:t[1],onChange:e=>{let r=parseInt(e.target.value)||2030;o([t[0],r])},"aria-label":"End year filter"})]})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("h3",{className:"text-md font-semibold text-gray-700 mb-2",children:"Filter by Skills:"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2","aria-label":"Skill filter options",role:"group","aria-live":"polite",children:n.map(e=>{let r=i.includes(e);return(0,s.jsx)(l.P.button,{whileTap:{scale:.95},className:`px-3 py-1 rounded-full border text-xs font-semibold uppercase 
                                transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 ${r?"bg-pink-300 text-lavender-900 border-lavender-300 shadow-sm hover:shadow-md":"bg-white text-lavender-700 border-lavender-200 hover:bg-pink-100 hover:shadow"}`,onClick:()=>d(e),"aria-pressed":r,role:"button","aria-label":`Filter by ${e}`,children:e},e)})})]}),(0,s.jsxs)("div",{className:"mt-4 flex flex-col md:flex-row justify-between items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",role:"group","aria-label":"Sort options",children:[(0,s.jsx)("label",{htmlFor:"sort-order",className:"text-sm font-semibold text-gray-700",children:"Sort:"}),(0,s.jsx)("button",{id:"sort-order",onClick:()=>b("asc"),className:`px-3 py-1 rounded-l-lg border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-pink-400 ${"asc"===c?"bg-pink-300 text-lavender-900 border-lavender-300 shadow-sm hover:shadow-md":"bg-white text-lavender-700 border-lavender-200 hover:bg-pink-100 hover:shadow"}`,"aria-pressed":"asc"===c,"aria-label":"Sort by ascending date",children:"Asc"}),(0,s.jsx)("button",{onClick:()=>b("desc"),className:`px-3 py-1 rounded-r-lg border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-pink-400 ${"desc"===c?"bg-pink-300 text-lavender-900 border-lavender-300 shadow-sm hover:shadow-md":"bg-white text-lavender-700 border-lavender-200 hover:bg-pink-100 hover:shadow"}`,"aria-pressed":"desc"===c,"aria-label":"Sort by descending date",children:"Desc"})]}),(0,s.jsx)(l.P.button,{whileHover:{scale:1.05},className:"px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold border border-gray-300  hover:bg-gray-300 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400",onClick:()=>{a(""),o([2015,2030]),u([])},"aria-label":"Reset all filters",children:"Reset Filters"})]})]})}}}]);