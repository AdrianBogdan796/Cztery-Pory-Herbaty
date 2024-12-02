import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import FromPage from "./pages/from/FromPage";
import ProcesPage from "./pages/proces/ProcesPage";
import TeaPage from "./pages/tea/TeaPage";
import WelcomePage from "./pages/welcome/WelcomePage"; // Nowa strona powitalna
import { Navigation } from "./common/Navigation";
import { toFrom, toProces, toTea, toStarted, toWelcome } from "./routes";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toWelcome()} exact>
        <WelcomePage /> {/* Strona powitalna */}
      </Route>
      <Route path={toFrom()}>
        <FromPage />
      </Route>
      <Route path={toStarted()}>
        <FromPage />
      </Route>
      <Route path={toProces()}>
        <ProcesPage />
      </Route>
      <Route path={toTea()}>
        <TeaPage />
      </Route>
      <Route path="/">
        <Redirect to={toWelcome()} />
      </Route>
    </Switch>
  </HashRouter>
);
