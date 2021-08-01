import React from 'react';
import Input  from '@material-ui/core/Input' ;
function InputField({variant,label,placeholder,type,onChange,value})
{
    return(
    <Input variant={variant} label={label} placeholder={placeholder} type={type} onChange={onChange} value={value}></Input>
    );
}
export default InputField;