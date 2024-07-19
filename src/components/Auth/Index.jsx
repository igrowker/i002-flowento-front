import DiagonalBackground from "./DiagonalBackground";
import Header from "./Header";
import CustomSlider from "./CustomSlider";

function Index() {
  return (
    <div className="index-container">
      <DiagonalBackground />
      <div className="flex flex-col items-center justify-center font-sans lg:px-8">
        <Header />
        <div className="px-28">
          <CustomSlider />
        </div>
      </div>
    </div>
  );
}

export default Index;
