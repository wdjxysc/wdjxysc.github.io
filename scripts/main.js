var myImage = document.querySelector('img');

if (myImage != null)
    myImage.onclick = function() {
        var mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/shu.png') {
            myImage.setAttribute('src', 'images/t.png');
        } else {
            myImage.setAttribute('src', 'images/shu.png');
        }
    }


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');



<<<<<<< HEAD
function setUserName() {
    var myName = prompt('Please enter your name.');
    var ssss = "sfsadf";
=======

function setUserName() {
    var myName = prompt('Please enter your name.');
>>>>>>> 1170afb930e97a703a221f0bf0a6da17706b90ae
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    // setUserName();
    goToMyPage();
}

function goToMyPage() {
    var path = window.location.href;
    path = path.substr(0, path.lastIndexOf('/') + 1)
    window.location.href = path + "mypage.html";
}