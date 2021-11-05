import React from 'react';

const Loader = () => {
  return (
    <div className="preloader custom_loader">
      <div className="container">
        <div className="row cf">
          <div className="three col">
            <div className="loader" id="loader-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
