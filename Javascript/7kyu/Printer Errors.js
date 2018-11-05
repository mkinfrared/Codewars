// https://www.codewars.com/kata/printer-errors

function printerError(s) {
  let errors = s.match(/[n-z]/ig) || []
  return `${errors.length}/${s.length}`
}

console.log(printerError('asdfghjklsfsadfldfgjlewirtuo'))
