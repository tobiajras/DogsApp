import axios from 'axios';
import { useEffect, useState } from 'react';

import './dogList.scss';
import { DogsList } from './DogsList';

export const DogList = ({ dogName }) => {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    if (dogName) {
      axios
        .get(`https://api.api-ninjas.com/v1/dogs?name=${dogName}`, {
          headers: { 'X-Api-Key': 'Lan00N4kqx99ONtgts7ax2u2mkxHUjsoogz1GUfR' },
        })
        .then((res) => {
          setDogData(res.data);
          console.log(dogData);
        });
    }
  }, [dogName]);

  // console.log('a');
  // console.log(dogName);
  // console.log(dogData);

  return (
    <div>
      <DogsList dogData={dogData} />
    </div>
  );
};
