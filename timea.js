let timeString = time.now
console.log(timeString)
const convertTime = timeString => {
  let regExTime = /([0-9]?[0-9]):([0-9][0-9]):([0-9][0-9])/
  let regExTimeArr = regExTime.exec(timeString) // ["01:12:33", "01", "12", "33", index: 0, input: "01:12:33", groups: undefined]
  let timeHr = regExTimeArr[1] * 3600 * 1000
  let timeMin = regExTimeArr[2] * 60 * 1000
  let timeSec = regExTimeArr[3] * 1000

  let timeMs = timeHr + timeMin + timeSec
  return timeMs
}
console.log(convertTime(timeString))
