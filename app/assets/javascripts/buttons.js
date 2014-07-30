window.onload = function()
{
/** TO DO: 
- set up two divs? one with pass & grid, other with insns?
- encode all user input/ html string char stuff 
**/
// var cleaned = [];

// window.enterPass = function () {
//   var button = document.getElementById('enterPass');
  
//   if(button.value==0){
//     console.log("You still need to confirm: " + button.value);
//     button.innerHTML = "confirm password";
//     button.value = 1;
    
//   } else {
//     console.log("Awesome. You're good to go:  " + button.value);
//   } 
  
//   document.getElementById("statusLabel").innerHTML = "<b>Status:</b> You have entered in a password. Now you must re-confirm your point selection.";
// }


// // Responsible for password comparison stuff
// window.confirmPass = function () {
//   // 0 = confirm password => takes user to stage where they enter in password again => 1
//   // 1 = check password => compares what user entered in to what they originally entered in => 2
  
//   clearCSS();
  
//   if(confirmButton.value == 0){
  
//     console.log("confirm before:" + confirmButton.value);
//     confirmButton.value = 1;
//     console.log("confirm after:" + confirmButton.value);
//     confirmButton.innerHTML="Check if passwords match";
    
//   } else if (confirmButton.value == 1) {
  
//     // if the confirm function returns true - that means match was a success!
//     if(img_grid.checkValid(practiceDotsAdded)){
//       document.getElementById('statusLabel').innerHTML = "<b>Status:</b> Your passwords match! Press 'Next' to submit this password and continue.";
//       confirmButton.innerHTML="Next";
//       confirmButton.value=2;
//       console.log(JSON.stringify(practiceDotsAdded));
//     } else {
//       practiceDotsAdded = {};
//       clearPass();
//       confirmButton.value = 0;
//       confirmButton.innerHTML="Confirm the pattern";
//       document.getElementById('statusLabel').innerHTML = "<b>Status:</b> Your passwords don't match! Try again";
//     }
    
//   } else if (confirmButton.value == 2) {
  
//       for(x in practiceDotsAdded){
//         cleaned.push(x);
//       }
//       console.log("send data off: " + cleaned);
      
//       practiceDotsAdded = {};
//       clearPass();
      
//   } else {
//     document.getElementById('statusLabel').innerHTML = "<b>Status:</b> Try again";
//     practiceDotsAdded = {};
//     clearPass();
//     confirmButton.value = 0;
    
//   }
// }

// /********************
//   CLEARING FUNCTIONS
// ********************/

// // Iterate over all table cells to clear css styling & numClicks; also update dots selected & needed for valid password
// window.clearCSS = function () {
//   numClicks = 0;        
  
//   for (var i = 0; i < allTableCells.length; i++) {
//     allTableCells[i].style.backgroundColor = "transparent";
//   }
  
//   document.getElementById('dotCount').innerHTML=numClicks;  
//   document.getElementById('dotLeft').innerHTML= (MIN_DOTS - numClicks) < 0 ? 0 : (MIN_DOTS - numClicks);
// }

// // clear currently selected values (used in practice mode)
// window.clearPracticeSelection = function (){
//   clearCSS();
//   practiceDotsAdded = {};
//   document.getElementById('statusLabel').innerHTML = "<b>Status:</b> You have cleared your current selection, but are still in practice mode.";
// }

// // Restart password entry for picture from beginning
// window.clearPass = function (){

//   // iterate over *grid object* that is keeping track of password and clear it
//   for	(x = 0; x < img_grid.grid_width; ++x) {
//     for(y = 0; y < img_grid.grid_height; ++y) {
//         img_grid.grid[x+'_'+y].index = null;
//     }
//   }
  
//   // clear CSS, password length and value
//   clearCSS();
    
//   img_grid.password = {};
//   img_grid.password.length=0;
//   img_grid.click = 0;
//   img_grid.index = 0; 
  
//   document.getElementById('confirmPass').style.visibility="hidden";   // hide confirm password button; will show up when 6 points selected anyway
//   document.getElementById('statusLabel').innerHTML = "<b>Status:</b> You have started a new attempt. You are now entering in a password";
// }


// // Toggle User in practice mode: trying to figure out what password works 
  
// window.practiceMode = function () {
//   // clear stuff cause situation was toggled
//   clearCSS();

//   var checkbox = document.getElementById('practice');             // get practice checkbox

//   if(checkbox.checked && practiceTime == false){                  // if checkbox ticked & not already in practice mode, set global var practiceTime to true

//     clearPass();
  
//     practiceTime = true;  // WE'RE IN PRACTICE MODE
    
//     document.getElementById('clearSelection').style.visibility="visible";
//     document.getElementById('clearPass').style.visibility="hidden";
//     // document.getElementById('enterPass').style.visibility="hidden";
//     document.getElementById('statusLabel').innerHTML = "<b>Status:</b> Feel free to practice any pattern you'd like. None of this will be recorded.";
    
//   } else {

//     clearPracticeSelection();

//     practiceTime = false; // WE'RE NO LONGER IN PRACTICE MODE
    
//     document.getElementById('clearSelection').style.visibility="hidden";
//     document.getElementById('clearPass').style.visibility="visible";
//     //document.getElementById('enterPass').style.visibility="visible";
    
//     document.getElementById('statusLabel').innerHTML = "<b>Status:</b> Practice session over! We are now recording the points you select.";    
//   }  
//}



// All code here
}
