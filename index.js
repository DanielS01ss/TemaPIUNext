const allData = document.querySelectorAll(".hamburger-line");
const hambIcon = document.querySelector(".hamburger-icon");
const smallNav = document.querySelector(".small-nav");

hambIcon.addEventListener('click',()=>{
    smallNav.classList.toggle('active');
    for(const i in allData){
        if ( i == 0){
            allData[i].classList.toggle("change1");
        } else if (i == 1){
            allData[i].classList.toggle("change2");
        } else if(i == 2){
            allData[i].classList.toggle("change3");
        }
    }
}) 