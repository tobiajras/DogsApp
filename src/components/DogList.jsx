import axios from 'axios';
import { useEffect, useState } from 'react';

import './dogList.scss';
import { DogsList } from './DogsList';

export const DogList = ({ enterValue }) => {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    if (enterValue) {
      axios
        .get(`https://api.api-ninjas.com/v1/dogs?name=${enterValue}`, {
          headers: { 'X-Api-Key': 'Lan00N4kqx99ONtgts7ax2u2mkxHUjsoogz1GUfR' },
        })
        .then((res) => {
          setDogData(res.data);
        });
    }
  }, [enterValue]);

  // console.log('a');
  // console.log(dogName);
  // console.log(dogData);

  return (
    <div>
      <DogsList dogData={dogData} />
    </div>
  );
};
