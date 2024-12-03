const yaricap = parseFloat(process.argv[2]);
if (!yaricap || yaricap <= 0) {
  console.log("Lütfen geçerli bir yarıçap giriniz.");
} else {
  const alan = Math.PI * Math.pow(yaricap, 2); 
  console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan.toFixed(2)}`);
}
