
import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyles.js"
import {Nav} from './Components/Nav/Nav'
import {Home} from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"

const theme = {
  primary_color: "#000",
  secundary_color: "#fff",
  ternary_color: "#F5C32E",
  font_color: "#333",
  font_padrao: "Roboto, sans-serif"
};


function App() {

  const [isOpenAtendOnline, setisOpenAtendOnline] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleCloseIcon = () => {
    setIsOpen(!isOpen)
  }


  const AuthenticatedRoutes = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact>
          <Home />
        </Route>

      </Router >
    )
  }

  return (
    <>
      <Router>

        <ScrollToTop>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Nav isOpen={isOpen} toggleCloseIcon={toggleCloseIcon} />

            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route component={AuthenticatedRoutes} />
            </Switch>


          </ThemeProvider>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;