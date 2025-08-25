import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import Error404Page from "../pages/Error404Page";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      {/* <Route path="*" element={<Error404Page></Error404Page>}></Route> */}
    </Routes>
  );
};
export default AppRouter;
