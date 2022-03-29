var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'tut.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

function createHTML(subscriberData) {
  var rawTemplate = document.getElementById("mintTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(subscriberData);

  var subscriberContainer = document.getElementById("mint-container");
  subscriberContainer.innerHTML = ourGeneratedHTML;
}