/*
    enum is mainly used to define status variable like success, failure, authenticated.  
*/

enum STATUS {
    SUCCESS,
    FAILURE,
    FORBIDDEN,
    AUTHENTICATED,
    UNAUTHENTICATED
}

console.log(STATUS.AUTHENTICATED);