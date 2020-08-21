const express = require("express");
const route = express.Router();

route.post("/encode", (req, res) => {
    var str = req.body.str;
    // console.log(str)
    if (str !== str.toLowerCase()) {
        res.send("-1");
        return;
    }
    var result = 0;
    var i = 0;
    var count = str.length - 1;
    for (i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch >= '0' && ch <= '9') { res.status(400).send("-2"); return }
        var temp = 1;
        for (var j = 0; j < count; j++) temp *= 26;
        count--;
        if (ch >= 'a' && ch <= 'z') {
            var diff = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            diff++;
            temp *= diff;
        } else {
            var diff = ch.charCodeAt(0) - 'A'.charCodeAt(0);
            temp *= diff;
        }
        result += temp;
    }
    console.log(result);
    var b52 = "";

    while (result > 0) {
        var mod = result % 52;
        if (mod < 26) {
            var diff = "a".charCodeAt(0);
            diff += mod;
            diff = String.fromCharCode(diff)
            b52 += diff;
        } else {
            var diff = "A".charCodeAt(0);
            mod -= 26;
            diff += mod;

            diff = String.fromCharCode(diff)
            b52 += diff;
        }
        result = Math.floor(result / 52);
    }

    b52 = b52.split('').reverse().join('')
    res.send(b52);

})

module.exports = route;
