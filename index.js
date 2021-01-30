// Main Function
function handleTicketChange(ticket,isIncrement){
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketClassCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketClassCount;
    if(isIncrement == true){
        ticketNewCount = ticketClassCount +1;
    }
    if(isIncrement == false && ticketClassCount > 0){
        ticketNewCount = ticketClassCount -1;
    }
    ticketInput.value = ticketNewCount;
    let ticketTotal = 0;
    if(ticket == 'first-class'){
        ticketTotal = ticketNewCount * 150;
    }
    if(ticket == 'economy-class'){
        ticketTotal = ticketNewCount * 100;
    }
    document.getElementById("ticket-total").innerText ='$' + ticketTotal;
    calculateTotal();
}

// Function for counting subtotal,vat,totalPrice
function calculateTotal(){
    const firstClassCount = getInputValue('first-class');

    const economyClassCount = getInputValue('economy-class');

    const totalTicketPrice = (firstClassCount * 150) + (economyClassCount * 100)
    document.getElementById("ticket-total").innerText ='$' + totalTicketPrice;

    const vat = Math.round(totalTicketPrice * 0.1);
    document.getElementById("vat-amount").innerText ='$'+ vat;

    const grandAmount = totalTicketPrice + vat;
    document.getElementById("grand-total").innerText = '$' + grandAmount;
}

// Function for getInput
function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketClassCount = parseInt(ticketInput.value);
    return ticketClassCount;
}

//For bonus
const bookingForm = document.querySelector('.booking-form');
const bookingContent = document.querySelector('.booking-content');
const confirmation = document.querySelector('#confirmation');

document.getElementById("booknow").addEventListener("click",function(){
    bookingForm.style.display = 'none';
    bookingContent.style.display = 'none';
    confirmation.style.display = 'block';
})








// function firstClassTicketChange(isIncrement){
//     const firstClassInput = document.getElementById("first-class-count");
//     const firstClassCount = parseInt(firstClassInput.value);
//     // const firstClassNewCount = firstClassCount -1;
//     let firstClassNewCount = firstClassCount;
//     if(isIncrement == true){
//         firstClassNewCount = firstClassCount +1;
//     }
//     if(isIncrement == false && firstClassCount > 0){
//         firstClassNewCount = firstClassCount -1;
//     }
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById("ticket-total").innerText ='$' + firstClassTotal;
// }

// function handleEconomyClassTicketChange(isIncrement){
//     const economyClassInput = document.getElementById("economy-class-count");
//     const economyClassCount = parseInt(economyClassInput.value);
//     // const economyClassNewCount = economyClassCount +1;
//     let economyClassNewCount = economyClassCount;
//     if(isIncrement == true){
//         economyClassNewCount = economyClassCount +1;
//     }
//     if(isIncrement == false && economyClassCount > 0){
//         economyClassNewCount = economyClassCount -1;
//     }
//     economyClassInput.value = economyClassNewCount;
//     const economyClassTotal = economyClassNewCount * 100;
//     document.getElementById("ticket-total").innerText = '$' + economyClassTotal;
// }

// Increasing first class ticket quantity
// document.getElementById("first-class-increase").addEventListener("click",function(){
//     handleTicketChange(true);
// })

// Decreasing first class ticket quantity
// document.getElementById("first-class-decrease").addEventListener("click",function(){
//     handleTicketChange(false);
// })


//Increasing economy class ticket quantity
// document.getElementById("economy-class-increase").addEventListener("click",function(){
//     handleEconomyClassTicketChange(true);
// })

// // Decreasing economy class ticket quantity
// document.getElementById("economy-class-decrease").addEventListener("click",function(){
//     handleEconomyClassTicketChange(false);
// })



// // Increasing first class ticket quantity
// document.getElementById("first-class-increase").addEventListener("click",function(){
//     const firstClassInput = document.getElementById("first-class-count");
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount +1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById("ticket-total").innerText ='$' + firstClassTotal;
// })

// // Decreasing first class ticket quantity
// document.getElementById("first-class-decrease").addEventListener("click",function(){
//     const firstClassInput = document.getElementById("first-class-count");
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount -1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById("ticket-total").innerText ='$' + firstClassTotal;
// })