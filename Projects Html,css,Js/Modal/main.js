let modals=document.querySelectorAll('[data-open-modal]')
let closeBtn=document.querySelectorAll('[data-modal-close]')
let shadow=document.querySelector('.overlay')

modals.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        let modal=elem.dataset.openModal
        let modalcurr=document.getElementById(elem.dataset.openModal)
        openModal(modalcurr)
    })
})
closeBtn.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        let modal=elem.closest('.modal')
       closeModal(modal)
    })
})
function closeModal(modal){
    modal.classList.remove('active');
    shadow.classList.remove('active')
}
function openModal(elem){
    elem.classList.add('active');
    shadow.classList.add('active');
}
shadow.addEventListener('click',()=>{
    shadow.classList.remove('active');
    let modal=document.querySelector('.modal.active');
    modal.classList.remove('active')
})