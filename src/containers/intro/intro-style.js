import styled from "styled-components";

export const IntroStyle = styled.div`
  height: 100vh;
  background: #060606;

  .App {
    text-align: center;
    display: flex;
    align-items: center;
    color: white;
    position: relative;
    padding: 100px;
    height: 78vh;
    flex-direction: inherit;
    background: white;
  }
  .text {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 80%;
  font-weight: 700;
  font-size: 18px;
}
  .logo {
    width: 100px;
    margin-bottom: 30px;
    color: black;
    font-weight: 900;
  }
  .title {
    margin-bottom: 30px;
    font-size: 24px;
  }

  .silla {
  width: 335px;
  background: white;
}
.mesa {
  width: 285px;
  background: white;
}
  .container-buttons  {
    position: absolute;
    margin: 0 auto;
    bottom: 100px;
    display: flex;
    font-size: 12px;
  }

  .slider-container {
    width: 100%;
    height: 298px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: white;
    border: 1px solid white;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 64%;
  }
.swiper-wrapper{
  margin: 0px 0px 20px 89px;

  @keyframes backInUp {
    0% {
      transform: traducY(1200px) escala(0.7));
      opacidad: 0.7;
    }
  
    80% {
      transform: traducY(0px) escala(0.7));
      opacidad: 0.7;
    }
  
    100% {
      transformar: escala(1);
      opacidad: 1;
    }
  }
  
  .backInUp {
    animation-name: backInUp;
  }


}
  .description {
  display: flex;
    flex-direction: column;
  }

  .name {
    text-align: initial;
    margin: 30px 236px 50px 34px;

 } 
  .name h3{
    font-size: 14px;
    color: grey;
  }
  .name h2{
    color: black;
    margin: 30px 0px;
    font-size: 21px;
    font-weight: 700;
  }


  .button-product {
    margin-top: 40px;
    
  }

  .button{
    background: black;
    color: white;
    width: 150px;
    height: 6vh;
    border: none;
  }


`;
