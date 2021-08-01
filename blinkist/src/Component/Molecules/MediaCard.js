import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CustomButton from '../Atoms/CustomButton'
import IconButton from "@material-ui/core/IconButton";
import { AccessTime, AccountBox, MoreHoriz } from "@material-ui/icons";
import { Grid } from "@material-ui/core";

import { moveBook } from "../../store/action"
import { useDispatch } from "react-redux";


function MediaCard(props) {
  const useStyles = makeStyles({
    root: {
      margin:10,
      maxWidth: 345,
      maxHeight:700
    },
    media: {
      height: 400,
    },
  });

  const classes = useStyles();
  const dispatch = useDispatch();
 

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.book.img_src}
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.book.book_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.book.author}
          </Typography>
          <ListItem >
         <ListItemIcon><AccessTimeIcon/></ListItemIcon> 
         <ListItemText><p>{props.book.time_left} - minutes read</p></ListItemText>
         </ListItem >

        </CardContent>
      </CardActionArea>
      <Grid item style={{ padding: "4px" }}>
          <CustomButton
            //style={styles.horiz}
            label="changestatus" placeholder="Change Status" variant="outlined"
            onClick={() => {
              dispatch(moveBook(props.book));
            }}
          >
            <MoreHoriz />
          </CustomButton>
        </Grid>
         
      
    </Card>
  );
}
export default MediaCard;
