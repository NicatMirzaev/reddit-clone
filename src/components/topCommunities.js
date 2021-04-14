import React from 'react';
import styled from 'styled-components';
import UpIcon from '../icons/up.svg';
import DownIcon from '../icons/down.svg';

const Container = styled.div `
  display: flex;
  height: 428px;
  flex-direction: column;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`
const Header = styled.div `
  width: 100%;
  height: 80px;
  background: linear-gradient(0deg,rgba(0,0,0,.7) 0,transparent), url(${props => props.url});
  background-position: 50%;
  background-repeat: no-repeat;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`
const HeaderText = styled.h2 `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: white;
  margin-top: 50px;
  padding-left: 15px;
`
const CommunityContainer = styled.div `
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 48px;
  border: none;
  border-top: thin solid #edeff1;
  cursor: pointer;
`
const CommunityText = styled.span `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  margin-right: 10px;
`
const SignupButton = styled.button `
  padding: 4px 16px;
  min-height: 32px;
  min-width: 32px;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 10px;
  font-family: Noto Sans,Arial,sans-serif;
  font-size: 14px;
  font-weight: 700;
  border-radius: 9999px;
  border: none;
  background-color: #0079d3;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #1484d7;
  }
`
const Footer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 13px;
  margin-right: 13px;
  margin-top: 20px;
`
const TextContainer = styled.div `
  padding: 4px 8px;
  background-color: #f6f7f8;
  border-radius: 9999px;
  cursor: pointer;

  &:hover {
    background-color: #e3edf6;
  }
`
const FooterText = styled.span `
  font-family: 'Noto Sans',Arial,sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  color: #0079d3;
`
const TopCommunities = () => {
  return (
    <Container>
      <Header url="https://styles.redditmedia.com/t5_2qh13/styles/bannerBackgroundImage_5q0f5lsk6pu01.png">
        <HeaderText>Top News Communities</HeaderText>
      </Header>
      <CommunityContainer>
        <CommunityText>1</CommunityText>
        <img style={{marginRight: '10px'}} src={UpIcon} alt="up icon"/>
        <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '32px', width: '32px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://b.thumbs.redditmedia.com/t622Aw3Yrn8EWLcC5tECrHEV-pvBAZDTJBFVBBFqUaI.png"/>
        <CommunityText>r/nottheonion</CommunityText>
      </CommunityContainer>
      <CommunityContainer>
        <CommunityText>2</CommunityText>
        <img style={{marginRight: '10px'}} src={UpIcon} alt="up icon"/>
        <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '32px', width: '32px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://styles.redditmedia.com/t5_2u3ta/styles/communityIcon_oxu25b0kn1z41.png"/>
        <CommunityText>r/UpliftingNews</CommunityText>
      </CommunityContainer>
      <CommunityContainer>
        <CommunityText>3</CommunityText>
        <img style={{marginRight: '10px'}} src={DownIcon} alt="down icon"/>
        <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '32px', width: '32px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://styles.redditmedia.com/t5_323r3/styles/communityIcon_f8aq15b6x9t21.png"/>
        <CommunityText>r/savedyouaclick</CommunityText>
      </CommunityContainer>
      <CommunityContainer>
        <CommunityText>4</CommunityText>
        <img style={{marginRight: '10px'}} src={DownIcon} alt="down icon"/>
        <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '32px', width: '32px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://styles.redditmedia.com/t5_2sc3f/styles/communityIcon_x6dymnk82f861.png"/>
        <CommunityText>r/gamernews</CommunityText>
      </CommunityContainer>
      <CommunityContainer>
        <CommunityText>5</CommunityText>
        <img style={{marginRight: '10px'}} src={UpIcon} alt="up icon"/>
        <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '32px', width: '32px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://styles.redditmedia.com/t5_2qi4j/styles/communityIcon_a0b0l0lb75k41.png"/>
        <CommunityText>r/technews</CommunityText>
      </CommunityContainer>
      <SignupButton>View All</SignupButton>
      <Footer>
        <TextContainer>
          <FooterText>Near You</FooterText>
        </TextContainer>
        <TextContainer>
          <FooterText>News</FooterText>
        </TextContainer>
        <TextContainer>
          <FooterText>Aww</FooterText>
        </TextContainer>
        <TextContainer>
          <FooterText>Gaming</FooterText>
        </TextContainer>
      </Footer>
    </Container>
  )
}

export default TopCommunities;
