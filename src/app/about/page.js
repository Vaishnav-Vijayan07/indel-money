import Banner from "../../components/features/about/AboutBanner";
import Finacial from "../../components/features/about/finacial";
import Supermarket from "../../components/features/about/supermarket";
import Message from "../../components/features/about/message";
// import Accolades from "../../components/features/about/accolades";
import Indelvalues from "../../components/features/about/indelvalues";
import Investors from "../../components/features/about/investors";
import Lifeindel from "../../components/features/about/lifeIndel";
import Accolades from "../../components/features/about/accolades";

export default function About() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Financial Partner section */}
      <Finacial />

      {/* Financial Supermarket section */}
      <Supermarket />

      {/* Message section */}
      <Message />

      {/* Accolades section */}
      <Accolades />

      {/* Indelvalues section */}
      <Indelvalues />

      {/* Investors section */}
      <Investors />

      {/* LifeAtIndel section */}
      <Lifeindel />
    </>
  );
}
