import { useLocation } from "react-router-dom";
import setecalogo from "../myassets/setecalogo.png";
import {brainwave} from "../assets";
import {navigation} from "../constants";
import {servicios} from "../constants";
import Button from "./button";
import {HamburgerMenu} from "./design/Header";
import { useState,useRef,useEffect } from "react";
import MenuSvg from "../assets/svg/MenuSvg" ; 

const header = () => {
    const pathname= useLocation();
    const contentRef = useRef(null);
    const [opennav, closenav] = useState(false);
    const togglenav = () => {
      if (opennav){
        closenav(false)
      }else{
        closenav(true)
      }
    }
    const handleclick = () =>{
      closenav(false)
      if(enservicio){
        setAction(false)
      }
    }
    const althandleclick = () =>{
      if(enservicio){
        setAction(false)
      }else{setAction(true)}
    }
    const [enservicio, setAction] = useState(false);
    useEffect(() => {
      const content = contentRef.current;
      
      // Safari-friendly: Set to specific scrollHeight when opening, set to 0 when closing
      if (enservicio) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = '0px';
      }
    }, [enservicio]);

    

    const handleMouseEnter = () => setAction(true);
    const handleMouseLeave = () => setAction(false);

    const classes=`bg-s-1 fixed top-0 left-0 w-full z-50  
    ${pathname.hash==="#home"?"bg-transparent shadow-[inset_0_12rem_4rem_-5rem_rgba(0,0,0,0.4)] md:shadow-[inset_0_13rem_4rem_-5rem_rgba(0,0,0,0.4)] pb-[6rem] "
      :"border-b border-s-6 shadow-md"}`;
    const banner=`flex items-center px-5 lg:px-7.5 xl:px-10 py-8 w-screen ` ;
    const navsetup=`${opennav ? "flex md:border-none" : "hidden" } fixed top-[6.65rem] left-0 bottom-0 right-0 bg-s-1 
    md:static md:flex md:mx-auto text-s-9 md:bg-transparent` ;
    // md:bg-transparent
    const navitems=`flex md:flex-wrap relative z-2 flex flex-col items-start justify-start md:justify-center pt-[2rem] md:p-0 w-full h-full m-auto md:flex-row text-s-1/20 md:h-auto`;
    const navitem=`block relative text-2xl px-6 md:-mr0.25 md:text-sm`;
    
    const renderheader = (children) =>(

    <div className={classes}>
      <div className={banner}>
      <a onClick={handleclick} className="flex  items-center  w-[8.5rem] min-w-[8.5rem] xl-mr-8 md:w-[10rem]" href="#home">
        <img  src={setecalogo} width={160} height={40} className={`w-full h-auto object-contain 
          drop-shadow-[0_0_.05rem_rgba(255,255,255,1)]`} alt="seteca"/>
        
      </a>
      <nav className={navsetup}>
        <div className={navitems}>
          {navigation.map((item)=> (
            <div className="w-full md:w-auto">
              <a key={item.id} href={item.url} onClick={handleclick} className={` relative text-2xl px-6 py-6 md:py-1 md:text-sm text-s-9 
              md:h-[2.6rem] md:flex  items-center justify-center 
              ${item.onlyMobile  ? 'md:hidden' :"" }
              ${item.title ==="Servicios"  ? 'hidden' :"block" }
              ${item.url === pathname.hash ? 'z-2 md:text-s-7 ':
                pathname.hash==="#home" ? "md:text-s-1/100 hover:md:text-s-1/80 hover:md:border-s-1 hover:md:border-b hover:md:boder-solid" : 
                "hover:md:text-s-5 hover:md:border-b hover:md:boder-solid hover:md:border-s-10" }`}
                onMouseEnter={item.title==="Servicios"?handleMouseEnter:null} 
                onMouseLeave={handleMouseLeave}>
              {item.title}
            </a> 
            <button key={item.id}  onClick={althandleclick} className={`md:hidden relative text-2xl px-6 py-6 md:py-1 md:text-sm text-s-9
              md:h-[2.6rem]   items-center justify-center 
              ${item.onlyMobile  ? 'md:hidden' :"" }
              ${item.title ==="Servicios"  ? 'block' :"hidden" }
              ${item.url === pathname.hash ? 'z-2 md:text-s-7 ':
                pathname.hash==="#home" ? "md:text-s-1/100 hover:md:text-s-1/80 hover:md:border-s-1 hover:md:border-b hover:md:boder-solid" : 
                "hover:md:text-s-5 hover:md:border-b hover:md:boder-solid hover:md:border-s-10" }`}
                onMouseEnter={item.title==="Servicios"?handleMouseEnter:null} 
                onMouseLeave={handleMouseLeave}>
              {item.title}
            </button>
            {item.title === "Servicios" ? (
              <div ref={contentRef} className={`transition-all duration-250 ${enservicio ? `block md:block ` : "  invisible" } md:fixed md:shadow-lg bg-sky-50 overflow-hidden`}
              >
                {servicios.map((item)=>(
                  <a key={item.id} href={item.url} onClick={handleclick} className={`block relative md:hover:bg-s-3 text-2xl px-11 py-6 md:py-0 md:px-6 md:text-sm text-s-9 
                  md:h-[2.6rem] md:flex  items-center `}
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}>
              {item.title}
            </a>
          ))}</div> ) : null}</div>
          ))}
        </div>
      </nav>
      <a href="#signup" className={` hidden button text-s-5 md:block mr-8
              ${pathname.hash==="#home"? "md:text-s-1" : "" }`}>
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
    
  );
    

    return renderheader()
}

export default header