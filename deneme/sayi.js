let sayi1=30;
let sayi2=60;

let sayiKontrol
if(10<sayi1<50){
    console.log("Sayı 10 ile 50 arasındadır")
}
if(10<sayi2<50){
    console.log("Sayı 10 ile 50 arasındadır")
}

let tekMi=(sayi)=>{
    if(sayi%2==1){
        console.log("Sayı tek")
    }else{
        console.log("Sayı çift")
    }
}
console.log(tekMi(sayi1,sayi2))

let x=10;
let y=20;
let z=30;

let enBuyuk
    if(x>y && y>z){
        console.log(x,y,z)
    }
    else if(y>x && x>z){
        console.log(y,x,z)
    }
    else if(z>y && y>x){
        console.log(z,y,x)}


console.log(enBuyuk)



let Vize1=67;
let Vize2=42;
let Final=55;



let ortalamaSinav=((Vize1*0.2)+(Vize2*0.3)+(Final*0.5));
console.log(ortalamaSinav)


let BasariliSinav
        if(ortalamaSinav>50 && Final>50 ){
            console.log("Dersten Geçtiniz")
        }else if(Final>70){
            console.log("Dersten Koşullu Geçtiniz")
        }
        else{
            console.log("Dersten Kaldınız")
        }

        console.log(BasariliSinav)

        ``