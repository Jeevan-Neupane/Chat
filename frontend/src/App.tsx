import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./style/theme.ts";
import GlobalStyle from "./style/GlobalStyle.ts";

import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setToken, setUser } from "./store/store.ts";
import { useGetUserQuery } from "./store/api/userApi.ts";
import LoadingScreen from "./components/alert/LoadingScreen.tsx";
import ProtectedRoutes from "./layouts/ProtectedRoutes.tsx";
import Homepage from "./pages/Homepage.tsx";
import Signuppage from "./pages/Signuppage.tsx";
import Loginpage from "./pages/Loginpage.tsx";

const App = () => {
  const token = Cookies.get("accessToken");
  

  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
    }
  }, [token]);
  const dispatch = useDispatch();
  const acccessToken = useSelector((state: any) => state.user.token);

  const { data, isLoading } = useGetUserQuery(acccessToken);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.data));
      dispatch(setAuth(true));
    }
  }, [data]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes authenticated={true}>
          <Homepage />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/signup",
      element: (
        <ProtectedRoutes authenticated={false}>
          <Signuppage />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/login",
      element: (
        <ProtectedRoutes authenticated={false}>
          <Loginpage />
        </ProtectedRoutes>
      ),
    },
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
      
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
