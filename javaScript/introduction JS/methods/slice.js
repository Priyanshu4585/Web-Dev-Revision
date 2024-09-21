var tweet= prompt("write your tweet");

var tweetL= tweet.length;

alert("you have written "+tweet.length+" characters. You are left with "+(180-tweet.length)+" characters");

var slicedTweet = tweet.slice(0,180);

alert(slicedTweet);