import "./App.css";
import HomeImages from "./components/HomeImages/index";
import Header from "./components/header/index";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routes from "./components/Routes/index";
import ChangePage from "./components/ChangePage/index";

const App = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <Header page={page} />
      {location.pathname === "/" ? <HomeImages /> : null}
      {location.pathname === "/" ? null : (
        <div className="footer">
          <ChangePage
            nextPage={nextPage}
            previousPage={previousPage}
            page={page}
          />
        </div>
      )}
      <div className="main">
        <Routes />
      </div>
    </>
  );
};

export default App;
