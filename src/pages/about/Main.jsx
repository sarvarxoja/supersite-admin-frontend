import { AboutUs } from "./About";
import { AboutTeam } from "./Team";
import { Superiority } from "./Superiority";

export const MainAbout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12">
        <AboutUs />
        <Superiority />
        <AboutTeam />
      </div>
    </div>
  );
};
