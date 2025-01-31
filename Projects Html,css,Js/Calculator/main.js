let numberButton=document.querySelectorAll('[data-number]')
let operatorButton=document.querySelectorAll('[data-operator]')
let deleteButton=document.querySelector('[data-delete]')
let clearButton=document.querySelector('[data-clear]')
let equalButton=document.querySelector('[data-equal]')
let prevOperandText=document.querySelector('[data-prev-operand]')
let currOperandText=document.querySelector('[data-curr-operand]')

class Calculator{
    constructor(prevOperandText,currOperandText){
        this.prevOperand=prevOperandText
        this.currOperand=currOperandText
        this.clear()
    }
    clear(){
        this.prevOperand=""
        this.currOperand=''
        this.operation=undefined
    }
    append(no){
        if(no=="." && this.currOperand.includes('.')) return 
        this.currOperand+=String(no)
    }
    delete(){
        this.currOperand=this.currOperand.slice(0,-1)
    }
    compute(){
        let res=0;
        let prev=parseFloat(this.prevOperand)
        let curr=parseFloat(this.currOperand)
        if(isNaN(prev) || isNaN(curr) ) return
        switch (this.operation){
            case "+":
                res=prev + curr
                break
            case "-":
                res=prev - curr
                break
            case "*":
                res=prev * curr
                break
            case "/":
                res=prev / curr
                break
            default:
                return
        }
        this.prevOperand="";
        this.currOperand=res;
        this.operation=undefined;
    }
    getDisplayNumber(number){
        // number=number.toString()
        // if(isNaN(number)) return ''
        // let intDigit=parseFloat(number.split('.')[0])
        // // let intDigit=parseInt(number)
        // let decimalDigit=number.split('.')[1]
        // if(isNaN(intDigit)){
        //     intDigit=""
        // }else{
        //     intDigit=intDigit.toLocaleString('en'
        //         ,{
        //         maximumFractionDigits:0}
        //     )
        // }
        // if(decimalDigit!=null){
        //     return `${intDigit}.${decimalDigit}`
        // }else{
        //     return intDigit
        // }

        console.log(number.toLocaleString('en'))
        return number.toLocaleString('en')

        // if (number === "") return "";
        // let [integer, decimal] = number.split(".");
        // integer = integer ? Number(integer).toLocaleString("en-US") : "";
        // return decimal ? `${integer}.${decimal}` : integer;
    }
    updateDisplay(){
        currOperandText.innerText=( this.currOperand)
        prevOperandText.innerText=(this.prevOperand)
        // currOperandText.innerText=this.getDisplayNumber( this.currOperand)
        // prevOperandText.innerText=this.getDisplayNumber(this.prevOperand)
    }

    chooseOperator(operator){
        if(this.currOperand=='') {return }  
        if(this.prevOperand!=""){
            this.compute()
        }
        this.append(` ${operator}`)
        this.operation=operator
        this.prevOperand=this.currOperand
        this.currOperand=''
        currOperandText.innerText =this.currOperand
    }
}
let calc=new Calculator(prevOperandText,currOperandText)

numberButton.forEach(elem=>{
    elem.addEventListener('click',(e)=>{
        // console.log(e.target.innerText)
        calc.append(e.target.innerText)
        calc.updateDisplay()
    })
})
operatorButton.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        calc.chooseOperator(e.target.innerText)
        calc.updateDisplay()
    })
})
equalButton.addEventListener('click',(e)=>{
    calc.compute()
    calc.updateDisplay()
})
clearButton.addEventListener('click',(e)=>{
    calc.clear()
    calc.updateDisplay()
})
deleteButton.addEventListener('click',(e)=>{
    calc.delete()
    calc.updateDisplay()
})