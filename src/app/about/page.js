import AboutBanner from "../../components/features/about/AboutBanner";
import AboutFinacial from "../../components/features/about/AboutFinacial";
import AboutSupermarket from "../../components/features/about/AboutSupermarket";
import AboutMessage from "../../components/features/about/AboutMessage";
import Accolades from "../../components/features/about/Accolades";
import Indelvalues from "../../components/features/about/IndelValuesInfo";
import Investors from "../../components/features/about/InvestorsInfo";
import LifeIndel from "../../components/features/about/LifeIndelInfo";

// MOBILE_VERSION
import MobAboutFinacial from "../../components/features/about/MobAboutFinacial";
import MobAboutSupermarket from "../../components/features/about/MobAboutSupermarket";
import MobAboutMessage from "../../components/features/about/MobAboutMessage";
import MobAccolades from "../../components/features/about/MobAccolades";
import MobIndelvalues from "../../components/features/about/MobIndelValueBanner";
import MobInvestors from "../../components/features/about/MobInvestorsInfo";
import MobLifeIndel from "../../components/features/about/MobLifeIndelInfo";

async function fetchAboutData() {
  try {
    const response = await fetch("http://localhost:7700/api/web/about", {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();

    if (result.status === "success") {
      return { data: result.data, error: null };
    }
    return { data: null, error: result.message };
  } catch (error) {
    return { data: null, error: "Failed to about data" };
  }
}

export default async function About() {
  const { data, error } = await fetchAboutData();

  return (
    <>
      {/* Banner section */}
      <AboutBanner banners={data?.aboutBanner} />

      {/* Financial Partner section */}
      <div className="hidden sm:block">
        <AboutFinacial statsData={data?.statsData} />
      </div>
      <div className="block sm:hidden">
        <MobAboutFinacial />
      </div>

      {/* Financial Supermarket section */}
      <div className="hidden sm:block">
        <AboutSupermarket
          serviceImages={data?.serviceImages}
          sub_title={data?.aboutContent?.sub_title}
          description={data?.aboutContent?.service_description}
          title={data?.aboutContent?.service_title}
        />
      </div>
      <div className="block sm:hidden">
        <MobAboutSupermarket serviceImages={data?.serviceImages} />
      </div>

      {/* Message section */}
      <div className="hidden sm:block">
        <AboutMessage messages={data?.teamMessages} />
      </div>
      <div className="block sm:hidden">
        <MobAboutMessage messages={data?.teamMessages} />
      </div>

      {/* Accolades section */}
      <div className="hidden sm:block">
        <Accolades accolades={data?.accolades} />
      </div>
      <div className="block sm:hidden">
        <MobAccolades accolades={data?.accolades} />
      </div>

      {/* Indelvalues section */}
      <div className="hidden sm:block">
        <Indelvalues links={data?.quickLinks} />
      </div>
      <div className="block sm:hidden">
        <MobIndelvalues  />
      </div>

      {/* Investors section */}
      <div className="hidden sm:block">
        <Investors
          title={data?.aboutContent?.investors_title}
          buttonTitle={data?.aboutContent?.investors_button_title}
          buttonLink={data?.aboutContent?.investors_button_link}
          image1={data?.aboutContent?.investors_image_1}
          image2={data?.aboutContent?.investors_image_2}
          card1Title={data?.aboutContent?.investors_card1_title}
          card1SubTitle={data?.aboutContent?.investors_card1_sub_title}
          card2Title={data?.aboutContent?.investors_card2_title}
          card2SubTitle={data?.aboutContent?.investors_card2_sub_title}
          card3Title={data?.aboutContent?.investors_card3_title}
          card3SubTitle={data?.aboutContent?.investors_card3_sub_title}
          description={data?.aboutContent?.description}
        />
      </div>
      <div className="block sm:hidden">
        <MobInvestors
          title={data?.aboutContent?.investors_title}
          buttonTitle={data?.aboutContent?.investors_button_title}
          buttonLink={data?.aboutContent?.investors_button_link}
          card1Title={data?.aboutContent?.investors_card1_title}
          card1SubTitle={data?.aboutContent?.investors_card1_sub_title}
          card2Title={data?.aboutContent?.investors_card2_title}
          card2SubTitle={data?.aboutContent?.investors_card2_sub_title}
          card3Title={data?.aboutContent?.investors_card3_title}
          card3SubTitle={data?.aboutContent?.investors_card3_sub_title}
          description={data?.aboutContent?.description}
        />
      </div>

      {/* LifeAtIndel section */}
      <div className="hidden sm:block">
        <LifeIndel
          title={data?.aboutContent?.life_at_indel_title}
          description={data?.aboutContent?.life_at_indel_description}
          buttonText={data?.aboutContent?.life_at_indel_button_text}
          buttonLink={data?.aboutContent?.life_at_indel_button_link}
          lifeImages={data?.lifeAtIndelImages}
        />
      </div>
      <div className="block sm:hidden">
        <MobLifeIndel
          title={data?.aboutContent?.life_at_indel_title}
          description={data?.aboutContent?.life_at_indel_description}
          buttonText={data?.aboutContent?.life_at_indel_button_text}
          buttonLink={data?.aboutContent?.life_at_indel_button_link}
          lifeImages={data?.lifeAtIndelImages}
        />
      </div>
    </>
  );
}
