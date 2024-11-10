import Button from "./components/button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/header";
import setecalogo from "./myassets/setecalogo.png";
import Hometop from "./components/hometop";
import Homeservicios from "./components/homeservicios";


const App = ()=> {
  return (
    <>
      <div className=" " >
        <Header className="pt-[4.75rem] lg:pt-[5.25rem]"/>
        <Hometop/>
        <Homeservicios/>
        
      </div>
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-s-5" >
        <Button className="mt-10">
          3
        </Button>
        <Button className="mt-10" href="#login">
          something
        </Button>
        <Button className="mt-10" href="https://www.youtube.com/">
          something
        </Button>
      </div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
        <Button className="mt-10">
          something
        </Button>
        <Button className="mt-10" href="#login">
          something
        </Button>
        <Button className="mt-10" href="https://www.youtube.com/">
          something
        </Button>
      </div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
        <Button className="mt-10">
          something
        </Button>
        <Button className="mt-10" href="#login">
          something
        </Button>
        <Button className="mt-10" href="https://www.youtube.com/">
          something
        </Button>
      </div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
        <Button className="mt-10">
          something
        </Button>
        <Button className="mt-10" href="#login">
          something
        </Button>
        <Button className="mt-10" href="https://www.youtube.com/">
          something
        </Button>
      </div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
        <Button className="mt-10">
          something
        </Button>
        <Button className="mt-10" href="#login">
          something
        </Button>
        <Button className="mt-10" href="https://www.youtube.com/">
          something
        </Button>
      </div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
        <Button className="mt-10">
          something
        </Button>
        <Button className="mt-10" href="#login">
          something
        </Button>
        <Button className="mt-10" href="https://www.youtube.com/">
          something
        </Button>
      </div>
      {/* <ButtonGradient /> */}
    </>
  );
}

export default App;
