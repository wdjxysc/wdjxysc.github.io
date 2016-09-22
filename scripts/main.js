var myImage = document.querySelector('img');

if(myImage != null)
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shu.png') {
      myImage.setAttribute ('src','images/t.png');
    } else {
      myImage.setAttribute ('src','images/shu.png');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');




function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  // setUserName();
  goToMyPage();
}

function goToMyPage(){
  var path = window.location.href;
  path = path.substr(0, path.lastIndexOf('/') + 1)
  window.location.href =  path + "mypage.html";
} 