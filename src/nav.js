// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './nav.css';

// const Nav = () => {
//   const [search, setSearch] = useState('');
//   const [result, setResult] = useState([]);

//   const handleSearch = async () => {
//     try {
//       if (search.trim() === '') {
//         setResult([]);
//         return;
//       }
//       const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=cb6e05f0&app_key=3bba5cd1218c1bbf07b21e61c19a222d`);
//       const data = await response.json();
//       setResult(data.hits); 
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleChange = (event) => {
//     setSearch(event.target.value);
//   };

//   return (
//     <div>
//       <nav>
//         <div className='Logo'>
//           <h1>FoodSite</h1>
//         </div>

//         <div className='searchInput'>
//           <input type='text' placeholder='Search for food items' value={search} onChange={handleChange} />
//           <button onClick={handleSearch}>Search</button>
//         </div>

//         <div className='navItems'>
//           <Link to='/home'>Home</Link>
//         </div>
//       </nav>

//       <div className='searchResult'>
//         {result.map((item) => (
//           <div key={item.recipe.url}>
//             <img src='' alt=''/>
//             <h3>{item.recipe.label}</h3>
//             <p>{item.recipe.source}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Nav;


import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';

const Nav = () => {
  return (
    <div>
      

      
    </div>
  )
}

export default Nav