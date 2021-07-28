
var my_home = document.querySelectorAll('.h1');
var Titles = ["WELCOME TO MY SITE", "ABOUT ME", "MY SKILLS"];
//var hamburger = document.querySelector(".hamburg");
for(var i=0; i<my_home.length; ++i){
    my_home[i].textContent = Titles[i];
}
//   hamburger.onclick = function () {
//      this.classList.toggle ("checked");
//  }