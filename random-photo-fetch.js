let randomImage = document.querySelector('.random-image'); //grabbing our .random-image img tag and saving it to the variable randomImage.
console.log("randomImage:", randomImage);

fetch('https://source.unsplash.com/random') //Fetch request
.then(function(response) {
    if (!response.ok){ //if the response is not okay
      console.log(response); //log the response
      return new Error(response); //create a new error with the response
    } 
    console.log("Response:", response);
    return response.blob(); //A Blob is typically an image or some sort of otherwise file-like object, but in our case, we're using it for images!!
  })
  .then(function(photoBlob) {
    console.log("My Blob:", photoBlob)
    var objectURL = URL.createObjectURL(photoBlob); 
    console.log("Object URL:", objectURL);
    randomImage.src = objectURL; 

    console.log("randomImage.src:", randomImage.src);
  })
  .catch(function(err) { //The catch() method returns a Promise and deals with rejected cases only
    console.log(err); 
  });