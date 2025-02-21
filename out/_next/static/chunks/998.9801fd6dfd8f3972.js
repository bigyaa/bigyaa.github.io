"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{2998:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var i=n(4848),a=n(6540),s=n(1657),r=n(6297);let l=[{id:1,company:"Freelance",role:"Full Stack Engineer",date:"2017 - 2022",location:"Remote",summary:"Developed full-stack solutions, ensuring maintainable code and on-time releases for 10+ clients.",skills:["JavaScript","TypeScript","React","Node.js","Redux","TailwindCSS","HTML","CSS","Python","AWS","Docker","GitHub Actions","PostgreSQL","MongoDB","GraphQL","REST","Git","Jest","Enzyme"],bullets:["Consulted for 10+ clients, architecting full-stack solutions.","Demonstrated 80% client retention by delivering maintainable code, clear documentation, and on-schedule releases.","Led small engineering teams (1–3 devs) on short-term contracts, handling project scoping, task delegation, and code reviews."]},{id:2,company:"Citytech",role:"Software Engineer, Full Stack",date:"Jun 2018 - Aug 2020",location:"Kathmandu, Nepal",summary:"Developed critical components for a fintech platform handling $10M+ in monthly remittances while improving UI performance by 30%.",skills:["JavaScript","React","Redux","Node.js","Ant Design","Bootstrap","PostgreSQL","NoSQL","REST","Docker","GitHub Actions","Jest","Enzyme","Git","Bitbucket","Jira","Postman"],bullets:["Developed key features for a fintech platform managing $10M+ in monthly remittances, ensuring secure transactions and system reliability.","Enhanced UI performance by 30% through optimized state management and React/Redux improvements.","Built automated Jest/Enzyme testing framework, reducing production bugs by 40% and increasing software reliability.","Collaborated across frontend, backend, and DevOps teams to drive system scalability and performance improvements.","Led end-to-end development of multiple projects, managing both product requirements and technical execution to align with business goals.","Acted as the primary point of contact for stakeholders, translating complex business needs into scalable technical solutions."]},{id:3,company:"Fusemachines Inc.",role:"Software Engineer, Full Stack",date:"Aug 2020 - Aug 2022",location:"New York, USA",summary:"Redesigned a legacy codebase into a scalable microservices architecture, reducing feature release cycles by 40% and improving system efficiency.",skills:["JavaScript","TypeScript","React","Node.js","Redux","SASS","TailwindCSS","Python","MongoDB","REST","GraphQL","PostgreSQL","D3.js","AWS","Docker","GitHub Actions","Jest","Enzyme","Git","Bitbucket","Jira"],bullets:["Owned full SDLC execution for an enterprise education platform, eliminating development bottlenecks by 25% and ensuring on-time project delivery.","Optimized GraphQL and RESTful APIs, reducing API response times by 30%, improving backend efficiency and user interaction speeds.","Automated CI/CD workflows using Docker, GitHub Actions, and Jenkins, decreasing deployment overhead by 45%, enabling rapid iteration in a competitive market.","Redesigned a legacy codebase into a scalable microservices architecture, reducing feature release cycles by 40% and improving deployment efficiency.","Provided mentorship and technical leadership, supporting engineering team growth through onboarding, code reviews, and agile implementations."]},{id:4,company:"International Storytelling Center",role:"Full-Stack Developer (Volunteer)",date:"Aug 2022 - May 2024",location:"Tennessee, USA",summary:"Architected an AI-driven archival platform using React, Python, and Whisper, boosting research accessibility by 200%.",skills:["React","Python","TensorFlow","Whisper","NLP","scikit-learn","Docker","Plotly","Neural Network","NLP"],bullets:["Engineered LLM-driven solutions for text classification with 95% transcription accuracy.","Built real-time analytics dashboards with D3.js for immediate data insights."]},{id:5,company:"Fiserv",role:"Full-Stack Developer",date:"Sept 2023 - Present",location:"NY, USA",summary:"Designed and delivered scalable financial applications using AWS, React.js, Node.js, and TypeScript, ensuring seamless alignment with client needs and business goals.",skills:["React","Redux","Node.js","TypeScript","TailwindCSS","HTML","CSS","Python","AWS","Docker","GitHub Actions","PostgreSQL","MongoDB","GraphQL","REST","Git","Jest","Enzyme","Jenkins","Kubernetes","Snowflake"],bullets:["Designed and delivered scalable financial applications with AWS, React.js, Node.js, and TypeScript, aligning seamlessly with client needs and business goals.","Led the full software development lifecycle, from requirements to deployment, including unit testing, API integration, and post-launch maintenance for reliable, high-performance systems.","Built secure, high-performance RESTful APIs and microservices with Node.js/Express, implementing JWT authentication, Redis caching, and database optimizations for enhanced scalability.","Developed responsive, accessible UIs with React.js, Redux, and TailwindCSS, optimizing frontend performance and delivering seamless user experiences.","Leveraged AWS (S3, Lambda, DynamoDB) to build fault-tolerant applications and collaborated with data engineers to optimize Snowflake and PostgreSQL queries for faster financial insights.","Automated CI/CD pipelines using Git, Jenkins, Docker, and Kubernetes, reducing release cycles by 30% and accelerating feature delivery for customer-facing applications.","Drove Agile development and cross-functional collaboration, leading sprint planning and backlog refinement while swiftly resolving production issues via AWS CloudWatch to minimize service disruptions for clients."]}],o=(e,t,n)=>{if(!e)return!1;let i=e.match(/\b\d{4}\b/g);if(!i||0===i.length)return!1;let a=parseInt(i[0],10),s=i.length>1?parseInt(i[1],10):a;return a<=n&&s>=t},c=a.lazy(()=>n.e(303).then(n.bind(n,5303))),d=a.lazy(()=>n.e(755).then(n.bind(n,755))),u={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.15}}},m=()=>{let[e,t]=(0,a.useState)(""),[n,m]=(0,a.useState)([2015,2030]),[p,h]=(0,a.useState)([]),[g,f]=(0,a.useState)("desc"),y=(0,a.useMemo)(()=>{let e=new Set;return l.forEach(t=>t.skills?.forEach(t=>e.add(t))),Array.from(e).sort()},[]),b=e=>{h(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},S=(0,a.useMemo)(()=>l.filter(t=>{let i=o(t.date,n[0],n[1]),a=e.toLowerCase();return(""===e||t.role.toLowerCase().includes(a)||t.company.toLowerCase().includes(a)||t.location.toLowerCase().includes(a)||t.summary?.toLowerCase().includes(a)||t.skills?.some(e=>e.toLowerCase().includes(a))||t.bullets?.some(e=>e.toLowerCase().includes(a)))&&i&&(0===p.length||p.every(e=>t.skills?.includes(e)))}).sort((e,t)=>{let n=parseInt(e.date.match(/\b\d{4}\b/)[0],10),i=parseInt(t.date.match(/\b\d{4}\b/)[0],10);return"asc"===g?n-i:i-n}),[e,n,p,g]);return(0,i.jsxs)("section",{className:"relative py-16 md:py-20 text-center min-h-screen bg-gradient-to-br from-pink-50 via-lavender-100 to-white-100",children:[(0,i.jsx)(s.P.h2,{className:"text-4xl font-bold mb-6 text-lavender-700",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Experience"}),(0,i.jsx)("div",{className:"max-w-6xl mx-auto px-4 md:px-6",children:(0,i.jsx)(d,{searchQuery:e,setSearchQuery:t,yearRange:n,setYearRange:m,allSkills:y,selectedSkills:p,toggleSkill:b,sortOrder:g,setSortOrder:f,setSelectedSkills:h})}),(0,i.jsx)("div",{className:"text-gray-600 text-lg mt-3 mb-6 md:mb-8",children:S.length>0?(0,i.jsxs)("p",{children:[S.length," matching experience",S.length>1?"s":""," found"]}):(0,i.jsx)("p",{children:"No matching experiences found."})}),(0,i.jsx)(s.P.div,{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-0 max-w-6xl mx-auto",variants:u,initial:"hidden",animate:"show",children:(0,i.jsx)(r.N,{children:S.length>0?S.map(e=>(0,i.jsx)(c,{item:e,selectedSkills:p,toggleSkill:b},e.id)):(0,i.jsx)(s.P.div,{className:"w-full text-gray-500 mt-8 text-center",variants:u,children:"No matching experiences found."})})})]})}},6297:(e,t,n)=>{n.d(t,{N:()=>y});var i=n(4848),a=n(6540),s=n(9473),r=n(8601),l=n(6719),o=n(5446);class c extends a.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d({children:e,isPresent:t}){let n=(0,a.useId)(),s=(0,a.useRef)(null),r=(0,a.useRef)({width:0,height:0,top:0,left:0}),{nonce:l}=(0,a.useContext)(o.Q);return(0,a.useInsertionEffect)(()=>{let{width:e,height:i,top:a,left:o}=r.current;if(t||!s.current||!e||!i)return;s.current.dataset.motionPopId=n;let c=document.createElement("style");return l&&(c.nonce=l),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),(0,i.jsx)(c,{isPresent:t,childRef:s,sizeRef:r,children:a.cloneElement(e,{ref:s})})}let u=({children:e,initial:t,isPresent:n,onExitComplete:s,custom:o,presenceAffectsLayout:c,mode:u})=>{let p=(0,r.M)(m),h=(0,a.useId)(),g=(0,a.useCallback)(e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;s&&s()},[p,s]),f=(0,a.useMemo)(()=>({id:h,initial:t,isPresent:n,custom:o,onExitComplete:g,register:e=>(p.set(e,!1),()=>p.delete(e))}),c?[Math.random(),g]:[n,g]);return(0,a.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[n]),a.useEffect(()=>{n||p.size||!s||s()},[n]),"popLayout"===u&&(e=(0,i.jsx)(d,{isPresent:n,children:e})),(0,i.jsx)(l.t.Provider,{value:f,children:e})};function m(){return new Map}var p=n(9120);let h=e=>e.key||"";function g(e){let t=[];return a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&t.push(e)}),t}var f=n(5128);let y=({children:e,custom:t,initial:n=!0,onExitComplete:l,presenceAffectsLayout:o=!0,mode:c="sync",propagate:d=!1})=>{let[m,y]=(0,p.xQ)(d),b=(0,a.useMemo)(()=>g(e),[e]),S=d&&!m?[]:b.map(h),v=(0,a.useRef)(!0),x=(0,a.useRef)(b),k=(0,r.M)(()=>new Map),[w,R]=(0,a.useState)(b),[C,A]=(0,a.useState)(b);(0,f.E)(()=>{v.current=!1,x.current=b;for(let e=0;e<C.length;e++){let t=h(C[e]);S.includes(t)?k.delete(t):!0!==k.get(t)&&k.set(t,!1)}},[C,S.length,S.join("-")]);let E=[];if(b!==w){let e=[...b];for(let t=0;t<C.length;t++){let n=C[t],i=h(n);S.includes(i)||(e.splice(t,0,n),E.push(n))}"wait"===c&&E.length&&(e=E),A(g(e)),R(b);return}let{forceRender:L}=(0,a.useContext)(s.L);return(0,i.jsx)(i.Fragment,{children:C.map(e=>{let a=h(e),s=(!d||!!m)&&(b===C||S.includes(a));return(0,i.jsx)(u,{isPresent:s,initial:(!v.current||!!n)&&void 0,custom:s?void 0:t,presenceAffectsLayout:o,mode:c,onExitComplete:s?void 0:()=>{if(!k.has(a))return;k.set(a,!0);let e=!0;k.forEach(t=>{t||(e=!1)}),e&&(null==L||L(),A(x.current),d&&(null==y||y()),l&&l())},children:e},a)})})}}}]);