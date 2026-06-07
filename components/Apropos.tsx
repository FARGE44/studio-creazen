import Image from "next/image";

const values = [
  { icon: "🌍", title: "Nomade", desc: "Je me déplace partout à Montréal et au Québec" },
  { icon: "🧘", title: "Zen & Thérapeutique", desc: "Inspirée de l'art-thérapie et de la pleine conscience" },
  { icon: "✨", title: "Pour tous", desc: "Aucune expérience artistique requise" },
];

export default function Apropos() {
  return (
    <section id="apropos" className="py-24 px-8 md:px-16" style={{ background: "var(--warm-white)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

        {/* Photo mosaic */}
        <div className="reveal relative">
          {/* Decorative circle */}
          <div
            className="absolute -top-6 -left-6 w-[90px] h-[90px] rounded-full z-0"
            style={{ background: "var(--sand)" }}
          />
          {/* Mosaic grid */}
          <div className="relative z-10 grid grid-cols-2 gap-3 rounded-[20px] overflow-hidden" style={{ gridTemplateRows: "200px 200px" }}>
            {/* Large left photo */}
            <div className="row-span-2 overflow-hidden relative" style={{ background: "var(--sand)" }}>
              <Image
                src="/atelier-photos.png"
                alt="Ateliers Studio Creazen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Top right */}
            <div
              className="overflow-hidden"
              style={{ background: "linear-gradient(135deg, var(--blue-light), var(--blue-mid))" }}
            />
            {/* Bottom right */}
            <div
              className="overflow-hidden"
              style={{ background: "linear-gradient(135deg, var(--sand-mid), var(--gold))" }}
            />
          </div>
          {/* Badge */}
          <div
            className="absolute -bottom-6 -right-6 bg-white px-6 py-5 rounded-2xl z-20"
            style={{ boxShadow: "0 12px 45px rgba(43,108,142,0.15)" }}
          >
            <strong
              className="block text-xl font-semibold"
              style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--blue-deep)" }}
            >
              Ophélie Delon
            </strong>
            <span className="text-[0.72rem] tracking-wide" style={{ color: "var(--text-light)" }}>
              Artiste &amp; Facilitatrice créative
            </span>
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="section-label reveal">À propos</div>
          <h2
            className="reveal reveal-d1 font-semibold leading-[1.15] mb-5"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
              color: "var(--blue-deep)",
            }}
          >
            Un studio créatif<br />
            <em style={{ color: "var(--gold)" }}>nomade et inspiré</em>
          </h2>
          <p className="reveal reveal-d2 mb-4 leading-[1.85]" style={{ color: "var(--text-light)" }}>
            Je m&apos;appelle Ophélie, et je crois profondément que la créativité est un voyage.
            Inspirée des arts du monde entier et de l&apos;art-thérapie, je vous emmène explorer
            des techniques artistiques issues de cultures riches et diverses.
          </p>
          <p className="reveal reveal-d2 leading-[1.85]" style={{ color: "var(--text-light)" }}>
            <strong style={{ color: "var(--text-dark)" }}>Studio Creazen</strong>, c&apos;est la fusion de{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>créativité</em> et de{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue-deep)" }}>zen</em> —
            un espace bienveillant où chaque pinceau, chaque trait devient une méditation.
            Je me déplace chez vous, en entreprise, en studio ou en plein air.
          </p>

          <div className="reveal reveal-d3 flex flex-wrap gap-6 mt-10">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-3">
                <div
                  className="w-11 h-11 rounded-[14px] flex items-center justify-center text-xl shrink-0"
                  style={{ background: "var(--sand)" }}
                >
                  {v.icon}
                </div>
                <div>
                  <h4
                    className="font-semibold text-[1.05rem] mb-0.5"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--blue-deep)" }}
                  >
                    {v.title}
                  </h4>
                  <p className="text-[0.82rem] leading-[1.5]" style={{ color: "var(--text-light)" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
