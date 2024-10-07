import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({className,href,onClick,children,px,white}) => {

  const classes=`button relative inline-flex items-center justify-center h-11 
  bg-black  border-2 border-solid border-s-3 transition-colors hover:text-color-4 
  ${px||'px-7'} ${className||''}` ;
    
  const renderbutton = ()=> (
    <button className={classes}>
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




