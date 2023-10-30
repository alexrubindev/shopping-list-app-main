import {
    Box,
    Checkbox,
    FormControlLabel,
    IconButton,
    Typography
} from "@mui/material";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDeleteItemMutation } from "~screens/item/services/itemApi";
import toast from "react-hot-toast";

function SingleItem({
    id,
    name,
    description,
    deletedAt,
    setId,
    setAddItem,
}: any) {

    const [
        deleteItem,
        {
            isLoading:
            deleting
        }
    ] = useDeleteItemMutation()

    const handleEdit = () => {
        setId(id)
        setAddItem(true)
    }

    const handleDelete = async () => {

        let response
            = await deleteItem({ id })

        const {
            error,
            data: respData
        }: any = response || {}

        if (error)
            toast.error(
                error
                    ?.data
                    ?.message
            )

        if (respData)
            toast.success("Success!")

    }

    return (
        <Box
            sx={{
                border: '1px solid #DAE3EC',
                width: '80%',
                my: 1.5,
                p: 3,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <FormControlLabel
                control={<Checkbox />}
                label=""
            />
            <Box
                sx={{
                    flex: 1,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        textDecoration:
                            deletedAt ?
                                'line-through'
                                :
                                'unset'
                    }}
                >
                    {name}
                </Typography>
                <Typography
                    sx={{
                        color: '#7E7A7A',
                        textDecoration:
                            deletedAt ?
                                'line-through'
                                :
                                'unset'
                    }}
                >
                    {description}
                </Typography>
            </Box>
            <Box>
                <IconButton
                    onClick={handleEdit}
                >
                    <DriveFileRenameOutlineIcon />
                </IconButton>
                <IconButton
                    onClick={handleDelete}
                    sx={{
                        ml: 2,
                    }}
                >
                    <DeleteOutlineIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default SingleItem