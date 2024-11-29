import { useState, useEffect } from 'react';
import { X, Phone, Copy, Check } from 'lucide-react'; 
import { socials } from '../constants';
import { parsePhoneNumberWithError } from 'libphonenumber-js'

export default function ContactCard() {

  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const FormattedPhoneNumber = ({ number }) => {
    try {
      const phoneNumber = parsePhoneNumberWithError(number, 'US')
      return phoneNumber.formatNational()
    } catch (error) {
      return number // fallback if parsing fails
    }
  }



  // Expose the setter through a static property
  ContactCard.toggle = () => {
    if (isVisible) {
      setIsVisible(false);
      setTimeout(() => setIsRendered(false), 200); // Match with transition duration
    } else {
      setIsRendered(true);
      setTimeout(() => setIsVisible(true), 10); // Small delay to allow transition to apply
    }
  };

  // Store the setter for external access
  useEffect(() => {
    ContactCard.setIsVisible = setIsVisible;
    return () => {
      ContactCard.setIsVisible = null;
    };
  }, []);

  if (!isRendered) return null;
  const sociales = socials.filter(social => social.title==="tel")

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50 
        transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        className={`relative w-80 bg-s-5 text-white p-8 rounded-lg shadow-lg 
          transform transition-transform duration-200 ${
            isVisible ? 'scale-100' : 'scale-95'
          }`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300"
          onClick={() => ContactCard.toggle?.()}
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="space-y-6 text-center">
          <h2 className="text-xl font-semibold">Agenda un servicio al numero:</h2>

          <div className="flex items-center justify-center space-x-2">
            <Phone size={20} />
            <span className="text-lg">{sociales.map(social => (
      <FormattedPhoneNumber  number={social.numero} />
    ))}</span>
    
          </div>

          <div className="pt-4">
            <p className="text-sm">o puedes agendar en linea por medio de</p>
            <a
              href="#"
              className="text-sm text-blue-400 hover:text-blue-300 underline"
            >
              este enlace
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}