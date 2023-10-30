import {
    CircularProgress
} from "@mui/material"

function Loader(props: any) {

    return (
        <CircularProgress
            {...props}
        />
    )
}

export default Loader