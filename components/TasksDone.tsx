import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from ".";

const TasksDone = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"25px"}
      flexShrink={0}
      borderRadius={"27.4px"}
      height={"200px"}
      boxShadow={"0px -4px 37px 0px rgba(50, 50, 50, 0.30)"}
      sx={{
        [theme.breakpoints.down("xl")]: {
          width: "470px",
        },
        [theme.breakpoints.up("xl")]: {
          width: "500px",
        },
        background: "linear-gradient(180deg, #383838 0%, #29292A 100%)",
      }}>
      <img src="/tasks.svg" />
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={2}>
        <Typography
          color={"#FFF"}
          fontFamily={"Poppins"}
          fontSize={48}
          fontWeight={700}>
          19
        </Typography>
        <Typography
          color={"#FFF"}
          fontFamily={"Poppins"}
          fontSize={30}
          fontWeight={500}>
          Tasks Done
        </Typography>
      </Box>
    </Box>
  );
};

export default TasksDone;
