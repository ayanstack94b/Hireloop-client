import { DashboardSidebar } from '@/components/Dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-6 mt-30 mb-10">

            <div className="flex flex-col lg:flex-row gap-6">

                {/* Sidebar */}
                <div className="lg:w-72 shrink-0">
                    <DashboardSidebar />
                </div>

                {/* Main Content */}
                <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 lg:p-8 min-h-[700px] shadow-[0_0_40px_rgba(192,38,211,0.08)]">
                    {children}
                </div>

            </div>

        </div>
    );
};

export default DashboardLayout;