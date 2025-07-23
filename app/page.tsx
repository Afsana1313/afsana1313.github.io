import Content from "./component/Content";
import HeaderContent from "./component/HeaderContent";
export default function Home() {
  return (
    <div className="container mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <HeaderContent />
        <main className="right-container pt-24 lg:w-[52%] lg:py-24">
          <Content />
        </main>
      </div>
    </div>
  );
}
