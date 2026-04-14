import { motion } from "motion/react";
import { LENDRA_CONTENT } from "../data/content";
import { Section, FadeIn } from "./Layout";
import { Wallet, PieChart, Layers, LineChart, ChevronRight } from "lucide-react";

export const VaultParticipation = () => {
  const { vault } = LENDRA_CONTENT;
  const icons = [Wallet, PieChart, Layers, LineChart];

  return (
    <Section id="vault" className="bg-brand-charcoal">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn direction="right">
            <span className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-4 block">Participation</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {vault.title}
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-10">
              {vault.content}
            </p>
            
            <div className="space-y-4">
              {vault.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="left" delay={0.2}>
          <div className="glass rounded-[2rem] p-1 border border-white/10 shadow-2xl">
            <div className="bg-brand-midnight rounded-[1.8rem] p-8 md:p-12">
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center">
                    <Layers className="w-5 h-5 text-brand-midnight" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">USD1 CREDIT VAULT</div>
                    <div className="text-[10px] font-mono text-brand-muted uppercase">Institutional</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold">
                  LIVE DEPLOYMENT
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="text-[10px] font-mono text-brand-muted uppercase mb-2">Vault NAV</div>
                  <div className="text-3xl font-display font-bold">$1.0428</div>
                  <div className="text-xs text-white mt-1 font-medium">+0.04% (24h)</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-brand-muted uppercase mb-2">Utilization</div>
                  <div className="text-3xl font-display font-bold">94.2%</div>
                  <div className="text-xs text-brand-muted mt-1 font-medium">Optimized</div>
                </div>
              </div>

              <div className="space-y-4 mb-12">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-muted">Total Capital Deployed</span>
                  <span className="font-mono">$142.5M</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-brand-accent"
                  />
                </div>
              </div>

              <button className="w-full bg-white text-brand-midnight py-4 rounded-2xl font-bold hover:bg-brand-accent transition-all duration-300 flex items-center justify-center gap-2 group">
                Enter Vault
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-center text-[10px] font-mono text-brand-muted mt-6 uppercase tracking-widest">
                Placeholder data for visualization purposes
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
