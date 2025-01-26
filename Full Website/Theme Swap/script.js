let smbox=document.getElementsByClassName('sun-moon-container')[0]
let toggle=document.getElementById('theme-btn').addEventListener('click',()=>{
    document.body.classList.toggle("dark");
    let currRotation=parseInt(getComputedStyle(smbox).getPropertyValue('--rotation'))
    smbox.style.setProperty('--rotation',currRotation + 180)
})