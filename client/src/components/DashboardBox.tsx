import { Box } from "@mui/material";
import { styled } from "@mui/system";

/**
 * DashboardBox Component
 * A reusable styled container that acts as the 'card' for all dashboard widgets.
 *
 * * Logic:
 * - Extends MUI's Box component.
 * - Dynamically accesses the custom 'theme' object to ensure color consistency.
 * - Implements a uniform border-radius and shadow for a modern 'Material' feel.
 */
const DashboardBox = styled(Box)(({ theme }) => ({
  // Accesses the custom light background color defined in theme.ts
  backgroundColor: theme.palette.background.light,

  // Rounds the corners for a softer, more modern interface
  borderRadius: "1rem",

  // Elevation: Creates visual depth through a custom multi-layered shadow.
  // This makes the widgets 'pop' against the main background.
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
}));

export default DashboardBox;
