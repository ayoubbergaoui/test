<script>
  // Create a new XMLHttpRequest
  var xhr = new XMLHttpRequest();
  
  // Initialize a GET request
  xhr.open("GET", "https://api.quotable.io/random", true);
  
  // Function to be called when the request completes
  xhr.onreadystatechange = function () {
    // Check if the request completed successfully
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Parse the returned data as JSON
      var json = JSON.parse(xhr.responseText);
      
      // Get the quote from the JSON
      var quote = json.content;
      
      // Find the 'quote' element in the HTML
      var quoteElement = document.getElementById('quote');
      
      // Set the text of the 'quote' element to be the quote
      quoteElement.innerText = quote;
    }
  }
  
  // Send the request
  xhr.send();
</script>
