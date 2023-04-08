import './App.css';
import Header from './Header';
import LemonImage from './image/lemon.svg';
import Yonedu from './image/yonedu.jfif';
import LemonAudio from './audio/lemon.mp3';

function App() {
  const lemon = new Audio(LemonAudio);
  const kue = new Audio(LemonAudio);

  const play = () => {
    lemon.volume = 0.3;
    lemon.loop = true;
    lemon.play();
    lemon.currentTime = 2;
  };

  const kueplay = () => {
    kue.play();
    kue.currentTime = 13;
    setTimeout(() => kue.pause(), 300);
  };

  return (
    <main className='bg-slate-100 h-screen'>
      <Header />
      <main className='flex bg-slate-100'>
        <div className='flex-1 py-5'>
          <img className='py-5 px-5 mx-auto' src={LemonImage} alt='LemonImage' width={300} />
          <div className='flex'>
            <button className='flex-1 mx-5 text-white bg-gray-700 border-solid border-white rounded-md' onClick={() => play()}>再生</button>
            <button className='flex-1 mx-5 text-white bg-gray-700 border-solid border-white rounded-md' onClick={() => lemon.pause()}>停止</button>
          </div>
        </div>
        <div className='flex-1 py-5 bg-slate-100'>
          <img className='py-5 px-5 mx-auto' src={Yonedu} alt='LemonImage' width={267} />
          <div className='flex'>
            <button className='flex-1 mx-5 text-white bg-gray-700 border-solid border-white rounded-md' onClick={() => kueplay()}>再生</button>
          </div>
        </div>
      </main>
    </main>
  );
}

export default App;
