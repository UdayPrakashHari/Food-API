import React, { useState, useEffect } from 'react';
import Food from './foodItems';
import { Link } from 'react-router-dom';
import './home.css';

const Home = (props) => {
  const [food, setFood] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const url = `https://api.edamam.com/search?q=egg&app_id=5e2c9403&app_key=
  bd0693df1efd19b90260a2e4a5a33c04`;

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const result = await fetch(url);
        if (!result.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await result.json();
        setFood(json.hits);
      } catch (error) {
        console.error('Error fetching data:', error);

      }
    };
    fetchFood();
  }, []);


  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFood = food.filter(item =>
    item.recipe.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <nav>
            <div className='Logo'>
              <h1>FoodSite</h1>
            </div>

            <div className="col-md-6 my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search for food items"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>

            <div className='navItems'>
              <Link to='/home'>Home</Link>
            </div>
          </nav>
        </div>
      </div>

      <div className='container-fluid'>

        <div id="carouselExampleCaptions" class="carousel slide">

          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner mt-3">

            <div class="carousel-item active">
              <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h2 className='text-start'>First slide label</h2>
                <p className='text-start'>Some representative placeholder content for the first slide.</p>
              </div>
            </div>

            <div class="carousel-item">
              <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h2 className='text-start text-dark'>Second slide label</h2>
                <p className='text-start text-dark'>Some representative placeholder content for the second slide.</p>
              </div>
            </div>

            <div class="carousel-item">
              <img src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h2 className='text-start text-dark'>Third slide label</h2>
                <p className='text-start text-dark'>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>
        {/* <div className='image-container'>
          <img src='https://images.unsplash.com/photo-1611599538311-360e527c1d22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='About Background' />
        </div>

        <div className='overlayAbout'>
          <div className='contentAbout'>
            <h1>About Our FoodSite</h1>
            <p>One cannot think well, love well, sleep well, if one has not dined well.</p>
          </div>
        </div> */}
      </div>



      <div className='container'>
        <div className='row'>
          {filteredFood && filteredFood.length ? (
            filteredFood.map((item) => (
              <div className='col-md-3' key={item.recipe.url}>
                <Food
                  title={item.recipe.label.slice(0, 26)}
                  recipeID={item.recipe.url}
                  imgURL={item.recipe.image}
                  buttonName="View Recipe"
                />
              </div>
            ))
          ) : (
            <div className='col-md-12'>
              <p>No results found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
