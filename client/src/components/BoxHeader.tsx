import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

/**
 * Props Definition
 * @param title - Main heading for the widget
 * @param sideText - Highlighted metric or percentage (e.g., "+4%")
 * @param subtitle - Optional descriptive text below the title
 * @param icon - Optional icon element for branding/context
 */
type Props = {
  title: string;
  sideText: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

/**
 * BoxHeader Component
 * A standardized header used across all DashboardBox widgets to maintain 
 * a consistent UI/UX.
 */
const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();

  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      {/* LEFT SECTION: Icon and Titles */}
      <FlexBetween>
        {icon}
        <Box width="100%">
          {/* Main Title - Responsive typography using MUI variants */}
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          {/* Subtitle - Grayed out for visual hierarchy */}
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>

      {/* RIGHT SECTION: Side Metric */}
      {/* Highlighted in secondary color to draw the user's eye to growth/trends */}
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
