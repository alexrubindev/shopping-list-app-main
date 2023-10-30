import { Box, Typography } from "@mui/material"
import SingleItem from "./components/single-item"
import { useItemQuery } from "./services/itemApi"
import Button from "~components/button"
import Loader from "~components/loader"
import AddItem from "./components/add-item"
import { useState } from "react"

function Item() {

    const {
        data = [],
        isLoading,
    } = useItemQuery({
        page: 0,
    })

    const [
        addItem,
        setAddItem
    ] = useState(false)

    const [
        id,
        setId
    ] = useState(null)

    const renderItems
        = data.map(({
            id,
            ...item
        }: any) => (
            <SingleItem
                key={id}
                id={id}
                setId={setId}
                setAddItem={setAddItem}
                {...item}
            />
        ))

    return (
        <>
            <Box
                sx={{
                    border: '0px solid red',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {!isLoading ?
                    <>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                border: '0px solid red',
                                width: '82.5%',
                                mt: 6,
                                mb: 2,
                            }}
                        >
                            <Typography
                                variant="h5"
                            >
                                Your Items
                            </Typography>
                            <Button
                                onClick={() =>
                                    setAddItem(true)
                                }
                                title="Add Item"
                            />
                        </Box>
                        {renderItems}
                    </>
                    :
                    <Loader
                        sx={{
                            mt: 20,
                        }}
                    />
                }
            </Box>
            <AddItem
                id={id}
                setId={setId}
                addItem={addItem}
                setAddItem={setAddItem}
            />
        </>
    )
}

export default Item