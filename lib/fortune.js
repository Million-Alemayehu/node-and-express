const fortuneCookies = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "The secret of getting ahead is getting started.",
  "The only way to deal with an unfriendly world is to let your personality shine.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall."
];

exports.getFortune = () => {
  const idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
}