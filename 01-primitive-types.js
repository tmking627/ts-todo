"use strict";
// 変数の宣言にはletが必要
// let (変数名): (型名) = 値
let userName = "山田太郎"; //（文字列）
let age = 20; //（数値）
let isAdult = true; // (真偽値)
let test = "AAA"; // なんでもOK(JSと同じ)
console.log(userName);
console.log(age);
console.log(isAdult);
console.log(test);
userName = "田中花子";
//userName = 1 //　userNameがstring型なのでエラーになる
age = 30;
// age = "30" // エラーになる
// anyは何でも代入することが出来てしまう
test = "テスト";
test = 0;
test = false;
// 型宣言は省略も可能
let testName = "テストネーム";
//testName = 0 // エラーになる
