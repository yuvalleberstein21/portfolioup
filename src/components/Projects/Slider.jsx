import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

import vacation from "../../images/vacationImage.png"
import notes from "../../images/notesTask.png"
import IMDB from "../../images/IMDB.png"
import miniShopping from "../../images/miniShopping.png"
import WheatherAPP from "../../images/WheatherAPP.png"
import NextApp from "../../images/nextapp.png"
let data = [
    {
        img: { vacation }.vacation,
        disc: "Vacations Website using: ReactJS,NodeJS,MySql",
        demo: 'https://github.com/yuvalleberstein21/My-Projects/tree/main/vacationsProject'
    },
    {
        img: { IMDB }.IMDB,
        disc: "IMDB clone using: ReactJS, IMDB API",
        demo: 'https://github.com/yuvalleberstein21/My-Projects/tree/main/IMDB-PROJECT'
    },
    {
        img: { NextApp }.NextApp,
        disc: "NextJS + MongoDB Application : Google auth, Bootstrap style, Upload you'r ART",
        demo: 'https://github.com/yuvalleberstein21/my-next-app'
    },
    {
        img: { notes }.notes,
        disc: "Todo List Notes using: HTML,CSS,JavaScript",
        demo: 'https://github.com/yuvalleberstein21/My-Projects/tree/main/Todo%20List'
    },
    {
        img: { miniShopping }.miniShopping,
        disc: "Mini Shopping using : ReactJS ,Redux, Redux toolkit, RestAPI,  Bootstrap, MaterialUi",
        demo: 'https://github.com/yuvalleberstein21/My-Projects/tree/main/miniShopping'
    },
    {
        img: { WheatherAPP }.WheatherAPP,
        disc: "Weather App using : WeatherAPI, TypeScript",
        demo: 'https://github.com/yuvalleberstein21/My-Projects/tree/main/WeatherApp'
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
};
const SliderComp = () => {
    const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item={item} key={i} />
    ))
    return (
        <Container>
            <Slider ref={arrowRef} {...settings}>
                {sliderProject}
            </Slider>
            <Buttons>
                <button
                    onClick={() => arrowRef.current.slickPrev()}
                    className='back'><IoIosArrowBack /></button>
                <button
                    onClick={() => arrowRef.current.slickNext()}
                    className='next'><IoIosArrowForward /></button>
            </Buttons>
        </Container>
    )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`