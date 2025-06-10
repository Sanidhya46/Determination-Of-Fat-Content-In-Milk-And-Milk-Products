

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


let m100 = document.querySelector("#m100")


console.log("stp1");

const iso = document.querySelector('#iso');
const Cork = document.querySelector('#butyrometer_cork');
const tiltedsol = document.querySelector('#tiltedsol');




let changeins = "Click the pipette to draw 10 ml of H₂SO₄."
let changeins1 = "Click on pipette again to pour h2so4 to bytyrometer" 
let changeins2 = "Click on the pipette to draw 10.75 ml of milk."
let changeins3 = "Click on the pipette to transfer the milk to the butyrometer."
let changeins4 = "Click on the amyl alcohol bottle cork to open it."
let changeins5 = "Click on the pipette to draw 1 ml of amyl alcohol.." 
let changeins6 = "Click on the pipette to transfer the amyl alcohol."
let changeins7 = "Click on the stopper to firmly close it."
let changeins8 = "Click on butyrometer to shake gently until contents are mixed properly."
let changeins9 = "Click on butyrometer to shake gently."
let changeins10 = "Click on butyrometer to replace in stand"
let changeins11 = "Click on the next button"



let ssolheight="15%"
let msolheight="27%"
let psolheight="4.8%"
let psolbottom="45.3%"
let psolbottom1="58.5%"
let psolleft="12.30%"
let pipetteleft="71.3%"



sb.style.opacity = "100%";
sb.style.visibility = "visible"



pipette1();
function pipette1() {
    if (f === 1) {
        f = 2; // Move to the next step so this function doesn't run again unintentionally
        console.log("pipette");
      pipette.addEventListener("click", function () {
        if(f==2){
            
        ins.innerText = "Click on the pipette to pipette out 10ml h2so4 solution from the beaker "
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
                },1000);
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
                                },1000);
                            }, 1000);
                        }, 1000);
    }else{console.log("ghnta")}
}

function pipette3() {
    if (f === 5) {
        f = 6;
       ins.innerText = changeins2;

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
                    f=7
                    
                },1000);
            },1000);
        }, 1000);
    
}
}


function pipette4() {
    if (f === 7) {
        f = 8;
       ins.innerText = changeins2;
       
        // Step 1: Move pipette to milk beaker (around 70px right from H₂SO₄ ≈ 52%)
      
        pipette.style.transform = "translate(607%,-180%) ";
              pm.style.bottom = "60%"; 
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
                    yb.style.opacity = "100%";
                    setTimeout(() => {
                         bAcid.style.opacity= "0%"
                        finalSol.style.opacity = '100%';
                         pipette.style.transform = "translate(0%,0%) rotate(-90deg) ";
                    ins.innerText="click on Next button"
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
    setTimeout(function () {
        isocap.style.transform = "translate(0%,-150%)";
         
        setTimeout(function () {
         isocap.style.transform = "translate(160%,-150%)";
             setTimeout(function () {
         isocap.style.transform = "translate(160%,  500%)";
         ins.innerText = changeins5;
           pipette.addEventListener("click", function () {
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
              pipetteamyl.style.bottom = "47%";
                            setTimeout(function () {
           
            pipette.style.transform = "translate(0%,-180%)";
            pipetteamyl.style.bottom = "59%";
              
              
                                     setTimeout(function () {
           
            pipette.style.transform = "translate(1506%,-180%)";
            pipetteamyl.style.left = "74.1%";
               setTimeout(function () {
           
            pipette.style.transform = "translate(1506%,-170%)";
            pipetteamyl.style.bottom = "54.9%";
            
              
              setTimeout(function () {
             amyldrop1.style.opacity = "100%";
            
            pipetteamyl.style.height = "3%";
            
              setTimeout(function () {
             
            amyldrop1.style.bottom = "48%"
            // pipetteamyl.style.height = "0%";
            
              
              setTimeout(function () {
             
            amyldrop2.style.opacity = "100%";
            // pipetteamyl.style.height = "0%";
            
              setTimeout(function () {
             
            amyldrop2.style.bottom = "48%";
            
            // pipetteamyl.style.height = "0%";
            pipetteamyl.style.opacity = "0%";
              
              setTimeout(function () {
             
            amyldrop2.style.opacity = "0%";
            amyldrop1.style.opacity = "0%";
            
            // pipetteamyl.style.height = "0%";
            
              
              setTimeout(function () {
             
           
            // pipetteamyl.style.height = "0%";
            
               pipette.style.transform = "translate(1506%,-170%)";
              
              
               setTimeout(function () {
             
           
            // pipetteamyl.style.height = "0%";
            
               pipette.style.transform = "translate(0%, 0%) rotate(-90deg)";
              
       
                  
                  ins.innerText = changeins7;
      
                         Cork.addEventListener("click", function () {
                              Cork.style.transform = "translate(0%, -850%) rotate(0deg)";
                                setTimeout(function () {
                                        Cork.style.transform = "translate(0%, -850%)rotate(0deg)";
                                        setTimeout(function () {
                                        Cork.style.transform = "translate(767%, -850%)rotate(0deg)";
                                             setTimeout(function () {
                                        Cork.style.transform = "translate(767%, -725%)rotate(0deg)";
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
                         });
              
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
                  }, 1000);
                  }, 1000);
                  }, 1000);
                });
          }, 1000);
          }, 1000);

       

    }, 1000);
});   
        
    }
    
}



//   pipette
 // Uncomment and modify as needed:
        // setTimeout(function () {
        //     pipette.style.rotate = "0deg";
        //     pipette.style.transform = "translate(0%,-150%)";
        //     sc.style.transform = "translate(0%,-50%)";
        // }, 1000);







// function drawWater() {
//     if (f === 2) {
//         f = 3;

//         m100.style.transitionDuration = "0s";
//         m100.style.top = "60%";
//         m100.style.left = "20%";
//         m100.style.transform = "rotate(0deg)";
//         m100.style.height = "0%";

//         setTimeout(() => {
//             m100.style.transitionDuration = "1s";
//             m100.style.top = "30%";
//             m100.style.left = "-15%";
//             m100.style.transform = "rotate(-25deg)";
//             m100.style.height = "35%";

//             setTimeout(() => {
//                 m100.style.top = "60%";
//                 m100.style.left = "20%";
//                 m100.style.transform = "rotate(0deg)";
//                 m100.style.height = "0%";

//                 setTimeout(() => {
//                     ins.innerText = changeins2;
//                 }, 1000);
//             }, 1500);
//         }, 100);
//     }
// }

// function drawWater() {
//     if (f === 2) {
//         m100.style.transform = "translate(-140%,-80%) rotate(-25deg)";
//         m100.style.height = "35%";
//         setTimeout(() => {
//             m100.style.transform = "translate(0,0) rotate(0)";
//             m100.style.height = "0%";
//             f = 3;
//             ins.innerText = changeins2;
//         }, 1500);
//     }
// }

// function transferAcid() {
//     if (f === 3) {
//         pe1.style.transform = "translate(-130%,-70%) rotate(-20deg)";
//         pAcid.style.height = "0%"; // simulate pour
//         bAcid.style.height = "20%"; // show acid in butyrometer
//         setTimeout(() => {
//             pe1.style.transform = "translate(0,0) rotate(0)";
//             f = 4;
//             ins.innerText = changeins3;
//         }, 1500);
//     }
// }

// function drawMilk() {
//     if (f === 4) {
//         pm.style.transform = "translate(-125%,-65%) rotate(-20deg)";
//         mbOv.style.height = "27%"; // simulate milk draw
//         setTimeout(() => {
//             pm.style.transform = "translate(0,0) rotate(0)";
//             mbOv.style.height = "0%";
//             f = 5;
//             ins.innerText = changeins4;
//         }, 1500);
//     }
// }

// function transferMilk() {
//     if (f === 5) {
//         pm.style.transform = "translate(-135%,-75%) rotate(-20deg)";
//         bAcid.style.height = "45%"; // assume milk + acid
//         setTimeout(() => {
//             pm.style.transform = "translate(0,0) rotate(0)";
//             ins.innerText = "Step complete. Click Next.";
//         }, 1500);
//     }
// }


// function diswater(){
//     if(f==1){
//         f=2
//         dwater.style.transform="translate(-150%,-80%) rotate(-25deg)"
//         dsol.style.transform=dsoltest1
//         // "translate(-222%,-120%) rotate(-25deg)"
//         setTimeout(function(){
//             ms.style.visibility="visible"
//             setTimeout(function(){
//                 msol.style.height=msolheight
//                 dsol.style.height=dsolheight
//                 dsol.style.transform=dsoltest2
//                 // "translate(-219%,-130%) rotate(-25deg)"
//                 setTimeout(function(){
//                     // mcyl.style.transitionDuration="0s"
//                     // msol.style.transitionDuration="0s"
//                     // msol.style.visibility="hidden"
//                     // mtest.style.visibility="visible"
//                     // mcyl.style.visibility="hidden"
//                     // m100.style.transitionDuration="1s"
//                     dwater.style.transform="translate(0%,0%) rotate(0deg)"
//                     dsol.style.transform="translate(0%,0%) rotate(0deg)"
//                     ms.style.visibility="hidden"
//                     f=5
//                     ins.innerText=changeins4
//                     if(dessicator==1){
//                         f=3
//                         ins.innerText=changeins
//                     }
//                     // else{
//                     // }
//                 },1000)
//             },500)
//         },1000)

//     }
// }


// function measure(){
//     if(f==3){
//         f=4
//         m100.style.transitionDuration="1s"
//         m100.style.top="24%"
//         mcyl.style.top="24%"
//         msol.style.bottom=msolbottom
//         setTimeout(function(){
//             m100.style.left=mtestleft
//             mcyl.style.left=mtestleft
//             msol.style.left=msolleft
//             setTimeout(function(){
//                 m100.style.rotate="25deg"
//                 mcyl.style.rotate="25deg"
//                 msol.style.rotate="25deg"
//                 // mtestleft+=0.1
//                 m100.style.left=mtestleft1
//                 mcyl.style.left=mtestleft1
//                 ms.style.left=msleft
//                 ms.style.top="27.5%"
//                 ms.style.height="55%"
//                 setTimeout(function(){
//                     m100.style.transitionDuration="0s"
//                     ms.style.visibility="visible"
//                     msol.style.visibility="visible"
//                     mcyl.style.visibility="visible"
//                     m100.style.visibility="hidden"
//                     msol.style.transitionDuration="1s"
//                     mcyl.style.transitionDuration="1s"
//                     setTimeout(function(){
//                         msol.style.height="0%"
//                         msol.style.left=msolleft1
//                         msol.style.bottom=msolbottom1
//                         m100.style.rotate="0deg"
//                         dessi.style.height="4.7%"
//                         setTimeout(function(){
//                             ms.style.visibility="hidden"
//                             mcyl.style.left="8%"
//                             mcyl.style.rotate="0deg"
//                             msol.style.rotate="0deg"
//                             msol.style.left="9.1%"
//                             m100.style.left="8%"
//                             setTimeout(function(){
//                                 mcyl.style.top="60%"
//                                 ms.style.top="55%"
//                                 msol.style.bottom="11%"
//                                 m100.style.top="60%"
//                                 ms.style.left="10.7%"
//                                 ms.style.height="31%"
//                                 f=1
//                                 ins.innerText=changeins4
//                                 dessiicator1()
//                                 ins.innerText=changeins1
//                                 if(dessicator==6){
//                                     ins.innerText="click on Next button"
//                                     startbutton.style.visibility="visible"
//                                     startbutton.innerText="Next"
//                                 }
//                             },1000)
//                         },1000)
//                     },100)
//                 },1000)
//             },1000)
//         },1000)
//     }
// }








// // function pipette1(){
// //     if(f==5){
// //         f=6
// //         pipette.style.rotate="0deg"
// //         pipette.style.transform="translate(0%,-250%)"
// //         setTimeout(function(){
// //             pipette.style.transform="translate(190%,-250%)"
// //             sc.style.transform="translate(0%,-50%)"
// //             setTimeout(function(){
// //                 sc.style.transform="translate(50%,-50%) rotate(60deg)"
// //                 pipette.style.transform="translate(190%,-100%)"
// //                 setTimeout(function(){
// //                     psol.style.height=psolheight
// //                     ss.style.height=ssolheight
// //                     setTimeout(function(){
// //                         pipette.style.transform="translate(190%,-250%)"
// //                         psol.style.bottom="58%"
// //                         sc.style.transform="translate(0%,-50%) rotate(0deg)"
// //                         setTimeout(function(){
// //                             pipette.style.transform="translate(-650%,-250%)"
// //                             psol.style.left="10.0%"
// //                             sc.style.transform="translate(0%,0%)"
// //                             setTimeout(function(){
// //                                 pipette.style.transform="translate(-650%,-150%)"
// //                                 psol.style.bottom="32.5%"
// //                                 setTimeout(function(){
// //                                     psol.style.height="0%"
// //                                     msol.style.height=msolheight
// //                                     setTimeout(function(){
// //                                         pipette.style.transform="translate(-650%,-250%)"
// //                                         psol.style.left="20.9%"
// //                                         setTimeout(function(){
// //                                             pipette.style.transform="translate(0%,-250%)"
// //                                             psol.style.bottom="21%"
// //                                             setTimeout(function(){
// //                                                 pipette.style.transform="translate(0%,0%)"
// //                                                 pipette.style.rotate="-90deg"
// //                                                 if(trial==0){
// //                                                     trial=1
// //                                                     f=5
// //                                                     psolheight="10%"
// //                                                     msolheight="6.5%"
// //                                                     ins.innerText=changeins2
// //                                                     if(dessicator==4 || dessicator==5){
// //                                                         ins.innerText=changeins3
// //                                                         psolheight="18.5%"
// //                                                         msolheight="8.6%"
// //                                                     }
// //                                                 }
// //                                                 else if(trial==1){
// //                                                     if(dessicator==4){
// //                                                         f=5
// //                                                         psolheight="10%"
// //                                                         msolheight="12%"
// //                                                         ins.innerText=changeins2
// //                                                         trial=2
// //                                                     }
// //                                                     else if(dessicator==5){
// //                                                         console.log(msolheight)
// //                                                         f=5
// //                                                         if(msolheight=="8.6%"){
// //                                                             trial=1
// //                                                             psolheight="18.5%"
// //                                                             msolheight="15%"
// //                                                             ins.innerText=changeins3
// //                                                         }
// //                                                         else{
// //                                                             psolheight="10%"
// //                                                             msolheight="18.5%"
// //                                                             ins.innerText=changeins2
// //                                                             trial=2

// //                                                         }
// //                                                     }
// //                                                     // else if(dessicator==2){
// //                                                     //     f=5
// //                                                     //     psolheight="18.5%"
// //                                                     //     msolheight="5%"
// //                                                     // }
// //                                                     else{
// //                                                         f=1
// //                                                         ins.innerText=changeins1
// //                                                         msolheight="4%"
// //                                                     }
// //                                                     console.log(f)
// //                                                 }
// //                                                 else{
// //                                                     f=3
// //                                                     ins.innerText=changeins
// //                                                      msolheight="4%"
// //                                                      console.log(f)
// //                                                 }
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






//         ////////////////////////////////////////////////////////    new pipette function     //////////////////////////////////////////////////////////






// var new1 


// ///////////////////////////////////////////    NEW PIPETTE FUNCTION     ///////////////////////////////////


// function pipette1(){
//     if(f==5){
//         f=6
//         pipette.style.rotate="0deg"
//         pipette.style.transform="translate(0%,-150%)"
//         sc.style.transform="translate(0%,-50%)"
//         setTimeout(function(){
//             pipette.style.transform="translate(40%,-150%)"
//             sc.style.transform="translate(50%,-50%) rotate(60deg)"
//             setTimeout(function(){
//                 pipette.style.transform="translate(40%,-65%)"
//                 setTimeout(function(){
//                     psol.style.height=psolheight
//                     ss.style.height=ssolheight
//                     setTimeout(function(){
//                         pipette.style.transform="translate(40%,-150%)"
//                         psol.style.bottom=psolbottom1
//                         setTimeout(function(){
//                             sc.style.transform="translate(0%,-50%) rotate(0deg)"
//                             pipette.style.transform="translate(-250%,-150%)"
//                             psol.style.left="10.75%"
//                             setTimeout(function(){
//                                 pipette.style.transform="translate(-250%,-125%) rotate(12deg)"
//                                 sc.style.transform="translate(0%,0%)"
//                                 psol.style.rotate="12deg"
//                                 psol.style.bottom=psolbottom
//                                 psol.style.left=psolleft
//                                 // awm.style.visibility="visible"
//                                 setTimeout(function(){
//                                     psol.style.height="0%"
//                                     psol.style.opacity="0%"
//                                     msol.style.height="27%"
//                                     psol.style.left="9.16%"
//                                     setTimeout(function(){
//                                         // msol.style.transitionDuration="0s"
//                                         // msol.style.visibility="hidden"
//                                         // mcyl.style.transitionDuration="0s"
//                                         // mcyl.style.visibility="hidden"
//                                         // mtest.style.visibility="visible"
//                                         if(dessicator==2){
//                                             // psol.src="images/pippete-solution.png";
//                                         }
//                                         // setTimeout(function(){
//                                             pipette.style.transform="translate(-250%,-150%) rotate(0deg)"
//                                             setTimeout(function(){
//                                                 pipette.style.transform="translate(0%,-150%)"
//                                                 setTimeout(function(){
//                                                     pipette.style.transform="translate(0%,0%)"
//                                                     pipette.style.rotate="-90deg"
//                                                     psol.style.left="20.9%"
//                                                     psol.style.rotate="0deg"
//                                                     psol.style.bottom="13%"
//                                                     psol.style.opacity="100%"
//                                                     setTimeout(function(){
//                                                         f=3
//                                                         ins.innerText=changeins
//                                                     },1000)
//                                                 },1000)
//                                             },1000)
//                                         // },1000)
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)

//             },1000)
//         },1000)
//     }
// }





















// function dessiicator1(){
//     if(dessicator==1){
//         dessicator=2
//         dessi=d4
//         dsol.style.height="20%"
//         dsolheight="18%"
//         dsoltest1="translate(-219%,-130%) rotate(-25deg)"
//         dsoltest2="translate(-218%,-145%) rotate(-25deg)"
//         mtest=m100
//         mtestleft="47.4%"
//         mtestleft1="47.5%"
//         msolleft="48.5%"
//         msolleft1="46.2%"
//         msolbottom="47.2%"
//         msolbottom1="49%"
//         msleft="53.6%"
//         msolheight="24%"
//         ssolheight="15%"
//         changeins="Click on measuring cylinder to place this measured solution into S2 labelled dessicator"


//     }
//     else if(dessicator==2){
//         dessicator=3
//         dessi=d3
//         dsol.style.height="18%"
//         dsolheight="16%"
//         dsoltest1="translate(-218%,-145%) rotate(-25deg)"
//         dsoltest2="translate(-215%,-163%) rotate(-25deg)"
//         mtest=m100
//         mtestleft="59.4%"
//         mtestleft1="59.5%"
//         msolleft="60.5%"
//         msolleft1="58.2%"
//         msleft="65.6%"
//         msolbottom="47.2%"
//         msolbottom1="49%"
//         msolheight="18.5%"
//         ssolheight="13%"
//         psolheight="10.6%"
//         psolbottom="38.3%"
//         psolbottom1="48.1%"
//         psolleft="9.44%"
//         trial=0
//         psol.src="images/pippete-solution30ml.png";
//         changeins="Click on measuring cylinder to place this measured solution into S3 labelled dessicator"
//         changeins1 = "Click on distilled water bottle to measure 70mL of distilled water" 
//         changeins4 = "Click on pipette to take 30mL sulphuric acid and pour it in measuring cylinder"
        
//     }

//     else if(dessicator==3){
//         dessicator=4
//         dessi=d2
//         dsol.style.height="16%"
//         dsolheight="14%"
//         dsoltest1="translate(-215%,-163%) rotate(-25deg)"
//         dsoltest2="translate(-210%,-188%) rotate(-25deg)"
//         mtest=m100
//         mtestleft="71.4%"
//         mtestleft1="71.5%"
//         msolleft="72.5%"
//         msolleft1="70.2%"
//         msleft="77.6%"
//         msolbottom="47.2%"
//         msolbottom1="49%"
//         msolheight="12%"
//         ssolheight="11%"
//         psolheight="16.1%"
//         psolbottom1="48.1%"
//         psolbottom="38.3%"
//         psolleft="9.7%"
//         trial=0
//         psol.src="images/pippete-solution50ml.png";
//         changeins="Click on measuring cylinder to place this measured solution into S4 labelled dessicator"
//         changeins1 = "Click on distilled water bottle to measure 50mL of distilled water" 
//         changeins4 = "Click on pipette to take 50mL sulphuric acid and pour it in measuring cylinder"
//     }
    

//     else if(dessicator==4){
//         dessicator=5
//         dessi=d1
//         dsol.style.height="14%"
//         dsolheight="13%"
//         dsoltest1="translate(-210%,-188%) rotate(-25deg)"
//         dsoltest2="translate(-210%,-203%) rotate(-25deg)"
//         mtest=m100
//         mtestleft="83.4%"
//         mtestleft1="83.5%"
//         msolleft="84.5%"
//         msolleft1="82.2%"
//         msleft="89.6%"
//         msolbottom="47.2%"
//         msolbottom1="49%"
//         msolheight="6.7%"
//         ssolheight="9%"
//         psolheight="21.5%"
//         psolbottom="38.3%"
//         psolbottom1="48.1%"
//         psolleft="9.93%"
//         trial=0
//         psol.src="images/pippete-solution.png";
//         changeins="Click on measuring cylinder to place this measured solution into S5 labelled dessicator"
//         changeins1 = "Click on distilled water bottle to measure 30mL of distilled water" 
//         changeins4 = "Click on pipette to take 70mL sulphuric acid and pour it in measuring cylinder"
//     }
    

//     else if(dessicator=="5"){
//         dessicator=6
//         f=100
//     }


// }