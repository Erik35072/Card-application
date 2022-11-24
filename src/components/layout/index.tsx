import { Grid } from "@mui/material";
import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Instructions from "./instructions";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Grid container component="main" sx={{ height: "84vh" }} columnSpacing={2}>
        <Grid item xs={8} sx={{ maxHeight: "100%" }}>
          {children}
        </Grid>
        <Grid item xs={4}>
          <Instructions />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
