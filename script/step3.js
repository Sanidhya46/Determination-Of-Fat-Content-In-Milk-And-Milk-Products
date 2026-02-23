
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

const clock1 = document.getElementById("clock1");

const offstartStop = document.getElementById("Off_Start_Stop");
// const upOffSwitch = document.getElementById("upOffSwitch");
// const upOnSwitch = document.getElementById("Up_on_switch");

const rpmDecreaseButton = document.getElementById("rpm_decrease_button");
const rpmIncreaseButton = document.getElementById("rpm_increase_button");

const timeDecreaseButton = document.getElementById("time_decrease_switch");
const timeIncreaseButton = document.getElementById("Time_increase_switch");

const timerDisplay33 = document.getElementById("timerDisplay33");
const finalfatsolution = document.getElementById("finalfatsolution");


// const onSwitchHolder = document.getElementById("onSwitchHolder");
const setOff2 = document.getElementById("setOff2");
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
const straight_butyrometer_last = document.getElementById("straight_butyrometer_last");

const ADD = document.getElementById("ADD"); 
const MEN = document.getElementById("MEN"); 
const SET = document.getElementById("SET");

const waterbath_front4 = document.getElementById("waterbath_front4");

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
let changeins31 = "Click o n the Stop button to stop the centrifuge";
let changeins32 = "Click on the close button to open the lid to check fat percent content";
let changeins33 = "Click on the ON button of water bath";






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

timerDisplay23.style.visibility = "hidden"
timerDisplay33.style.visibility = "hidden"

  rpmDisplay.style.font= "visible";
    timeDisplay.style.visibility = "visible";
centrifuge();

function centrifuge() {
   console.log("heello")
   pipette45.addEventListener("click", () => {
   if(f===300){
     console.log("open  gate")
     clock1.style.visibility = "hidden"
     timerDisplay33.style.visibility = "hidden"
   f=301;
    console.log("close button");
  ins.innerText =  "Click on the pipette to draw 21.75 mL water and pour it into the another butyrometer";
  //   // 1. Simulate button press (reduce size temporarily)
  //   closeButton.style.transform = "scale(0.7)";
  //   closeButton.style.borderRadius = "30%";

   pipette45.style.transform = "translate(750%, -50%) rotate(90deg)";

    setTimeout(() => {
      // closeButton.style.transform = "scale(1)";
      // closeButton.style.borderRadius = "40%";

       pipette45.style.left = "53%";

      setTimeout(() => {

        const pipette_21ml = document.getElementById("pipette_21ml");
              pipette45.style.bottom = "-22%";
        // closeButton.style.visibility = "hidden";
        // openButton.style.visibility = "visible";
        setTimeout(() => {
             pipette_21ml.style.height = "6.5%";
                water_beaker.style.height = "14.5%";
          setTimeout(() => {
       

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
                    ins.innerText = "Click on the stopper to close the butyrometer"
        butyrometer_cork.addEventListener("click", function () {
        //   **** pipette45.addEventListener("click", function () {
         if(f===301){
         f=302
          // ins.innerText = changeins21;
          console.log("hello112233");
          // pipette45.style.transform = "translate(750%, -50%) rotate(90deg)";
         
          butyrometer_cork.style.bottom = "65%";

          setTimeout(() => {
            // pipette45.style.left = "50%";
       
            butyrometer_cork.style.left = "80.5%";
            setTimeout(() => {
              // const pipette_21ml = document.getElementById("pipette_21ml");
              // pipette45.style.bottom = "-22%";

              butyrometer_cork.style.bottom = "55.9%";

              // setTimeout(() => {
              //   // pipette_21ml.style.height = "6.5%";
              //   // water_beaker.style.height = "14.5%";

              //   ins.innerText = "Click on the open button of centrifuge to open the lid of centrifuge";

              //   setTimeout(() => {
                  // ins.innerText = "";
                  // pipette_21ml.style.bottom = "63.5%";
                  // pipette45.style.bottom = "21.0%";

                  // setTimeout(() => {
                  //   // pipette45.style.left = "87.2%";
                  //   // pipette_21ml.style.left = "81.4%";

                  //   setTimeout(() => {
                  //     // pipette_21ml.style.bottom = "50.5%";
                  //     // pipette45.style.bottom = "8.0%";

                      // setTimeout(() => {
                      //   // water_solution_centrifuge.style.visibility = "visible";
                      //   // water_solution_centrifuge.style.height = "33%";
                      //   // butyrometer_water_21ml.style.height = "27%";

                      //   setTimeout(() => {
                      //     // water_solution_centrifuge.style.opacity = "0%";
                      //     // pipette_21ml.style.height = "0%";

                      //     setTimeout(() => {
                      //       // pipette45.style.bottom = "21%";

                            // setTimeout(() => {
                            //   // pipette45.style.left = "40%";

                            //   setTimeout(() => {
                            //     // pipette45.style.transform = "translate(-520%, 0%)";

                                setTimeout(() => {
                                  ins.innerText = "Click on the ON button of centrifuge to On it";
                                  offOnButton.addEventListener("click", function () {
                                    if(f === 302){
                                      f = 302.5
                                      onButton.style.visibility = "visible"
                                      offOnButton.style.visibility = "hidden"
                                      rpmDisplay.style.visibility = "visible";
    timeDisplay.style.visibility = "visible";
    timeDisplay.style.display = "block";
    rpmlabel.style.visibility = "visible";
    rpmLabel.style.visibility = "visible";
    timelabel.style.visibility = "visible";
    timeDisplay.style.opacity = "100%"
    console.log("gate is ready to open f is ?" , f)
                                    closeButton.addEventListener("click", function () {
                                     
                                    console.log("f for opening the centrifuge ", f)
                                    if(f===302.5){
                                       f=303


                                    // butyrometer_cork.style.bottom = "65%";

                                       closeButton.style.transform = "scale(0.7)";
    closeButton.style.borderRadius = "30%";

                                    setTimeout(() => {
                                      // butyrometer_cork.style.left = "80.5%";

                                        closeButton.style.transform = "scale(1)";
      closeButton.style.borderRadius = "40%";

                                      setTimeout(() => {
                                        // butyrometer_cork.style.bottom = "55.9%";
                                        closeButton.style.visibility = "hidden";
        openButton.style.visibility = "visible";
         centrifugeUpperLidOpen.style.visibility = "visible";
       
        centrifugeCloseLid.style.visibility = "hidden";
        console.log("9900")

                                        setTimeout(() => {
                                          ins.innerText = "Click on the water filled butyromter to place it into the centrifuge";

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
                                                  ins.innerText = "Click on the sample filled butyromter to place it into the centrifuge";

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
                                                                ins.innerText = "Click on the CLOSE LID button of centrifuge to close it"    
                                                                    
                                                               openButton.addEventListener("click", function () {
                                                                  if(f===305){
      f=306;
                                                                            centrifugeCloseLid.style.visibility = "visible";
                                                                            centrifugeUpperLidOpen.style.visibility = "hidden";
                                                                           openButton.style.visibility = "hidden";
                                                                             closeButton.style.visibility = "visible";
                                                             
setTimeout(() => {
  ins.innerText = "Click on the On button of the centrifuge";

  
   if(f===306){
      f=307;
   
  // Simulate button press effect
//   offOnButton.style.transform = "scale(0.8)";
  offOnButton.style.borderRadius = "25%";

  setTimeout(() => {
   //  offOnButton.style.transform = "scale(1)";
   ins.innerText = "Click on MENU button and then increase and decrease symbol to set RPM of 1100";
    offOnButton.style.borderRadius = "40%";

    // Show essential elements
    onButton.style.visibility = "visible";
    offOnButton.style.visibility = "hidden";
    rpmDisplay.style.visibility = "visible";
    timeDisplay.style.visibility = "visible";
    timeDisplay.style.opacity = "100%";
    timelabel.style.visibility = "visible";

    let rpm = 0;
    let timeInSeconds = 0;
    let rpmSet = false;
    let timeSet = false;

    // Handle RPM increase
    MEN.addEventListener("click", () => {
       if(f=== 307){
        pulse(MEN)
        f = 307.5;
        rpmlabel.style.visibility = "visible";
        rpmlabel.style.fontWeight = "bold"
        rpmDisplay.style.fontWeight = "bold"

    ADD.addEventListener("click", () => {
    pulse(ADD)
        if(f === 307.5){
      
      if (!rpmSet && rpm <= 1100) {
        rpm += 50;  
        rpmDisplay.innerText = `${rpm}`;
        if (rpm >= 1100) {
          rpm = 1100; 
          rpmDisplay.innerText = `${rpm}`;
          rpmSet = true;
           f=307.8;   
              setTimeout(() => {
         ins.innerText = "Click on SET button"

         SET.addEventListener("click", () => {
          if(f === 307.8){
            f = 307.9;
            pulse(SET)
            ins.innerText = "Click on MENU button and then up and down button to set TIME of 4 min"
            MEN.addEventListener("click", () => {
              if(f === 307.9){
                pulse(MEN);
                rpmlabel.style.fontWeight = "500"
                rpmDisplay.style.fontWeight = "500"
                timeDisplay.style.fontWeight = "900"
                timelabel.style.fontWeight = "900"
               f = 308;
              }
            });
          }
        });
              },1000);
        }
      } 
    }
    });
  }else{console.log("the value of f is not 308" , f)}
  });

    // Handle Time increase only after RPM is set
    ADD.addEventListener("click", () => {
       if(f===308){
        pulse(ADD)
      setTimeout(() => {
      // ins.innerText = changeins29;  
      },1000);
      if (rpmSet && !timeSet && timeInSeconds < 240) {
        timeInSeconds += 30;
        let mins = Math.floor(timeInSeconds / 60);
        let secs = (timeInSeconds % 60).toString().padStart(2, '0');
        timeDisplay.innerText = `${mins}:${secs}`;
        ins.innnerText = "Click on the increase button symbol to set temperature of water bath at 65°C "
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
    SET.addEventListener("click", () => {
       if(f===309){
         f=310;
         pulse(SET);
      
     
      setOn2.style.visibility = "visible";
  ins.innerText = "Now Click on the RUN button to start the centrifuge"
  butyrometer.style.opacity = "0%";
  RUN.addEventListener("click", () => {
          if(f===310){
         f=311;
     pulse(RUN);
     let totalTime = 25;   // seconds
     let riseTime = 4;    // seconds
     let fallTime = 4;    // seconds
     let maxRPM = 1100;
     
     let intervalTime = 50; // ms (smooth)
     let currentTime = 0;
     
     let startTimeDisplay = 4.0; // 04.00 start
     let timeDisplayValue = startTimeDisplay;
     
     let timer = setInterval(() => {
       currentTime += intervalTime / 1000; // in seconds
     
       let rpm = 0;
     rpmDisplay.innerText = "0"
       // ⬆ Rising phase (0 → 1100)
       if (currentTime <= riseTime) {
         let progress = currentTime / riseTime;
         rpm = maxRPM * progress;
       }
       
       // ➡ Steady phase
       else if (currentTime > riseTime && currentTime <= totalTime - fallTime) {
         rpm = maxRPM;
       }
     
       // ⬇ Falling phase (1100 → 0)
       else {
         let fallProgress = (currentTime - (totalTime - fallTime)) / fallTime;
         rpm = maxRPM * (1 - fallProgress);
       }
     
       rpm = Math.max(0, Math.round(rpm));
       rpmDisplay.innerText = rpm;
     
       // ⏱ timeDisplay: 04.00 → 0.00 in 25s
// ⏱ Timer should start ONLY after RPM reaches 1100 (after riseTime)
  
if (currentTime <= riseTime) {
  // During rising RPM → keep timer frozen
  timeDisplay.innerText = startTimeDisplay.toFixed(2);
} 
else {
  // After RPM reached max → start countdown
  let effectiveTime = currentTime - riseTime;
  let effectiveTotal = totalTime - riseTime;

  timeDisplayValue = startTimeDisplay * (1 - effectiveTime / effectiveTotal);
  timeDisplayValue = Math.max(0, timeDisplayValue);

  let seconds = timeDisplayValue.toFixed(2).padStart(5, "0");
  timeDisplay.innerText = seconds;
}
     
       // ⛔ Stop
       if (currentTime >= totalTime) {
         clearInterval(timer);
         rpmDisplay.innerText = 0;
         timeDisplay.innerText = "00.00";
         f = 311.5;
         ins.innerText = "Click on the OPEN LID button to open the lid of centrifuge"
       }
     
     }, intervalTime);
     



   ins.innertext = changeins31;
   startTimer2();
        
        closeButton.addEventListener("click", () => {
         
         ins.innerText = changeins33;
          if(f===311.5){
         f=312;
         waterbath_front4.style.visibility = "visible"
         waterbath_front4.style.opacity = "100%"
         clock1.style.visibility = "visible"
         clock1.style.display = "block"
         clock1.style.opacity = "100%"
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
           
          
           timerDisplay33.style.left = "40%";
           clock1.style.left = "37%";
           
           offSwitch.addEventListener("click", function () {
            if(f===312){
               f=313
         //    offSwitch.style.visibility = "hidden";
         //  console.log("f=150");
         //   pulse(offSwitch);
         console.log("f = 313")
           setTimeout(() => {
             onswitch.click();
             onswitch.style.opacity = "100%";
            isWaterBathOn = true;
              ins.innerText = "Click on the increase button symbol to set temperature of water bath at 65°C";
          }, 300);
         
         }else{console.log("error")}});
 
         offSwitch.addEventListener("click", () => {
          if(f===313){
            f=314;
            console.log("f = 314")
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
         ins.innerText = "Click on the increase button symbol to set temperature of water bath at 65°C";
      //   ins.innerText= changeins13;
      }else{console.log("error")}});

   let currentSampleTemp1 = 25;
      upOffSwitch.addEventListener("click", () => {
        if (f !== 314) return;
        finalfatsolution.style.visibility = "hidden";
        console.log("upoffswitch clicked");
      
        pulse(upOffSwitch);
      
        upOnSwitch.style.opacity = "1";
          console.log( "current sample temp is ", currentSampleTemp1)
        if (currentSampleTemp1 < 65) {
          currentSampleTemp1++;
         console.log(currentSampleTemp1)
          sampleTempDisplay.textContent = `${currentSampleTemp1}°C`;
          pulse(sampleTempDisplay);
      
          upOffSwitch.style.opacity = "0%";
          upOnSwitch.style.display = "block";
          upOnSwitch.style.borderRadius = "25%";
      
          ins.innerText = "Click on Set Button to set the temperature to 65°C";
      
          setTimeout(() => {
            upOffSwitch.style.opacity = "100%";
            upOnSwitch.style.borderRadius = "50%";
          }, 300);
      
          if (currentSampleTemp1 === 65) {
            ins.innerText = "Temperature reached 65°C. Click SET to confirm.";
            f = 316;
          }
        }else{console.log("the problem is in current sample temp to 65")}
      
        tilted_butyrometer1.style.visibility = "hidden";
       
        ins.innerText = "Click on the SET button and wait to reach the desired temperature of 65°C";
      });
      
      
      setOff2.addEventListener("click", () => {
        if (f !== 316) return;
        f = 317;
      
        console.log("setoff clicked");
      
        pulse(setOff2);
        setOn.style.display = "block";
        setOn.style.opacity = "100%";
        setOff2.style.opacity = "0%";
      
      
      
        let actualTemp = 25;
        let timerValue = 300;
        let currentTime = timerValue;
      
        const timerDisplay1 = document.getElementById("timerDisplay1");
        const timerDisplay33 = document.getElementById("timerDisplay33");
      
        actualTempDisplay.textContent = `${actualTemp}°C`;
        timerDisplay1.style.display = "block";
        timerDisplay33.style.display = "block";
      
        let secondsPassed = 0;
      
        const gradualTemp = setInterval(() => {
          secondsPassed++;
      
          if (actualTemp < currentSampleTemp1) {
            actualTemp++;
            actualTempDisplay.textContent = `${actualTemp}°C`;
          }
      
          if (secondsPassed >= 1 || actualTemp >= currentSampleTemp) {
            clearInterval(gradualTemp);
      
            const fastIncrease = setInterval(() => {
              if (actualTemp >= 65) {
                clearInterval(fastIncrease);

      
                setTimeout(() => {
                  ins.innerText = "Click on the off button to half the water bath";
      
                  setTimeout(() => {
                    ins.innerText = "Click on sample butyrometer to place it into the water bath for 3 min";
                    
                    straight_butyrometer.addEventListener("click", function () {
                      if (f !== 317) return;
                      
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
                        straight_butyrometer.style.zIndex = "10";
                              setTimeout(() => {
                                 tilted_butyrometer1.style.visibility = "visible";
                        straight_butyrometer.style.visibility = "hidden";
                         f = 318;
                                   setTimeout(() => {
                                      tilted_butyrometer1.style.transition = "1s";
                                 tilted_butyrometer1.style.bottom = "10%";
     tempDisplay.style.visibility = "visible";
     setTimeout(() => {
      finalfatsolution.style.visibility = "visible"
      tilted_butyrometer1.style.visibility = "hidden"
     
     ins.innerText = "Click on the off button of the water bath for heating the solution"
      startTimer();
     
      setTimeout(() => {
       
        setTimeout(() => {
            
         console.log("value now f is", f)

        }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
}, 1000);
}, 1000);
                     
                       
                      
      
                      // onswitch.style.visibility = "hidden";
                      // offSwitch.style.visibility = "visible";
                      // offSwitch.style.opacity = "100%";
      
                      // tilted_butyrometer1.style.visibility = "hidden";
                      // timerDisplay33.style.visibility = "hidden";
                      // timerDisplay1.style.visibility = "hidden";
      
                      // actualTempDisplay.style.display = "none";
                      // actualTempDisplay1.style.display = "none";
                      // sampleTempDisplay.style.display = "none";
                      // sampleTempDisplay1.style.display = "none";
      
                      
                      f = 318;
                      
                      console.log("final f is ", f)
                      ins.innerText = "Click on sample butyrometer to place it into the water bath for 3 min"
                    });
      
                  }, 1000);
                }, 300);  // 300
              } else {
                actualTemp++;
                actualTempDisplay.textContent = `${actualTemp}°C`;
                console.log("actual temp is", f)
                console.log("final f is" , f)
              }
            }, 100);   // 100
          }
        }, 1000);
      
        setTimeout(() => {
          setOff2.style.opacity = "100%";
          setOn.style.display = "none";
        }, 1000);
      });
      
      
      
      

          
         
         
      }, 1000);
}, 1000);
} else if (!isTimerFinished) {
    ins.innerText = "Please wait for the timer to finish before opening";
  }else{ins.innerText = "Click on the butyromter to see the final fat content percentage"}}, 0);
    }else{console.log("centrifuge not open because the value of f is" , f)};
  })

  }else{console.log("no")}});

  }, 300);  //300
}else{console.log("no")}


}, 1000);

                                                         }else{console.log("no")}})}, 1000);
                                                    }, 1000);
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
}else{console.log("no")}}, 0); 
                                }
                                })
}, 1000);
}, 1000);
}, 1000);




         
}}, 1000);
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

  }else{console.log("no")}});
}



function startTimer() {
   isTimerFinished1 = false; 
  let currentTime = 180; // 5 minutes = 300 secondsf
  console.log("12234342");
  let secondsPassed = 0;
  const timerDisplay33 = document.getElementById("timerDisplay33");
    
  timerDisplay33.style.visibility = "visible";
  timerDisplay33.style.display = "block";

  // Phase 1: First 7 seconds - normal speed
  const normalSpeed = setInterval(() => {
    if (secondsPassed >= 1) {
      clearInterval(normalSpeed);

      // Phase 2: Fast mode (like 25ms per tick)
      const fastSpeed = setInterval(() => {
        if (currentTime <= 0) {
          clearInterval(fastSpeed);
          timerDisplay33.textContent = "00:00";
             ins.innerText = "Click on the NEXT button"
              isTimerFinished1 = true;
              f = 400;
              startbutton.style.visibility = "visible";
             
        
        } else {
          const mins = Math.floor(currentTime / 60);
          const secs = currentTime % 60;
          timerDisplay33.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
          currentTime--;
            
        }
      }, 25); // Fast countdown!   //25
    } else {
      const mins = Math.floor(currentTime / 60);
      const secs = currentTime % 60;
      timerDisplay33.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
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
  const timerDisplay33 = document.getElementById("timerDisplay33");


  // Phase 1: First 7 seconds - normal speed
  const normalSpeed = setInterval(() => {
    if (secondsPassed >= 1) {
      clearInterval(normalSpeed);

      // Phase 2: Fast mode (like 25ms per tick)
      const fastSpeed = setInterval(() => {
        if (currentTime <= 0) {
          clearInterval(fastSpeed);
          timerDisplay33.textContent = "00:00";
              isTimerFinished = true;
         
             

       
        } else {
          const mins = Math.floor(currentTime / 60);
          const secs = currentTime % 60;
          timerDisplay33.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
          currentTime--;
           ins.innerText = "Wait For 4 minutes to complete the process of centrifugation"
        }
      }, 25); // Fast countdown!   //25
    } else {
      const mins = Math.floor(currentTime / 60);
      const secs = currentTime % 60;
      timerDisplay33.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
      currentTime--;
      secondsPassed++;
      ins.innerText = "Wait For 4 minutes to complete the process of centrifugation"
    }
  }, 1000); // Normal speed   //1000
}
        



    finalfatsolution.addEventListener("click", () => {
      if (f === 400.2 && isTimerFinished){
    
      console.log("final fat clicked");
      ins.innerText = "Click on the butyrometer to take out from the water bath and put in the stand"
      finalfatsolution.style.bottom = "45%";
      setTimeout(() => {
      finalfatsolution.style.left = "19.3%";
    
      setTimeout(() => {
       
       
        finalfatsolution.style.height = "50%";
        finalfatsolution.style.width = "3.1%";
        startbutton.innerText = "RESULT"
      
       
          setTimeout(() => {
         finalfatsolution.style.bottom = "12%"
         ins.innerText = "Click on the RESULT button to see result"
     
         f = 400.5;
      startbutton.style.visibility = "visible";
      startbutton.style.opacity = "100%"
      startbutton.style.display = "block"
          
 
          }, 1000);  //2000
      
      }, 1000);
    }, 1000);
      }else{console.log("the error is f is not 402 or istimer finished not true",f)}
      }, 1000);
    
   
finalresult();
function finalresult() {
      finalfatsolution.addEventListener("click", () => {
        if (f === 401){
          f = 402;
          finalfatsolution.style.bottom= "35%";
      setTimeout(() => {
      
        finalfatsolution.style.left = "50%";
        setTimeout(() => {
        finalfatsolution.style.bottom = "18%"

          setTimeout(() => {
            ins.innerText = "Yellow layer represent the fat content";
    
            finalfatsolution.style.height = "77%";
            finalfatsolution.style.width = "6%";
          
            setTimeout(() => {
              ins.innerText = "Yellow layer represent the fat content. The total fat content percentage is 3.5%";
              alert("Experiment Ended :- The total Fat percentage content is 3.5%");
            
            }, 1000);
          }, 1000);
        }, 1000);
        },1000)
      }
          }, 1000);
        }