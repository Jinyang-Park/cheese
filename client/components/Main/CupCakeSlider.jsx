import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

function Arrow(props) {
  const { className, style, onClick, direction } = props;
  const Icon = direction === 'right' ? FaChevronRight : FaChevronLeft;

  // 화면 크기가 1200px 미만일 때는 아무것도 렌더링하지 않음
  if (window.innerWidth < 1200) {
    return null;
  }
  return (
    <Icon
      className={className}
      style={{ ...style, color: 'black' }}
      onClick={onClick}
    />
  );
}

function CupCakeSlider({ cakes }) {
  const { type } = useParams();
  console.log(type);
  const navigate = useNavigate();
  // console.log(cakes);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Arrow direction='right' />,
    prevArrow: <Arrow direction='left' />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <SliderWeddingCakeTtile>BEST CUPCAKE MENU</SliderWeddingCakeTtile>
      <Slider {...settings}>
        {cakes.map((cake) => {
          return (
            <SliderDiv
              key={cake.id}
              onClick={() =>
                navigate(
                  `/Reservation/date/${type}/menupick/Menudetail/?type=${cake.type}/?id=${cake.id}`,
                  {
                    state: { cake },
                  }
                )
              }
            >
              <Sliderimg src={cake.image} />
              <SliderTxt>
                <SliderKoname>{cake.Koname}</SliderKoname>
                <SliderPrice>
                  {Number(cake.price).toLocaleString()}원
                </SliderPrice>
              </SliderTxt>
            </SliderDiv>
          );
        })}
      </Slider>
    </SliderContainer>
  );
}

export default CupCakeSlider;
export const SliderContainer = styled.div`
  margin-top: 150px;
`;
export const SliderDiv = styled.div`
  cursor: pointer;
`;
export const Sliderimg = styled.img`
  width: 308px;
  height: 308px;
  margin-left: 15px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #ccc;
  margin-bottom: 15px;
  @media screen and (max-width: 1200px) {
    width: 270px;
    height: 270px;
  }
`;
export const SliderTxt = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;
export const SliderKoname = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;
export const SliderPrice = styled.p`
  font-weight: 100;
`;
export const SliderWeddingCakeTtile = styled.h1`
  margin-left: 20px;
  font-size: 25px;
  margin-bottom: 20px;
`;
