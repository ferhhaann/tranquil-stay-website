
import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2235596099256!2d76.90150081744385!3d8.567631700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bef6cc8ca3c3%3A0x46430e9bdc597258!2sKazhakkoottam%20Railway%20Station!5e0!3m2!1sen!2sin!4v1627288759000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Manzil Lounge Location Map"
      ></iframe>
    </div>
  );
};

export default Map;
