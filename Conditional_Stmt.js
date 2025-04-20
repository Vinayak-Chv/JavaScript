const btn = document.getElementById("btn");

btn.onclick = function() {
    let age = Number(document.getElementById("Text").value);
    const res = document.getElementById("res");

    if(age >= 100) {
        res.textContent = `You're too Old`;
    }

    else if(age <= 0) {
        res.textContent = `You're Didn't Even Born Yet!`;
    }

    else if(age >= 18) {
        res.textContent = `Welcome!!`;
    }

    else {
        res.textContent = `You're not Eligible!`;
    }
}