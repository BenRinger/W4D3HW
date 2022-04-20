const arr = [[3,4,5],['hog','stork','shark'],[7,8,9]]

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}


function compare(a,b) {

    if(a > b){
        console.log(`${a} is bigger`);
    } else{
        console.log(`${b} is bigger`);
    }
}
compare(5,10)


function compareString(c,d){
    if(c === d){
        console.log('We are the same');
    } else{
        console.log('We are not the same');
    }
}
compareString('Hello', 'Hello');
function compareString(c,d){
    if(c === d){
        console.log('We are the same');
    } else{
        console.log('We are not the same');
    }
}
compareString('Hello', 'bingo');