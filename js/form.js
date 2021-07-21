const signupForm = document.querySelector(".signup-form");
const signupUrl =
  "https://script.google.com/macros/s/AKfycbxJOD0hzk901LqjtdVn1atb9Twts0FbMtTrWbcy5ddpB-lw9aXj/exec";

if (signupForm) {
  const signupPopup = document.getElementById('signup-popup');

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const xmlhttp = new XMLHttpRequest();
    const email = signupForm.email.value;
    const phone = signupForm.phone.value;
    const fullname = signupForm.fullname.value;
    const promocode = signupForm.promocode.value;
    xmlhttp.open(
      "GET",
      `${signupUrl}?email=${email}&phone=${phone}&fullname=${fullname}&promocode=${promocode}`,
      true
    );
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        signupPopup.querySelector(".popup__success").classList.remove("hidden");
        setTimeout(function () {
          signupPopup.classList.add("visually-hidden");
          body.classList.remove("body__overlay");
          signupPopup.querySelector(".popup__success").classList.add("hidden");
        }, 3000);
      }
    };
  });
}

const discountForm = document.querySelector(".discount-form");
const discountUrl =
  "https://script.google.com/macros/s/AKfycbz7zW0LIllJ134ePgVC0BuzH07blMoirFsPljOT3j7qLsxhaxo/exec";

if (discountForm) {
  discountForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const xmlhttp = new XMLHttpRequest();
    const email = discountForm.email.value;
    const phone = discountForm.phone.value;
    xmlhttp.open("GET", `${discountUrl}?email=${email}&phone=${phone}`, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        discountPopup
          .querySelector(".popup__success")
          .classList.remove("hidden");
        setTimeout(function () {
          discountPopup.classList.add("visually-hidden");
          body.classList.remove("body__overlay");
          discountPopup
            .querySelector(".popup__success")
            .classList.add("hidden");
        }, 3000);
      }
    };
  });
}

const webinarForm = document.querySelector(".webinar-form");
const webinarUrl =
  "https://script.google.com/macros/s/AKfycbxSKrp82GXu8afBjtPB6gN7Df0NWlIbww3vvXLwZg/exec";

if (webinarForm) {
  const webinarPopup = document.getElementById('webinar-popup');
  webinarForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const xmlhttp = new XMLHttpRequest();
    const email = webinarForm.email.value;
    const phone = webinarForm.phone.value;
    const fullname = webinarForm.fullname.value;
    xmlhttp.open(
      "GET",
      `${webinarUrl}?email=${email}&phone=${phone}&fullname=${fullname}`,
      true
    );
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        webinarPopup.querySelector(".popup__success").classList.remove("hidden");
        setTimeout(function () {
          webinarPopup.classList.add("visually-hidden");
          body.classList.remove("body__overlay");
          webinarPopup.querySelector(".popup__success").classList.add("hidden");
        }, 3000);
      }
    };
  });
}

const kidsForm = document.querySelector(".kids-form");
const kidsUrl =
  "https://script.google.com/macros/s/AKfycbz9GIbAJJnIF-aUcOXpqPJDI1wBJCxo-C1prk-DMj2BaG2M3b8N6z_9azDljLTbUYDz/exec";
if (kidsForm) {
  const kidsPopup = document.getElementById('kids-popup');

  kidsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const xmlhttp = new XMLHttpRequest();
    const email = kidsForm.email.value;
    const phone = kidsForm.phone.value;
    const fullname = kidsForm.fullname.value;
    const promocode = kidsForm.promocode.value;
    xmlhttp.open(
      "GET",
      `${kidsUrl}?email=${email}&phone=${phone}&fullname=${fullname}&promocode=${promocode}`,
      true
    );
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        kidsPopup.querySelector(".popup__success").classList.remove("hidden");
        setTimeout(function () {
          kidsPopup.classList.add("visually-hidden");
          body.classList.remove("body__overlay");
          kidsPopup.querySelector(".popup__success").classList.add("hidden");
        }, 3000);
      }
    };
  });
}


// https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
