import ButtonSvg from "../assets/svg/ButtonSvg";
import { useServiceNavigation } from "./useServiceNavigation";

const Button = ({ className, href, onClick, children, px, white, contacto, serviceId, boton}) => {

  const { handleNavigation } = useServiceNavigation();

  const classes = `${boton || 'button'} relative inline-flex items-center justify-center h-11 
  bg-black border-2  transition-colors  
  ${px || 'px-7'} ${className || ''}`;

 

  const renderbutton = () => (
    <button className={classes} onClick={serviceId ? () => handleNavigation(serviceId) : onClick}>
      <span>{children}</span>
      {/* {ButtonSvg(white)} */}
      
    </button>
  );

  const renderlink=()=>(
    <a href={href} className={classes}>
        <span>{children}</span>
    </a>
  );

  return href ? renderlink():renderbutton();

};

export default Button




