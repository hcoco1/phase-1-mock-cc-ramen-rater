/* See all ramen images in the div with the id of ramen-menu. 
When the page loads, request the data from the server to get all the ramen objects.
Then, display the image for each of the ramen using an img tag inside the #ramen-menu div. */

fetch("http://localhost:3000/ramens")
  .then((res) => res.json())
  .then((data) => handleRamen(data));

function handleRamen(data) {
  console.log(typeof(data));
  data.forEach(function (val) {
    let ramenMenu = document.querySelector("#ramen-menu");
    let ramenImage = document.createElement("img");
    //console.log(val);
    ramenImage.src = val.image;
    ramenMenu.appendChild(ramenImage);

    /* Click on an image from the #ramen-menu div and see all the
info about that ramen displayed inside the #ramen-detail div
and where it says insert comment here and insert rating here. */

    ramenImage.addEventListener("click", () => {
      let detailsImage = document.querySelector(".detail-image");
      detailsImage.src = ramenImage.src;

      let ramenName = document.querySelector("h2");
      ramenName.innerText = val.name;

      let ramenRestaurant = document.querySelector(".restaurant");
      ramenRestaurant.innerText = val.restaurant;

      let ramenRating = document.querySelector("#rating-display");
      //console.log(ramenRating)
      ramenRating.innerText = val.rating;

      let ramenComments = document.querySelector("#comment-display");
      //console.log(ramenComments)
      ramenComments.innerText = val.comment;
    });
  });
}

/* Create a new ramen after submitting the new-ramen form.
The new ramen should be added to the#ramen-menu div.
The new ramen does not need to persist; in other words,
if you refresh the page, it's okay that the new ramen
is no longer on the page. */

let submitForm = document.querySelector("#new-ramen")
submitForm.addEventListener("submit", (e) =>{
    e.preventDefault()

  let newNameRamenInput = document.querySelector("#new-name");
  //console.log(newNameRamenInput)

  let newRestaurantRamenInput = document.querySelector("#new-restaurant");
  //console.log(newRestaurantRamenInput)

  let newImageRamenInput = document.querySelector("#new-image");
  //console.log(newImageRamenInput)

  let newRatingRamenInput = document.querySelector("#new-rating");
  //console.log(newRatingRamenInput)

  let newCommentRamenInput = document.querySelector("#new-comment");
  //console.log(newCommentRamenInput)

  const ramenObj = {
    name: newNameRamenInput.value,
    restaurant: newRestaurantRamenInput.value,
    image: newImageRamenInput.value,
    rating: newRatingRamenInput.value,
    comment: newCommentRamenInput.value,
  };

 handleRamen([ramenObj])
})

 

