import React from 'react';
import styled from 'styled-components';
import HotIcon from '../icons/hot.svg';
import DropdownIcon from '../icons/dropdown.svg';
import NewIcon from '../icons/new.svg';
import TopIcon from '../icons/top.svg';
import MenuIcon from '../icons/menu.svg';

const Container = styled.div `
  margin-left: auto;
  margin-right: auto;
  max-width: 1020px;
  padding: 10px;
`
const HeaderText = styled.p `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #1a1a1b;
`
const Filter = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 16px 20px;
  height: 56px;
  max-width: 640px;
  border: 1px solid #ccc;
  background-color: white;
`
const Flex = styled.div `
  display: flex;
  align-items: center;
`
const ItemFlex = styled.div `
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 20px;
  background-color: ${props => props.background};
  margin-right: ${props => props.margin !== undefined ? props.margin : "20px"};
  cursor: pointer;

  &:hover {
    background-color: #e5e6e7;
  }
  @media (max-width: 530px) {
    display: ${props => props.remove !== undefined ? "none" : "flex"};
  }
`
const Text = styled.span `
  font-family: "Noto Sans", Arial, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.color}
`
const FilterPosts = () => {
  return (
    <Container>
      <HeaderText>Popular posts</HeaderText>
      <Filter>
        <Flex>
          <ItemFlex background="#f6f7f8">
            <img style={{marginRight: '8px'}} src={HotIcon} alt="hot icon"/>
            <Text color="#0079d3">Hot</Text>
          </ItemFlex>
          <ItemFlex background="#f6f7f8">
            <Text color="#0079d3">Everywhere</Text>
            <img style={{width: '16px', height: '16px'}} src={DropdownIcon} alt="dropdown icon"/>
          </ItemFlex>
          <ItemFlex remove background="white">
            <img style={{width: '20px', height: '20px', marginRight: '8px'}} src={NewIcon} alt="new icon"/>
            <Text color="#878a8c">New</Text>
          </ItemFlex>
          <ItemFlex remove background="white">
            <img style={{width: '20px', height: '20px', marginRight: '8px'}} src={TopIcon} alt="top icon"/>
            <Text color="#878a8c">Top</Text>
          </ItemFlex>
          <ItemFlex remove background="white">
            <img style={{width: '16px', height: '16px'}} src={MenuIcon} alt="menu icon"/>
          </ItemFlex>
        </Flex>
        <ItemFlex margin="0px" background="white">
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0079d3" width="16" height="16" d="M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"></path>
          </svg>
          <img style={{width: '16px', height: '16px'}} src={DropdownIcon} alt="dropdown icon"/>
        </ItemFlex>
      </Filter>
    </Container>
  )
}

export default FilterPosts;
