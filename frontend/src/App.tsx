import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./style/theme.ts";
import GlobalStyle from "./style/GlobalStyle.ts";
import Signup from "./components/signup/Signup.tsx";




const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
    },
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
