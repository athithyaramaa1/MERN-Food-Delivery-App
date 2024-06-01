import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const HomepageCard = () => {
  return (
    <div>
      <Card
        sx={{
            marginTop: '50px',
          maxWidth: 345,
          backgroundColor: "#FFA500",
          border: "4px solid #FFFF00",
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQlj3rCfLHry58AtJ8ZyBEAFPtChMddDSUSjt7C7nV3Nhsni9RIx5b0-n7LxfgerrPS6b-P-u3BOM3abuY"
          title="FeastHub"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ronaldo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Greatest Footballer of all time
          </Typography>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
          </div>
        </CardContent>
        <CardActions>
          <Button size="xxl">Total Price</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default HomepageCard;
