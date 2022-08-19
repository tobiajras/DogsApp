import { useState } from 'react';
import { DogList } from './DogList';

import './dogInput.scss';

export const DogInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [enterValue, setEnterValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnterValue(inputValue);
    console.log(enterValue);
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='dogInput_divParent'>
      <form className='dogInput_form' onSubmit={handleSubmit}>
        <input
          className='dogInput_input'
          type='text'
          value={inputValue}
          onChange={handleOnChange}
          placeholder='Golden Retriever...'
        />
      </form>
      <DogList enterValue={enterValue} />
    </div>
  );
};
