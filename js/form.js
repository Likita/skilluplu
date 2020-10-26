const signupForm = document.querySelector(".signup-form");
const signupUrl =
  "https://script.google.com/macros/s/AKfycbxJOD0hzk901LqjtdVn1atb9Twts0FbMtTrWbcy5ddpB-lw9aXj/exec";

if (signupForm) {
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

// https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
