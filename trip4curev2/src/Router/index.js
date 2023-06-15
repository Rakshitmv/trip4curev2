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
import MedicalCenterInfoPages_1 from "../Pages/ViewMedicalCenterInfoPages/MedicalCenterInfoPages_1";
import MedicalCenterInfoPages_2 from "../Pages/ViewMedicalCenterInfoPages/MedicalCenterInfoPages_2";
import MedicalCenterInfoPages_3 from "../Pages/ViewMedicalCenterInfoPages/MedicalCenterInfoPages_3";
import MedicalCenterInfoPages_4 from "../Pages/ViewMedicalCenterInfoPages/MedicalCenterInfoPages_4";
import MedicalCenterInfoPages_5 from "../Pages/ViewMedicalCenterInfoPages/MedicalCenterInfoPages_5";
import MedicalCenterInfoPages_6 from "../Pages/ViewMedicalCenterInfoPages/MedicalCenterInfoPages_6";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import VerifyOtp from "../Pages/VerifyOtp/VerifyOtp";
import UserProfilePage from "../Pages/UserProfilePage/UserProfilePage";
import ViewAllDestination from "../Pages/ViewAllDestination/ViewAllDestination";
import Search from "../Pages/Search/Search";
import MedicalMenuBarServices from "../Pages/ViewMedicalCenterInfoPages/MedicalCenterMenuBar/MedicalMenuBarServices";
import MedicalMenuBarDoctors from "../Pages/ViewMedicalCenterInfoPages/MedicalCenterMenuBar/MedicalMenuBarDoctors";
import CancerTreatment from "../Pages/CancerTreatment/CancerTreatment";


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
    path: "/view-medical-center/medical-center-info-page_1",
    element: <MedicalCenterInfoPages_1 />
  },


  {
    path: "/view-medical-center/medical-center-info-page_1/medical-menu-bar-service",
    element: <MedicalMenuBarServices />
  },

    {
    path: "/view-medical-center/medical-center-info-page_1/medical-menu-bar-doctor",
    element: <MedicalMenuBarDoctors />
  },

  {
    path: "/view-medical-center/medical-center-info-page_1/medical-menu-bar-service/medical-menu-bar-doctor",
    element: <MedicalMenuBarDoctors />
  },
  
  {
    path: "/view-medical-center/medical-center-info-page_1/medical-menu-bar-service/medical-center-info-page_1",
    element: <MedicalCenterInfoPages_1 />
  },

  {
    path: "/view-medical-center/medical-center-info-page_1/medical-menu-bar-doctor/medical-menu-bar-service",
    element: <MedicalMenuBarServices />
  },
  
   {
    path: "/view-medical-center/medical-center-info-page_1/medical-menu-bar-doctor/medical-center-info-page_1",
    element: <MedicalCenterInfoPages_1 />
  },
    {
    path: "/view-medical-center/medical-center-info-page_2",
    element: <MedicalCenterInfoPages_2 />
  },

    {
    path: "/view-medical-center/medical-center-info-page_3",
    element: <MedicalCenterInfoPages_3 />
  },

    {
    path: "/view-medical-center/medical-center-info-page_4",
    element: <MedicalCenterInfoPages_4 />
  },

    {
    path: "/view-medical-center/medical-center-info-page_5",
    element: <MedicalCenterInfoPages_5 />
  },

    {
    path: "/view-medical-center/medical-center-info-page_6",
    element: <MedicalCenterInfoPages_6 />
  },

  {
    path: "/verify-account/:name",
    element: <VerifyAccount />
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
      path: "/reset-password",
      element: <ResetPassword /> 
    },
 
     {
      path: "/verify-otp",
      element: <VerifyOtp /> 
  } ,
     
     {
       path: "/view-all-announcement",
       element: <UserProfilePage />
  },
    {
      path: "/view-all-destination",
      element: <ViewAllDestination />
  },
  {
    path: "/search",
    element: <Search />
  },
  
  {
    path: "/cancer-treatment",
    element: <CancerTreatment />
  },
    
    ],
     { basename: '/trip4curev2' }
    );


  export default router;