import { getDate } from "./date.js"
import { addNote, isUpdate, modifyData, showNotes } from "./showNotes.js"


let addNoteBtn=document.querySelector('#addNote')
let shadow=document.querySelector('.shadow')
let closeBtn=document.querySelector('.icon-close')
let addData=document.querySelector('#addData')
let deleteElem=document.querySelectorAll('[data-del-icon]')
let editElem=document.querySelectorAll('[data-edit-icon]')
let titleElem=document.querySelector('#NTitle');
let descElem=document.querySelector('#NDesc');
let modalHead=document.querySelector('#Modal-head')
let Notes=JSON.parse(localStorage.getItem('Notes')) || [];

// -------- modal code
export const openModal=(modal)=>{
    modalHead.innerText="Add New Data"
    titleElem.value="";
    descElem.value="";
    modal.classList.add('active')
    shadow.classList.add('active')
}
export const closeModal=(modal)=>{
    modal.classList.remove('active')
    shadow.classList.remove('active')
}

shadow.addEventListener('click',(e)=>{
    e.preventDefault()
    let modal=document.querySelector('.modal.active')
    closeModal(modal)
})
addNoteBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let modalElem=document.querySelector(addNoteBtn.dataset.openModal)
    openModal(modalElem)
})
closeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let modalElem=closeBtn.closest('#new-modal')
    closeModal(modalElem)
})
showNotes()

// ------- Data add code
addData.addEventListener('click',(e)=>{
    e.preventDefault();
    let date=getDate()
    let title=titleElem.value;
    let desc=descElem.value;
    let noteInfo={title,desc,date};
    titleElem.value="";
    descElem.value="";

    if(isUpdate){
        modifyData( noteInfo)
        // isUpdate=false
    }else{
        addNote(noteInfo)
    }
})

