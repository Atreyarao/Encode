const express = require("express");
const route = express.Router();

route.post("/encode", (req, res) => {
    var str = req.body.str;
    console.log(req.body);
    if (str.toLowerCase() !== str) res.json(-1);
    var n = str.length;
    var ans = "";
    var i = 0;
    while (true) {
        if (i > n) break;
        var char = str.charAt(i);
        if (char >= '0' && char <= '9') res.json(-2);
        var count = 1;
        var j = i + 1;
        while (true) {
            if (j > n) break;
            var ch = str.charAt(j);
            if (char !== ch) break;
            count++;
            j++;
        }
        if (count === 1) ans += char; else ans += char + count;
        i = i + count;
    }

    res.send(ans);

})

module.exports = route;