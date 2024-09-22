function calculateLove() {
  // Generate a random love percentage
  var lovePercentage = Math.floor(Math.random() * 100) + 1;

  if (lovePercentage < 26) {
    console.log(
      "It looks like love isn't in full bloom just yet! With a love percentage of " +
        lovePercentage +
        "%, there's still plenty of room for growth. Remember, love isn’t all about numbers—it's about building connections, understanding each other, and growing together. So keep nurturing that bond, and who knows? This could just be the beginning of something amazing!"
    );
  } else if (lovePercentage > 25 && lovePercentage < 51) {
    console.log(
      "You're off to a promising start with a love percentage of " +
        lovePercentage +
        "%! There’s definitely a spark between you two, but it might need a little more time and effort to turn into a full flame. Keep sharing moments, learning about each other, and enjoying the journey together. Love can grow in the most unexpected ways!"
    );
  } else if (lovePercentage > 50 && lovePercentage < 76) {
    console.log(
      "With a love percentage of " +
        lovePercentage +
        "%, it’s clear that there’s a strong connection between you two! You’ve built a solid foundation, and things are looking bright. Keep stoking that fire by cherishing your time together and embracing what makes your relationship unique. You're well on your way to something special!"
    );
  } else {
    console.log(
      "Wow! A love percentage of " +
        lovePercentage +
        "% means you're practically a perfect match! It’s clear that your bond is deep, and love is in full bloom. Keep nurturing your relationship with trust, communication, and shared joy. It looks like you're destined for great things together!"
    );
  }
}
