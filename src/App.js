import Header from './components/header';
import Trending from './components/trending';
import FilterPosts from './components/filterPosts';
import Posts from './components/posts';
import TopCommunities from './components/topCommunities';
import RedditPremium from './components/reddit-premium';
import TrendingCommunities from './components/trendingCommunities';

import styled from 'styled-components';
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
  },
  {
    likes: '32.1k',
    reddit: 'r/aww',
    redditImage: 'https://styles.redditmedia.com/t5_2qh1o/styles/communityIcon_6fzlk8ukx6s51.jpg?format=pjpg&s=4cc161bfc83fc7595c62d661a34facbaa1c4c874',
    postedBy: 'u/prince_mir97',
    ago: '4 hours',
    content: "This kitten followed me home like 8 blocks and then after that, she broke into my house back in July of 2019. I wasn't even mad I decided to keep her and I named her Shadow because she always sneaks up on people. She's such an awesome friend to me.",
    contentImage: 'https://preview.redd.it/h3i76zosant61.jpg?width=640&height=478&crop=smart&auto=webp&s=372edd9dd6717eeb62e295e3a8b5fcfa26838ab5',
    comments: '398'
  },
  {
    likes: '61.0k',
    reddit: 'r/funny',
    redditImage: 'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png',
    postedBy: 'u/Intense_as_camping',
    ago: '5 hours',
    content: "Confiscated this note from one of my students.",
    contentImage: 'https://preview.redd.it/52ti9mfvwmt61.jpg?width=640&height=480&crop=smart&auto=webp&s=d0bf77a2c37680a7af54cb3d1adf1bc41e32a294',
    comments: '1.4k'
  }
]
const SideContent = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 37px;
  margin-right: 10px;
  width: 310px;

  @media (max-width: 900px) {
    display: none;
  }
`
function App() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Header/>
      <Trending/>
      <div style={{display: 'flex', maxWidth: '1020px', height: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={{display: 'flex', marginRight: '27px', height: '100%', flexDirection: 'column'}}>
          <FilterPosts/>
          <Posts data={posts}/>
        </div>
        <SideContent>
          <TopCommunities/>
          <RedditPremium/>
          <TrendingCommunities/>
        </SideContent>
      </div>
    </div>
  );
}

export default App;
