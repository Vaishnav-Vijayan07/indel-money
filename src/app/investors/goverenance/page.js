import GoverenanceInfo from "../../../components/features/investors/GoverenanceInfo";
import { fetchCorporateGoverneceData } from "../../../lib/fetchCalls/fetchInvestors";

export default async function Goverenance() {
  const { contents, pdfItems } = await fetchCorporateGoverneceData()
  return (
    <>
      <GoverenanceInfo contents={contents} pdfItems={pdfItems} />
    </>

  );
}
