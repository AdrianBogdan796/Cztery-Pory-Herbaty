import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import StartPage from "./pages/start/StartPage";
import ProcesPage from "./pages/proces/ProcesPage";
import TeaPage from "./pages/tea/TeaPage";
import { Navigation } from "./common/Navigation";
import { toStart, toProces, toTea, toStarted } from "./routes";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toStart()}>
        <StartPage />
      </Route>
      <Route path={toStarted()}>
        <StartPage />
      </Route>
      <Route path={toProces()}>
        <ProcesPage />
      </Route>
      <Route path={toTea()}>
        <TeaPage />
      </Route>
      <Route path="/">
        <Redirect to={toStarted} />
      </Route>
    </Switch>
  </HashRouter>
);
