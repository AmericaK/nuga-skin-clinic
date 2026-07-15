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
  groupsTitle?: string; // heading above the grouped cards (defaults to laser wording)
  deviceGroups?: { concern: string; heading?: string; intro?: string; devices: { name: string; img?: string; desc: string; howImg?: string; gallery?: string[] }[] }[];
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
    deviceImg: "/laser-device.jpg",
    deviceGroups: [
      {
        concern: "Lifting",
        devices: [
          {
            name: "InMode Lifting (Mini FX + Forma)",
            img: "/laser-inmode.png",
            desc: "A dual radiofrequency system. Mini FX pairs gentle suction with high-frequency energy to reduce stubborn fat around the chin and jawline, while Forma warms the deeper skin to rebuild collagen and elastin — for a slimmer, firmer, brighter face.",
          },
          {
            name: "Shurink Lifting",
            img: "/laser-shurink.jpg",
            howImg: "/laser-shurink-how.jpg",
            desc: "A non-surgical HIFU lift. Focused ultrasound forms micro heat-coagulation points across the superficial dermis, deep dermis, and the SMAS layer, prompting collagen and elastic-fiber regeneration to firm and lift — full face (600 shots) or half face (300 shots), in about 15–20 minutes with no downtime.",
          },
        ],
      },
      {
        concern: "Acne & Scars",
        devices: [
          {
            name: "Scarlet RF",
            img: "/laser-scarlet.jpg",
            howImg: "/laser-scarlet-how.jpg",
            desc: "Short-pulse RF microneedling that increases skin density to firm and lift while treating active acne, acne scars, enlarged pores, and pigmentation. FDA-cleared, safe for every skin type, with minimal downtime.",
          },
          {
            name: "Noable Laser (1,450 nm)",
            img: "/laser-noable.jpg",
            howImg: "/laser-noable-how.jpg",
            desc: "Targets the sebaceous glands at the root of acne while stimulating collagen — calming breakouts, controlling oil, and softening acne scars. A built-in cooling device protects the skin's surface throughout.",
          },
          {
            name: "Laser Genesis",
            img: "/laser-genesis.jpg",
            desc: "Gently warms the dermis to stimulate fresh collagen — smoothing texture, softening fine lines, refining pores, and easing redness and acne scars, with no downtime.",
            gallery: ["/laser-genesis-r1.jpg", "/laser-genesis-r2.jpg", "/laser-genesis-r3.jpg"],
          },
          {
            name: "CO₂ Laser",
            img: "/laser-co2.jpg",
            desc: "Fractional CO₂ resurfacing vaporizes damaged tissue with precision to improve scars, texture, and lesions, while the controlled heat tightens skin and boosts collagen for a fresher look.",
          },
          {
            name: "Agnes RF",
            img: "/laser-agnes.jpg",
            howImg: "/laser-agnes-how.jpg",
            desc: "Precision RF microneedling that treats acne at its source and doubles as a non-surgical contouring tool for the jawline and under-eyes. Minimally invasive, safe for all skin tones, and quick to recover from.",
            gallery: ["/laser-agnes-r1.jpg"],
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
    summary: "Botox, fillers, thread lifts, Kybella and IV therapy — refined by our medical team.",
    about:
      "Our injectable menu is administered by our medical team for natural, balanced results: BOTOX\u00ae to relax expression lines, dermal fillers and Voluma to restore volume and contour, Kybella to sculpt beneath the chin, PDO thread lifts to lift sagging skin, and glutathione IV therapy for brightness from within.",
    goodFor: ["Expression lines", "Volume loss", "Jawline & contour"],
    groupsTitle: "Our injectable & IV treatments",
    deviceGroups: [
      {
        concern: "Wrinkle Relaxers",
        heading: "Relax expression lines.",
        devices: [
          {
            name: "Botox",
            img: "/inj-botox-areas.jpg",
            desc: "BOTOX\u00ae Cosmetic is an FDA-approved injectable that temporarily relaxes the muscles behind frown lines between the brows and crow's feet at the eyes. A highly purified protein smooths these dynamic lines at their source \u2014 the repeated squinting and frowning of everyday expression. Results typically appear within 24\u201348 hours and last up to about four months.",
            gallery: ["/inj-botox-ba.jpg"],
          },
        ],
      },
      {
        concern: "Dermal Fillers",
        heading: "Restore volume & contour.",
        devices: [
          {
            name: "Dermal Filler",
            img: "/inj-filler-ba.jpg",
            desc: "Dermal fillers are FDA-approved gels that smooth and add volume \u2014 softening nasolabial folds, plumping lips, restoring cheeks, and refining contours. Made largely from hyaluronic acid, a substance your skin naturally contains, they deliver immediate, natural-looking results tailored to each area.",
          },
          {
            name: "Voluma",
            img: "/inj-voluma-ba.jpg",
            desc: "JUV\u00c9DERM VOLUMA\u00ae XC is a hyaluronic-acid filler designed specifically for the cheeks and cheekbones. As fat and bone volume decline with age, the mid-face flattens and skin begins to sag; Voluma restores that lift and contour from a deeper plane than most fillers \u2014 with results that can last up to two years.",
          },
        ],
      },
      {
        concern: "Contouring & Lifting",
        heading: "Sculpt & lift.",
        devices: [
          {
            name: "Kybella",
            img: "/inj-kybella.jpg",
            desc: "KYBELLA\u00ae is the first FDA-approved injectable that permanently destroys fat cells beneath the chin \u2014 the \u201cdouble chin,\u201d or submental fullness. A short series of treatments gradually sculpts a clearer jawline and profile, with no surgery. Your provider maps a plan around your anatomy and goals.",
            gallery: ["/inj-kybella-ba1.jpg", "/inj-kybella-ba2.jpg"],
          },
          {
            name: "PDO Thread Lift",
            img: "/inj-thread.jpg",
            desc: "A PDO thread lift instantly lifts loose skin on the brows, cheeks, jowls, and neck \u2014 no surgery, minimal downtime. Fine absorbable sutures are placed under the skin to reposition sagging tissue, then dissolve over four to six months while stimulating your own collagen for a longer-lasting result.",
            gallery: ["/inj-thread-ba.jpg"],
          },
        ],
      },
      {
        concern: "IV Therapy",
        heading: "Glow from within.",
        devices: [
          {
            name: "Glutathione IV Push",
            img: "/inj-iv.jpg",
            desc: "Our glutathione IV push delivers a powerful antioxidant directly into the bloodstream, supporting the body's natural detox pathways and helping to brighten and even skin tone. It's a gentle, in-office treatment often chosen as part of a skin-radiance routine.",
            gallery: ["/inj-iv-ba.jpg"],
          },
        ],
      },
    ],
  },
  {
    slug: "ultherapy",
    name: "Ultherapy",
    img: "/t-ultherapy.jpg",
    col: 3,
    summary: "Ultrasound skin lifting for natural-looking results — no surgery, no downtime.",
    about:
      "Ultherapy uses focused ultrasound to reach the deep foundational layer addressed in a surgical lift, stimulating your own collagen and elastin. Real-time ultrasound imaging lets us see exactly where the energy is delivered — so it goes where it benefits you most.",
    goodFor: ["Brow, chin & neck lifting", "Loss of firmness", "Décolletage lines"],
    whatIs:
      "Ultherapy relies on ultrasound therapy to go deeper than other non-invasive treatments for collagen stimulation. It also leverages traditional ultrasound imaging, so we can see the layers of tissue being treated and deliver the energy precisely where it benefits you most.",
    deviceImg: "/ultherapy-device.jpg",
    whyImg: "/ultherapy-why.jpg",
    benefits: [
      "Lifts and tightens skin tissue",
      "Stimulates production of new collagen and elastin",
      "Lifts skin on the brows, neck and chin",
      "Treats the deep tissue planes like a modern facelift",
      "Counteracts gravity and sun exposure — with no downtime",
      "FDA-cleared to lift the neck, under-chin and brow, and to improve décolletage lines",
      "More than a million treatments delivered worldwide",
    ],
    treatmentAreas: [
      "Chin", "Cheeks", "Neck", "Brow", "Décolletage", "Chest", "Stomach", "Buttocks",
    ],
    faq: [
      { q: "How many treatments will I need?", a: "Most patients see visible results after a single session. Depending on the degree of skin laxity, some benefit from an additional session, and many choose a yearly follow-up to maintain their results." },
      { q: "Is Ultherapy surgery?", a: "No — it's non-invasive. Ultherapy lifts and tightens without incisions and without affecting the surface of your skin, so there's no downtime." },
      { q: "Is Ultherapy FDA-cleared?", a: "Yes. Ultherapy is FDA-cleared to non-invasively lift skin on the neck, under the chin and on the brow, and to improve lines and wrinkles on the décolletage." },
    ],
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
