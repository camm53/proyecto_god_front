import { useLocation } from "react-router-dom";
import setecalogo from "../myassets/setecalogo.png";
import {brainwave} from "../assets";
import {navigation} from "../constants";
import Button from "./button";
import {HamburgerMenu} from "./design/Header";
import { useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg" ; 

const header = () => {
    const pathname= useLocation();
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
    }

    const classes=`bg-s-1 fixed top-0 left-0 w-full z-50  
    ${pathname.hash==="#home"?"bg-transparent shadow-[inset_0_12rem_4rem_-5rem_rgba(0,0,0,0.4)] md:shadow-[inset_0_13rem_4rem_-5rem_rgba(0,0,0,0.4)] pb-[6rem] "
      :"border-b border-s-6 shadow-md"}`;
    const banner=`flex items-center px-5 lg:px-7.5 xl:px-10 py-8 w-screen ` ;
    const navsetup=`${opennav ? "flex" : "hidden" } fixed top-[5rem] left-0 bottom-0 right-0 bg-s-4 
    md:static md:flex md:mx-auto text-s-9 md:bg-transparent` ;
    // md:bg-transparent
    const navitems=`flex-wrap relative z-2 flex flex-col items-center justify-center m-auto md:flex-row text-s-1/20 md:h-auto`;
    const navitem=`block relative text-2xl px-6 md:-mr0.25 md:text-sm`;
    
    const renderheader = (children) =>(

    <div className={classes}>
      <div className={banner}>
      <a onClick={handleclick} className=" flex  item-center  w-[8.5rem] min-w-[8.5rem] xl-mr-8 md:w-[10rem]" href="#home">
        <img  src={setecalogo} width={160} height={40} className={`w-full h-auto object-contain 
          drop-shadow-[0_0_.05rem_rgba(255,255,255,1)]`} alt="seteca"/>
        
      </a>
      <nav className={navsetup}>
        <div className={navitems}>
          {navigation.map((item)=>(
            <a key={item.id} href={item.url} onClick={handleclick} className={` block relative text-2xl px-6 md:-mr0.25 md:text-sm text-s-9 md:h-[2.6rem] md:flex  items-center justify-center
              ${item.onlyMobile  ? 'md:hidden' :"" }
              ${item.url === pathname.hash ? 'z-2 md:text-s-7 ':
                pathname.hash==="#home" ? "md:text-s-1/100 hover:md:text-s-1/80 hover:md:border-s-1 hover:md:border-b hover:md:boder-solid" : 
                "hover:md:text-s-5 hover:md:border-b hover:md:boder-solid hover:md:border-s-10" }`}>
              {item.title}
            </a>
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