import { memo, useCallback } from "react";
// redux
import { useDispatch } from "react-redux";
import { remove } from "providers/redux/slices";
// components
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
// icons
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

type Props = {
  id: number;
  content: number;
};

function Card({ id, content }: Props) {
  const dispatch = useDispatch();

  const removeCard = useCallback(() => {
    dispatch(remove({ id }));
  }, [dispatch, id]);

  return (
    <div>
      <Paper sx={{ p: 2, borderRadius: "8px" }}>
        <Stack spacing={2}>
          <Box className="flex-center">
            <Typography variant="h5">{content}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={removeCard}>
              <DeleteSweepIcon sx={{ color: "error.main" }} />
            </IconButton>
          </Box>
        </Stack>
      </Paper>
    </div>
  );
}

export default memo(Card);
