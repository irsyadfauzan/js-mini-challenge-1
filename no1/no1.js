function scoreChecker(score) {
  if (score >= 92) {
    result = 'Selamat! Anda mendapatkan nilai A.'
  }
  else if (score >=85 && score <=91) {
    result = "Anda mendapatkan nilai B."
  }
  else if (score >=74 && score <=84) {
    result = 'Anda mendapatkan nilai C.'
  }
  else if (score >=60 && score <=73) {
    result = "Anda mendapatkan nilai D."
  }
  else if (score <=59 && score>0) {
    result = 'Anda mendapatkan nilai E.'
  }
  else {result = "Anda belum mengikutin ulangan"}
  return result;
};


console.log(scoreChecker(92)); // Selamat! Anda mendapatkan nilai A.
console.log(scoreChecker(85)); // Anda mendapatkan nilai B.
console.log(scoreChecker(74)); // Anda mendapatkan nilai C.
console.log(scoreChecker(60)); // Anda mendapatkan nilai D.
console.log(scoreChecker(59)); // Anda mendapatkan nilai E.
