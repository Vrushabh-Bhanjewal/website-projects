import { getDate } from "./date.js"
import { addNote, showNotes } from "./showNotes.js"


let addNoteBtn=document.querySelector('#addNote')
let shadow=document.querySelector('.shadow')
let closeBtn=document.querySelector('.icon-close')
let addData=document.querySelector('#addData')
let deleteElem=document.querySelectorAll('[data-del-icon]')
let editElem=document.querySelectorAll('[data-edit-icon]')
let Notes=JSON.parse(localStorage.getItem('Notes')) || [];

// -------- modal code
export const openModal=(modal)=>{
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
    let titleElem=document.querySelector('#NTitle');
    let descElem=document.querySelector('#NDesc');
    let date=getDate()
    let title=titleElem.value;
    let desc=descElem.value;
    let noteInfo={title,desc,date};
    titleElem.value="";
    descElem.value="";
    // Notes.push(noteInfo);
    // localStorage.setItem('Notes',JSON.stringify(Notes));
    addNote(noteInfo)
})

