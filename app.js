// Beden kitle endeksi hesaplama

let kilo = Number(prompt("Kilonuzu giriniz"));
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz"));

let sonuc = kilo/(boy*2);

if(sonuc<18.5) {
console.log("ideal kilonun altında" +sonuc)
} else if(sonuc>=18.5 && sonuc<=24.9) {
console.log("ideal kiloda" +sonuc)
} else if(sonuc>=30 && sonuc<=39.9) {
console.log("ideal kilonun çok üstünde(obez)" +sonuc)
} else if(sonuc>=40) {
console.log("ideal kilonun çok üstünde(morbid obez)" +sonuc)
}
