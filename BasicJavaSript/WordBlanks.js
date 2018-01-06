/*
We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". 
You will create an (optionally humorous) "Fill in the Blanks" style sentence.

In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. 
You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence - "It was really ____, and we ____ ourselves ____". This sentence has three missing pieces- 
an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed 
sentence to a variable as follows:

var sentence = "It was really" + "hot" + ", and we" + "laughed" + "ourselves" + "silly.";
*/


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result = "I saw a " + myNoun + " it was " + myAdjective + " so I " + myVerb + " away " + myAdverb;
    return result;
  }
  
  wordBlanks("dog", "big", "ran", "quickly");
  