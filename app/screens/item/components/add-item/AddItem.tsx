import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    Dialog,
    DialogActions,
    DialogTitle,
    Divider,
    IconButton,
    MenuItem,
    TextField,
    Typography
} from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '~components/button';
import Error from '~components/error';
import Loader from '~components/loader';
import { quantities } from '~config/constants';
import addItemSchema from '~screens/item/schema/add-item.schema';
import { useFindOneQuery, usePatchItemMutation, usePostItemMutation } from '~screens/item/services/itemApi';

function AddItem({
    id,
    setId,
    addItem,
    setAddItem,
}: any) {

    const defaultValues = {
        name: "",
        description: "",
        quantity: 0,
    }

    const [
        postItem,
        { isLoading }
    ] = usePostItemMutation()

    const [
        patchItem,
        {
            isLoading:
            editing
        }
    ] = usePatchItemMutation()

    const {
        data,
        isFetching:
        gettingItem,
        isSuccess,
    } = useFindOneQuery(
        {
            id,
        },
        {
            skip:
                !id,
        }
    )

    const methods
        = useForm({
            resolver: addItemSchema,
            defaultValues,
        })

    const {
        register,
        reset,
        formState: {
            errors
        },
        handleSubmit
    } = methods

    const handleClose = () => {
        setAddItem(false)
        setId(0)
        reset(defaultValues)
    }

    const handleAddItem
        = handleSubmit(async data => {

            let response: any

            if (id)
                response
                    = await patchItem({
                        ...data,
                        id
                    })
            else
                response
                    = await postItem(data)

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

            if (respData) {

                toast.success("Success!")
                handleClose()
            }
        })

    useEffect(() => {

        if (data)
            reset(data)

    }, [data])

    return (
        <Dialog
            onClose={handleClose}
            open={addItem}
            maxWidth='md'
            fullWidth={true}
        >
            <DialogTitle
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: '#FAFAFA',
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        color: '#5C6269'
                    }}
                >
                    SHOPPING LIST
                </Typography>
                <IconButton
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider />
            {!gettingItem ?
                <Box
                    sx={{
                        px: 3,
                        py: 2,
                    }}
                >
                    <TextField
                        {...register('name')}
                        fullWidth
                        label="Name"
                        variant="outlined"
                    />
                    <Error
                        error={errors?.name?.message || ""}
                        sx={{
                            mt: 1,
                            mb: 3,
                        }}
                    />
                    <TextField
                        {...register('description')}
                        fullWidth
                        label="Description"
                        multiline
                        rows={4}
                        variant="standard"
                    />
                    <Error
                        error={errors?.description?.message || ""}
                        sx={{
                            mt: 1,
                            mb: 3,
                        }}
                    />
                    <TextField
                        {...register('quantity')}
                        fullWidth
                        select
                        label="Quantity"
                    >
                        {quantities.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Error
                        error={errors?.quantity?.message || ""}
                        sx={{
                            mt: 1,
                            mb: 3,
                        }}
                    />
                </Box>
                :
                <Loader
                    sx={{
                        margin: '0 auto',
                        my: 5,
                    }}
                />
            }
            <DialogActions
                sx={{
                    px: 3,
                }}
            >
                <Button
                    title="cancel"
                    variant="text"
                    onClick={handleClose}
                />
                <Button
                    title="Save"
                    onClick={handleAddItem}
                    disabled={isLoading || editing}
                />
            </DialogActions>
        </Dialog>
    )
}

export default AddItem