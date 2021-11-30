import {
  Link, Outlet, useNavigate, useParams,
} from 'react-router-dom';
import React from 'react';
import countryList from '../Data/countryVisited';
import NotFound from './NotFound';

const Description = () => {
  const { id } = useParams<'id'>();
  const navigate = useNavigate();
  if (!id) {
    return <NotFound />;
  }

  const valsts = countryList.filter((place) => +id === place.id);
  if (valsts.length < 1) {
    return <NotFound />;
  }
  return (

    <div className="App">

      <Link to="/country"> Back</Link>
      <h1>Description Page</h1>
      {
        valsts.map(({ country, description, countryUrl }) => (
          <div key={country}>
            <h1>{country}</h1>
            <img src={countryUrl} alt={country} />
            <p>{description}</p>
          </div>
        ))
      }
      <Outlet />
    </div>
  );
};

export default Description;
