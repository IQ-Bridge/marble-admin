import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img
            src={image.url}
            className="d-block w-100"
            alt={`Slide ${idx + 1}`}
            style={{ maxHeight: "400px", height: '400px', objectFit: "contain" }}
          />
          <Carousel.Caption>
            <h3>Slide {idx + 1}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
