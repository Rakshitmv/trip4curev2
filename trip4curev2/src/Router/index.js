import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import NewPassword from "../Pages/NewPassword/NewPassword";
import VerifyAccount from "../Pages/VerifyAccount/VerifyAccount";
import HospitalSignIn from "../Pages/HospitalSignIn/HospitalSignIn";
import HospitalSignUp from "../Pages/HospitalSignUp/HospitalSignUp";
import ContactUS from "../Pages/ContactUS/ContactUS";
import ViewSpeciality from "../Pages/ViewSpeciality/ViewSpeciality";
import ViewMedicalCenter from "../Pages/ViewMedicalCenter/ViewMedicalCenter";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "/user-sign-in",
      element: <SignIn />
    },
    {
      path: "/hospital-sign-in",
      element: <HospitalSignIn />
    },
    {
      path: "/sign-up",
      element: <SignUp />
    },
    {
      path: "/hospital-sign-up",
      element: <HospitalSignUp />
  },
    {
      path: "/contact-us",
      element: <ContactUS />
  },

  {
    path: "/view-speciality",
    element: <ViewSpeciality />
  },

  {
    path: "/view-medical-center",
    element: <ViewMedicalCenter />
  },
    {
      path: "/forgot-password",
      element: <ForgotPassword /> 
    },
    {
      path: "/new-password",
      element: <NewPassword /> 
    },
    {
      path: "/verify-account",
      element: <VerifyAccount /> 
    }
    ],
     { basename: '/trip4cureV2' }
    );


  export default router;