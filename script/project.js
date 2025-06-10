
var hmessage=["उपकरणों पर माउस ले जा कर उनसे स्वयं को परिचित कराएं.....फिर प्रयोग शुरू करने के लिए आगे बटन पर क्लिक करें",
"मुख्य स्विच चालू करें",
"कंडक्टोमीटर पर पावर बटन दबाएं",
"फ़ंक्शन नॉब घुमाएँ और सेल-कॉन्स्ट मोड पर सेट करें",
"सेल स्थिरांक सेट करने के लिए सेल-कॉन्स्ट नॉब घुमाएँ",
"फ़ंक्शन नॉब घुमाएँ और MHOS मोड पर वापस सेट करें",
"अब आसुत जल द्वारा चालकता सेल को साफ करें",
"अब चालकता सेल को अलग-अलग सांद्रता वाले प्रत्येक सोडियम क्लोराइड घोल में एक-एक करके डुबोएं",
"सटीक माप के लिए संतुलन स्थापित करने के लिए चालकता सेल को कुछ समय के लिए घोल में डुबोकर छोड़ दें",
"कंडक्टोमीटर की स्क्रीन पर दिखाई गई प्रत्येक रीडिंग को नोट करें",
"प्रत्येक हाइड्रो क्लोरिक एसिड घोल के लिए रीडिंग लिखें",
"सटीक माप के लिए संतुलन स्थापित करने के लिए चालकता सेल को कुछ समय के लिए घोल में डुबोकर छोड़ दें",
"कंडक्टोमीटर की स्क्रीन पर दिखाई गई प्रत्येक रीडिंग को नोट करें",
"सोडियम एसीटेट घोल के लिए रीडिंग लिखें",
"सभी रेटिंग, मान और गणना देखने के लिए observations बटन दबाएँ"]

var message=["Make yourself familiar with the insturments by hovering over them, then click on start button to start the experiment",
"Turn on the main switch",
"Press the power button on conductometer",
"Rotate FUNCTION knob and set on CELL-CONST mode",
"Rotate CELL-CONST knob to set cell constant",
"Rotate FUNCTION knob and set back on MHOS mode",
"Now clean the conductivity cell by Distilled water",
"Now dip conductivity cell in each sodium chloride solution of different concentration one by one",
"leave conductivity cell dipped in solution for some time to establish equilibirium for accurate measurement",
"Note down every reading shown on conductometer's screen",
"Write down readings for each Hydro Chloric acid solution",
"leave conductivity cell dipped in solution for some time to establish equilibirium for accurate measurement",
"Note down every reading shown on conductometer's screen",
"Write down readings for Sodium acetate solution",
"press observations button to see all readings, values and calculations"]


let startlab = document.querySelector("#startinglab")
let startlab2 = document.querySelector("#workinglab")
let startbutton = document.querySelector("#start")
let ins = document.querySelector("#text")
let stp12 = document.querySelector("#stp12")
let stp13 = document.querySelector("#stp13")
let tablesdiv = document.querySelector("#tablesdiv")
let inftext = document.querySelector("#inftext")
let stp23 = document.querySelector("#stp23")
let stp33 = document.querySelector("#stp33")

let stp15 = document.querySelector("#stp15")
let stp63 = document.querySelector("#stp63")
let stp32 = document.querySelector("#stp32")
let stp70 = document.querySelector("#stp70")
// let statuses = 0;
let f=0;
// let trial=1;

function start(){
    console.log("hello world")
     if(f === 0){
        startlab.style.visibility="hidden"
    //    statuses = 1;
        startbutton.style.visibility="hidden"
       f=1;
        ins.innerText="Click on The pipette to measure 10 ml of h2so4 solution"
        pipette1();
  
    }
    // else if(f===1){
    //     stp23.style.visibility="hidden";
    //     startlab.style.visibility="hidden";
    //      stp12.style.visibility = "visible";
    //      stp13.style.visibility = "visible";
    //     stp15.style.visibility = "hidden";
    //     stp33.style.visibility = "hidden";
    //     stp32.style.visibility = "hidden";
    //      stp63.style.visibility = "hidden";
    //       stp70.style.visibility = "visible"; 
    //     startbutton.style.visibility="hidden"
    //     f=1
    //     ins.innerText="Click the pipette to draw 10ml h2so4."
    // }
    else if(f===100){
        pipette5();
        stp12.style.visibility="hidden";
           stp12.style.opacity ="0%";
       stp70.style.visibility = "visible";
       stp70.style.opacity = "100%";
        startbutton.style.visibility="hidden"
       
        ins.innerText=" Click on the iso amyl cap to open it "
    }
    // if(f===150){
    //         console.log("Calling waterbath1() now");
    //     waterbath1();
    //     // stp12.style.visibility="hidden"
    //      stp13.style.visibility="hidden"
    //      stp63.style.visibility = "hidden"
         
     
    //     startbutton.style.visibility="hidden"
    //     // observer()
    //     // deslid=lid4
    //     // petridish=petri1
    //     // pbread=pbread1
    //     // petrileft="39.5%"
    //     // pbreadleft="39.5%"
    //     // st3="Click on dessicator S1's lid to open it and take out the sample"
    //     // ins.innerText=st3

    // }
    // else if(f==300){
    //        centrifuge();   
    //     // stp12.style.visibility = "hidden"
    //     stp13.style.visibility = "hidden"
    //     stp63.style.visibility = "hidden"
    //     stp23.style.visibility="hidden"
    //     startbutton.style.visibility="hidden"
    //     stp23.style.visibility = "hidden"

        
    //     // deslid=lid4
    //     // petridish=petri1
    //     // pbread=pbread1
    //     // petrileft="39.5%"
    //     // pbreadleft="39.5%"
    //     // st3="Click on dessicator S1's lid to open it and take out the sample"
    //     // ins.innerText=st3
    //     // f=200
    // }
    // else if(f==400){
    //     //   stp12.style.visibility = "hidden"
    //        stp15.style.visibility = "hidden"
    //         stp32.style.visibility = "hidden"
    //         stp23.style.visibility = "visible";
    //     // startbutton.style.visibility="hidden"
    //     // observer()
    //     // tablesdiv.style.opacity="100%"
    //     // f=500
    //     // setTimeout(function(){
    //     //     ins.innerText="Click 'Inference' button to see the experiment Outcome"
    //     //     startbutton.innerText="Inference"
    //     //     startbutton.style.visibility="visible"
    //     // },5000)
    // }
    // else if(f==500){
    //     // observe.style.visibility="visible"
    //     // observe.style.opacity="100%"
    //     // obtext.style.top="5%"
    //     // obtext.style.left="40%"
    //     // obtext.style.fontSize="5vw"
    //     // startbutton.style.visibility="hidden"
    //     // obtext.innerText="Inference"
    //     // tablesdiv.style.opacity="0%"
    //     // setTimeout(function(){
    //     //     inftext.style.opacity="100%"
    //     //     tablesdiv.style.visibility="hidden"
    //     // },2000)
    // }
}



