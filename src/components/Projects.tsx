import { Container, DialogTitle, Stack, Typography } from "@mui/material";
import { ReactPhotoCollage } from "react-photo-collage";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { createGlobalStyle } from "styled-components";
import { SideBar } from "./SideBar";
import VideoCollage from "./VideoCollage";

const GlobalStyle = createGlobalStyle`
.carousel .control-next.control-arrow:before  {
    border-width: 30px; 
    box-shadow: none;
    @media (max-width: 1440px) {
      padding-left: 30rem;
    }
    @media (min-width: 1441px) {
      padding-left: 20rem;
    }
  }
  .carousel .control-prev.control-arrow:before 
  {
    border-width: 30px; 
    box-shadow: none;
    @media (max-width: 1440px) {
      padding-right: 30rem;
    }
    @media (min-width: 1441px) {
      padding-right: 20rem;
    }
  }
`;
const setting = {
  width: "400px",
  height: ["400px", "300px"],
  layout: [1, 4],
  photos: [
    { source: "photo-11.jpg" },
    { source: "photo-1.jpg" },
    { source: "photo-3.jpg" },
    { source: "photo-4.jpg" },
    { source: "photo-6.jpg" },
    { source: "photo-7.jpg" },
    { source: "photo-8.jpg" },
    { source: "photo-5.jpg" },
    { source: "photo-9.jpg" },
    { source: "photo-10.jpg" },
    { source: "photo-2.jpg" },
    { source: "photo-12.jpg" },
    { source: "photo-13.jpg" },
    { source: "photo-14.jpg" },
    { source: "photo-15.jpg" },
    { source: "photo-16.jpg" },
    { source: "photo-17.jpg" },
    { source: "photo-18.jpg" },
    { source: "photo-19.jpg" },
    { source: "photo-20.jpg" },
    { source: "photo-21.jpg" },
    { source: "photo-22.jpg" },
    { source: "photo-23.jpg" },
    { source: "photo-24.jpg" },
    { source: "photo-25.jpg" },
    { source: "photo-26.jpg" },
    { source: "photo-27.jpg" },
    { source: "photo-28.jpg" },
  ],
  showNumOfRemainingPhotos: true,
};

const videoSettings = {
  videos: [
    { source: "COLOMBIA-SHOW.mp4" },
    { source: "0615.mp4" },
    { source: "Copa-America.mp4" },
    { source: "Diablotes-Corregido.mp4" },
    { source: "Grupos-Show.mp4" },
    { source: "JORNADA-2-EURO.mp4" },
    { source: "Barezito.mp4" },
    { source: "01.mp4" },
    { source: "Diablotes-Rell.mp4" },
    { source: "Diablotes-Video.mp4" },
    { source: "Feria-Flores.mp4" },
    { source: "JV.mp4" },
    { source: "Show-Reel.mp4" },
    { source: "Show-Reell.mp4" },
    { source: "Show.mp4" },
  ],
};

export function Projects() {
  return (
    <>
      <GlobalStyle />
      <Container
        id="projects"
        sx={{
          position: "sticky",
          overflow: "hidden",
          display: "flex",
          bgcolor: "#000",
          backgroundImage: "url('./coffee-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          maxWidth: "100%",
        }}
      >
        <SideBar />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Carousel showThumbs={false} width={2000}>
            <Stack justifyContent="center" alignItems="center">
              <DialogTitle
                sx={{
                  color: "#ffff",
                  fontWeight: "700",
                  fontSize: { xs: "4rem", md: "2.5rem" },

                  lineHeight: "1",
                }}
              >
                Projects
              </DialogTitle>
              <Typography
                padding="3rem"
                pb="3rem"
                color="#ffff"
                fontSize={{ xs: "1rem", md: "1rem" }}
                textAlign="left"
              >
                Here are some of the projects I have worked on.
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "left", md: "center" }}
              alignItems={{ xs: "center", md: "left" }}
            >
              <ReactPhotoCollage {...setting} />
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
            >
              <VideoCollage videos={videoSettings.videos} />
            </Stack>
          </Carousel>
        </Stack>
      </Container>
    </>
  );
}
