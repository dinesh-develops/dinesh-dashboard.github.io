const hr=document.querySelector("#hr");
        const mn=document.querySelector("#mn");
        const sc=document.querySelector("#sc");
        setInterval(()=>{
            let day=new Date();
            let hh=day.getHours()*30;
            let mm=day.getMinutes()*6;
            let ss=day.getSeconds()*6;
            hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`;
            mn.style.transform=`rotateZ(${mm}deg)`;
            sc.style.transform=`rotateZ(${ss}deg)`;
            let hour=document.querySelector("#hour");
            let minutes=document.querySelector("#minutes");
            let seconds=document.querySelector("#seconds");
            let ampm=document.querySelector("#ampm");
            let mss=document.querySelector("#mss");
            
            let h=day.getHours();
            let m=day.getMinutes();
            let s=day.getSeconds();
            let ms=day.getMilliseconds();
            let am='AM';
            if(h>12){
                h=h-12;
                am='PM'
            }
            h=(h<10)?"0"+h:h;
            m=(m<10)?"0"+m:m;
            s=(s<10)?"0"+s:s;
            hour.innerHTML=h+":";
            minutes.innerHTML=m+":";
            seconds.innerHTML=s;
            ampm.innerHTML=am;
        })
