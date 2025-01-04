const arr = ['abraham','thomas','deon','abhijith']

const hello = document.getElementById('hello')

let currentIndex = 0

hello.addEventListener('click',()=>{
  hello.textContent = arr[currentIndex];

  currentIndex = (currentIndex + 1) % arr.length; // Move to the next index (loop back to the start if at the end)
})



