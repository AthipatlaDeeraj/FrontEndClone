import React from "react";
import styled from "styled-components";
import YoutubeImg from "../img/Youtube-logo.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
const Container=styled.div`
    position: sticky;
    top: 0;
    flex: 1;
    background-color: ${({theme})=>theme.bgLighter};
    height: 100%;
    color:  ${({ theme }) => theme.text};
    font-size: 14px;
` 
const Wrapper=styled.div`
    padding: 14px 26px;
`

const Logo=styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

const Img=styled.img`
    height: 40px;
    margin-left: -7px;
`

const Items=styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 5px 0px;
    border-radius: 10px;
    &:hover{
        background-color: ${({ theme }) => theme.textSoft}; 
    }
`
const Hr=styled.hr`
    border: 0.5px solid ${({theme})=>theme.soft};
`
const Login=styled.div``
const Button=styled.button`
    margin-top: 10px;
    padding: 5px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color:#3ea6ff;
    border-radius:3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Title=styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
`
const Menu=({darkMode,setDarkMode})=>{
  return <Container>
    <Wrapper>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
            <Logo>
                <Img src={YoutubeImg}/>
                MyYoutube
            </Logo>
        </Link>
        <Items>
            <HomeIcon/>Home
        </Items>
        <Items>
            <ExploreIcon/>Explore
        </Items>

        <Items>
            <SubscriptionsIcon/>Subscriptions
        </Items>

        <Hr/>

        <Items>
            <VideoLibraryIcon/>Videos
        </Items>

        <Items>
            <HistoryIcon/>History
        </Items>
        
        <Hr/>
        <Login>
            <Link to="signin" style={{textDecoration:"none"}}>
            Sign In 
            <Button>
                    <AccountCircleOutlinedIcon/>SIGN IN
            </Button>
            </Link> 
        </Login>
        <Title>Best Of MyYoutube</Title>

        <Items>
            <LibraryMusicIcon/>PlayList
        </Items>
        <Items>
            <SportsBasketballIcon/>Sports
        </Items>
        
        <Items>
            <MovieCreationIcon/>Movie
        </Items>
        <Items>
            <ArticleIcon/>News
        </Items>
        <Items>
            <LiveTvIcon/>Live
        </Items>


        <Hr/>

        
        <Items>
            <SettingsSuggestIcon/>Settings
        </Items>

        <Items>
            <OutlinedFlagIcon/>Report
        </Items>
        <Items>
            <HelpOutlineIcon/>Help
        </Items>

        <Items onClick={()=>setDarkMode(!darkMode)}>
            <SettingsBrightnessIcon/>Light Mode
        </Items>

    </Wrapper>
  </Container>;
}
export default Menu;