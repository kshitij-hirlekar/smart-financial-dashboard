import { Box } from "@mui/material";
import { styled } from "@mui/system";

/**
 * FlexBetween Component
 * A reusable styled utility component that extends MUI's 'Box'.
 * * Logic: 
 * Implements a flexbox layout with space-between distribution and vertical alignment.
 * This is used throughout the dashboard to align icons with text and buttons with titles.
 *
 */
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
