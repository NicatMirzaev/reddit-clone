import React from 'react';
import styled from 'styled-components';
import UpArrow from '../icons/up-arrow.svg';
import DownArrow from '../icons/down-arrow.svg';
import PlusIcon from '../icons/plus.svg';
import CommentIcon from '../icons/comment.svg';
import BookmarkIcon from '../icons/bookmark.svg';
import ShareIcon from '../icons/share-option.svg';
import MenuIcon from '../icons/menu.svg';

const Container = styled.div `
  display: flex;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  margin-bottom: 10px;

  &:hover {
    border: 1px solid #898989;
  }
`
const PostSide = styled.div `
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  padding: 12px 8px;
`
const PostHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
`
const LikeCount = styled.span `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 5px;
  color: rgb(26, 26, 27);
`
const RedditText = styled.span `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  margin-right: 3px;
`
const PostedBy = styled.span `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(120, 124, 126);
`
const JoinButton = styled.div `
  display: flex;
  align-items: center;
  width: 60px;
  height: 24px;
  border-radius: 9999px;
  border: none;
  background-color: #0079d3;
`
const JoinText = styled.span `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: white;
`
const PostContent = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
`
const PostFooter = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
`
const PostText = styled.h3 `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
`
const FooterOption = styled.div `
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 3px;
  &:hover {
    background-color: rgb(231 231 231);
  }
`
const OptionText = styled.span `
  font-family: 'IBM Plex Sans', Arial, sans-serif;
  font-size: 12px;
  line-height: 12px;
  font-weight: 700;
  color: #878a8c;
`
const Post = props => {
  const data = props.data;
  return (
    <Container>
      <PostSide>
        <img style={{alignSelf: 'center', width: '14px', height: '14px'}} src={UpArrow} alt="up arrow icon"/>
        <LikeCount>{data.likes}</LikeCount>
        <img style={{alignSelf: 'center', width: '14px', height: '14px'}} src={DownArrow} alt="down arrow icon"/>
      </PostSide>
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <PostHeader>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img style={{backgroundColor: 'rgb(0, 121, 211);', border: '1px solid #edeff1;', height: '16px', width: '16px', borderRadius: '9001px', marginRight: '8px'}} alt="Subreddit Icon" role="presentation" src={data.redditImage}/>
            <RedditText>{data.reddit}</RedditText>
            <PostedBy>Posted by {data.postedBy} {data.ago} ago</PostedBy>
          </div>
          <JoinButton>
            <img style={{marginLeft: '3px', width: '22px', height: '16px'}} src={PlusIcon} alt="plus icon"/>
            <JoinText>Join</JoinText>
          </JoinButton>
        </PostHeader>
        <PostContent>
          <PostText>{data.content}</PostText>
        </PostContent>
        <PostFooter>
          <FooterOption>
            <img style={{marginRight: '5px', width: '16px', height: '16px'}} src={CommentIcon} alt="comment icon"/>
            <OptionText>{data.comments} Comments</OptionText>
          </FooterOption>
          <FooterOption>
            <img style={{marginRight: '5px', width: '16px', height: '16px'}} src={ShareIcon} alt="share icon"/>
            <OptionText>Share</OptionText>
          </FooterOption>
          <FooterOption>
            <img style={{marginRight: '5px', width: '16px', height: '16px'}} src={BookmarkIcon} alt="bookmark icon"/>
            <OptionText>Save</OptionText>
          </FooterOption>
          <FooterOption>
            <img style={{width: '16px', height: '16px'}} src={MenuIcon} alt="menu icon"/>
          </FooterOption>
        </PostFooter>
      </div>
    </Container>
  )
}

export default Post;
