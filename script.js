// Part 2: Calculate Area
function calculateArea() {
  var length = document.getElementById('length').value;
  var width = document.getElementById('width').value;
  var area = length * width;
  document.getElementById('result').innerText = "Area is: " + area + " square units";
}

// Part 2: Scope Example (Local vs Global)
var globalVar = "I am a global variable"; // global variable

function showScope() {
  var localVar = "I am local"; // local variable
  console.log(globalVar); // accessible
  console.log(localVar); // accessible only inside this function
}

// Part 2: Toggle spinner animation
function toggleSpinner() {
  var spinner = document.querySelector('.spinner');
  spinner.classList.toggle('rotate');
}

// Event listener for toggle button
document.querySelector('.toggle-btn').addEventListener('click', toggleSpinner);

// Part 3: Trigger Banner Animation
function triggerBannerAnimation() {
  var banner = document.querySelector('.banner');
  banner.classList.remove('slideIn'); // remove the animation class
  void banner.offsetWidth; // force reflow to reset animation
  banner.classList.add('slideIn'); // add animation class again
}
