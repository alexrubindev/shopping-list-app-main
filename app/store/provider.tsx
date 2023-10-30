"use client";

import {
    Provider
} from "react-redux";
import store from "./index";

function Providers({
    children
}: any) {
    return (
        <Provider
            {...{ store }}
        >
            {children}
        </Provider>
    )
}

export default Providers