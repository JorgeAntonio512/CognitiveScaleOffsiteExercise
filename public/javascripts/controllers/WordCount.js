function checkWordCount () {
    //--- Fetch word from the input.
    var wordStr     = $("#gmWordInp").val ();
    if (wordStr == "")  return;

    var wordRegex   = new RegExp (wordStr, "gi");
    var matchRez    = $( ".span9" ).text ().match (wordRegex);
    var wordCount   = matchRez ? matchRez.length : 0;

    //--- Display the results.
    var countReport = '';
    switch (wordCount) {
        case 0:
            countReport = ' was not found!'
        break;
        case 1:
            countReport = ' was found one time.'
        break;
        default:
            countReport = ' was found ' + wordCount + ' times.'
        break;
    }

    $("#gmWordCount").text (countReport);
}

checkWordCount ();
var wordChkTimer = setInterval (checkWordCount, 444); // Over twice a sec. Plenty fast.

$("#gmWordInp").change (checkWordCount);