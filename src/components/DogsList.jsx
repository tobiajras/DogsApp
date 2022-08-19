import './dogList.scss';

export const DogsList = ({ dogData }) => {
  return (
    <div className='listGrid '>
      {dogData.map((dog, i) => {
        return (
          <div className='dogCard' key={i}>
            <img src={dog.image_link} alt='imagen perro' />
            <h4>{dog.name}</h4>
          </div>
        );
      })}
    </div>
  );
};
