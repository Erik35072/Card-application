import { memo } from "react";
// redux
import { useDispatch } from "react-redux";
import { add, sort } from "providers/redux/slices";
// components
import { Grid, Button, AppBar } from "@mui/material";

function Header() {
  const dispatch = useDispatch();

  const addNewCard = () => dispatch(add());
  const sortCards = () => dispatch(sort());

  return (
    <AppBar sx={{ p: 1, minHeight: "8vh", bgcolor: "primary.main", position: "relative" }}>
      <Grid container rowGap={2} columnSpacing={2}>
        <Grid item>
          <Button onClick={addNewCard}>Add new card</Button>
        </Grid>
        <Grid item>
          <Button onClick={sortCards}>Sort cards</Button>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default memo(Header);
