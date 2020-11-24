import Request from "../../components/apiRequest/request";
import { Favorite } from "../../components/Favorites/index";

const RickAndMorty = () => {
  return (
    <div>
      <Request favorite={Favorite} />
    </div>
  );
};

export default RickAndMorty;
