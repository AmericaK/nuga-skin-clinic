// 시술 데이터 (홈 masonry + 상세 페이지 공용 소스)
// summary는 대표님 제공 문구. about/goodFor는 각 시술의 일반적·정확한 설명.
export type Treatment = {
  slug: string;
  name: string;
  kr: string;
  img: string;
  col: 1 | 2 | 3;
  summary: string;
  aboutEN: string;
  aboutKR: string;
  goodFor: string[];
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "thermage",
    name: "Thermage FLX",
    kr: "써마지 FLX",
    img: "/t-thermage.jpg",
    col: 1,
    summary: "Tighten skin, smooth wrinkles, and sculpt your body.",
    aboutEN:
      "Thermage FLX uses monopolar radiofrequency to gently heat the deeper layers of your skin, stimulating your body's own collagen. It's a non-invasive treatment that firms and contours the face and body — typically in a single session, with little to no downtime.",
    aboutKR:
      "써마지 FLX는 고주파(RF) 에너지로 피부 깊은 층을 자극해 콜라겐 재생을 유도합니다. 비침습적 시술로 얼굴과 바디의 탄력·윤곽을 잡아주며, 보통 1회 시술로 진행되고 일상 복귀가 빠릅니다.",
    goodFor: ["Sagging skin & jawline · 처진 피부·턱선", "Fine lines & wrinkles · 잔주름", "Face & body contouring · 얼굴·바디 탄력"],
  },
  {
    slug: "laser",
    name: "Laser Treatments",
    kr: "레이저 시술",
    img: "/t-laser.jpg",
    col: 1,
    summary: "Target pigmentation, acne scars, and more for clearer skin.",
    aboutEN:
      "Our laser treatments are tailored to your concern — from pigmentation and redness to acne scars and uneven tone. During your consultation we select the right laser and build a plan for your skin type.",
    aboutKR:
      "레이저 시술은 색소·홍조·여드름 흉터·톤 등 고민에 맞춰 진행합니다. 상담을 통해 피부 타입에 맞는 레이저와 계획을 정합니다.",
    goodFor: ["Pigmentation & melasma · 색소·기미", "Acne scars · 여드름 흉터", "Uneven tone & redness · 톤·홍조"],
  },
  {
    slug: "potenza",
    name: "Potenza RF",
    kr: "포텐자 RF",
    img: "/t-potenza.jpg",
    col: 2,
    summary: "Advanced skin revitalization with radiofrequency microneedling.",
    aboutEN:
      "Potenza combines microneedling with radiofrequency to remodel skin from within. It improves texture, pores, and scarring while tightening — and can be customized for nearly all skin types and areas.",
    aboutKR:
      "포텐자는 미세침(마이크로니들링)과 고주파(RF)를 결합해 피부를 안쪽부터 재건합니다. 결·모공·흉터 개선과 탄력에 효과적이며, 대부분의 피부 타입과 부위에 맞춰 조절할 수 있습니다.",
    goodFor: ["Enlarged pores & texture · 모공·피부결", "Acne scars · 여드름 흉터", "Skin tightening · 탄력"],
  },
  {
    slug: "injectables",
    name: "Injectables",
    kr: "주사 시술",
    img: "/t-injectables.jpg",
    col: 2,
    summary: "Botox and fillers to smooth lines and restore volume.",
    aboutEN:
      "Administered by our medical team, neuromodulators (Botox) soften expression lines while dermal fillers restore volume and contour. Our goal is natural, balanced results tailored to your features.",
    aboutKR:
      "의료진이 직접 시술합니다. 보톡스는 표정 주름을 완화하고, 필러는 볼륨과 윤곽을 채웁니다. 얼굴에 어울리는 자연스러운 결과를 목표로 합니다.",
    goodFor: ["Expression lines · 표정 주름", "Volume loss · 볼륨 저하", "Contour & balance · 윤곽·균형"],
  },
  {
    slug: "shurink",
    name: "Shurink Lifting",
    kr: "슈링크 리프팅",
    img: "/t-shurink.jpg",
    col: 3,
    summary: "Regenerate collagen and remove wrinkles.",
    aboutEN:
      "Shurink delivers focused ultrasound energy to the deep foundational layers of the skin — the layers addressed in a surgical lift. It regenerates collagen over time to lift and tighten, with little to no downtime.",
    aboutKR:
      "슈링크는 초음파(HIFU) 에너지를 피부 깊은 근막층까지 전달해 콜라겐 재생을 유도합니다. 시간이 지나며 리프팅·탄력 효과가 나타나고 회복 기간이 짧습니다.",
    goodFor: ["Loss of firmness · 탄력 저하", "Wrinkles · 주름", "Non-surgical lifting · 비수술 리프팅"],
  },
  {
    slug: "facials",
    name: "Facials & Lymphatic",
    kr: "페이셜 · 림프",
    img: "/t-facial.jpg",
    col: 3,
    summary: "Relax, rejuvenate, and detoxify with customized facials and massages.",
    aboutEN:
      "Customized facials cleanse, hydrate, and renew your skin, while lymphatic drainage massage helps reduce puffiness and support circulation — a restorative reset for skin and body.",
    aboutKR:
      "맞춤 페이셜로 피부를 정화·수분·재생하고, 림프 순환 마사지로 붓기 완화와 순환을 돕습니다. 피부와 몸을 회복시키는 관리입니다.",
    goodFor: ["Dull, tired skin · 칙칙·피로한 피부", "Puffiness · 붓기", "Relaxation & detox · 이완·디톡스"],
  },
];

export const BOOKING_URL = "https://www.vagaro.com/nugaskincareclinic";
