import { FC } from "react";
import useGetUser from "./api/hooks/useGetUser";
import axios from "axios"
import Onboarding from "./pages/onboarding";
import Homepage from "./pages/HOMEPAGE";
import Homepage_3 from "./pages/HOMEPAGE_3";
import Homepage_2 from "./pages/HOMEPAGE_2";
import Nftpage from "./pages/NFT";
import Stackpage from "./pages/Stack";
import Notificationpage from "./pages/NOTIFICATION";
import ICO_3page from "./pages/ICO_3";
import ICO_4page from "./pages/ICO_4";
import ICO_5page from "./pages/ICO_5";
import { Outlet } from "react-router-dom";

export const App: FC = () => {

    


    const {user, isLoading, isError, error} = useGetUser()
  
    if (isLoading) {
      return (
        <div>Loading</div>
      )
    }
  
    if (isError) {
      if (axios.isAxiosError(error) && error.response) {
        const statusCode = error.response.status;
  
        if (statusCode === 404) {
          return <Onboarding/>
        }
      }
    }
    
    return (
      <div>
        <div>
          <Outlet context={user}/>
          <Homepage/>
          <Homepage_3/>
          <Nftpage/>
          <Stackpage/>
          <Notificationpage/>
          <ICO_3page/>
          <ICO_4page/>
          <ICO_5page/>
          <Homepage_2/>
        </div>
      </div>
    );
  };