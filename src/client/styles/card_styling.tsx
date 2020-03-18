import styled from 'styled-components'

export const ImgLeft = styled.div`
  background-color: white;
  padding: 10px 5px 10px 5px;
  border-radius: 10px;

  display: flex;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`
export const ImgRight = styled.div`
  background-color: white;
  //border: 2px white;
  padding: 10px 5px 10px 5px;
  border-radius: 10px;

  display: flex;
  @media (min-width: 600px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

export const ImageStyling = styled.img`
  max-width: 100%;
  max-height: 150px;
  border: 2px solid black;
  border-radius: 10px;
  margin-left: 5px;
  margin-right: 5px;
`
export const TextAreaStyling = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  //background-color: #dcdddf;
  background-color: white;
  display: flex;

  @media (min-width: 450px) {
    flex-direction: column;
    flex: 2.5;
    margin-right: 5px;
    margin-left: 5px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    margin-top: 20px;
  }
`

export const TitleStyling = styled.div`
display: flex;
justify-content: center;
font-size: 1.5em
font-weight: 900;
color: black;
margin-top: 10px;
`

export const NarrativeStyling = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
font-size: 1em
color: black;
padding 5px 10px 10px 10px;
`
export const CallToAction = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4em;
  font-weight: bold
  color: red;
  padding 10px 10px 10px 10px;
`
