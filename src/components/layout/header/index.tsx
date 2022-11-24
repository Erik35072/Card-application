import { memo } from "react";
// redux
import { useDispatch } from "react-redux";
import { add, sort } from "providers/redux/slices";
// components
import { Box, Grid, Button } from "@mui/material";

function Header() {
  const dispatch = useDispatch();

  const addNewCard = () => dispatch(add());
  const sortCards = () => dispatch(sort());

  return (
    <Box sx={{ p: 1 }} component="header">
      <Grid container spacing={2}>
        <Grid item>
          <Button onClick={addNewCard}>Add new card</Button>
        </Grid>
        <Grid item>
          <Button onClick={sortCards}>Sort cards</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(Header);
