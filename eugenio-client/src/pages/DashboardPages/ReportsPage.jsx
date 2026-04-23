import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";
import {
  Typography,
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const enrollmentPeriods = [
  "Fall '22",
  "Spring '23",
  "Fall '23",
  "Spring '24",
  "Fall '24",
  "Spring '25",
];
const enrollmentCounts = [10, 25, 40, 55, 70, 85];

const departmentData = [
  { id: 0, value: 34, label: "Engineering" },
  { id: 1, value: 24, label: "Business" },
  { id: 2, value: 18, label: "Sciences" },
  { id: 3, value: 14, label: "Arts" },
  { id: 4, value: 10, label: "ICT" },
];

const gradeSeries = [{ data: [88, 91, 85, 93, 87], label: "Average GPA" }];

const faculties = ["Engineering", "Business", "Sciences", "Arts", "ICT"];

const kpis = [
  { label: "New Applications", value: "1,250" },
  { label: "Offer Rate", value: "72%" },
  { label: "Graduation Rate", value: "84%" },
  { label: "Course Completion", value: "91%" },
];

const ReportsPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      <Stack direction={{ xs: "column", lg: "row" }} spacing={3} sx={{ mb: 4 }}>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            borderRadius: "2.25rem",
            border: "2px solid #ddd",
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            Enrollment Trend
          </Typography>

          <LineChart
            xAxis={[
              {
                data: enrollmentPeriods,
                scaleType: "point",
              },
            ]}
            series={[
              {
                data: enrollmentCounts,
                label: "Students",
              },
            ]}
            height={320}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: 420,
            borderRadius: "2.25rem",
            border: "2px solid #ddd",
            p: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            Department Distribution
          </Typography>
          <PieChart
            series={[{ data: departmentData }]}
            width={250}
            height={320}
          />
        </Box>
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} spacing={3} sx={{ mb: 4 }}>
        <Box
          sx={{
            width: "100%",
            borderRadius: "2.25rem",
            border: "2px solid #ddd",
            p: 2,
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            Average GPA by Faculty
          </Typography>
          <BarChart
            series={gradeSeries}
            xAxis={[{ data: faculties, scaleType: "band", label: "Faculty" }]}
            width={700}
            height={320}
          />
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            width: "100%",
            maxWidth: 420,
            borderRadius: "2.25rem",
            overflow: "hidden",
            border: "2px solid #ddd",
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1">KPI Snapshot</Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Metric</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {kpis.map((kpi) => (
                <TableRow key={kpi.label}>
                  <TableCell>{kpi.label}</TableCell>
                  <TableCell align="right">{kpi.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
};

export default ReportsPage;
