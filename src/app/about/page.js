import AboutBanner from "../../components/features/about/AboutBanner";
import AboutFinacial from "../../components/features/about/AboutFinacial";
import AboutSupermarket from "../../components/features/about/AboutSupermarket";
import AboutMessage from "../../components/features/about/AboutMessage";
import Accolades from "../../components/features/about/Accolades";
import Indelvalues from "../../components/features/about/Indelvalues";
import Investors from "../../components/features/about/Investors";
import LifeIndel from "../../components/features/about/lifeIndel";

// MOBILE_VERSION
import MobAboutFinacial from "../../components/features/about/MobAboutFinacial";
import MobAboutSupermarket from "../../components/features/about/MobAboutSupermarket";
import MobAboutMessage from "../../components/features/about/MobAboutMessage";
import MobAccolades from "../../components/features/about/MobAccolades";
import MobIndelvalues from "../../components/features/about/MobIndelvalues";
import MobInvestors from "../../components/features/about/MobInvestors";
import MobLifeIndel from "../../components/features/about/MobLifeIndel";

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
      <div className="hidden sm:block">
        <Accolades />
      </div>
      <div className="block sm:hidden">
        <MobAccolades />
      </div>

      {/* Indelvalues section */}
      <div className="hidden sm:block">
        <Indelvalues />
      </div>
      <div className="block sm:hidden">
        <MobIndelvalues />
      </div>

      {/* Investors section */}
      <div className="hidden sm:block">
        <Investors />
      </div>
      <div className="block sm:hidden">
        <MobInvestors />
      </div>

      {/* LifeAtIndel section */}
      <div className="hidden sm:block">
        <LifeIndel />
      </div>
      <div className="block sm:hidden">
        <MobLifeIndel />
      </div>
    </>
  );
}
