import { IntroStyle } from "./intro-style";


export const IntroStyle = styled.div`

 .text {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 80%;
    font-weight: 700;
    font-size: 18px;
  }

  .navbar {
    position: absolute;
    top: 0;
    left: 1000px;


    &.active {
    
    width: 100%;
    height: 100vh;
    background: blue;
    left: 0;
    transition: 3s;
    
    }

  }

  .header {
    border: 1px solid white;
    padding: 20px 100px 20px 20px;
    background: white;
    color: black;
    display: flex;
    justify-content: flex-end;
    
  
    .span {
      background: black;
    }
  

    &.active {
      background: black;
      border: 1px solid black;
     
    
    .header-menu {
        border: 1px solid black;
        width: 67px;
        height: 63px;
        z-index: 1;
        .span:first-child{
          transform:  translateY(3px) rotate(-45deg);
          background: white;
          transition: ease 1s;
        }
        .span:nth-child(2){
          display:none
        }
      .span:nth-child(3){
      transform: translateY(-3px) rotate(45deg);
      background: white;
      transition: ease 1s;

    }
    }
  }
  .span{
    width: 25px;
    height: 3px;
    background: white;
    margin-top: 4px;
  }
  .header-menu {
    flex-direction: column;
    display: flex;
    border: 2px solid white;
    padding: 20px;
    margin-right: 12px;

.span {
      background: black;
    }
    
  }

`;