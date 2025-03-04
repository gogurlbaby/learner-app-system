import Hero from "./hero/Hero";
import HomeRegister from "./home-register/HomeRegister";
import Solutions from "./solutions/Solutions";
import Stacks from "./stacks/Stacks";

export default function Home() {
  return (
    <div>
      <Hero />
      <Solutions />
      <Stacks />
      <HomeRegister />
    </div>
  );
}
