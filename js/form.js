const form = document.querySelector('.subscription-form'),
    url = 'https://script.google.com/macros/s/AKfycbxJOD0hzk901LqjtdVn1atb9Twts0FbMtTrWbcy5ddpB-lw9aXj/exec'

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(1);
  const xmlhttp = new XMLHttpRequest();
  console.log(form.email.value)
  const email = form.email.value
  xmlhttp.open('GET', `${url}?email=${email}`, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        console.log('Saved!');
    }
  };
})

// https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
