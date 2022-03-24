const listItems = document.querySelectorAll('.more-option')
const options = document.querySelectorAll('.flex-div')
const sidebarProfile = document.querySelector('.sidebar-profile');
const getStartedCross = document.querySelector('.get-cross-option');
const profileIcon = document.querySelector('.top-nav-right > i');
const profileMenu = document.querySelector('.profile-menu');
console.log(profileIcon);

function call(){
    //console.log(this);

    let x = this.querySelector('.option-list');
    let y= this.querySelector('i');
    //console.log(y,y.classList);
    //console.log(x);
    if(x.style.display==="block")
    {
         x.style.display="none";
         y.classList.remove("fa-caret-down");
         y.classList.add("fa-caret-right");
    }
    else
    {
        x.style.display="block";
        y.classList.remove("fa-caret-right");
         y.classList.add("fa-caret-down");
    }
}

function showOptions(){
    //console.log(this,'over');
    let x= this.querySelector('.other-options');
    //console.log(x,'over');
    x.style.display="block";
}

function removeOptions(){
    //console.log(this,'out');
    let x= this.querySelector('.other-options');
    //console.log(x,'out');
    x.style.display="none";
}

function addHoverCross(){
    const x = document.querySelector('.get-cross-option');
    x.style.display="block";
}

function removeHoverCross(){
    const x = document.querySelector('.get-cross-option');
    x.style.display="none";
}

function removeBlock(){
    //console.log(sidebarProfile);
    sidebarProfile.style.display="none";
}

function handleMenuDisplay(){
    let x= document.querySelector('.profile-menu');
    console.log(x);
    if(x.style.display==="block")
    x.style.display="none";
    else x.style.display="block";
}

listItems.forEach(listItem => listItem.addEventListener('click',call));
options.forEach(option => option.addEventListener('mouseover',showOptions));
options.forEach(option => option.addEventListener('mouseout',removeOptions));
sidebarProfile.addEventListener('mouseover',addHoverCross);
sidebarProfile.addEventListener('mouseout',removeHoverCross);
getStartedCross.addEventListener('click',removeBlock);
profileIcon.addEventListener('click',handleMenuDisplay);

window.addEventListener('click',function(event){
    console.log(event.target,event.target.parentNode.parentNode,profileMenu);
    if(event.target===profileIcon)
    {

    }
    else if(event.target!==profileMenu && event.target.parentNode.parentNode !==profileMenu)
    {
        //console.log("hey")
        profileMenu.style.display="none";
    }
})
// profileMenu.addEventListener('mouseleave',()=> {
//     profileMenu.style.display="none";
// })
//console.log(options);
//console.log(x);

// function listen(){
//     console.log(this);
// }

// x.addEventListener('click',listen)