function prime(Num){
    let count=0;
    for(let x=0;x<Num;x++){
        if(Num%x==0){
            count++;
        }
    }
}
prime(19)