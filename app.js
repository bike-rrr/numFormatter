// we start from the end and check if (i % 3) === 0 and were not at the first Number
function shortComma(num) {
    const str = num.toString();
    let len = str.length;
    let formatted = '';

    for (let i = len - 1; i >= 0; i--) { //  last is ZERO index -> if i % 3 === 0, comm
        formatted += str[Math.abs(i - (len - 1))];
        if (i % 3 === 0 && i != 0) {
            formatted += ','
        }
    }
    return formatted;
}

const textbox = document.querySelector("input");
const field = document.querySelector(".field");
document.addEventListener('input', (event) => {
    if (event.target.value[0] === "0") {
        if (event.target.value[event.target.value.length - 1] === "0") {
            field.innerHTML = '0';
            event.target.value = "0"
            return; // 0 or 00 or 000 or 0000000 wont get past here
        }
        event.target.value = event.target.value.substring(1);
        field.innerHTML = shortComma(event.target.value)
    } else {
        field.innerHTML = shortComma(event.target.value);
    }
})