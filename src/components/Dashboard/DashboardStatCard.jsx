import React from 'react';

const DashboardStatCard = ({ icon, value, title }) => {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
            <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-fuchsia-600/10 blur-3xl" />

            <div className="mb-6 text-white">
                {icon}
            </div>

            <h3 className="text-4xl font-bold text-white">
                {value}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
                {title}
            </p>
        </div>
   );
};

export default DashboardStatCard;