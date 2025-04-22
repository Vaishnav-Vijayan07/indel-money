import Indelhistory from "../../components/features/history/Indelhistory";
import YearsInception from "../../components/features/history/YearsInception";
import MobYearsInception from "../../components/features/history/MobYearsInception";

export default function History() {
  return (
    <>
      {/* History section */}
      <Indelhistory />

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
