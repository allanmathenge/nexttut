"use strict";
// 
// const year = <HTMLElement>document.getElementById("year")
// const thisYear = <number>new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
// 1st variation
let year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}
