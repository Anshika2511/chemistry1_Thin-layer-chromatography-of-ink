const messages = ["Make yourself familiar with the equipments by hovering over them.",
   "Press on the next button.",
   "Pick up the pipette.",
   "Measure 3ml of distilled water using pipette and release it into the TLC chamber.",
   "Measure 3.5ml of ethanol using pipette and release it into the TLC chamber.",
   "Measure 7ml of ethyl acetate using pipette and release it into the TLC chamber.",
   "Ohhh! you filled way too much!. Release some of it!",
   "Great! you measured the right amount!",
   "Cover the beaker by a lid.",
   "Press on the next button.",
   "Hold the ruler and place it at 1cm from the bottom of the TLC plate.",
   "Draw a horizontal line near the bottom end of a TLC plate.",
   "Press the next button.",
   "Put a drop of ink on the lower line.",
   "Press on the next button." ,
   "Open the beaker.",
   "Put some amount of solvent in the TLC chamber." ,
   "Press the pipette to take some solvent.",
   "Close the beaker by a lid.",
   "Close the TLC chamber too!.",
   "Now, know some fact!",
   "Click on the 'close the fact' button after knowing the fact!",
   "Open the TLC chamber.",
   "Hold the TLC plate. ",
   "Move the TLC plate into the chamber using a forceps.",
   "Close the TLC chamber",
   "Wait for some time until some compounds are spotted on the plate",
   "Open the TLC chamber",
   "Take the TLC plate out of the chamber",
   "Press on the next button",
   "Click on the ruler",
   "Click on the pencil to draw a line at the solvent front",
   "Wait for the TLC plate to dry!",
   "Press on the next button",
   "Take the readings of the distance travelled by the solvent",
   "Measure the distance travelled by the faint violet colour",
   "Measure the distance travelled by the deep violet colour",
   "Measure the distance travelled by the deep blue colour",
   "Measure the distance travelled by the violet colour",
   "Press on the next button",
   "Enter the calculated Rf value in the table below and then press the check button",
   "Check your values with the given data and further press the next button!"
];

const messagesh=["उपकरणों के ऊपर माउस ले जाकर स्वयं को उनसे परिचित कराएं।",
   "नेक्स्ट बटन दबाएँ।",
   " कृपया पिपेट उठाइये।",
   "पिपेट का उपयोग करके 3 मिलीलीटर आसुत जल मापें और इसे टीएलसी कक्ष में डाल दें।",
   "पिपेट का उपयोग करके 3.5 मिलीलीटर इथेनॉल मापें और इसे टीएलसी कक्ष में डाल दें।",
   "पिपेट का उपयोग करके 7 मिलीलीटर एथिल एसीटेट मापें और इसे टीएलसी कक्ष में डाल दें।",
   "ओहहो! आपने बहुत ज्यादा भर दिया! इसमें से कुछ मात्रा कम करें!",
   "बहुत बढ़िया! आपने सही मात्रा मापी!",
   "बीकर को ढक्कन से ढक दें।",
   "नेक्स्ट बटन दबाएँ।",
   "रूलर को पकड़ें और इसे टीएलसी प्लेट के नीचे से 1 सेमी की दूरी पर रखें।",
   "टीएलसी प्लेट के नीचे एक रेखा चिह्नित करें।",
   "नेक्स्ट बटन दबाएँ।",
   "टीएलसी प्लेट पर लाइन के केंद्र में नीले बॉल-पॉइंट पेन का उपयोग करके एक स्याही बिंदु रखें।",
   "नेक्स्ट बटन दबाएँ।" ,
   "कृपया बीकर खोलें।",
   "टीएलसी चैम्बर में कुछ मात्रा में विलायक डालें।" ,
   "कुछ विलायक लेने के लिए पिपेट दबाएं।",
   "बीकर को ढक्कन से बंद कर दें।",
   "टीएलसी चैम्बर भी बंद करें!",
   "अब, कुछ तथ्य जानिए!",
   "तथ्य जानने के बाद 'क्लोज द  फैक्ट' बटन पर क्लिक करें!",
   "टीएलसी चैम्बर खोलें।",
   "टीएलसी प्लेट उठाइये।",
   "एक संदंश का उपयोग करके टीएलसी प्लेट को चैम्बर में ले जाएँ।",
   "टीएलसी चैम्बर बंद करें।",
   "प्लेट पर कुछ यौगिक दिखाई देने तक कुछ समय तक प्रतीक्षा करें।",
   "टीएलसी चैम्बर खोलें।",
   "टीएलसी प्लेट को चैम्बर से बाहर निकालें।",
   "नेक्स्ट बटन दबाएँ।",
   "रूलर पर क्लिक करें",
   "विलायक के मोर्चे पर एक रेखा खींचने के लिए पेंसिल पर क्लिक करें",
   "टीएलसी प्लेट के सूखने की प्रतीक्षा करें!",
   "विलायक द्वारा तय की गई दूरी की रीडिंग लें।",
   "हल्के बैंगनी रंग द्वारा तय की गई दूरी मापें।",
   "गहरे बैंगनी रंग द्वारा तय की गई दूरी मापें।",
   "गहरे नीले रंग द्वारा तय की गई दूरी मापें।",
   "बैंगनी रंग द्वारा तय की गई दूरी मापें।",
   "नेक्स्ट बटन दबाएँ।",
   "नीचे दी गई तालिका में परिकलित आरएफ मान दर्ज करें और फिर चेक बटन दबाएं।",
   "दिए गए डेटा के साथ अपने मूल्यों की जांच करें और नेक्स्ट बटन दबाएं!"
];

var hindibtn = document.querySelector("#hindi")
var engbtn = document.querySelector("#eng")
var langselector = document.querySelector("#langselector")
var mes1  

var counter=0

var lang
function hindi1(){
    console.log(lang)
    lang="hindi"
    langselector.style.visibility="hidden"
    update()
}

function eng1(){
    console.log(lang)
    lang="eng"
    langselector.style.visibility="hidden"
    update() 
}



function speech1(){
    if(lang=="hindi"){
        mes1=messagesh[counter-1]
        console.log(mes1)
    }
    else if(lang=="eng"){
        mes1=messages[counter-1]
        console.log(mes1)
    }
    setTimeout(function(){ 
        const utterance = new SpeechSynthesisUtterance(mes1);
        utterance.lang = 'hi-IN';
        utterance.pitch=1;
        utterance.rate=1;
        utterance.volume=1;
        speechSynthesis.speak(utterance);
    },500)
}


    var inst=document.querySelector("#message")
     inst.innerText=messages[counter]
     function update(){
      console.log(messages[counter].charAt())
      if(lang=="hindi"){
          inst.innerText=messagesh[counter]
      }
      else if(lang=="eng"){
          inst.innerText=messages[counter];
        }
      counter+=1
      speech1()
  }

var uld=0
var myinput=document.querySelector(".myinput")
var a=document.querySelector("#pencil1")
var b=document.querySelector("#introslide")
var h=document.querySelector("#readymade7ml")
var j=document.querySelector("#readymade3ml")
var k=document.querySelector("#readymade35ml")
var l=document.querySelector("#pencil")
var m=document.querySelector("#ruler")
var n=document.querySelector("#slide")
var line=document.querySelector("#line")
var line1=document.querySelector("#line1")

var over7ml=document.querySelector("#over7ml")
 var g=document.querySelector("#pipette7ml")
 var e=document.querySelector("#pipette35ml")
  var c=document.querySelector("#pipette3ml")
 var d=document.querySelector("#pipette")
 var i=document.querySelector("#cap")
 var n1=document.querySelector("#nxt")

 var linedot=document.querySelector("#linedot")
 var lineslide=document.querySelector("#lineslide")
 var ink=document.querySelector("#ink")
 var inkfront=document.querySelector("#inkfront")
 var pen=document.querySelector("#pen")
 var hd1=document.querySelector("#hd1")
 var hd2=document.querySelector("#hd2")
 var ss=document.querySelector("#ss")
 var forceps1=document.querySelector("#forceps1")
 var z=document.querySelector("#forcepsmov")
 var wetslide=document.querySelector("#wetslide")
 var dryslide=document.querySelector("#dryslide")

 var table=document.querySelector("#toptable")
 var tiles=document.querySelector("#tiles")
 var TCback=document.querySelector("#TCback")
 var TCfront=document.querySelector("#TCfront")
 var TCback1=document.querySelector("#TCback1")
 var TCfront1=document.querySelector("#TCfront1")

 var b1back=document.querySelector("#b1back")
 var b1middle=document.querySelector("#b1middle")
 var b1front=document.querySelector("#b1front")
 var b2back=document.querySelector("#b2back")
 var b2middle=document.querySelector("#b2middle")
 var b2front=document.querySelector("#b2front")
 var b3back=document.querySelector("#b3back")
 var b3middle=document.querySelector("#b3middle")
 var b3front=document.querySelector("#b3front")

 const utable = document.getElementById('usertable');
  const submitButton = document.getElementById('submitresult');
  const first=document.getElementById('first')
  const second=document.getElementById('second')
  const third=document.getElementById('third')
  const fourth=document.getElementById('fourth')


 function nxt(){
  if(f==0){
    arrow.style.visibility="hidden"             
    arrow.classList.remove("blink");

    a.style.visibility="hidden";
    b.style.visibility="hidden";
    penintro.style.visibility="hidden";
    forceps1.style.visibility="hidden";
    TCback.style.visibility="hidden"
    TCfront.style.visibility="hidden"
    beaker0back.style.visibility="visible";
    beaker0front.style.visibility="visible";
    hpencil.style.visibility="hidden"
    hintroslide.style.visibility="hidden"
    hforceps1.style.visibility="hidden"
    hpenintro.style.visibility="hidden"
    hpipette.style.visibility="hidden"
    hTCfront.style.visibility="hidden"
    hb1front.style.visibility="hidden"
    hb2front.style.visibility="hidden"
    hb3front.style.visibility="hidden"
    hcap.style.visibility="hidden"
    f=1
    update();
    arrow.style.left="24.8%"
    arrow.style.top="69.7%"
    arrow.style.rotate="0deg"
    arrow.style.visibility="visible";
    setTimeout(() => {
      arrow.classList.add("blink")
    },1000);
 }

 else if(f==6){
  arrow.style.visibility="hidden";                
  arrow.classList.remove("blink"); 

    d.style.transitionDuration="0s";
    d.style.visibility="hidden";

    i.style.transitionDuration="0s";
    i.style.visibility="hidden";

    beaker0back.style.visibility="hidden";
    beaker0front.style.visibility="hidden";
    bottombeakerliquid.style.transitionDuration="0s"
    bottombeakerliquid.style.visibility="hidden";
    middlebeakerliquid.style.transitionDuration="0s"
    middlebeakerliquid.style.visibility="hidden"
    topbeakerliquid.style.transitionDuration="0s"
    topbeakerliquid.style.visibility="hidden";

    b1back.style.visibility="hidden"
    b1middle.style.visibility="hidden"
    b1front.style.visibility="hidden"
    b2back.style.visibility="hidden";
    b2middle.style.visibility="hidden"
    b2front.style.visibility="hidden"
    b3back.style.visibility="hidden"
    b3middle.style.visibility="hidden"
    b3front.style.visibility="hidden"
    p1.style.transitionDuration="0s";
    p1.style.visibility="hidden"

    tiles.style.visibility="visible";
    table.style.visibility="visible";
    l.style.visibility="visible";
    m.style.visibility="visible"
    n.style.visibility="visible"
    m1.style.visibility="visible";
    f=7
    update();
    arrow.style.visibility="visible" 
    arrow.style.top="46%"                                  //open beaker 0
    arrow.style.left="60%"
    setTimeout(()=>{
      arrow.classList.add("blink");
    },500)
  }
 
  else if(f==9){       
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink");
    
    l.style.transitionDuration="0s"
    l.style.visibility="hidden"
    m.style.transitionDuration="0s"
    m.style.visibility="hidden"
  //  m.style.left="30%"                        new changed position of ruler
  //  m.style.height="64%"
  //  m.style.top="22%"
    n.style.transitionDuration="0s"
    n.style.visibility="hidden"
    line.style.transitionDuration="0s"
    line.style.visibility="hidden"
    line1.style.transitionDuration="0s";
    line1.style.visibility="hidden"
    m1.style.visibility="hidden"
    table.style.visibility="hidden";
    tiles.style.visibility="hidden"

    topbeakerliquid.style.transitionDuration="0s";
    topbeakerliquid.style.visibility="hidden"
    lineslide.style.visibility="visible"
    pen.style.visibility="visible";

    setTimeout(function(){
    arrow.style.visibility="visible" 
    arrow.style.left="31%"
    arrow.style.top="60.5%"
    setTimeout(() => {
      arrow.classList.add("blink");
    },1000);
    },1000)

    f=10
    update();
  }
  else if(f==11){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 

    lineslide.style.transitionDuration="0s"
    lineslide.style.visibility="hidden"
    pen.style.transitionDuration="0s"
    pen.style.visibility="hidden";
    linedot.style.transitionDelay="0s"
    linedot.style.transitionDuration="0s"
    linedot.style.visibility="hidden";

    TCback1.style.visibility="visible";
    TCfront1.style.visibility="visible";
     beaker0back.style.visibility="visible"
     beaker0back.style.left="40%"
     beaker0middle.style.visibility="visible"
     beaker0front.style.visibility="visible"  
     beaker0front.style.left="36.72%"

     captlc.style.visibility="visible"
     pipettebeak.style.visibility="visible"
     
     i.style.visibility="visible";
     i.style.top="59.5%";
     i.style.left="28.3%";
     setTimeout(function(){
      arrow.style.visibility="visible" 
      arrow.style.left="35.5%"
      arrow.style.top="49%"
      arrow.classList.add("blink");
      },1000)
     f=12;
     update();
  }
   
  else if(uld==2){
    update();
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    dryslide.style.transitionDuration="0s"
    dryslide.style.visibility="hidden"
    l.style.transitionDuration="0s"
    m.style.transitionDuration="0s"
    l.style.visibility="hidden"
    m.style.visibility="hidden"
    dryslide.style.height="29.5%"
    dryslide.style.width="4.5%"
    dryslide.style.top="19.9%"
    dryslide.style.left="14%"
    line1.style.transitionDuration="0s"
    line1.style.visibility="hidden"
    ss.style.transitionDuration="0s"
    ss.style.visibility="hidden"
    
   m.style.left="30%";
   m.style.top="22%";
   mytable.style.visibility="visible"
    m.style.visibility="visible"
    dryslide.style.visibility="visible"

    setTimeout(function(){
    m.style.transitionDuration="1s"
    arrow.style.rotate="90deg";                   //this is commented newly
    arrow.style.top="40%"
    arrow.style.left="26%" 
      setTimeout(()=>{ 
        arrow.style.visibility="visible";
        arrow.classList.add("blink");
      },1000)
    f=24;
   // update();
  },1000)
   f=24000;
    
  }

  else if(f==23){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    z.style.transitionDuration="0s";
    z.style.visibility="hidden";
    hd2.style.transitionDuration="0s"
    hd2.style.visibility="hidden";
    captlc.style.transitionDuration="0s";
    captlc.style.visibility="hidden";
    TCback1.style.visibility="hidden";
    TCfront1.style.visibility="hidden";
    middleTLCchamber1.style.visibility="hidden"

    tiles.style.visibility="visible";
    table.style.visibility="visible"
    
    m.style.visibility="visible";
    m.style.transition="all";
    m.style.transitionDuration="1.8s"
   
   // m.style.left="65%";
  // m.style.top="22%";

   // mytable.style.visibility="visible"
    l.style.visibility="visible";
    m1.style.visibility="visible";
    ss.style.visibility="visible";
    ss.style.width="4.5%";//4.5
    ss.style.height="31%";//29
    ss.style.top="14%";//20
    ss.style.left="47%";//14
    
   /* setTimeout(function(){
      dryslide.style.opacity="100%"
      dryslide.style.visibility="visible"
      dryslide.style.transitionDuration="ease-in-out"
      update();
    },3500)*/

    /* arrow.style.rotate="90deg";                   //this is commented newly
      arrow.style.top="40%"
      arrow.style.left="26%" 
      setTimeout(()=>{ 
        arrow.style.visibility="visible";
        arrow.classList.add("blink");
      },3800)  */
    //f=24;
     update();
  }

  else if(uld==3){
    console.log('pau')
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    m.style.transitionDuration="0s"
    m.style.visibility="hidden"
    dryslide.style.transitionDuration="0s"
    dryslide.style.visibility="hidden"
   // wetslide.style.transitionDuration="0s"
   // wetslide.style.visibility="hidden"
    mytable.style.left="12%"
    mytable.style.top="15%"
    formula.style.visibility="visible"
    usertable.style.visibility="visible"
    submitresult.style.visibility="visible"
    update();
      arrow.style.rotate="-90deg";
      arrow.style.top="33%"
      arrow.style.left="79%"
      setTimeout(()=>{
        arrow.style.visibility="visible";
        arrow.classList.add("blink");
      },2000)
      setTimeout(() => {
        arrow.style.visibility="hidden";                
        arrow.classList.remove("blink"); 
      },5000);
  }
  else if(uld==4){
    end.style.visibility="visible"
    backgray1.style.visibility="visible"
    confetti.style.visibility="visible"
    confetti.classList.add("fall");
  }
 }
 
 function pipepick(){
   if(f==1){
    console.log("hii")
    arrow.style.visibility="hidden"
    arrow.classList.remove("blink");
     d.style.transform=" translate(0%,-700%) rotate(90deg)";
     setTimeout(function moveright(){
      setTimeout(function(){
        d.style.transform="translate(0%,-1700%) rotate(90deg)";    //1900
      },1000)
      setTimeout(function(){
        d.style.transform="translate(187%,-1700%) rotate(90deg)"; //1900
      },2000)
      setTimeout(function(){
        d.style.transform="translate(187%,-930%) rotate(90deg)";  //940
        f=2;
        update();
        arrow.style.visibility="visible";
        arrow.style.rotate="90deg";
        arrow.style.top="40%"
        arrow.style.left="52.5%" 
      },3000)},1000);

      setTimeout(()=>{
        arrow.classList.add("blink");
      },4500)
       f=2000
   }

  else if(f==2){
      arrow.style.visibility="hidden";               
      arrow.classList.remove("blink");
       c.style.opacity="100%";  
       
       setTimeout(function(){
        d.style.visibility="hidden"
        d.style.transitionDuration="0s"
        c.style.transitionDuration="0s"
        c.style.visibility="hidden"
        j.style.visibility="visible";
  
        j.style.transform="translate(0%,-50%)"
      },1000)
                                                                     
     setTimeout(function(){
        j.style.transform="translate(-1690%,-50%)"      
      },2000)
  
      setTimeout(function(){
        j.style.transform="translate(-1690%,0%)";
      },3000)
  
      setTimeout(function(){
        d.style.visibility="visible"
        c.style.visibility="visible"
        j.style.transitionDuration="0s"
        j.style.visibility="hidden"
         d.style.top="65%"
         d.style.left="0%"
         c.style.top="54.2%"
         c.style.left="38.8%"
      },4000)
  
      setTimeout(function(){
        c.style.transitionTimingFunction="ease"
        c.style.visibility="hidden"
        c.style.opacity="0%"
        bottombeakerliquid.style.visibility="visible";
        bottombeakerliquid.style.opacity="100%";
        bottombeakerliquid.style.transitionDelay="0.3s"
        d.style.transitionDuration="1s"
      },5000)


      setTimeout(function(){
        d.style.transform="translate(187%,-1900%) rotate(90deg)"
      },6000)
       
      setTimeout(function(){                                       
        d.style.transform="translate(345%,-1900%) rotate(90deg)"
      },7000)
  
      setTimeout(function(){
        d.style.transform="translate(345%,-940%) rotate(90deg)" 
        f=3; 
        update();
        arrow.style.visibility="visible";
        arrow.style.rotate="90deg";
        arrow.style.top="40%"
        arrow.style.left="61.5%"
     },8000)
     setTimeout(()=>{arrow.classList.add("blink");
    },9000)
    f=3000
  }

  else if(f==3){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink");

    e.style.opacity="100%";          
    
    setTimeout(function(){
      k.style.visibility="visible";
      d.style.transitionDuration="0s"
      d.style.visibility="hidden";
      e.style.transitionDuration="0s"
      e.style.visibility="hidden"

      k.style.transform="translate(0%,-50%)"
    },1000)

    setTimeout(function(){
      k.style.transform="translate(-2550%,-50%)"     
   },2000)

   setTimeout(function(){
     k.style.transform="translate(-2550%,0%)"
 },3000)

 setTimeout(function(){
     k.style.transitionDuration="0s"
     k.style.visibility="hidden"
     d.style.visibility="visible"
     e.style.visibility="visible"
     d.style.top="65%"
     d.style.left="-25.5%"
     e.style.top="54.3%"
     e.style.left="39.4%" 
 },4000)

  setTimeout(function(){
    e.style.transitionTimingFunction="ease"
    e.style.visibility="hidden"
    middlebeakerliquid.style.visibility="visible";
    middlebeakerliquid.style.opacity="100%";
    middlebeakerliquid.style.transitionDelay="0.3s"
    d.style.transitionDuration="1s"
  },5000)


  setTimeout(function(){
    d.style.transform="translate(345%,-1900%) rotate(90deg)"
   },6000)
   setTimeout(function(){
     d.style.transform="translate(550%,-1900%) rotate(90deg)"   
    },7000)
    setTimeout(function(){
     d.style.transform="translate(550%,-900%) rotate(90deg)"
     f=4;
     update();
        arrow.style.visibility="visible";
        arrow.style.rotate="90deg";
        arrow.style.top="40%"
        arrow.style.left="69.5%"
    },8000)
    setTimeout(()=>{
      arrow.classList.add("blink");
    },9000)
     f=4000;

  }

  else if(f==4){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink");     

    over7ml.style.opacity="100%"    
    setTimeout(function(){
      update();
      arrow.style.visibility="visible";
      setTimeout(()=>{
        arrow.classList.add("blink");
      },600)
     f=-1;
    },1000)
  }
    else if(f==-1){
      arrow.style.visibility="hidden";                
      arrow.classList.remove("blink"); 

      setTimeout(function(){
        over7ml.style.opacity="0%"
        g.style.opacity="100%"  
      },1000)

    setTimeout(function(){
      update();
      h.style.visibility="visible"
       d.style.transitionDuration="0s"
        d.style.visibility="hidden"
        g.style.transitionDuration="0s"
        g.style.visibility="hidden"
  
        h.style.transform="translate(0%,-50%)"
      },2000)
  
      setTimeout(function(){
        h.style.transform="translate(-3400%,-50%)";
      },3000)
      
  
     setTimeout(function(){
      h.style.transform="translate(-3400%,0%)";   
       },4000)
  
     setTimeout(function(){
      h.style.transitionDuration="0s"
      h.style.visibility="hidden"
      d.style.transitionDuration="0s";
      g.style.transitionDuration="0s";
      d.style.visibility="visible"
      g.style.visibility="visible"
  
      d.style.top="65%";                              
     d.style.left="-59.5%"
     g.style.top="46.7%";
     g.style.left="39.2%";  
       },5000)
  
    setTimeout(function(){
    g.style.opacity="0%";
    topbeakerliquid.style.visibility="visible";
    topbeakerliquid.style.opacity="100%";
    topbeakerliquid.style.transitionDelay="0.3s"
     },6000)
  
     setTimeout(function(){
       d.style.transitionDuration="1s"
       d.style.transform="translate(550%,-1900%) rotate(90deg)"   
       },7000)
    
       setTimeout(function(){
        d.style.transform="translate(515%,-1900%) rotate(90deg)"
       },8000)
  
       setTimeout(function(){
         d.style.transform="translate(515%,-700%) rotate(90deg)"
       },9000)
  
       setTimeout(function(){
        d.style.transform="translate(475%,-60%) rotate(-0deg)"
        f=5
        update();
        arrow.style.top="50%"
        arrow.style.rotate="180deg"
        arrow.style.left="26%"
        arrow.style.visibility="visible";
        setTimeout(()=>{
         arrow.classList.add("blink");
        },1000)
        },10000)
         f=5000
    }

  }
 

 function clos(){
  if(f==5){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    i.style.transform="translate(0%,-364%)";

    setTimeout(function(){
      i.style.transform="translate(135.5%,-364%)";
    },1000)

    setTimeout(function(){
      p1.style.transitionDuration="3s"
      p1.innerHTML="Your mobile-phase solvent is ready!";
      f=6;
      update();
      arrow.style.top="81%"
      arrow.style.rotate="90deg"
      arrow.style.left="86.5%"
      arrow.style.visibility="visible";
  setTimeout(()=>{
    arrow.classList.add("blink");
  },1000)
    },2000)
    f=6000;
  }
  else if(f==12){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 

    i.style.transition="all"
    i.style.transitionDuration="1s"
    i.style.transform="translate(-15%,-364%)"
    setTimeout(function(){
      i.style.transform="translate(0%,0%)"
      arrow.style.left="24.8%"
      arrow.style.top="69.7%"
      arrow.style.rotate="0deg"
      arrow.style.visibility="visible";
      f=13
      update();
    },1000)
    setTimeout(() => {
      arrow.classList.add("blink")
    },2000);
     f=13000;
  }

  else if(f==15){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    i.style.transform="translate(0%,-364%)"
    setTimeout(function(){
    i.style.transform="translate(135%,-364%)"
    update();
    f=16;
    arrow.style.top="58%"
    arrow.style.left="77%"
    arrow.style.rotate="-90deg"
    arrow.style.visibility="visible";
    },1000)
    setTimeout(() => {
      arrow.classList.add("blink")
    },2000);

  }
 }

 function clostlc(){
  if(f==16){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 

    captlc.style.transform="translate(0%,-364%)"
    setTimeout(function(){
     captlc.style.transform="translate(-120%,-364%)"
    },1000)
    setTimeout(function(){
      backgray.style.visibility="visible"
      update();
      factbutton.style.visibility="visible"
     },2000)
     f=17000
  }

  else if(f==17){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    captlc.style.transform="translate(-120%,-364%)"
    setTimeout(function(){
      captlc.style.transform="translate(50%,-364%)"
    },1000)
    setTimeout(function(){
      captlc.style.transform="translate(50%,0%)"
      arrow.style.left="45.5%"
      arrow.style.top="68.8%"
      arrow.style.rotate="0deg"
      arrow.style.visibility="visible";
      f=18;
      update();
    },2000)
    setTimeout(() => {
      arrow.classList.add("blink")
    },3000);
    f=18000;
  }

  else if(f==20){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    captlc.style.transform="translate(50%,-364%)"
    setTimeout(function(){
     captlc.style.transform="translate(-120%,-364%)"
    },1000)
     
    setTimeout(() => {
      update();
    }, 3000);

    setTimeout(function(){
      wetslide.style.transitionTimingFunction="ease-in-out"
      wetslide.style.visibility="visible"
      wetslide.style.opacity="100%"
      arrow.style.top="47%"
      arrow.style.left="66%"
      arrow.style.rotate="-90deg"
      arrow.style.visibility="visible";
      f=21;
      update();
    },5500)
    setTimeout(() => {
      arrow.classList.add("blink")
    },6500);
      f=21000; 
  }

  else if(f==21){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    ss.style.width="2.89%"
    ss.style.left="45.6%"  
    ss.src="images/wetslidenew1.png"
    wetslide.style.transitionDuration="0s"
    wetslide.style.visibility="hidden"
    captlc.style.transform="translate(50%,-364%)"
    setTimeout(function(){
     captlc.style.transform="translate(50%,0%)"
     arrow.style.top="63.5%"
    arrow.style.left="33%"
    arrow.style.rotate="90deg"
    arrow.style.visibility="visible";
     f=22;
     update();
    },1000)
    setTimeout(() => {
      arrow.classList.add("blink")
    },2000);
    f=22000
  }
 }

 function pipepickbeak1(){
  if(f==13){ 
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    pipettebeak.style.transform=" translate(0%,-700%) rotate(90deg)";
    setTimeout(function(){
      pipettebeak.style.transform="translate(0%,-1700%) rotate(90deg)";    
    },1000)
    setTimeout(function(){
      pipettebeak.style.transform="translate(113%,-1700%) rotate(90deg)";    
    },2000)
    setTimeout(function(){
      pipettebeak.style.transform="translate(113%,-920%) rotate(90deg)";  
      arrow.style.visibility="visible";
      arrow.style.rotate="90deg";
      arrow.style.top="30%"
      arrow.style.left="40%"                                      //beaker0 pipette
      f=14
      update();
    },3000)
    setTimeout(()=>{
      arrow.classList.add("blink");
    },4000)
    f=14000;
  }
  
  else if(f==14){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 

    c.style.opacity="100%"
    c.style.transitionTimingFunction="ease-in-out"
    c.style.visibility="visible"
    c.style.width="0.55%"
    c.style.left="44.1%"
    c.style.top="55.2%"

    setTimeout(function(){
      pipettebeak.style.transitionDuration="0s"
      pipettebeak.style.visibility="hidden"
      c.style.visibility="hidden"

      j.style.visibility="visible";
      j.style.width="1.05%"
      j.style.left="61.6%"
      j.style.top="29.18%"
      },1000)

    setTimeout(function(){
      j.style.transitionDuration="1s"
      j.style.transform="translate(-1690%,-50%)"
    },2000)

    setTimeout(function(){
      j.style.transform="translate(-100%,-50%)"
    },3000)

    setTimeout(function(){
      j.style.transform="translate(-100%,0%)"
    },4000)

    setTimeout(function(){
      pipettebeak.style.left="34.2%"

      c.style.visibility="visible"
      c.style.width="0.55%"
      c.style.left="60.75%"
      c.style.top="55.2%"
    },5000)

    setTimeout(function(){
      pipettebeak.style.transitionDuration="0s"
      pipettebeak.style.visibility="visible"

      j.style.transitionDuration="0s"
      j.style.visibility="hidden"
      middleTLCchamber1.style.visibility="visible"
      middleTLCchamber1.style.opacity="100%"
      c.style.visibility="hidden"
      c.style.opacity="0%"
    },6000)

    setTimeout(function(){
      pipettebeak.style.transitionDuration="1s"
      pipettebeak.style.transform="translate(113%,-920%) rotate(90deg)"
    },7000)

    setTimeout(function(){
      pipettebeak.style.transform="translate(113%,-1700%) rotate(90deg)"
    },8000)

    setTimeout(function(){
      pipettebeak.style.transform="translate(-70%,-1700%) rotate(90deg)"
    },9500)

    setTimeout(function(){
      pipettebeak.style.transform="translate(-70%,-700%) rotate(90deg)"
    },10500)

    setTimeout(function(){
      pipettebeak.style.transform="translate(-70%,-60%) rotate(0deg)"
      arrow.style.top="51%"
      arrow.style.rotate="180deg"
      arrow.style.left="30.5%"
      arrow.style.visibility="visible";
       f=15;
      update();
    },11500)
    setTimeout(()=>{
      arrow.classList.add("blink");
    },12500)
    f=15000
    
  }
 }
 
function ruler(){
  if(f==7){   
    arrow.style.visibility="hidden"             
    arrow.classList.remove("blink");
    m.style.transform="translate(-310%,0%)";        

    setTimeout(function(){
      m.style.transform="translate(-310%,-27.7%) rotate(-90deg)";  
      f=8
      update();
      arrow.style.visibility="visible" 
      arrow.style.left="26.5%"
      arrow.style.top="54%"
      setTimeout(()=>{
        arrow.classList.add("blink");
      },500)
  
    },2000)
     f=8000;
  }

  else if(uld==0){
    // setTimeout(function(){
    m.style.transitionDuration="1.8s"
    l.style.transitionDuration="1.7s"

    //  l.style.transform="translate(75%,-61.5%) rotate(20deg)"     
      m.style.transform="translate(-310%,-64.9%) rotate(-90deg)" 
   // },1000)                                                    
      uld=1;
      update();
  }

  else if(f==24){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    m.style.transform="translate(-265%,0%)";   
    setTimeout(function(){
      base1.innerText="5"
      base2.innerText="5"
      base3.innerText="5"
      base4.innerText="5"
      arrow.style.visibility="visible";
      arrow.style.rotate="-90deg";
      arrow.style.top="40%"
      arrow.style.left="24%" 
      f=25;
      update();
    },2500)
    setTimeout(()=>{
      arrow.classList.add("blink");
    },3500)
    f=25000;
  }

  else if(f==25){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    m.style.top="40%"
    setTimeout(function(){
    c1.innerText="1"
    arrow.style.visibility="visible";
    arrow.style.rotate="-90deg";
    arrow.style.top="40%"
    arrow.style.left="24%" 
    f=26;
    update();
    },1500)
    setTimeout(()=>{
      arrow.classList.add("blink");
    },2500)
    f=26000;
  }

  else if(f==26){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    m.style.top="32%"
    setTimeout(function(){
      c2.innerText="2.3"
      arrow.style.visibility="visible";
      arrow.style.rotate="-90deg";
      arrow.style.top="40%"
      arrow.style.left="24%"
      f=27;
      update();
      },1500)
      setTimeout(()=>{
        arrow.classList.add("blink");
      },2500)
      f=27000;
  }

  else if(f==27){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    m.style.top="27.5%"
    setTimeout(function(){
      c3.innerText="3.4"
      arrow.style.visibility="visible";
      arrow.style.rotate="-90deg";
      arrow.style.top="40%"
      arrow.style.left="24%"
      f=28;
      update();
      },1500)
      setTimeout(()=>{
        arrow.classList.add("blink");
      },2500)
      f=28000;
  }

  else if(f==28){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    m.style.top="25%"
    setTimeout(function(){
      c4.innerText="3.9"
      arrow.style.top="81%"
      arrow.style.rotate="90deg"
      arrow.style.left="86.5%"
      arrow.style.visibility="visible";
      uld=3;
      f=29;
      update();
      },1500)
      setTimeout(()=>{
        arrow.classList.add("blink");
      },2500)
      f=29000;
  }
}

 function draw(){
  if(f==8){
    arrow.style.visibility="hidden"             
    arrow.classList.remove("blink");
     l.style.transform="translate(75%,-15%) rotate(20deg)"; 
  
     setTimeout(function(){
      l.style.transform="translate(113%,-15%) rotate(20deg)"  
      line.style.opacity="100%"
      line.style.backgroundColor="black";
      l.style.transitionTimingFunction="ease-in-out";
     },3000)

/* new changes setTimeout(function(){
    l.style.transform="translate(75%,-61.5%) rotate(20deg)"     
    m.style.transform="translate(-310%,-63.3%) rotate(-90deg)" 
  },5000)                                                    

  setTimeout(function(){
    l.style.transform="translate(113%,-61.5%) rotate(20deg)"     
    line1.style.opacity="100%"
    line1.style.backgroundColor="black";
    l.style.transitionTimingFunction="ease-in-out";

  },7000)*/

  setTimeout(function(){
    l.style.transform="translate(0%,0%) rotate(0deg)"
    m.style.transform="translate(0%,0%) rotate(0deg)"
  },5000)

  setTimeout(function(){
    f=99
    update();
    popbutton1.style.visibility="visible";
    backgray.style.visibility="visible";
    setTimeout(()=>{
      arrow.classList.add("blink");
    },500)
  },6500)
   f=99000
  }

  else if(uld==1){
    l.style.transform="translate(75%,-64.8%) rotate(20deg)";
    setTimeout(function(){
      l.style.transform="translate(113%,-64.8%) rotate(20deg)"     
      line1.style.opacity="100%"
      line1.style.visibility="visible"
      line1.style.backgroundColor="black";
      l.style.transitionTimingFunction="ease-in-out";
  
    },1600)

    setTimeout(function(){
      l.style.transform="translate(0%,0%) rotate(0deg)"
      m.style.transform="translate(0%,0%) rotate(0deg)"
    },2700)
    
    setTimeout(()=>{
      redb.style.visibility="visible";
      redb.classList.add("blink");
    },3500)

    setTimeout(function(){
      dryslide.style.opacity="100%"
      dryslide.style.visibility="visible"
      dryslide.style.transitionDuration="ease-in-out"
      redb.style.visibility="hidden";                
      redb.classList.remove("blink"); 
      update(); 
      uld=2;
    },7500)

    arrow.style.rotate="90deg";                   //this is commented newly
    arrow.style.visibility="visible";
      arrow.style.top="81%"
      arrow.style.left="86.5%"
      setTimeout(() => {
        update();
        arrow.classList.add("blink");
      }, 1000);
  }
}

 function mov(){
  if(f==10){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    pen.style.transform="translate(0%,-20%) rotate(60deg)"

    setTimeout(function(){
       pen.style.transform="translate(0%,-80%) rotate(60deg)"
    },1000)

    setTimeout(function(){
      pen.style.transform="translate(49%,-80%) rotate(60deg)" 
    },2000)

    setTimeout(function(){
      linedot.style.transitionDelay="1s"
      linedot.style.opacity="100%";
      pen.style.transform="translate(49%,-40%) rotate(60deg)"
    },3000)

    setTimeout(function(){
      pen.style.transform="translate(0%,0%) rotate(0deg)"
    },5000)

    setTimeout(function(){
      f=11
      update();
      arrow.style.visibility="visible";
      arrow.style.top="81%"
      arrow.style.left="86.5%"
      setTimeout(() => {
        arrow.classList.add("blink");
      }, 1000);
      
    },6000)
    f=11000;
  }
 }

 function horizon(){
  if(f==18){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    hd1.style.transitionDuration="0s";
    hd1.style.visibility="hidden";
    ss.style.visibility="visible";
    arrow.style.top="62%"
    arrow.style.left="29%"
    arrow.style.rotate="90deg"
    arrow.style.visibility="visible";
    setTimeout(() => {
      arrow.classList.add("blink")
    },2000);
    f=19;
    update();
  }
 }

  function holdfor(){
  if(f==19){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    z.style.transform="translate(0%,-47%)";
    setTimeout(function(){
      z.style.transform="translate(53%,-47%)";
    },1000)
  
    setTimeout(function(){
      ss.style.transform="translate(0%,-145%)"
      z.style.transform="translate(53%,-119%)"
    },3500)
   
    setTimeout(function(){
      ss.style.transform="translate(478%,-145%)"
      z.style.transform="translate(105%,-119%)"
    },5500)

    setTimeout(function(){
      ss.style.transform="translate(478%,5%)" 
      z.style.transform="translate(98%,-58%) rotate(-60deg)"
    },7500)

    setTimeout(function(){
      z.style.transform="translate(105%,-110%) rotate(0deg)"
    },10000)

    setTimeout(function(){
      z.style.transform="translate(15%,-110%) rotate(0deg)"
    },12000)

    setTimeout(function(){
      z.style.transform="translate(15%,0%) rotate(0deg)"
      arrow.style.top="58%"
      arrow.style.left="80%"
      arrow.style.rotate="-90deg"
      arrow.style.visibility="visible";
      f=20;
      update();
    },13500)
    setTimeout(() => {
      arrow.classList.add("blink")
    },14500);
     f=20000;
  }

  else if(f==22){
    arrow.style.visibility="hidden";                
    arrow.classList.remove("blink"); 
    setTimeout(function(){
      z.style.transform="translate(15%,-80%)"  
    },1000)

    setTimeout(function(){
      z.style.transform="translate(98%,-80%)" 
    },2000)

    setTimeout(function(){
      z.style.transform="translate(98%,-60%) rotate(-60deg)"
    },3000)
     
    setTimeout(function(){
      ss.style.transform="translate(478%,-145%)"
      z.style.transform="translate(100%,-117%)"  
    },6000)

    setTimeout(function(){
      ss.style.transform="translate(0%,-145%)"
      z.style.transform="translate(50%,-117%)"
    },8000)

    setTimeout(function(){
      z.style.transform="translate(50%,-47%)";
      ss.style.transform="translate(0%,0%)"
     },9500)

      setTimeout(function(){
        ss.style.transitionDuration="0s"
        ss.style.visibility="hidden"
        hd2.style.visibility="visible"
        z.style.transform="translate(5%,-47%)";
     },12000)

    setTimeout(() => {
      z.style.transform="translate(5%,-47%)";
    },13000);

     setTimeout(function(){
        z.style.transform="translate(0%,0%)";
        arrow.style.top="81%"
        arrow.style.rotate="90deg"
        arrow.style.left="86.5%"
        arrow.style.visibility="visible";
        f=23;
        update();
      },14000)

      setTimeout(()=>{
        arrow.classList.add("blink");
      },15000)
  }
  f=23000;
  }
  
  const redb = document.querySelector(".redb");              
  setTimeout(() => {
    //arrow.classList.remove("blink");                             only settimeout bracket should be there
  });


  const arrow = document.querySelector(".arrow");              
   setTimeout(() => {
     //arrow.classList.remove("blink");                             only settimeout bracket should be there
   });
     
  function openPopup() {
    if(f==99){
      document.getElementById("myPopup").style.display = "block";
    }
  }
  
  function closePopup() {
    document.getElementById("myPopup").style.display = "none";
    backgray.style.visibility="hidden";
      popbutton1.style.visibility="hidden";
      f=9;
        arrow.style.visibility="visible";
        arrow.style.top="81%"
        arrow.style.left="86.5%"
    setTimeout(()=>{
      arrow.classList.add("blink");
    },1000)

  }
  
  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    const correctAnswer = "7ml";
  
    if (selectedAnswer === correctAnswer) {
      alert("Correct!");
    } else {
      alert("Wrong! The correct answer is 7ml.");
    }
  
    closePopup();
  }

const openButton = document.getElementById('factbutton');
const popup = document.getElementById('popup');
const typingText = document.getElementById('typing-text');

function autotype(){
  factbutton.style.visibility="hidden"
  popup.style.display = 'block'; // Show the popup
  
  typeText('Chromatography was first devised at the University of Kazan by the Italian-born Russian scientist ,Mikhail Tsvet in 1900. !');
  update();
  closefactb.style.visibility="visible"
}

function typeText(text) {
  let i = 0;
  const interval = setInterval(() => {
    typingText.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
    }
  }, 75); // Adjust the interval for typing speed
}

function closefact(){
  popup.style.display="none"
  backgray.style.visibility="hidden"
  closefactb.style.transitionDuration="0s"
  closefactb.style.visibility="hidden"

  beaker0middle.style.visibility="hidden"
  pipettebeak.style.transitionDuration="0s"
  pipettebeak.style.visibility="hidden"
  beaker0back.style.transitionDuration="0s"
  beaker0back.style.visibility="hidden"
  beaker0front.style.transitionDuration="0s"
  beaker0front.style.visibility="hidden"
 
  hd1.style.transitionDuration="0s"
  hd1.style.visibility="visible"
  forcepsmov.style.visibility="visible"

   i.style.transitionDuration="0s"
   i.style.visibility="hidden"
   f=17;
   update();
   arrow.style.top="47%"
   arrow.style.left="66%"
   arrow.style.rotate="-90deg"
   arrow.style.visibility="visible";
   setTimeout(() => {
     arrow.classList.add("blink")
   },1500);

}

submitButton.disabled = false; // Initially disable submit button

  // Function to check if all inputs in the table are filled
  function areAllInputsFilled() {
    const inputs = utable.querySelectorAll('input');
    return !Array.from(inputs).some(input => input.value === '');
  }
  
  // Event listener for submit button click (can be changed to other events)
  submitButton.addEventListener('click', () => {
    if (areAllInputsFilled()) {
      first.disabled=true;
      second.disabled=true;
      third.disabled=true;
      fourth.disabled=true;
      submitButton.disabled =true; 
      d1.innerText="0.2"
      d2.innerText="0.46"
      d3.innerText="0.68"
      d4.innerText="0.78"
      update();
      //f=30;
      uld=4;
      alert('All inputs are filled!');
    } else {
      alert('Please fill in all required fields.');
    }
  });

  const mediaQuery = window.matchMedia('(min-width: 768px)');

// Check the initial state (optional)
if (mediaQuery.matches) {
  // Code to execute when the media query applies initially
}
