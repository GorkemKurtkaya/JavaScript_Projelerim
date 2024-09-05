// // function KelimeyiGosterme(kelime,sayi){
// //     let sonuc="";
// //     for (let i =0; i<sayi; i++){
// //         sonuc +=kelime;
// //         if(i<sayi-1){
// //             sonuc +=" ";
// //         }
// //     } return sonuc;   
// // }

// // console.log(KelimeyiGosterme("Merhaba",5))

// function Dikdortgen(kisakenar,uzunkenar){
//     let Alan=kisakenar*uzunkenar
//     let Cevre=(kisakenar*2)+(uzunkenar*2)

//     console.log("Dikdörtgen Alanı:",Alan,"/","Dikdörtgen Çevresi:",Cevre)
// }

// Dikdortgen(5,12)


function TamBolenler(sayi){
    let sonuc=[];
    for(let i=1; i<=sayi; i++){
        if(sayi%i===0){
            sonuc.push(i);
        }
    }
    return sonuc;

}

// console.log(TamBolenler(25))


function toplam(){
    let sonuc =0;
    for (let i=0; i<arguments.length; i++){
        sonuc +=arguments[i];
    }
    return sonuc;
}
console.log(toplam(8,6,25))











