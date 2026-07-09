import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Eyebrow + headline + lede used at the top of most sections. */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-brand-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tightest text-fg sm:text-[2.5rem] sm:leading-[1.15]">
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-base leading-relaxed text-fg-mid ${
            align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
