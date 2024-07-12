import {
  Container,
  DialogTitle,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { SideBar } from "./SideBar";
import { Link } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Mail from "@mui/icons-material/Mail";

const actions = [
  {
    icon: (
      <Link
        component={RouterLink}
        target="blank"
        to="https://www.linkedin.com/in/jefferson-restrepo-alvarez-0357b2222?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3gYNYPSwQVmNywD%2BzMwz3w%3D%3D"
        style={{ color: "#a7a7a7" }}
      >
        <LinkedInIcon sx={{ fontSize: "2rem" }} />
      </Link>
    ),
    name: (
      <Link
        component={RouterLink}
        target="blank"
        to="https://www.linkedin.com/in/jefferson-restrepo-alvarez-0357b2222?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3gYNYPSwQVmNywD%2BzMwz3w%3D%3D"
        style={{ color: "#a7a7a7", fontSize: "1rem" }}
      >
        Linkedin
      </Link>
    ),
  },
  {
    icon: (
      <Link
        component={RouterLink}
        target="blank"
        to="https://wa.link/nd3enl"
        style={{ color: "#a7a7a7" }}
      >
        <WhatsApp sx={{ fontSize: "2rem" }} />
      </Link>
    ),
    name: (
      <Link
        component={RouterLink}
        target="blank"
        to="https://wa.link/nd3enl"
        style={{ color: "#a7a7a7", fontSize: "1rem" }}
      >
        Contact
      </Link>
    ),
  },
  {
    icon: (
      <Link
        component={RouterLink}
        target="blank"
        to="mailto:jeffer4533@gmail.com"
        style={{ color: "#a7a7a7" }}
      >
        <Mail sx={{ fontSize: "2rem" }} />
      </Link>
    ),
    name: (
      <Link
        component={RouterLink}
        target="blank"
        to="mailto:jeffer4533@gmail.com"
        style={{ color: "#a7a7a7", fontSize: "1rem" }}
      >
        Mail
      </Link>
    ),
  },
];
export function Contact() {
  return (
    <>
      <Container
        id="contact"
        sx={{
          position: "sticky",
          overflow: "hidden",
          display: "flex",
          background:
          "linear-gradient(0deg, rgb(4 4 4) 0%, rgb(161 92 76) 100%)",
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
          <Stack justifyContent="center" alignItems="center">
            <DialogTitle
              sx={{
                color: "#ffff",
                fontWeight: "700",
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: "1",
              }}
            >
              Contact Me
            </DialogTitle>
            <Typography
              color="#fff"
              fontSize={{ xs: "1rem", md: "1rem" }}
              m={0}
              textAlign="center"
              sx={{ textWrap: "balance" }}
              pb="2rem"
            >
              Send me an email or
              contact me via instant message!
            </Typography>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              {actions.map((action, index) => (
                <Tooltip key={index} title={action.name}>
                  <Stack direction="column" alignItems="center">
                    {action.icon}
                    {action.name}
                  </Stack>
                </Tooltip>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
