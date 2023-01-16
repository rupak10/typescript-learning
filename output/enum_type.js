"use strict";
/*
    enum is mainly used to define status variable like success, failure, authenticated.
*/
var STATUS;
(function (STATUS) {
    STATUS[STATUS["SUCCESS"] = 0] = "SUCCESS";
    STATUS[STATUS["FAILURE"] = 1] = "FAILURE";
    STATUS[STATUS["FORBIDDEN"] = 2] = "FORBIDDEN";
    STATUS[STATUS["AUTHENTICATED"] = 3] = "AUTHENTICATED";
    STATUS[STATUS["UNAUTHENTICATED"] = 4] = "UNAUTHENTICATED";
})(STATUS || (STATUS = {}));
console.log(STATUS.AUTHENTICATED);
