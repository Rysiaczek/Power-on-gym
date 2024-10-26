import Header from "./header";
import LayoutInfo from "./layout_Info";
import LayoutGallery from "./layout_gallery";
import LayoutShop from "./layout_shop";

import "../styles/main.css";

function Main() {
  return (
    <div>
      <Header />
      <LayoutInfo />
      <LayoutGallery />
      <LayoutShop />
    </div>
  );
}

export default Main;
