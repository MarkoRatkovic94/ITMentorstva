
let categorySelect = document.getElementById("foodCategories");
let mealsHolder = document.getElementById("mealsHolder");

const mealDbApi = "https://www.themealdb.com/api/json/v1/1/";
const cocktailApi = "https://www.thecocktaildb.com/api/json/v1/1/";

const data = await getMealDbData("categories.php");

console.log(data);

for(let category of data.categories) {

    appendCategory(category);
}

categorySelect.addEventListener("change", async() => {

    mealsHolder.innerText = "";

    const mealsJson = await getMealDbData("filter.php?c="+categorySelect.value);
    console.log(mealsJson);


    for(let meal of mealsJson.meals) {

        let mealDiv = showMeal(meal);

        mealDiv.addEventListener("click", async () => {

            cocktailHolder.innerText = "";

            let recipe = await getMealDbData("lookup.php?i="+meal.idMeal);
            document.getElementById("recipeText").innerText = recipe.meals[0].strInstructions;
            document.getElementById("popup").style.display = "flex";

            const cocktailJson = await getCocktailDbData("random.php");
            console.log(cocktailJson);

            for(let drink of cocktailJson.drinks) {
                showCocktail(drink);
            }

        });

        document.getElementById("closePopup").addEventListener("click", () => {
            document.getElementById("popup").style.display = "none";
        });

    }
});

function showMeal(meal) {
    let mealDiv = document.createElement("div");
    mealDiv.classList = "singleMeal";

    let mealName = document.createElement("h2");
    mealName.innerText = meal.strMeal;

    let mealImage = document.createElement("img");
    mealImage.classList = "mealImage";
    mealImage.setAttribute("src", meal.strMealThumb);

    mealDiv.append(mealName, mealImage);
    mealsHolder.append(mealDiv);

    return mealDiv;
}

function showCocktail(drink) {
    let cocktailDiv = document.createElement("div");
    cocktailDiv.classList = "singleCocktail";

    let cocktailName = document.createElement("h2");
    cocktailName.innerText = drink.strDrink;

    let cocktailImage = document.createElement("img");
    cocktailImage.classList = "cocktailImage";
    cocktailImage.setAttribute("src", drink.strDrinkThumb);

    let cocktailInstructions = document.createElement("p");
    cocktailInstructions.innerText = drink.strInstructions;

    cocktailDiv.append(cocktailName, cocktailImage, cocktailInstructions);
    cocktailHolder.append(cocktailDiv);
}

function appendCategory(category) {
    let categoryElement = document.createElement("option");
    categoryElement.value = category.strCategory;
    categoryElement.innerText = category.strCategory;
    categorySelect.append(categoryElement);
    console.log(data.categories);
}

async function getMealDbData(endpoint) {
    let response = await fetch(mealDbApi+endpoint);
    return await response.json();
}

async function getCocktailDbData(endpoint) {
    let cocktailResponse = await fetch(cocktailApi+endpoint);
    return await cocktailResponse.json();
}


