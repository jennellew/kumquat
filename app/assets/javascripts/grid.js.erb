window.onload = function()
{


// global var
var allTableCells = document.getElementsByTagName("td");
var confirmButton = document.getElementById('confirmPass');

var practiceTime = false; // if the user is practising
var practiceDotsAdded = {};
//practiceDotsAdded.length = 0;
var numTries = 0; // how many times they've seriously tried to enter in a password combo
var numClicks = 0; // user's current number of clicks

// constants
var MIN_DOTS = 6;
var MAX_DOTS = 11; 

// create a dot object
function dot(x, y, index) {
  this.index = index;
  this.x = x;
  this.y = y;
}

// basic dot grid functionality - create dot grid given dimensions x and y
function dotGrid(x, y) {

    // dimensions of grid
    this.width = x;
    this.height = y;
    
    // grid width and height are the # pixels, divided by interval (30) to create segments over which the dots will occur
    this.grid_width = Math.round(x/30); 
    this.grid_height = Math.round(y/30);
    
    // counters
    this.index=0; // to calculate the current index when creating the grid
    this.clicks=0;  // to keep track of the number of times the user has clicked
    
    // TO DO: REMOVE EVENTUALLY AND REPLACE WITH CODE THAT MODIFIES EXISTING DIV IN BODY
    // create a div with specified css properties and bg image 
    this.createDiv = function() {
      var div = document.getElementById("divGrid");
      console.log(div);
     // div.id = "divGrid";
      div.style.width = this.width+"px";
      div.style.height = this.height+"px";
      div.style.backgroundImage="url('http://www.carvel.com/public/images/ice-cream-cakes/celebration-cakes/round-cake.jpg')";
      div.style.backgroundRepeat="no-repeat";
      div.style.color = "white";
      div.innerHTML = "Hello";
      
      //document.body.appendChild(div);
      return div;
    };
    
    // create complete table (grid basis) to overlay div with image
    this.createTable = function(parent) {
    
      // create table
      var tbl = document.createElement('table');
      tbl.classname = "gridstyle";
      tbl.id = "tblGrid";
        
      // create table body of table
      var tbdy = document.createElement('tbody');
        
      // create grid logic
      for(var j = 0; j < this.grid_height ; j++) {
      
        // create table row (builds height)
        var tr = document.createElement('tr');
        
        // create cells per row (builds width)
        for (var i = 0 ; i < this.grid_width ; i++) {
        
            var id = i +"_"+ j;                                   // create value of id based on x (i) and y (j) position
            var td = document.createElement('td');                // create cell
            
            td.setAttribute("id", id);                            // give cell (td) an id
            td.appendChild(document.createTextNode('\u0020'));
            tr.appendChild(td);                                    // add cell to row
            
            // If one of the cell spots are clicked, add the cell to var keeping track of password chain!
            td.addEventListener('click', function(e) {
              // IF IN PRACTICE MODE
              if (document.getElementById('practice').checked || confirmButton.value == 1) {
                    console.log("hi");

                if(numClicks >= MAX_DOTS){                          // let the user know they can't select more than 11 dots
                  alert("You can't select more than " + MAX_DOTS + "dots.");
                } else {
                  this.style.backgroundColor = 'orange';            // highlight chosen cell
                  incrNumClicks(this.id);                                  // increment the num clicks user has made
                } 
                
              // ELSE, NOT IN PRACTICE MODE
              } else {
                
                // we're just adding, not validating yet
                if(confirmButton.value == 0){        
                  if(img_grid.clicks >= MAX_DOTS){                          // let the user know they can't select more than 11 dots
                    alert("You can't select more than " + MAX_DOTS + "dots.");
                  } else {
                    this.style.backgroundColor = 'orange';              // highlight chosen cell
                    img_grid.addPasswordDot(this.id);
                  } 
                }
              }
            }, false);       
        }
        tbdy.appendChild(tr);
      }
        tbl.appendChild(tbdy);
        parent.appendChild(tbl)
     };
    
    return this;
}

dotGrid.prototype.grid = {};

// create password for comparison
dotGrid.prototype.password = {};

// create password to submit
dotGrid.prototype.subPassword = {};

// function to add dots to the password
dotGrid.prototype.addPasswordDot = function(id) {
  if(this.password[id] == undefined){
    this.grid[id].index = this.index;
    this.password[id] = this.grid[id];
    ++this.index;
    ++this.password.length;
    
    this.subPassword[this.index] = id;

    incrNumClicks();  // Keep for sake of display statements
        
  } else {
    alert("You have already selected this point!");
  }
  
  //  console.log(JSON.stringify(this.subPassword));
};



dotGrid.prototype.incrementClicks = function() {
    ++this.clicks;
};

// create a dot grid - holds dots - which have a value of null if they haven't been clicked yet
dotGrid.prototype.create = function() {
    var parent = this.createDiv(); // this.createDiv();                                 // create div with image
    this.createTable(parent);                                      // create table
    this.password.length = 0;                                      // set password length to 0
    for	(x = 0; x < this.grid_width; ++x) {
        for(y = 0; y < this.grid_height; ++y) {
            this.grid[x+'_'+y] = new dot(x, y, null);
        }
    }
};

// pass in confirmation password to check against original input
dotGrid.prototype.checkValid = function(confPass) {
  
  var lengthCheck = Object.keys(confPass).length; // since objects not guaranteed in order, use this counter to check order this way
  var orderCheck = 0;
  var exists = false;
  
  if(lengthCheck == this.password.length){                 // firstly, check if they're the same size 
    console.log("length check fine");
    for(x in confPass){                                   // for every entry x in confPass
    
      console.log(">" + x);
      console.log(">" + JSON.stringify(this.password));
      
      exists = (this.password[x] !== undefined) ? true : false;
      console.log(exists);
      
      if(this.password[x] !== undefined){                  // if that key / index exists in the password
        console.log("not undefined");

        // check that when confPass was clicked (order) matches up with the index of the password. Should all be in order
        if (confPass[x] == this.password[x].index && this.password[x].index == orderCheck) {
          console.log("- - -");
          console.log(confPass[x]);
          console.log(orderCheck);
          console.log(this.password[x].index);
          document.getElementById(x).style.backgroundColor = '#97DB63';
          ++orderCheck;
        } else {
          console.log("Your entries did not match.");

          return false;
        }
      
      } else {
        console.log("Your entries did not match.");
        return false;
      }
    }
  } else {
    console.log("Your entries did not match.");
    return false;
  }
  console.log("matched");
  return true;
};








var img_grid = new dotGrid(500, 500);
img_grid.create(); 


// Practive Mode f'n: increment the number of clicks recorded, and update what is displayed to the user to reflect that
function incrNumClicks (thing_id) {
  console.log("prac mode, confirm mode : " + practiceTime + " " + confirmButton.value);
  
  // check if thing being added has *already* been added
  if(practiceDotsAdded[thing_id] == undefined && (practiceTime == true || confirmButton.value==1)){ 
    practiceDotsAdded[thing_id] = numClicks; 
    //++practiceDotsAdded.length;
    ++numClicks;
  // WHEN NOT IN PRAC MODE, JUST UPDATE NUMCLICKS
  } else if (practiceTime == false && confirmButton.value == 0) {
    ++numClicks;
    if(numClicks >= 6){               // when not in prac mode, once we reach 6 chosen points, allow them to confirm pass if they want
      document.getElementById('confirmPass').style.visibility="visible";
    }
  } else {
    alert("You have already selected this point!");
  }
  
  document.getElementById('dotCount').innerHTML=numClicks;  
  document.getElementById('dotLeft').innerHTML= (MIN_DOTS - numClicks) < 0 ? 0 : (MIN_DOTS - numClicks);
}
    // All code here
  
  
  var cleaned = [];

window.enterPass = function () {
  var button = document.getElementById('enterPass');
  
  if(button.value==0){
    console.log("You still need to confirm: " + button.value);
    button.innerHTML = "confirm password";
    button.value = 1;
    
  } else {
    console.log("Awesome. You're good to go:  " + button.value);
  } 
  
  document.getElementById("statusLabel").innerHTML = "<b>Status:</b> You have entered in a password. Now you must re-confirm your point selection.";
};




/********************
  CLEARING FUNCTIONS
********************/

// Iterate over all table cells to clear css styling & numClicks; also update dots selected & needed for valid password
function clearCSS() {
  numClicks = 0;        
  
  for (var i = 0; i < allTableCells.length; i++) {
    allTableCells[i].style.backgroundColor = "transparent";
  }
  
  document.getElementById('dotCount').innerHTML=numClicks;  
  document.getElementById('dotLeft').innerHTML= (MIN_DOTS - numClicks) < 0 ? 0 : (MIN_DOTS - numClicks);
}

// clear currently selected values (used in practice mode)
window.clearPracticeSelection = function (){
  clearCSS();
  practiceDotsAdded = {};
  document.getElementById('statusLabel').innerHTML = "<b>Status:</b> You have cleared your current selection, but are still in practice mode.";
};

// Restart password entry for picture from beginning
function clearPass(){

  // iterate over *grid object* that is keeping track of password and clear it
  for	(x = 0; x < img_grid.grid_width; ++x) {
    for(y = 0; y < img_grid.grid_height; ++y) {
        img_grid.grid[x+'_'+y].index = null;
    }
  }
  
  // clear CSS, password length and value
  clearCSS();
    
  img_grid.password = {};
  img_grid.password.length=0;
  img_grid.click = 0;
  img_grid.index = 0; 
  
  document.getElementById('confirmPass').style.visibility="hidden";   // hide confirm password button; will show up when 6 points selected anyway
  document.getElementById('statusLabel').innerHTML = "<b>Status:</b> You have started a new attempt. You are now entering in a password";
}


// Toggle User in practice mode: trying to figure out what password works 
  
window.practiceMode = function () {
  // clear stuff cause situation was toggled
  clearCSS();

  var checkbox = document.getElementById('practice');             // get practice checkbox

  if(checkbox.checked && practiceTime == false){                  // if checkbox ticked & not already in practice mode, set global var practiceTime to true

    clearPass();
  
    practiceTime = true;  // WE'RE IN PRACTICE MODE
    
    document.getElementById('clearSelection').style.visibility="visible";
    document.getElementById('clearPass').style.visibility="hidden";
    // document.getElementById('enterPass').style.visibility="hidden";
    document.getElementById('statusLabel').innerHTML = "<b>Status:</b> Feel free to practice any pattern you'd like. None of this will be recorded.";
    
  } else {

    clearPracticeSelection();

    practiceTime = false; // WE'RE NO LONGER IN PRACTICE MODE
    
    document.getElementById('clearSelection').style.visibility="hidden";
    document.getElementById('clearPass').style.visibility="visible";
    //document.getElementById('enterPass').style.visibility="visible";
    
    document.getElementById('statusLabel').innerHTML = "<b>Status:</b> Practice session over! We are now recording the points you select.";    
  }  
}; 
  
  
// Responsible for password comparison stuff
function confirmPass() {
  // 0 = confirm password => takes user to stage where they enter in password again => 1
  // 1 = check password => compares what user entered in to what they originally entered in => 2
  
  clearCSS();
  
  if(confirmButton.value == 0){
  
    console.log("confirm before:" + confirmButton.value);
    confirmButton.value = 1;
    console.log("confirm after:" + confirmButton.value);
    confirmButton.innerHTML="Check if passwords match";
    
  } else if (confirmButton.value == 1) {
  
    // if the confirm function returns true - that means match was a success!
    if(img_grid.checkValid(practiceDotsAdded)){
      document.getElementById('statusLabel').innerHTML = "<b>Status:</b> Your passwords match! Press 'Next' to submit this password and continue.";
      confirmButton.innerHTML="Next";
      confirmButton.value=2;
      console.log(JSON.stringify(practiceDotsAdded));
    } else {
      practiceDotsAdded = {};
      clearPass();
      confirmButton.value = 0;
      confirmButton.innerHTML="Confirm the pattern";
      document.getElementById('statusLabel').innerHTML = "<b>Status:</b> Your passwords don't match! Try again";
    }
    
  } else if (confirmButton.value == 2) {
  
      for(x in practiceDotsAdded){
        cleaned.push(x);
      }
      console.log("send data off: " + cleaned);
      
      practiceDotsAdded = {};
      clearPass();
      
  } else {
    document.getElementById('statusLabel').innerHTML = "<b>Status:</b> Try again";
    practiceDotsAdded = {};
    clearPass();
    confirmButton.value = 0;
    
  }
}
  
}
