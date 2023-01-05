import { DogInput } from './components/DogInput';

import './app.scss';

function App() {
  return (
    <div className='App'>
      <div className='logoDiv'>
        <img className='logoImg' src='/dog.svg' alt='dog logo' />
      </div>
      <DogInput />
    </div>
  );
}

export default App;
