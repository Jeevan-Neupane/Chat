import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./style/theme.ts";
import GlobalStyle from "./style/GlobalStyle.ts";

import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllChats, setAuth, setToken, setUser } from "./store/store.ts";
import { useAllChatsQuery, useGetUserQuery } from "./store/api/userApi.ts";
import LoadingScreen from "./components/alert/LoadingScreen.tsx";
import ProtectedRoutes from "./layouts/ProtectedRoutes.tsx";
import Homepage from "./pages/Homepage.tsx";
import Signuppage from "./pages/Signuppage.tsx";
import Loginpage from "./pages/Loginpage.tsx";
import Layout from "./layouts/Layout.tsx";
import Groupchat from "./pages/Groupchatpage.tsx";
import SingleChat from "./pages/SingleChat.tsx";
import io from "socket.io-client";
import { ENDPOINT } from "./utils/constant.ts";
let socket: any;

const App = () => {
  const token = Cookies.get("accessToken");

  useEffect(() => {
    socket = io(ENDPOINT);
    
  });

  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
    }
  }, [token]);
  const dispatch = useDispatch();
  const acccessToken = useSelector((state: any) => state.user.token);

  const { data, isLoading } = useGetUserQuery(acccessToken);

  const { data: chatData, isLoading: isChatLoading } =
    useAllChatsQuery(acccessToken);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.data));
      dispatch(setAuth(true));
    }
  }, [data]);

  useEffect(() => {
    if (chatData) {
      dispatch(addAllChats(chatData?.data));
    } else {
      dispatch(addAllChats([]));
    }
  }, [chatData]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoutes authenticated={true}>
              <Homepage />
            </ProtectedRoutes>
          ),
          children: [],
        },
        {
          path: "/groups",
          element: (
            <ProtectedRoutes authenticated={true}>
              <Groupchat />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/chat/:chatId",
          element: (
            <ProtectedRoutes authenticated={true}>
              <SingleChat socket={socket} />
            </ProtectedRoutes>
          ),
        },
      ],
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
      {isLoading || isChatLoading ? (
        <LoadingScreen />
      ) : (
        <RouterProvider router={router} />
      )}

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
