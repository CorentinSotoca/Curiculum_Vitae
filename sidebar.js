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