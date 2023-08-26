//Scenario

// 1. Register
// 2. Send welcome email
// 3.Login'
// 4. Get user data
// 5.Display User Data


// function Register(callback) {
//     setTimeout(() => {
//         console.log("Register End");
//         callback();
//     }, 1000)
// }

// function Email(callback) {
//     setTimeout(() => {
//         console.log("Email End");
//         callback();
//     }, 2000)
// }

// function Login(callback) {
//     setTimeout(() => {
//         console.log("Login End");
//         callback();
//     }, 4000)
// }

// function GetUserdata(callback) {
//     setTimeout(() => {
//         console.log("Get user data");
//         callback();
//     }, 5000)
// }

// function Display() {
//     setTimeout(() => {
//         console.log("Display user data");
//     }, 2000)
// }

// function OtherSiteDisplay() {
//     console.log("Other Site Displayed");
// }
// -------------------------------
//Callback Hell
// Register(function () {
//     Email(function () {
//         Login(function () {
//             GetUserdata(function () {
//                 Display();
//             });
//         });
//     });
// });






// /-------------*Promises*---------------/ 

// function Register() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//           return  reject("Error with registering");
//             console.log("Register End");
//         }, 1000)
//     })
// }

// function Email() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Email End");
//             resolve();
//         }, 2000)
//     } )
// }

// function Login() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Login End");
//             resolve();
//         }, 4000)
//     } )
// }

// function GetUserdata() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Get user data");
//         }, 5000)
//     })
// }

// function Display() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Display user data");
//         }, 2000)
//     })
// }

// function OtherSiteDisplay() {
//     console.log("Other Site Displayed");
// }

// Register()
// .then(Email)
// .then(Login)
// .then(GetUserdata)
// .then(Display)
// .catch((e) => {
//  console.log("Error resolved: ",e)
// })



// ----------Async/Await-------------


function Register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register End");
            resolve("success");
        }, 1000)
    })
}

function Email() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Email End");
            resolve();
        }, 2000)
    })
}

function Login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login End");
            resolve();
        }, 3000)
    })
}

function GetUserdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Get user data");
            resolve();
        }, 4000)
    })
}

function Display() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Display user data");
            resolve();
        }, 2000)
    })
}

function OtherSiteDisplay() {
    console.log("Other Site Displayed");
}

async function authenticate() {
    try {
    const demo = await Register();
        await Email();
        await Login();
        await GetUserdata();
        await Display();
        console.log(demo);
    }
    catch (err) {
        console.log(err);
    }

    // throw new Err ();

}

OtherSiteDisplay();
authenticate().then(() => {
    console.log("All done");
}).catch((err) => {
    console.log(err);
});
