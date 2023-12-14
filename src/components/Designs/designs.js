import React, { useState } from "react";
import "./designs.css";
import { MdFileDownload } from "react-icons/md";
import image1 from "../../assets/images/designs/images/bday_ntr_special.jpg";
import image2 from "../../assets/images/designs/images/ntr_bday.jpg";
import image3 from "../../assets/images/designs/images/bhargav_ram.jpg";
import image4 from "../../assets/images/designs/images/ceeded sultan ntr r1.jpg";
import image5 from "../../assets/images/designs/images/DOSTI_RRR.jpg";
import image6 from "../../assets/images/designs/images/ntr_neon_style.jpg";
import image7 from "../../assets/images/designs/images/ntr_beast.jpg";
import image8 from "../../assets/images/designs/images/ntr31.jpg";
import image9 from "../../assets/images/designs/images/nbk-bday.jpg";
import image10 from "../../assets/images/designs/images/bheem_poster.jpg";

const Designs = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <section id='designs'>
        <div className="text-[35px] text-smallTextColor flex items-center align-items-center justify-center my-8">
          <h1>My Designs</h1>
        </div>
        {loading && <p className="flex justify-center items-center bg-white px-30 py-6 loading overlay-mask">Loading...</p>}
        <div className="container1">
          {images.map((image, index) => (
            <div key={index} className="player">
              <div className="imgbox">
                <a
                  href={image}
                  download={`image-${index}`}
                  className="download-link"
                >
                  <img
                    src={image}
                    alt={`image-${index}`}
                    onLoad={handleImageLoad}
                    onClick={(e) => {
                      e.preventDefault();
                      openFullscreen(image);
                    }}
                  />
                  <div className="download-overlay">
                    <span className="download-text">
                      <MdFileDownload />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {fullscreenImage && (
          <div className="fullscreen-overlay" onClick={closeFullscreen}>
            <img
              src={fullscreenImage}
              alt="fullscreen"
              className="fullscreen-image"
            />
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <a href='https://drive.google.com/drive/folders/17w38SdBslgYnDnbqWlzQCaE2cEYtjcft?usp=drive_link'>
            <button className="btn-more" style={{ backgroundColor: "#8873ef", borderRadius: '8px', color: '#fff', fontSize: '19px' }}>Explore More..</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Designs;
