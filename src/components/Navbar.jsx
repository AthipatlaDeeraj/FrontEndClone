import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";


const Container=styled.div`
  background-color: ${({theme})=>theme.bg};
  height: 56px;
  position: sticky;
  top:0;
`
const Wrapper=styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding:0px 20px;
  position: relative;
`
const Search=styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin:auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius:3px;
`
const Input=styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  color: ${({theme})=>theme.text};
  outline: none;
`
const Button=styled.button`
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

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
          <Search>
            <Input placeholder="Search"/>
            <SearchIcon/>
          </Search>
          <Link to="signin" style={{textDecoration:"none"}}>
        <Button><AccountCircleOutlinedIcon/>SIGN IN</Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar;