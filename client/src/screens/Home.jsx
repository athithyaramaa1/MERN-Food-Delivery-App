import HomepageCard from "../assets/Card";
import SwipeableTextMobileStepper from "../assets/Carousel";
import Footer from "../assets/Footer";
import ButtonAppBar from "../assets/Navbar";

const Home = () => {
  return (
    <div>
      <div>
        <ButtonAppBar />
        <div>
        <SwipeableTextMobileStepper />
        <div className="m-3">
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        </div>
          
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
