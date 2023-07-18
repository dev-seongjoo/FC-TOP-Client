import { useLocation } from "react-router-dom";
import ScheduleRegister from "../../components/Schedule/ScheduleRegister/ScheduleRegister";
import ScheduleList from "../../components/Schedule/ScheduleList/ScheduleList";

const SchedulePage = () => {
  const location = useLocation();
  const isRegisterPage = location.pathname === "/schedule/register";
  return <>{isRegisterPage ? <ScheduleRegister /> : <ScheduleList />}</>;
};

export default SchedulePage;
