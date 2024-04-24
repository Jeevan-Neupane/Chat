type themetype= {
    text: string;
    body: string;
    button: string;
    hover: string;
    secialTextOne: string;
    specialTextTwo: string;
    lightText: string;
    components: string;
    background_color: string;
    background_gradient: string;
    font_family_one: string;
    font_family_two: string;
    header_footer: string;
}


const darkTheme: themetype = {

    text: "#fff",
    body: "#0b1120",
    button: "#1f3d92",
    hover: "#da2f68",
    secialTextOne: "#fbbf24",
    specialTextTwo: "teal",
    lightText: "#94a3b8",
    components: "#1e293b",
    background_color: "#182546",
    background_gradient: "linear - gradient(153deg, rgba(11, 17, 32, 1) 0 %, rgba(11, 38, 59, 1) 44 %)",
    font_family_one: 'Montserrat',
    font_family_two: 'Recursive',
    header_footer: "#020c1b"
}
const lightTheme = {

    text: "#000",
    body: "#f8fafc",
    button: "#1f3d92",
    hover: "",
    secialTextOne: "#fbbf24",
    specialTextTwo: "teal",
    lightText: "#94a3b8",
    components: "#f8fafc",
    background_color: "#182546",
    background_gradient: "radial-gradient(circle, rgba(248,250,252,1) 0%, rgba(247,250,252,1) 49%, rgba(222,247,247,1) 70%)",
    font_family_one: ` 'Lato',sans-serif`,
    font_family_two: `'Open Sans',sans-serif`
}

export {
    darkTheme, lightTheme
}

