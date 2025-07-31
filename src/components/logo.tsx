import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Best Day Coaching Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7 text-primary"
      >
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 2a10 10 0 0 1 10 10" />
        <path d="M12 12v-2a4 4 0 0 0-4-4H4" />
      </svg>
      <span className="hidden font-headline text-xl font-bold text-foreground sm:inline-block">
        Best Day Coaching
      </span>
    </Link>
  );
}
