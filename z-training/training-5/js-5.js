var en = {
    'home': 'Home',
    'about': 'About Us',
    'contact': 'Contact Us'
  };
  var ua = {
    'home': 'Головна',
    'about': 'Про нас',
    'contact': 'Контакти'
  };

  function changeLang(lan) {
    lengthObj = Object.getOwnPropertyNames(lan).length;
    for (var i = 0; i <= lengthObj - 1; i++) {
      objKey = Object.getOwnPropertyNames(lan)[i];
      document.getElementById(objKey).innerText = func(objKey);
    }

    function func(a) {
      for (key in lan) {
        if (key == a) {
          return (lan[key]);
        }
      }
    }
  }