import AboutBanner from "../../components/features/about/AboutBanner";
import AboutFinacial from "../../components/features/about/AboutFinacial";
import AboutSupermarket from "../../components/features/about/AboutSupermarket";
import AboutMessage from "../../components/features/about/AboutMessage";
// import Accolades from "../../components/features/about/accolades";
import Indelvalues from "../../components/features/about/indelvalues";
import Investors from "../../components/features/about/investors";
import Lifeindel from "../../components/features/about/lifeIndel";
import Accolades from "../../components/features/about/accolades";

import MobAboutFinacial from "../../components/features/about/MobAboutFinacial";
import MobAboutSupermarket from "../../components/features/about/MobAboutSupermarket";
import MobAboutMessage from "../../components/features/about/MobAboutMessage";

export default function About() {
  return (
    <>
      {/* Banner section */}
      <AboutBanner />

      {/* Financial Partner section */}
      <div className="hidden sm:block">
        <AboutFinacial />
      </div>
      <div className="block sm:hidden">
        <MobAboutFinacial />
      </div>

      {/* Financial Supermarket section */}
      <div className="hidden sm:block">
        <AboutSupermarket />
      </div>
      <div className="block sm:hidden">
        <MobAboutSupermarket />
      </div>

      {/* Message section */}
      <div className="hidden sm:block">
        <AboutMessage />
      </div>
      <div className="block sm:hidden">
        <MobAboutMessage />
      </div>

      {/* Accolades section */}
      {/* <Accolades /> */}

      {/* Indelvalues section */}
      {/* <Indelvalues /> */}

      {/* Investors section */}
      {/* <Investors /> */}

      {/* LifeAtIndel section */}
      {/* <Lifeindel /> */}
    </>
  );
}
