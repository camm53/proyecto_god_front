import ButtonSvg from "../assets/svg/ButtonSvg";
import { useServiceNavigation } from "./useServiceNavigation";

const Button = ({ className, href, onClick, children, px, white, contacto, serviceId, boton }) => {
  const { handleNavigation } = useServiceNavigation();

  const classes = `${boton || 'button'} relative inline-flex items-center justify-center h-11 
  ${white ? 'bg-n-1 text-n-8 border-n-1' : 'bg-n-8 text-n-1 border-primary'} 
  border-2 font-sora font-medium tracking-wide transition-colors hover:bg-primary/90 hover:border-primary/90
  ${px || 'px-7'} ${className || ''}`;

  const renderButton = () => (
    <button 
      className={classes} 
      onClick={serviceId ? () => handleNavigation(serviceId) : onClick}
    >
      <span className="relative z-10">{children}</span>
      {ButtonSvg && <ButtonSvg white={white} />}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg && <ButtonSvg white={white} />}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;