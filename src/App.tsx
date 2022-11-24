// redux
import { useSelector } from "react-redux";
import { getCards } from "providers/redux/slices";
// components
import Layout from "./components/layout";
import { Box, Grid } from "@mui/material";
import { Card } from "components/cards";

function App() {
  const cards = useSelector(getCards);

  return (
    <Layout>
      <Box>
        <Grid container p={2} spacing={2}>
          {cards.map((card, index) => (
            <Grid item key={`card-with-random-number-${card.content + index}`} xs={12} sm={6} md={4} xl={3}>
              <Card id={index} content={card.content} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export default App;
