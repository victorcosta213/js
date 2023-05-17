const fuc=[]

for(let i=0;i<10;i++){
    fuc.push(function(){
        console.log(i)
    })
}

fuc[2]()
fuc[6]()
fuc[8]()