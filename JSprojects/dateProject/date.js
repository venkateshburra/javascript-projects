// const now=new Date();
// console.log(now);
// console.log(typeof now)
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getTime());
// console.log(now.getHours());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getMinutes());
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());
// console.log(now.toTimeString());

// const before=new Date('july 20 2023 9:58:56')
// const now=new Date();
// console.log(now.getTime(),before.getTime())
// const diff=now.getTime()-before.getTime();
// const min=Math.round(diff/1000/60);
// const hours=Math.round(min/60);
// const day=Math.round(hours/24);
// console.log(min,hours,day);

// console.log(`the blog was written ${day} ago`);

// //converting timestaps into date objects
// const timestamp=1839383838383;
// console.log(new Date(timestamp))

const clock = document.querySelector('.clock');

const tick=()=>{
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    //console.log(h,m,s);
    const html=`
     <span>${h}</span>
     <span>${m}</span>
     <span>${s}</span>
    `;
    clock.innerHTML=html;

}
setInterval(tick,1000);