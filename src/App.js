import { useState, useEffect } from "react";
// react-router components
// import {
// 	BrowserRouter,
// 	Routes,
// 	Route,
// 	useLocation,
// 	Switch,
// 	Redirect,
// } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";
// import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
// import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import {
	useMaterialUIController,
	setMiniSidenav,
	setOpenConfigurator,
} from "context";

// Images
// import brandWhite from "assets/images/logo-ct.png";
// import brandDark from "assets/images/logo-ct-dark.png";
import AddUser from "./layouts/tables/AddUserComponent/index";
import AddSale from "./layouts/AddSale/addSaleForm/index";
import ResetPassword from "./layouts/authentication/reset-password/cover/index";
import EditProfile from "./layouts/profile/EditProfile";
import SignIn from "./layouts/authentication/sign-in";
export default function App() {
	const [controller, dispatch] = useMaterialUIController();
	const {
		miniSidenav,
		direction,
		layout,
		openConfigurator,
		sidenavColor,
		// transparentSidenav,
		// whiteSidenav,
		darkMode,
	} = controller;
	const [onMouseEnter, setOnMouseEnter] = useState(false);
	// const [rtlCache, setRtlCache] = useState(null);
	const { pathname } = useLocation();
	// const navigate = useNavigate();

	// Cache for the rtl
	// useMemo(() => {
	//   const cacheRtl = createCache({
	//     key: "rtl",
	//     stylisPlugins: [rtlPlugin],
	//   });

	//   setRtlCache(cacheRtl);
	// }, []);

	// Open sidenav when mouse enter on mini sidenav
	const handleOnMouseEnter = () => {
		if (miniSidenav && !onMouseEnter) {
			setMiniSidenav(dispatch, false);
			setOnMouseEnter(true);
		}
	};

	// Close sidenav when mouse leave mini sidenav
	const handleOnMouseLeave = () => {
		if (onMouseEnter) {
			setMiniSidenav(dispatch, true);
			setOnMouseEnter(false);
		}
	};

	// Change the openConfigurator state
	const handleConfiguratorOpen = () =>
		setOpenConfigurator(dispatch, !openConfigurator);

	// Setting the dir attribute for the body element
	useEffect(() => {
		document.body.setAttribute("dir", direction);
	}, [direction]);

	// Setting page scroll to 0 when changing the route
	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
	}, [pathname]);

	const getRoutes = (allRoutes) =>
		allRoutes.map((route) => {
			if (route.collapse) {
				return getRoutes(route.collapse);
			}

			if (route.route) {
				return (
					<Route
						exact
						path={route.route}
						element={route.component}
						key={route.key}
					/>
				);
			}

			return null;
		});

	const configsButton = (
		<MDBox
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="3.25rem"
			height="3.25rem"
			bgColor="white"
			shadow="sm"
			borderRadius="50%"
			position="fixed"
			right="2rem"
			bottom="2rem"
			zIndex={99}
			color="dark"
			sx={{ cursor: "pointer" }}
			onClick={handleConfiguratorOpen}>
			<Icon fontSize="small" color="inherit">
				settings
			</Icon>
		</MDBox>
	);

	return (
		<ThemeProvider theme={darkMode ? themeDark : theme}>
			<ToastContainer />
			<CssBaseline />
			{layout === "dashboard" && (
				<>
					<Sidenav
						color={sidenavColor}
						// brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
						brandName="DanerobNFTs Admin panel"
						routes={routes}
						onMouseEnter={handleOnMouseEnter}
						onMouseLeave={handleOnMouseLeave}
					/>
					<Configurator />
					{configsButton}
				</>
			)}
			{layout === "vr" && <Configurator />}
			<Routes>
				<Route path="/admin" element={<SignIn />} />
				{getRoutes(routes)}
				<Route path="/add-user" element={<AddUser />} />
				<Route path="/add-sale" element={<AddSale />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/editProfile" element={<EditProfile />} />
			</Routes>
		</ThemeProvider>
	);
}
