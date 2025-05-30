import Link from "next/link";
import { Button } from "../ui/button";

export function SummaryHeader({ title }: { title: string }) {
  return (
    <div className="flex gap-4 mb-4 justify-between">
      <div></div>
      <div>
        <Link href="/dashboard">
          <Button
            variant={"link"}
            size="sm"
            className="group flex items-center gap-1 sm:gap-2 hover:bg-white/80 backdrop-blur-xs rounded-full transition-all duration-200 shadow-xs hover:shadow-md border border-rose-100/30 bg-rose-100 px-2 sm:px-3"
          >
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
