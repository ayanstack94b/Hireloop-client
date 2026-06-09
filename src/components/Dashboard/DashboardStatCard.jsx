import React from 'react';
import { motion } from "framer-motion";
const DashboardStatCard = ({ icon, value, title }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -5,
                borderColor: "rgba(217,70,239,0.3)",
            }}
            transition={{
                duration: 0.25,
                ease: "easeOut",
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6"
        >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl transition-all duration-500 group-hover:bg-fuchsia-500/20" />

            {/* Animated top line */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-fuchsia-500 to-purple-500"
            />

            {/* Icon */}
            <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className="mb-6 text-fuchsia-400"
            >
                {icon}
            </motion.div>

            {/* Value */}
            <h3 className="text-4xl font-bold text-white">
                {value}
            </h3>

            {/* Label */}
            <p className="mt-2 text-sm text-gray-400">
                {title}
            </p>
        </motion.div>
   );
};

export default DashboardStatCard;