console.log("EmailJS:", window.emailjs);
import { Namecheck } from "./namechecking.js";
import { emailcheching } from "./emailchecking.js";
import { formattingphoneNumber, phonenumchecking } from "./phonenumchecking.js"

let maindiv = document.getElementById("main-div-ID");
let step1 = document.getElementById("aside-div");
let step2 = document.getElementById("aside-div2");
let step3 = document.getElementById("aside-div3");
let step4 = document.getElementById("aside-div4");
let NAME;
let EMAIL;
let PHONENUM;
let Theplane = "";
let Theprice = "";
let yearly = false;
let plandescritpion = [
    { planame: "Arcade", price: 9 },
    { planame: "Advanced", price: 12 },
    { planame: "Pro", price: 15 }];
    let addons = [
        { planame: "", price: 0 },
        { planame: "", price: 0 },
        { planame: "", price: 0 }];
        let total = 0;
        //API

        /*
        emailjs.init("*******");
        
        function sendEmail(t) {
        
            emailjs.send("*********", "*************", {
                to_email: t,
                message:`your name is :\n${NAME}\nyour email is:\n${EMAIL}\nyour phone number is:\n${PHONENUM}\n
                *******************\n
                your bill total is:$${total}\n`,
                title:"multi-step-form experience",
                name:"DUSKSHADE",
                from_name:"My Website"
            })
                .then(() => {
                    alert("successful");
                })
                .catch((error) => {
                    console.log(error);
                    alert("the data you send isn't correct,you can cap go back to edit");
                        console.log("FULL ERROR:", error);
                        console.log("TEXT:", error.text);
                        console.log("STATUS:", error.status);
                        console.log("RAW:", JSON.stringify(error));
                        alert(error.text || JSON.stringify(error));
                });
        }

*/


        function STEP1() {
    step1.style = `background-color: hsl(228, 100%, 84%);color: hsl(213, 96%, 18%);font-weight: bold;`


    let head = document.createElement("h2");
    maindiv.appendChild(head);
    head.textContent = "Personal info";
    head.classList.add("headline-main-div");

    let description = document.createElement("p")
    maindiv.appendChild(description);
    description.textContent = "Please provide your name, email address, and phone number."
    description.classList.add("p-main-div")

    let lab1 = document.createElement("label")
    maindiv.appendChild(lab1);
    lab1.textContent = "Name";
    lab1.classList.add("headline-main-div");

    maindiv.appendChild(document.createElement("br"))

    let namebox = document.createElement("input");
    maindiv.appendChild(namebox);
    namebox.type = "text"
    namebox.placeholder = "e.g. Stephen King";
    namebox.classList.add("box-step1")

    let lab2 = document.createElement("label")
    maindiv.appendChild(lab2);
    lab2.textContent = "";
    lab2.classList.add("alert");



    maindiv.appendChild(document.createElement("br"));
    maindiv.appendChild(document.createElement("br"))


    let lab3 = document.createElement("label")
    maindiv.appendChild(lab3);
    lab3.textContent = "Email Address";
    lab3.classList.add("headline-main-div");

    maindiv.appendChild(document.createElement("br"))

    let emailbox = document.createElement("input");
    maindiv.appendChild(emailbox);
    emailbox.type = "text"
    emailbox.placeholder = "e.g. stephenking@lorem.com";
    emailbox.classList.add("box-step1")

    let lab4 = document.createElement("label")
    maindiv.appendChild(lab4);
    lab4.textContent = "";
    lab4.classList.add("alert");

    maindiv.appendChild(document.createElement("br"));
    maindiv.appendChild(document.createElement("br"))


    let lab5 = document.createElement("label")
    maindiv.appendChild(lab5);
    lab5.textContent = "Phone Number";
    lab5.classList.add("headline-main-div");

    maindiv.appendChild(document.createElement("br"))

    let phonenumbox = document.createElement("input");
    maindiv.appendChild(phonenumbox);
    phonenumbox.type = "tel";
    phonenumbox.placeholder = "e.g. +1 234 567 890";
    phonenumbox.classList.add("box-step1")
    formattingphoneNumber(phonenumbox);

    let lab6 = document.createElement("label")
    maindiv.appendChild(lab6);
    lab6.textContent = "";
    lab6.classList.add("alert");



    let Nextbtn = document.createElement("button");
    maindiv.appendChild(Nextbtn);
    Nextbtn.textContent = "Next Step";
    Nextbtn.classList.add("Nextbtn")


    Nextbtn.addEventListener("click", () => {
        let namebool = false;
        let emailbool = false;
        let phonenumbool = false;
        let name = namebox.value;
        let email = emailbox.value;
        let tel = phonenumbox.value;


        switch (Namecheck(name)) {
            case 1:
                lab2.textContent = "The name input field is empty.";
                namebox.placeholder = "Empty....."
                namebox.classList.add("step1-box2");
                break;
            case 2:
                lab2.textContent = "Incorrect name ,please Try again. ";
                namebox.value = ""
                namebox.placeholder = "Invalid-name"
                namebox.classList.add("step1-box2")
                break;
            default:
                namebox.classList.add("step1-box")
                lab2.textContent = "";
                namebool = true

        }


        switch (emailcheching(email)) {
            case 1:
                lab4.textContent = "The email input field is empty.";
                emailbox.placeholder = "Empty....."
                break;
            case 2:
                lab4.textContent = "Should be wihtout space.";
                break;
            case 3:
                lab4.textContent = "The @ was forgotten .";
                break;
            case 4:
                lab4.textContent = `The "." was forgotten.`;
                break;
            case 5:
                lab4.textContent = "Incorrect email ,There is no charecters after or before @.";
                break;
            case 6:
                lab4.textContent = `Incorrect email ,should there be one charecter after "." at least .`;
                break;
            case 0:
                lab4.textContent = "";
                emailbool = true;
                break;
        }
        switch (emailbool) {
            case false:
                emailbox.classList.add("step1-box2")
                break;

            case true:
                emailbox.classList.add("step1-box")
                break;

        }
        switch (phonenumchecking(tel)) {
            case 0:
                lab6.textContent = "."
                phonenumbox.classList.add("step1-box")
                phonenumbool = true;
                break;
            case 1:
                lab6.textContent = "Invaild Number ,please try again ."
                phonenumbox.classList.add("step1-box2")
                break
            case 2:
                lab6.textContent = "The phone number input field is empty."
                phonenumbox.classList.add("step1-box2")
                phonenumbox.placeholder = "Empty....."
                break
        }

        if (phonenumbool && emailbool && namebool) {
            NAME = name;
            EMAIL = email;
            PHONENUM = tel;
            maindiv.innerHTML = ""
            step1.style = `background-color: hsl(213, 96%, 18%, 0.01);color: hsl(228, 100%, 84%);`
            step2.style = `background-color: hsl(228, 100%, 84%);color: hsl(213, 96%, 18%);font-weight: bold;`
            STEP2();

        }

    })


}
function STEP2() {
    let head = document.createElement("h2");
    maindiv.appendChild(head);
    head.textContent = "Select your plan";
    head.classList.add("headline-main-div");

    let description = document.createElement("p")
    maindiv.appendChild(description);
    description.textContent = "You have the option of monthly or yearly billing."
    description.classList.add("p-main-div")

    let div = document.createElement("div");
    maindiv.appendChild(div);
    div.classList.add("divs-STEP2")
    let p = document.createElement("pre");

    let img = document.createElement("img");
    img.src = "images/icon-arcade.svg"
    img.classList.add("images-divs-STEP2");
    div.appendChild(img)
    p.innerHTML = `<p class="plantype"> Arcade <p>\n<p class="typedisciption">$9/mo<p>`
    div.appendChild(p)
    div.tabIndex = 0;
    div.addEventListener('click', () => {
        Theplane = p.textContent
        Theplane = plandescritpion[0].planame;
        Theprice = plandescritpion[0].price;
        div.focus();

    })






    let div2 = document.createElement("div");
    maindiv.appendChild(div2);
    div2.classList.add("divs-STEP2")
    let p2 = document.createElement("pre");

    let img2 = document.createElement("img");
    img2.src = "images/icon-advanced.svg"
    img2.classList.add("images-divs-STEP2");
    div2.appendChild(img2)
    p2.innerHTML = `<p class="plantype">Advanced<p>\n<p class="typedisciption">$12/mo<p>`
    div2.appendChild(p2)
    div2.tabIndex = 0;
    div2.addEventListener('click', () => {
        Theplane = p2.textContent;
        Theplane = plandescritpion[1].planame;
        Theprice = plandescritpion[1].price;
        div2.focus();

    })



    let div3 = document.createElement("div");
    maindiv.appendChild(div3);
    div3.classList.add("divs-STEP2")
    let p3 = document.createElement("pre");

    let img3 = document.createElement("img");
    img3.src = "images/icon-pro.svg"
    img3.classList.add("images-divs-STEP2");
    div3.appendChild(img3)
    p3.innerHTML = `<p class="plantype">pro<p>\n<p class="typedisciption">$15/mo<p>`
    div3.appendChild(p3)
    div3.tabIndex = 0

    div3.addEventListener('click', () => {
        Theplane = plandescritpion[2].planame;
        Theprice = plandescritpion[2].price;

        div3.focus();
    })

    let monthlyearly = document.createElement("div");
    maindiv.appendChild(monthlyearly);
    monthlyearly.classList.add("div-mothlyearly");

    let lab1 = document.createElement("label")
    lab1.textContent = "Monthly";
    monthlyearly.appendChild(lab1)
    lab1.classList.add("switch-label")

    let TFswitch = document.createElement("div");
    monthlyearly.appendChild(TFswitch);
    TFswitch.classList.add("TFswitch-div");

    let switchdiv1 = document.createElement("div")
    TFswitch.appendChild(switchdiv1);
    switchdiv1.classList.add("switchdiv")

    let switchdiv2 = document.createElement("div")
    TFswitch.appendChild(switchdiv2);
    switchdiv2.classList.add("switchdiv")

    let lab2 = document.createElement("label")
    lab2.textContent = "Yearly";
    monthlyearly.appendChild(lab2)
    lab2.classList.add("switch-label")

    lab2.classList.add("switch-label2");
    switchdiv2.classList.add("switchdiv2")



    let TF = false
    TFswitch.addEventListener('click', (e) => {
        if (!TF) {
            TF = true;
            p.innerHTML = `<p class="plantype"> Arcade <p>\n<p class="typedisciption">$90/mo\n2 Months free<p>`
            p2.innerHTML = `<p class="plantype">Advanced<p>\n<p class="typedisciption">$120/mo\n2 Months free<p>`
            p3.innerHTML = `<p class="plantype">pro<p>\n<p class="typedisciption">$150/mo\n2 Months free<p>`
            lab2.style = "color: hsl(213, 96%, 18%);";
            lab1.style = "color: gray;";
            switchdiv1.style = "background-color: hsl(213, 96%, 18%)";
            switchdiv2.style = "background-color: hsl(218, 100%, 97%);"
            yearly = true;
            plandescritpion[0].price = 90;
            plandescritpion[1].price = 120;
            plandescritpion[2].price = 150;

        }
        else {
            TF = false;
            p.innerHTML = `<p class="plantype"> Arcade <p>\n<p class="typedisciption">$9/mo<p>`
            p2.innerHTML = `<p class="plantype">Advanced<p>\n<p class="typedisciption">$12/mo<p>`
            p3.innerHTML = `<p class="plantype">pro<p>\n<p class="typedisciption">$15/mo<p>`
            lab1.style = "color: hsl(213, 96%, 18%);";
            lab2.style = "color: gray;";
            switchdiv1.style = "background-color: hsl(218, 100%, 97%);"
            switchdiv2.style = "background-color: hsl(213, 96%, 18%)";
            yearly = false;
            plandescritpion[0].price = 9;
            plandescritpion[1].price = 12;
            plandescritpion[2].price = 15;

        }

    })
    let lab3 = document.createElement("label")
    lab3.textContent = "";
    maindiv.appendChild(lab3)
    lab3.classList.add("alert")

    let Nextbtn = document.createElement("button");
    maindiv.appendChild(Nextbtn);
    Nextbtn.textContent = "Next Step";
    Nextbtn.classList.add("Nextbtn")
    Nextbtn.classList.add("Nextbtn2")

    Nextbtn.addEventListener("click", () => {
        if (Theplane.length) {
            maindiv.innerHTML = ""
            step2.style = `background-color: hsl(213, 96%, 18%, 0.01);color: hsl(228, 100%, 84%);`
            step3.style = `background-color: hsl(228, 100%, 84%);color: hsl(213, 96%, 18%);font-weight: bold;`
            STEP3();
        }
        else {
            lab3.textContent = "Please Select Your Plan .";
        }
    })


    let goback = document.createElement("button");
    maindiv.appendChild(goback);
    goback.textContent = "Go Back";
    goback.classList.add("goback")

    goback.addEventListener("click", () => {
        maindiv.innerHTML = ""
        step2.style = `background-color: hsl(213, 96%, 18%, 0.01);color: hsl(228, 100%, 84%);`
        step1.style = `background-color: hsl(228, 100%, 84%);color: hsl(213, 96%, 18%);font-weight: bold;`
        STEP1();
    })

}
function STEP3() {
    let head = document.createElement("h2");
    maindiv.appendChild(head);
    head.textContent = "Pick add-ons";
    head.classList.add("headline-main-div");

    let description = document.createElement("p")
    maindiv.appendChild(description);
    description.textContent = "Add-ons help enhance your gaming experience."
    description.classList.add("p-main-div")

    let div = document.createElement("div")
    maindiv.appendChild(div)
    div.classList.add("div3-STEP3");
    div.innerHTML = `<b class="h-adddons">Online service</b>
   <p class="addons-descrition">Access to multiplayer games</p>
   <p class="addons-price">+$1/mo</p>`
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    div.appendChild(checkbox)
    checkbox.classList.add("checkbox-STEP3")
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            div.style = `border: solid 2px hsl(243, 100%, 62%);
                        background-color:hsl(218, 100%, 97%);`
            addons[0].planame = "Online service";
            addons[0].price = 1;

        }
        else {
            div.style = "border: solid 1px gray;"
            addons[0].planame = "";
            addons[0].price = 0;
        }
    })

    let div2 = document.createElement("div")
    maindiv.appendChild(div2)
    div2.classList.add("div3-STEP3")
    div2.innerHTML = `<b class="h-adddons">Larger storage</b>
   <p class="addons-descrition">Extra 1TB of cloud save</p>
   <p class="addons-price">+$2/mo</p>`
    let checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox"
    div2.appendChild(checkbox2)
    checkbox2.classList.add("checkbox-STEP3")
    checkbox2.addEventListener('click', () => {
        if (checkbox2.checked) {
            div2.style = `background-color:hsl(218, 100%, 97%);border: solid 2px hsl(243, 100%, 62%);`

            addons[1].planame = "Larger storage";
            addons[1].price = 2;

        }
        else {
            div2.style = "border: solid 1px gray;"
            addons[1].planame = "";
            addons[1].price = 0;

        }
    })


    let div3 = document.createElement("div")
    maindiv.appendChild(div3)
    div3.classList.add("div3-STEP3")
    div3.innerHTML = `<b class="h-adddons">Customizable Profile</b>
   <p class="addons-descrition">Custom theme on your profile</p>
   <p class="addons-price">+$2/mo</p>`
    let checkbox3 = document.createElement("input");
    checkbox3.type = "checkbox"
    div3.appendChild(checkbox3)
    checkbox3.classList.add("checkbox-STEP3")
    div3.tabIndex = 0
    checkbox3.addEventListener('click', () => {
        if (checkbox3.checked) {
            div3.style = `border: solid 2px hsl(243, 100%, 62%);
                          background-color:hsl(218, 100%, 97%);`

            addons[2].planame = "Customizable Profile";
            addons[2].price = 2;

        }
        else {
            div3.style = "border:solid 1px gray;"
            addons[2].planame = "";
            addons[2].price = 0;

        }
    })





    let Nextbtn = document.createElement("button");
    maindiv.appendChild(Nextbtn);
    Nextbtn.textContent = "Next Step";
    Nextbtn.classList.add("Nextbtn")


    Nextbtn.addEventListener("click", () => {
        maindiv.innerHTML = ""
        step3.style = `background-color: hsl(213, 96%, 18%, 0.01);color: hsl(228, 100%, 84%);`
        step4.style = `background-color: hsl(228, 100%, 84%);color: hsl(213, 96%, 18%);font-weight: bold;`
        STEP4();

    })
    let goback = document.createElement("button");
    maindiv.appendChild(goback);
    goback.textContent = "Go Back";
    goback.classList.add("goback")
    goback.classList.add("goback2")

    goback.addEventListener("click", () => {
        maindiv.innerHTML = ""
        STEP2();
        Theplane=""
        Theprice=0
        step3.style = `background-color: hsl(213, 96%, 18%, 0.01);color: hsl(228, 100%, 84%);`
        step2.style = `background-color: hsl(228, 100%, 84%);color: hsl(213, 96%, 18%);font-weight: bold;`
    })
}
function STEP4() {
    step4.style = `background-color: hsl(228, 100%, 84%);color: hsl(213, 96%, 18%);font-weight: bold;`

    let head = document.createElement("h2");
    maindiv.appendChild(head);
    head.textContent = "Finishing up";
    head.classList.add("headline-main-div");

    let description = document.createElement("p")
    maindiv.appendChild(description);
    description.textContent = "Double-check everything looks OK before confirming."
    description.classList.add("p-main-div")

    let div = document.createElement("div")
    maindiv.appendChild(div)
    div.classList.add("div-STEP4");


    let p = document.createElement("p")
    div.appendChild(p)
    p.classList.add("p1-STEP4");
    p.classList.add("p3-STEP4");


    let p1 = document.createElement("p")
    div.appendChild(p1)
    p1.classList.add("p2-STEP4");
    p1.classList.add("p4-STEP4");
    if (yearly) {
        total += Number(Theprice);
        p.textContent = `${Theplane}(Yearly)`
        p1.textContent = `$${Theprice}/yr`
    }
    else {
        total += Number(Theprice);
        p.textContent = `${Theplane}(Monthly)`
        p1.textContent = `$${Theprice}/mo`
    }












    let change = document.createElement("a");
    div.appendChild(change);
    change.textContent = "change"
    change.classList.add("change-Link")
    change.addEventListener('click', (e) => {
        e.preventDefault();
        addons = [
            { planame: "", price: 0 },
            { planame: "", price: 0 },
            { planame: "", price: 0 }];
        total = 0;
        maindiv.innerHTML = ""
        STEP2();
        step4.style = `background-color: hsl(213, 96%, 18%, 0.01);color: hsl(228, 100%, 84%);`
        step2.style = `background-color: hsl(228, 100%, 84%);color: hsl(213, 96%, 18%);font-weight: bold;`
    })

    div.appendChild(document.createElement("hr"))

    let size = 0
    addons.forEach(add => {

        if (add.price) {
            size++
            let p2 = document.createElement("p");
            p2.textContent = add.planame;
            p2.classList.add("p1-STEP4");
            div.appendChild(p2);
            let p3 = document.createElement("p");
            if (yearly) {
                let temp = Number(add.price);
                temp *= 10;
                total += Number(temp);
                p3.textContent = `+$${add.price * 10}/yr`;
            }
            else {
                total += Number(add.price);
                p3.textContent = `+$${add.price}/mo`;

            }
            p3.classList.add("p2-STEP4");
            div.appendChild(p3);
            if (size >= 3) {
                div.style = `height: 250px;`
            }

        }
    });


    let p4 = document.createElement("p")
    maindiv.appendChild(p4)
    p4.classList.add("total");
    p4.textContent = "Total (per month/year)"

    let p5 = document.createElement("p")
    maindiv.appendChild(p5)
    p5.classList.add("total-price");
    if (yearly) {
        p5.textContent = `$${total}/yr`
    } else {
        p5.textContent = `$${total}/mo`
    }




    let Confirm = document.createElement("button");
    maindiv.appendChild(Confirm);
    Confirm.textContent = "Confirm";
    Confirm.classList.add("Nextbtn")


    Confirm.addEventListener("click", () => {
        maindiv.innerHTML = ""
        step4.style = `background-color: hsl(213, 96%, 18%, 0.01);color: hsl(228, 100%, 84%);`
        STEP5();

    })
    let goback = document.createElement("button");
    maindiv.appendChild(goback);
    goback.textContent = "Go Back";
    goback.classList.add("goback")
    goback.classList.add("goback2")

    goback.addEventListener("click", () => {

        addons = [
            { planame: "", price: 0 },
            { planame: "", price: 0 },
            { planame: "", price: 0 }];
        total = 0;
        maindiv.innerHTML = ""
        step4.style = `background-color: hsl(213, 96%, 18%, 0.01);color: hsl(228, 100%, 84%);`
        step3.style = `background-color: hsl(228, 100%, 84%);color: hsl(213, 96%, 18%);font-weight: bold;`
        STEP3();

    })
}
function STEP5() {
    //API
    //sendEmail(EMAIL)
    let thanksimg = document.createElement("img")
    thanksimg.src = "images/icon-thank-you.svg";
    maindiv.appendChild(thanksimg);
    thanksimg.classList.add("thanks-img");
    let head = document.createElement("h2");
    maindiv.appendChild(head);
    head.textContent = "Thank you!";
    head.classList.add("thanks");

    let description = document.createElement("pre")
    maindiv.appendChild(description);
    description.textContent = `Thanks for confirming your subscription! We hope you
    have fun using our platform.If you ever need support, please 
    feel free to email us at support @loremgaming.com.`
    description.classList.add("thanks-description")
}
STEP1()








