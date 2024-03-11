var hpencil=document.querySelector("#hpencil")
var hintroslide=document.querySelector("#hintroslide")
var hforceps1=document.querySelector("#hforceps1")
var hcap=document.querySelector("#hcap")
var hpenintro=document.querySelector("#hpenintro")
var hpipette=document.querySelector("#hpipette")
var hTCfront=document.querySelector("#hTCfront")
var hb1front=document.querySelector("#hb1front")
var hb2front=document.querySelector("#hb2front")
var hb3front=document.querySelector("#hb3front")
var hovt = document.querySelector("#hovt")
var hcounter=0
var hvalue="none"
var body=document.querySelector("#bod")


body.addEventListener("mouseover",function(){
    steper()
})

hpencil.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Pencil"
    hovt.style.top="72%"
    hovt.style.left="29%"

})
hpencil.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hintroslide.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="TLC plate"
    hovt.style.top="52%"
    hovt.style.left="45%"

})
hintroslide.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hforceps1.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Forceps"
    hovt.style.top="69%"
    hovt.style.left="48%"

})
hforceps1.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hcap.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="TLC chamber lid"
    hovt.style.top="55%"
    hovt.style.left="23%"

})
hcap.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hpenintro.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Pen"
    hovt.style.top="63%"
    hovt.style.left="20%"

})
hpenintro.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hpipette.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Pipette"
    hovt.style.top="69%"
    hovt.style.left="20%"

})
hpipette.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hTCfront.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="TLC chamber"
    hovt.style.top="45%"
    hovt.style.left="36%"

})
hTCfront.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hb1front.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Distilled water"
    hovt.style.top="45%"
    hovt.style.left="52%"

})
hb1front.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hb2front.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Ethanol"
    hovt.style.top="45%"
    hovt.style.left="63%"

})
hb2front.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hb3front.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Ethyl acetate"
    hovt.style.top="45%"
    hovt.style.left="69.9%"

})
hb3front.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

console.log(hcounter)

function steper(){
    if(hcounter==10){
    console.log(hcounter)
    if(hvalue=="none"){
        console.log(counter)
        f=0
        counter=1
        update();
        hvalue="done"
        arrow.style.top="81%"
        arrow.style.rotate="90deg"
        arrow.style.left="86.5%"
        arrow.style.visibility="visible";
        setTimeout(()=>{
        arrow.classList.add("blink");
         },1000)
    }
}
}