import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-gray-800">
      <header className="App-header mb-16">
        <h1 className="text-4xl font-bold my-16 text-white">
            Hi, this is my face :)
        </h1>
        <img src='https://avatars.githubusercontent.com/u/38844048?v=4' className='rounded-2xl border-white border-8'/>
      </header>
      <main className='w-full h-auto flex flex-col items-center'>
        <h2 className='text-white text-3xl font-semibold mb-4'>Some of my hobbies are:</h2>
        <div className='flex flex-row justify-center space-x-4 w-full'>
          <div className='text-white text-2xl'>
            Coding
          </div>
          <div className='text-white text-2xl'>
            Singing
          </div>
          <div className='text-white text-2xl'>
            Crying
          </div>
        </div>
      </main>
      <footer className='mt-40'>
        <h3 className='text-xs'>
          hi
        </h3>
      </footer>
    </div>
  );
}

export default App;
