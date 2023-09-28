let changIcon=function(icon){
    icon.classList.toggle('fa-times')
}

const navBars= document.querySelector('.fa-bars');
const navItems= document.querySelector('.nav_items')

navBars.addEventListener('click',()=>{
    navItems.classList.toggle("active")
})