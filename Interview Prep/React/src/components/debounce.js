
const debounce = (func,delay)=>{
    let timeOutId
    return (...args)=>{
        if(timeOutId){
            clearTimeout(timeOutId)
        }
        timeOutId = setTimeout(()=>{
            func(...args)
        },delay)
    }
}

const handleSearch = (query) =>{
    console.log("Searching for :",query)
}

const debounced = debounce(handleSearch,1000)

debounced('apple')