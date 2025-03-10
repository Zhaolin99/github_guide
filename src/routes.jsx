import { Home, Profile, SignIn, SignUp, News, DataSelection, Contacts, Support, ClientCase, Manual} from "@/pages";



export const routes = [
  {
    name: "",
    path: "/home",
    element: <Home />,
  },
  {
    name: "",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "",
    path: "/news",
    element: <News />,
  },
  {
    name: "",
    path: "/data-selection",
    element: <DataSelection />,
  },
  {
    name: "",
    path: "/contacts",
    element: <Contacts />,
  },
  {
    name: "",
    path: "/support",
    element: <Support />,
  },
  {
    name: "",
    path: "/clientcase",
    element: <ClientCase/>,
  },
  {
    name: "",
    path: "/manual",
    element: <Manual />,
  },
  {
    name: " ",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
