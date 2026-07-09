export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 32"
        fill="none"
        className="h-6 w-[30px] text-fg"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M2 3 H8 C17 3, 21 12.5, 27 15.2" />
          <path d="M2 9.5 H8 C15 9.5, 19 13.5, 27 15.6" />
          <path d="M2 16 H27" />
          <path d="M2 22.5 H8 C15 22.5, 19 18.5, 27 16.4" />
          <path d="M2 29 H8 C17 29, 21 19.5, 27 16.8" />
        </g>
        <circle cx="33.5" cy="16" r="4" fill="currentColor" />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight text-fg">TrueNett</span>
    </span>
  );
}
