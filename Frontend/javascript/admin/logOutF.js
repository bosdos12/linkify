

const logOutF = () => {
    
    // Clearing the saved login data from local storage;
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");

    // Sending the user back to the Login screen;
    window.location.href = "/";
};
