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
      {/* <img
        alt="none found :)"
        className="carousel-img"
        src={
          "https://a0.muscache.com/im/pictures/b1113b35-9e55-4393-9e97-7346e4526b4a.jpg?im_w=1200"
        }
        onDragStart={handleDragStart}
        role="presentation"
      /> */}
      <ion-icon name="logo-tableau" size="large" color="gray"></ion-icon>
      <br />
      <p>Arctic</p>
      {/* <p>
        {coins[0]?.name} &nbsp;
        {coins[0]?.price_change_percentage_24h.toFixed(2)}%
      </p> */}
    </div>,

    <div>
      {/* <img
        alt="none found :)"
        className="carousel-img"
        src={
          "https://a0.muscache.com/im/pictures/b1113b35-9e55-4393-9e97-7346e4526b4a.jpg?im_w=1200"
        }
        onDragStart={handleDragStart}
        role="presentation"
      /> */}
      <ion-icon name="fast-food-outline" size="large"></ion-icon>
      <br />
      <p>Cusine</p>
      {/* <p>
        {coins[1]?.name} &nbsp;
        {coins[1]?.price_change_percentage_24h.toFixed(2)}%
      </p> */}
    </div>,
    <div>
      <ion-icon name="boat-outline" size="large"></ion-icon>

      {/* <br /> */}
      <br />
      <p>Cruise</p>
    </div>,
    <div>
      <ion-icon name="storefront-outline" size="large"></ion-icon>
      <br />
      <p>Huts</p>
      {/* <p>
        {coins[3]?.name} &nbsp;
        {coins[3]?.price_change_percentage_24h.toFixed(2)}%
      </p> */}
    </div>,
    <div>
      <ion-icon name="game-controller-outline" size="large"></ion-icon>
      <br />
      <p>Play</p>
      {/* <p>
        {coins[4]?.name} &nbsp;
        {coins[4]?.price_change_percentage_24h.toFixed(2)}%
      </p> */}
    </div>,
    <div>
      <ion-icon name="thunderstorm-outline" size="large"></ion-icon>
      <br />
      <p>Monsoon</p>
      {/* <p>
        {coins[5]?.name} &nbsp;
        {coins[5]?.price_change_percentage_24h.toFixed(2)}%
      </p> */}
    </div>,
    <div className="items-center justify-center">
      <ion-icon name="flame-outline" size="large"></ion-icon>
      <br />
      <div>Trending</div>
      {/* <p>
        {coins[6]?.name} &nbsp;
        {coins[6]?.price_change_percentage_24h.toFixed(2)}%
      </p> */}
    </div>,
    <div>
      <ion-icon name="bed-outline" size="large"></ion-icon>
      <br />
      <p>Private rooms</p>
      {/* <p>
        {coins[7]?.name} &nbsp;
        {coins[7]?.price_change_percentage_24h.toFixed(2)}%
      </p> */}
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
      disableButtonsControls="false"
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
