import { useLocation } from "react-router-dom";

import setecalogo from "../myassets/setecalogo.png";
import {brainwave} from "../assets";
import {navigation} from "../constants";

const header = () => {
    const pathname= useLocation(); 

    const classes=`bg-s-1 fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b border-s-6 `;
    const banner=`flex  item-center px-5 lg:px-7.5 xl:px-10 py-8` ;
    const navsetup=`hidden fixed top-[5rem] left-0 bottom-0 right-0 bg-s-4 
    md:static md:flex md:mx-auto  text-s-9 md:bg-transparent`;
    // md:bg-transparent
    const navitems=`relative z-2 flex flex-col items-center justify-center m-auto md:flex-row`;
    const navitem=`block relative text-2xl px-6 md:-mr0.25 md:text-sm`;
    // `block relative text-2xl px-6 md:-mr0.25 md:text-sm `
    // `block relative text-2xl px-6 md:-mr0.25 md:text-sm ${item.url === pathname.hash ? 'z-2 md:text-s-7' :"md:text-s-7"}`
    
    const renderheader = (children) =>(
    <div className={classes}>
      <div className={banner}>
      <a className="block w-[8.5rem] xl-mr-8 md:w-[12rem]" href="#home">
        <img src={setecalogo} width={160} height={40} alt="seteca"/>
      </a>
      <nav className={navsetup}>
        <div className={navitems}>
          {navigation.map((item)=>(
            <a key={item.id} href={item.url} className={`block relative text-2xl px-6 md:-mr0.25 md:text-sm 
            ${item.url === pathname.hash ? 'z-2 md:text-s-7 ' :""}`}>
              {item.title}
            </a>
          ))}

        </div>
      </nav>
      </div>
    </div>
    
  );
    

    return renderheader()
}

export default header