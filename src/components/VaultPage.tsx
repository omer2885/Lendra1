import { motion } from "motion/react";
import { usePreloader } from "./PreloaderContext";
import { ArrowLeftRight, TrendingUp, ShieldCheck, Zap, Settings, History, Info, AlertCircle } from "lucide-react";
import { useState } from "react";

export const VaultPage = () => {
    const { status } = usePreloader();
    const isRevealed = status === "done";
    const [fromAmount, setFromAmount] = useState("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="min-h-[100dvh] lg:h-screen w-full flex flex-col justify-start lg:justify-center px-4 md:px-12 lg:px-24 py-24 lg:py-0 relative overflow-x-hidden overflow-y-auto lg:overflow-hidden bg-[#020202]">

            {/* Ambient Background Structure */}
            <div className="absolute top-0 inset-x-0 h-full w-full pointer-events-none select-none z-0">
                <div className="absolute top-[10%] left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-brand-accent/[0.04] rounded-[100%] blur-[120px]" />
                <div className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] bg-green-500/[0.03] rounded-full blur-[100px]" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isRevealed ? "visible" : "hidden"}
                className="w-full max-w-6xl mx-auto relative z-10 flex flex-col pt-8 md:pt-16 lg:pt-20"
            >
                {/* Compact Hero Header Section */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-4 mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                            <span className="site-ui-label text-brand-accent">Protocol Live</span>
                        </div>
                        <h1 className="site-section-heading mb-2">
                            The Vault
                        </h1>
                        <p className="site-card-body max-w-xl text-white/50">
                            Institutional-grade liquidity pools with multi-signature security.
                        </p>
                    </div>

                    {/* Placeholder Warning Badge */}
                    <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg flex-shrink-0 mt-4 md:mt-0">
                        <AlertCircle className="text-blue-400" size={14} />
                        <span className="text-[11px] text-blue-200/80 font-medium">UI Prototype Placeholder</span>
                    </div>
                </motion.div>

                {/* Tightly Packed Dashboard Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">

                    {/* Left Column: Metrics & Stats */}
                    <div className="lg:col-span-7 flex flex-col gap-5">

                        {/* Primary Stat Card */}
                        <motion.div variants={itemVariants} className="bg-white/[0.02] border border-white/[0.05] p-6 lg:p-8 rounded-3xl backdrop-blur-3xl relative overflow-hidden flex-1 flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-green-400/[0.03] rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />

                            <div className="flex justify-between items-center mb-6 relative z-10">
                                <h2 className="site-ui-label text-white/50">Vault Overview</h2>
                                <div className="flex items-center gap-1.5 bg-green-500/10 px-2 py-1 rounded-md border border-green-500/20">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                                    <span className="site-ui-label text-green-400">Live</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative z-10">
                                <div>
                                    <p className="site-metric-value mb-1">$42.8M</p>
                                    <p className="text-xs text-white/40 flex items-center gap-1.5 font-medium">
                                        <TrendingUp size={12} className="text-green-400" /> TVL
                                    </p>
                                </div>
                                <div>
                                    <p className="site-metric-value mb-1 text-brand-accent">12.42<span className="text-xl text-brand-accent/50">%</span></p>
                                    <p className="text-xs text-white/40 flex items-center gap-1.5 font-medium">
                                        <Zap size={12} className="text-yellow-400" /> Base APY
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Secondary Feature Cards Array */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <motion.div variants={itemVariants} className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-3xl">
                                <ShieldCheck className="text-white/60 mb-3" size={18} />
                                <h3 className="site-ui-label mb-2 text-white/50">Institutional Guard</h3>
                                <p className="site-card-body text-white/40">Multi-sig custody with automated risk circuit breakers.</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-3xl">
                                <ArrowLeftRight className="text-white/60 mb-3" size={18} />
                                <h3 className="site-ui-label mb-2 text-white/50">Liquid Exits</h3>
                                <p className="site-card-body text-white/40">Secondary market liquidity integration for zero-slippage.</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Sleek DEX Swap Panel */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 h-full">
                        <div className="bg-[#0a0a0a] border border-white/10 p-1.5 rounded-[2rem] shadow-2xl h-full flex flex-col relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/[0.04] blur-[40px]" />

                            <div className="p-5 flex-1 flex flex-col relative z-10 justify-between">
                                <div className="flex justify-between items-center mb-5">
                                    <h2 className="site-ui-label text-white/50">Swap to Vault</h2>
                                    <div className="flex gap-3 text-white/40">
                                        <History size={14} className="cursor-pointer hover:text-white" />
                                        <Settings size={14} className="cursor-pointer hover:text-white" />
                                    </div>
                                </div>

                                <div className="space-y-1 relative">
                                    {/* Input Field UX */}
                                    <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="site-ui-label text-white/40">You Pay</span>
                                            <span className="site-ui-label cursor-pointer text-white/40 hover:text-white">Bal: 2,500.0</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="number"
                                                value={fromAmount}
                                                onChange={(e) => setFromAmount(e.target.value)}
                                                placeholder="0.0"
                                                className="bg-transparent border-none outline-none text-2xl font-medium w-full placeholder:text-white/10"
                                            />
                                            <button className="flex items-center gap-1.5 bg-[#121212] px-3 py-1.5 rounded-xl border border-white/5">
                                                <div className="w-4 h-4 rounded-full bg-[#2775ca] flex items-center justify-center text-[8px] font-bold text-white">S</div>
                                                <span className="font-medium text-xs">USDC</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Swap Divider Ring */}
                                    <div className="flex justify-center -my-3 relative z-10">
                                        <div className="bg-[#050505] border border-white/10 p-1.5 rounded-xl text-white/40 hover:text-white transition-colors cursor-pointer shadow-lg">
                                            <ArrowLeftRight size={14} className="rotate-90" />
                                        </div>
                                    </div>

                                    {/* Output Field UX */}
                                    <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="site-ui-label text-white/40">You Receive</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className={`text-2xl font-medium ${fromAmount ? 'text-white' : 'text-white/10'}`}>
                                                {fromAmount ? (Number(fromAmount) * 1.02).toFixed(2) : "0.0"}
                                            </p>
                                            <button className="flex items-center gap-1.5 bg-[#121212] px-3 py-1.5 rounded-xl border border-white/5">
                                                <div className="w-4 h-4 rounded-full bg-brand-accent flex items-center justify-center text-[8px] text-black font-bold">L</div>
                                                <span className="font-medium text-xs">vLNDR</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 px-2 space-y-2 mb-4">
                                    <div className="flex justify-between text-[11px]">
                                        <span className="text-white/40 font-light">Exchange Rate</span>
                                        <span className="font-medium text-white/80">1 USDC = 1.0242 vLNDR</span>
                                    </div>
                                    <div className="flex justify-between text-[11px]">
                                        <span className="text-white/40 font-light">Max Slippage</span>
                                        <span className="text-green-400 font-medium">0.05%</span>
                                    </div>
                                </div>

                                <button className="w-full py-3.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-brand-accent transition-all active:scale-[0.98]">
                                    Connect Wallet
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};
