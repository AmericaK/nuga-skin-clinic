// Treatment data (shared by Home masonry + detail pages). English only.
export type ResultGroup = { title?: string; caption?: string; imgs: string[] };

export type Treatment = {
  slug: string;
  name: string;
  img: string;
  col: 1 | 2 | 3;
  summary: string;
  about: string;
  goodFor: string[];
  // Optional rich detail-page content (Wix-style layout)
  whatIs?: string;       // "What is X?" description
  deviceImg?: string;    // product/device image for the What-is section
  whyImg?: string;       // image for the "Why X?" section (shown uncropped)
  benefits?: string[];   // "Why X?" bullet list
  results?: ResultGroup[]; // Clinical Results (before/after groups)
  resultsGallery?: string[]; // flat before/after gallery (portrait images)
  treatmentAreas?: string[]; // "Treatment areas" chips
  faq?: { q: string; a: string }[]; // FAQ (collapsible)
  laserGroups?: { concern: string; intro?: string; devices: { name: string; img?: string; desc: string }[] }[];
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "thermage",
    name: "Thermage FLX",
    img: "/t-thermage.jpg",
    col: 1,
    summary: "Tighten skin, smooth wrinkles, and sculpt your body.",
    about:
      "Thermage FLX uses monopolar radiofrequency to gently heat the deeper layers of your skin, stimulating your body's own collagen. It's a non-invasive treatment that firms and contours the face and body — typically in a single session, with little to no downtime.",
    goodFor: ["Sagging skin & jawline", "Fine lines & wrinkles", "Face & body contouring"],
    whatIs:
      "Non-invasive radiofrequency (RF) therapy for the treatment of periorbital wrinkles and rhytids — including the upper and lower eyelids — non-invasive treatment of wrinkles, and temporary improvement in the appearance of cellulite.",
    deviceImg: "/thermage-device.png",
    whyImg: "/thermage-why.jpg",
    benefits: [
      "Tightens skin on your face, neck and/or body",
      "Smooths wrinkles by restructuring collagen",
      "Targets deep within your skin to remove lines more effectively",
      "Temporarily improves the appearance of cellulite",
      "Works in just one treatment",
      "Safe, effective, non-invasive and non-surgical",
      "Requires little recovery time",
      "Works on all skin types — and results last for years",
    ],
    results: [
      {
        title: "Face",
        caption:
          "Softened lines around the mouth, eyes and forehead; improved definition along the jawline and under the chin.",
        imgs: ["/thermage-r1.jpg", "/thermage-r2.jpg"],
      },
      {
        title: "Body",
        caption:
          "Improved contours and the appearance of crepey skin; smoother skin on the abdomen and legs.",
        imgs: ["/thermage-r3.jpg", "/thermage-r4.jpg"],
      },
      { imgs: ["/thermage-r5.jpg", "/thermage-r6.jpg"] },
    ],
  },
  {
    slug: "laser",
    name: "Laser Treatments",
    img: "/t-laser.jpg",
    col: 1,
    summary: "A full suite of medical lasers for lifting, acne & scars, and brightening.",
    about:
      "We run a range of medical-grade laser and RF platforms, each suited to a different concern. At your consultation we match the right device — or combination — to your skin and your goals.",
    goodFor: ["Pigmentation & melasma", "Acne scars", "Uneven tone & redness"],
    laserGroups: [
      {
        concern: "Lifting",
        devices: [
          {
            name: "InMode Lifting (Mini FX + Forma)",
            img: "/laser-inmode.png",
            desc: "A dual radiofrequency system. Mini FX pairs gentle suction with high-frequency energy to reduce stubborn fat around the chin and jawline, while Forma warms the deeper skin to rebuild collagen and elastin — for a slimmer, firmer, brighter face.",
          },
        ],
      },
      {
        concern: "Acne & Scars",
        devices: [
          {
            name: "Scarlet RF",
            img: "/laser-scarlet.png",
            desc: "Short-pulse RF microneedling that increases skin density to firm and lift while treating active acne, acne scars, enlarged pores, and pigmentation. FDA-cleared, safe for every skin type, with minimal downtime.",
          },
          {
            name: "Noable Laser (1,450 nm)",
            img: "/laser-noable.jpg",
            desc: "Targets the sebaceous glands at the root of acne while stimulating collagen — calming breakouts, controlling oil, and softening acne scars. A built-in cooling device protects the skin's surface throughout.",
          },
          {
            name: "Laser Genesis",
            img: "/laser-genesis.jpg",
            desc: "Gently warms the dermis to stimulate fresh collagen — smoothing texture, softening fine lines, refining pores, and easing redness and acne scars, with no downtime.",
          },
          {
            name: "CO₂ Laser",
            img: "/laser-co2.png",
            desc: "Fractional CO₂ resurfacing vaporizes damaged tissue with precision to improve scars, texture, and lesions, while the controlled heat tightens skin and boosts collagen for a fresher look.",
          },
          {
            name: "Agnes RF",
            img: "/laser-agnes.jpg",
            desc: "Precision RF microneedling that treats acne at its source and doubles as a non-surgical contouring tool for the jawline and under-eyes. Minimally invasive, safe for all skin tones, and quick to recover from.",
          },
        ],
      },
      {
        concern: "Brightening",
        devices: [
          {
            name: "Pico Laser",
            img: "/laser-pico.jpg",
            desc: "An ultra-short picosecond laser that shatters pigment — dark spots, melasma, and acne scars — with very little heat, so you get brighter, more even skin with minimal discomfort or downtime.",
          },
          {
            name: "IPL (Intense Pulsed Light)",
            img: "/laser-ipl.jpg",
            desc: "Delivers multiple wavelengths of light to treat larger areas quickly — fading sun damage, freckles, redness, rosacea, and uneven tone for clearer, brighter skin.",
          },
        ],
      },
    ],
  },
  {
    slug: "potenza",
    name: "Potenza RF",
    img: "/t-potenza.jpg",
    col: 2,
    summary: "Advanced skin revitalization with radiofrequency microneedling.",
    about:
      "Potenza combines microneedling with radiofrequency to remodel skin from within. It improves texture, pores, and scarring while tightening — and can be customized for nearly all skin types and areas.",
    goodFor: ["Enlarged pores & texture", "Acne scars", "Skin tightening"],
    whatIs:
      "Potenza is a radiofrequency microneedling system with several treatment modes, all built to address the common signs of aging — skin laxity most of all. Through controlled soft-tissue coagulation it tightens and firms the skin while prompting fresh collagen and elastin in the treated areas, leaving skin looking revitalized.",
    deviceImg: "/potenza-device.jpg",
    benefits: [
      "Pairs ultrafine microneedles with RF energy to wake up your skin's own collagen and elastin",
      "Tightens and firms skin that has lost its bounce",
      "Softens common signs of aging and helps reduce blemishes",
      "Works on all skin types, across the face and body, any time of year",
      "Fully customizable to your individual concerns",
      "Most sessions are done in 45 minutes or less",
    ],
    treatmentAreas: [
      "Full Face", "Forehead", "Crow's feet", "Upper Cheek", "Lower Eyes",
      "Lower Cheek", "Nose", "Upper & Lower Lip", "Chin", "Jawline",
      "Neck", "Décolletage", "Elbows", "Abdomen",
    ],
    resultsGallery: [
      "/potenza-r1.jpg", "/potenza-r2.jpg", "/potenza-r3.jpg",
      "/potenza-r4.jpg", "/potenza-r5.jpg", "/potenza-r6.jpg",
    ],
    faq: [
      { q: "Is this treatment right for me?", a: "Potenza can address a wide range of concerns on both the face and body. The surest way to know if it fits your goals is a quick consultation with our team." },
      { q: "Why add RF energy to microneedling?", a: "Radiofrequency prompts your body to produce noticeably more collagen and elastin than microneedling on its own — for a stronger revitalization result." },
      { q: "How long does a treatment take?", a: "It depends on the area, but most Potenza sessions are finished in about 45 minutes or less." },
    ],
  },
  {
    slug: "injectables",
    name: "Injectables",
    img: "/t-injectables.jpg",
    col: 2,
    summary: "Botox and fillers to smooth lines and restore volume.",
    about:
      "Administered by our medical team, neuromodulators (Botox) soften expression lines while dermal fillers restore volume and contour. Our goal is natural, balanced results tailored to your features.",
    goodFor: ["Expression lines", "Volume loss", "Contour & balance"],
  },
  {
    slug: "shurink",
    name: "Shurink Lifting",
    img: "/t-shurink.jpg",
    col: 3,
    summary: "Regenerate collagen and remove wrinkles.",
    about:
      "Shurink delivers focused ultrasound energy to the deep foundational layers of the skin — the layers addressed in a surgical lift. It regenerates collagen over time to lift and tighten, with little to no downtime.",
    goodFor: ["Loss of firmness", "Wrinkles", "Non-surgical lifting"],
  },
  {
    slug: "facials",
    name: "Facials & Lymphatic",
    img: "/t-facial.jpg",
    col: 3,
    summary: "Relax, rejuvenate, and detoxify with customized facials and massages.",
    about:
      "Customized facials cleanse, hydrate, and renew your skin, while lymphatic drainage massage helps reduce puffiness and support circulation — a restorative reset for skin and body.",
    goodFor: ["Dull, tired skin", "Puffiness", "Relaxation & detox"],
  },
];

export const BOOKING_URL = "https://www.vagaro.com/nugaskincareclinic";
