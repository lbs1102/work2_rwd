var now = new Date();
var reserve_month = document.querySelector(".reserve[name=month]");
var reserve_day = document.querySelector(".reserve[name=day]");
var reserve_time = document.querySelector(".reserve[name=time]");
//月份設置
for (let index = 1; index < 13; index++) {
    reserve_month.innerHTML += "<option value=" + index + ">" + index + "</option>";
}
reserve_month.addEventListener("change", day_set);
day_set(now.getMonth() + 1);
//月份日期設置
function day_set(month) {
    let first_day = 1;
    if (isNaN(month)) month = this.value;
    if (month == now.getMonth() + 1) first_day = now.getDate();
    let data = new Date(now.getFullYear(), month, 0).getDate(); //當月總天數
    while (reserve_day.firstChild) {
        reserve_day.removeChild(reserve_day.firstChild);
    }
    for (let index = first_day; index < data + 1; index++) {
        reserve_day.innerHTML += "<option value=" + index + ">" + index + "</option>"
    }
}
//時段設置
for (let index = 12; index < 22; index++) {
    for (let x = 0; x < 6; x += 3) {

        reserve_time.innerHTML += "<option value=" + index + ":" + x + 0 + ">" + index + "" + x + 0 + "</option>"
    }

}