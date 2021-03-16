const interface = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
interface.question('Please type here Roman number which you want to convert', number => {
    console.log('test', number);
    interface.close();
})