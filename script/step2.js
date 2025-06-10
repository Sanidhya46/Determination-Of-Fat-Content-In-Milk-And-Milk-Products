

// const onSwitchHolder = document.getElementById("onSwitchHolder");
// const setOff = document.getElementById("setOff");
// const setOn = document.getElementById("setOn");
// const setButtonHolder = document.getElementById("setButtonHolder");
// const downOnSwitch = document.getElementById("downOnSwitch");
// const upOnSwitch = document.getElementById("upOnSwitch");
// const upOffSwitch = document.getElementById("upOffSwitch");
// const downSwitch = document.getElementById("downSwitch");
// const offSwitch = document.getElementById("offSwitch");
// const onSwitch = document.getElementById("onSwitch");
// const waterbath= document.getElementById("waterbath");

//   const butyrometer1 = document.querySelector('#butyrometer1');
//     const tilted_butyrometer = document.querySelector('#tilted_butyrometer');
//    const straight_butyrometer = document.querySelector('#straight_butyrometer');
//   const cap = document.querySelector('#butyrometer_cork1');



// const sampleTempDisplay = document.getElementById("sampleTempDisplay");
// const setTempDisplay = document.getElementById("setTempDisplay");
// const actualTempDisplay = document.getElementById("actualTempDisplay");

// const timerDisplay = document.querySelector("#timerDisplay");

// const tiltedsol1= document.getElementById("tiltedsol1");

// const sampleTempDisplay1 = document.getElementById("sampleTempDisplay1");
// const actualTempDisplay1 = document.getElementById("actualTempDisplay1");



// let changeins12 = "Click on the ON button to start the water bath.";
// let changeins13 = "Click on the UP button to increase temperature to 65°C.";
// let changeins14 = "Wait until water bath reaches 65°C.";
// let changeins15 = "Click on butyrometer to insert into the bath.";
// let changeins16 = "Wait for 5 minutes.";
// // let changeins4 = "Click on the pipette to transfer the milk to the butyrometer."


// console.log("stp2")

//      ins.innerText="click on Next button"
//                                     startbutton.style.visibility="visible"
//                                     startbutton.innerText="Next" 
         


// upOnSwitch.style.display = "none";
// actualTempDisplay.style.display = "none";
// sampleTempDisplay.style.display = "none";
// downOnSwitch.style.display = "none";
// actualTempDisplay1.style.display = "none";
// sampleTempDisplay1.style.display = "none";
// tilted_butyrometer.style.display = "block";

// let actualTemp = 0;
// let setTemp = 0;
 

// // Helper to add pulse effect
// function pulse(element) {
//   element.classList.add("pulse-effect");
//   setTimeout(() => {
//     element.classList.remove("pulse-effect");
//   }, 0);
// }
// //      ********

//  straight_butyrometer.addEventListener("click", function () {
//       ins.innerText = changeins14;
//       console.log("hello");
//      straight_butyrometer.style.bottom = "45%";
//           setTimeout(() => {
//      straight_butyrometer.style.left = "21.3%";
     
//     //  straight_butyrometer.style.bottom = " 10%";
//         setTimeout(() => {
//           straight_butyrometer.style.height = "30%";
//      straight_butyrometer.style.width = "2.00%";
         
//       setTimeout(() => {
//         straight_butyrometer.style.transform = "rotate(180deg)"
    


//       //   setTimeout(() => {
//       //  straight_butyrometer.style.bottom = "10%";
//       //  }, 2000);
     
    
     
    
//        }, 1000);
//        }, 1000);
//        }, 1000);
//     });


// //

// function zoominout(element) {
//   element.classList.add("pulse-effect");
//   setTimeout(() => {
//     element.classList.remove("pulse-effect");
//   }, 0);
// }

// // STEP 1: Click OFF switch → triggers ON switch after 1s
// // "Click on the amyl alcohol bottle cork to open it."
   

// offSwitch.addEventListener("click", function () {
//    offSwitch.style.visibility = "hidden";
//  console.log("f=150");
//   pulse(offSwitch);
//   setTimeout(() => {
//     onSwitch.click();
//     onSwitch.style.opacity = "100%";
//   }, 0);

// });

// onSwitch.addEventListener("click", () => {
//   pulse(onSwitch);
//   onSwitch.style.opacity = "100%";
//   offSwitch.style.opacity = "0%";

//   onSwitch.style.borderRadius = "30%";
//   setTimeout(() => {
//     onSwitch.style.borderRadius = "50%";
//   }, 0);

//   // Show temperatures
//   setTempDisplay.style.opacity = "100%";
//   actualTempDisplay.style.display = "block";
//    actualTempDisplay1.style.display = "block";
//   pulse(actualTempDisplay);
//   sampleTempDisplay.style.display = "block";
//     sampleTempDisplay1.style.display = "block";
//   pulse(sampleTempDisplay);
//     zoominout(sampleTempDisplay);
//   // Reset sample temperature display
//   sampleTempDisplay.textContent = "25°C";
//   ins.innerText= changeins13;
// });

// // Gradually increase sample temperature

// let currentSampleTemp = 64

// upOffSwitch.addEventListener("click", () => {
//   if (currentSampleTemp < 65) {
//     // Show ON version briefly with pressed effect
//     upOnSwitch.style.display = "block";
//     upOnSwitch.style.borderRadius = "25%";

//     // Hide OFF version temporarily
//     upOffSwitch.style.opacity ="0%";

//     // Show pulse effect and increase temp
//     pulse(upOnSwitch);
//     pulse(sampleTempDisplay);

//     currentSampleTemp++;
//     sampleTempDisplay.textContent = `${currentSampleTemp}°C`;

//     // Instruction message
//     ins.innerText = "Click on Set Button to set the temperature to 65°C";

//     // After short time, restore OFF version, hide ON version, reset radius
//     setTimeout(() => {
//       upOnSwitch.style.display = "none";
//       upOffSwitch.style.opacity = "100%";
//       upOnSwitch.style.borderRadius = "50%"; // reset radius
//     }, 300); // Duration of switch click simulation
//   }
// });

// setOff.addEventListener("click", () => {
  
//   pulse(setOff);
//   setOn.style.display = "block";
//   setOn.style.opacity = "100%";
//   setOff.style.opacity = "0%";
//   ins.innerText = `Temperature set to ${currentSampleTemp}°C`;

//   let actualTemp = 25;
//   let timerValue = 300; // 5 minutes
//   let currentTime = timerValue;
//   const timerDisplay1 = document.getElementById("timerDisplay1");
//   const timerDisplay2 = document.getElementById("timerDisplay2");
//   actualTempDisplay.textContent = `${actualTemp}°C`;

//   timerDisplay1.style.display = "none";
//   timerDisplay2.style.display = "none";

//   // ➤ Temperature increase (gradual then fast)
//   let secondsPassed = 0;

//   const gradualTemp = setInterval(() => {
//     secondsPassed++;
//     if (actualTemp < currentSampleTemp) {
//       actualTemp++;
//       actualTempDisplay.textContent = `${actualTemp}°C`;
//     }

//     if (secondsPassed >= 1 || actualTemp >= currentSampleTemp) {
//       clearInterval(gradualTemp);

//       // ➤ Fast increase to 65°C
//       const fastIncrease = setInterval(() => {
//         if (actualTemp >= 65) {
//           clearInterval(fastIncrease);

//           // ➤ Start Timer Display Only AFTER Temperature Logic Ends
        
//         } else {
//           actualTemp++;
//           actualTempDisplay.textContent = `${actualTemp}°C`;
//         }
//       }, 0); // Fast increase  // 25
//     }
//   }, 0); // Gradual increase  // 200

 

//   // Reset UI visuals
//   setTimeout(() => {
//     setOff.style.opacity = "100%";
//     setOn.style.display = "none";
//   }, 0);

//   setTimeout(() => {
//     ins.innerText = changeins15;
//     straight_butyrometer.addEventListener("click", function () {
//       ins.innerText = changeins14;
//       console.log("hello");
//      straight_butyrometer.style.bottom = "45%";
//           setTimeout(() => {
//      straight_butyrometer.style.left = "21.38%";
//       setTimeout(() => {
        
//      straight_butyrometer.style.opacity = "0%";
//       tilted_butyrometer.style.visibility = "visible";
         
//         setTimeout(() => {
        
   
//       tilted_butyrometer.style.bottom = "13%";
    
//        } , 1000);
//        }, 3000);
//        }, 1000);
//     });
//   }, 1000);
// });

// butyrometer1.addEventListener("click", function () {
//   if(f===150){
//   f=110;
//   console.log("hello123")
//   ins.innerText = changeins14;
//   console.log("hello");


//   setTimeout(function () {
   

//     setTimeout(function () {
  
//     }, 1000);
//   }, 1000);
// }else{
//   console.log("nullllog");
// }});

// function startTimer() {
//   let currentTime = 300; // 5 minutes = 300 seconds
//   let secondsPassed = 0;
//   const timerDisplay2 = document.getElementById("timerDisplay2");
//   timerDisplay2.style.display = "block";

//   // Phase 1: First 7 seconds - normal speed
//   const normalSpeed = setInterval(() => {
//     if (secondsPassed >= 1) {
//       clearInterval(normalSpeed);

//       // Phase 2: Fast mode (like 25ms per tick)
//       const fastSpeed = setInterval(() => {
//         if (currentTime <= 0) {
//           clearInterval(fastSpeed);
//           timerDisplay2.textContent = "Timer finished!";
//         } else {
//           const mins = Math.floor(currentTime / 60);
//           const secs = currentTime % 60;
//           timerDisplay2.textContent = `Timer: ${mins}:${secs.toString().padStart(2, "0")}`;
//           currentTime--;
//         }
//       }, 0); // Fast countdown!   //25
//     } else {
//       const mins = Math.floor(currentTime / 60);
//       const secs = currentTime % 60;
//       timerDisplay2.textContent = `Timer: ${mins}:${secs.toString().padStart(2, "0")}`;
//       currentTime--;
//       secondsPassed++;
//     }
//   }, 0); // Normal speed   //1000
// }





             



// // STEP 3: Set Temperature Button Logic
// // setButtonHolder.addEventListener("click", () => {
// //   pulse(setButtonHolder);

// //   // Animate set temperature to 65
// //   const setTempInterval = setInterval(() => {
// //     if (setTemp < 65) {
// //       setTemp++;
// //       setTempDisplay.innerText = `Set Temp: ${setTemp}°C`;
// //     } else {
// //       clearInterval(setTempInterval);
// //     }
// //   }, 50);

// //   // After 1 second, start raising actual temperature too
// //   setTimeout(() => {
// //     const actualTempInterval = setInterval(() => {
// //       if (actualTemp < 65) {
// //         actualTemp++;
// //         actualTempDisplay.innerText = `Actual Temp: ${actualTemp}°C`;
// //       } else {
// //         clearInterval(actualTempInterval);
// //       }
// //     }, 70);
// //   }, 1000);
// // });






























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