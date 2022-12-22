import logo from './logo.svg';
import './App.css';
import './index.css';

import {Article, Brand, Cta, Feature, Navbar} from './components';
import {Blog, Features, Footer, Header, Possibility, Whatmodern} from './containers';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatmodern />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
