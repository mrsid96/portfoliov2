import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./pages/home";
import dashboard from "./pages/dashboard"
import NotFound from "./pages/404";

import { useSelector } from 'react-redux';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const themeMode = useSelector(state => state.theme);
  const myTheme = createMuiTheme({
    palette: {
      type: themeMode,
    }
  });
  return (
    <ThemeProvider theme={myTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={dashboard} />
          <Route exact path="/uh-oh" component={NotFound} />
          <Redirect to="/uh-oh" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
