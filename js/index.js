// ! get document element by id
const mealContainer = document.querySelector("#meal-container");
const mealName = document.querySelector("#mealName");
const mealCount = document.querySelector("#mealCount");
const mealSearchBtn = document.querySelector("#mealSearchBtn");
const form = document.querySelector("#form");
console.log(form);

// ! default text in meal container
mealContainer.innerHTML = `<h1 class="text-center mt-5">Please Search Meal or Food on Your preference</h1>`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ! get the user input
  const mealTitle = mealName.value;
  const numberMeal = mealCount.value;
  if (mealTitle === "" || numberMeal === "") {
    mealContainer.innerHTML = `<div class="alert alert-danger fw-bold fs-4 text-center" role="alert">
    Please fill all the fields. Otherwise, we can't search for you.
  </div>`;
  } else {
    // ! get meal data and display it
    getMealData(mealTitle, numberMeal).then((data) => {
      let htmlString = "";
      data.forEach((meal) => {
        htmlString += `<div class="col-lg-4 offset-lg-0 offset-md-1 col-md-10">
      <div class="card mb-4">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}" />
      <div class="card-body">
          <h5 class="custom-title card-title fw-bold fs-4">${meal.strMeal}</h5>
          <h5>Instruction</h5>
          <p class="custom-text card-text">
          ${meal.strInstructions}
          </p>
          <div class="mb-3"><ul class="list-group text-center">
          <li class="list-group-item fs-5 fw-bold bg-light">Ingredient List</li>
          <li class="list-group-item">${meal.strIngredient1}</li>
          <li class="list-group-item">${meal.strIngredient2}</li>
          <li class="list-group-item">${meal.strIngredient3}</li>
          <li class="list-group-item">${meal.strIngredient4}</li>
          <li class="list-group-item">${meal.strIngredient5}</li>
        </ul></div>
      <a href="${meal.strYoutube}" class="btn btn-primary fw-bold">Details in YouTube</a>
      </div>
      </div>
      </div>`;
      });
      mealContainer.innerHTML = htmlString;
    });
  }
});
