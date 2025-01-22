export const showToast=(oper,id)=>{
    console.log("toast called")
    let toast=document.createElement('div')
    toast.classList.add('toast')
    if(oper=="add"){
        toast.textContent=`Product with id ${id} added `
    }else if(oper=="delete"){
        toast.textContent=`Product with id ${id} deleted`
    }
    document.body.appendChild(toast)
    setTimeout(()=>{
        toast.remove()
    },2000)
}