import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  200: { items: 1 },
  400: { items: 2 },
  600: { items: 3 },
  800: { items: 4 },
  1000: { items: 5 },
  1200: { items: 6 },
};

var items;
const Carousel = () => {
  items = [
    <div>
      <ion-icon name="logo-tableau" size="large" color="gray"></ion-icon>
      <br />
      <div className="text-gray-700">Arctic</div>
    </div>,

    <div>
      <ion-icon name="fast-food-outline" size="large"></ion-icon>
      <br />
      <div className="text-gray-700">Cusine</div>
    </div>,
    <div>
      <ion-icon name="boat-outline" size="large"></ion-icon>

      {/* <br /> */}
      <br />
      <div className="text-gray-700">Cruise</div>
    </div>,
    <div>
      <ion-icon name="storefront-outline" size="large"></ion-icon>
      <br />
      <div className="text-gray-700">Huts</div>
    </div>,
    <div>
      <ion-icon name="game-controller-outline" size="large"></ion-icon>
      <br />
      <div className="text-gray-700">Play</div>
    </div>,
    <div>
      <ion-icon name="thunderstorm-outline" size="large"></ion-icon>
      <br />
      <div className="text-gray-700">Monsoon</div>
    </div>,
    <div>
      <ion-icon name="flame-outline" size="large"></ion-icon>
      <br />
      <div className="text-gray-700">Trending</div>
    </div>,
    <div>
      <ion-icon name="bed-outline" size="large"></ion-icon>
      <br />
      <div className="text-gray-700">Private rooms</div>
    </div>,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlayInterval={2500}
      animationDuration={2000}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay="true"
      animationType="slide"
      autoPlayStrategy="none"
      infinite="true"
      disableButtonsControls="true"
      disableDotsControls="false"
      touchMoveDefaultEvents
      // autoPlayControls
    />
  );
};

export default Carousel;

{
  /* <p>
        {movie[0].name} &nbsp;
        {movie[0].price_change_percentage_24h}
      </p>
      <p>{movie[0].current_price}</p> */
}
