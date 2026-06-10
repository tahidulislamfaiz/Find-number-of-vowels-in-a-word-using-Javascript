let btn = document.querySelector('.btn');
let output = document.querySelector('.output');
let textrea = document.getElementById('textrea');
btn.addEventListener('click', function () {
    let val = textrea.value;
    if (val === "") {
        output.textContent = 'Plz Enter Your Throught!';
        output.style.color = "red";
    }
    else {
        let count = 0;
        for (let i = 0; i < val.length; i++) {
            if (val[i] === 'a' || val[i] === 'e' || val[i] === 'i' || val[i] === '0' || val[i] === 'u'){

                count++;
            }
        }
        output.innerHTML = `The number of vowels are ${count}`
        output.style.color = 'black'
    }
})