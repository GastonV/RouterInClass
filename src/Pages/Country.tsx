import { Link } from 'react-router-dom';
import React from 'react';
import countryList from '../Data/countryVisited';

const countries = countryList;

const Country = () => (
  <div className="App">
    <Link to="/" />
    <h1>Country Page</h1>
    <div>
      {
          countries.map((country) => (
            <div key={Math.random()}>
              <Link to={`../description/${country.id}`}>
                {' '}
                <h1>{country.country}</h1>
                <img src={country.countryUrl} alt={country.country} />
              </Link>
              <p>{country.description}</p>
            </div>
          ))
        }
    </div>
  </div>
);

export default Country;
