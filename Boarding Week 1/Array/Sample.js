function*add(number){
    let add =0;
    while(true){
        yield number+add
        add++
    }
}

const sum = add(1)

for(let i=0;i<5;i++){
    console.log(sum.next().value)
}