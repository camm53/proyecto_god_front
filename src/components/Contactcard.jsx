import { useState, useEffect } from 'react';

export default function ContactCard() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Expose the setter through a static property
  ContactCard.toggle = () => {
    setIsVisible(prev => !prev);
  };

  // Store the setter for external access
  useEffect(() => {
    ContactCard.setIsVisible = setIsVisible;
    return () => {
      ContactCard.setIsVisible = null;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 right-0 mt-4 mr-4 p-6 bg-white rounded-lg shadow-lg z-50">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <div>
          <p className="text-gray-600">Email: example@email.com</p>
          <p className="text-gray-600">Phone: (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
}