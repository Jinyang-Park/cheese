import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function Arrow(props) {
  const { className, style, onClick, direction } = props;
  const Icon = direction === 'right' ? FaChevronRight : FaChevronLeft;

  return (
    <Icon
      className={className}
      style={{ ...style, color: 'black' }}
      onClick={onClick}
    />
  );
}

function CupCakeSlider({ weddings }) {
  console.log(weddings);
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
        {weddings.map((wedding) => {
          return (
            <SliderDiv key={wedding.id}>
              <Sliderimg src={wedding.image} />
              <SliderTxt>
                <SliderKoname>{wedding.Koname}</SliderKoname>
                <SliderPrice>
                  {Number(wedding.price).toLocaleString()}원
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
export const SliderDiv = styled.div``;
export const Sliderimg = styled.img`
  width: 308px;
  height: 308px;
  margin-left: 15px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #ccc;
  margin-bottom: 15px;
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
