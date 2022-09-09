import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faHeartPulse, faChild, faPaw } from '@fortawesome/free-solid-svg-icons';
import './dogList.scss';

export const DogsList = ({ dogData }) => {
  return (
    <div className='listGrid '>
      {dogData.map((dog, i) => {
        return (
          <div className='dogCard' key={i}>
            <div className='dogName'>
              <img src={dog.image_link} alt='imagen perro' />
              <h4>{dog.name}</h4>
            </div>
            <div className='dogDetail'>
              <h4>Details</h4>
              <hr />
              <div className='divDetail'>
              <FontAwesomeIcon className='fontIcon maleIcon' icon={faMars} />
              <span>Male Weight:</span>
              {dog.min_weight_male}-{dog.max_weight_male} lb
              </div>
              <div className='divDetail'>
              <FontAwesomeIcon className='fontIcon femaleIcon' icon={faVenus} />
              <span>Female Weight:</span>         
              {dog.min_weight_female}-{dog.max_weight_female} lb
              </div>
              <div className='divDetail'>
              <FontAwesomeIcon className='fontIcon lifeIcon' icon={faHeartPulse} />
              <span>Life Expectancy:</span>
              {dog.min_life_expectancy}-{dog.max_life_expectancy} years
              </div>
              <div className='divDetail'>
              <FontAwesomeIcon className='fontIcon childrenIcon' icon={faChild} />
              <span>Good With Children:</span>
              {dog.good_with_children}
              </div>
              <div className='divDetail'>
              <FontAwesomeIcon className='fontIcon dogsIcon' icon={faPaw} />
              <span>Good With Other Dogs:</span>
              {dog.good_with_other_dogs} 
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
