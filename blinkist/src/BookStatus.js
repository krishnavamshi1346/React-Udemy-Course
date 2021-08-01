import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import MediaCard from "./Component/Molecules/MediaCard";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function BookStatus() {
  const state = useSelector((state) => state.books);
  console.log(state);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="white" i>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="secondary"
          centered
        >
          <Tab label="CURRENTLY READING" indicatorColor="green" />
          <Tab label="FINISHED" indicatorColor="green" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container direction="row" spacing={0}>
          {state.reading.map((item) => (
            <Grid item>
              <MediaCard book={item} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container item>
          {state.finished.map((item) => (
            <Grid item>
              <MediaCard book={item} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </div>
  );
}
