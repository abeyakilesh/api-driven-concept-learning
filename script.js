let count=0;

let display = document.getElementById("count-ppl");
let inc_btn = document.getElementById("inc-btn");
let dec_btn = document.getElementById("dec-btn");
let reset_btn = document.getElementById("reset-btn");
const message = document.getElementById("message");

inc_btn.addEventListener("click",
    ()=>{
        
        count++;
        display.innerText=count;

        dec_btn.disabled=false;
        dec_btn.classList.remove("disabled");
        reset_btn.classList.remove("disabled");
        message.innerText="";
    }
);

dec_btn.addEventListener("click",
    ()=>{
        if(count===0)
        {
            dec_btn.disabled=true;
            dec_btn.classList.add("disabled");
            message.innerText ="cant go below zero";
        }
        else
        {
            count--;
            display.innerText=count;
        }
    }
);

reset_btn.addEventListener("click",
    ()=>{
        count=0;
        display.innerText=count;
        reset_btn.classList.add("disabled");
        dec_btn.disabled=true;
        dec_btn.classList.add("disabled");
        message.innerText ="Reset to zero";
    }
);
