
const parent = document.getElementById("parent")

const removeChild = document.getElementById("removeChildBtn")

removeChild.addEventListener('click',function(){
    const lastChild = parent.lastElementChild

    parent.removeChild(lastChild)
})