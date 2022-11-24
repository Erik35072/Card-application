// components
import { Box, Button, Divider, Stack, SxProps } from "@mui/material";

const instructionContainerStyles: SxProps = {
  cursor: "default"
};

export default function Instructions() {
  return (
    <Box className="flex-center" sx={{ height: "100%", boxShadow: "0 0 10px 2px" }}>
      <Stack spacing={2} px={4}>
        <Button sx={instructionContainerStyles}>Press the "Add new card" to add new card with random number</Button>
        <Divider />
        <Button sx={instructionContainerStyles}>Press the "Sort cards" to sort cards from lowest to highest.</Button>
      </Stack>
    </Box>
  );
}
