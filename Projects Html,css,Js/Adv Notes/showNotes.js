import { openModal } from "./main.js";

let Notes=JSON.parse(localStorage.getItem('Notes')) || [];
let addNew=document.querySelector('#addNote')

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
                                        <i data-edit-icon onclick="editNote(${index},${elem.title})" class="edit-icon fa-regular fa-pen-to-square"></i>
                                        <i data-del-icon onclick="deleteNote(${index})" class="delete-icon fa-solid fa-trash"></i>
                                    </span>
                                </div>
                            </div>`;
                
                addNew.insertAdjacentHTML("afterend",note)
            });
}
export const addNote=(noteInfo)=>{
    let n=Notes.some((curr)=> curr.title== noteInfo.title)
    console.log(n)
    if(n){
        alert("Title Data Exist")
        return false
    }
    Notes.push(noteInfo);
    localStorage.setItem('Notes',JSON.stringify(Notes));
    showNotes()
}

// delete note
export function deleteNote(id){
    console.log(id)
    Notes.splice(id,1)
    localStorage.setItem('Notes',JSON.stringify(Notes));
    showNotes()
}
export function editNote(id,title){
    // let a=Notes(id)
    console.log(id,title)
    let now= Notes.find((curr)=>curr.title==title)

    let modalElem=document.querySelector('new-modal')
    let mtitle=modalElem.querySelector('#modal-title')
    mtitle.value=now.title;
    let mdesc=modalElem.querySelector('#modal-desc')
    mdesc=now.desc;
    let mhead=modalElem.querySelector('#modal-head')
    mhead.innerText='Modify Note'
    openModal()
}
    // mtitle.value=title;
    // mdesc.value=desc;
    // mhead.innerText="Modify Note";
    // let mtitle=document.querySelector('#modal-title')
    
    // openModal(modalElem)
    // let a=Notes[id]
    // console.log(a)

//  making global fun to window
window.deleteNote=deleteNote
window.editNote=editNote