import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
	gradientBackground: "linear-gradient(to top, #ffb74d, transparent)",
	fontFamily: "Verdana",
	primaryColor: "",
	secondaryColor: "",
	color3: "",
	color5: "linear-gradient(60deg, #a5d6a7 30%, #66bb6a 80%)",
	typography: {
		fontFamily: "Verdana",
	},
});
console.log(theme);
const Theme = (props) => {
	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
