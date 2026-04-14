import { motion } from "motion/react";
import { LENDRA_CONTENT } from "../data/content";
import { Section, FadeIn } from "./Layout";
import { ArrowDown, MapPin, Clock, RefreshCw, CheckCircle2, Zap } from "lucide-react";

const StoryStep = ({ icon: Icon, title, content, isLast = false }: { icon: any, title: string, content: string, isLast?: boolean }) => (
  <div className="flex gap-8 md:gap-12 group">
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 rounded-2xl bg-brand-gray border border-white/10 flex items-center justify-center group-hover:border-brand-accent/50 transition-colors duration-500 relative z-10">
        <Icon className="w-6 h-6 text-brand-accent" />
      </div>
      {!isLast && <div className="w-[1px] flex-grow bg-gradient-to-b from-brand-accent/50 to-transparent my-4" />}
    </div>
    <div className="pb-16">
      <h3 className="font-display font-bold text-2xl mb-4 text-white group-hover:text-brand-accent transition-colors">{title}</h3>
      <p className="text-brand-muted leading-relaxed max-w-xl">{content}</p>
    </div>
  </div>
);

export const SingleTransfer = () => {
  const { singleTransfer } = LENDRA_CONTENT;

  return (
    <Section className="relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none" />
      
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <FadeIn direction="right">
            <span className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-4 block">Case Study</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-12 leading-tight">
              {singleTransfer.title}
            </h2>
            
            <div className="space-y-2">
              <StoryStep 
                icon={MapPin}
                title="Initiation"
                content="A transfer is initiated from one region to another. The sender provides funds in their local currency."
              />
              <StoryStep 
                icon={Clock}
                title="The Timing Gap"
                content="The recipient expects funds immediately, while traditional settlement systems take days to finalize."
              />
              <StoryStep 
                icon={Zap}
                title="Instant Liquidity"
                content="LENDRA1 provides the capital required to complete the transfer instantly, bridging the gap for the recipient."
              />
              <StoryStep 
                icon={CheckCircle2}
                title="Settlement & Repayment"
                content="That capital is repaid after settlement is finalized. Each cycle generates a return from the continuous reuse of capital."
                isLast
              />
            </div>
          </FadeIn>
        </div>

        <div className="lg:sticky lg:top-32 h-fit">
          <FadeIn direction="left" delay={0.3}>
            <div className="glass rounded-3xl p-10 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <RefreshCw className="w-6 h-6 text-brand-accent/20 animate-spin-slow" />
              </div>
              
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <div className="text-[10px] font-mono text-brand-muted uppercase tracking-widest">Transaction ID</div>
                  <div className="text-[10px] font-mono text-brand-accent">#LX-99281-B</div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-brand-muted">Amount</span>
                    <span className="text-xl font-display font-bold">$12,450.00</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-brand-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                    <div className="text-[10px] font-mono text-brand-muted uppercase mb-1">Status</div>
                    <div className="text-xs font-bold text-brand-accent">SETTLED</div>
                  </div>
                  <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                    <div className="text-[10px] font-mono text-brand-muted uppercase mb-1">Yield Gen</div>
                    <div className="text-xs font-bold text-white">0.042% / CYCLE</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <p className="text-sm text-brand-muted italic leading-relaxed">
                    "Returns are generated from the continuous reuse of capital across real remittance flows."
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
