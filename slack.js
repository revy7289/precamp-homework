console.log("240827 js prac n test");

const requestBtn = document.getElementById("request");
const authBtn = document.getElementById("auth");
const submitBtn = document.getElementById("submit");

const name = document.getElementById("name").value;
const mail = document.getElementById("mail").value;
const password = document.getElementById("password").value;
const passConfirm = document.getElementById("passConfirm").value;
const phone01 = document.getElementById("phone01").value;
const phone02 = document.getElementById("phone02").value;
const phone03 = document.getElementById("phone03").value;
const inputFull = name + mail + password + passConfirm + phone01 + phone02 + phone03;
console.log(inputFull)

function auth () {
    let timer = null;
    clearInterval(timer);
    setTime(179);
}

function setTime (time) {
    const randNum = String( Math.floor( Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("number").innerText = randNum;

    clearInterval(timer);
    document.getElementById("timer").innerText = "03:00";

    document.getElementById("number").hidden = false;
    document.getElementById("request").style = "background-color: #C7C7C7";
    document.getElementById("timer").hidden = false;
    document.getElementById("auth").style = "background-color: #491449";

    document.getElementById("name").disabled = true;
    document.getElementById("mail").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("passConfirm").disabled = true;
    document.getElementById("phone01").disabled = true;
    document.getElementById("phone02").disabled = true;
    document.getElementById("phone03").disabled = true;

    timer = setInterval( function() {
        const min = String( Math.floor( time / 60 ) ).padStart(2, "0");
        const sec = String( time % 60 ).padStart(2, "0");
        const remainTime = `${min}:${sec}`;

        if (time >= 0) {
            time -= 1
            document.getElementById("timer").innerText = remainTime;
        } else {
            document.getElementById("number").innerText = "000000"
        }
    }, 1000);
}

function confirm () {
    document.getElementById("number").hidden = true;
    document.getElementById("timer").hidden = true;
    document.getElementById("auth").innerText = "인증완료";
    document.getElementById("auth").style = "background-color: #C7C7C7";

    document.getElementById("name").disabled = false;
    document.getElementById("mail").disabled = false;
    document.getElementById("password").disabled = false;
    document.getElementById("passConfirm").disabled = false;
    document.getElementById("phone01").disabled = false;
    document.getElementById("phone02").disabled = false;
    document.getElementById("phone03").disabled = false;
}

function signup () {
    const calendar = new Date();
    const year = calendar.getFullYear();
    const month = String( calendar.getMonth() +1).padStart(2, "0");
    const date = String( calendar.getDate()).padStart(2, "0");

alert(
`회원가입을 축하합니다.
(가입일시 : ${year}-${month}-${date})`
)
}

requestBtn.addEventListener('click', auth);
authBtn.addEventListener('click', confirm);
submitBtn.addEventListener('click', signup);