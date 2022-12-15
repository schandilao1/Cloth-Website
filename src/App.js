import React from 'react'
import {
  // Flex,
  // Image,
  // Spacer,
  // Text,
  // Drawer,
  // DrawerHeader,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
  // Button,
  // Link,
  // Box,
  // Divider,
  // SimpleGrid,
  // Heading,
  // ButtonGroup,
  // Grid,
  // GridItem
} from "@chakra-ui/react";
// import { FaBeer, FaArrowRight, FaAngleDown, FaHome, FaSistrix } from 'react-icons/fa';
import Sidebar from './Components/Sidebar'
import OurProduct from './Components/OurProduct';
import OurProductItems from './Components/OurProductItems';
import MidBanner from './Components/MidBanner';
import RegulerCloth from './Components/RegulerCloth';
import Souvenirs from './Components/Souvenirs';
import BeerGlassSlider from './Components/BeerGlassSlider';
// import { useFormik } from "formik";
// import { signUpSchema } from './Schemas/Index';
// import { WarningIcon } from '@chakra-ui/icons'


// const initialValues = {
//   email: "",
//   Password: ""
// };


function App() {
  // const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
  //   validationSchema: signUpSchema,
  //   initialValues: initialValues,
  //   onSubmit: (values, action) => {
  //     console.log(values);
  //     action.resetForm();
  //   }
  // })


  return (
    <>
      <Sidebar />
      <OurProduct />
      <OurProductItems />
      <MidBanner />
      <RegulerCloth />
      <Souvenirs />
      <BeerGlassSlider />
      {/* Form Validation Start */}
      {/* <Box w="50%" m="auto" bg="blackAlpha.900" mt={20} p={5} borderRadius="2xl" bgGradient='linear(to-r, pink.200, gray.300, yellow.400,)'>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="name" style={{ color: "white" }}>E-Mail</FormLabel>
            <Input style={{ color: "white" }} id="name" name='email' placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            {errors.email && touched.email ? <p style={{ color: "red" }}>{errors.email}</p> : null}
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <br />
          <FormControl>
            <FormLabel htmlFor="name" style={{ color: "white" }}>Password</FormLabel>
            <Input style={{ color: "white" }} id="Password" type="password" name='Password' placeholder="Enter Your Password"
              value={values.Password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Password && touched.Password ? <p style={{ color: "red" }}>{errors.Password}</p> : null}
          </FormControl>

          <Button
            mt={4}
            type="submit"
          >
            Login
          </Button>
        </form>
      </Box> */}
      {/* Form Validation End */}

    </>
  );
}

export default App;
