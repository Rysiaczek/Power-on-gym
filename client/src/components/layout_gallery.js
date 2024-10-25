import "../styles/layout_gallery.css";

function LayoutGallery() {
  return (
    <div className="layout-gallery">
      <div className="title">
        <p>Siłownia i Fitness</p>
      </div>
      <div className="cont">
        <div className="gallery-element content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in
            incidunt quos laboriosam provident quasi, ducimus, cumque neque
            magnam tempore quibusdam voluptatem, iusto facilis dicta reiciendis
            qui at modi blanditiis.
          </p>
        </div>
        <div className="gallery-element">
          <img
            src={process.env.PUBLIC_URL + "/img/cart.jpg"}
            alt="cos"
            className="gallery-img"
          />
        </div>
        <div className="gallery-element">
          <img
            src={process.env.PUBLIC_URL + "/img/cart.jpg"}
            alt="cos"
            className="gallery-img"
          />
        </div>
        <div className="gallery-element">
          <img
            src={process.env.PUBLIC_URL + "/img/cart.jpg"}
            alt="cos"
            className="gallery-img"
          />
        </div>
        <div className="gallery-element">
          <img
            src={process.env.PUBLIC_URL + "/img/cart.jpg"}
            alt="cos"
            className="gallery-img"
          />
        </div>
        <div className="gallery-element more">
          <p>Więcej</p>
        </div>
      </div>
    </div>
  );
}

export default LayoutGallery;
