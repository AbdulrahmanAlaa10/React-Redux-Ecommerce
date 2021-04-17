import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 30px;
  padding-left: 0px;
  height: 510px;
  background: #444d56!important;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 33px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration:none;

  &:hover {
      color:  rgb(29, 102, e61);
      transition: 200ms ease-in;
      text-decoration:none;
      color: #17a2b8;

  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom:10px;
  font-weight: bold;
`;




