// Increasing first class ticket quantity
document.getElementById("first-class-increase").addEventListener("click",function(){
    const firstClassInput = document.getElementById("first-class-count");
    const firstClassCount = parseInt(firstClassInput.value);
    const firstClassNewCount = firstClassCount +1;
    firstClassInput.value = firstClassNewCount
})