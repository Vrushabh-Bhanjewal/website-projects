
let ageInput=document.querySelector('#age')
let btn=document.querySelector('#calc')
let result=document.querySelector('#res')
ageInput.max=new Date().toISOString().split('T')[0];
function getDates(year,month){
    // console.log(new Date(year,month,0).getDate())
    return new Date(year,month,0).getDate();
}
btn.addEventListener('click',(e)=>{
    // geting birth date
    let birthDate=new Date(ageInput.value)
    let d1=birthDate.getDate();
    let m1=birthDate.getMonth()+1;
    let y1=birthDate.getFullYear();
    // getting current date
    let curr=new Date()
    let d2=curr.getDate();
    let m2=curr.getMonth()+1;
    let y2=curr.getFullYear();
    console.log(curr,birthDate)
    // finding differnece 
    let d3,m3,y3;

    y3=y2-y1

    if(m2>=m1){
       m3=m2-m1 
    }else{
        y3--
        m3=12+m2-m1
    }

    if(d2>= d1){
        d3=d2-d1
    }else{
        m3--
        d3=getDates(y1,m1)+ d2-d1;
    }
    if(m3 < 0){
        m3=11
        y3--
    }
    let res=`Hey!! You are <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days old. `
    // console.log(y3,m3,d3,res)
    result.innerHTML=res;
})

