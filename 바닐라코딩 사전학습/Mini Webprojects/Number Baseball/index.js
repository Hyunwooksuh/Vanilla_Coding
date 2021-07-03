const inputValue = document.getElementById("input-num");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const submitBtn = document.getElementById("submit-btn");

const strikeCount = document.getElementById("strike-cnt");
const ballCount = document.getElementById("ball-cnt");

let timeLeft = document.getElementById("time-cnt");
let answerNum = 1;
let ballCnt = 0;
let strikeCnt = 0;

let tryLeft = 10;
//1. 시작버튼 누르면 랜덤한 3자리 수 생성 
function createNum() {
    answerNum = Math.floor((Math.random()*1000))
    if (answerNum >= 100) {
        answerNumText = String(answerNum);
        localStorage.setItem("answer", answerNumText);
        answerNum = answerNumText;
    }
}
//2. 제출버튼 눌러 숫자비교 --> enter 버튼 구현까지 도전할 예정  
function threeDigitNum() {
    var submittedNum = inputValue.value;
    if (submittedNum <= 1000 && submittedNum >= 100) {
        compareNum();
    }
}
function compareNum() {
    var submittedNum = inputValue.value;
    submittedNum = String(submittedNum);
    //횟수 차감
    tryLeft--;
    timeLeft.innerText = "남은횟수:" + tryLeft + "회";
    ballCnt = 0;
    strikeCnt = 0;
    //스트 갯수 (숫자O, 위치O)
    for (let i = 0; i<3; i++) {
        if (answerNum[i] == submittedNum[i]) strikeCnt++;
    }
    //볼 갯수 (숫자O, 위치X)
    for (let y = 0; y<3; y++) {
        for (let x = 0; x<3; x++) {
            if (answerNum[y] == submittedNum[x]) ballCnt++;
        }
    }
    
    strikeCount.innerText = "STRIKE : "+ strikeCnt +"S";
    ballCount.innerText = "BALL : " + ballCnt + "B";

    //결과 Alert
    if (strikeCnt == 3 && ballCnt == 0) {
        alert("승리!");
        restart();
    } else if (tryLeft == 0 && !(strikeCnt == 3 && ballCnt == 0)){
        alert("재도전하세요!");
        restart();
    }
}
function restart() {
    tryLeft = 10;
    timeLeft.innerText = "남은횟수:" + tryLeft + "회";
    ballCnt = 0;
    strikeCnt = 0;
    strikeCount.innerText = "STRIKE : "+ strikeCnt +"S";
    ballCount.innerText = "BALL : " + ballCnt + "B";
    createNum();
    inputValue.value = "";
    localStorage.clear();
}

startBtn.addEventListener("click", createNum);
restartBtn.addEventListener("click", restart);
submitBtn.addEventListener("click",threeDigitNum);

