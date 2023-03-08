import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  const [places2, setPlaces2] = useState([]);
  const [query, setQuery] = useState("");

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = places2.filter((place) => {
        return place.address.toLowerCase().includes(keyword.toLowerCase());
      });
      setPlaces(results);
    } else {
      setPlaces(places2);
    }
    setQuery(keyword);
  };

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
      setPlaces2(response.data);
    });
  }, []);

  return (
    <>
      <div className="mt-2">
        <Carousel />
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={query}
          onChange={filter}
          placeholder="search..."
        />
      </div>
      <div className="mt-8 grid gap-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {places.length > 0 &&
          places.map((place, key) => (
            <Link to={"/place/" + place._id} key={key}>
              <div className="bg-gray-500 mb-2 rounded-2xl flex">
                {place.photos?.[0] && (
                  <img
                    className="rounded-2xl object-cover aspect-square "
                    src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                    alt=""
                  />
                )}
              </div>

              <h2 className="font-bold">{place.address}</h2>
              <h3 className="text-sm text-gray-500">{place.title}</h3>
              <div className="mt-1">
                <span className="font-bold">₹{place.price}</span> per night
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Carousel from "../Carousel";

// export default function IndexPage() {
//   const [places, setPlaces] = useState([]);
//   const [query, setQuery] = useState("");
//   useEffect(() => {
//     axios.get("/places").then((response) => {
//       setPlaces(response.data);
//     });
//   }, []);

//   console.log(query);

//   return (
//     <>
//       <div className="mt-2">
//         <Carousel />
//       </div>
//       <div>
//         <input
//           type="text"
//           onChange={(ev) => setQuery(ev.target.value)}
//           placeholder="search..."
//         />
//       </div>
//       <div className="mt-8 grid gap-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
//         {places.length > 0 &&
//           places.map((place) => {
//             if (query !== "") {
//               {
//                 console.log(query, place.address);
//               }
//               if (query === place.address) {
//                 return (
//                   <Link to={"/place/" + place._id}>
//                     <div className="bg-gray-500 mb-2 rounded-2xl flex">
//                       {place.photos?.[0] && (
//                         <img
//                           className="rounded-2xl object-cover aspect-square "
//                           src={
//                             "http://localhost:4000/uploads/" + place.photos?.[0]
//                           }
//                           alt=""
//                         />
//                       )}
//                     </div>

//                     <h2 className="font-bold">{place.address}</h2>
//                     <h3 className="text-sm text-gray-500">{place.title}</h3>
//                     <div className="mt-1">
//                       <span className="font-bold">₹{place.price}</span> per
//                       night
//                     </div>
//                   </Link>
//                 );
//               }
//             } else {
//               return (
//                 <Link to={"/place/" + place._id}>
//                   <div className="bg-gray-500 mb-2 rounded-2xl flex">
//                     {place.photos?.[0] && (
//                       <img
//                         className="rounded-2xl object-cover aspect-square "
//                         src={
//                           "http://localhost:4000/uploads/" + place.photos?.[0]
//                         }
//                         alt=""
//                       />
//                     )}
//                   </div>

//                   <h2 className="font-bold">{place.address}</h2>
//                   <h3 className="text-sm text-gray-500">{place.title}</h3>
//                   <div className="mt-1">
//                     <span className="font-bold">₹{place.price}</span> per night
//                   </div>
//                 </Link>
//               );
//             }
//           })}
//       </div>
//     </>
//   );
// }
