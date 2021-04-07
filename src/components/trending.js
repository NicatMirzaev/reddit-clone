import React from 'react';
import styled from 'styled-components';

const TrendContainer = styled.div `
  margin-left: auto;
  margin-right: auto;
  max-width: 1020px;
  padding: 10px;
`
const TrendingToday = styled.p `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #1a1a1b;
`
const Trends = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

`
const Card = styled.div `
  display: flex;
  flex-direction: column;
  width: 238px;
  height: 178px;
  border-radius: 8px;
  background-color: white;
  flex-shrink: 0;
  margin-right: 12px;
  overflow: hidden;
  cursor: pointer;
  justify-content: flex-end;
  background: linear-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.3), rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8), #000000 ), url(${props => props.url}) center center / cover no-repeat rgb(255, 255, 255);
`
const CardHeader = styled.p `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: white;
  padding-left: 10px;
`
const CardContent = styled.p `
  font-family: 'Noto Sans', Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 5px;
  margin-bottom: 10px;
`
const CardFooter = styled.div `
  display:flex;
  padding-left: 10px;
  margin-bottom: 10px;
  align-items: center;
`
const FooterText = styled.span `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: white;
`
const Trending = () => {
  return (
    <div style={{marginTop: '20px', width: '100%'}}>
      <TrendContainer>
        <TrendingToday>Trending today</TrendingToday>
        <Trends>
          <Card url="https://external-preview.redd.it/iCyCAoc0yvIxFzxQJkvP3kMih8j189IfsE2PuD96oD8.png?format=pjpg&auto=webp&s=c86d18db4efa00c734f77bfe534e314a58416b4c">
            <CardHeader>Suez Canal</CardHeader>
            <CardContent>Meanwhile in the Suaz Canal</CardContent>
            <CardFooter>
              <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '16px', width: '16px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png"/>
              <FooterText>r/funny and more</FooterText>
            </CardFooter>
          </Card>
          <Card url="https://external-preview.redd.it/za8Rp7TELwWu1jOgjYyFFULNEpwuArVZBfBZY9uzhD8.jpg?auto=webp&s=910857f19b3929a574494c1f31189d763732b9f1">
            <CardHeader>Sidney Powell</CardHeader>
            <CardContent>Sidney Powell's defense in defamation suit could put her in..</CardContent>
            <CardFooter>
              <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '16px', width: '16px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://styles.redditmedia.com/t5_2cneq/styles/communityIcon_fy84mdgh75201.jpg?width=256&s=0842d327b6d42f0e432135c7f46030bd8db64e4b"/>
              <FooterText>r/politics and more</FooterText>
            </CardFooter>
          </Card>
          <Card url="https://external-preview.redd.it/OGvGiQOttC0XPjH2CkT4tEVRJMDrZ5wewsMpaUa-6hI.jpg?auto=webp&s=8b9e5f3f7c415e2f554f10acf9974cd3e37eb0fe">
            <CardHeader>Astrazeneca</CardHeader>
            <CardContent>Canada adds blood clot warning to AstraZeneca's COVID-19..</CardContent>
          </Card>
          <Card url="https://external-preview.redd.it/Zo2CcgYQpgcQ1U8beqPVbLh3fpUKJEipKLcv5nVnXWk.jpg?auto=webp&s=bd25f99d9a46336885013fb7be9df50dea4111e7">
            <CardHeader>Pfizer</CardHeader>
            <CardContent>Pfizer is now testing a COVID-19 pill</CardContent>
          </Card>
        </Trends>
      </TrendContainer>
    </div>
  )
}

export default Trending;
