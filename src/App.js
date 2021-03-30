import Header from './components/header';
import Trending from './components/trending';
import FilterPosts from './components/filterPosts';

function App() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Header/>
      <Trending/>
      <FilterPosts/>
    </div>
  );
}

export default App;
