"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exp = require("express");
var app = exp();
var counter = 0;
app.get("/isalive", function (req, res) {
    console.log(true);
    res.send(true);
    res.end();
});
app.get("/inc", function (req, res) {
    counter++;
    console.log(counter);
    res.end();
});
app.listen(90, function () {
    console.log("hit me iam redy");
});
//# sourceMappingURL=prog.js.map