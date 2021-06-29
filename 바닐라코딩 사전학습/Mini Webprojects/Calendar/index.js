var date = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var currentDate = date.getDate();
var currentDay = days[date.getDay()];
var currentMonth = months[date.getMonth()];
var currentYear = date.getFullYear();


//1. 상단에 오늘 날짜 표기 
const today = document.getElementById("day");
const today_date = document.getElementById("date");
const month_year = document.getElementById("current-month");
today.innerText = currentDay;
today_date.innerText = currentDate;
month_year.innerText = `${currentMonth} ${currentYear}`;

//2. 캘린더 채우기 
let monthCalendar = date.getMonth();
calendarSetter();
function calendarSetter() {
    const first_day = new Date(date.getFullYear(), monthCalendar, 1);
    const last_day = new Date(date.getFullYear(), monthCalendar + 1, 0);

    let rowCnt = 1;
    let row = document.getElementById("calendar-row-" + rowCnt);

    let index = first_day.getDay();
    for (let i = 1; i <= last_day.getDate(); i++) {
        if (index == 7) {
            index %= 7;
            rowCnt++;
            row = document.getElementById("calendar-row-" + rowCnt);
        };
        row.children[index].innerText = i;
        index++;
    }
}

//3. 버튼 넘기기 (prev, next)
const prevBtn = document.getElementById('btn-left');
const nextBtn = document.getElementById('btn-right');

function clearTable() {
    const table = document.getElementsByClassName("calendar-row");
    for (let i = 0; i<table.length; i++) {
        for (let x = 0; x<table[i].childElementCount; x++) {
            var tar = table[i].children[x];
            tar.innerText = '';
        }
    }
}

function movePrev() {
    //1. 상단에 첫째 날짜 표기

    const first_day = new Date(date.getFullYear(), monthCalendar-1, 1);
    today.innerText = days[first_day.getDay()];
    today_date.innerText = first_day.getDate();
    if (monthCalendar <= 0) {
        month_year.innerText = `${months[monthCalendar+11]}  ${first_day.getFullYear()}`;    
    } else {
        month_year.innerText = `${months[monthCalendar-1]}  ${first_day.getFullYear()}`;    
    }

    //2. 캘린더 채우기
    monthCalendar--;
    clearTable();
    calendarSetter();
}

function moveNext() {

    const first_day = new Date(date.getFullYear(), monthCalendar+1, 1);
    today.innerText = days[first_day.getDay()];
    today_date.innerText = first_day.getDate();
    if (monthCalendar >= 11) {
        month_year.innerText = `${months[monthCalendar-11]}  ${first_day.getFullYear()}`;    
    } else {
        month_year.innerText = `${months[monthCalendar+1]}  ${first_day.getFullYear()}`;    
    }

    //2. 캘린더 채우기 
    monthCalendar++;
    clearTable();
    calendarSetter();
}

prevBtn.addEventListener("click", movePrev);
nextBtn.addEventListener("click", moveNext);