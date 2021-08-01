import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import InputField from '../Atoms/Input'
import TextField from '@material-ui/core/TextField';
/* <TextField label="author" placeholder="author name" value=""/>
          <TextField label="author" placeholder="author name" value=""/>
          <br/>
          <br/>
          <InputField label="author" placeholder="author name" value="" variant="outlined"/>
*/

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function BookForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    
  
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Book
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Book
        </DialogTitle>
        <DialogContent dividers>
        <TextField variant="outlined" label= "Title" type="text" value=""    
              placeholder="Enter Title" 
              />
            <br/><br/>
            <TextField variant="outlined" label= "Author name" type="text" value=""    
              placeholder="Author name" />
              <br/><br/>
            <TextField variant="outlined" label= "Time" type="Number" value=""    
              placeholder="Number" />
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
