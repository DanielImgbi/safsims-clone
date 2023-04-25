import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MyCarousel.css'

export const MyCarousel = () => {
  return (
    <div className=''>
          <Carousel>
              <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="public/safsims-imagery/ACCE-Abuja.png"
                    alt="Slide image alt"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="public/safsims-imagery/Almustaqeem.png"
                    alt="Slide image alt"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="public/safsims-imagery/CHRYSOLITE.png"
                    alt="Slide image alt"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="public/safsims-imagery/Crescent-Pearls.png"
                    alt="Slide image alt"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="public/safsims-imagery/Edulyn-Schools.png"
                    alt="Slide image alt"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="public/safsims-imagery/Epitome.png"
                    alt="Slide image alt"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="public/safsims-imagery/I-scholars.png"
                    alt="Slide image alt"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="public/safsims-imagery/Prime-Scholars.png"
                    alt="Slide image alt"
                />
              </Carousel.Item>
        </Carousel>
    </div>
  )
}
