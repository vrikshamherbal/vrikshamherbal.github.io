import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CustomCarousel() {

    return (<>
        <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true}>
            <div>
                <img src="./img/hairoil/3.jpeg" />
            </div>
            <div>
                <img src="./img/hairoil/2.jpeg" />
            </div>
            <div>
                <img src="./img/hairoil/3.jpeg" />
            </div>
            <div>
                <img src="./img/hairoil/4.jpeg" />
            </div>
            <div>
                <img src="./img/hairoil/5.jpeg" />
            </div>
        </Carousel>
    </>);
}