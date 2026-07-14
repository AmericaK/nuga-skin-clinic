// ===========================================================================
// SPECIAL DEALS — add a new deal in 2 steps:
//   1) Upload the image to  client/public/  (same place as your other images)
//   2) Add one line to the DEALS array below: { img: "/deal-2.jpg", title: "..." }
// Newest deals look best at the top. Images show uncropped (any size works).
// ===========================================================================
export type Deal = {
  img: string;
  title?: string;   // optional caption under the image
};

export const DEALS: Deal[] = [
  { img: "/deal-1.jpg", title: "Big Summer Event — limited time" },
  // { img: "/deal-2.jpg", title: "September Special" },
];

export const BOOKING_URL = "https://www.vagaro.com/nugaskincareclinic";
