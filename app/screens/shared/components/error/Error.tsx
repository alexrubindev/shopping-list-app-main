import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Error({
    error = "",
    sx,
}: any) {

    return (
        <Typography
            variant='subtitle2'
            sx={{
                color:
                    '#DC3545',
                ...sx,
            }}
        >
            {error}
        </Typography>
    )
}

export default Error