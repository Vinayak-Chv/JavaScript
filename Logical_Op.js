const firstBtn = document.getElementById("btn");
const firstRes = document.getElementById("res");

const secondBtn = document.getElementById("btn1");
const secondRes = document.getElementById("res1");

firstBtn.onclick = function() {
    const firstPass = document.getElementById("text").value.trim();

    if (firstPass != "") {
        if (firstPass == "admin" || firstPass == "Admin") {
            firstRes.textContent = `Your Welcome!!` 
        }
    
        else {
            firstRes.textContent = `Get the Fu*k Off!`;
        }
    }

    else {
        firstRes.textContent = `Enter the Password Data First!!`;
    }
}

secondBtn.onclick = function() {
    const secondPass = parseInt(document.getElementById("text1").value);

    if (!isNaN(secondPass)) {
        if (secondPass >= 0 && secondPass <= 30) {
            secondRes.textContent = `The Weather is GOOD Today!!`;
        }

        else {
            secondRes.textContent = `The Weather is BAD Today!!`;
        }
    }

    else {
        secondRes.textContent = `Enter the Weather Data First!!`;
    }
}