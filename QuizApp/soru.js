
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}


let sorular = [
    new Soru("1-Bayrağında çift başlı kartal figürü bulunan Türk devleti hangisidir?", { a: "Altın Orda", b: "Ak Hun", c: "Avrupa Hun" ,d:"Büyük Selçuklu" }, "d"),
    new Soru("2-Küçük Prens kitabının yazarı kimdir?", { a: "Victor Hugo", b: "Pierre Corneille", c: "Charles Baudelaire" , d:"Antoine de Saint-Exupery" }, "d"),
    new Soru("3-Kürk Mantolu Madonna romanı kim tarafından yazılmıştır?", { a: "Sabahattin Ali", b: "Orhan Pamuk", c: "Tolstoy" ,d:"Alexandre Dumas" }, "a"),
    new Soru("4-Budapeşte hangi ülkenin başkentidir?", { a: "Ürdün", b: "Macaristan", c: "Guatemala" ,d:"Kazakistan" }, "b")
];
