import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetail from "../pages/RoomDetails/RoomDetail";
import PrivateRoute from "./privateRoute";
import { getRooms, getSingleRoom } from "../api/rooms";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import AddRoom from "../components/Dashboard/Sidebar/host/AddRoom";
import MyLists from "../components/Dashboard/Sidebar/host/MyLists";
import HostRoute from "./HostRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import MyBookings from "../pages/Dashboard/Guest/MyBookings";
import ManageBookings from "../components/Dashboard/Sidebar/host/ManageBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomDetail></RoomDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) => getSingleRoom(params.id),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "add-room",
        element: <PrivateRoute>
          <HostRoute>
          <AddRoom></AddRoom>
          </HostRoute>
        </PrivateRoute> ,
      },
      {
        path: "my-lists",
        element: 
        <PrivateRoute>
          <HostRoute><MyLists></MyLists></HostRoute>
        </PrivateRoute>,
      },
      {
        path: 'manage-users',
        element: <PrivateRoute>
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        </PrivateRoute>
      },
      {
        path: "profile",
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: "my-bookings",
        element:<PrivateRoute>
          <MyBookings/>
        </PrivateRoute>
      },
      {
        path:"manage-bookings",
        element: <PrivateRoute>
          <HostRoute>
            <ManageBookings></ManageBookings>
          </HostRoute>
        </PrivateRoute>
      }

    ],
  },
]);
