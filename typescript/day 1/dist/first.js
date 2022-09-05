"use strict";
function username() {
    var user = prompt("Enter the name: ");
    document.getElementById("tab").innerHTML = String(user);
}
function sum() {
    var size = parseInt(prompt("Enter the size: "));
    var arr = [];
    for (var i = 0; i < size; i++)
        arr[i] = parseInt(prompt("Enter the value: "));
    var sum = 0;
    for (var j = 0; j < size; j++)
        sum += arr[j];
    document.getElementById("tab").innerHTML = sum;
}
