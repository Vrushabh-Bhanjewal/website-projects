import { openModal } from "./main.js";

let Notes=JSON.parse(localStorage.getItem('Notes')) || [];
let addNoteBtn=document.querySelector('#addNote')
let modalHead=document.querySelector('#Modal-head')
let modalTitle=document.querySelector('#NTitle')
let modalDesc=document.querySelector('#NDesc')
let addNew=document.querySelector('#addNote')
export let isUpdate=false,updateId;

export const showNotes=()=>{
    // remove previous notes
    let prevNotes=document.querySelectorAll('.note')
    prevNotes.forEach((curr)=>curr.remove())
    // add again new Notes
    Notes.forEach((elem,index) => {
                let note=`<div class="note">
                                <div class="note-details">
                                    <h1 class="note-title">${elem.title}</h1>
                                    <p class="note-desc">${elem.desc}</p>
                                </div>
                                <div class="note-footer">
                                    <span class="note-date">${elem.date}</span>
                                    <span class="icons">
                                        <i data-edit-icon 
                                            data-title="${elem.title}"
                                            data-desc="${elem.desc}"
                                            data-index="${index}"
                                            class="edit-icon fa-regular fa-pen-to-square"></i>
                                        <i data-del-icon onclick="deleteNote(${index})" class="delete-icon fa-solid fa-trash"></i>
                                    </span>
                                </div>
                            </div>`;
                
                addNew.insertAdjacentHTML("afterend",note)
            });
}
// onclick="editNote(${index},${elem.title},${elem.desc})"
export const addNote=(noteInfo)=>{
    let n=Notes.some((curr)=> curr.title== noteInfo.title)
    // console.log(n)
    if(n){
        alert("Title Data Exist")
        return false
    }
    if(noteInfo.title==""){
        return false
    }
    Notes.push(noteInfo);
    localStorage.setItem('Notes',JSON.stringify(Notes));
    showNotes()
}

//---- delete note
export function deleteNote(id){
    // console.log(id)
    Notes.splice(id,1)
    localStorage.setItem('Notes',JSON.stringify(Notes));
    showNotes()
}
// ---- edit note
document.addEventListener('click',(e)=>{
    if(e.target.matches('[data-edit-icon]')){
        let curr=e.target
        isUpdate=true;
        let title=curr.dataset.title
        let desc=curr.dataset.desc
        let index=curr.dataset.index
        // console.log(title,desc,index)
        addNoteBtn.click()
        modalHead.innerText="Upadte Data"
        modalTitle.value=title;
        modalDesc.value=desc;
    }
})

// ---- Modify data fun
// export const modifyData=()=>{
//     console.log('modify data')
// }


// export function editNote(index,title,desc){
//     console.log(Notes[index])
    // let a=Notes(id)
    
    // console.log(id,title,desc)
    // let now= Notes.find((curr)=>curr.title==title)

    // let modalElem=document.querySelector('new-modal')
    // let mtitle=modalElem.querySelector('#modal-title')
    // mtitle.value=now.title;
    // let mdesc=modalElem.querySelector('#modal-desc')
    // mdesc=now.desc;
    // let mhead=modalElem.querySelector('#modal-head')
    // mhead.innerText='Modify Note'
    // openModal()
// }

//  making global fun to window
window.deleteNote=deleteNote
// window.editNote=editNote