const onSwitchHolder3 = document.getElementById("onSwitchHolder3");
const setOff3 = document.getElementById("setOff3");
const setOn3 = document.getElementById("setOn3");
const setButtonHolder3 = document.getElementById("setButtonHolder3");
const downOnSwitch3 = document.getElementById("downOnSwitch3");
const upOnSwitch3 = document.getElementById("upOnSwitch3");
const upOffSwitch3 = document.getElementById("upOffSwitch3");
const downSwitch3 = document.getElementById("downSwitch3");
const offSwitch3 = document.getElementById("offSwitch3");
const onSwitch3 = document.getElementById("onSwitch3");
const waterbath3 = document.getElementById("waterbath3");

const butyrometer3 = document.querySelector('#butyrometer3');
const tilted_butyrometer3 = document.querySelector('#tilted_butyrometer3');
const straight_butyrometer3 = document.querySelector('#straight_butyrometer3');
const cap3 = document.querySelector('#butyrometer_cork13');

const sampleTempDisplay3 = document.getElementById("sampleTempDisplay3");
const setTempDisplay3 = document.getElementById("setTempDisplay3");
const actualTempDisplay3 = document.getElementById("actualTempDisplay3");

const timerDisplay3 = document.querySelector("#timerDisplay3");

const tiltedsol13 = document.getElementById("tiltedsol13");

const sampleTempDisplay13 = document.getElementById("sampleTempDisplay13");
const actualTempDisplay13 = document.getElementById("actualTempDisplay13");

let changeins12 = "Click on the ON button to start the water bath.";
let changeins13 = "Click on the Temp increase button to increase temperature of water bath to 65°C.";
let changeins14 = "Wait until water bath reaches 65°C.";
let changeins15 = "Click on butyrometer to insert into the bath.";
let changeins16 = "Wait for 5 minutes.";
// let changeins4 = "Click on the pipette to transfer the milk to the butyrometer."

console.log("stp2")

upOnSwitch3.style.display = "none";
actualTempDisplay3.style.display = "none";
sampleTempDisplay3.style.display = "none";
downOnSwitch3.style.display = "none";
actualTempDisplay13.style.display = "none";
sampleTempDisplay13.style.display = "none";
tilted_butyrometer3.style.visibility = "hidden";

let actualTemp = 0;
let setTemp = 0;

// Helper to add pulse effect
function pulse(element) {
    element.classList.add("pulse-effect");
    setTimeout(() => {
        element.classList.remove("pulse-effect");
    }, 1000);
}
//      ********

// straight_butyrometer3.addEventListener("click", function() {
//     if (f === 153) {
//         f = 154;
//         console.log("straight_butyrometer3 clicked")
//         straight_butyrometer_amyl.style.visibility = "hidden";
//         straight_butyrometer3.style.visibility = "visible";
//         straight_butyrometer3.style.visibility = "visible";
//         // straight_butyrometer_amyl3.style.visibility = "hidden";
//         ins.innerText = changeins14;
//         console.log("hello");
//         straight_butyrometer3.style.bottom = "45%";
//         setTimeout(() => {
//             straight_butyrometer3.style.left = "21.3%";

//             //  straight_butyrometer3.style.bottom = " 10%";
//             setTimeout(() => {
//                 straight_butyrometer3.style.height = "30%";
//                 straight_butyrometer3.style.width = "2.00%";

//                 setTimeout(() => {
//                     straight_butyrometer3.style.transform = "rotate(180deg)"

//                     //   setTimeout(() => {
//                     //  straight_butyrometer3.style.bottom = "10%";
//                     //  }, 2000);

//                 }, 0);
//             }, 0);
//         }, 0);
//     }else{console.log("no function")}
// });




function zoominout(element) {
    element.classList.add("pulse-effect");
    setTimeout(() => {
        element.classList.remove("pulse-effect");
    }, 0);
}

// STEP 1: Click OFF switch → triggers ON switch after 1s
// "Click on the amyl alcohol bottle cork to open it."

offSwitch3.addEventListener("click", function() {
      if (f === 150) {
        f = 151;
        
    offSwitch3.style.visibility = "hidden";
    console.log("f=150");
    pulse(offSwitch3);
    setTimeout(() => {
        onSwitch3.click();
        onSwitch3.style.opacity = "100%";
    }, 1000);

}else{console.log("nulll error")}});

onSwitch3.addEventListener("click", () => {
    pulse(onSwitch3);
    onSwitch3.style.opacity = "100%";
    offSwitch3.style.opacity = "0%";

    onSwitch3.style.borderRadius = "30%";
    setTimeout(() => {
        onSwitch3.style.borderRadius = "50%";
    }, 1000);

    // Show temperatures
    setTempDisplay3.style.opacity = "100%";
    actualTempDisplay3.style.display = "block";
    actualTempDisplay13.style.display = "block";
    pulse(actualTempDisplay3);
    sampleTempDisplay3.style.display = "block";
    sampleTempDisplay13.style.display = "block";
    pulse(sampleTempDisplay3);
    zoominout(sampleTempDisplay3);
    // Reset sample temperature display
    sampleTempDisplay3.textContent = "25°C";
    ins.innerText = changeins13;
});

// Gradually increase sample temperature

let currentSampleTemp = 25

upOffSwitch3.addEventListener("click", () => {
    f=152;
    if (currentSampleTemp < 65) {
        // Show ON version briefly with pressed effect
        upOnSwitch3.style.display = "block";
        upOnSwitch3.style.borderRadius = "25%";

        // Hide OFF version temporarily
        upOffSwitch3.style.opacity = "0%";

        // Show pulse effect and increase temp
        pulse(upOnSwitch3);
        pulse(sampleTempDisplay3);

        currentSampleTemp++;
        sampleTempDisplay3.textContent = `${currentSampleTemp}°C`;
         
        // Instruction message
       ins.innerText = "Increase the sample temp of water bath to 65°C"

        // After short time, restore OFF version, hide ON version, reset radius
        setTimeout(() => {

            upOnSwitch3.style.display = "none";
            upOffSwitch3.style.opacity = "100%";
            upOnSwitch3.style.borderRadius = "50%"; // reset radius
        }, 300); // Duration of switch click simulation
    }else{ f=1500 , ins.innerText = "Click on the set button to set the temperature to 65°C"}
});

setOff3.addEventListener("click", () => {
 if (f === 1500) {
      f=152.5;
    pulse(setOff3);
    setOn3.style.display = "block";
    setOn3.style.opacity = "100%";
    setOff3.style.opacity = "0%";
    ins.innerText = `Temperature set to ${currentSampleTemp}°C`;

    let actualTemp = 25;
    let timerValue = 300; // 5 minutes
    let currentTime = timerValue;
    const timerDisplay13 = document.getElementById("timerDisplay13");
    const timerDisplay23 = document.getElementById("timerDisplay23");
    actualTempDisplay3.textContent = `${actualTemp}°C`;

    timerDisplay13.style.display = "none";
    timerDisplay23.style.display = "none";

    // ➤ Temperature increase (gradual then fast)
    let secondsPassed = 0;
    let timecomplete = false;

    const gradualTemp = setInterval(() => {
        secondsPassed++;
        if (actualTemp < currentSampleTemp) {
            actualTemp++;
            actualTempDisplay3.textContent = `${actualTemp}°C`;
        }

        if (secondsPassed >= 7 || actualTemp >= currentSampleTemp) {
            clearInterval(gradualTemp);
  ins.innerText = "wait to temperature reaches to 65°C ";
            // ➤ Fast increase to 65°C
            const fastIncrease = setInterval(() => {
                 ins.innerText = "wait to temperature reaches to 65°C ";
                if (actualTemp >= 65) {
                    
                    clearInterval(fastIncrease);
                      ins.innerText = changeins15;
 f=153;
                    // ➤ Start Timer Display Only AFTER Temperature Logic Ends
                      
                } else {
                    actualTemp++;
                    actualTempDisplay3.textContent = `${actualTemp}°C`;
                     ins.innerText = "wait to temperature reaches to 65°C ";
                   
                }
            }, 400); // Fast increase  // 25
        }
    }, 1000); // Gradual increase  // 200

    // Reset UI visuals
    setTimeout(() => {
        setOff3.style.opacity = "100%";
        setOn3.style.display = "none";
    }, 1000);

    setTimeout(() => {
       
        straight_butyrometer3.addEventListener("click", function() {
           if (f === 153) {
        f = 154;
         ins.innerText = changeins15;
          
            console.log("hello");
            straight_butyrometer3.style.bottom = "45%";
              console.log("straight_butyrometer3 clicked")
        straight_butyrometer_amyl.style.visibility = "hidden";
        straight_butyrometer3.style.visibility = "visible";
        straight_butyrometer3.style.visibility = "visible";
        // straight_butyrometer_amyl3.style.visibility = "hidden";
        ins.innerText = changeins14;
        console.log("hello");
        straight_butyrometer3.style.bottom = "45%";
            setTimeout(() => {
                 straight_butyrometer3.style.left = "22.5%";

                setTimeout(() => {
                     straight_butyrometer3.style.height = "30%";
                straight_butyrometer3.style.width = "2.00%";
                    setTimeout(() => {
                    straight_butyrometer3.style.opacity = "0%";
                    tilted_butyrometer3.style.diaplay = "block";
                    tilted_butyrometer3.style.visibility = "visible";
                     setTimeout(() => {
                                  straight_butyrometer3.style.transform = "rotate(180deg)"
                    

                    setTimeout(() => {
                                
                        tilted_butyrometer3.style.bottom = "10%";
                        ins.innerText = "Wait For 5 minutes"
                        startTimer1();
                           setTimeout(() => {

                          ins.innerText =  "Click on the off button to off the water bath"
                           onSwitch3.addEventListener("click", () => {
    pulse(onSwitch3);
    onSwitch3.style.opacity = "100%";
    offSwitch3.style.opacity = "0%";

    onSwitch3.style.borderRadius = "30%";
    setTimeout(() => {
        onSwitch3.style.borderRadius = "50%";
    }, 1000);

    // Show temperatures
    setTempDisplay3.style.opacity = "100%";
    actualTempDisplay3.style.display = "block";
    actualTempDisplay13.style.display = "block";
    pulse(actualTempDisplay3);
    sampleTempDisplay3.style.display = "block";
    sampleTempDisplay13.style.display = "block";
    pulse(sampleTempDisplay3);
    zoominout(sampleTempDisplay3);
    // Reset sample temperature display
    sampleTempDisplay3.textContent = "25°C";
    ins.innerText = changeins13;
});
                        ins.innerText =  "Click on the Butyrometer to put on to the butyrometer stand for centrifugation"
                           
                           setTimeout(() => {
     timerDisplay23.style.opacity = "0%";
          }, 1000);
                               }, 10000);  
                                      setTimeout(() => {

                      
tilted_butyrometer3.addEventListener("click", function() {
   if(timervalue!= 1){
    console.log("not run")
   }else{
   ins.innerText =  "Click on the Butyrometer to put on to the butyrometer stand for centrifugation"
  console.log("tilted_clickeddd")
              tilted_butyrometer3.style.bottom = "45%";
               straight_butyrometer3.style.opacity = "100%";
                setTimeout(() => {
                tilted_butyrometer3.style.opacity = "0%";
                straight_butyrometer3.style.transform = "rotate(0deg)";

                  setTimeout(() => {
                     straight_butyrometer3.style.height = "50%";
                     straight_butyrometer3.style.width = "3.1%";

                         setTimeout(() => {
                     straight_butyrometer3.style.left = "72.89%";
                    
 
        setTimeout(() => {
          straight_butyrometer3.style.bottom = "12%";
          f=300;
                                                ins.innerText="click on Next button"
                                    startbutton.style.visibility="visible"
                                    startbutton.innerText="Next" 
                                    
         
               }, 1000);
      },1000);
      }, 1000);                
      }, 1000);                
}});
                        }, 1000);           
                    }, 1000);  
                    }, 1000);
                }, 1000);    //3000
            }, 1000);
              }, 1000);
    }else{console.log("qwerty")}});
    }, 1000);
}else{console.log("eerror")}});






  let timervalue = 0;
function startTimer1() {
    let currentTime = 300; // 5 minutes = 300 seconds
    let secondsPassed = 0;
    const timerDisplay23 = document.getElementById("timerDisplay23");
    timerDisplay23.style.display = "block";
        ins.innerText = "Wait For 5 minutes to completely heat up the butryometer solution";
  console.log("start timer")  // Phase 1: First 7 seconds - normal speed
    const normalSpeed = setInterval(() => {
        if (secondsPassed >= 1) {
            clearInterval(normalSpeed);

            // Phase 2: Fast mode (like 25ms per tick)
            const fastSpeed = setInterval(() => {
                if (currentTime <= 7) {
                    clearInterval(fastSpeed);
                    timerDisplay23.textContent = "Timer finished!";
                      ins.innerText = "Click on the butryometer to place butyometer into butyromeeter stand for the centrifugation";
                    timervalue = 1;
                } else {
                    const mins = Math.floor(currentTime / 60);
                    const secs = currentTime % 60;
                    timerDisplay23.textContent = `Timer: ${mins}:${secs.toString().padStart(2, "0")}`;
                    currentTime--;
                     ins.innerText = "Wait For 5 minutes to completely heat up the butryometer solution";
               
                }
            }, 25); // Fast countdown!   //25
        } else {
            const mins = Math.floor(currentTime / 60);
            const secs = currentTime % 60;
            timerDisplay23.textContent = `Timer: ${mins}:${secs.toString().padStart(2, "0")}`;
            currentTime--;
            secondsPassed++;
             ins.innerText = "Wait For 5 minutes to completely heat up the butryometer solution";
        }
    }, 1000); // Normal speed   //1000
}
             




setButtonHolder.addEventListener("click", () => {
  pulse(setButtonHolder);

  // Animate set temperature to 65
  const setTempInterval = setInterval(() => {
    if (setTemp < 65) {
      setTemp++;
      setTempDisplay.innerText = `Set Temp: ${setTemp}°C`;
    } else {
      clearInterval(setTempInterval);
    }
  }, 50);

  // After 1 second, start raising actual temperature too
  setTimeout(() => {
    const actualTempInterval = setInterval(() => {
      if (actualTemp < 65) {
        actualTemp++;
        actualTempDisplay.innerText = `Actual Temp: ${actualTemp}°C`;
      } else {
        clearInterval(actualTempInterval);
      }
    }, 70);
  }, 1000);
});






























// // let dp1 = document.querySelector("#dp1")
// // let dp2 = document.querySelector("#dp2")
// // let dp3 = document.querySelector("#dp3")
// // let dp4 = document.querySelector("#dp4")
// // let dp5 = document.querySelector("#dp5")

// // let petri1 = document.querySelector("#petri1")
// // let petri2 = document.querySelector("#petri2")
// // let petri3 = document.querySelector("#petri3")
// // let petri4 = document.querySelector("#petri4")
// // let petri5 = document.querySelector("#petri5")

// // let pbread1 = document.querySelector("#pbread1")
// // let pbread2 = document.querySelector("#pbread2")
// // let pbread3 = document.querySelector("#pbread3")
// // let pbread4 = document.querySelector("#pbread4")
// // let pbread5 = document.querySelector("#pbread5")
// // let bread = document.querySelector("#bread")

// // let lid = document.querySelector("#lid")
// // let lid1 = document.querySelector("#lid1")
// // let lid2 = document.querySelector("#lid2")
// // let lid3 = document.querySelector("#lid3")
// // let lid4 = document.querySelector("#lid4")


// // let rbread = document.querySelector("#rbread")
// // let sbread = document.querySelector("#sbread")
// // let echimty = document.querySelector("#echimty")


// // let on = document.querySelector("#on")
// // let tare = document.querySelector("#tare")
// // let reading = document.querySelector("#reading")

// // let observe = document.querySelector("#observe")
// // let obtext = document.querySelector("#obtext")


// // let petridish = petri1
// // let pbread = pbread1
// // let petrileft = "39.5%"
// // let pbreadleft = "39.5%"
// // let sttrial = "1st"
// // let deslid = lid4







// // function on1(){
// //     if(f==102){
// //         reading.style.opacity="100%"
// //         f=103
// //         ins.innerText="Place a petridish on weighing scale"
// //     }
// // }


// // function pt1(){
// //     if(f==103){
// //         f=104
// //         petridish.style.top="72%"
// //         setTimeout(function(){
// //             petridish.style.left="10%"
// //             setTimeout(function(){
// //                 if(petridish==petri1){
// //                     reading.innerText="03.65"
// //                     f=105
// //                     ins.innerText="Tare the weighing scale"
// //                 }
// //                 else{
// //                     reading.innerText="00.00"
// //                     f=106
// //                     ins.innerText="Again click on Fork to weigh another 10g of bread"
// //                 }
// //             },1000)
// //         },1000)
// //     }
// // }

// // function tare1(){
// //     if(f==105){
// //         f=106
// //         reading.innerText="00.00"
// //         ins.innerText="Click on Fork to weigh 10g of bread"
// //     }
// // }

// // function echimty1(){
// //     if(f==106){
// //         f=107
// //         rbread.style.top="76%"
// //         rbread.style.left="23%"
// //         sbread.style.top="76%"
// //         sbread.style.left="23%"
// //         rbread.style.visibility="visible"
// //         sbread.style.visibility="visible"

// //         echimty.style.top="79%"
// //         echimty.style.rotate="-29deg"
// //         setTimeout(function(){
// //             echimty.style.left="23.5%"
// //             setTimeout(function(){
// //                 echimty.style.opacity="0%"
// //                 rbread.style.opacity="100%"
// //                 setTimeout(function(){
// //                     rbread.style.top="60%"
// //                     echimty.style.top="63%"
// //                     setTimeout(function(){
// //                         echimty.style.left="11%"
// //                         rbread.style.left="11%"
// //                         setTimeout(function(){
// //                             echimty.style.opacity="100%"
// //                             rbread.style.opacity="0%"
// //                             pbread.style.opacity="100%"
// //                             reading.innerText="05.06"
// //                             setTimeout(function(){
// //                                 echimty.style.left="23.5%"
// //                                 echimty.style.top="79%"
// //                                 setTimeout(function(){
// //                                     echimty.style.opacity="0%"
// //                                     sbread.style.opacity="100%"
// //                                     setTimeout(function(){
// //                                         sbread.style.top="60%"
// //                                         echimty.style.top="63%"
// //                                         setTimeout(function(){
// //                                             echimty.style.left="11%"
// //                                             sbread.style.left="11%"
// //                                             setTimeout(function(){
// //                                                 echimty.style.opacity="100%"
// //                                                 sbread.style.opacity="0%"
// //                                                 // pbread.style.opacity="100%"
// //                                                 reading.innerText="10.00"
// //                                                 setTimeout(function(){
// //                                                     echimty.style.left="12%"
// //                                                     echimty.style.top="90%"
// //                                                     echimty.style.rotate="0deg"
// //                                                     pbread.style.top="60%"
// //                                                     petridish.style.top="62%"
// //                                                     reading.innerText="-03.65"
// //                                                     setTimeout(function(){
// //                                                         pbread.style.left=pbreadleft
// //                                                         petridish.style.left=petrileft
// //                                                         setTimeout(function(){
// //                                                             pbread.style.top="75%"
// //                                                             petridish.style.top="77%"
// //                                                             testing()
// //                                                             closelid()
// //                                                         },1000)
// //                                                     },1000)
// //                                                 },1000)
// //                                             },1000)
// //                                         },1000)
// //                                     },1000)
// //                                 },1000)
// //                             },1000)
// //                         },1000)
// //                     },1000)
// //                 },1000)
// //             },1000)
// //         },1000)
// //     }
// // }



// // function testing(){
// //     if(sttrial=="1st"){
// //         sttrial="2nd"
// //         petridish=petri2
// //         pbread=pbread2
// //         f=103
// //         petrileft="51.5%"
// //         pbreadleft="51.5%"
// //         ins.innerText="Place another petridish on weighing scale"

// //     }
// //     else if(sttrial=="2nd"){
// //         sttrial="3rd"
// //         petridish=petri3
// //         pbread=pbread3
// //         f=103
// //         petrileft="63.5%"
// //         pbreadleft="63.5%"
// //         ins.innerText="Place another petridish on weighing scale"

// //     }
// //     else if(sttrial=="3rd"){
// //         sttrial="4th"
// //         petridish=petri4
// //         pbread=pbread4
// //         f=103
// //         petrileft="75.5%"
// //         pbreadleft="75.5%"
// //         ins.innerText="Place another petridish on weighing scale"

// //     }
// //     else if(sttrial=="4th"){
// //         sttrial="5th"
// //         petridish=petri5
// //         pbread=pbread5
// //         f=103
// //         petrileft="87.5%"
// //         pbreadleft="87.5%"
// //         ins.innerText="Place another petridish on weighing scale"

// //     }
// //     else if(sttrial=="5th"){
// //         sttrial="6th"
// //         f=200
// //         rbread.style.visibility="hidden"
// //         sbread.style.visibility="hidden"
// //         ins.innerText="Weigh and observe the samples after 3 days"
// //     }
// // }


// // function closelid(){
// //     if(deslid==lid4){
// //         deslid.style.top="55%"
// //         setTimeout(function(){
// //             deslid.style.left="37%"
// //             setTimeout(function(){
// //                 deslid.style.top="60%"
// //                 deslid=lid3
// //             },1000)
// //         },1000)
// //     }
// //     else if(deslid==lid3){
// //         deslid.style.top="55%"
// //         setTimeout(function(){
// //             deslid.style.left="49%"
// //             setTimeout(function(){
// //                 deslid.style.top="60%"
// //                 deslid=lid2
// //             },1000)
// //         },1000)
// //     }
// //     else if(deslid==lid2){
// //         deslid.style.top="55%"
// //         setTimeout(function(){
// //             deslid.style.left="61%"
// //             setTimeout(function(){
// //                 deslid.style.top="60%"
// //                 deslid=lid1
// //             },1000)
// //         },1000)
// //     }
// //     else if(deslid==lid1){
// //         deslid.style.top="55%"
// //         setTimeout(function(){
// //             deslid.style.left="73%"
// //             setTimeout(function(){
// //                 deslid.style.top="60%"
// //                 deslid=lid
// //             },1000)
// //         },1000)
// //     }
// //     else if(deslid==lid){
// //         deslid.style.top="55%"
// //         setTimeout(function(){
// //             deslid.style.left="85%"
// //             setTimeout(function(){
// //                 deslid.style.top="60%"
// //                 deslid="none"
// //                 // observe.style.visibility="visible"
// //                 startbutton.style.visibility="visible"
// //                 setTimeout(function(){
// //                     startbutton.innerText="Next"
// //                     ins.innerText="Click on Next button "
// //                 },1000)
// //             },1000)
// //         },1000)
// //     }
// // }




// // function observer(){
// //     observe.style.visibility="visible"
// //     observe.style.opacity="100%"
// //     bread.style.visibility="hidden"
// //     echimty.style.visibility="hidden"
// //     setTimeout(function(){
// //         observe.style.opacity="0%"
// //         if(f==400){
// //             tablesdiv.style.opacity="100%"
// //         }
// //         setTimeout(function(){
// //             observe.style.visibility="hidden"
// //         },1000)
// //     },5000)

// // }













// // function plates(){
// //     if(f==100){
// //         f=101
// //         dp1.style.bottom="30%"
// //         dp2.style.bottom="30%"
// //         dp3.style.bottom="30%"
// //         dp4.style.bottom="30%"
// //         dp5.style.bottom="30%"
// //         setTimeout(function(){
// //             dp1.style.left="38.5%"
// //             dp2.style.left="50.5%"
// //             dp3.style.left="62.5%"
// //             dp4.style.left="74.5%"
// //             dp5.style.left="86.5%"
// //             setTimeout(function(){
// //                 dp1.style.bottom="20%"
// //                 dp2.style.bottom="20%"
// //                 dp3.style.bottom="20%"
// //                 dp4.style.bottom="20%"
// //                 dp5.style.bottom="20%"
// //                 ins.innerText="Turn on the Weighing Scale"
// //                 f=102
// //             },1000)
// //         },1000)
// //     }
// // }