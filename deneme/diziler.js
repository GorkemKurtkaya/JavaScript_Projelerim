// let meyveler=[
//     "Elma",
//     "Armut",
//     "Muz",
//     "Çilek"
// ]

// let diziuzunluk=meyveler.length;

// console.log(diziuzunluk)

// let diziilk=meyveler[0]
// let dizison=meyveler[meyveler.length-1]

// let yenimeyveler=meyveler.push("Kiraz")
// let meyvesilme=meyveler.splice(-2,2)

// // console.log(diziilk,dizison)
// // console.log(meyveler)
// // console.log(meyvesilme)
// // console.log(meyveler)

let ogrenciler=[
    ogrenci1=["Yiğit Bilgi",2010],
    ogrenci2=["Ada Bilgi",2012],
    ogrenci3=["Ahmet Turan",2009],
]
console.log(ogrenciler)

let yashesap=2024-ogrenci1[1]

function yaslarihesaplama(ogrenciler){
    let yaslar=[];
    

    for (let i=0;i<ogrenciler.length; i++){
        const yas= 2024-ogrenciler[i][1];
        yaslar.push(`${ogrenciler[i][0]}: ${yas} yaşında`)
    }
    return yaslar
}

console.log(yashesap)
console.log(yaslarihesaplama(ogrenciler))