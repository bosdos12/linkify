


module.exports = validateNewLinkData = (reqBody) => {
    return new Promise((resolve, reject) => {
        if (reqBody.newLink != undefined && reqBody.newLink != undefined && reqBody.newLink != undefined) {
            resolve();
        } else reject("Please enter a valid URL.");
    });
};
