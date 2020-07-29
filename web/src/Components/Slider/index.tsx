/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';

import {Container, SliderItem} from './styles';



const Slider:React.FC = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export {Slider, SliderItem};
