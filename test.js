// Define your CSS as a string
var css = `.logo img {
  content:url("https://download.6wind.com/static/logo.svg");
  height: 60px;
  width: 120px;
}

#jenkins-name-icon {
  display: none;
}

#jenkins-head-icon {
  height: 9rem;
  width: 12rem;
}

#quote {
  display: inline-block;
  font-size: 1.5em;
  font-weight: bold;
  font-family: Verdana, sans-serif;
  color: #FFFFFF;
  margin-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 900px;
}`;

// Create a new style element
var style = document.createElement('style');
style.type = 'text/css';

// Append the CSS string to the style element
style.appendChild(document.createTextNode(css));

// Append the style element to the head of the document
document.head.appendChild(style);

// Then add your JS logic
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.quotable.io/random", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var json = JSON.parse(xhr.responseText);
    var quote = json.content;
    
    // Limit the quote to 100 characters
    if (quote.length > 900) {
      quote = quote.substring(0, 897) + '...';
    }

    // Create a new div element for the quote
    var quoteElement = document.createElement('div');
    quoteElement.id = 'quote';
    quoteElement.innerText = quote;

    // Append the quote element to the .logo element
    var logoElement = document.querySelector('.logo');
    logoElement.appendChild(quoteElement);
  }
}
xhr.send();
