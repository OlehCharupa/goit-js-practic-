/*<form class="feedback-form js-feedback-form">
        <div class="five columns">
            <div>
                <label for="exampleNameInput">Your Name</label>
                <input name="name" class="u-full-width " type="text" placeholder="User name" id="exampleNameInput" />
            </div>
            <div>
                <label for="exampleMessage">Message</label>
                <textarea name="message" class="u-full-width" placeholder="Hi Dave …" id="exampleMessage" cols="30"
                    rows="10"></textarea>
            </div>
        </div>
        <input class="button-primary" type="submit" value="Submit" />
        </div>
    </form> */

const form = document.querySelector(".js-feedback-form")
// const texterea = document.querySelector("#exampleMessage")

// texterea.addEventListener("input", (e) => {
//     let textMsg = e.target.value
//     let msg = localStorage.getItem("msg")
//     if (msg !== "") {
//         localStorage.setItem("msg", textMsg)
//     }
// })

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let userName = e.currentTarget.elements.name.value;
    let userEmail = e.currentTarget.elements.email.value;
    let userAddress = e.currentTarget.elements.address.value;
    let textArea = e.currentTarget.elements.message.value;
    console.log(userName);
    console.log(userEmail);
    console.log(userAddress);
    console.log(textArea);
    let name = localStorage.getItem("name")
    let email = localStorage.getItem("email")
    let address = localStorage.getItem("address")
    let message = localStorage.getItem("message")

    if (name !== "" || email !== "" || address !== "" || message !== "") {
        localStorage.setItem("name", userName)
        localStorage.setItem("email", userEmail)
        localStorage.setItem("address", userAddress)
        localStorage.setItem("message", textArea)
    }

    if (localStorage.getItem("name") || localStorage.getItem("email") || localStorage.getItem("address") || localStorage.getItem("message")) {
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("address")
        localStorage.removeItem("message")
    }
    e.currentTarget.reset()
})