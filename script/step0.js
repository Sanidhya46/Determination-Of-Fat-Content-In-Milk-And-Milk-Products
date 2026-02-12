const tooltip = document.getElementById("tooltip");

const equipmentNames = {
    "water_bath_familiar": "Water Bath",
    "butyrometer_cork_familiar": "Butyrometer Cork",
    "milk_beaker_familiar": "Milk Beaker",
    "butyrometer_familiar": "Butyrometer",
    "pipette_familiar": "Pipette",
    "sulphuric-acid_familiar": "Sulphuric Acid",
    "isoamyl_familiar": "Isoamyl Alcohol",
    "centrifuge_familiar": "Centrifuge",
    "sulphuric-acid_solution_familiar": "Sulphuric Acid Solution"
  };

  familiar();
function familiar() {
    if (f === 1001){
        f = 1002;
   console.log("familiar function running")
        document.querySelectorAll(".equipment").forEach(item => {

  item.addEventListener("mousemove", (e) => {

    const name = equipmentNames[item.id];
    tooltip.innerText = name;

    // Convert mouse position to %
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;

    tooltip.style.left = (e.clientX + 10) + "px";  // smaller = closer
  tooltip.style.top  = (e.clientY - 40) + "px";
  tooltip.style.opacity = "1";
  });

  item.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
  });

});
    }else{console.log("now the value of f is", f)}
}

function closePopup() {
    document.getElementById("familiarPopup").style.display = "none";
    f = 1003;
    startbutton.style.visibility = "visible";
    f = 0;
   
  }
  