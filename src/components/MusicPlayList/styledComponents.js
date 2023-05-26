import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`

export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 350px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
  position: fixed;
  width: 100%;
`

export const ArtistName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 42px;
  font-weight: bold;
`

export const ArtistInfo = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
`

export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
  padding-top: 350px;
`

export const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  height: 35px;
  width: 100%;
  margin-right: 10px;
  background-color: transparent;
  padding-left: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  cursor: pointer;
`

export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`

export const SearchIcon = styled(FaSearch)`
  color: #cbd5e1;
`
export const SearchInputContainer = styled.div`
  border: solid 2px #cbd5e1;
  height: 35px;
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
