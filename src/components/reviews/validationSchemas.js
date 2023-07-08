import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  clientName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  clientAddress: Yup.string()
    .min(10, "Address Too Short!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

export const LoginSchema = Yup.object().shape({
  clientPhone: Yup.string()
    .min(8, "Phone Number Too Short!")
    .required("Required"),
  clientName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
  // email: Yup.string()
  // .email('Invalid email')
  // .required('Required'),
  // password: Yup.string()
  // .min(8, 'Password Too Short!')
  // .required('Required'),
});

export const ReviewSchema = Yup.object().shape({
  ReviewsStars: Yup.string()
    .required("Required"),
  ReviewTitle: Yup.string().required("Required"),
  ReviewBody: Yup.string().required("Required"),
});
