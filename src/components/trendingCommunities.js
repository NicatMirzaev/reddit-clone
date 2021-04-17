import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`
const TrendingText = styled.h2 `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  padding: 12px;
`
const CommunityContainer = styled.div `
  display: flex;
  width: 100%;
  padding: 12px;
`
const CommunityName = styled.a `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`
const CommunityMembers = styled.span `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`
const SignupButton = styled.button `
  padding: 4px 16px;
  min-height: 32px;
  min-width: 90px;
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
const TrendingCommunities = () => {
  return (
    <Container>
      <TrendingText>Trending Communities</TrendingText>
      <CommunityContainer>
        <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '32px', width: '32px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://styles.redditmedia.com/t5_38e82/styles/communityIcon_l5y1aydtli251.jpg?format=pjpg&s=600feb7775343fd78020ac7dc0d09abc21962809"/>
        <div style={{marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <CommunityName href="/">r/FrugalMaleFashionCDN</CommunityName>
          <CommunityMembers>38,225 members</CommunityMembers>
        </div>
        <SignupButton>Join</SignupButton>
      </CommunityContainer>
      <CommunityContainer>
        <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '32px', width: '32px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://styles.redditmedia.com/t5_2rti0/styles/communityIcon_7g1ft20oj4f41.PNG"/>
        <div style={{marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <CommunityName href="/">r/museum</CommunityName>
          <CommunityMembers>68,854 members</CommunityMembers>
        </div>
        <SignupButton>Join</SignupButton>
      </CommunityContainer>
      <CommunityContainer>
        <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '32px', width: '32px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://styles.redditmedia.com/t5_3fqzn/styles/communityIcon_twl6ayvdn9541.jpg?format=pjpg&s=be39371e3218ffb8a2cbf8b0df6cbcde890c94de"/>
        <div style={{marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <CommunityName href="/">r/hotones</CommunityName>
          <CommunityMembers>58,554 members</CommunityMembers>
        </div>
        <SignupButton>Join</SignupButton>
      </CommunityContainer>
      <CommunityContainer>
        <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '32px', width: '32px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://styles.redditmedia.com/t5_2qont/styles/communityIcon_7ndeag3q3dy41.jpg?format=pjpg&s=eaf25e5efbb23b15b07847425055219891af1136"/>
        <div style={{marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <CommunityName href="/">r/foxes</CommunityName>
          <CommunityMembers>139,123 members</CommunityMembers>
        </div>
        <SignupButton>Join</SignupButton>
      </CommunityContainer>
      <CommunityContainer>
        <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '32px', width: '32px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src="https://styles.redditmedia.com/t5_svy3b/styles/communityIcon_xjfctrqg0wo51.png"/>
        <div style={{marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <CommunityName href="/">r/VeteranWomen</CommunityName>
          <CommunityMembers>1,105 members</CommunityMembers>
        </div>
        <SignupButton>Join</SignupButton>
      </CommunityContainer>
    </Container>
  )
}

export default TrendingCommunities;
