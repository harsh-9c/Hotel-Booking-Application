import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">{place.title}</h1>
      <AddressLink>{place.address}</AddressLink>
      <PlaceGallery place={place} />
      <div className="mt-8 mb-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          <span className="font-semibold text-xl">Check-in:</span>{" "}
          {place.checkIn}
          <br />
          <span className="font-semibold text-xl">Check-out:</span>{" "}
          {place.checkOut}
          <br />
          <span className="font-semibold text-xl">Max no of guests:</span>{" "}
          {place.maxGuests}
          <br />
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {place.extraInfo}
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">What this place offers</h2>
        </div>
        <div className="mb-4 mt-2 text-xl text-gray-700 leading-5">
          {place.perks.length > 0 &&
            place.perks.map((perk) => (
              <ul style={{ listStyle: "disc" }} className="m-2">
                <li>{perk}</li>
              </ul>
            ))}
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Where you’ll be</h2>
        </div>
        <div className="mb-4 mt-2 text-xl text-gray-700 leading-5">
          <iframe
            src="https://maps.google.com/maps?q=35.856737,10.606619&z=15&output=embed"
            width="100%"
            height="400"
            // frameborder="0"
            // style="border:0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
