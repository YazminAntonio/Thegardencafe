let timeString = '24:00:00'
const convertTime = timeString => {
  let regExTime = /([0-9]?[0-9]):([0-9][0-9]):([0-9][0-9])/
  let regExTimeArr = regExTime.exec(timeString) // ["01:12:33", "01", "12", "33", index: 0, input: "01:12:33", groups: undefined]
  let timeHr = regExTimeArr[1] * 3600 * 1000
  let timeMin = regExTimeArr[2] * 60 * 1000
  let timeSec = regExTimeArr[3] * 1000

  let timeMs = timeHr + timeMin + timeSec //4353000 -- this is the time in milliseconds.
  //let refTimeMs = 1577833200000 //Wed, 1st January 2020, 00:00:00;
  //let time = new Date(refTimeMs + timeMs) //Wed Jan 01 2020 01:12:33 GMT+0100 (West Africa Standard Time)
  //console.log(timeMs)
  return timeMs
}
console.log(convertTime(timeString))
