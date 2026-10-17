type Motif =
  | "writing"
  | "notebook"
  | "clock"
  | "friends"
  | "letter"
  | "sky"
  | "lotus"
  | "cheetah";

const motifs: Record<string, Motif> = {
  "back-in-time": "clock",
  "lml-prarthana": "notebook",
  "a-community-of-friends": "friends",
  "letter-to-my-five-year-old-self-prasanna": "letter",
  "letter-to-my-five-year-old-self-kabiraj": "letter",
  "my-dream": "sky",
  "buddha-jayanti": "lotus",
  "if-i-could-be-born-as-an-animal": "cheetah",
};

export function motifForArticle(slug: string): Motif {
  return motifs[slug] ?? "writing";
}

function Scene({ motif }: { motif: Motif }) {
  return (
    <svg
      viewBox="0 0 260 210"
      className="h-auto w-full"
      aria-hidden="true"
    >
      <rect x="10" y="12" width="240" height="186" rx="32" fill="#fffdf8" />
      <rect
        x="10"
        y="12"
        width="240"
        height="186"
        rx="32"
        fill="none"
        stroke="#f0e0cc"
        strokeWidth="2"
      />
      <g transform="translate(130 108) scale(0.78) translate(-130 -108)">
        {motif === "writing" && <WritingScene />}
        {motif === "notebook" && <NotebookScene />}
        {motif === "clock" && <ClockScene />}
        {motif === "friends" && <FriendsScene />}
        {motif === "letter" && <LetterScene />}
        {motif === "sky" && <SkyScene />}
        {motif === "lotus" && <LotusScene />}
        {motif === "cheetah" && <CheetahScene />}
      </g>
    </svg>
  );
}

function WritingScene() {
  return (
    <g>
      <rect x="58" y="58" width="92" height="112" rx="8" fill="#d7f0ec" transform="rotate(-8 104 114)" />
      <rect x="78" y="48" width="96" height="116" rx="8" fill="#fde4e2" transform="rotate(6 126 106)" />
      <rect x="92" y="42" width="100" height="120" rx="10" fill="#fff" stroke="#013265" strokeWidth="2.5" />
      <path d="M110 68h64M110 84h52M110 100h60M110 116h40" stroke="#013265" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
      <circle cx="168" cy="132" r="8" fill="#f6c445" />
      <path d="M188 150l28 8-6 10-22-18z" fill="#be1e2d" />
      <rect x="186" y="146" width="34" height="8" rx="3" fill="#f6c445" transform="rotate(18 203 150)" />
    </g>
  );
}

function NotebookScene() {
  return (
    <g>
      <path d="M48 58h70c8 18 8 78 0 98H48c-6-20-6-78 0-98z" fill="#fff" stroke="#013265" strokeWidth="2.5" />
      <path d="M118 58h78c6 20 6 78 0 98h-78c8-20 8-78 0-98z" fill="#fffdf8" stroke="#013265" strokeWidth="2.5" />
      <path d="M118 58v98" stroke="#be1e2d" strokeWidth="4" strokeLinecap="round" />
      <path d="M62 82h40M62 96h34M62 110h38M62 124h28" stroke="#2a9d8f" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M136 82h46M136 96h40M136 110h44" stroke="#013265" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
      <path d="M168 128c8-14 22-8 18 4-6 4-14 2-18-4z" fill="#be1e2d" />
      <path d="M196 46l22 46" stroke="#f6c445" strokeWidth="7" strokeLinecap="round" />
      <path d="M214 44l8 10-12 2z" fill="#be1e2d" />
    </g>
  );
}

function ClockScene() {
  return (
    <g>
      <circle cx="78" cy="52" r="16" fill="#f6e7a8" />
      <circle cx="84" cy="50" r="12" fill="#fffdf8" />
      <circle cx="132" cy="112" r="58" fill="#fff" stroke="#013265" strokeWidth="4" />
      <circle cx="132" cy="112" r="4" fill="#be1e2d" />
      <path d="M132 112V74" stroke="#013265" strokeWidth="4" strokeLinecap="round" />
      <path d="M132 112l28 16" stroke="#be1e2d" strokeWidth="4" strokeLinecap="round" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <rect
          key={deg}
          x="130"
          y="60"
          width="4"
          height="8"
          rx="1"
          fill="#013265"
          transform={`rotate(${deg} 132 112)`}
        />
      ))}
      <path d="M196 64l6 8M210 78l-8 4" stroke="#f6c445" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function FriendsScene() {
  return (
    <g>
      <ellipse cx="130" cy="168" rx="78" ry="12" fill="#d7f0ec" />
      <Friend x={78} shirt="#013265" />
      <Friend x={130} shirt="#2a9d8f" />
      <Friend x={182} shirt="#be1e2d" />
      <path d="M96 124h22M148 124h22" stroke="#f3c7a1" strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

function Friend({ x, shirt }: { x: number; shirt: string }) {
  return (
    <g>
      <circle cx={x} cy={78} r="16" fill="#f3c7a1" />
      <circle cx={x - 5} cy={76} r="1.6" fill="#013265" />
      <circle cx={x + 5} cy={76} r="1.6" fill="#013265" />
      <path d={`M${x - 5} 84q5 5 10 0`} stroke="#be1e2d" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d={`M${x - 18} 108q18-16 36 0v36h-36z`} fill={shirt} />
    </g>
  );
}

function LetterScene() {
  return (
    <g>
      <path d="M188 48c18 8 28 4 34 16-16 6-28 20-30 34-10-16-16-34-4-50z" fill="#d7eef8" stroke="#013265" strokeWidth="2" />
      <path d="M214 58l16 10" stroke="#013265" strokeWidth="2" strokeLinecap="round" />
      <rect x="48" y="72" width="150" height="96" rx="12" fill="#fff" stroke="#013265" strokeWidth="2.5" />
      <path d="M48 84l75 48 75-48" fill="#fff8ef" stroke="#013265" strokeWidth="2.5" />
      <circle cx="123" cy="118" r="16" fill="#be1e2d" />
      <path d="M123 110c4-6 12-4 12 3 0 8-12 14-12 14s-12-6-12-14c0-7 8-9 12-3z" fill="#fff" />
    </g>
  );
}

function SkyScene() {
  return (
    <g>
      <rect x="28" y="36" width="204" height="140" rx="20" fill="#d7eef8" />
      <circle cx="78" cy="92" r="28" fill="#f6c445" />
      <path d="M40 132h180" stroke="#f3b183" strokeWidth="10" strokeLinecap="round" />
      <circle cx="176" cy="70" r="16" fill="#fffdf8" />
      <circle cx="184" cy="66" r="12" fill="#d7eef8" />
      <circle cx="150" cy="52" r="2.5" fill="#013265" />
      <circle cx="118" cy="46" r="2" fill="#013265" />
      <circle cx="168" cy="108" r="2" fill="#013265" />
      <rect x="108" y="118" width="36" height="24" rx="6" fill="#013265" />
      <circle cx="126" cy="130" r="7" fill="#7ec8e3" stroke="#fff" strokeWidth="2" />
      <rect x="140" y="124" width="10" height="6" rx="1" fill="#be1e2d" />
    </g>
  );
}

function LotusScene() {
  return (
    <g>
      <circle cx="168" cy="58" r="22" fill="#fff6d0" />
      <circle cx="168" cy="58" r="14" fill="#fff" />
      <ellipse cx="130" cy="150" rx="70" ry="14" fill="#d7f0ec" />
      {[0, 32, 64, 96, 128, 160, 192, 224].map((deg) => (
        <ellipse
          key={deg}
          cx="130"
          cy="118"
          rx="14"
          ry="32"
          fill={deg % 64 === 0 ? "#f3b7c0" : "#f7d0d6"}
          transform={`rotate(${deg} 130 132)`}
        />
      ))}
      <circle cx="130" cy="132" r="12" fill="#f6c445" />
    </g>
  );
}

function CheetahScene() {
  return (
    <g>
      <ellipse cx="130" cy="166" rx="74" ry="10" fill="#d7f0ec" />
      <path
        d="M58 108c-16-6-20-26-6-34"
        stroke="#e7b267"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="50" cy="72" r="4.5" fill="#013265" />
      <ellipse cx="112" cy="114" rx="52" ry="20" fill="#e7b267" />
      <ellipse cx="74" cy="118" rx="16" ry="16" fill="#e7b267" />
      <ellipse cx="158" cy="104" rx="14" ry="11" fill="#e7b267" />
      <circle cx="178" cy="94" r="14" fill="#e7b267" />
      <path d="M168 82l5 12 8-8z" fill="#c4843a" />
      <path d="M180 80l3 12 9-7z" fill="#c4843a" />
      <circle cx="184" cy="92" r="2.2" fill="#013265" />
      <path
        d="M186 95c6 3 11 2 14 0"
        stroke="#013265"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="192" cy="98" rx="2.4" ry="1.8" fill="#013265" />
      <circle cx="88" cy="106" r="4" fill="#013265" />
      <circle cx="106" cy="102" r="3.4" fill="#013265" />
      <circle cx="124" cy="108" r="4" fill="#013265" />
      <circle cx="100" cy="118" r="3" fill="#013265" />
      <circle cx="120" cy="122" r="2.6" fill="#013265" />
      <circle cx="80" cy="120" r="3" fill="#013265" />
      <path
        d="M76 130v20M98 132v18M122 130v20M146 126v22"
        stroke="#c4843a"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  );
}

export default function ArticleBanner({
  kicker,
  title,
  subtitle,
  motif = "writing",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  motif?: Motif;
}) {
  return (
    <section className="relative border-b border-[#f0e2cc] bg-[#fff6ea]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute left-4 top-4 h-16 w-24 sm:left-8" viewBox="0 0 96 56">
          <g fill="#fff">
            <ellipse cx="34" cy="32" rx="26" ry="14" />
            <ellipse cx="54" cy="26" rx="20" ry="12" />
            <ellipse cx="22" cy="28" rx="14" ry="10" />
          </g>
        </svg>
        <svg className="absolute right-6 top-5 h-14 w-14" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="16" fill="#f6c445" />
          <circle cx="28" cy="28" r="8" fill="#ffe9a0" />
        </svg>
        <svg className="absolute left-8 top-16 h-12 w-16" viewBox="0 0 64 48">
          <g transform="translate(8 6) rotate(-12 24 16)">
            <path d="M2 16 L36 4 L22 20 Z" fill="#fff" stroke="#013265" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M2 16 L22 20 L28 32 Z" fill="#d7eef8" stroke="#013265" strokeWidth="1.6" strokeLinejoin="round" />
          </g>
        </svg>
        <div className="absolute bottom-10 right-10 h-12 w-12 rounded-full bg-[#fde4e2]" />
      </div>
      <div className="container relative mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="order-2 min-w-0 lg:order-1">
            <p className="mb-5 inline-flex items-center rounded-full border border-[#f0e0cc] bg-white px-4 py-2 text-sm font-medium text-brandBlue">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 19l4-1 9-9-3-3-9 9-1 4z" fill="#f6c445" stroke="#013265" strokeWidth="1.6" />
                <path d="M14 6l3 3" stroke="#be1e2d" strokeWidth="1.6" />
              </svg>
              {kicker}
            </p>
            <h1 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-brandBlue md:text-4xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                {subtitle}
              </p>
            ) : null}
          </div>
          <div className="order-1 mx-auto w-full max-w-[280px] lg:order-2 lg:max-w-none">
            <Scene motif={motif} />
          </div>
        </div>
      </div>
    </section>
  );
}
