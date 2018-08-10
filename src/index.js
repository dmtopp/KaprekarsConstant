const MAGIC_NUMBER = '6174'
const int = str => parseInt(str, 10)

const sortDigits = sortCb => numberStr =>
  `${numberStr}`.split('').sort(sortCb).join('')

// 1) arrange in ascending order
export const arrangeAsc = sortDigits((a, b) => a - b)

// 2) arrange in descending order
export const arrangeDsc = sortDigits((a, b) => b - a)

// 3) add 0s to make two four-digit numbers
export const padZeros = numberStr =>
  (numberStr.length < 4 ? padZeros(`0${numberStr}`) : numberStr)

// 4) subtract the smaller number from the bigger number
export const subtractSmallerFromLarger = (num1, num2) => padZeros(`${Math.abs(int(num1) - int(num2))}`)

// 5) repeat subtraction until difference reaches 6174
// 6) return number of iterations until 6174
export default (number) => {
  let numberOfSteps = 0
  let result = `${number}`

  while (result !== MAGIC_NUMBER) {
    const asc = padZeros(arrangeAsc(result))
    const dsc = padZeros(arrangeDsc(result))

    result = subtractSmallerFromLarger(asc, dsc)
    numberOfSteps += 1
  }

  return numberOfSteps
}
