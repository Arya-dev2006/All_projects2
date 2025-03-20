let arr = [];
let NumberElement = document.querySelectorAll('.takin-numbers');
NumberElement.forEach((value, index) => {
    value.addEventListener('click', () => {
        Display(value);
    })
})
let cal = document.querySelector('.calculate-value');
cal.addEventListener('click',()=>{
calculation();
   
})
function calculation(){
    let calculation = eval(total);
    document.querySelector('p').innerHTML=calculation;
}
let total='';
function Display(valuee) {
    let store = valuee.innerHTML;
    arr.push(store);
    total = arr.join((''));
    document.querySelector('p').innerHTML = total;
    console.log(typeof(total))
}

document.querySelector('.all-clear').addEventListener('click',()=>{
    document.querySelector('p').innerHTML='0';
    arr=[];
})

document.querySelector('.delete-single-element').addEventListener('click',()=>{
total = total.slice(0,total.length-1);
arr=[total];
   document.querySelector('p').innerHTML=total;

})

