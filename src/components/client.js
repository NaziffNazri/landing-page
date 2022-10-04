import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import client1 from "../assets/client/c1.png";
import client2 from "../assets/client/c2.png";
import client3 from "../assets/client/c3.png";
import client4 from "../assets/client/c4.png";
import client5 from "../assets/client/c5.png";
import client6 from "../assets/client/c6.png";
import client7 from "../assets/client/c7.png";
import client8 from "../assets/client/c8.png";
import client9 from "../assets/client/c9.png";
import client10 from "../assets/client/c10.png";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function Client() {
    return (

        <div id='client' className='bg-warning pt-3 text-center p-3 ' > 
        <div className='container'>

        <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        autoPlay={true}
        autoPlaySpeed={1500}
        removeArrowOnDeviceType={["desktop", "mobile"]}
        >

        <div><img src={client1} className="w-100 p-3"/></div>
        <div><img src={client2} className="w-100 p-3"/></div>
        <div><img src={client3} className="w-100 p-3"/></div>
        <div><img src={client4} className="w-100 p-3"/></div>
        <div><img src={client5} className="w-100 p-3"/></div>
        <div><img src={client6} className="w-100 p-3"/></div>
        <div><img src={client7} className="w-100 p-3"/></div>
        <div><img src={client8} className="w-100 p-3"/></div>
        <div><img src={client9} className="w-100 p-3"/></div>
        <div><img src={client10} className="w-100 p-3"/></div>
      </Carousel>

      </div>
      </div>

        );
    }