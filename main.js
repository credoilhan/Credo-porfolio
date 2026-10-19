<!-- script attrs: id="cursor-click-feedback" -->
(()=>{const ring=document.getElementById('customPointer');if(!ring||matchMedia('(prefers-reduced-motion: reduce)').matches)return;window.addEventListener('pointerdown',()=>{ring.classList.add('is-click');setTimeout(()=>ring.classList.remove('is-click'),180)},{passive:true});})();

/* ===== Script extrait ===== */
/* Portfolio safety: content remains visible even if an animation script is interrupted. */
document.documentElement.classList.add("js-ready");
const translations={
fr:{
available:"Disponible pour discuter de nouveaux projets",
heroText:"Je développe des applications web et des solutions métier avec Python, React.js et Odoo. J’aime comprendre les besoins, résoudre des problèmes concrets et créer des outils simples, fiables et agréables à utiliser.",
seeProjects:"Explorer mes projets ↗",seeExperience:"Voir mes expériences ↗",talk:"Discutons de votre projet",
aboutTitle:"À propos de moi",aboutLead:"J’aime partir d’un besoin concret, réfléchir à la meilleure façon d’y répondre, puis construire et améliorer la solution. Ce qui compte pour moi, c’est qu’elle soit claire, pratique et adaptée aux personnes qui vont l’utiliser.",
aboutText:"Je suis <strong>Credo Rahendrimanana</strong>, développeur full-stack et développement. Je conçois des sites, des applications et des outils numériques, de l’interface au back-end.",
aboutText2:"Je travaille notamment avec <strong>Python, React et Odoo</strong>. Je choisis les outils selon le projet, qu’il s’agisse d’un site, d’une solution métier ou d’un système ERP.",
      aboutText3: "Avec <strong>Ilhan Tech</strong>, je développe des projets numériques et j’explore comment l’IA et l’automatisation peuvent rendre les outils plus simples et plus utiles.",
ilhanText:"Ilhan Tech est un studio d’innovation numérique présent à Madagascar et à l’Île Maurice. Nous aidons les entreprises à passer de l’idée à la réalisation, en réunissant développement, design et automatisation.",
contactTitle:"Un projet en tête ?<br><span>Parlons-en.</span>"
},
en:{
available:"Available for new projects",
heroText:"I build web applications and business tools with Python, React.js and Odoo. I enjoy understanding real needs, solving practical problems and creating software that is clear, reliable and easy to use.",
seeProjects:"View my projects ↗",seeExperience:"View my experience ↗",talk:"Let's discuss your project",
aboutTitle:"Build.<br><span>Innovate.</span>",aboutLead:"A profile at the intersection of software development, product thinking, développement and digital innovation.",
aboutText:"I am <strong>Credo Rahendrimanana</strong>, a Full-Stack Developer and développement. I enjoy turning ideas into concrete solutions: web platforms, mobile apps, APIs, automation, AI or ERP. My goal is to create products that are simple to use, technically solid and valuable.",
aboutText2:"My journey combines personal projects, professional work and an développement vision around technology. This vision is expressed through <strong>Ilhan Tech</strong>.",
ilhanText:"Ilhan Tech is my développement technology venture: a digital innovation studio based in Madagascar and Mauritius, combining development, design, automation, AI and professional solutions.",
aboutText3:"What interests me goes beyond code: I first seek to understand the need, simplify the experience and build a solution that can genuinely evolve with its users or business.",
contactTitle:"Have a project?<br><span>Let's talk.</span>"
},
de:{
available:"Verfügbar für neue Projekte",
heroText:"Unternehmer und Full-Stack-Entwickler. Ich verwandle Ideen in moderne, nützliche und skalierbare digitale Produkte. Außerdem entwickle ich Ilhan Tech als unternehmerisches Technologieprojekt mit Fokus auf Automatisierung und professionelle Lösungen.",
seeProjects:"Meinen Werdegang ansehen ↗",seeExperience:"Meine Erfahrungen ansehen ↗",talk:"Über Ihr Projekt sprechen",
aboutTitle:"Entwickeln.<br><span>Innovieren.</span>",aboutLead:"Ein Profil an der Schnittstelle von Softwareentwicklung, Produktdenken, Unternehmertum und digitaler Innovation.",
aboutText:"Ich bin <strong>Credo Rahendrimanana</strong>, Full-Stack-Entwickler und Unternehmer. Ich verwandle Ideen gerne in konkrete Lösungen: Webplattformen, mobile Apps, APIs, Automatisierung, KI oder ERP.",
aboutText2:"Meine Arbeit verbindet persönliche und professionelle Projekte mit einer unternehmerischen Vision rund um Technologie. Diese Vision zeigt sich auch in <strong>Ilhan Tech</strong>.",
ilhanText:"Ilhan Tech ist mein unternehmerisches Technologieprojekt: ein Studio für digitale Innovation in Madagaskar und Mauritius, das Entwicklung, Design, Automatisierung, KI und professionelle Lösungen verbindet.",
contactTitle:"Ein Projekt?<br><span>Lassen Sie uns reden.</span>"
},
mg:{
available:"Vonona handray tetikasa vaovao",
heroText:"Mpandraharaha sy Full-Stack Developer aho. Avadiko ho vokatra nomerika maoderina, ilaina ary azo ampitomboina ny hevitra. Amboariko ihany koa ny Ilhan Tech, tetikasa ara-pandraharahana mifantoka amin'ny teknolojia, automatisation ary vahaolana matihanina.",
seeProjects:"Jereo ny traikefako ↗",seeExperience:"Jereo ny traikefako ↗",talk:"Andao hiresaka momba ny tetikasanao",
aboutTitle:"Mamorona.<br><span>Mamorona zava-baovao.</span>",aboutLead:"Profil mampifandray ny développement logiciel, ny produit, ny fandraharahana ary ny innovation digitale.",
aboutText:"Izaho dia <strong>Credo Rahendrimanana</strong>, Full-Stack Developer sady mpandraharaha. Tiako ny manova hevitra ho vahaolana tena azo ampiasaina: plateforme web, application mobile, API, automatisation, IA na ERP.",
aboutText2:"Ny asako dia mampifandray tetikasa manokana, asa matihanina ary vina ara-pandraharahana momba ny teknolojia. Ao anatin'izany indrindra ny <strong>Ilhan Tech</strong>.",
ilhanText:"Ilhan Tech dia tetikasa ara-pandraharahana ataoko eo amin'ny sehatry ny teknolojia: studio d'innovation digitale any Madagascar sy Maurice, mampifandray développement, design, automatisation, IA ary vahaolana matihanina.",
contactTitle:"Manana tetikasa?<br><span>Andao hiresaka.</span>"
}
};
let currentLang="fr";
function setLang(lang){
lang = (lang === "en") ? "en" : "fr";
currentLang=lang;
const contactCopy={
 fr:{name:"Votre nom",email:"Votre adresse e-mail",subject:"Sujet (facultatif)",message:"Quelques mots sur votre projet…",submit:"Envoyer le message ↗",sending:"Envoi en cours…",ready:"Votre message sera envoyé sans quitter cette page.",success:"Merci ! Votre message a bien été envoyé. Vous pouvez aussi me joindre directement sur WhatsApp.",error:"L’envoi a échoué. Réessayez ou écrivez directement à credoilhan@gmail.com."},
 en:{name:"Your name",email:"Your email address",subject:"Subject (optional)",message:"Tell me a little about your project…",submit:"Send message ↗",sending:"Sending…",ready:"Your message will be sent without leaving this page.",success:"Thank you! Your message has been sent.",error:"Sending failed. Please try again or email credoilhan@gmail.com directly."}
};
const form=document.getElementById("contactForm");
if(form){
 form.querySelectorAll("[data-contact-placeholder]").forEach(el=>{const key=el.dataset.contactPlaceholder;el.placeholder=contactCopy[lang][key];el.setAttribute("aria-label",contactCopy[lang][key]);});
 const submit=document.getElementById("contactSubmit"); if(submit && !submit.disabled) submit.textContent=contactCopy[lang].submit;
 const note=document.getElementById("formNote"); if(note && !note.dataset.state) note.textContent=contactCopy[lang].ready;
}

document.querySelectorAll("[data-i18n],[data-nav-i18n],[data-mobile-i18n]").forEach(el=>{
  const key=el.dataset.i18n||el.dataset.navI18n||el.dataset.mobileI18n;
  const value=(translations[lang]&&translations[lang][key]);
  if(value!==undefined){el.classList.add("lang-switching");setTimeout(()=>{el.innerHTML=value;el.classList.remove("lang-switching")},80)}
});
const navLabels={
fr:{home:"Accueil",about:"À propos",ilhanTech:"Ilhan Tech",skills:"Expertise",projects:"Projets",experience:"Parcours",contact:"Contact"},
en:{home:"Home",about:"About",ilhanTech:"Ilhan Tech",skills:"Expertise",projects:"Projects",experience:"Journey",contact:"Contact"},

};
document.querySelectorAll("[data-nav-i18n],[data-mobile-i18n]").forEach(el=>{
 const key=el.dataset.navI18n||el.dataset.mobileI18n;
 if(navLabels[lang]&&navLabels[lang][key])el.textContent=navLabels[lang][key];
});
localStorage.setItem("lang",lang)
}
document.getElementById("lang").addEventListener("change",e=>setLang(e.target.value));
const savedLang=localStorage.getItem("lang");
setLang(savedLang === "en" ? "en" : "fr");
document.getElementById("lang").value=currentLang;

const body=document.body,theme=document.getElementById("theme");
function setTheme(mode){body.classList.toggle("light",mode==="light");theme.textContent=mode==="light"?"☾":"☼";localStorage.setItem("theme",mode)}
setTheme(localStorage.getItem("theme")||"dark");theme.onclick=()=>setTheme(body.classList.contains("light")?"dark":"light");

function hideLoader(){const l=document.getElementById("loader");if(l)l.classList.add("hide");}
window.addEventListener("load",()=>setTimeout(hideLoader,500));
setTimeout(hideLoader,1800);
const menuBtn=document.getElementById("menuBtn"),mobile=document.getElementById("mobile");
menuBtn.onclick=()=>mobile.classList.toggle("open");mobile.querySelectorAll("a").forEach(a=>a.onclick=()=>mobile.classList.remove("open"));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
/* Les éléments sont révélés au moment où ils entrent dans le champ de vision. */

const back=document.getElementById("back");
addEventListener("scroll",()=>{back.classList.toggle("show",scrollY>650);let id="home";document.querySelectorAll("section[id]").forEach(s=>{if(scrollY>=s.offsetTop-220)id=s.id});document.querySelectorAll("[data-nav]").forEach(a=>a.classList.toggle("active",a.dataset.nav===id))},{passive:true});
back.onclick=()=>scrollTo({top:0,behavior:"auto"});



/* ===== URIelle — guide contextuel fiable ===== */
const urielle=document.getElementById("urielle");
const urielleText=document.getElementById("urielleText");
const urielleBtn=document.getElementById("urielleBtn");
const urielleMessages={
fr:{home:"Bienvenue. Je suis Urielle. Je vous accompagne dans le portfolio de Credo et je peux vous expliquer chaque partie.","ilhan-tech-showcase":"Bienvenue chez ILHAN TECH : cette section présente le studio digital cofondé par Credo, ses activités et son site officiel. Les cinq cartes résument ses domaines : développement web et mobile, ERP Odoo, design UI/UX, IA et automatisation, et stratégie digitale. Cliquez sur « Visiter ilhan-tech.com » pour découvrir le site.",about:"Ici, vous découvrez Credo Rahendrimanana : son profil, sa manière de travailler et sa vision des solutions digitales.",expertise:"Voici les domaines de compétence de Credo : développement web et mobile, API, IA, automatisation, Odoo, UI/UX et intégration de données.",développement:"Cette section présente Ilhan Tech, l'activité développement de Credo et son approche des solutions digitales professionnelles.",projects:"Ici, vous trouverez des réalisations et des démonstrations de solutions : sites vitrines, e-commerce, Odoo, CRM et automatisation.",experience:"Cette partie présente le parcours et l'évolution de Credo entre développement logiciel, solutions métier et développement.",contact:"Vous avez un projet ? Cette section vous donne les moyens de contacter directement Credo par WhatsApp, téléphone ou email."},
en:{home:"Welcome. I'm Urielle. I guide you through Credo's portfolio and can explain every section.","ilhan-tech-showcase":"Welcome to ILHAN TECH. This section introduces the digital studio co-founded by Credo, its services and official website. The five cards cover web and mobile development, Odoo ERP, UI/UX design, AI and automation, and digital strategy. Select “Visit ilhan-tech.com” to explore the website.",about:"Discover Credo Rahendrimanana, his profile, working approach and vision for digital solutions.",expertise:"Credo's expertise covers web and mobile development, APIs, AI, automation, Odoo, UI/UX and data integration.",ilhanTech:"This section presents Ilhan Tech and its professional digital solutions.",projects:"Explore realizations and demonstrations: business websites, e-commerce, Odoo, CRM and automation solutions.",experience:"This section presents Credo's professional evolution across software development, business solutions and développement.",contact:"Have a project? This section gives you direct contact options by WhatsApp, phone or email."},
de:{home:"Willkommen. Ich bin Urielle. Ich begleite Sie durch Credos Portfolio und erkläre Ihnen jeden Bereich.","ilhan-tech-showcase":"Willkommen bei ILHAN TECH. Dieser Bereich stellt das von Credo mitgegründete Digitalstudio, seine Leistungen und die offizielle Website vor. Die fünf Karten zeigen Web- und Mobile-Entwicklung, Odoo ERP, UI/UX, KI und Automatisierung sowie Digitalstrategie.",about:"Hier entdecken Sie Credo Rahendrimanana, seinen beruflichen Ansatz und seine Vision für digitale Lösungen.",expertise:"Credos Fachbereiche umfassen Web- und Mobile-Entwicklung, APIs, KI, Automatisierung, Odoo, UI/UX und Datenintegration.",développement:"Hier wird Ilhan Tech vorgestellt, Credos unternehmerische Aktivität und sein Ansatz für professionelle digitale Lösungen.",projects:"Entdecken Sie Realisierungen und Demonstrationen: Unternehmenswebsites, E-Commerce, Odoo, CRM und Automatisierung.",experience:"Diese Sektion zeigt Credos Entwicklung zwischen Softwareentwicklung, Geschäftslösungen und Unternehmertum.",contact:"Sie haben ein Projekt? Hier finden Sie den direkten Kontakt per WhatsApp, Telefon oder E-Mail."},
mg:{home:"Tongasoa. Izaho no Urielle. Mitarika anao amin'ity portfolio ity aho ary manazava ny fizarana tsirairay.","ilhan-tech-showcase":"Tongasoa eto amin’ny ILHAN TECH. Ity fizarana ity dia mampiseho ny studio nomerika niarahan’i Credo nanangana sy ny tolotra omeny: fampivoarana web sy mobile, ERP Odoo, famolavolana UI/UX, AI sy automatisation ary paikady nomerika. Tsindrio ny rohy hitsidihana ny tranonkala ofisialy.",about:"Eto no ahafantaranao an'i Credo Rahendrimanana, ny fomba fiasany ary ny fahitany ny vahaolana nomerika.",expertise:"Ireto ny sehatra iasan'i Credo: web sy mobile, API, AI, automatisation, Odoo, UI/UX ary fampifandraisana angona.",ilhanTech:"Eto no aseho ny Ilhan Tech.",projects:"Eto no ahitana réalisations sy démonstrations: site vitrine, e-commerce, Odoo, CRM ary automatisation.",experience:"Ity fizarana ity dia mampiseho ny fivoaran'i Credo teo amin'ny développement, vahaolana métier ary fandraharahana.",contact:"Manana tetikasa ve ianao? Eto no ahitanao ny fifandraisana amin'i Credo amin'ny WhatsApp, finday na email."}
};
let urielleOpen=false, urielleSection="home", urielleTimer;
function setUrielleSection(key,show=true){
  if(!urielleMessages[currentLang]?.[key]) key="home";
  if(urielleSection===key && !show) return;
  urielleSection=key;
  urielleText.textContent=urielleMessages[currentLang]?.[key]||urielleMessages.fr[key];
  if(show){
    urielle.classList.add("show");
    clearTimeout(urielleTimer);
    if(!urielleOpen) urielleTimer=setTimeout(()=>urielle.classList.remove("show"),6500);
  }
}
function currentSection(){
  const sections=[...document.querySelectorAll("main section[id]")];
  if(!sections.length)return "home";
  const point=scrollY+Math.min(innerHeight*.38,300);
  let best=sections[0],bestDistance=Infinity;
  for(const sec of sections){const d=Math.abs(sec.offsetTop-point);if(d<bestDistance){best=sec;bestDistance=d}}
  return best.id;
}
function syncUrielle(){setUrielleSection(currentSection(),false)}
urielleBtn.addEventListener("click",()=>{
  urielleOpen=!urielleOpen;
  urielle.classList.toggle("show",urielleOpen);
  urielleBtn.setAttribute("aria-expanded",String(urielleOpen));
  if(urielleOpen){clearTimeout(urielleTimer);setUrielleSection(currentSection(),false)}
  else urielleTimer=setTimeout(()=>urielle.classList.remove("show"),300);
});
const uriSections=[...document.querySelectorAll("main section[id]")];
const uriObserver=new IntersectionObserver(entries=>{
  const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(visible) setUrielleSection(visible.target.id,true);
},{rootMargin:"-32% 0px -45% 0px",threshold:[0,.2,.45,.7]});
uriSections.forEach(s=>uriObserver.observe(s));
window.addEventListener("scroll",()=>{syncUrielle()}, {passive:true});
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",()=>{
  const key=link.getAttribute("href").slice(1);
  if(key && urielleMessages[currentLang]?.[key]) setTimeout(()=>setUrielleSection(key,true),180);
}));
const oldSetLang=setLang;
setLang=function(lang){oldSetLang(lang);setUrielleSection(urielleSection,true)};
setTimeout(()=>setUrielleSection(currentSection(),true),700);
// Portfolio UI

document.querySelectorAll(".project-img img,.company-photo img").forEach(img=>{
  img.addEventListener("error",()=>{
    img.style.opacity="0";
    img.parentElement.classList.add("image-fallback");
  },{once:true});
});

/* ===== CINEMATIC SCROLL ENGINE v2 ===== */


/* Envoi AJAX : le visiteur reste sur le portfolio, sans page externe. */
const contactForm=document.getElementById("contactForm");
if(contactForm){
 contactForm.addEventListener("submit",async function(event){
  event.preventDefault();
  const submit=document.getElementById("contactSubmit");
  const note=document.getElementById("formNote");
  const lang=(currentLang==="en")?"en":"fr";
  const copy={
   fr:{submit:"Envoyer le message ↗",sending:"Envoi en cours…",ready:"Votre message sera envoyé sans quitter cette page.",success:"Merci ! Votre message a bien été envoyé.",error:"L’envoi a échoué. Réessayez ou écrivez directement à credoilhan@gmail.com."},
   en:{submit:"Send message ↗",sending:"Sending…",ready:"Your message will be sent without leaving this page.",success:"Thank you! Your message has been sent.",error:"Sending failed. Please try again or email credoilhan@gmail.com directly."}
  }[lang];
  if(contactForm.elements._honey && contactForm.elements._honey.value) return;
  submit.disabled=true; submit.textContent=copy.sending; note.textContent=copy.sending; note.dataset.state="sending";
  try{
   const response=await fetch(contactForm.action,{method:"POST",body:new FormData(contactForm),headers:{"Accept":"application/json"}});
   let result={}; try{result=await response.json()}catch(_e){}
   if(!response.ok || result.success===false || result.success==="false") throw new Error("Request failed");
   note.textContent=copy.success; note.dataset.state="success"; note.style.color="#8fe0ad"; contactForm.reset();
  }catch(error){
   note.textContent=copy.error; note.dataset.state="error"; note.style.color="#ff9b9b";
  }finally{
   submit.disabled=false; submit.textContent=copy.submit;
  }
 });
}


const customPointer=document.getElementById("customPointer"),customPointerDot=document.getElementById("customPointerDot");
if(customPointer&&customPointerDot&&matchMedia("(hover: hover) and (pointer: fine)").matches){
 document.body.classList.add("custom-pointer-enabled");
 window.addEventListener("pointermove",e=>{customPointer.style.left=e.clientX+"px";customPointer.style.top=e.clientY+"px";customPointerDot.style.left=e.clientX+"px";customPointerDot.style.top=e.clientY+"px"},{passive:true});
 document.querySelectorAll("a,button,input,textarea,select,[role=button]").forEach(el=>{
  el.addEventListener("pointerenter",()=>customPointer.classList.add("is-hover"));
  el.addEventListener("pointerleave",()=>customPointer.classList.remove("is-hover"));
 });
 window.addEventListener("pointerdown",()=>customPointer.classList.add("is-click"));
 window.addEventListener("pointerup",()=>customPointer.classList.remove("is-click"));
}

/* ===== Script extrait ===== */
<!-- script attrs: id="portfolio-3d-tilt" -->
(()=>{
 if(!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 const targets=document.querySelectorAll('#projects .experience-card,.project-card,.service,.skill,.expertise-card,.concept-project,.showcase-card,.value-card,.stat,.company-photo,.ilhan-showcase-visual');
 targets.forEach(el=>{
  el.addEventListener('pointermove',e=>{
   const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
   const rx=(.5-y)*5,ry=(x-.5)*7;
   el.style.transform=`perspective(950px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
  },{passive:true});
  el.addEventListener('pointerleave',()=>{el.style.transform='';},{passive:true});
 });
})();
