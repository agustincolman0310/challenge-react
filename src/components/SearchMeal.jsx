import React from 'react';
import { useState, useRef } from 'react';

function SearchMeal(){

const [keyword, setKeyword] = useState('');

const [meals, setMeals] = useState([]) ;

const apiKey = '9558a443f44044be83871915a45bae2d';
    const getData = async() => {
        const result = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&query=${keyword}`)
        console.log(result.title);
    }
    const onChange = e =>{
        setKeyword(e.target.value)
    }
    const onSubmit = e =>{
        e.preventDefault();
        getData();
    }

	const inputTag = useRef();

	// const searchMeal = async e => {
	// 	e.preventDefault();
	// 	const inputValue = inputTag.current.value;
	// 	setKeyword(inputValue);
	// 	inputTag.current.value = '';
	// }

	return(
		<div className="container-fluid">
			{
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={searchMeal}>
								<div className="form-group">
									<label htmlFor="">Buscar Pizza:</label>
									<input type="text" className="form-control" ref={inputTag} />
								</div>
								<button className="btn btn-info">Buscar</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Nombre de la comida : {keyword}</h2>
						</div>
						{
							meals.length > 0 && meals.map((meal, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{meal.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={meal.image}
														alt={meal.name} 
														style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
													/>
												</div>
												<p>{meal.description}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ meals.length === 0 && <div className="alert alert-warning text-center">
					No se encontraron productos !!!</div>
					}
				</>
			}
		</div>
	)
}

export default SearchMeal;