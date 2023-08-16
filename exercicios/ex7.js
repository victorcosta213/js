function estaEntre(a,b,c,d=false){
    if(a>=b && a<=c){
        return true
    } else if(d==true||d==undefined){
         return true }
    else{
        return false
    }

}

console.log(estaEntre(10,50,100))