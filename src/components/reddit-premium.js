import React from 'react';
import styled from 'styled-components';
import RedditIcon from '../icons/reddit-premium.svg';

const Container = styled.div `
  display: flex;
  width: 312px;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 4px;
  align-items: center;
  padding: 8px 12px;
  background-color: white;
  margin-bottom: 15px;
`
const TextWrapper = styled.div `
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`
const PremiumText = styled.span `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 12px;
  line-height: 16px;
  font-weight: ${props => props.weight};
`
const TryNow = styled.button `
  padding: 4px 16px;
  min-height: 32px;
  min-width: 100px;
  font-family: Noto Sans,Arial,sans-serif;
  font-size: 14px;
  font-weight: 700;
  border-radius: 9999px;
  border: none;
  background-color: #ff4500;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ff5414;
  }
`
const RedditPremium = () => {
  return (
    <Container>
      <img style={{width: '24px', height: '24px', marginRight: '10px'}} src={RedditIcon} alt="premium icon"/>
      <TextWrapper>
        <PremiumText weight="500">Reddit Premium</PremiumText>
        <PremiumText weight="400">The best Reddit experience, with monthly Coins</PremiumText>
      </TextWrapper>
      <TryNow>Try Now</TryNow>
    </Container>
  )
}

export default RedditPremium;
