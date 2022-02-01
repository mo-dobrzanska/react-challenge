import React from 'react';
import { Button } from '../atoms/Button';

export const Buttons = ({children, onClick}) => {
    return (
        <Button 
            variant={'contained'} 
            color={'primary'}
            disabled={'false'} 
            onclick={onClick} 
            hover active>
            {children}
        </Button>
    )
}