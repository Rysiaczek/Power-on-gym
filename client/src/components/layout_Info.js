import "../styles/layout_Info.css";

function LayoutInfo() {
  return (
    <div className="layout-info">
      <div className="cards-cont">
        <div class="card">
          <div className="card-img">
            <img
              src={process.env.PUBLIC_URL + "/img/cart.jpg"}
              class="cover-image"
              alt="cos"
            />
          </div>
          <div className="card_wraper">
            <p className="title">Trening Personalny</p>
            <p className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              officiis? Ducimus nam, in atque mollitia unde officia odit nobis,
              quam assumenda ullam facere. Nam expedita adipisci non facilis
              cumque itaque.
            </p>
            <a href="#" className="btn">
              Zobacz więcej
            </a>
          </div>
        </div>

        <div>
          <div class="card rev">
            <div className="card-img">
              <img
                src={process.env.PUBLIC_URL + "/img/cart.jpg"}
                class="cover-image"
                alt="cos"
              />
            </div>
            <div className="card_wraper">
              <p className="title">grafik i zajęcia</p>
              <p className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                officiis? Ducimus nam, in atque mollitia unde officia odit
                nobis, quam assumenda ullam facere. Nam expedita adipisci non
                facilis cumque itaque. Magnam eaque eligendi inventore rerum
                possimus exercitationem repellat dolorem. Temporibus odit animi,
                odio hic id eum quis atque consequuntur pariatur laborum!
                Tenetur, consectetur. Exercitationem cumque eveniet aperiam
                molestiae dignissimos magni.
              </p>
              <a href="#" className="btn">
                Zobacz więcej
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <div className="card-img">
              <img
                src={process.env.PUBLIC_URL + "/img/cart.jpg"}
                class="cover-image"
                alt="cos"
              />
            </div>
            <div className="card_wraper">
              <p className="title">plany treningowe i plany żywieniowe</p>
              <p className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                officiis? Ducimus nam, in atque mollitia unde officia odit
                nobis, quam assumenda ullam facere. Nam expedita adipisci non
                facilis cumque itaque. Magnam eaque eligendi inventore rerum
                possimus exercitationem repellat dolorem. Temporibus odit animi,
                odio hic id eum quis atque consequuntur pariatur laborum!
                Tenetur, consectetur. Exercitationem cumque eveniet aperiam
                molestiae dignissimos magni.
              </p>
              <a href="#" className="btn">
                Zobacz więcej
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutInfo;
// cos
