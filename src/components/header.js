import React from 'react';
import RedditLogo from '../icons/logo.svg';
import LogoText from '../icons/logoText.svg';
import SearchIcon from '../icons/search.svg';
import UserIcon from '../icons/user.svg';
import DropdownIcon from '../icons/dropdown.svg';
import styled from 'styled-components';

const Navbar = styled.header`
  height: 49px;
  width: 100%;
  background-color: white;
`
const NavbarHeader = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;
`
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 5px;
  margin-right: 10px;
  width: 656px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #dae0e6;
  background-color: #f6f7f8;
  &:hover {
    border: 1px solid #0079d3;
  }
  &:focus-within {
    border: 1px solid #0079d3;
  }
`
const Input = styled.input `
  margin-top: 2px;
  margin-left: 5px;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
`
const ButtonWrapper = styled.div `
  display: flex;
  align-items: center;
`
const LoginButton = styled.button `
  padding: 4px 16px;
  min-height: 32px;
  min-width: 80px;
  font-family: Noto Sans,Arial,sans-serif;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid #0079d3;
  border-radius: 9999px;
  background-color: white;
  color: #0079d3;
  cursor: pointer;

  &:hover {
    background-color: #f5fafe;
  }

  @media (min-width: 1180px) {
    width: 120px;
  }
  @media (max-width: 650px) {
    display: none;
  }
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
  margin-left: 15px;
  cursor: pointer;

  &:hover {
    background-color: #1484d7;
  }
  @media (min-width: 1180px) {
    width: 120px;
  }
  @media (max-width: 650px) {
    display: none;
  }
`
const IconsWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 1px solid #edeff1;
    margin-left: 8px;
  }
`
const Header = () => {
  return (
    <Navbar>
      <NavbarHeader>
        <LogoContainer>
          <img src={RedditLogo} alt="reddit logo"/>
          <img style={{marginLeft: '8px', width: 'auto', height: '18px'}} src={LogoText} alt="reddit logo"/>
        </LogoContainer>
        <SearchBar>
          <img style={{marginRight: '5px', width: '18px', height: '18px'}} src={SearchIcon} alt="search icon"/>
          <Input placeholder="Search"/>
        </SearchBar>
        <ButtonWrapper>
          <LoginButton>Log In</LoginButton>
          <SignupButton>Sign Up</SignupButton>
          <IconsWrapper>
            <img style={{width: '24px', height: '24'}} src={UserIcon} alt="user icon"/>
            <img style={{width: '24px', height: '24'}} src={DropdownIcon} alt="dropdown icon"/>
          </IconsWrapper>
        </ButtonWrapper>
      </NavbarHeader>
    </Navbar>
  )
}

export default Header;
