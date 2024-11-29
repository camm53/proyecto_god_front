import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import setecalogo from "../myassets/setecalogo.png";
import setecalogoblanco from "../myassets/SETECA_ALLWHITE.png";
import {brainwave} from "../assets";
import {navigation} from "../constants";
import {servicios} from "../constants";
import Button from "./button";
import {HamburgerMenu} from "./design/Header";
import { useState,useRef,useEffect } from "react";
import MenuSvg from "../assets/svg/MenuSvg" ;
import { useServiceNavigation } from "./useServiceNavigation"; 

const useScrollBlock = () => {
  const scrollBlocked = useRef();
  const safeDocument = typeof document !== 'undefined' ? document : {};
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

    html.style.position = 'relative';
    html.style.overflow = 'hidden';
    body.style.position = 'relative';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';

    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};

const header = () => {
  const { handleNavigation } = useServiceNavigation();
    const pathname= useLocation();
    const contentRef = useRef(null);
    const navcontentRef = useRef(null);
    const parentref = useRef(null);
    const [opennav, closenav] = useState(false);
    const [scrolled, setScrolled] = useState(true);
    const [blockScroll, allowScroll] = useScrollBlock();
    const togglenav = () => {

    

      if (opennav){
        closenav(false);
        setScrolled(false);
        allowScroll();
        // enablePageScroll();
        
      }else{
        closenav(true);
        setAction(false)
        blockScroll();
        // disablePageScroll();
      }
    }
    const handleclick = () =>{
      if(!opennav)return;
      closenav(false);
      allowScroll();
      // enablePageScroll();
      if(enservicio){
        setAction(false);
      }
      handleclickservicios
    }
    const althandleclick = () =>{
      if(enservicio){
        setAction(false)
      }else{setAction(true)}
    }
    const [enservicio, setAction] = useState(false);
    const parentcontent = parentref.current;
    useEffect(() => {
      const content = contentRef.current;
      
      
      
      // Safari-friendly: Set to specific scrollHeight when opening, set to 0 when closing
      if (enservicio) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = '0px';
      }
      // if (opennav) {
      //   navcontent.style.maxHeight =`100%`;
      // } else{
      //   navcontent.style.maxHeight = `${parentcontent.offsetHeight}px`;
      // }

    }, [enservicio, opennav]);

    
    useEffect(() => {
      let timeoutId = null;
  
      const handleScroll = () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
  
        timeoutId = setTimeout(() => {
          setScrolled(!(window.scrollY > 50));
        }, .2);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up function
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, []);

    const handleMouseEnter = () => { window.innerWidth >= 768 ? setAction(true): undefined};
    const handleMouseLeave = () => { window.innerWidth >= 768 ? setAction(false): undefined};

    const classes=`bg-transparent fixed top-0 left-0 w-full z-40  
    ${pathname.pathname==="/" && !opennav && scrolled? "bg-transparent shadow-[inset_0_12rem_4rem_-5rem_rgba(0,0,0,0.4)] md:shadow-[inset_0_13rem_4rem_-5rem_rgba(0,0,0,0.4)] pb-[6rem] "
      :"border-b border-s-6 shadow-md"}`;
    const banner=` transition-colors duration-125 flex items-center justify-center  px-5 md:px-14  py-8 w-screen  ${pathname.pathname==="/" && !opennav && scrolled? "bg-transparent":"bg-s-1"} ` ;
    const navsetup=` ${opennav ? "flex md:border-none h-[100%] transition-all duration-150" :  `invisible h-15` } fixed top-[6.65rem] left-0 bottom-0 right-0 bg-s-1 
    md:static md:flex md:mx-auto text-s-9 md:bg-transparent md:visible ` ;
    // md:bg-transparent
    const navitems=` flex overflow-y-auto no-scrollbar md:flex-wrap relative z-2 
    flex flex-col items-start justify-start md:justify-center pt-[2rem] md:p-0 w-full h-full m-auto md:flex-row text-s-1/20 md:h-auto`;
    const navitem=`block relative text-2xl px-6 md:-mr0.25 md:text-sm`;
    
    const renderheader = (children) =>(

    <div className={classes}>
      <div  className={banner}>
        <div className="flex w-full justify-center items-center  max-w-[90rem]">
      <a onClick={handleclick} className="flex  items-center  w-[8.5rem] min-w-[8.5rem] xl-mr-8 md:w-[10rem] " href="/">
        <img  src={`${pathname.pathname==="/" && !opennav && scrolled? setecalogoblanco : setecalogo}`} width={160} height={40} className={`w-full h-auto object-contain 
          drop-shadow-[0_0_.05rem_rgba(255,255,255,1)]`} alt="seteca"/>
        
      </a>
      
      <nav  className={navsetup}>
        <div className={navitems}>
        
          {navigation.map((item)=> (
            
            <div className="w-full md:w-auto">
              <a key={item.id} href={item.url} onClick={handleclick} className={` relative text-2xl px-6 py-6 md:py-1 md:text-sm text-s-9 
              md:h-[2.6rem] md:flex  items-center justify-center 
              ${item.onlyMobile  ? 'md:hidden' :"" }
              ${item.title ==="Servicios"  ? 'hidden' :"block" }
              ${item.url === pathname.hash ? 'z-2 md:text-s-7 ':
                pathname.pathname==="/" && scrolled? "md:text-s-1/100 hover:md:text-s-1/80 hover:md:border-s-1 hover:md:border-b hover:md:boder-solid" : 
                "hover:md:text-s-5 hover:md:border-b hover:md:boder-solid hover:md:border-s-10" }`}
                onMouseEnter={item.title==="Servicios"?handleMouseEnter:null} 
                onMouseLeave={handleMouseLeave}>
              {item.title}
            </a> 
            <div className={`transition-all  ${opennav ? `duration-250` : "duration-0" } md:transition-none ${enservicio ? `border-l-[8px] border-s-11 md:border-none` : "" }`}>
            <button key={item.id}  onClick={althandleclick} className={`md:hidden relative text-2xl px-6 py-6 md:py-1 md:text-sm
             ${enservicio ? `text-s-11` : "text-s-9" } md:text-s-9
              md:h-[2.6rem]   items-center justify-center 
              ${item.onlyMobile  ? 'md:hidden' :"" }
              ${item.title ==="Servicios"  ? 'block' :"hidden" }
              ${item.url === pathname.hash ? 'z-2 md:text-s-7 ':
                pathname.pathname==="/" ? "md:text-s-1/100 hover:md:text-s-1/80 hover:md:border-s-1 hover:md:border-b hover:md:boder-solid" : 
                "hover:md:text-s-5 hover:md:border-b hover:md:boder-solid hover:md:border-s-10" }`}
                // onMouseEnter={item.title==="Servicios"?handleMouseEnter:null} 
                // onMouseLeave={handleMouseLeave}
                >
              {item.title}
            </button>
            
            {item.title === "Servicios" ? ( //aqui es el menu desplegable
              <div ref={contentRef} className={`transition-all duration-100 ${enservicio ? `block md:block ` : "  invisible" } md:fixed md:shadow-lg md:bg-sky-50 overflow-hidden`}
              >
                {servicios.map((item)=>(
                  <a key={item.id}  onClick={() =>{opennav? togglenav():""; handleNavigation(item.id)}} className={`block relative md:hover:bg-s-3 text-2xl px-11 py-6 md:py-0 md:px-6 md:text-sm text-s-9 
                  md:h-[2.6rem] md:flex  items-center ${item.onlyMobile  ? 'md:hidden' :"" }`}
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}>
              {item.title}
            </a>
          ))}</div> ) : null}</div>
          </div>
          ))}
          <div className="min-h-[6.65rem] md:hidden"></div>
        </div>
      </nav>
      <a href="#signup" className={` hidden button text-s-5 md:block mr-8
              ${pathname.pathname==="/" && scrolled? "md:text-s-1" : "" }`}>
        Crear cuenta
      </a>
      <Button className="hidden md:flex " href="#login">
        login
      </Button>
      <Button className="ml-auto md:hidden p-3" onClick={togglenav} px="px3" >
        <MenuSvg openNavigation={opennav}></MenuSvg>
      </Button>
      </div>
      </div>
      <div className={ `transition-all duration-100 w-full bg-s-1 ${opennav ? "flex md:border-none h-[100vh] " :  `h-0` } md:0 `}></div>
    </div>
    
  );
    

    return renderheader()
}

export default header