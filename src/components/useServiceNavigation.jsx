import { useNavigate } from "react-router-dom";

export const useServiceNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (serviceId) => {
    if (serviceId) {
      navigate(`/servicios?id=${serviceId}`, { replace: true });
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  return { handleNavigation };
};
