//Promises is same as the Future in Dart

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if (dogWalked) {
                resolve("You Walk the Dog!");
            }

            else {
                reject("You DID'NT!");
            }
        }, 1500);
    });
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleaned = true;

            if (cleaned) {
                resolve("You Cleaned the Kitchen!");
            }

            else {
                reject("You DID'NT!");
            }
        }, 1500);
    });
}

function takeOutTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashOut = false;

            if (trashOut) {
                resolve("You Removed the Trash!");;
            }

            else {
                reject("You DID'NT!");
            }
        }, 1500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("You Finished all the Chores!")})
        .catch(error => console.error(error));