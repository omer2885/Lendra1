import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-brand-midnight/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-accent rounded-sm flex items-center justify-center">
          <div className="w-4 h-4 bg-brand-midnight rotate-45" />
        </div>
        <span className="font-display font-bold text-xl tracking-tighter">LENDRA1</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
        <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
        <a href="#yield" className="hover:text-white transition-colors">Yield</a>
        <a href="#vault" className="hover:text-white transition-colors">Vault</a>
      </div>

      <button className="group flex items-center gap-2 bg-white text-brand-midnight px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all duration-300">
        Enter Vault
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.nav>
  );
};
