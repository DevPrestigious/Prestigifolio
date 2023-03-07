import React from 'react';
import './style/marker.css';

const Marker = (props: any) => {
   const { color, name, url } = props;
   const handleClick = () => {
      window.open(url, '_blank');
      // I might use window.location.href = url;
      // as a way to make the website more effecient This is possible
      // becasue it takes the current website and just adds on to it
      // if I only add in the url of the marker the page address.
      // I hope this makes sense later.
   };
   return (
      <div>
         <div
            className="pin bounce"
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={name}
            onClick={handleClick}
         />
         <div className="pulse" />
      </div>
   );
};

export default Marker;
