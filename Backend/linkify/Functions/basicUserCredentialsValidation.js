


// A function that simply validates that the received data is in the correct datatype/format.

module.exports = basicUserCredentialsValidation = (reqBody) => {
    console.log("a")

    return new Promise((resolve, reject) => {
        console.log("b");
        if (reqBody.username != null &&
            reqBody.username != undefined &&
            reqBody.password != null &&
            reqBody.password != undefined) {
            console.log("c");
            resolve();
        } else {
            console.log("d")
            reject("Please enter your user credentials.");
        };
    });
};
