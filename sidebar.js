let toggleNavStatus=false;

let toggleNav=function(){
    let getSidebar= document.querySelector(".sidebar")

    if(!toggleNavStatus){
        getSidebar.style.visibility = "visible";
        toggleNavStatus=true;

    }else{
        getSidebar.style.visibility = "hidden";
        toggleNavStatus=false;
    }

}

let test=function(){
    if(window.innerWidth>600){
        let getSidebar= document.querySelector(".sidebar")
        getSidebar.style.visibility = "visible";
        toggleNavStatus=true;
    }
}

let previous = window.innerWidth
window.onresize=test