import Request from "../../components/apiRequest/request";
import { Favorite } from "../../components/Favorites/index";

const Pokemon = () => {
  return (
    <div>
      <Request favorite={Favorite} />
    </div>
  );
};

export default Pokemon;
