import { PageButtonPrevious, PageButtonNext, DivPages } from "./style";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch } from "react-redux";
import {
  getPokemonThunk,
  getRickAndMortyThunk,
} from "../../store/modules/Characters/thunk";
import { useEffect } from "react";

const ChangePage = ({ previousPage, nextPage, page }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonThunk(page));
    dispatch(getRickAndMortyThunk(page));
  }, [page]);

  return (
    <DivPages>
      <PageButtonPrevious
        onClick={() => {
          previousPage();
        }}
      >
        <ArrowBackIcon />
      </PageButtonPrevious>
      <span>{page}</span>
      <PageButtonNext
        onClick={() => {
          nextPage();
        }}
      >
        <ArrowForwardIcon />
      </PageButtonNext>
    </DivPages>
  );
};

export default ChangePage;
