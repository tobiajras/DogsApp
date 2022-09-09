import axios from 'axios';
import { useEffect, useState } from 'react';

import './dogList.scss';
import { DogsList } from './DogsList';

export const DogList = ({ enterValue }) => {
  const [dogData, setDogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getDog = async () => {
      try {
        const res = await axios.get(
          `https://api.api-ninjas.com/v1/dogs?name=${enterValue}`,
          {
            headers: {
              'X-Api-Key': 'Lan00N4kqx99ONtgts7ax2u2mkxHUjsoogz1GUfR',
            },
          }
        );
        setDogData(res.data);
       
      } catch (error) {
        setIsLoading(false);
      }

      setIsLoading(false);
    };
    getDog();
  }, [enterValue]);
  console.log(dogData)
  // useEffect(() => {
  //   if (enterValue) {
  //     axios
  //       .get(`https://api.api-ninjas.com/v1/dogs?name=${enterValue}`, {
  //         headers: { 'X-Api-Key': 'Lan00N4kqx99ONtgts7ax2u2mkxHUjsoogz1GUfR' },
  //       })
  //       .then((res) => {
  //         setDogData(res.data);
  //         setIsLoading(false);
  //       })
  //       .then(console.log('2'))
  //       .then(console.log('3'));
  //   }
  // }, [enterValue]);

  // console.log('a');
  // console.log(dogName);
  // console.log(dogData);

  if (isLoading) {
    return <h4>Loading..</h4>;
  } else if (dogData.length >= 1) {
    return <DogsList dogData={dogData} />;
  }
  return <h4>Sin resultados</h4>;
};
