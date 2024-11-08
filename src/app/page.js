import NavbarComponent from "@/components/NavbarComponent";
import HomeComponent from "@/components/HomeComponent";
import HomeImage from "@/components/HomeImage";

export default function Home() {
  return (
    <section>
      <NavbarComponent />
        <div className="flex">
          <HomeComponent />
          <HomeImage />
        </div>
    </section>
  );
}
