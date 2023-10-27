import { Routes, Route } from "react-router-dom";
import { TableWithSearch } from '../components/TableWithSearch';
import { LoginView } from '../components/LoginView';
import { NotFound } from "../components/NotFound";

export const AppRouter = () => {
  return (
    <div className = 'fullScreen'>
      <Routes>
        <Route element={<TableWithSearch />} path="/main">
        </Route>
        <Route element={<LoginView />} path="/">
        </Route>
        <Route element={<NotFound />} path="*">
        </Route>
      </Routes>
    </div>
  );
};
