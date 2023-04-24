import { HoveredMenu, MouseCursor } from "./components/common";
import { About, Explore, Footer, Header, Menu } from "./components/modules";

export default function Home() {
  return (
    <main data-barba="container" className="main">
        <HoveredMenu/>
      <div className="main-wrap ">
        <Header />
        <About />
        <Menu />

        <Explore />
        <Footer />
      </div>
      <div className="data-change-color-main"></div>
    </main>
  );
}
