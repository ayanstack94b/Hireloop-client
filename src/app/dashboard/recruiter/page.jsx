"use client"
import DashboardStatCard from '@/components/Dashboard/DashboardStatCard';
import { useSession } from '@/lib/auth-client';
import { Briefcase, CircleCheck, Persons, Thunderbolt } from '@gravity-ui/icons';
import { motion } from "framer-motion";
import React from 'react';

const RecruiterDashboardHomePage = () => {

    const { data: session, isPending } = useSession()

    if (isPending) {
        return <div className="">Loading...</div>
    }

    const user = session?.user
    console.log('coming from RecruiterDashboardHomePage', session);

    const stats = [
        {
            title: "Active Jobs",
            value: 12,
            icon: <Briefcase width={24} height={24} />
        },
        {
            title: "Applications",
            value: 486,
            icon: <Persons width={24} height={24} />
        },
        {
            title: "Active jobs",
            value: 74,
            icon: <Thunderbolt width={24} height={24} />
        },
        {
            title: "Jobs Closed",
            value: 21,
            icon: <CircleCheck width={24} height={24}></CircleCheck>
        }
    ];

    return (
        <div>
            <h2 className="text-2xl font-light">
                Welcome back... Mr.
                <span className="text-fuchsia-500 font-semibold">
                    {user.name}
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.08,
                        }}
                    >
                        <DashboardStatCard {...stat} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RecruiterDashboardHomePage;