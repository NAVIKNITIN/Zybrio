import { LoadingState } from "@/components/common/loading-state";

export default function RootLoading() {
  return (
    <div className="container-app py-24">
      <LoadingState message="Loading page..." size="lg" />
    </div>
  );
}
