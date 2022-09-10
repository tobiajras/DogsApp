import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMars,
  faVenus,
  faHeartPulse,
  faChild,
  faPaw,
} from '@fortawesome/free-solid-svg-icons';
import './dogList.scss';

export const DogCard = ({ dogData }) => {
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
              <h4> Details</h4>
              <hr />
              <div className='divDetail'>
                <FontAwesomeIcon className='fontIcon maleIcon' icon={faMars} />
                <span>Male Weight:</span>
                {parseInt(dog.min_weight_male / 2.20462)} -{' '}
                {parseInt(dog.max_weight_male / 2.20462)} kg
              </div>
              <div className='divDetail'>
                <FontAwesomeIcon
                  className='fontIcon femaleIcon'
                  icon={faVenus}
                />
                <span>Female Weight:</span>
                {parseInt(dog.min_weight_female / 2.20462)} -{' '}
                {parseInt(dog.max_weight_female / 2.20462)} kg
              </div>
              <div className='divDetail'>
                <FontAwesomeIcon
                  className='fontIcon lifeIcon'
                  icon={faHeartPulse}
                />
                <span>Life Expectancy:</span>
                {dog.min_life_expectancy} - {dog.max_life_expectancy} years
              </div>
              <div className='divDetail'>
                <FontAwesomeIcon
                  className='fontIcon childrenIcon'
                  icon={faChild}
                />
                <span>Good With Children:</span>
                {dog.good_with_children} / 5
              </div>
              <div className='divDetail'>
                <FontAwesomeIcon className='fontIcon dogsIcon' icon={faPaw} />
                <span>Good With Other Dogs:</span>
                {dog.good_with_other_dogs} / 5
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
