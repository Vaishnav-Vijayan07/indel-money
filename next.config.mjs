import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: "/apply-for-job",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/author/indel",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/life-at-indel-money",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/category/gold-loan",
        destination: "/gold-loan",
        permanent: true,
      },
      {
        source: "/gold-loans-near-me",
        destination: "/gold-loan",
        permanent: true,
      },
      {
        source: "/category/uncategorized",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/details-of-key-managerial-personnel",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/downloads",
        destination: "/investors/csr",
        permanent: false,
      },
      {
        source: "/hp-test",
        destination: "/",
        permanent: true,
      },
      {
        source: "/indel-remit",
        destination: "/",
        permanent: true,
      },
      {
        source: "/emptestimonial/:slug",
        destination: "/emptestimonial",
        permanent: true,
      },
      {
        source: "/great-place-to-work",
        destination: "/emptestimonial",
        permanent: true,
      },
      {
        source: "/ncd-issue",
        destination: "/past-ncd-issues",
        permanent: true,
      },
      {
        source: "/video-gallery",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/secured-bonds",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/secured-bonds/:slug",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/public-issue-of-ncd",
        destination: "/past-ncd-issues",
        permanent: true,
      },
      {
        source: "/public-issue-of-ncd/:slug",
        destination: "/past-ncd-issues",
        permanent: true,
      },
      {
        source: "/loan-against-property-3",
        destination: "/loan-against-property",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2021/07/Ombudsman-scheme-RBI-Circular.pdf",
        destination: "https://backend.indelmoney.com/uploads/ombudsman-files/1751283986082.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2021/07/Ombudsman-Scheme.pdf",
        destination: "/ombudsman",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2021/09/Ombudsman-Scheme.pdf",
        destination: "/ombudsman",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/2.CSR-POLICY-1.pdf",
        destination: "/ombudsman",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/3.CO-LENDING-POLICY.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751282780649.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/4.COVID-19-MORATORIUM-POLICY.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751282796201.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/5..MORATORIUM-POLICY-2.0.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751282819322.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Board-Meeting-Intimation.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/CODE-OF-CONDUCT-FOR-INDEPENDENT-DIRECTORS.pdf",
        destination: "https://backend.indelmoney.com/uploads/corporate-governance/1749645572934.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Interest-Payment-Intimation-01012022.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Interest-Payment-Intimation-01022022.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Interest-payment-intimation-March.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Interest-payment-intimation-to-BSE-01.12.2021.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Outcome-of-BM-12.02.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346891891.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Q3-Financial-Results_compressed.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Record-date-intimation-02122022033054.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Record-date-intimation-April-2022-1.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751350035604.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Record-date-intimation-to-BSE-01.12.2021.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751350226027.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Record-Date-Intimation-to-BSE.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/Record-Intimation-to-BSE-01.01.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751350185604.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/03/TERMS-AND-CONDITIONS-OF-APPOINTMENT-OF-INDEPENDENT-DIRECTORS.pdf",
        destination: "https://backend.indelmoney.com/uploads/corporate-governance/1749645613175.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/04/Interest-Payment_05-04-22.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/05/Interest-payment-confirmation-to-BSE-.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/05/Record-date-intimation.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/06/INDEL_KYC_Policy_Final_02_Aug_2021.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/BM-Intimation-26.04.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346787108.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/BM-Intimation-30.05.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346842743.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/BM-Outcome-26.04.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346787109.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/BM-Outcome-30.05.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346842744.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/CSR-report-2021-2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/csr-reports/1750402073840.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/Financial-result_Q4 2021-22.pdf",
        destination: "https://backend.indelmoney.com/uploads/quarterly-reports/1751343738012.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/Interest-Payment-date-intimation-May 2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349893174.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/Interest-Payment-July-2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349790150.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/Interest-payment-June-2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349836523.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/Record-date-intimation-July-2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349790149.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/Record-date-intimation-June-2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349836519.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/08/Record-date-intimation-May-2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349893173.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/09/Annual-Report-2018-19.pdf",
        destination: "https://backend.indelmoney.com/uploads/annual-reports/1751278502387.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/09/Annual-Report-2019-20.pdf",
        destination: "https://backend.indelmoney.com/uploads/annual-reports/1751278470969.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/09/Annual-Report-2020-21.pdf",
        destination: "https://backend.indelmoney.com/uploads/annual-reports/1751278414547.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/09/Annual-Report-2021-22.pdf",
        destination: "https://backend.indelmoney.com/uploads/annual-reports/1751278396302.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/09/Board-Meeting-Intimation-503-and-521.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/09/Financial-result.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/09/Interest-payment-date-intimation-August-2022.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/09/outcome.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/09/Record-date-intimation-August-2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349213626.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/12/Financial_Result_Sep 2022.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/BSE-Iintimation_28.10.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346494976.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/BSE-Initmation-07.11.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346568638.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/BSE-Intimation_01.09.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346355620.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/BSE-intimation_05.12.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346617435.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/BSE-intimation_18.01.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346660225.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/BSE-intimation_29.09.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346448275.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/BSE-intimation-17.08.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346298610.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Financial-results.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Interest payment date intimation_October 2022.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Interest-payment-date-intimation_December-2022.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Interest-payment-date-intimation-_-November-2022.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Meeting-outcome_09.12.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346617438.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Meeting-outcome_22.08.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346298614.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Meeting-outcome_24.01.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346660228.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Meeting-Outcome_29.09.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346448280.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Meeting-outcome-_06.10.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346448280.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Meeting-outcome-12.11.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346568638.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Meeting-Outcome-Intimation-04.11.2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346494978.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Record date intimation _ November 2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349417840.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Record-date-intimation_December-2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349459764.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Record-date-intimation_October-2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349370016.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/01/Record-date-intimation-_January-2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349497590.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/Acuite.pdf",
        destination: "https://backend.indelmoney.com/uploads/credit-ratings/1749645968969.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/CARE.pdf",
        destination: "https://backend.indelmoney.com/uploads/credit-ratings/1749645982591.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/Committees-of-the-Board.pdf",
        destination: "https://backend.indelmoney.com/uploads/corporate-governance/1749645676391.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/Composition-of-the-Board.pdf",
        destination: "https://backend.indelmoney.com/uploads/corporate-governance/1749645652855.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/CRISIL.pdf",
        destination: "https://backend.indelmoney.com/uploads/credit-ratings/1749646010124.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/Details-of-key-managerial-personnel.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/Interest-Payment-Date-Intimation_Sep-2022.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/Interest-payment-date-intimation-to-BSE_Jan-2023.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/Policy-on-loans-to-related-party.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751282876117.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/Record-date-intimation-to-BSE.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/Record-date-of-Intimation-Sep-2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751349295769.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/RPT-policy.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751282903120.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/02/Whistle-Blower-Policy.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751283633119.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/03/BSE-intimation_27.02.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346705488.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/03/Interest-payment-date-intimation-to-BSE.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/03/Meeting-outcome_03.03.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346705490.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/50-2BSE-intimation_18.04.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345229094.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/BSE-intimation_01.04.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751289887182.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/BSE-intimation_14.04.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751290065708.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/Interest-Payment-Confirmation.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/Meeting-outcome_08.04.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751289887183.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/Meeting-outcome_19.04.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751290065710.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/Meeting-outcome_20.04.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345274359.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/Quater-1_-574-Intimation_Revised.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/Record-date-intimation-to-BSE_Redemption.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/Record-date-intimation-to-BSE.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/Record-Date-Intimation.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/05/Auditors-Report.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/05/BSE-intimation_02.05.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751290163566.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/05/Covering-letter_BM-Initmation_Posepone.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/05/Indel Money-Limited-Prospectus.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/05/Indel-Money-Limited-Prospectus-20Sept2021unsigned.pdf",
        destination: "https://backend.indelmoney.com/uploads/ncd-reports/1751280549969.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/05/Interest-payment-date-intimation-to-BSE.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/05/Meeting-outcome_06.05.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751290163567.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/05/Meeting-outcome_28.05.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345477165.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/05/Record-date-intimation-to-BSE-May-2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751348559850.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/05/Redemption-payment-date-intimation-to-BSE.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/05/Shareholding-pattern-IML_31.03.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/corporate-governance/1749645734231.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/06/BSE-intimation_30.05.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345552010.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/06/Credit-Bulletin.pdf",
        destination: "https://backend.indelmoney.com/uploads/credit-ratings/1749646029822.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/06/Interest-payment-date-intimation-to-BSE-1.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/06/Meeting-outcome_02.06.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345552011.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/06/Record-date-intimation-to-BSE-1.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/07/BSE-intimation_23.06.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345594365.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/07/Interest-and-Priciple-payment-date-intimation-to-BSE.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/07/Meeting-outcome_28.06.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345594366.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/07/Record-date-intimation-to-BSE-2.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/08/BM-Outcome_12.08.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345699287.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/08/BSE-intimation_29.07.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345645729.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/08/BSE-Intimation-_03.08.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345699284.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/08/Financials-Quater1.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/08/Interest-payment-date-intimation-to-BSE.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/08/Meeting-outcome_03.08.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345645730.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/08/Quater-1_575-Payment.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/08/Record-date-intimation-to-BSE.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/AGM-BM-Intimation.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/Annual-Report-details-2022-2023_15.09.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/annual-reports/1751278303375.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/AR_21-22.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/BSE-intimation_04.09.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345824262.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/BSE-intimation_20.09.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345893372.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/CSR-Report-22-23.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/csr-reports/1750402209487.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/Indel-Money-Limited-Draft-Prospectus(sign)-I.pdf",
        destination: "https://backend.indelmoney.com/uploads/ncd-reports/1751280442824.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/IndelMoney-Prospectus26may2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/ncd-reports/1751280825069.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/INDELMONEYLIMITED-DRAFT-PROSPECTUS-16MAY2023-III_compressed.pdf",
        destination: "https://backend.indelmoney.com/uploads/ncd-reports/1751280909955.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/IndelMoneyLimited-DraftProspectus-II.pdf",
        destination: "https://backend.indelmoney.com/uploads/ncd-reports/1751280644108.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/Interest-payment-date-intimation-to-BSE-1.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/Meeting-outcome_08.09.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345824263.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/Meeting-outcome_26.09.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345893373.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/09/Record-date-intimation-to-BSE-1.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/10/BSE-Intimation_13.10.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345954556.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/10/Interest-payment-date-intimation-to-BSE_Merged.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/10/Meeting-outcome_20.10.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345954557.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/10/Meeting-Outcome-_30.09.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345774200.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/10/Q2_574_Intimation.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/10/Quater-2_575-Payment.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/10/Quater-3_-574-Intimation.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/11/BSE-intimation_21.11.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346050581.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/11/Covering-letter_BM-Initmation_06.11.2023.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/11/Financials-Quarter 2.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/11/Interest-payment-date-intimation-to-BSE.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/11/Meeting-outcome_27.11.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346050582.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/11/MGT-7_22-23.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/annual-returns/1751278758254.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/11/Record-date-intimation-to-BSE-1.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/11/Record-date-intimation-to-BSE.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/12/BM-Outcome_14.11.2023-1.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751345996894.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/12/BSE-intimation_02.12.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346099800.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/12/Interest-payment-date-intimation-to-BSE-1.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/12/Record-date-intimation-to-BSE-Revised.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/01/2__Indel-Money-Ltd_-Abridged_Jan-2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/01/Interest-paid-confirmation.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/01/Meeting-outcome_06.12.2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346099801.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/01/Record-Date-Intimation_Revised.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/02/ASSET-LIABILITY-MANAGEMENT-POLICY.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751283611284.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/02/BM-Initmation_Dec-Board-Meeting.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/02/BM-Outcome_14.02.2024.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751346171709.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/02/FS-with-Limited-review.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/02/Interest Rate Policy.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751283897433.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/02/Interest-paid-confirmation_Jan-24.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/02/KYC-AML-CFT-policy.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751283493992.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/02/NPA-POLICY.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751283855142.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/02/Policy-of-Stakeholders-Relationship-Committee.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751283669590.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/02/Record-date-intimation-to-BSE_Feb-2024-to-upload-1.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/02/RISK-MANAAGEMENT-POLICY.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/03/BSE Intimation_Record date (for April Interest)_Indel Money.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/03/Interest-paid-confirmation.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/04/Interest Payment confirmation.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/04/Quater_2_Payment.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/05/BSE intimation 2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/05/Interest Payment Confirmation to BSE _02_05_2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/05/Record date intimation to BSE_for May interest 2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/05/Record date intimation to BSE-(June).pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/06/BSE-Intimation-18.06.2024_IML.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751289717632.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/06/Financial-Result.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/06/Meeting-outcome_18.06.2024_Indel-Money.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751289717635.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/06/Outcome of BM _30May2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/07/2. Record date intimation to BSE-(July) -revised -Indel Money.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/08/1.-Interest-Payment-Confirmation-to-BSE-01050627-June-IML.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/08/4.-Record-date-intimation-to-BSE-July-04-23Indel-Money-for-August.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/08/5.-Interest-Payment-Confirmation-to-BSE-0119August-IML-1.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/08/6.-Record-date-intimation-to-BSE-August-02Indel-Money-for-September-1.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/08/BM Initmation August 09, 2024.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751288968906.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/08/Disclosure on Liquidity Risk/Public disclosure on liquidity Risk_March 2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/08/Financial Results June 2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/08/FY 2021-2022.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/csr-action-plans/1750402276491.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/08/FY 2022-2023.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/csr-action-plans/1750402308519.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/08/FY 2023-2024.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/csr-action-plans/1750402325551.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/08/Meeting Outcome August 09, 2024 - Quarter ended June 30, 2024.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751288968912.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/09/1.-Interest-Payment-Confirmation-to-BSE-02-September-5-September-IML.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/09/2.-Record-date-intimation-to-BSE-September-03Indel-Money-for-October.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/09/CSR-POLICY.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751282751453.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/09/Indel-Money-Limited-Prospectus -27092024-Unsigned.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/10/Abridged Prospectus.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/10/Indel Money-Limited-Prospectus-8102024- Signed.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/10/Interest Payment Confirmation to BSE 01.10.2024sd (1).pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/Compliance Policy.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751283972546.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/COVERING-LETTER_BM-INTIMATION_November.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/CSR Policy.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/ECL Policy.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284039526.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/Financial-Results-and-Annexures.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/ICAAP Policy.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284101056.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/Interest-Payment-Intimation_BSE_October.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/Outcome-Covering-11.11.2024.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751289343591.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/POLICY ON APPOINTMENT OF STATUTORY AUDITOR.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284244580.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/Policy on Resource Planning.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284306219.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/POLICY ON TRANSFER AND ACQUISITION OF LOAN EXPOSURES.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284344306.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/Record-Date-Intimation_-October.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/11/RISK MANAGEMENT POLICY.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284364089.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2024/12/Annual Report 2023-2024.pdf",
        destination: "https://backend.indelmoney.com/uploads/annual-reports/1751278219450.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/1.-Board-Meeting-Intimation_01.02.2025.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/2.-Outcome-of-the-Board-Meeting_01.02.2025_compressed.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751289426095.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/3.-Record-date-intimation_November-2024-1.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/4.-Interest-Payment-Confirmation-November-2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/5.-Record-Date-Intimation-December-2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/5th NCD Draft Prospectus.pdf",
        destination: "https://backend.indelmoney.com/uploads/ncd-reports/1751518189589.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/5th NCD Prospectus.pdf",
        destination: "https://backend.indelmoney.com/uploads/ncd-reports/1751518220185.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/6.-Interest-Payment-Confirmation-December2024__compressed.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/9.-Q3-Quarterly-result_2024-2025_compressed.pdf",
        destination: "https://backend.indelmoney.com/uploads/quarterly-reports/1751285294175.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/Auction-Policy-2.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751283930306.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/Disclosure-on-Liquidity-Risk-as-of-December-2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/Disclosure-on-Liquidity-Risk-as-of-June-2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/Disclosure-on-Liquidity-Risk-as-of-September-2024.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/Fair-Practice-Code.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751282925893.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/Fit-and-Proper-Criteria-Policy.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284434804.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/Investment-Policy.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284202802.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/Loan-policy.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284393900.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/Nomination-and-Remuneration-policy.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284229622.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/02/Policy-on-outsourcing-activities.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284422983.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/03/Customer-Grievance-Redressal-Policy_.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284018613.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/03/INDEL MONEY LIMITED - NCD IV PROSPECTUS.pdf",
        destination: "https://backend.indelmoney.com/uploads/ncd-reports/1751518138063.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/03/Internal-Guidelines-on-Corporate-Governance.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284150888.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/04/20250413_9_compressed-compressed.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/1.Record-Date_Intimation_January_2025.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/2.-Interest-Payment-Intimation_January_2025_compressed.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/3. Q4 Quarterly result_2024-2025.pdf",
        destination: "https://backend.indelmoney.com/uploads/quarterly-reports/1751285333781.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/3.-Record-Date_Intimation_February_2025_.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/4.-Interest-Payment-Intimation_February_2025_.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/5.-Record-Date_Intimation_March_2025.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/6.-Interest-Payment-Intimation-March_2025_compressed.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751286592321.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/7.-Record-Date_Intimation_April_2025.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/8.-Interest-Payment-Intimation_April_2025_compressed.pdf",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/BSE-intimation_April-05-2025.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751286463381.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/Meeting-outcome_11.04.2025.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/board-meetings/1751286463382.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/06/1.-Record-Date_Intimation_May_2025_compressed.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751286659789.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/06/2.-Interest_Payment_Intimation_May_2025_compressed.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751286659792.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/06/3.-Record-Date_Intimation_June_2025_compressed.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751286733923.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/06/4.-Interest_Payment_Intimation_June_2025.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/other-intimations/1751286733925.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/06/Online-Auction-Registration-Process.pdf",
        destination: "https://backend.indelmoney.com/uploads/investors/policies/1751284473343.pdf",
        permanent: true,
      },
      {
        source: "/careers/branch",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/career/customer-service-executive/",
        destination: "/career",
        permanent: true,
      },
    ];
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "7700",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "crm.intersmarthosting.in",
      },
      {
        protocol: "https",
        hostname: "backend.indelmoney.com",
      },
      {
        protocol: "https",
        hostname: "admin.indelmoney.com",
      },
      {
        protocol: "https",
        hostname: "indelmoney.com",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
    ],
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Existing alias
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };

    // Performance optimizations
    if (!dev && !isServer) {
      // Split chunks optimization
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        chunks: "all",
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };
    }

    return config;
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      "lodash",
      "date-fns",
      "lucide-react",
      "swiper",
      "react-leaflet",
      "react-intersection-observer",
      "leaflet",
      "leaflet.markercluster",
      "lightgallery",

      // Add your heavy packages here
    ],
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Environment variables
  env: {
    ANALYZE: process.env.ANALYZE,
  },
};

// Conditionally apply bundle analyzer
let finalConfig = nextConfig;

if (process.env.ANALYZE === "true") {
  try {
    const { default: withBundleAnalyzer } = await import("@next/bundle-analyzer");
    const bundleAnalyzer = withBundleAnalyzer({
      enabled: true,
    });
    finalConfig = bundleAnalyzer(nextConfig);
  } catch (error) {
    console.warn("Bundle analyzer not available:", error.message);
  }
}

export default finalConfig;

// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@": path.resolve(__dirname, "src"),
//     };
//     return config;
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "backend.indelmoney.com",
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "7700",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "crm.intersmarthosting.in",
//       },
//       {
//         protocol: "https",
//         hostname: "www.youtube.com",
//       },
//     ],
//   },
// };

// export default nextConfig;
