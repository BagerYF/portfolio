import{r as o,j as a}from"./index-46bfa3c3.js";import{s as r}from"./styles-bc12718e.js";import{m as i}from"./motion-9a25dc32.js";const h=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),c=(t,e,s,n)=>({hidden:{x:t==="left"?100:t==="right"?-100:0,y:t==="up"?100:t==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:e,delay:s,duration:n,ease:"easeOut"}}}),m=(t,e,s,n)=>({hidden:{x:t==="left"?"-100%":t==="right"?"100%":0,y:t==="up"||t==="down"?"100%":0},show:{x:0,y:0,transition:{type:e,delay:s,duration:n,ease:"easeOut"}}}),d=(t,e)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:e||0}}}),p=(t,e)=>function(){return o.useEffect(()=>{if(window.location.hash===`#${e}`){const n=document.getElementById(e);n&&setTimeout(()=>{n.scrollIntoView()},0)}},[]),a.jsx(i.section,{id:e,variants:d(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${r.padding} max-w-7xl mx-auto relative z-0`,children:a.jsx(t,{})})},w=p;export{w as S,c as f,m as s,h as t};
