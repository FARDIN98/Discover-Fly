// Increasing first class ticket quantity
document.getElementById("first-class-increase").addEventListener("click",function(){
    handleTicketChange(true);
})

// Decreasing first class ticket quantity
document.getElementById("first-class-decrease").addEventListener("click",function(){
    handleTicketChange(false);
})



function handleTicketChange(isIncrement){
    const firstClassInput = document.getElementById("first-class-count");
    const firstClassCount = parseInt(firstClassInput.value);
    // const firstClassNewCount = firstClassCount -1;
    let firstClassNewCount = firstClassCount;
    if(isIncrement == true){
        firstClassNewCount = firstClassCount +1;
    }
    if(isIncrement == false){
        firstClassNewCount = firstClassCount -1;
    }
    firstClassInput.value = firstClassNewCount;
    const firstClassTotal = firstClassNewCount * 150;
    document.getElementById("first-class-total").innerText ='$' + firstClassTotal;
}





// // Increasing first class ticket quantity
// document.getElementById("first-class-increase").addEventListener("click",function(){
//     const firstClassInput = document.getElementById("first-class-count");
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount +1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById("first-class-total").innerText ='$' + firstClassTotal;
// })

// // Decreasing first class ticket quantity
// document.getElementById("first-class-decrease").addEventListener("click",function(){
//     const firstClassInput = document.getElementById("first-class-count");
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount -1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById("first-class-total").innerText ='$' + firstClassTotal;
// })