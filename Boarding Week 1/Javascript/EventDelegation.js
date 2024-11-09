const itemList = document.getElementById("itemList")


itemList.addEventListener('click',function(event){
    if(event.target.tagName === "LI"){
        alert(`You have clicked ${event.target.textContent}`)
    }
})
