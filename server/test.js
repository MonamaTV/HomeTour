
// [3, 5, 6, 7] = 
const calculateProductsFromArray = (array = []) => {

    let products = [];
    let product = 1;
    let containsZero = false; //If there is only one array in the array
    let containtMultipleZeros = false; //If the array contains multiple 0 values

    //Calculating a product of all the values in the array except zero values
    for(let index = 0; index < array.length; index++) {
        if(containsZero) containtMultipleZeros = true;
        if(array[index] === 0) {
            containsZero = true;
            continue;
        };
        product = product * array[index];
    }

    for(let index = 0; index < array.length; index++) {
        //if the array contains multiple zeros, basically there is no product that won't contain a zero during computation
        if(containtMultipleZeros) {
            products.push(0);
            continue;
        }
        //However if there is only one zero, values that are nonzero are to be populated with zeros
        if(containsZero) {
            if(array[index] !== 0) products.push(0);
            else products.push(product);
        }
        //If the there is no zero value in the array, the computation is as follows...
        else if(!containsZero) {
            let computeProduct =  product / array[index] ;
            products.push(computeProduct);
        }
    }
    return products;
}
//Pairing two characters
const charaterPairer = (characters = "") => {

    let pairedCharacters = [];
    let pairs = "";
    let isEven = characters.length%2 === 1 ? true : true;
    if(isEven) {
        for(let index = 0; index < characters.length; index++) {
            
            if(index%2 === 0 && index !== 0  && index === 1) continue;

            if(index === (characters.length - 1)) continue;
            console.log(index)
            pairs = (characters[index] + characters[index + 1]);
            pairedCharacters.push(pairs);
            pairs = "";
        }
    }
    return pairedCharacters;

}
//Oh lol, surely my algo runs in linear time
const array = []
for(var i = 0; i < 5; i++) {
    array.push(() => console.log(i));
}

console.log(array[4]())
