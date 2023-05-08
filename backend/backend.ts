// sonunda backend'imiz bitti.

const sayilar: number[] = [5, 3, 8, 1, 9, 2, 7, 6, 4];

let enBuyukSayi: number = sayilar[0];
sayilar.forEach((sayi) => {
  if (sayi > enBuyukSayi) {
    enBuyukSayi = sayi;
  }
});