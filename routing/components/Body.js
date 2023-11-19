import { useState } from "react";
import { Link } from "react-router-dom";

function Body() {
  const [filteredRestaurants, setFilteredRestaurants] = useState([
    1,
    2,
    3,
    4,
    5
  ]);
  return (
    <>
      <div> This is the Body </div>

      {filteredRestaurants.map((restaurant, id) => {
        return (
          <Link to={"/restaurant/" + restaurant} key={id}>
            <div> {restaurant} </div>
          </Link>
        );
      })}
    </>
  );
}

export default Body;
