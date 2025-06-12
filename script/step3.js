
const butyrometer4 = document.getElementById("butyrometer_centrifuge");
const tilted_butyrometer1 = document.getElementById("tilted_butyrometer1");
const water_butyrometer = document.getElementById("water_butyrometer_centrifuge");



const centrifugeUpperLidOpen = document.getElementById("centrifuge_upper_open_lid");
const centrifugeDownWardLidOpen = document.getElementById("centrifuge_down_ward");
const centrifugeCloseLid = document.getElementById("centrifuge_close_lid");
const centrifugeTopFilling = document.getElementById("centrifuge_top_filling");
const centrifugeDownFilling = document.getElementById("centrifuge_down_filling");


const offOnButton = document.getElementById("Off_On_button");
const onButton = document.getElementById("On_Button");
const tempIncreaseSwitch = document.getElementById("Temp_increase_switch");
const tempDecreaseSwitch = document.getElementById("Temp_decrease_switch");

const startStop = document.getElementById("Start_Stop");
const offstartStop = document.getElementById("Off_Start_Stop");
// const upOffSwitch = document.getElementById("upOffSwitch");
// const upOnSwitch = document.getElementById("Up_on_switch");

const rpmDecreaseButton = document.getElementById("rpm_decrease_button");
const rpmIncreaseButton = document.getElementById("rpm_increase_button");

const timeDecreaseButton = document.getElementById("time_decrease_switch");
const timeIncreaseButton = document.getElementById("Time_increase_switch");


const finalfatsolution = document.getElementById("finalfatsolution");


// const onSwitchHolder = document.getElementById("onSwitchHolder");
const setOff2 = document.getElementById("setOff");
const setOn2 = document.getElementById("setOn");
// const setButtonHolder = document.getElementById("setButtonHolder");
// const downOnSwitch = document.getElementById("downOnSwitch");
const upOnSwitch2 = document.getElementById("upOnSwitch");
// const upOffSwitch2 = document.getElementById("upOffSwitch");
// const downSwitch = document.getElementById("downSwitch");
// const offSwitch = document.getElementById("offSwitch");
// const onswitch = document.getElementById("onswitch");
// const waterbath= document.getElementById("waterbath");

const setOff = document.getElementById("set_off");
// const setOn = document.getElementById("set_on");

const doorOpenOff = document.getElementById("door_open_off");
const openButton = document.getElementById("Open_button");
const closeButton = document.getElementById("Close_button");
const water_beaker = document.getElementById("water_beaker");
const beaker_water = document.getElementById("beaker_water");
const pipette45 = document.querySelector('#pipette_centrifuge');
const water_drop1 = document.getElementById("water_drop1");
const water_drop2 = document.getElementById("water_drop2");
const butyrometer_water_21ml = document.getElementById("butyrometer_water_21ml");
const butyrometer_cork = document.getElementById("butyrometer_cork_centrifuge");

// const straight_butyrometer = document.getElementById("straight_butyrometer");

// const sampleTempDisplay1 = document.getElementById("sampleTempDisplay1");
// const actualTempDisplay1 = document.getElementById("actualTempDisplay1");

const rpmDisplay = document.getElementById("rpmDisplay");
const timeDisplay = document.getElementById("timeDisplay");
const tempDisplay = document.getElementById("tempDisplay");


const rpmlabel = document.getElementById("rpmLabel");
const timelabel = document.getElementById("timeLabel");
const templabel = document.getElementById("tempLabel1");



const water_solution_centrifuge = document.getElementById("water-solution-centrifuge");
let changeins21 = "Click on the OPEN button to open the lid of the centrifuge.";
let changeins22 = "Click on the pipette to fill the another butyrometer with 21.75ml water to balance the rotating disc";
let changeins23 = "Click on the butyrometer cork to close the butyrometer ";
let changeins24 = "Click on the 21.75 water filled butyrometer to put it into centrifuge for balancing the rotating disc";
let changeins25 = "Click on the solution filled butyromter to place into centrifuge for centrifugation";
let changeins26 = "Click on the On button to set the temperature and rpm ";
let changeins27 = "Click on the rpm increase button to increase the rpm to 1100";
let changeins28 = "Now the Rpm is set to 1100";
let changeins29 = "Now click on increase time button to set time to 5 minutes";
// let changeins30 = "Now click on increase time button to set time to 5 minutes";
let changeins31 = "Click on the Stop button to stop the centrifuge";
let changeins32 = "Click on the close button to open the lid to check fat percent content";
let changeins33 = "Click on the butyrometer solution to put into waterbath for 3 minutes";






   //   ins.innerText="click on Next button"
   //                                  startbutton.style.visibility="visible"
   //                                  startbutton.innerText="Next" 
      





upOnSwitch.style.display = "none";
actualTempDisplay.style.display = "none";
sampleTempDisplay.style.display = "none";
// downOnSwitch.style.display = "none";
actualTempDisplay1.style.display = "none";
sampleTempDisplay1.style.display = "none";
setOn2.style.visibility = "hidden";



  rpmDisplay.style.font= "visible";
    timeDisplay.style.visibility = "visible";
centrifuge();

function centrifuge() {
   console.log("heello")
  closeButton.addEventListener("click", () => {
   if(f===300){
     console.log("open  gate")
   f=301;
    console.log("close button");
  ins.innerText = changeins22;
    // 1. Simulate button press (reduce size temporarily)
    closeButton.style.transform = "scale(0.7)";
    closeButton.style.borderRadius = "30%";

    setTimeout(() => {
      closeButton.style.transform = "scale(1)";
      closeButton.style.borderRadius = "40%";

      setTimeout(() => {
        closeButton.style.visibility = "hidden";
        openButton.style.visibility = "visible";

        // Show open lid
        centrifugeUpperLidOpen.style.visibility = "visible";
        // Hide closed lid
        centrifugeCloseLid.style.visibility = "hidden";
        console.log("9900")

        pipette45.addEventListener("click", function () {
         if(f===301){
         f=302
          ins.innerText = changeins21;
          console.log("hello112233");
          pipette45.style.transform = "translate(750%, -50%) rotate(90deg)";
         

          setTimeout(() => {
            pipette45.style.left = "50%";

            setTimeout(() => {
              const pipette_21ml = document.getElementById("pipette_21ml");
              pipette45.style.bottom = "-22%";

              setTimeout(() => {
                pipette_21ml.style.height = "6.5%";
                water_beaker.style.height = "14.5%";

                setTimeout(() => {
                  ins.innerText = "";
                  pipette_21ml.style.bottom = "63.5%";
                  pipette45.style.bottom = "21.0%";

                  setTimeout(() => {
                    pipette45.style.left = "87.2%";
                    pipette_21ml.style.left = "81.4%";

                    setTimeout(() => {
                      pipette_21ml.style.bottom = "50.5%";
                      pipette45.style.bottom = "8.0%";

                      setTimeout(() => {
                        water_solution_centrifuge.style.visibility = "visible";
                        water_solution_centrifuge.style.height = "33%";
                        butyrometer_water_21ml.style.height = "27%";

                        setTimeout(() => {
                          water_solution_centrifuge.style.opacity = "0%";
                          pipette_21ml.style.height = "0%";

                          setTimeout(() => {
                            pipette45.style.bottom = "21%";

                            setTimeout(() => {
                              pipette45.style.left = "40%";

                              setTimeout(() => {
                                pipette45.style.transform = "translate(-520%, 0%)";

                                setTimeout(() => {
                                  ins.innerText = changeins23;
                                  butyrometer_cork.addEventListener("click", function () {
                                    if(f==302){
                                       f=303
                                    butyrometer_cork.style.bottom = "65%";

                                    setTimeout(() => {
                                      butyrometer_cork.style.left = "80.5%";

                                      setTimeout(() => {
                                        butyrometer_cork.style.bottom = "55.9%";

                                        setTimeout(() => {
                                          ins.innerText = changeins24;
                                       
                                          centrifugeDownWardLidOpen.style.visibility = "hidden";
                                          centrifugeTopFilling.style.opacity = "100%";
                                          centrifugeDownFilling.style.visibility = "visible";
                                          water_butyrometer.style.visibility = "visible";
                                          butyrometer_cork.style.visibility = "hidden";
                                          butyrometer4.style.visibility = "hidden";
                                          butyrometer_water_21ml.style.visibility = "hidden";
                                          butyrometer4.style.visibility = "hidden";
                                          butyrometer4.style.opacity = "0%";

                                          water_butyrometer.addEventListener("click", function () {
                                             if(f===303){
                                               f=304;
                                            water_butyrometer.style.bottom = "40%";

                                            setTimeout(() => {
                                              water_butyrometer.style.left = "20%";

                                              setTimeout(() => {
                                                water_butyrometer.style.height = "15%";
                                                water_butyrometer.style.bottom = "45%";
                                                water_butyrometer.style.width = "0.9%";

                                                setTimeout(() => {
                                                  water_butyrometer.style.transform = "translate(-155%,105%) rotate(17deg)";
                                                  ins.innerText = changeins25;

                                                  straight_butyrometer.addEventListener("click", function () {
                                                   if(f===304){
                                                   f=305;
                                                    straight_butyrometer.style.bottom = "40%";

                                                    setTimeout(() => {
                                                      straight_butyrometer.style.left = "20%";

                                                      setTimeout(() => {
                                                        straight_butyrometer.style.height = "15%";          
                                                        straight_butyrometer.style.bottom = "45%";
                                                        straight_butyrometer.style.width = "0.9%";

                                                        setTimeout(() => {
                                                          straight_butyrometer.style.transform = "translate(330%,105%) rotate(-17deg)";
                                                                ins.innerText = "Click on the close button of centrifuge to close the lid of centrifuge"    
                                                                    
                                                               openButton.addEventListener("click", function () {
                                                                  if(f===305){
      f=306;
                                                                            centrifugeCloseLid.style.visibility = "visible";
                                                                            centrifugeUpperLidOpen.style.visibility = "hidden";
                                                                           openButton.style.visibility = "hidden";
                                                                             closeButton.style.visibility = "visible";
                                                             
setTimeout(() => {
  ins.innerText = changeins26;

  offOnButton.addEventListener("click", () => {
   if(f===306){
      f=307;
   
  // Simulate button press effect
//   offOnButton.style.transform = "scale(0.8)";
  offOnButton.style.borderRadius = "25%";

  setTimeout(() => {
   //  offOnButton.style.transform = "scale(1)";
   ins.innerText = changeins27;
    offOnButton.style.borderRadius = "40%";

    // Show essential elements
    onButton.style.visibility = "visible";
    offOnButton.style.visibility = "hidden";
    rpmDisplay.style.visibility = "visible";
    timeDisplay.style.visibility = "visible";
    timeDisplay.style.opacity = "100%";
    timelabel.style.visibility = "visible";
    rpmlabel.style.visibility = "visible";
    setOff.style.visibility = "visible";
    
    let rpm = 0;
    let timeInSeconds = 0;
    let rpmSet = false;
    let timeSet = false;

    // Handle RPM increase
    rpmIncreaseButton.addEventListener("click", () => {
   
        
      
      if (!rpmSet && rpm <= 1100) {
        rpm += 50;
        rpmDisplay.innerText = `${rpm}`;
        if (rpm >= 1100) {
          rpm = 1100;
          rpmDisplay.innerText = `${rpm}`;
          rpmSet = true;
           f=308;   ins.innerText = "Now the Rpm is set to 1100 , So click on the time increase button to set the time to run for 4 minutes (04.00)"
              setTimeout(() => {
         ins.innerText = "Now the Rpm is set to 1100 , So click on the time increase button to set the time to run for 4 minutes (04.00)"
              },1000);
        }
      } 
    });

    // Handle Time increase only after RPM is set
    timeIncreaseButton.addEventListener("click", () => {
       if(f===308){
        
      setTimeout(() => {
      // ins.innerText = changeins29;
      },1000);
      if (rpmSet && !timeSet && timeInSeconds < 240) {
        timeInSeconds += 30;
        let mins = Math.floor(timeInSeconds / 60);
        let secs = (timeInSeconds % 60).toString().padStart(2, '0');
        timeDisplay.innerText = `${mins}:${secs}`;
        ins.innnerText = "Click on the temp increase button to set the temperature to 65°C "
        if (timeInSeconds >= 240) {
          timeInSeconds = 240;
          timeSet = true;
              ins.innerText = "Click on the set button to set the rpm and time for centrifugation";
          f=309;
         setTimeout(() => {
  
      },1000)

        }
      }
    }else{console.log("no")}});

    // Finalize values when both are set
    setOff.addEventListener("click", () => {
       if(f===309){
         f=310;
      // if (rpmSet && timeSet) {
      //   alert(`Values Set!\nRPM: ${rpm}\nTime: ${Math.floor(timeInSeconds / 60)}:${(timeInSeconds % 60).toString().padStart(2, '0')}`);
      //   setButton.innerText = "SET ✔";
      //   setButton.disabled = true;
      // } else {
      //   alert("Please complete both RPM and Time settings first.");

      // }
      setOff.style.visibility = "hidden";
      setOn2.style.visibility = "visible";
  ins.innerText = "Now Click on the off start stop button to start the centrifuge"
  butyrometer.style.opacity = "0%";
       offstartStop.addEventListener("click", () => {
          if(f===310){
         f=311;
      // if (rpmSet && timeSet) {
      //   alert(`Values Set!\nRPM: ${rpm}\nTime: ${Math.floor(timeInSeconds / 60)}:${(timeInSeconds % 60).toString().padStart(2, '0')}`);
      //   setButton.innerText = "SET ✔";
      //   setButton.disabled = true;
      // } else {
      //   alert("Please complete both RPM and Time settings first.");

      // }
      offstartStop.style.visibility = "hidden";
   startStop.style.visibility = "visible";
   ins.innertext = changeins31;
   startTimer2();

        closeButton.addEventListener("click", () => {
         ins.innerText = changeins33;
          if(f===311  && isTimerFinished){
         f=312;
    console.log("close button12");

    // 1. Simulate button press (reduce size temporarily)
    closeButton.style.transform = "scale(0.7)";
    closeButton.style.borderRadius = "30%";

    setTimeout(() => {
      closeButton.style.transform = "scale(1)";
      closeButton.style.borderRadius = "40%";

      setTimeout(() => {
        closeButton.style.visibility = "hidden";
        openButton.style.visibility = "visible";

        // Show open lid
        centrifugeUpperLidOpen.style.visibility = "visible";
        // Hide closed lid
        centrifugeCloseLid.style.visibility = "hidden";
   //  f=400;
   //   ins.innerText="click on Next button"
   //                                  startbutton.style.visibility="visible"
   //                                  startbutton.innerText="Next" 
                              stp12.style.visibility = "hidden";
           stp15.style.visibility = "hidden";
            stp32.style.visibility = "hidden";
            stp23.style.visibility = "visible";
         butyrometer3.style.visibility = "hidden";
         butyrometer3.style.opacity = "0%";
           butyrometer.style.visibility = "hidden";

            straight_butyrometer.addEventListener("click", () => {
                if(f===312){
         f=313;
   console.log("straight_butyrometer")
     straight_butyrometer.style.transform = "translate(150%,-35%) rotate(-17deg)";
                 setTimeout(() => {
                   straight_butyrometer.style.transform = "rotate(0deg)";
                    straight_butyrometer.style.height = "30%";
                    straight_butyrometer.style.width = "2.1%";
                    straight_butyrometer.style.transition = "1s";
                   setTimeout(() => {
                 straight_butyrometer.style.left = "72.19%";
                    setTimeout(() => {
                   straight_butyrometer.style.transform = "rotate(180deg)";
                   
                         setTimeout(() => {
                            tilted_butyrometer1.style.visibility = "visible";
                   straight_butyrometer.style.visibility = "hidden";
                  
                              setTimeout(() => {
                                 tilted_butyrometer1.style.transition = "1s";
                            tilted_butyrometer1.style.bottom = "10%";
tempDisplay.style.visibility = "visible";
ins.innerText = "Click on the off button of the water bath for heating the solution"

                          // Water Bath Control Functions
function pulse(element) {
    element.style.transform = "scale(1.1)";
    setTimeout(() => {
        element.style.transform = "scale(1)";
    }, 300);
}

function zoominout(element) {
  element.classList.add("pulse-effect");
  setTimeout(() => {
    element.classList.remove("pulse-effect");
  }, 300);
}

// Initialize water bath state
let currentSampleTemp = 25;
let isWaterBathOn = false;

// Water bath switch control



offSwitch.addEventListener("click", function () {
   if(f===313){
      f=314
   offSwitch.style.visibility = "hidden";
 console.log("f=150");
  pulse(offSwitch);
  setTimeout(() => {
    onswitch.click();
    onswitch.style.opacity = "100%";
   isWaterBathOn = true;
     ins.innerText = "Click on the temp increase button to set the temperature to 65°C";
 }, 300);

}else{console.log("error")}});
offSwitch.addEventListener("click", () => {
    if(f===314){
      f=316;
  pulse(offSwitch);
  offSwitch.style.opacity = "100%";
  offSwitch.style.opacity = "0%";

  onswitch.style.borderRadius = "30%";
  setTimeout(() => {
    onswitch.style.borderRadius = "50%";
  }, 300);

  // Show temperatures
  setTempDisplay.style.opacity = "100%";
  actualTempDisplay.style.display = "block";
   actualTempDisplay1.style.display = "block";
  pulse(actualTempDisplay);
  sampleTempDisplay.style.display = "block";
    sampleTempDisplay1.style.display = "block";
  pulse(sampleTempDisplay);
    zoominout(sampleTempDisplay);
  // Reset sample temperature display
  sampleTempDisplay.textContent = "25°C";
   ins.innerText = "Click on the temp increase button to set the temperature to 65°C for 3 minutes";
//   ins.innerText= changeins13;
}else{console.log("error")}});



// Temperature increase control
upOffSwitch.addEventListener("click", function() {
 
   
   
    if (!isWaterBathOn) return;
    
    console.log("Increasing temperature");
    pulse(upOffSwitch);
    
    // Show the "on" version of the switch temporarily

    upOnSwitch.style.opacity = "1";
    
    // Increase temperature by 1°C each click up to 65°C
    if (currentSampleTemp < 65) {
        currentSampleTemp++;
        sampleTempDisplay.textContent = `${currentSampleTemp}°C`;
        pulse(sampleTempDisplay);
        
        if (currentSampleTemp === 65) {
            ins.innerText = "Temperature reached 65°C. Click SET to confirm.";
        }
    }
    
// Gradually increase sample temperature



  if (currentSampleTemp < 65) {
    // Show ON version briefly with pressed effect
    upOnSwitch.style.display = "block";
    upOnSwitch.style.borderRadius = "25%";
       currentSampleTemp++;
    // Hide OFF version temporarily
    upOffSwitch.style.opacity ="0%";

    // Show pulse effect and increase temp
    pulse(upOnSwitch);
    pulse(sampleTempDisplay);


    sampleTempDisplay.textContent = `${currentSampleTemp}°C`;

    // Instruction message
    ins.innerText = "Click on Set Button to set the temperature to 65°C";

    // After short time, restore OFF version, hide ON version, reset radius
    setTimeout(() => {
     
      upOffSwitch.style.opacity = "100%";
      upOnSwitch.style.borderRadius = "50%"; // reset radius
    }, 300); // Duration of switch click simulation
  }


   tilted_butyrometer1.style.visibility = "hidden";
                                               finalfatsolution.style.visibility = "visible"
    ins.innerText = "Click on the set button to set the sample temp of water bath to 65°C for 3 minutes"
setOff2.addEventListener("click", () => {
    if(f===316){
      f=317
  console.log("setoff clicked")
  pulse(setOff2);
  setOn.style.display = "block";
  setOn.style.opacity = "100%";
  setOff2.style.opacity = "0%";
  ins.innerText = `Temperature set to ${currentSampleTemp}°C`;

  let actualTemp = 25;
  let timerValue = 300; // 5 minutes
  let currentTime = timerValue;
  const timerDisplay1 = document.getElementById("timerDisplay1");
  const timerDisplay2 = document.getElementById("timerDisplay2");
  actualTempDisplay.textContent = `${actualTemp}°C`;

// Instead of hiding them initially
timerDisplay1.style.display = "block";
timerDisplay2.style.display = "block";

  // ➤ Temperature increase (gradual then fast)
  let secondsPassed = 0;

  const gradualTemp = setInterval(() => {
    secondsPassed++;
    if (actualTemp < currentSampleTemp) {
      actualTemp++;
      actualTempDisplay.textContent = `${actualTemp}°C`;
    }

    if (secondsPassed >= 1 || actualTemp >= currentSampleTemp) {
      clearInterval(gradualTemp);

      // ➤ Fast increase to 65°C
      const fastIncrease = setInterval(() => {
        if (actualTemp >= 65) {
          clearInterval(fastIncrease);

          // ➤ Start Timer Display Only AFTER Temperature Logic Ends
           startTimer();
             setTimeout(() => {
           ins.innerText = "Click on the off button to half the water bath"
             setTimeout(() => {
                ins.innerText = "Click on the on button to off the water bath"
           ins.innerText = "Click on the butyrometer to see the final fat content percentage"
                  onswitch.addEventListener("click", () => {
          
                      if(f===316){
      f=317
                       if (!isTimerFinished) {
    ins.innerText = "Please wait for the timer to finish before using water bath";
    return;
  }

                     console.log("onswitch clicked")
                    onswitch.style.visibility = "hidden";
                    offSwitch.style.visibility = "visible";
                     offSwitch.style.opacity  = "100%";
                    tilted_butyrometer1.style.visibility = "hidden";
                    timerDisplay2.style.visibility  = "hidden";
                    timerDisplay2.style.opacity = "0%";
                    timerDisplay1.style.visiblity = "hidden";
                    actualTempDisplay.style.display = "none";
   actualTempDisplay1.style.display = "none";

  sampleTempDisplay.style.display = "none";
    sampleTempDisplay1.style.display = "none";
                    finalfatsolution.style.visibility = "visible";
                               
                         
                          }console.log("error")}, 1000);
                           setTimeout(() => {
         
           ins.innerText = "Click on the butyrometer to see the final fat content percentage"
                  finalfatsolution.addEventListener("click", () => {
                            if(f===317 && isTimerFinished){
      f=318
                     console.log("final fat clicked")
                    finalfatsolution.style.bottom = "50%";
                              setTimeout(() => {
         
              finalfatsolution.style.left = "45%";
                     setTimeout(() => {
                        finalfatsolution.style.bottom = "48%";
                                 setTimeout(() => {
           ins.innerText = "yellow layer represent the fat content";
               finalfatsolution.style.height = "46%";
                    finalfatsolution.style.width = "3.4%";
                       
                               
                               setTimeout(() => {
           ins.innerText = " Yellow layer represent the fat content The total fat content percentage is 3.5%";
              alert("Experiment Ended :- The total Fat percentage content is 3.5%");
                               
                               },1000);           
             }, 2000); 
             }, 3000); 
                         
             }, 1000);
                               
                         
                            }console.log("error") }, 1000);
                          
               }, 300);
              }, 300);

              
              }, 300);
        } else {
          actualTemp++;
          actualTempDisplay.textContent = `${actualTemp}°C`;
        }
      }, 25); // Fast increase  // 25
    }
  }, 1000); // Gradual increase  // 200

 

  // Reset UI visuals
  setTimeout(() => {
    setOff2.style.opacity = "100%";
    setOn.style.display = "none";
  }, 0);

// Water bath heating function







 }else{console.log("error")}}, 1000)
                               }, 1000)
         
                 }, 1000)  //
                 }, 1000)
                 }, 2000)
                  
                 }, 1000)
                  
                 }, 1000)


            }else{console.log("no")}});

          
         
         
      }, 1000);
}, 1000);
} else if (!isTimerFinished) {
    ins.innerText = "Please wait for the timer to finish before opening";
  }else{ins.innerText = "Click on the butyromter to see the final fat content percentage"}}, 0);
    }else{console.log("no")}});

  }else{console.log("no")}});

  }, 300);
}else{console.log("no")}
});

}, 1000);

                                                         }else{console.log("no")}})}, 1000);
                                                    }, 0);
    }, 1000);
  }else{console.log("no")}});
}, 1000);
}, 1000);
  });
}
}, 1000);
}, 1000);
}, 1000);
}, 1000);
}else{console.log("no")}}, 1000);
}, 1000);
}, 1000);
}, 1000);
}, 1000);
}, 1000);
}, 1000);
}, 1000);
}, 1000);
}, 1000);
}, 1000);
}, 1000);
          
}, 1000);
         
}}, 1000);
      
}, 1000);
}, 1000);

  }else{console.log("no")}});
}



function startTimer() {
   isTimerFinished = false; 
  let currentTime = 180; // 5 minutes = 300 secondsf
  console.log("12234342");
  let secondsPassed = 0;
  const timerDisplay2 = document.getElementById("timerDisplay2");
    
  timerDisplay2.style.visibility = "visible";
  timerDisplay2.style.display = "block";

  // Phase 1: First 7 seconds - normal speed
  const normalSpeed = setInterval(() => {
    if (secondsPassed >= 1) {
      clearInterval(normalSpeed);

      // Phase 2: Fast mode (like 25ms per tick)
      const fastSpeed = setInterval(() => {
        if (currentTime <= 0) {
          clearInterval(fastSpeed);
          timerDisplay2.textContent = "Timer finished!";
             ins.innerText = "Click on the butyrometer to see the fat percent content percentage obtained by the experiment"
              isTimerFinished = true;
        
        } else {
          const mins = Math.floor(currentTime / 60);
          const secs = currentTime % 60;
          timerDisplay2.textContent = `Timer: ${mins}:${secs.toString().padStart(2, "0")}`;
          currentTime--;
            ins.innerText = "Wait For 3 minutes to properly heating the butyrometer"
        }
      }, 25); // Fast countdown!   //25
    } else {
      const mins = Math.floor(currentTime / 60);
      const secs = currentTime % 60;
      timerDisplay2.textContent = `Timer: ${mins}:${secs.toString().padStart(2, "0")}`;
      currentTime--;
      secondsPassed++;
        ins.innerText = "Wait For 3 minutes to properly heat the butryometer"
    }
  }, 1000); // Normal speed   //1000
}
                           


function startTimer2() {
   isTimerFinished = false; 
  let currentTime = 240; // 5 minutes = 300 secondsf
  console.log("12234342");
  let secondsPassed = 0;
  const timerDisplay2 = document.getElementById("timerDisplay2");
    
  timerDisplay2.style.visibility = "visible";
  timerDisplay2.style.display = "block";

  // Phase 1: First 7 seconds - normal speed
  const normalSpeed = setInterval(() => {
    if (secondsPassed >= 1) {
      clearInterval(normalSpeed);

      // Phase 2: Fast mode (like 25ms per tick)
      const fastSpeed = setInterval(() => {
        if (currentTime <= 0) {
          clearInterval(fastSpeed);
          timerDisplay2.textContent = "Timer finished!";
              isTimerFinished = true;
         ins.innerText = "Click on the open button to open the lid of centrifuge"
        } else {
          const mins = Math.floor(currentTime / 60);
          const secs = currentTime % 60;
          timerDisplay2.textContent = `Timer: ${mins}:${secs.toString().padStart(2, "0")}`;
          currentTime--;
           ins.innerText = "Wait For 4 minutes to complete the process of centrifugation"
        }
      }, 25); // Fast countdown!   //25
    } else {
      const mins = Math.floor(currentTime / 60);
      const secs = currentTime % 60;
      timerDisplay2.textContent = `Timer: ${mins}:${secs.toString().padStart(2, "0")}`;
      currentTime--;
      secondsPassed++;
      ins.innerText = "Wait For 4 minutes to complete the process of centrifugation"
    }
  }, 1000); // Normal speed   //1000
}
                           