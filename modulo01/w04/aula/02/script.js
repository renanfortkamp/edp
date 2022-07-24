const arr = [1,2,3,4,5,6,7,8,9]


const trans = ()=>{
    const arr2 = []
    for(i = 0; i < arr.length;i++){
        if(arr[i]%2 == 0){
            arr2.push(arr[i]**2)
        }else{
            arr2.push(arr[i]**3)
        }
    }
    console.log(arr2)
}

trans()

// const novo = valor % 2 === 0 ? valor ** 2 : valor ** 3;