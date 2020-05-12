function checkLastname() {

    let name = document.getElementById("name");
    let name_regex = /^[a-zA-Zçéè" "\-]+$/;

    if (name_regex.test(name.value)) {
      name.style.borderColor = "green";
      document.getElementById('errorname').textContent = "";
    } else {
      name.style.borderColor = "red";
      document.getElementById("errorname").textContent = "champ non valide";
    }
  }

  function checkFirstName() {

    let name = document.getElementById("surname");
    let name_regex = /^[a-zA-Zçéè" "\-]+$/;

    if (name_regex.test(name.value)) {
      name.style.borderColor = "green";
      document.getElementById('errorsurname').textContent = "";
    } else {
      name.style.borderColor = "red";
      document.getElementById("errorsurname").textContent = "champ non valide"
    }
  }

  new Cleave('.inputPhone', {
    phone: true,
    phoneRegionCode: '{country}'
  });

  new Cleave('.inputDelivaryDate', {
    date: true,
    datePattern: ['d', 'm', 'Y'],
    delimiter: '/',
  });

  new Cleave('.inputCard', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
      document.querySelector('.type').innerHTML = type;
    }
  });


  function nameRegexCheck() {
  let idName = document.getElementById('name');
  let nameFormat = /^[a-zA-Zçéè" "/-]+$/;

  console.log(nameFormat.test(idName.value));
}

/////////////////////////////////////////////

// function lastNameRegexCheck() {
//     let idLastname = document.getElementById('lastName');
//     let nameFormat = /^[a-zA-Zçéè" "/-]+$/;

//     if (!nameFormat.test(idLastname)) {
//         let nameLength = idLastname.value.length;
//         let nameValue = idLastname.value;
//         nameValue = nameValue.slice(0, -1);
//         idLastname.value = nameValue;
//         idLastname.maxLength = nameLength - 1;
//     }
// }