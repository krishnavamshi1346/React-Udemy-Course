import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MediaCard from '../Molecules/MediaCard'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    Media: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
 function NestedGrid() {
    const classes = useStyles();
  
    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={4}>
          <MediaCard title="Leveraged Learning" author="Danny Iny" time="15"image="https://images.blinkist.com/images/books/60ae77136cee0700084a2c50/1_1/470.jpg" buttonName="Reading"  visible="true"/>
          </Grid>
          <Grid item xs={4}>
          <MediaCard title="Hyper-Learning " author="Edward D. Hess" time="13"image="https://images.blinkist.com/images/books/609155fc6cee070007ccb3ad/1_1/470.jpg"/>
          </Grid>
          <Grid item xs={4}>
            <MediaCard title="The Price You Pay for College " author="Ron Lieber" time="12"image="https://images.blinkist.com/images/books/60827f6b6cee0700076a0fe6/1_1/470.jpg"/>
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
         
          
          
        </Grid>
      </div>
    );
 }
 export default NestedGrid;
  
