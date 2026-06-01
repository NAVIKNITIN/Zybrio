"use client";

import { motion } from "framer-motion";
import ToggleBtnText from "./ToggleBtbText";
import { useState } from "react";
import ToggleTabs from "./ToggleBtbText";


export default function ReflexStudioSection() {
      const [activeTab, setActiveTab] = useState<"prepare" | "assure">("prepare");
    
    return (
        <section className="relative w-full min-h-screen bg-[white] overflow-hidden">
            <div className="mx-auto px-30 py-20 grid md:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div>
                    <div className="text-[15px] text-[#1a2e10] gap-3 mb-2 items-center flex">
                        <div className="w-2 h-2 bg-[#ED502F] rounded-[20%]"></div>
                        ReflexAI Studio: Self‑Serve Simulations & Scoring
                    </div>
                    <h2 className="text-[black] text-[48px] font-bold mt-8 leading-[1] mb-6"
                        >
                        Build your own simulations and scoring models – in just minutes
                    </h2>

                    <ToggleTabs options={["Simulations", "Scoring"]} onChange={(val)=>console.log(val)} />
                
                    <p className="text-[#1a2e10] text-[20px] leading-[1.5] mt-40 max-w-[420px]">
                        Create lifelike simulations and scoring models from any script, file,
                        scenario, or prompt. ReflexAI Studio powers both Prepare and Assure,
                        giving teams the tools to train, measure, and improve — all in one
                        platform, with no code.
                    </p>
                </div>

                {/* Right chat mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mx-auto w-full max-w-[420px]"
                >
                    <div className="absolute inset-0 -z-10">
                        <svg viewBox="0 0 600 500" fill="none" className="w-full h-auto opacity-40">
                            <polygon
                                points="300,0 498,60 600,215 564,390 408,500 192,500 36,390 0,215 102,60"
                                stroke="#b2ae9c"
                                strokeWidth="1.1"
                                strokeDasharray="7 8"
                                fill="none"
                            />
                            <g transform="translate(75,62.5) scale(0.75)">
                                <polygon
                                    points="300,0 498,60 600,215 564,390 408,500 192,500 36,390 0,215 102,60"
                                    stroke="#b2ae9c"
                                    strokeWidth="1.1"
                                    strokeDasharray="7 8"
                                    fill="none"
                                />
                            </g>
                            <g transform="translate(150,125) scale(0.50)">
                                <polygon
                                    points="300,0 498,60 600,215 564,390 408,500 192,500 36,390 0,215 102,60"
                                    stroke="#b2ae9c"
                                    strokeWidth="1.1"
                                    strokeDasharray="7 8"
                                    fill="#eeede4"
                                    opacity="0.9"
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="bg-[#0b2a0a] rounded-lg shadow-xl overflow-hidden text-white">
                        <div className="flex justify-between items-center px-4 py-3 border-b border-[#1a3d0f]">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://i.pravatar.cc/40?img=5"
                                    alt="Olivia"
                                    className="w-8 h-8 rounded-full"
                                />
                                <div>
                                    <p className="text-sm font-semibold">Olivia</p>
                                    <p className="text-xs text-gray-400">Agent</p>
                                </div>
                            </div>
                            <button className="text-xs text-gray-300 hover:text-white">End Chat</button>
                        </div>

                        <div className="p-4 space-y-3 text-sm">
                            <div className="bg-[#1a3d0f] rounded-md p-3 text-gray-200">
                                I just got an alert about a huge charge on my credit card, and I
                                didn’t make it. I’m really scared something’s wrong.
                            </div>
                            <div className="text-xs text-gray-400">Maria</div>

                            <div className="bg-[#c9e8e3] text-[#0b2a0a] rounded-md p-3">
                                I’m really sorry this happened, Maria. I know that can be
                                unsettling. Can you tell me about the transaction?
                            </div>
                            <div className="text-xs text-gray-400 text-right">Olivia</div>

                            <div className="bg-[#1a3d0f] rounded-md p-3 text-gray-200">
                                It showed up early this morning for an amount I would never
                                spend. I don’t recognize the store at all, and I’m worried
                                someone has my information.
                            </div>
                            <div className="text-xs text-gray-400">Maria</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
