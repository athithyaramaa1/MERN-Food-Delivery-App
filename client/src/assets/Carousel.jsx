import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Burger",
    imgPath: "https://source.unsplash.com/random/900x700/?burger",
  },
  {
    label: "Pizzas",
    imgPath: "https://source.unsplash.com/random/900x700/?cooked-pizza",
  },
  {
    label: "Fries",
    imgPath: "https://source.unsplash.com/random/900x700/?cooked-frenchfry",
  },
  {
    label: "Noodles",
    imgPath: "https://source.unsplash.com/random/900x700/?cooked-noodles",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(300); // Initial height
  const [imageHeight, setImageHeight] = useState(255); // Initial height
  const maxSteps = images.length;

  useEffect(() => {
    // Calculate height based on the aspect ratio of the image and increase carousel height
    const updateImageHeight = () => {
      const image = new Image();
      image.src = images[activeStep].imgPath;
      image.onload = () => {
        const aspectRatio = image.width / image.height;
        const calculatedImageHeight = 400 / aspectRatio; // Adjust 400 according to your desired width
        const calculatedCarouselHeight = calculatedImageHeight * 1.2; // Increase height by 20%
        setImageHeight(calculatedImageHeight);
        setCarouselHeight(calculatedCarouselHeight);
      };
    };

    updateImageHeight();
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        width: "90%", // Set width to occupy 90% of the screen
        margin: "auto", // Center horizontally
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        height: carouselHeight, // Set dynamic height for the carousel
        overflow: "hidden", // Hide overflow to prevent scrollbar
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: imageHeight, // Set dynamic height for the image
                  display: "block",
                  width: "100%",
                  objectFit: "contain", // Maintain aspect ratio and fit entire image
                  borderRadius: "8px",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
