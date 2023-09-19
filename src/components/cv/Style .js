import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Times New Roman', sans-serif;
    max-width: 1200px;
    margin: auto;
  }

 
`;

export const Container = styled.div`
  font-family: 'Times New Roman', sans-serif;
  max-width: 1200px;
  margin: auto;
`;

export const HINAFI = styled.span`
  color: #03A9F4;
`;

export const Header = styled.header`
  text-align: center;
`;

export const H1 = styled.h1`
  margin: 4% 0% 0% 4%;
  font-size: 2em;
    display: flex;
    align-items: center;
    flex-direction: column;

`;

export const H2 = styled.h2`


    /* margin-top: 1em; */
    text-align: start;
    width: -webkit-fill-available;
    text-decoration: underline;
    text-decoration-color: #03A9F4;
    margin: 39px 0px 0 27px;
    align-content: space-between;
    flex-direction: row;

`;

export const Underline = styled.span`
  text-decoration: underline;
  text-decoration-color: #03A9F4;
`;

export const Main = styled.main`
  flex: 1;
`;

export const Aside = styled.aside`
  background-color: #4c8dc270;
  /* text-decoration: none !important; */
  flex: 1;
`;

export const H2Aside = styled.h2`
  background-color:black !important;
  color: #03A9F4;
  text-align: center;
  margin-top: 1em;
  width: -webkit-fill-available;
`;

export const AsideContent = styled.div`
  /* padding: 0 8%; */
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const H3Aside = styled.h3`
  margin-bottom: 0;
  margin: 0 0 0 0;

`;

export const PAside = styled.p`
  padding: 0 8%;
  margin-top: 0;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  box-shadow: 0 0 5px 6px #4e7c91;
  margin-top: 32px;
`;

export const Icon = styled.div`
  display: flex;
  padding: 2%;
  margin: auto;
  border-radius: 50%;
  border: 3px solid #263238;
`;

export const Loisirs = styled.div`
  display: flex;
  border-bottom-width: 0px;
  border-bottom-style: solid;
  padding-top: 0px;
  padding-bottom: 4%;
`;

export const ConteneurAsideMain = styled.div`
  display: flex;
`;

export const ColonnePrincipale = styled.div`
  margin-left: 1.5em;
  margin-top: -1em;
  display: flex;
`;

export const Ul = styled.ul`
  list-style-type: disclosure-closed;
  margin-left: 2em;
`;

export const Li = styled.li`
  margin-bottom: 0.5em;
`;

export const Date = styled.div`
  margin: 17% 0 0 0;
  width: 9em;
`;

export const DateIcon = styled.i`
  padding-right: 6%;
  color: #03A9F4;
  font-size: 10px;
`;

export const CircleIcon = styled.i`
  font-size: 8px;
`;

export const GolfBallIcon = styled.i`
  font-size: 20px;
`;

export const Adresse = styled.div`
  margin: 0 0 0 13%;
`;

export const References = styled.div`
  display: flex;
`;

export const RecomandationColonne1 = styled.div`
  flex: 1;
`;

export const RecomandationColonne2 = styled.div`
  flex: 1;
`;

export const ColonneDeux = styled.div`
  padding-right: 3%;
  padding-left: 5em;
`;

export const Name = styled.div`
  text-align: left;
`;

export const PhotoContainer = styled.div`
  background: #03A9F4;
`;

export const PhotoHm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoisirsIcons = styled.div`
  display: flex;
`;

export const MediaQueriesDesktop = styled.div`
  @media (min-width: 768px) and (orientation: landscape) {
    .conteneur_aside_main {
      display: flex;
    }
  }
`;

export const MediaQueriesMobile = styled.div`
  @media screen and (max-width: 380px) {
    html {
      font-size: 14px;
    }

    p {
      font-size: 1.2rem;
    }

    .colonneprincipale {
      margin: 0.2em;
      flex-direction: column;
      text-align: center;
    }

    .adresse {
      margin-left: 0em;
    }

    .date {
      margin: auto;
      width: 6em;
    }
  }
`;
