import hiwipay from "@/assets/clients/hiwipay.jpg";
import viacarte from "@/assets/clients/viacarte.png";
import instapay from "@/assets/clients/instapay.jpeg";
import cashzen from "@/assets/clients/cashzen.jpg";
import royalBank from "@/assets/clients/royal-bank-pacific.png";
import megoforex from "@/assets/clients/megoforex.avif";
import rucards from "@/assets/clients/rucards.jpeg";
import myntpe from "@/assets/clients/myntpe.png";
import finchain from "@/assets/clients/finchain.png";
import blockgration from "@/assets/clients/blockgration.avif";

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
  { name: "Finchain", logo: finchain },
];

export function ClientsSection() {
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group relative bg-white rounded-xl p-4 h-28 flex items-center justify-center border border-border/50 hover:border-accent/50 hover:shadow-glow transition-all"
              title={c.name}
            >
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                className="h-16 w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
