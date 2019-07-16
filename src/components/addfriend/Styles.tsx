import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #36393f;
`;

export const SearchBarContainer = styled.div`
  width: 93%;
  margin: 0 auto;
  margin-top: 40px;
  height: 200px;
  background: #35383e;
`;

export const H1 = styled.h1`
  font-weight: bolder;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
`;

export const P = styled.p`
  color: #999b9e;
  font-size: 12px;
  font-weight: bolder;
`;

export const SearchBar = styled.input`
  background: #303338;
  width: 93%;
  height: 50px;
  margin: 10px auto;
  border: 2px solid #222327;
  border-radius: 5px;
  text-indent: 10px;
  color: #fff;
  outline: none;

  &::placeholder {
    font-weight: bolder;
    color: #505256;
    font-size: 13px;
  }
`;

export const FriendSuggestionsHeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  margin-top: -50px;
  border-top: 1px solid #313339;
  border-bottom: 1px solid #46494e;
`;

export const FriendSuggestionsH1 = styled.h1`
  font-size: 16px;
  color: #fff;
  font-weight: bolder;
  text-transform: uppercase;
  width: 93%;
  margin: 0 auto;
  margin-top: 35px;
`;

export const FriendSuggestionsImageContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FriendSuggestionsImage = styled.img`
  src: url(${(props: any): any => props.src});
`;
