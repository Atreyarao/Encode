const express = require("express");
const route = express.Router();

route.post("/decode", (req, res) => {
    var str = req.body.str;
    // console.log(str)
    var count = str.length - 1;
    var ans = 0;
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        var temp = 1;
        for (var j = 0; j < count; j++)temp *= 52;
        count--;
        if (ch >= 'a' && ch <= 'z') {
            var diff = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            temp *= diff;
            ans += temp;
        } else {
            var diff = ch.charCodeAt(0) - 'A'.charCodeAt(0);
            diff += 26;
            temp *= diff;
            ans += temp;
        }
    }
    var text = "";
    while (ans > 0) {
        var mod = ans % 26;
        var add = 'a'.charCodeAt(0) + (mod - 1);
        text += String.fromCharCode(add);
        ans = Math.floor(ans / 26);
    }
    text = text.split('').reverse().join('')
    res.status(200).send(text);

})
module.exports = route;
