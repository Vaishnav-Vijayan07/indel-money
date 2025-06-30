import LoadingCircleSpinner from "@/components/common/LoadingCircleSpinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999">
      <LoadingCircleSpinner />
    </div>
  );
}
