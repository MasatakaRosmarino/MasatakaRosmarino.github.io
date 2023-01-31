/*var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("javaBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
      if (width >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}*/

var javaElem = document.getElementById("javaBar");
var phpElem = document.getElementById("phpBar");
var jsElem = document.getElementById("jsBar");
var htmlElem = document.getElementById("htmlBar");
var cssElem = document.getElementById("cssBar");
var engElem = document.getElementById("engBar");
var spaElem = document.getElementById("spaBar");
var itaElem = document.getElementById("itaBar");
var japElem = document.getElementById("japBar");
var width = 1;
var rate = 75;
var javaInterval;
var phpInterval;
var jsInterval;
var htmlInterval;
var cssInterval;
var engInterval;
var spaInterval;
var itaInterval;
var japInterval;

var navElem = document.getElementById("nav");

var defaultParagraphsList = document.getElementsByTagName("p");
//console.log(paragraphsList.length);

for(var i=0; i<defaultParagraphsList.length; i++){
  //console.log(paragraphsList[i].innerHTML);
}

function frameJava() {
  if(getCurrentPageName() == "index.html"){
    if (width >= 90) {
      clearInterval(javaInterval);
    } else {
      width++;
      javaElem.style.width = width + "%";
    }
  }
}

function framePhp() {
  if(getCurrentPageName() == "index.html"){
    if (width >= 80) {
      clearInterval(phpInterval);
    } else {
      width++;
      phpElem.style.width = width + "%";
    }
  }
}

function frameJs() {
  if(getCurrentPageName() == "index.html"){
    if (width >= 60) {
      clearInterval(jsInterval);
    } else {
      width++;
      jsElem.style.width = width + "%";
    }
  }
}

function frameHtml() {
  if(getCurrentPageName() == "index.html"){
    if (width >= 90) {
      clearInterval(htmlInterval);
    } else {
      width++;
      htmlElem.style.width = width + "%";
    }
  }
}

function frameCss() {
  if(getCurrentPageName() == "index.html"){
    if (width >= 70) {
      clearInterval(cssInterval);
    } else {
      width++;
      cssElem.style.width = width + "%";
    }
  }
}

function frameEng() {
  if(getCurrentPageName() == "index.html"){
    if (width >= 99) {
      clearInterval(engInterval);
    } else {
      width++;
      engElem.style.width = width + "%";
    }
  }
}

function frameSpa() {
  if(getCurrentPageName() == "index.html"){
    if (width >= 99) {
      clearInterval(spaInterval);
    } else {
      width++;
      spaElem.style.width = width + "%";
    }
  }
}

function frameIta() {
  if(getCurrentPageName() == "index.html"){
    if (width >= 100) {
      clearInterval(itaInterval);
    } else {
      width++;
      itaElem.style.width = width + "%";
    }
  }
}

function frameJap() {
  if(getCurrentPageName() == "index.html"){
    if (width >= 80) {
      clearInterval(japInterval);
    } else {
      width++;
      japElem.style.width = width + "%";
    }
  }
}

window.onload = function(){
  navElem.style.position = "fixed";
  navElem.style.top = "-40px";
}

window.onscroll = function(){
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    javaInterval = setInterval(frameJava, rate);
    phpInterval= setInterval(framePhp, rate);
    jsInterval = setInterval(frameJs, rate);
    htmlInterval= setInterval(frameHtml, rate);
    cssInterval = setInterval(frameCss, rate);

    engInterval = setInterval(frameEng, rate);
    spaInterval = setInterval(frameSpa, rate);
    itaInterval = setInterval(frameIta, rate);
    japInterval = setInterval(frameJap, rate);
  }

  navElem.style.top = "0px";
  navElem.style.transition = "all .5s";
} 

function getCurrentPageName(){
  var path = window.location.pathname;
  var page = path.split("/").pop();

  return page;
}
