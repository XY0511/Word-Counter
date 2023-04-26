function countWordsAndSentences() {
    let textInput = document.getElementById("textInput").value;
    
    // Calculate number of words
    let words = textInput.split(/\s+/).filter(word => word !== "");
    let numWords = words.length;
    
    // Calculate number of sentences
    let numSentences = textInput.split(/[.!?]+/).filter(sentence => sentence !== "").length;
    
    // Calculate number of paragraphs
    let numParagraphs = textInput.split(/\n\s*\n/).filter(paragraph => paragraph !== "").length;
    
    // Display result
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Number of words: " + numWords + "<br>" + "Number of sentences: " + numSentences + "<br>" + "Number of paragraphs: " + numParagraphs;
}