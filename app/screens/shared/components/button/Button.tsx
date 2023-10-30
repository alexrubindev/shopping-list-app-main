import {
    Button as MuiButton
} from '@mui/material';

function Button({
    title,
    onClick,
    variant = "contained",
    ...rest
}: any) {

    return (
        <MuiButton
            variant={variant}
            onClick={onClick}
            {...rest}
        >
            {title}
        </MuiButton>
    )
}

export default Button