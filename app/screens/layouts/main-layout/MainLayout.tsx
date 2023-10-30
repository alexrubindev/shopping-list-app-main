import Header from "~components/header"
import {
    Provider
} from "react-redux";
import store from "~store/index";

function MainLayout({
    children
}: any) {

    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default MainLayout