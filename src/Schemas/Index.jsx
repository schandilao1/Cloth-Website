// import * as  Yup from "yup";

// export const signUpSchema = Yup.object({
//     email: Yup.string().email().required("Enter The Email Is Required"),
//     Password: Yup.string()
//         .required("Enter The Password Is Required")
//         .matches(/^(?=.*[a-z])/, "Must Contain, One Lowercase")
//         .matches(/^(?=.*[A-Z])/, "Must Contain One Uppercase")
//         .matches(/^(?=.*[!@#\$%\^&\*])/, "Must Contain One Special Case Character")
//         .min(8, "Your password must be longer than 8 characters.")
//         .max(15)
// })