import { FC, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import mocks from "./mocks";
import VideoContainer from "./components/VideoContainer";

const App: FC = () => {
  const [currentId, setCurrentId] = useState(0);

  const handleCarouselChange = (index: number) => {
    setCurrentId(index);
  };

  return (
    <Carousel onChange={handleCarouselChange} axis="vertical">
      {mocks.map((mock, index) => (
        index === currentId ? <VideoContainer src={mock.sources[0]} /> : <div style={{height: '100vh'}}></div>
      ))}
    </Carousel>
  );
};

export default App;
