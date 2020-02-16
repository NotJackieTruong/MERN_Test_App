import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components'
import image1 from '../images/Dogg.jpg'
import image2 from '../images/nam-ca-sy-Snoop-Dogg-3.jpg'
import image3 from '../images/snoop-dogg-12.jpg'

const SlideContainer = styled.div.attrs({
    className: 'slide-container'

})`
    width: 500px;
    height: auto;
    position: relative;
    float: right;
`

const slideImages = [
    image1,
    image2,
    image3
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

class Ad extends Component {
    render() {
        return (
            <div>
                <style type='text/css'>
                    {`
                        .slide-container {
                            width: 70%;
                            margin: auto; }
                          
                          h3 {
                            text-align: center; }
                          
                          .each-slide > div {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background-size: cover;
                            height: 300px;
                          }
                          
                          .each-slide span {
                            padding: 20px;
                            font-size: 20px;
                            background: #efefef;
                            text-align: center;
                          }
                          
                          .each-fade {
                            display: flex;
                          }
                          
                          .each-fade .image-container {
                            width: 75%;
                            overflow: hidden;
                          }
                          
                          .each-fade .image-container img {
                            width: 100%;
                          }
                          
                          .each-fade h2 {
                            width: 25%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 0;
                            background: #adceed;
                          }
                    
                    `}
                </style>
                <SlideContainer>
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                                <span>Slide 1</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                                <span>Slide 2</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                                <span>Slide 3</span>
                            </div>
                        </div>
                    </Slide>
                </SlideContainer>
            </div>




        )
    }

}

export default Ad