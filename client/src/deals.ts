// ===========================================================================
// SPECIAL DEALS — add a new deal in 2 steps:
//   1) Upload the image to  client/public/  (same place as your other images)
//   2) Add one line to the DEALS array below: { img: "/deal-4.jpg", title: "..." }
// Newest deals look best at the top. Images show uncropped (any size works).
// ===========================================================================
export type Deal = {
  img: string;
  title?: string;   // optional caption under the image
};

export const DEALS: Deal[] = [
  { img: "/deal-4.jpg", title: "October Specials — limited time" },
  // { img: "/deal-5.jpg", title: "Next promotion" },
];

export const BOOKING_URL = "/contact";
