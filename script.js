// ---------- DATA (edit here) ----------
const logbook=[
 {n:"Single engine",a:185,s:10,d:"Actual 185:00, simulator 10:00. Haryana Institute of Civil Aviation and Sha-Shib Flying Academy."},
 {n:"Multi engine",a:15,s:10,d:"Actual 15:00, simulator 10:00. Skynex Aviation, Amritsar Flying Club and Wings Aviation Pvt. Ltd."},
 {n:"Instrument flying",a:23+20/60,s:0,d:"Actual 23:20."},
 {n:"A320 type rating",a:0,s:64,d:"Type rating 64:00 at Pier Seven Aviation FZC: Pilot Flying 32:00 and Pilot Monitoring 32:00."}
];
const licences=[
 {n:"Commercial Pilot Licence",id:"CPL 24769",to:"2036-01-15"},
 {n:"Instrument Rating",id:"No. 23822",to:"2027-04-27"},
 {n:"Class 1 Medical",id:"File 1-905/2020-L-II",to:"2027-02-16",valid:true},
 {n:"English Proficiency",id:"Level 4",to:"2028-08-01"},
 {n:"RTR(A)",id:"No. 32371",to:"2082-03-20"},
 {n:"FRTOL",id:"No. 32838",to:"2082-03-20"}
];
const gnd='<path class="d" d="M8 126H312" stroke-dasharray="3 5"/>';
const aircraft=[
 {n:"Cessna 152",t:"Two-seat single-engine piston trainer.",l:["Single engine","Haryana Institute of Civil Aviation"],
  svg:`<path d="M44 70L146 62L160 44H206L229 62L262 64Q272 68 272 78V88Q270 94 262 95L150 97L44 77Z"/><path d="M46 70L33 30H52L76 66"/><path d="M38 67H84V71H42"/><path d="M146 38L222 35V41L146 43Z"/><path d="M198 91L180 43"/><path d="M272 72L282 79L272 86"/><path d="M279 48Q283 79 279 110"/><path d="M170 96L162 112"/><circle cx="160" cy="117" r="8"/><path d="M244 94L246 110"/><circle cx="246" cy="117" r="7"/><path class="d" d="M164 48H203L217 61H158ZM182 48V61M158 61V90H196V61M229 62V92M243 65Q250 78 243 93M42 67L36 40"/>${gnd}`},
 {n:"Cessna 172",t:"Four-seat single-engine piston aircraft.",l:["Single engine","Haryana Institute of Civil Aviation","Sha-Shib Flying Academy"],
  svg:`<path d="M40 72L142 62L158 42H212L236 62L266 64Q276 69 276 79V90Q274 96 266 97L146 99L40 79Z"/><path d="M44 72L26 24H48L82 66"/><path d="M36 68H88V72H40"/><path d="M140 37L226 33V40L140 42Z"/><path d="M206 92L186 42"/><path d="M276 74L286 81L276 88"/><path d="M283 50Q287 81 283 112"/><path d="M174 98L164 112"/><circle cx="162" cy="118" r="8"/><path d="M250 96L252 111"/><circle cx="252" cy="118" r="7"/><path class="d" d="M160 47H208L224 61H150ZM176 47V61M192 47V61M150 61V92H200V61M236 62V94M250 66Q257 80 250 95M154 112Q162 130 172 112"/>${gnd}`},
 {n:"Tecnam P2006T",t:"Twin-engine piston aircraft.",l:["Multi engine (ME)","Skynex Aviation","Amritsar Flying Club","Wings Aviation Pvt. Ltd."],
  svg:`<path d="M36 66L150 58L168 42H208L232 58L262 64Q284 70 286 78Q284 88 262 91L150 94L36 74Z"/><path d="M40 66L26 22H44L74 62"/><path d="M30 62H86V66H34"/><path d="M150 36L228 33V39L150 41Z"/><path class="f" d="M196 40H246Q254 41 254 47Q254 53 246 54H196Z"/><path d="M254 42L264 47L254 52"/><path d="M261 18Q265 47 261 76"/><path d="M190 94L186 110"/><circle cx="186" cy="116" r="7"/><path d="M262 91L264 108"/><circle cx="264" cy="115" r="6"/><path class="d" d="M164 47H196L190 58H156ZM150 60V90H190M210 40V54M36 66L30 40"/>${gnd}`},
 {n:"Airbus A320",t:"Twin-engine narrow-body jet airliner.",l:["Type rated","Pilot Flying 32:00, Pilot Monitoring 32:00","Pier Seven Aviation FZC"],
  svg:`<g transform="translate(-16 -2.4) scale(.3)" stroke-width="5.6">
<path d="M150 270L330 262L880 250C980 250 1050 270 1090 305C1060 330 1000 338 900 338L330 338C240 335 190 305 150 270Z"/>
<path d="M178 266L118 130L178 130L300 262"/>
<path d="M235 285L150 258L180 254L300 276"/>
<path d="M580 322L420 378L465 382L720 332Z"/>
<path d="M510 360H605a16 19 0 0 1 0 38H510a12 19 0 0 1 0-38Z"/>
<path d="M545 360L560 340M585 360L592 336"/>
<path d="M985 268L1040 277L1062 294L995 289Z"/><path d="M1018 272L1022 291"/>
<rect x="335" y="270" width="28" height="56" rx="6"/><rect x="880" y="268" width="28" height="58" rx="6"/>
<path d="M960 338V396"/><circle cx="960" cy="410" r="15"/>
<path d="M700 334V390"/><circle cx="700" cy="406" r="18"/>
<line x1="405" y1="290" x2="845" y2="290" stroke-width="9" stroke-dasharray="0 22"/>
</g>${gnd}`}
];
const skills=["Adaptability","Teamwork","Leadership skills","Patience & Composure"];
const interests=["Aviation","Photography","Travelling","Swimming"];

const $=s=>document.querySelector(s);
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const hm=h=>{const m=Math.round(h*60);return Math.floor(m/60)+":"+String(m%60).padStart(2,"0")};
const chips=(el,a)=>el.innerHTML=a.map(x=>`<span>${x}</span>`).join("");
chips($("#skills"),skills);chips($("#interests"),interests);

// ---------- Looping flight path ----------
const bg=$("#bgPath"),fg=$("#fgPath"),plane=$("#plane");
let pathEl,trailEl,L=1,curS=0,lEnd=1,lT=1,yEnd=0,ls=[0];
function build(){
  const W=document.documentElement.clientWidth,H=document.body.offsetHeight;
  const R=Math.min(150,W*.17,innerHeight*.17),s=R*.7,Ax=Math.max(0,W/2-R-12),y0=110;
  const ry=H-95,rx0=W*.15,rx1=W*.8,lx=W*.2;
  let d="",x=0,y=0,px=0,py=0,cum=0;ls=[0];
  for(let t=0;;t+=.12){
    px=x;py=y;
    x=W/2+Ax*Math.sin(t*.11)+R*Math.sin(t);y=y0+s*t+R*(1-Math.cos(t));
    if(t){cum+=Math.hypot(x-px,y-py);ls.push(cum)}
    d+=(t?"L":"M")+x.toFixed(1)+" "+y.toFixed(1);
    if(y>H-Math.max(330,innerHeight*1.0)&&s+R*Math.sin(t)>0)break;
  }
  lEnd=cum;yEnd=y;
  // approach, touchdown and landing roll along the runway
  const dx=x-px,dy=y-py,n=Math.hypot(dx,dy)||1;
  d+=`C${(x+dx/n*110).toFixed(1)} ${(y+dy/n*110).toFixed(1)} ${Math.max(8,lx-110).toFixed(1)} ${ry} ${lx.toFixed(1)} ${ry}L${rx1.toFixed(1)} ${ry}`;
  [bg,fg].forEach(v=>{v.setAttribute("viewBox",`0 0 ${W} ${H}`);v.style.height=H+"px"});
  bg.innerHTML=`<rect x="${rx0}" y="${ry-14}" width="${rx1-rx0+30}" height="28" rx="4" fill="#818cf8" fill-opacity=".14" stroke="#818cf8" stroke-opacity=".5"/>
  <path d="M${rx0+14} ${ry}H${rx1+16}" stroke="#c7d2fe" stroke-opacity=".5" stroke-dasharray="10 8"/>
  <path id="p0" d="${d}" fill="none" stroke="#818cf8" stroke-opacity=".28" stroke-width="1.5" stroke-dasharray="4 8"/>
  <path id="p1" d="${d}" fill="none" stroke="#c7d2fe" stroke-opacity=".8" stroke-width="2" stroke-linecap="round"/>`;
  pathEl=$("#p0");trailEl=$("#p1");L=pathEl.getTotalLength();lT=L-(rx1-lx);
}
function fly(){
  const ih=innerHeight,mx=Math.max(1,document.documentElement.scrollHeight-ih);
  curS+=(scrollY-curS)*(reduce?1:.14);if(Math.abs(scrollY-curS)<.5)curS=scrollY;
  // plane position is tied to scroll, so it stays on screen going down and back up
  const sA=Math.max(1,Math.min(yEnd-ih*.5,mx-ih*.5));let l;
  if(curS<=sA){const f=Math.max(0,curS/sA)*(ls.length-1),i=Math.min(ls.length-2,Math.floor(f));
    l=ls[i]+(ls[i+1]-ls[i])*(f-i)}
  else{const g=Math.min(1,(curS-sA)/Math.max(1,mx-sA));l=g<.85?lEnd+(lT-lEnd)*g/.85:lT+(L-lT)*(g-.85)/.15}
  const p=pathEl.getPointAtLength(l),q=pathEl.getPointAtLength(Math.min(L,l+4));
  const a=Math.atan2(q.y-p.y,q.x-p.x)*180/Math.PI;
  plane.setAttribute("transform",`translate(${p.x} ${p.y}) rotate(${a+90}) scale(1.15) translate(-20 -24)`);
  trailEl.setAttribute("stroke-dasharray",`${l} ${L}`);
  $("#pct").textContent=Math.round(Math.min(1,curS/mx)*100)+"%";
  requestAnimationFrame(fly);
}
build();
new ResizeObserver(build).observe(document.body);
addEventListener("load",build);
fly();

// ---------- Photo tilt ----------
const ph=$("#photo"),img=ph.querySelector("img");
ph.addEventListener("pointermove",e=>{
  const b=ph.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;
  img.style.transform=`rotateY(${x*18}deg) rotateX(${-y*18}deg)`});
ph.addEventListener("pointerleave",()=>img.style.transform="");

// ---------- Counters ----------
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;io.unobserve(e.target);
  const end=+e.target.dataset.count;
  if(reduce){e.target.textContent=end;return}
  const t0=performance.now();
  (function f(t){const k=Math.min((t-t0)/1400,1);e.target.textContent=Math.round(end*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t0)
}),{threshold:.6});
document.querySelectorAll("[data-count]").forEach(el=>io.observe(el));

// ---------- Logbook ----------
const max=Math.max(...logbook.map(x=>x.a+x.s));
let mode="all",shown=false;
const val=(x,m)=>m==="all"?x.a+x.s:x[m==="actual"?"a":"s"];
$("#log").innerHTML=logbook.map(x=>`<div class="glass log-row"><button aria-expanded="false"><strong>${x.n}</strong>
<div class="bar"><i></i></div><span class="tot"></span></button><div class="det">${x.d}</div></div>`).join("");
function paint(){
  document.querySelectorAll(".log-row").forEach((r,i)=>{
    const v=val(logbook[i],mode);
    r.style.display=v?"":"none";
    r.querySelector("i").style.width=v/max*100+"%";
    r.querySelector(".tot").textContent=hm(v)});
}
document.querySelectorAll(".log-row button").forEach(b=>b.onclick=()=>{
  const o=b.parentElement.classList.toggle("open");b.setAttribute("aria-expanded",o)});
$("#seg").innerHTML=[["all","All hours"],["actual","Actual"],["sim","Simulator"]].map(([m,t])=>`<button data-m="${m}" aria-pressed="${m==="all"}">${t}</button>`).join("");
$("#seg").onclick=e=>{const b=e.target.closest("button");if(!b)return;mode=b.dataset.m;
  document.querySelectorAll("#seg button").forEach(x=>x.setAttribute("aria-pressed",x===b));if(shown)paint()};
new IntersectionObserver((es,ob)=>{if(es[0].isIntersecting){shown=true;paint();ob.disconnect()}},{threshold:.3}).observe($("#log"));
paint();document.querySelectorAll(".bar i").forEach(i=>i.style.width="0");

// ---------- Licences ----------
const fmt=d=>new Date(d).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});
$("#lic").innerHTML=licences.map(l=>{
  const days=Math.ceil((new Date(l.to)-new Date())/864e5);
  const [c,s]=days<0?["bad","Expired, renew"]:l.valid?["ok","Valid"]:days<120?["warn",`Renew soon (${days} days left)`]:["ok","Valid"];
  return `<div class="glass"><h3>${l.n}</h3><p>${l.id}<br>Valid till ${fmt(l.to)}</p><span class="st ${c}">${s}</span></div>`}).join("");

// ---------- Aircraft ----------
const tabs=$("#tabs"),ac=$("#ac");
function show(i){
  tabs.querySelectorAll("button").forEach((b,j)=>b.setAttribute("aria-selected",i===j));
  const a=aircraft[i];
  ac.innerHTML=`<svg viewBox="0 0 320 140" aria-hidden="true">${a.svg}</svg><div><h3>${a.n}</h3><p>${a.t}</p><ul>${a.l.map(x=>`<li>${x}</li>`).join("")}</ul></div>`}
aircraft.forEach((a,i)=>{const b=document.createElement("button");b.textContent=a.n;b.role="tab";b.onclick=()=>show(i);tabs.append(b)});
show(0);

// ---------- Copy email ----------
$("#copy").onclick=async()=>{
  const t=$("#toast");
  try{await navigator.clipboard.writeText("Vinayakwalia777@gmail.com");t.textContent="Email copied"}
  catch{t.textContent="Copy failed. Use the Email button."}
  t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)};