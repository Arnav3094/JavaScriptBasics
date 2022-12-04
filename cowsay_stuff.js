//      Node Package Manager
// npm init
// press enter a bunch of times
// npm install ""

const cowsay = require("cowsay")
const Quote = require("inspirational-quotes")

const text_ = Quote.getQuote().text

const args = {
    text: text_,
    e: "x",
    T: "||"
}

console.log(cowsay.say(args))