// If you Change the First or Last Name the cookie will be Override and when we change the date to which is gone so the cookie will be deleted

// document.cookie = "firstName=Spongebob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

// console.log(document.cookie);

// deleteCookie("firstName");  Set and Delete the Cookie
// deleteCookie("lastName");
// deleteCookie("email");

// setCookie("email", "spongebob@gmail.com", 365);

setCookie("firstName", "Spongebob", 365);
setCookie("lastName", "Squarepants", 365);

console.log(getCookie("firstname"));

getCookie("firstName");

console.log(document.cookie)

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = `Expires: ${date.toUTCString()}`
    document.cookie = `${name} = ${value}; ${expires}; path=/`
}

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    })

    return result;
}