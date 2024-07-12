import { Container, DialogTitle, Stack } from "@mui/material";
import { SideBar } from "./SideBar";

export function Home() {
  return (
    <>
      <Container
        id="home"
        sx={{
          position: "sticky",
          overflow: "hidden",
          display: "flex",
          bgcolor: "#000",
          backgroundImage: "url('./Camera.jpg')",
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
          padding="5rem"
        >
          <Stack justifyContent="center" alignItems="center">
            <DialogTitle
              sx={{
                color: "#ffff",
                fontWeight: "700",
                fontSize: { xs: "4rem", md: "3rem" },
                lineHeight: "1",
              }}
            >
              Jefferson Restrepo Alvarez
            </DialogTitle>
            {/* <Typography
              color="#fff"
              fontSize={{ xs: "1rem", md: "1rem" }}
              textAlign="center"
            >
              Technician in software analysis and development.
            </Typography> */}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
