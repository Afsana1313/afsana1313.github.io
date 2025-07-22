import Content from "./component/Content";
import HeaderContent from "./component/HeaderContent";
export default function Home() {
  return (
    <div className="container">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <HeaderContent />
        <main className="right-container pt-24 lg:w-[52%] lg:py-24">
          <Content />
        </main>
      </div>
    </div>
  );
}
