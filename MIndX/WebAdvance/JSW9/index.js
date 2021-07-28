const contentInput = document.getElementById("content__text");
const content = document.getElementById("content");
const createBTN = document.getElementById("create__btn");
const updateBTN = document.getElementById("update__btn");
const deleteBTN = document.getElementById("delete__btn");

createBTN.addEventListener("click",function(){
    const value=contentInput.value;
    content.innerText=value;
    console.log(contentInput.value)
});
updateBTN.addEventListener("click", function(){
    const value1=contentInput.value;
    content.innerText=value+value1;
    
})
deleteBTN.addEventListener("click", function(){
    const value=contentInput.value;
    content.innerText="0";
})