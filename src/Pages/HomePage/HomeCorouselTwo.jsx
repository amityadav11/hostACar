import React from "react";
import Carousel from "react-multi-carousel";
import styles from "../../Styles/HomePage.module.css";
import "react-multi-carousel/lib/styles.css";
import { Heading, Box } from "@chakra-ui/react";
import { CorouselTwoData } from "../../data/CorouselsData";

const CorouselTwo = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div style={{ display: "grid" }}>
      <Carousel responsive={responsive} transitionDuration={1000}>
        {CorouselTwoData.map((el) => {
          return (
            <div className={styles.ExploreDiv2} key={el.id}>
              <div style={{ position: "relative", paddingTop: "50px" }}>
                <img
                  className={styles.ExploreDivImg2}
                  src={el.image}
                  alt="rty"
                  height={{ lg: "100%", md: "80%", sm: "60%" }}
                  width="100%"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "7%",
                  width: "80%",
                }}
              >
                <Heading
                  as="h2"
                  size="xl"
                  color="white"
                  marginLeft="10px"
                  textAlign={"left"}
                >
                  {el.title}
                </Heading>
              </div>
              {/* <h1 className={styles.Exploreh1}>{el.type}</h1>
              <p style={{ color: "#6b6b6b" }}>{el.no_of_item}</p> */}
            </div>
          );
        })}
      </Carousel>
      <Box
        style={{
          position: "relative",
          backgroundColor: "white",

          paddingTop: "70px",
          paddingBottom: "40px",
        }}
      >
        <Heading
          style={{
            textAlign: "center",
            fontFamily: "IBM Plex Sans",

            fontWeight: "500",
            lineHeight: "1",
            fontSize: "clamp(14px, 3vw, 32px)",
            color: "#1f1f1f",
          }}
        >
          WE LOVE GIVING BEST EXPERIENCES
        </Heading>
        <Heading
          style={{
            textAlign: "center",
            fontFamily: "IBM Plex Sans",

            fontWeight: "300",

            color: "#1f1f1f",
            marginTop: "20px",
          }}
          as={"h6"}
          size="md"
        >
          We cover you under all the circumstances to ensure the best journey
        </Heading>
      </Box>
    </div>
  );
};

export default CorouselTwo;
