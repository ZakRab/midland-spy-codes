//TODO  Add links into Nav.

import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "Rules", "About"];

function NavMenu() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	// const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	// const handleOpenUserMenu = (event) => {
	//  setAnchorElUser(event.currentTarget);
	// };

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	// const handleCloseUserMenu = () => {
	//  setAnchorElUser(null);
	// };

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<NavLink to="/">
						<Typography
							variant="h6"
							noWrap
							// component="p"
							// href="/"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							LOGO
						</Typography>
					</NavLink>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{/* mobile dropdown menu */}
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<NavLink
										to={page}
										// style={{ textDecoration: "none" }}
										style={(isActive) => ({
											color: isActive ? "green" : "blue",
											textDecoration: isActive ? "underline" : "none",
										})}
										className="mobile"
									>
										{page}
									</NavLink>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<NavLink to="/">
						<Typography
							variant="h5"
							noWrap
							// component="a"
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							LOGO
						</Typography>
					</NavLink>

					{/* desktop links: */}

					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<NavLink to={page}>
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: "white", display: "block" }}
								>
									{page}
								</Button>
							</NavLink>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default NavMenu;
