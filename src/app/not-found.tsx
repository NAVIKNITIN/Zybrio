import Link from "next/link";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="container-app flex min-h-[60vh] items-center justify-center py-24">
      <div className="w-full max-w-md space-y-4 text-center">
        <EmptyState
          title="Page not found"
          description="The page you are looking for does not exist or was moved."
        />
        <Link href={ROUTES.home}>
          <Button>Back to home</Button>
        </Link>
      </div>
    </div>
  );
}
