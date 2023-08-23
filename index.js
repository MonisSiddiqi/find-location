function findCountryUsingIntl() {
  var country = Intl.DateTimeFormat().resolvedOptions().timeZone;
  window.alert(country);
}

function findCountryUsingDateObject() {
  var country = new Date().toString().split("(")[1].split(" ")[0];
  window.alert(country);
}

function findCountryUsingIPService() {
  $.get(
    "https://ipinfo.io",
    function (response) {
      window.alert(response.country);
    },
    "jsonp"
  );
}
