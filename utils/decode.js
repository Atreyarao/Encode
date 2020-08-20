const express = require("express");
const route = express.Router();

route.post("/decode", (req, res) => {
    var str = req.body.str;
    console.log(str);
    var i = 0;
    var n = str.length;
    var ans = "";
    while (true) {
        //  console.log("fjdsh");
        if (i > n) break;
        var char = str.charAt(i);
        var j = i + 1;
        var count = 1;
        var temp = "";
        // var isDigit = true;
        while (true) {
            if (j > n) break;

            var ch = str.charAt(j);
            if (ch < '0' || ch > '9') break;

            temp += ch;
            j++;
            count++;
        }
        if (count == 1) ans += char;
        var num = parseInt(temp);

        for (var k = 0; k < num; k++)ans += char;
        i = i + count;

    }
    res.status(200).json(ans);

})
module.exports = route;