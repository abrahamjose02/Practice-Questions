const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = Promise.reject('Promise 2 rejected');
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Promise 3 resolved'));
Promise.allSettled([promise1, promise2, promise3])
    .then((value) => {
        console.log(value); 
    })
    .catch((error) => {
        console.log(error); 
    });
