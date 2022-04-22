import React, { FC } from 'react'
import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PopupError: FC = () => {
    return (
        <Collapse in={open}>
            <Alert
            severity="error"
            action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    setOpen(false);
                }}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            sx={{ mb: 2 }}
            >
            Close me!
            </Alert>
        </Collapse>
    )
}

export default PopupError