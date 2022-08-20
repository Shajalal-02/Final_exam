const getMealData = async (mealTitle, numberMeal) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealTitle}`
  );
  const data = await response.json();
  console.log(data);
  const finalData = data.meals.slice(0, numberMeal);
  return finalData;
};
