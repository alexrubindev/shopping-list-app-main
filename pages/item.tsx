import { Metadata } from "next"
import MainLayout from "~layouts/main-layout"
import Item from "~screens/item"


export const metadata: Metadata = {
    title: 'Shopping Items',
    description: 'Shopping item posted by visitors',
}

function ItemPage() {

    return (
        <MainLayout>
            <Item />
        </MainLayout>
    )
}

export default ItemPage