"use client";

import Image from "next/image";
import { useState } from "react";

/** First letters of the project name — the placeholder mark until a real
 *  screenshot exists at `image`. */
function monogram(title: string) {
  return title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** Renders the screenshot, falling back to the accent monogram when the file
 *  is missing or fails to load — so an absent or misnamed image degrades to
 *  the placeholder instead of a broken card.
 *
 *  Split into its own client component: the `onError` fallback is the only
 *  thing on the Projects section that needs to run in the browser, so keeping
 *  it here leaves the other ~250 lines of the grid as server-rendered markup. */
export default function ProjectThumb({
  title,
  image,
}: {
  title: string;
  image?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="project-monogram">{monogram(title)}</span>
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={`${title} screenshot`}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover object-top"
      onError={() => setFailed(true)}
    />
  );
}
