// https://www.codewars.com/kata/weight-for-weight/train/javascript

function orderWeight(strng) {
  let result = strng.split(' ').sort((a, b) => {
    let one = a.split('').reduce((pV, cV) => parseInt(pV) + parseInt(cV), 0)
    let two = b.split('').reduce((pV, cV) => parseInt(pV) + parseInt(cV), 0)

    return (one === two) ? a > b : one - two
  })

  for (let i = 0; i < result.length - 1; i++) {
    let one = result[i].split('').reduce((pV, cV) => parseInt(pV) + parseInt(cV), 0)
    let two = result[i + 1].split('').reduce((pV, cV) => parseInt(pV) + parseInt(cV), 0)

    if (one === two && result[i] > result[i + 1]) {
      let a = result[i]
      let b = result[i + 1]
      result.splice(i, 1, b)
      result.splice(i + 1, 1, a)
    }
  }

  for (let i = 0; i < result.length - 1; i++) {
    let one = result[i].split('').reduce((pV, cV) => parseInt(pV) + parseInt(cV), 0)
    let two = result[i + 1].split('').reduce((pV, cV) => parseInt(pV) + parseInt(cV), 0)

    if (one === two && result[i] > result[i + 1]) {
      let a = result[i]
      let b = result[i + 1]
      result.splice(i, 1, b)
      result.splice(i + 1, 1, a)
    }
  }

  return result.join(' ')
}

console.log(orderWeight('301167 151 193805 23 143532 189 190093 85 174156 65 421516 21 396906 155 412419 118 16213 165 311756 95 45'))