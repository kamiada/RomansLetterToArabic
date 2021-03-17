const roman = {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000,
}


const interface = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
interface.question('Please type here Roman number which you want to convert', number => {
    console.log('test', number);
    interface.close();
})