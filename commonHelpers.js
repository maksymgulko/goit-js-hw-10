import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as i,i as l}from"./assets/vendor-77e16229.js";let r=new Date;const m=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]");e.disabled=!0;const h=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");i(m,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],p()}});function p(){Date.now()>r?(l.show({message:"Please choose a date in the future",position:"topCenter"}),e.disabled=!0):e.disabled=!1}e.addEventListener("click",t=>{const a=setInterval(()=>{const o=r.getTime()-Date.now(),n=D(o);o<=0?(clearInterval(a),e.disabled=!1):(h.innerHTML=n.days.toString().padStart(2,"0"),f.innerHTML=n.hours.toString().padStart(2,"0"),y.innerHTML=n.minutes.toString().padStart(2,"0"),S.innerHTML=n.seconds.toString().padStart(2,"0"),e.disabled=!0)},1e3)});function D(t){const s=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:c,minutes:u,seconds:d}}
//# sourceMappingURL=commonHelpers.js.map
