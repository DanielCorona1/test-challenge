function dna(dnaString) {
    const canonicalBases = ['C', 'T', 'A', 'G'];
    let filteredString = '';
  
    for (let i = 0; i < dnaString.length; i++) {
      const base = dnaString[i];
      if (canonicalBases.includes(base.toUpperCase())) {
        filteredString += base;
      }
    }
    return filteredString;
  }
  module.exports = dna;