class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }



  static titleize(sentence) {
    const skipCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array1 = sentence.split(" ")
    return array1.map(function(word) {
      if (skipCapitalize.includes(word)) {
        return word
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }}).join(" ")
  }

}