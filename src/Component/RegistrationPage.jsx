import React, { useEffect } from 'react';

const RegistrationPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16" style={{marginTop:'25px'}}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Delegate Registration</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <iframe 
            src="https://forms.zohopublic.in/fintrexmedia1/form/DelegateRegistrationFormEducationTomorrowConclaveA/formperma/mdDPPcuDgmdMnHQMAMGAoMg_7xZdOULUnN24dXfEyIE"
            width="100%" 
            height="1700" 
            frameBorder="0"
            title="Delegate Registration Form"
            className="rounded-lg"
          >
            Loading...
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;