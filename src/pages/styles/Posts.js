import { createGlobalStyle } from "styled-components";

const Posts = createGlobalStyle`
.post {
    display: grid;
    grid-template-columns: 3fr 12fr 5fr;
    max-width: 1000px;
    gap: 10px 50px;
    margin: 200px auto;
  }
  
  .post > * {
    grid-column: 2 / -2;
  }
  
  .post > h2 {
    grid-column: 1 / -1;
    text-align: center;
  }
  
  .post > figure {
    width: 100%;
    margin: 0;
    grid-column: 1 / -1;
  }
  
  figcaption {
    font-size: 10px;
  }
  
  .post > blockquote {
    margin: 0;
    grid-column: 1 / -1;
    font-size: 60px;
    text-align: center;
    font-style: italic;
  }
  
  .tip {
    align-self: start;
    padding: 10px;
    grid-row: span 3;
  }
  
  .tip-left {
    grid-column: 1 / 1;
    border-right: 1px solid var(--yellow);
  }
  
  .tip-right {
    border-left: 1px solid var(--yellow);
    grid-column: 3 / 4;
  }

  @media(max-width: 400px) {
    .post > * {
        grid-column: 1 / -1;
      }
    
    .post > blockquote {
        font-size: 30px;
    }

    .tip {
        padding: 0px;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .tip-right {
        border-left: none;
    }

    .tip-left {
        border-top: 1px solid var(--yellow);
        border-bottom: 1px solid var(--yellow);
        text-align: center;
        border-right: none;
        border-left: none;
      }

  }

`;

export default Posts;
