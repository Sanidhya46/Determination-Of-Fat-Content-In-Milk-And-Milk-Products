// (() => {
//   const nextButton = document.getElementById('nextButton');
//   const initialContent = document.getElementById('initialContent');
//   const stepListContent = document.getElementById('stepListContent');
//   const stepsContainer = document.getElementById('stepsContainer');
//   const finalButton = document.getElementById('finalButton');

//   // Steps array - add as many steps as you want here
//   const stepLabels = [
//     "Chemical Preparation",
//     "Sample Preparation",
//     "Heating in Water Bath",
//     "Centrifugation",
//     "Result Observation",
//   ];

//   // Show initial next button after 2 seconds
//   setTimeout(() => {
//     nextButton.style.display = 'inline-block';
//   }, 2000);

//   nextButton.addEventListener('click', () => {
//     // Hide initial content, show steps content
//     initialContent.style.display = 'none';
//     stepListContent.style.display = 'block';

//     // Clear previous steps if any
//     stepsContainer.innerHTML = '';

//     // Animate steps in sequence
//     stepLabels.forEach((label, index) => {
//       const stepDiv = document.createElement('div');
//       stepDiv.className = 'step-item';
//       stepDiv.innerHTML = `<div class="step-number">${index + 1}</div><div>${label}</div>`;
//       stepsContainer.appendChild(stepDiv);
//       setTimeout(() => {
//         stepDiv.classList.add('visible');
//       }, 500 * (index + 1));
//     });

//     // Show final button after all steps animated
//     setTimeout(() => {
//       finalButton.style.display = 'inline-block';
//     }, 500 * stepLabels.length + 500);
//   });

//   finalButton.addEventListener('click', () => {
//     alert("Proceeding to Experiment Step 3");
//     // Add further logic or navigation here as needed
//   });
// })();
