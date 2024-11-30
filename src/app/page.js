import NavbarComponent from "@/components/NavbarComponent";
import HomeComponent from "@/components/HomeComponent";
import HomeImage from "@/components/HomeImage";
import Tech from "@/components/Tech";

export default function Home() {
  return (
    <section className="">
      <NavbarComponent />
        <div className="flex h-[98vh]">
          <HomeComponent />
          <HomeImage />
        </div>
        <Tech />
    </section>
  );
}
