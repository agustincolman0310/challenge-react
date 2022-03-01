import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
function Recipe() {
  // const [meal,setMeal] = useState(null);
  // const apiKey = '9558a443f44044be83871915a45bae2d';
  // https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&query=pas
  // const getData = async() => {
  //     await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&addRecipeInformation=true`)
  //     .then((result) => res.json(result))
  //     .then(da)
  //     .catch((error) => console.log(error));
  // }
  const [keyword, setKeyword] = useState("");

  const [recipes, setRecipes] = useState([]);

  const apiKey = "9558a443f44044be83871915a45bae2d";
  const getData = async () => {
    const result = await Axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&addRecipeInformation=true&query=${keyword}`
    );
    setRecipes(result.data.results);
  };
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div class="input-group">
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={onChange}
        />
        <input
          type="submit"
          className="btn btn-outline-primary"
          value="BUSCAR"
        />
      </form>
      {/* <div className="col-sm-6 col-md-3 my-4">
        <div className="card shadow mb-4">
          
          {recipes !== [] &&
              recipes.map((meal) => (
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                src={meal.image}
                alt={meal.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <p>{meal.title}</p>
            <p>{meal.pricePerServing}</p>
          </div>
              ))}
        </div>
      </div> */}
      {recipes !== [] &&
        recipes.map((recipe) => (
          <div className="card-body" key={recipe.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={recipe.image}
                className="card-img-center img-thumbnail rounded mx-auto d-block"
                alt={recipe.title}
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="card-text">{recipe.title}</p>
                <button type="button" class="btn btn-success">
                  Add Recipe
                </button>
                <br />
                <Link to={`/recipes/${recipe.id}`}>
                  <button type="button" class="btn btn-primary">
                    Infomation
                  </button>
                  <br />
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Recipe;
