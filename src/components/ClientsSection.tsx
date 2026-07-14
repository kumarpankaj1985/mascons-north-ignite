import hiwipay from "@/assets/clients/hiwipay.jpg";
import viacarte from "@/assets/clients/viacarte.png";
import instapay from "@/assets/clients/instapay.jpeg";
import cashzen from "@/assets/clients/cashzen.jpg";
import royalBank from "@/assets/clients/royal-bank-pacific.png";
import megoforex from "@/assets/clients/megoforex.avif";
import rucards from "@/assets/clients/rucards.jpeg";
import myntpe from "@/assets/clients/myntpe.png";
import blockgration from "@/assets/clients/blockgration.avif";
import aneomoney from "@/assets/clients/aneomoney.png";
import zoqq from "@/assets/clients/zoqq.png";
import buckbox from "@/assets/clients/buckbox.png";
import knightFintech from "@/assets/clients/knight-fintech.png";
import quid from "@/assets/clients/quid.png";

const clients = [
  { name: "HiWiPay", logo: hiwipay },
  { name: "ViaCarte", logo: viacarte },
  { name: "Blockgration", logo: blockgration },
  { name: "Instapay Technologies (Malaysia)", logo: instapay },
  { name: "Cashzen (Canada)", logo: cashzen },
  { name: "Royal Bank Pacific", logo: royalBank },
  { name: "MEGO Forex", logo: megoforex },
  { name: "RUcards", logo: rucards },
  { name: "MYNTPE", logo: myntpe },
  { name: "ANEO Money", logo: aneomoney },
  { name: "Zoqq", logo: zoqq, className: "max-h-12 max-w-[60%]" },
  { name: "BuckBox", logo: buckbox },
  { name: "Knight Fintech", logo: knightFintech },
  { name: "Quid", logo: quid, className: "max-h-10 max-w-[55%]" },
];

export function ClientsSection() {
  const loop = [...clients, ...clients];

  return (
    <section className="bg-surface/30 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Clients & Partners</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Trusted by <span className="text-gradient-brand">fintech innovators</span> worldwide
          </h2>
          <p className="mt-4 text-muted-foreground">
            From digital wallets to cross-border payments and neobanks — leading brands trust Mascons to power their platforms.
          </p>
        </div>

        <div
          className="group relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]">
            {loop.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="shrink-0 w-44 h-28 bg-white rounded-xl border border-border/50 hover:border-accent/50 hover:shadow-glow transition-all flex items-center justify-center p-3"
                title={c.name}
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className={`${c.className ?? "max-h-20 max-w-[90%]"} w-auto h-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
