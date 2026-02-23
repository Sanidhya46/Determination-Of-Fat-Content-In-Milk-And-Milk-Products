
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
let Set = document.querySelector("#Set")
let stp15 = document.querySelector("#stp15")
let stp63 = document.querySelector("#stp63")
let stp32 = document.querySelector("#stp32")
let stp70 = document.querySelector("#stp70")
let stp1000 = document.querySelector("#stp1000")
let pipettesol = document.querySelector("#pipettesol")

let rpmLabel = document.querySelector("#rpmLabel")



let sulphuric = document.querySelector("#sulphuric")
let stp171 = document.querySelector("#stp171")

// let statuses = 0;
let f=1000;
// let trial=1;
console.log("value of f is", f)
startbutton.style.visibility="hidden"

start();

function start(){
    console.log("hello world")
    if(f === 1000){
      f = 1001;
        console.log(f)
              stp23.style.visibility="hidden";
              sulphuric.style.display = "none";
        startlab.style.visibility="hidden";
         stp12.style.visibility = "hidden";
         stp13.style.visibility = "hidden";
         
        stp15.style.visibility = "hidden";
        stp33.style.visibility = "hidden";
        stp32.style.visibility = "hidden";
         stp63.style.visibility = "hidden";
          stp70.style.visibility = "hidden";
        startbutton.style.visibility="hidden"

        
    } else if(f === 0){

        startlab.style.visibility="hidden"
        stp1000.style.visibility = "hidden"
        sulphuric.style.display = "block";
    //    statuses = 1;
        startbutton.style.visibility="hidden"
        stp12.style.visibility = "visible"
        stp63.style.visibility = "visible"
        stp15.style.visibility = "visible"
        pipette.style.visibility = "visible"
        pipettesol.style.visibility = "visible"
        yb.style.visibility = "visible"
       f=1;
       console.log("just after f = 1" , f)
       pipette1();
        ins.innerText="Click on The pipette to draw 10 mL of H₂SO₄ solution"
       
  
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
          
        ins.innerText=" Click on the cap of isoamyl alcohol bottle to open it"
    }
    else if(f===150){
            console.log("Calling waterbath1() now");
        // waterbath1();
        // stp12.style.visibility="hidden"
         stp13.style.visibility="hidden"
         stp63.style.visibility = "hidden"
      
            stp70.style.visibility = "hidden"
            stp70.style.opacity = "0%";
          startbutton.style.visibility="hidden"
           stp993.style.visibility = "visible";
           stp993.style.opacity =  "100%";
           timerDisplay23.style.visibility = "visible"
           straight_butyrometer_amyl.style.opacity = "0%";
         pipette.style.visibility = "hidden"
        startbutton.style.visibility="hidden"
         stp23.style.visibility="hidden"
         ins.innerText = "Click ON button of the water bath"
      

    }
    else if(f===300){
        
        // stp12.style.visibility = "hidden"
        stp13.style.visibility = "hidden";
        stp63.style.visibility = "hidden";
        stp23.style.visibility="hidden";
        startbutton.style.visibility="hidden";
      stp32.style.visibility = "visible";
           stp993.style.visibility = "hidden";
            straight_butyrometer3.style.visibility =  "hidden";
              stp33.style.visibility = "visible";
      
       timerDisplay33.style.visibility = "visible"
        ins.innerText = "Click on the pipette to draw 21.75 mL water and pour it into the another butyrometer"
        clock1.style.display = "none";
        clock1.style.visibility = "hidden"
        clock.style.display = "none"
        clock.style.visibility = "hidden"
        timerDisplay33.style.visibility = "hidden"
        
    }else if(f===400){
        
        console.log("f in project js is ", f)
        stp13.style.visibility = "hidden";
        stp63.style.visibility = "hidden";
        rpmLabel.style.display = "none";
        timeDisplay.style.display = "none";
        rpmDisplay.style.display = "none";
        startbutton.style.visibility="hidden";
        startbutton.style.opacity = "0%"
      stp32.style.visibility = "visible";
           stp32.style.display = "none"
            straight_butyrometer3.style.visibility =  "hidden";
              stp33.style.visibility = "hidden";
              stp33.style.display = "none"
              ins.innerText = "Click on the butyrometer to take out from the water bath and put in the stand"
          stp171.style.visibility= "visible"
          timelabel.style.visibility = "hidden"
          f = 400.2
    }else if(f===400.5){
    
      stp23.style.visibility = "hidden"
      stp993.style.visibility = "hidden"
      startbutton.style.visibility = "hidden"
      ins.innerText = "Click on butyrometer to see the percent fat content present in the sample"
      f = 401;
      waterbath_front4.style.visibility = "hidden"
      waterbath_front4.style.display = "none"
          finalresult();
    }
 
}




























const sc = document.querySelector('#sulcap');
const sb = document.querySelector('#sulphuric');
const ss = document.querySelector('#sulphuricsol');
const yb = document.querySelector('#yellow_black');
// const pipette = document.querySelector('#pipette-container')
const pipette = document.getElementById('pipette');
const pm = document.querySelector('#pipette_milk');
const sol = document.querySelector('#water-solution')
const stand = document.querySelectorAll('#butyrometer_with_stand')
const bAcid = document.querySelector('#butyrometer_liquid');
const wm = document.querySelector('#white_milk');
const mb = document.querySelector('#milk-beaker');
const mbOv = document.querySelector('#milk-beaker-overlay');

const finalSol = document.querySelector('#brown_butyrometer_sol');

const amyldrop1 = document.querySelector('#amyl_drop1');
const amyldrop2 = document.querySelector('#amyl_drop2');
const pe2 = document.querySelector('#pipette');
const psol = document.querySelector('#pipettesol');
let isocap = document.querySelector("#iso_cap")

let isoamylsol = document.querySelector("#iso_amyl_sol")
let pipetteamyl = document.querySelector("#pipette_amyl")

const straight_butyrometer_amyl = document.querySelector("#straight_butyrometer_amyl")
const butyrometer = document.querySelector("#butyrometer")
let m100 = document.querySelector("#m100")
const tilted_butyrometer = document.querySelector("#tilted_butyrometer_amyl")

console.log("stp1");

const iso = document.querySelector('#iso');
const Cork = document.querySelector('#butyrometer_cork');
const tiltedsol = document.querySelector('#tiltedsol');




let changeins = "Click the pipette to draw 10 ml of H₂SO₄ solution."
let changeins1 = "Click on pipette again to pour H₂SO₄ solution to butyrometer" 
let changeins2 = "Click on the pipette to draw 10.75 ml of milk."
let changeins3 = "Click on the pipette to transfer the milk to the butyrometer."
let changeins4 = "Click on the cap of isoamyl alcohol bottle to open it"
let changeins5 = "Click on the pipette to draw 1 ml of isoamyl alcohol" 
let changeins6 = "Click on the pipette to transfer the amyl alcohol."
let changeins7 = "Click on the stopper to firmly close the butyrometer."
let changeins8 = "Click on the butyrometer to shake it just to mix the content thoroughly"
let changeins9 = "Click on butyrometer to shake gently."
let changeins10 = "Click on butyrometer to replace in stand"
let changeins11 = "Click on the NEXT button"


let ssolheight="15%"
let msolheight="27%"
let psolheight="4.8%"
let psolbottom="45.3%"
let psolbottom1="58.5%"
let psolleft="12.30%"
let pipetteleft="71.3%"



sb.style.opacity = "100%";
sb.style.visibility = "visible"


pipette1() 
function pipette1() {
  
  console.log("pipette function is running ...")
    if (f === 1) {
        f = 2; // Move to the next step so this function doesn't run again unintentionally
        console.log("pipette");
      pipette.addEventListener("click", function () {
        if(f==2){
            
        // ins.innerText = "Click the pipette to draw 10 ml of H₂SO₄ solution"
        // Reset rotation of pipette
        pipette.style.rotate = "0deg";

        // Step 1: Lift pipette vertically
        pipette.style.transform = "translate(0%,-150%)";
        sc.style.transform = "translate(0%,-50%)"; // Lift shadow/container

        setTimeout(function () {
            // Step 2: Move pipette horizontally over the butyrometer
            pipette.style.transform = "translate(40%,-150%)";
            sc.style.transform = "translate(50%,-50%) rotate(60deg)"; // Tilt pipette

            setTimeout(function () {
                // Step 3: Lower the pipette down to simulate insertion
                pipette.style.transform = "translate(40%,-65%)";

                setTimeout(function () {
                    // Step 4: Begin pouring - show solution animation
                    // psol.style.height = psolheight;
                    psol.style.opacity = "100%"
                    ss.style.height = ssolheight;

                    setTimeout(function () {
                        // Step 5: Lift pipette back up after pouring
                             //  x% of width to the right, y%to the down
                        pipette.style.transform = "translate(38.6%,-176%)";
                        psol.style.bottom = psolbottom1; // Adjust position of poured solution
                        ins.innerText = changeins1;
                         document.getElementById('pipette').onclick = pipette2;
                        f = 3;
                    
                     }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }else{console.log("nothing2")}}
)}else{console.log("nothing")}};


function pipette2() {
    console.log("pipette2");
    if (f === 3) {
        f = 4;

        // Example Step 6: Return pipette to origin or do more logic
            setTimeout(function () {
                            // Step 6: Return pipette and shadow/container to original position
                            sc.style.transform = "translate(0%,-50%) rotate(0deg)";
                            pipette.style.left = pipetteleft; // Move out of view to left
                            psol.style.left = "74.0%"; // Adjust left position of solution

                            setTimeout(function () {
                                // Step 7: Tilt pipette to resting angle
                                pipette.style.transform = "translate(38.6%,-125%) rotate(0deg)";
                                sc.style.transform = "translate(0%,0%)"; // Reset shadow/container
                                // psol.style.rotate = ; // Rotate solution for visual consistency
                                psol.style.bottom = "38%" // Adjust bottom for new position
                                // psol.style.left = "2%";
                                  
                                setTimeout(function () {
                                    // Step 8: Hide the solution from pipette and show main solution in measuring cylinder
                                    // psol.style.height = "0%";
                                    // psol.style.opacity = "0%"; // Hide the previous solution
                                    bAcid.style.visibility = "visible";
                                    bAcid.style.height = "25.85%"; // Show solution in measuring cylinder
                                    // psol.style.left = "9.1;
                                    bAcid.style.transform = "scaleY(1)";
                                    bAcid.style.opacity = "80%"
                                    sol.style.opacity = "100%";
                                    psol.style.opacity = "0%"
                                    setTimeout(function () {
                                        // Step 9: Return pipette to original position
                                        pipette.style.transform = "translate(0%,-180%)";
                                        sol.style.opacity = "0%";

                                        setTimeout(function () {
                                            pipette.style.left = "20%"
                                            pipette.style.transform = "translate(0%,0%) rotate(-90deg)"; // Move it back up vertically
                                            
                                            setTimeout(function () {
                                                
                                                pipette.style.transform = "translate(0%,-150%) rotate(deg)"; // Bring pipette to rest position
                                                
                                                ins.innerText = changeins2;
                                                document.getElementById('pipette').onclick = pipette3;

                                                // pipette.style.rotate = "90deg"; // Lay pipette down
                                                // psol.style.left = "20.9%"; // Reset solution position
                                                // psol.style.rotate = "0deg";
                                                // psol.style.bottom = "13%";
                                                // psol.style.opacity = "100%";

                                                // setTimeout(function () {
                                                //     f = 2; // Confirm the step is complete
                                                //     ins.innerText = changeins; // Update instruction message
                                                // }, 1000);
                                                f=5;
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
    }else{console.log("ghnta")}
}

function pipette3() {
    if (f === 5) {
        f = 6;
    //    ins.innerText = changeins2;

        // Step 1: Move pipette to milk beaker (around 70px right from H₂SO₄ ≈ 52%)
      
        pipette.style.transform = "translate(607%,-150%)";

        setTimeout(() => {
            // Step 2: Lower pipette into milk beaker
            // pipette.style.transform = "translate(52%,-50%)";
            pipette.style.transform = "translate(607%,-82%) ";

            setTimeout(() => {
                // Step 3: Show milk inside pipette and hide milk overlay in beaker
                pm.style.opacity = "100%";
                
                mbOv.style.height =  "16%";

                // Step 4: Lift pipette up with milk
                
   
                setTimeout(() => {
                    pipette.style.transform = "translate(607%,-135%) ";
                    // pipette.style.transform = "translate(40%,-135%) ";
                    pm.style.bottom = "45%"; 
                    ins.innerText = changeins3;
                    document.getElementById('pipette').onclick = pipette4;
                    // Step 5: Move pipette to butyrometer area
                    // pipette.style.transform = "translate(38.6%,150%)";
                    f=7;
                    
                }, 1000);
            }, 1000);
        }, 1000);
    
}
}


function pipette4() {
    if (f === 7) {
        f = 8;
    //    ins.innerText = changeins2;
       
        // Step 1: Move pipette to milk beaker (around 70px right from H₂SO₄ ≈ 52%)
      
        pipette.style.transform = "translate(607%,-180%) ";
              pm.style.bottom = "64%"; 
             pm.style.opacity = "100%";
           
        setTimeout(() => {
            // Step 2: Lower pipette into milk beaker
            // pipette.style.transform = "translate(52%,-50%)";
             pipette.style.transform = "translate(1506%,-180%) ";
             pm.style.left= "74%";

            setTimeout(() => {
                // Step 3: Show milk inside pipette and hide milk overlay in beaker
                pm.style.opacity = "100%";
                
                mbOv.style.height =  "16%";

                // Step 4: Lift pipette up with milk
                
   
                setTimeout(() => {
                    pipette.style.transform = "translate(1506%,-122%) ";
                    // pipette.style.transform = "translate(40%,-135%) ";
                    pm.style.bottom = "39%"; 
                   
                    
                
                   setTimeout(() => {
                    wm.style.height = "23.5%";
                    wm.style.opacity = "100%";
                    setTimeout(() => {
                        pm.style.opacity = "0%";
                        wm.style.opacity = "0%";
                        bAcid.style.opacity= "80%";
                        bAcid.style.opacity= "40%";
                     pipette.style.transform = "translate(1506%,-180%) ";
                    yb.style.opacity = "1";
                    setTimeout(() => {
                         bAcid.style.opacity= "0%"
                        finalSol.style.opacity = '100%';
                         pipette.style.transform = "translate(0%,0%) rotate(-90deg) ";
                    ins.innerText="click on NEXT button"
                                    startbutton.style.visibility="visible"
                                    startbutton.innerText="Next"
                                
                       
                        f=100;
                          

                }, 1000);

                    
                }, 1000);

                    
                }, 1000);
                    
                }, 1000);
            }, 1000);
        }, 1000)
    
}
}

function pipette5() {
    console.log("pipette 5 is runnning")
    if (f === 100) {
        f = 101;
             console.log("pipette 5  condiiton is runnning")
             Cork.style.visibility = "visisble";
             Cork.style.opacity = "100%";
        ins.innerText = changeins4; // "Click on the amyl alcohol bottle cork to open it."
        iso.style.visibility = "visible";
        // isocap.style.visibility = "visible";
        // isoamylsol.style.visibility = "visible";
        yb.style.opacity = "0%";
        Cork.style.opacity = "100%";
         isocap.addEventListener("click", function () {
           if (f === 101) {
        f = 102;
    setTimeout(function () {
        isocap.style.transform = "translate(0%,-150%)";
         
        setTimeout(function () {
         isocap.style.transform = "translate(160%,-150%)";
             setTimeout(function () {
         isocap.style.transform = "translate(160%,  500%)";
         ins.innerText = changeins5;
           pipette.addEventListener("click", function () {
                  if (f === 102) {
        f = 103;
                  setTimeout(function () {
            pipette.style.rotate = "0deg";
            pipette.style.transform = "translate(0%,-150%)";
            sc.style.transform = "translate(0%,-50%)";
                      setTimeout(function () {
           
            pipette.style.transform = "translate(0%,-150%)";
            
                        setTimeout(function () {
           
            pipette.style.transform = "translate(0%,-100%)";
              psol.style.visibility = "visible";
              
              setTimeout(function () {
           
            
              
              isoamylsol.style.height = "19%";
       
              pipetteamyl.style.opacity = "100";

               setTimeout(function () {
           
            pipette.style.transform = "translate(0%,-150%)";
              pipetteamyl.style.bottom = "51%";
                            setTimeout(function () {
           
            pipette.style.transform = "translate(0%,-180%)";
            pipetteamyl.style.bottom = "63.5%";
              
              
                                     setTimeout(function () {
           
            pipette.style.transform = "translate(1506%,-180%)";
            pipetteamyl.style.left = "74.1%";
               setTimeout(function () {
           
            pipette.style.transform = "translate(1506%,-170%)";
            pipetteamyl.style.bottom = "57.9%";
            
              
              setTimeout(function () {
             amyldrop1.style.opacity = "100%";
            
            pipetteamyl.style.height = "3%";
            
              setTimeout(function () {
             
            amyldrop1.style.bottom = "54%"
            pipetteamyl.style.height = "0%";
            
              
              setTimeout(function () {
             
            amyldrop2.style.opacity = "100%";
              amyldrop2.style.bottom = "40%";
              amyldrop1.style.opacity = "0%";
            pipetteamyl.style.height = "0%";
            
              setTimeout(function () {
             
          
            
            // pipetteamyl.style.height = "0%";
            pipetteamyl.style.opacity = "0%";
              
              setTimeout(function () {
             
            amyldrop2.style.opacity = "0%";
            amyldrop1.style.opacity = "0%";
            
            pipetteamyl.style.height = "0%";
            
              
              setTimeout(function () {
             
           
            // pipetteamyl.style.height = "0%";
            
               pipette.style.transform = "translate(1506%,-170%)";
              
              
               setTimeout(function () {
             
           
            // pipetteamyl.style.height = "0%";
            
               pipette.style.transform = "translate(0%, 0%) rotate(-90deg)";
              
       
                  
                  ins.innerText = changeins7;
      
                         Cork.addEventListener("click", function () {
                             if (f === 103) {
        f = 104;
                              Cork.style.transform = "translate(0%, -850%) rotate(0deg)";
                                setTimeout(function () {
                                        Cork.style.transform = "translate(0%, -850%)rotate(0deg)";
                                        setTimeout(function () {
                                        Cork.style.transform = "translate(766.5%, -850%)rotate(0deg)";
                                             setTimeout(function () {
                                        Cork.style.transform = "translate(766.5%, -748.9%)rotate(0deg)";
                                       
                                         
                                          finalSol.style.visibility = "hidden";
                                          Cork.style.visiblittly = "hidden";
                                 
                                             setTimeout(function () {
                                                 straight_butyrometer_amyl.style.visibility = "visible";
                                                  setTimeout(function () {
                                                   straight_butyrometer_amyl.style.transition = "0s"
                                                     butyrometer.style.transition = "0s"
                                                   Cork.style.transition = "0s"
                                                        butyrometer.style.visibility = "hidden";
                                                          Cork.style.opacity = "0%";
                                                          straight_butyrometer_amyl.style.transition = "1s"
                                                          ins.innerText = "Click on the butyrometer to shake it just to mix the content thoroughly"
                                        straight_butyrometer_amyl.addEventListener("click", function () {
                                             if (f === 104) {
        f = 105;
                                            straight_butyrometer_amyl.style.bottom = "45%";
                                     
                                            setTimeout(function () {
                                                
                                            straight_butyrometer_amyl.style.left = "47%";
                                              setTimeout(function () {
                                
                                            straight_butyrometer_amyl.style.bottom = "35%";
                                                setTimeout(function () {
                                                     straight_butyrometer_amyl.style.transition = "1s";
                                                     tilted_butyrometer.style.transition = "1s";
                                            straight_butyrometer_amyl.style.transform = "rotate(180deg)";
                                              setTimeout(function () {
                                                Cork.style.opacity = "0%";
                                                   
                                                     setTimeout(function () {
                                                      tilted_butyrometer.style.visibility = "visible";
                                                        // straight_butyrometer_amyl.style.visibility = "hidden";
                                                    
                                                      //   straight_butyrometer_amyl.style.transform = "rotate(180deg)";
                                                 
                                                         setTimeout(function () {
                                     
                                                    straight_butyrometer_amyl.style.opacity = "0%";
                                             straight_butyrometer_amyl.style.transform = "rotate(180deg)"
                                              
                                            tilted_butyrometer.style.transform = "rotate(180deg)";
                                           
                                              setTimeout(function () {
                                                 straight_butyrometer_amyl.style.opacity = "100%";
                                                  // straight_butyrometer_amyl.style.visibility = "visible";
                                               tilted_butyrometer.style.opacity = "0%";

                                                        straight_butyrometer_amyl.style.transform = "rotate(180deg)"    
                                    
                                           

                                                           setTimeout(function () {
                                                         
                                                     straight_butyrometer_amyl.style.transition = "1s"
                                                        straight_butyrometer_amyl.style.transform = "rotate(0deg)";
                                                                       setTimeout(function () {
                                                              straight_butyrometer_amyl.style.left = "72.89%";
                                                                 
                                                                               setTimeout(function () {
                                                     
                                                                    straight_butyrometer_amyl.style.bottom = "12.0%";
                                                                    f=150;
                                                                                ins.innerText="click on NEXT button"
                                    startbutton.style.visibility="visible"
                                    startbutton.innerText="NEXT" 
         

                                                          },  1000);  
                                                          },  1000);  
                                                                   

                                                          },  1000);  
                                                          },  1000);  
                                           
                                          },  1000);    
                                             
                                          },  1000);    
                                                     
                                              },  1000);   //2000 
                                           
                                          },  1000);    
                                             
                                          },  1000);   
                                              
                                             
                                          },  1000);                 
                              
                              }else{console.log("error")}              
                                }, 1000);
                                        });                 
                                },  1000);


                            //                butyrometer.addEventListener("click", function () {
                            //                    if(f==101){
                            //                 f=102;
                            //                  ins.innerText = changeins9;
                            //   butyrometer.style.transform = "translate(0%, -90%) rotate(0deg)";
                              
                            //   Cork.style.bottom = "54%";
                            //   finalSol.style.bottom = "54.9%";
                            //                   setTimeout(function () {
                            //                       butyrometer.style.transform = "translate(-190%, -90%) rotate(0deg)";
                            //                       Cork.style.left= "25.4%";
                            //                       finalSol.style.left = "44.5%";
                                                  
                            //                            setTimeout(function () {
                            //                       butyrometer.style.transform = "translate(-190%, -60%) rotate(0deg)";
                            //                       Cork.style.bottom = "39.0%";
                            //                       finalSol.style.bottom = "40%";
                            //                                setTimeout(function () {
                            //                             butyrometer.style.transform = "translate(-190%, -40.0%) rotate(0deg)";
                            //                             // finalSol.style.transform =  "translate(5%, -125%) rotate(90deg)";
                                                        
                                                        
                            //                             Cork.style.transform = "translate(-130%, -60%) rotate(180deg)";
                            //                                   setTimeout(function () {
                            //                              tiltedsol.style.transform = "rotate(0deg)";
                            //                              tiltedsol.style.opacity = "100%";
                                                         
                            //                               finalSol.style.height = "32%"  
                            //                                     setTimeout(function () {
                            //                              butyrometer.style.transform = "translate(-190%, -60%) rotate(0deg)";
                            //                              tiltedsol.style.opacity = "0%";
                                                         
                            //                               finalSol.style.bottom = "40.4%"; 
                            //                               finalSol.style.height = "39%" 
                            //                                      setTimeout(function () {
                            //                             butyrometer.style.transform = "translate(-190%, -40.5%) rotate(0deg)";
                            //                              tiltedsol.style.opacity = "100%";
                                                         
                            //                               finalSol.style.height = "39%";
                                                  
                            //         //                           setTimeout(function () {
                            //         //                     butyrometer.style.transform = "translate(-190%, -60%) rotate(0deg)";
                            //         //                      tiltedsol.style.opacity = "0%";
                                                         
                            //         //                       finalSol.style.bottom = "40.4%"; 
                            //         //                       finalSol.style.height = "39%"  




                            //         // //                             butyrometer.addEventListener("click", function () {
                            //         // //                                 if(f===102){
                            //         // //                                                  ins.innerText = changeins10;
                            //         // //                                           setTimeout(function () {
                            //         // //                    butyrometer.style.transform = "translate(0%, -90%) rotate(0deg)";
                            //         // //               Cork.style.left= "25.4%";
                            //         // //               finalSol.style.left = "73.0%";
                            //         // //                finalSol.style.bottom = "54.9%";
                            //         // // //                                                    setTimeout(function () {
                            //         // // //                    butyrometer.style.transform = "translate(0%, 0%) rotate(0deg)";
                            //         // // //               Cork.style.left= "25.4%";
                            //         // // //               finalSol.style.left = "73.0%";
                            //         // // //                finalSol.style.bottom = "11.9%";
                            //         // // //                 Cork.style.transform = "translate(1500%, 0%)rotate(0deg)";
                            //         // // //                                             ins.innerText="click on Next button"
                            //         // // // startbutton.style.visibility="visible"
                            //         // // // startbutton.innerText="Next"          
                            //         // // //                          f=200;   
                            //         // // //               },900);
                                                          
                            //         // //               },900);}
                            //         // //                            } );
                                                          
                            //         //               },900);
                            //                       },900);
                                                  
                                                          
                            //                       },900);
                                                  
                                                          
                            //                       },900);
                                                  
  
                            //                       },900);

                            //                       },1000);
                            //                   },1000);
                                   




                            //                   } });

                            
                                        
                                },  1000);
                                },  1000);
                                },  1000);
                              }else{console.log("error")}
                         });
              
                  }, 1000);
       
            


              
                  }, 1000);
       
       
            


                      
                  }, 1000);
       
            


              
                  }, 1000);
              
       
            


              
                  }, 1000);
       
            


              
                  }, 0);
              
       
            


              
                  }, 0);
       
            


              
                  }, 0);
              
       
            


              
                  }, 0);
                          


              
                   }, 0);
       
            


              
             }, 0);
              
                  }, 0);
                  }, 0);
                  }, 0);
                  }, 0);
                    }else{console.log("error")}
                });
          }, 0);
          }, 0);

       

    }, 0);
  }else{console.log("error")}
});   
        
    }
    
}


