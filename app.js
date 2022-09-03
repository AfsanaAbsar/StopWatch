let ten = 0;
let second = 0;
let minute = 0;
let Interval;
const tens = document.getElementById('tens')
const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')

function startTimer() {

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);

    ten++;
    console.log(ten);
    if (ten <= 9) {
        tens.innerHTML = "0" + ten;
    }

    if (ten > 9) {
        tens.innerHTML = ten;

    }

    if (ten > 99) {

        second++;
        seconds.innerHTML = "0" + second;
        ten = 0;
        tens.innerHTML = "0" + 0;
    }

    if (second > 9) {
        seconds.innerHTML = second;
    }


    if (second > 59) {

        minute++;
        minutes.innerHTML = "0" + minute;
        second = 0;
        seconds.innerHTML = "0" + 0;
        ten = 0;
        tens.innerHTML = "0" + 0;
    }

    if (minute > 9) {
        minutes.innerHTML = minute;
    }
}

function stopTimer() {
    clearInterval(Interval);
}


function resetTimer() {
    clearInterval(Interval);
    ten = "00";
    second = "00";
    minute = "00";
    tens.innerHTML = ten;
    seconds.innerHTML = second;
    minutes.innerHTML = minute;


}
