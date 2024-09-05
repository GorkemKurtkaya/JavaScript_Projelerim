let sayilar=[1,6,8,9,7,15,35]

// let karesi=0;
// for(let sayi of sayilar){
//     karesi =sayi*sayi;
//     console.log(karesi)
// }

// let BesinKatı=0;

// for (let sayi of sayilar){
//     if(sayi%5==0){
//         BesinKatı=sayi
//     }
//     console.log(BesinKatı)
// }

// let CiftSayilarToplam=0;

// for (let i=0; i<sayilar.length; i++){
//     if(sayilar[i]%2===0){
//         CiftSayilarToplam +=sayilar[i];
//     }
// }
// console.log(CiftSayilarToplam)

let urunler =["iphone 12","iphone 13","samsung s23","samsung s27"]

// let BuyukUrunler=[]
// for (let urun of urunler){
//     BuyukUrunler.push(urun.toUpperCase());
// }
// console.log(BuyukUrunler)

// let samsungSayisi=0;

// for (let urun of urunler){
//     if(urun.toLowerCase().includes("samsung")){
//         samsungSayisi++
//     }
// }
// console.log(samsungSayisi)

let ogrenciler=[
    {"ad":"Yiğit","Soyad":"bilgi","Notlar":[60,70,50]},
    {"ad":"Mehmet","Soyad":"bilgi","Notlar":[90,70,50]},
    {"ad":"Cemil","Soyad":"bilgi","Notlar":[20,70,50]},
]


for (let ogrenci of ogrenciler){
    let toplam=0;
    let notlar=ogrenci.Notlar

    for (let not of notlar){
        toplam +=not;
    }

    let ortalama=toplam/notlar.length;
    console.log(ortalama)

}
