import Header from './components/header';
import Trending from './components/trending';
import FilterPosts from './components/filterPosts';
import Posts from './components/posts';

const posts = [
  {
    likes: '27.7k',
    reddit: 'r/AskReddit',
    redditImage: 'https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png',
    postedBy: 'u/daddydempy',
    ago: '14 hours',
    content: 'What is a secret you know about someone that could literally ruin their life?',
    contentImage: '',
    comments: '7.8k'
  },
  {
    likes: '49.3k',
    reddit: 'r/nextfuckinglevel',
    redditImage: 'https://styles.redditmedia.com/t5_m0bnr/styles/communityIcon_00lh12p7icb11.png',
    postedBy: 'u/sucomimus',
    ago: '2 hours',
    content: 'From patient to legislator',
    contentImage: 'https://preview.redd.it/uphn6pwcirr61.jpg?width=640&height=682&crop=smart&auto=webp&s=9ecc01e0973fd9a2645d3591a61c24dc3620d0e9',
    comments: '1.0k'
  }
]
function App() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Header/>
      <Trending/>
      <div style={{display: 'flex', maxWidth: '1020px', height: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={{display: 'flex', width: '100%', height: '100%', flexDirection: 'column'}}>
          <FilterPosts/>
          <Posts data={posts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
