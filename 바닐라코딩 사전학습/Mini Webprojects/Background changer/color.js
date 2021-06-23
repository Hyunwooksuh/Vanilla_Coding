const colorName = document.getElementById("colorText");
const button = document.getElementById("button");
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function getBackgroundColor(hexnum) {
    //1. Hex color code를 innerText에 삽입
    colorName.innerText = "HEX COLOR:"+hexnum;

    //2. Hex color code에 따라 배경색 변경
    document.body.style.background = hexnum;
}

function hexGenerator() {
    //While문 사용: 6개의 숫자를 다 정하면 break!
    let result = "#";
    let t = 0;
    while(1) {

      if (t == 6) break;
      const index = Math.floor(Math.random() * hexNumbers.length);
      result += hexNumbers[index];
      t++;
    }

    getBackgroundColor(result);

  
}

button.addEventListener("click", hexGenerator);