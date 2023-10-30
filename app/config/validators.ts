import { number, string } from "yup"

const required_validator = (
    label: string
) =>
    string()
        .required(
            `${label} is required`
        )
const required_number_validator = (
    label: string
) =>
    number()
        .required(
            `${label} is required`
        )

export {
    required_validator,
    required_number_validator,
}