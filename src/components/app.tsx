import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../const';
import MainScreen from '../pages/main-screen/main-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import HtmlHelp from '../pages/html-help-screen/html-help-screen';
import CssHelp from '../pages/css-help-screen/css-help-screen';
import JsHelp from '../pages/js-help-screen/js-help-screen';
import JsonHelp from '../pages/json-help-screen/json-help-screen';
import TsHelp from '../pages/ts-help-screen/ts-help-screen';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
          <Route
            path={AppRoute.Html}
            element={<HtmlHelp />}
          />
          <Route
            path={AppRoute.Css}
            element={<CssHelp />}
          />
          <Route
            path={AppRoute.Js}
            element={<JsHelp />}
          />
          <Route
            path={AppRoute.Json}
            element={<JsonHelp />}
          />
          <Route
            path={AppRoute.Ts}
            element={<TsHelp />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;