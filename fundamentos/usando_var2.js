const fuc= []

for(var i=0; i<10; i++){
    fuc.push(function(){
        console.log(i)
    })
}

fuc[2]()
fuc[8]()