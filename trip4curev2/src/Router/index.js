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
import CardiacSurgery from "../Pages/CardiacSurgery/CardiacSurgery";
import CosemticSurgery from "../Pages/CosemticSurgery/CosemticSurgery";
import FertilityTreatment from "../Pages/FertilityTreatment/FertilityTreatment";
import { Neurology } from "../Pages/Neurology/Neurology";
import Destination1 from "../Pages/ViewAllDestination/AllDestinations/Destination1";
import ViewMedicalTourismGuide from "../Pages/ViewMedicalTourismGuide/ViewMedicalTourismGuide";
import ViewAnnouncement from "../Pages/ViewAnnouncement/ViewAnnouncement";
import AnnounceCard1 from "../Pages/ViewAnnouncement/AnnounceCards/AnnounceCard1";
import AnnounceCard2 from "../Pages/ViewAnnouncement/AnnounceCards/AnnounceCard2";
import AnnounceCard3 from "../Pages/ViewAnnouncement/AnnounceCards/AnnounceCard3";
import AnnounceCard4 from "../Pages/ViewAnnouncement/AnnounceCards/AnnounceCard4";
import AnnounceCard5 from "../Pages/ViewAnnouncement/AnnounceCards/AnnounceCard5";
import AnnounceCard6 from "../Pages/ViewAnnouncement/AnnounceCards/AnnounceCard6";
import ViewMedicalTourismInfoPage1 from "../Pages/ViewMedicalTourismGuide/ViewMedicalTourismInfoPage/ViewMedicalTourismInfoPage1";
import ViewMedicalTourismInfoPage2 from "../Pages/ViewMedicalTourismGuide/ViewMedicalTourismInfoPage/ViewMedicalTourismInfoPage2";
import ViewMedicalTourismInfoPage3 from "../Pages/ViewMedicalTourismGuide/ViewMedicalTourismInfoPage/ViewMedicalTourismInfoPage3";
import ViewMedicalTourismInfoPage4 from "../Pages/ViewMedicalTourismGuide/ViewMedicalTourismInfoPage/ViewMedicalTourismInfoPage4";
import ViewMedicalTourismInfoPage5 from "../Pages/ViewMedicalTourismGuide/ViewMedicalTourismInfoPage/ViewMedicalTourismInfoPage5";
import ViewMedicalTourismInfoPage6 from "../Pages/ViewMedicalTourismGuide/ViewMedicalTourismInfoPage/ViewMedicalTourismInfoPage6";


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
    path: "/view-medical-tourism-guide",
    element: <ViewMedicalTourismGuide />
 },

  {
    path: "/view-medical-tourism-guide/view-medical-tourism-info-page-1",
    element: <ViewMedicalTourismInfoPage1 />
  },
 
    {
    path: "/view-medical-tourism-guide/view-medical-tourism-info-page-2",
    element: <ViewMedicalTourismInfoPage2 />
  },

  {
    path: "/view-medical-tourism-guide/view-medical-tourism-info-page-3",
    element: <ViewMedicalTourismInfoPage3 />
  },

  {
    path: "/view-medical-tourism-guide/view-medical-tourism-info-page-4",
    element: <ViewMedicalTourismInfoPage4 />
  },

  {
    path: "/view-medical-tourism-guide/view-medical-tourism-info-page-5",
    element: <ViewMedicalTourismInfoPage5 />
  },

  {
    path: "/view-medical-tourism-guide/view-medical-tourism-info-page-6",
    element: <ViewMedicalTourismInfoPage6 />
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
  },
     
  {
    path: "/view-all-announcement",
    element: <ViewAnnouncement />
  },

  {
    path: "/view-all-announcement/announce-card-1",
    element: <AnnounceCard1 />
  },

  {
    path: "/view-all-announcement/announce-card-2",
    element: <AnnounceCard2 />
  },

  {
    path: "/view-all-announcement/announce-card-3",
    element: <AnnounceCard3 />
  },

  {
    path: "/view-all-announcement/announce-card-4",
    element: <AnnounceCard4 />
  },

  {
    path: "/view-all-announcement/announce-card-5",
    element: <AnnounceCard5 />
  },

  {
    path: "/view-all-announcement/announce-card-6",
    element: <AnnounceCard6 />
  },

  {
    path: "/view-all-destination",
    element: <ViewAllDestination />
  },

  {
    path: "/view-all-destination/AllDestinations/Destination1",
    element: <Destination1 />
  },

  {
    path: "/search",
    element: <Search />
  },
  
  {
    path: "/cancer-treatment",
    element: <CancerTreatment />
  },

  {
    path: "/cardiac-surgery",
    element: <CardiacSurgery />
  },

  {
    path: "/cosemtic-surgery",
    element: <CosemticSurgery />
  },

  {
    path: "/fertility-treatment",
    element: <FertilityTreatment />
  },

  {
    path: "/neurology",
    element: <Neurology />
  },
  
    
    ],
     { basename: '/trip4curev2' }
    );


  export default router;