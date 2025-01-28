let selection=document.querySelectorAll('.select')
let result=document.querySelector('.history')
let userRes=document.querySelector('#user-result')
let compRes=document.querySelector('#comp-result')
let SELECTION=[
    {
        name:'Rock',
        emoji:"✊🏻",
        beats:"Scissor"
    },
    {
        name:'Paper',
        emoji:"✋🏻",
        beats:"Rock"
    },
    {
        name:'Scissor',
        emoji:"✌🏻",
        beats:"Paper"
    }
]
let userCount=userRes.innerText || 0;
let compCount=compRes.innerText || 0;

const makeSelection=(data)=>{
    let  select=SELECTION.find((curr)=>curr.name==data)
    return select
}
const createSelection=()=>{
    let a=Math.floor(Math.random()*SELECTION.length)||0
    return SELECTION[a]
}
const isWinner=(select,opponent)=>{
    return select.beats==opponent.name
}
const addSelectionResult=(select,iswon)=>{
    let res=document.createElement('div')
    res.innerText=select.emoji;
    res.classList.add('result')
    if(iswon){
        res.classList.add('winner')
    }
    result.prepend(res)
}
selection.forEach(element => {
    element.addEventListener('click',(e)=>{
        let selection =element.dataset.user;
        let userSelection=makeSelection(selection);

        let compSelection=createSelection()
        let userwon=isWinner(userSelection,compSelection);
        let compwon=isWinner(compSelection,userSelection);

        addSelectionResult(compSelection,compwon)
        addSelectionResult(userSelection,userwon)
        if(userwon){userCount++}
        if(compwon){compCount++}
        console.log(userRes,compRes)

        userRes.innerHTML=userCount;
        compRes.innerHTML=compCount;
    })
});

