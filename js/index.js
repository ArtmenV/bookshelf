// const helloFunc = () => {
//     console.log(this);
//     console.log('h1');
// }

// const byeFunc = () => {
//     console.log(this);
//     console.log('bye');
// }
function helloFunc1() {
    console.log(this);
    console.log('h1');
}

function byeFunc1() {
    console.log(this);
    console.log('bye');
}


// document.querySelector('#h3').addEventListener('click', helloFunc);
// document.querySelector('#h3').addEventListener('click', byeFunc);
document.querySelector('#h3').addEventListener('click', helloFunc1);
document.querySelector('#h3').addEventListener('click', byeFunc1);
