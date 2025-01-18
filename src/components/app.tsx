import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../const.ts';
import MainScreen from '../pages/main-screen/main-screen.tsx';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen.tsx';
import HtmlHelp from '../pages/html-help-screen/html-help-screen.tsx';
import CssHelp from '../pages/css-help-screen/css-help-screen.tsx';
import JsHelp from '../pages/js-help-screen/js-help-screen.tsx';
import JsonHelp from '../pages/json-help-screen/json-help-screen.tsx';
import TsHelp from '../pages/ts-help-screen/ts-help-screen.tsx';
import CodePenScreen from '../pages/code-pen-screen/code-pen-screen.tsx';
import DevelopingHelp from '../pages/developing-help-screen/developing-help-screen.tsx';
import ProgLangsCollection from '../pages/prog-langs-collection/prog-langs-collection.tsx';
import PythonHelp from '../pages/python-help-screen/python-help-screen.tsx';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainScreen/>
            }
          />
          <Route
            path={AppRoute.Html}
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
          <Route
            path={AppRoute.CodePen}
            element={<CodePenScreen />}
          />
          <Route
            path={AppRoute.Developing}
            element={<DevelopingHelp />}
          />
          <Route
            path={AppRoute.ProgLangsCollection}
            element={<ProgLangsCollection />}
          />
          <Route
            path={AppRoute.Python}
            element={<PythonHelp />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
