import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { resId } = useParams();

  return <div> {resId} </div>;
}

export default RestaurantMenu;
