
let tabs=document.querySelector('.tabBar');
let panel=document.querySelectorAll('.data')
tabs.addEventListener('click',(event)=>{
    let clickedTab=event.target;
    if(clickedTab.classList.contains('tab-btn')){
        console.log(clickedTab)
    }
    if(!clickedTab.classList.contains('tab-btn')){
        return false
    }
    document.querySelectorAll('.tab-btn').forEach((curr)=>curr.classList.remove('active'))
    clickedTab.classList.add('active')
    console.log(panel)
    panel.forEach(currpanel => currpanel.classList.remove('active'));
    let p=document.querySelector(`#${clickedTab.dataset.tab}`)
    p.classList.add('active');
})