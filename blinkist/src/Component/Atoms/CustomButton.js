import React from 'react';
import Button from '@material-ui/core/Button';
function CustomButton({type,value,variant,color,label,onClick,endIcon,size}){
    return(
      <Button type={type} value={value} variant={variant} color={color} onClick={onClick}  size={size} >{label}{endIcon}</Button>
  );
}

export default CustomButton;

