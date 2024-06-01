import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem", // Increase font size for Feast Hub
                fontFamily: "Arial, sans-serif",
                display: "flex",
                alignItems: "center",
                marginRight: "70px", // Add margin between Feast Hub and Home
              }}
            >
              <span style={{ color: "orange" }}>Feast</span>{" "}
              <span style={{ color: "black" }}>Hub</span>
            </Typography>
            <RouterLink
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", marginRight: "40px" }}
              >
                Home
              </Typography>
            </RouterLink>
            <RouterLink
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", marginRight: "200px" }}
              >
                About
              </Typography>
            </RouterLink>
            <input className="form-control mr-sm-2" type="search" placeholder="Search food you want to order.." aria-label="Search" style={{ backgroundColor: "orange", width:'320px', marginLeft:'-50px' }} />
            <button className="btn btn-outline-success my-5 my-sm-0" type="submit">Search</button>
          </Box>
          
          <RouterLink
            to="/login"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", marginRight: "30px" }}
            >
              Login
            </Typography>
          </RouterLink>
          <RouterLink
            to="/signup"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", marginRight: "30px" }}
            >
              Signup
            </Typography>
          </RouterLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


// const top50Foods = [
//     { label: 'Pizza' },
//     { label: 'Burger' },
//     { label: 'Sushi' },
//     { label: 'Taco' },
//     { label: 'Pasta' },
//     { label: 'Burrito' },
//     { label: 'Curry' },
//     { label: 'Ramen' },
//     { label: 'Pho' },
//     { label: 'Pad Thai' },
//     { label: 'Tandoori Chicken' },
//     { label: 'Dim Sum' },
//     { label: 'Noodle Soup' },
//     { label: 'Chow Mein' },
//     { label: 'Kebab' },
//     { label: 'Falafel' },
//     { label: 'Shawarma' },
//     { label: 'Gyros' },
//     { label: 'Dumplings' },
//     { label: 'Spring Rolls' },
//     { label: 'Empanadas' },
//     { label: 'Enchiladas' },
//     { label: 'Tamales' },
//     { label: 'Hot Dog' },
//     { label: 'Fish and Chips' },
//     { label: 'Fried Chicken' },
//     { label: 'Fried Rice' },
//     { label: 'Hamburger' },
//     { label: 'Chili Con Carne' },
//     { label: 'Samosa' },
//     { label: 'Peking Duck' },
//     { label: 'Beijing Beef' },
//     { label: 'General Tso Chicken' },
//     { label: 'Sweet and Sour Pork' },
//     { label: 'Chow Fun' },
//     { label: 'Biryani' },
//     { label: 'Naan' },
//     { label: 'Paneer Tikka' },
//     { label: 'Masala Dosa' },
//     { label: 'Butter Chicken' },
//     { label: 'Vada Pav' },
//     { label: 'Idli' },
//     { label: 'Hakka Noodles' },
//     { label: 'Szechuan Chicken' },
//     { label: 'Orange Chicken' },
//     { label: 'Dim Sum' },
//     { label: 'Baozi' },
//     { label: 'Xiaolongbao' },
//     { label: 'Wonton Soup' },
//   ];
