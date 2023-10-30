import {
    yupResolver
} from "@hookform/resolvers/yup"
import {
    object
} from "yup"
import {
    required_number_validator,
    required_validator
} from "~config/validators"

const addItemSchema = object().shape({
    name: required_validator('Name'),
    description: required_validator('Description'),
    quantity: required_number_validator('Quantity'),
})

export default yupResolver(addItemSchema)