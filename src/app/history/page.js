import IndelHistory from "../../components/features/history/IndelHistory";
import YearsInception from "../../components/features/history/YearsInception";
import MobYearsInception from "../../components/features/history/MobYearsInception";

export default function History() {
  return (
    <>
      <IndelHistory />

      {/* Yearsinception section */}
      <div className="hidden sm:block">
        <YearsInception />
      </div>
      <div className="block sm:hidden">
        <MobYearsInception />
      </div>
    </>
  );
}
