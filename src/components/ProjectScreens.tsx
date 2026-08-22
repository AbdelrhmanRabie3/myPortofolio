"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

/** First letters of the project name — the mark shown if the desktop capture
 *  is missing or fails to load. */
function monogram(title: string) {
  return title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export type ProjectScreensProps = {
  title: string;
  /** Live URL, rendered into the mock browser's address bar. */
  url: string;
  desktop: StaticImageData;
  tablet?: StaticImageData;
  mobile?: StaticImageData;
  /** Which corner the tablet/phone cluster hangs off. Always the outer edge of
   *  the row, so it leans away from the copy instead of crowding it. */
  side?: "left" | "right";
};

/** The device mock-up half of a project row: the desktop capture inside a
 *  browser chrome, with the tablet and phone captures of the same page
 *  overlapping one corner.
 *
 *  Client-side only because of the `onError` fallbacks — the rest of the
 *  Projects section stays server-rendered markup. */
export default function ProjectScreens({
  title,
  url,
  desktop,
  tablet,
  mobile,
  side = "left",
}: ProjectScreensProps) {
  const [desktopFailed, setDesktopFailed] = useState(false);
  const [tabletFailed, setTabletFailed] = useState(false);
  const [mobileFailed, setMobileFailed] = useState(false);

  const showTablet = Boolean(tablet) && !tabletFailed;
  const showMobile = Boolean(mobile) && !mobileFailed;
  const showCluster = showTablet || showMobile;

  return (
    <div className={`mission-stage${showCluster ? " has-devices" : ""}`}>
      <div className="browser-frame">
        <div className="browser-bar">
          <div className="browser-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="browser-url">{url}</span>
        </div>

        <div className="browser-screen">
          {desktopFailed ? (
            <div className="project-fallback">
              <span className="project-monogram">{monogram(title)}</span>
            </div>
          ) : (
            <Image
              src={desktop}
              alt={`${title} — desktop view`}
              sizes="(max-width: 1023px) 92vw, 620px"
              placeholder="blur"
              onError={() => setDesktopFailed(true)}
            />
          )}
        </div>
      </div>

      {showCluster && (
        <div
          className={`device-cluster ${side === "right" ? "is-right" : "is-left"}`}
        >
          {tablet && !tabletFailed && (
            <div className="tablet-frame">
              <div className="tablet-screen">
                <Image
                  src={tablet}
                  alt={`${title} — tablet view`}
                  sizes="160px"
                  onError={() => setTabletFailed(true)}
                />
              </div>
            </div>
          )}

          {mobile && !mobileFailed && (
            <div className="phone-frame">
              <div className="phone-screen">
                <Image
                  src={mobile}
                  alt={`${title} — mobile view`}
                  sizes="140px"
                  onError={() => setMobileFailed(true)}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
