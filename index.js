function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

var uppercase = "HELLO"
var lowercase = "hello"

function sayHiToGrandma(string) {
  if (sayHiToGrandma(string).toLowerCase() === lowercase) {
    return "I can't hear you!"
  } else if (sayHiToGrandma(string).toUpperCase() === uppercase) {
    return "YES INDEED!"
  } else if (sayHiToGrandma(string) === "I love you, Grandma.") {
    return "I love you, too."
  }
}
