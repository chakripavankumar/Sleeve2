import AfterBigCardLeft from "./components/Card/AfterBigCardLeft";
import AfterBigCardRight from "./components/Card/AfterBigCardRight";
import AfterBigCardText from "./components/Card/AfterBigCardText";
import AfterRedirectText from "./components/Texts/AfterRedirectText";
import BigCard from "./components/Card/BigCard";
import Home from "./components/Home";
import ImmersiveCard from "./components/ImmersiveCard";
import Payment from "./components/Razorpay/Payment";
import RedirectToSonoama from "./components/Texts/RedirectToSonoama";
import Scrollableanime1 from "./components/Scrollable/Scrollableanime1";
import Scrollableanime2 from "./components/Scrollable/Scrollableanime2";
import Scrollableanime3 from "./components/Scrollable/Scrollableanime3";
import Scrollableanime4 from "./components/Scrollable/Scrollableanime4";
const App = () => {
  return (
    <body className="wrapper">
      <Home />
      <Payment />
      <RedirectToSonoama />
      <AfterRedirectText />
      <BigCard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <AfterBigCardLeft />
      <AfterBigCardRight />
      </div>
      <AfterBigCardText />
      <ImmersiveCard />
      <Scrollableanime1 />
      <Scrollableanime2 />
      <Scrollableanime3 />
      <Scrollableanime4 />    
    </body>
  );
};
export default App;
