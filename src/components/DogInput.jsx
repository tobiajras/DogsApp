import { useState } from 'react';
import { DogList } from './DogList';

import './dogInput.scss';

export const DogInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [enterValue, setEnterValue] = useState('Bull');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0 && !Number) {
      setEnterValue(inputValue);
      setInputValue('');
    }
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
          placeholder='Bull...'
        />
      </form>
      <DogList enterValue={enterValue} />
    </div>
  );
};
