const inputValue = document.getElementById("input-num");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");


//1. 시작버튼 누르면 랜덤한 3자리 수 생성 
function createNum() {

    var loadedNum = localStorage.getItem("answer");
    if (loadedNum == null) {
        var answerNum = Math.floor((Math.random()*1000));
        localStorage.setItem("answer", answerNum);    
    }

}
startBtn.addEventListener("click", createNum);

//2. 제출버튼 누르거나(=엔터하면) 숫자비교 
const submittedNum = document.getElementById("input-num");

