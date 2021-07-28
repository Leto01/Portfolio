
var my_home = document.querySelectorAll('.h1');
var Titles = ["WELCOME TO MY SITE", "ABOUT ME", "MY SKILLS"];

for(var i=0; i<my_home.length; ++i){
    if(i < Titles.length){
        my_home[i].textContent = Titles[i];
    }else{
        my_home[i].textContent = "ERROR: Titles[] out of bound";
    }
}
