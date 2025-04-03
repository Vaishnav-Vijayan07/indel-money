
import Banner from "../../components/features/goldLoan/banner";
import GoldLoanCalculator from "../../components/features/home/GoldLoanCalculator";
import Goldloanstep from "../../components/features/goldLoan/goldloanstep";
import InstantHasslefree from "../../components/features/goldLoan/instantHasslefree";
import Services from "../../components/features/goldLoan/services";
import Scheme from "../../components/features/goldLoan/loanScheme";
import Faq from "../../components/features/goldLoan/faq";
export default function GoldLoan() {
    return (
        <>
            {/* Gold loan calculator contents*/}
            <Banner />

            {/* Gold loan calculator contents*/}
            <GoldLoanCalculator hideTitle={true} />

            {/* Gold loan steps */}

            <Goldloanstep />

            {/* instant hussle free */}

            <InstantHasslefree />

            {/* instant hussle free */}

            <Services />

            {/* Scheme */}

            <Scheme />

            {/* faq contents */}
            <Faq />
        </>
    );
}
