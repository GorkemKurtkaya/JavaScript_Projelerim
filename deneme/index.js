let ogrenci1={
    isim:"Ahmet",
    soyisim:"Yılmaz",
    dogum:"1998",
    MatematikNotlari:[80,20,30]
}
let ogrenci2={
    isim:"Mehmet",
    soyisim:"Öküz",
    dogum:"1990",
    MatematikNotlari:[80,70,30]
}

let ogrenciler=[ogrenci1,ogrenci2]

let yaslar=ogrenciler.map(ogrenci=>2024-ogrenci.dogum)

let ortalamalar=ogrenciler.map(ogrenci=>{
    let toplam=ogrenci.MatematikNotlari.reduce((toplam,not)=>toplam+not,0)
    return toplam/ogrenci.MatematikNotlari.length
})

let BasariliOgrenciler=ortalamalar.filter(ort=>ort>50)


console.log("Öğrenciler",ogrenciler)
console.log("YAŞLAR",yaslar)
console.log("ORTALAMALAR",ortalamalar)
console.log("BAŞARILI ÖĞRENCİLER",BasariliOgrenciler)