const parent = document.getElementById("parent")

const newChild = document.createElement("p")

newChild.textContent = "This is the new Child"

parent.appendChild(newChild)