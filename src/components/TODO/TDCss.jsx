import  styled,{ createGlobalStyle } from "styled-components";

export const CreateGolbal = createGlobalStyle`
  body {
    background: #F2F3E3;
  }
`
// TDMain.jsx
export const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`

// TDHeader.jsx
const headerHeight = '50px';
export const Header = styled.header`
  width: 100%;
  border: 5px solid #E0EC42;
  height: ${headerHeight};
  background-color: #E0EC42;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div {
    padding: 0 10px;
    line-height: ${headerHeight};
    font-weight: 600;
    font-size: 20px;
  }
  div:nth-child(3) {
    text-align: end;
  }
`

// TDWrite.jsx
export const TDW_Layout = styled.div`
  width: 100%;
  height: 150px;
  background-color: #F5F9C5;
  border-radius: 0 0 10px 10px;
  border-bottom: 5px solid #E0EC42;
  border-left: 5px solid #E0EC42;
  border-right: 5px solid #E0EC42;
  display: grid;
  grid-template-columns: 1fr 200px;

  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      width: 90%;
      height: 80%;
      padding: 10px;
      
      p {
        display: flex;
        justify-content: center;
      }

      input {
        width: 80%;
      }

      button {
        width: 85%;
        height: 20px;
        background-color: #E0EC42;
        border: none;
        border-radius: 15px;
        cursor: pointer;
      }
    }
}

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:15px;

    p {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
    }
  }
`

// TDArticle.jsx
export const TDArticle_Layout = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 50% 50%;

  p {
    font-size: 20px;
  }

  p span {
    font-size: 25px;
    font-weight: 600;
  }

  button {
    background-color: #E0EC42;
    border: none;
    cursor: pointer;
    &:hover {
      background-color:#ACF989;
    }
  }

  .btngap {
    margin: 0 5px;
  }
`

// TDEdit.jsx
export const TDEditarticle1 = styled.div`
  margin-top: 20px;

  button {
    background-color: #F0F989;
    border: none;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      background-color:#ACF989;
    }
  }
  
`
export const TDEditarticle2 = styled.div`
  p:nth-child(1) {
    font-size: 30px;
    font-weight: 800;
  }

  p:nth-child(2) {
    font-size: 20px;
  }

`
export const Ptag = styled.p`
  word-wrap: break-word;
`