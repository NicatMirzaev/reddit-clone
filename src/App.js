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
    likes: '28.7k',
    reddit: 'r/AskReddit',
    redditImage: 'https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png',
    postedBy: 'u/daddydempy',
    ago: '14 hours',
    content: 'What is a secret you know about someone that could literally ruin their life?',
    contentImage: '',
    comments: '7.8k'
  }
]
function App() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Header/>
      <Trending/>
      <div style={{display: 'flex', width: '1020px', height: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={{display: 'flex', width: '100%', height: '100%', flexDirection: 'column'}}>
          <FilterPosts/>
          <Posts data={posts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
