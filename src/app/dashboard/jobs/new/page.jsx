"use client";

import { Input, Switch } from "@heroui/react";
import { motion } from "motion/react";
import Swal from "sweetalert2";
import { useState } from "react";
import { createJob } from "@/lib/actions/jobs";
import { useRouter } from "next/navigation";


export default function NewJobPage() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);


    const [formData, setFormData] = useState({
        title: "",
        category: "",
        jobType: "",
        salaryFrom: "",
        salaryTo: "",
        currency: "",
        otherCurrency: "",
        city: "",
        country: "",
        remote: false,
        deadline: "",
        responsibilities: "",
        requirements: "",
        benefits: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = [
            formData.title,
            formData.category,
            formData.jobType,
            formData.salaryFrom,
            formData.salaryTo,
            formData.currency,
            formData.city,
            formData.country,
            formData.deadline,
            formData.responsibilities,
            formData.requirements,
        ];

        const hasEmptyField = requiredFields.some(
            (field) => !field || field.toString().trim() === ""
        );

        if (hasEmptyField) {
            return Swal.fire({
                icon: "error",
                title: "Missing Information",
                text: "Please fill all required fields.",
                confirmButtonColor: "#d946ef",
            });
        }

        try {
            setLoading(true);

            const res = await createJob(formData);

            if (res?.insertedId || res?.success) {
                await Swal.fire({
                    icon: "success",
                    title: "Job Created",
                    text: "Your job has been published successfully.",
                    confirmButtonColor: "#d946ef",
                });

                router.push("/dashboard/recruiter");

                setFormData({
                    title: "",
                    category: "",
                    jobType: "",
                    salaryFrom: "",
                    salaryTo: "",
                    currency: "",
                    otherCurrency: "",
                    city: "",
                    country: "",
                    remote: false,
                    deadline: "",
                    responsibilities: "",
                    requirements: "",
                    benefits: "",
                });
            } else {
                throw new Error("Failed to create job");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: error.message || "Something went wrong.",
                confirmButtonColor: "#d946ef",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto flex flex-col gap-8 pb-10"
        >
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Post a New Job
                </h1>

                <p className="text-gray-400 mt-2">
                    Create and publish a new job listing.
                </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-white">
                    Job Information
                </h2>

                <Input
                    name="title"
                    label="Job Title"
                    placeholder="Senior MERN Stack Developer"
                    value={formData.title}
                    onChange={handleChange}
                />

                <div>
                    <label className="block text-sm text-gray-400 mb-2">
                        Job Category
                    </label>

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-black p-3 text-white"
                    >
                        <option value="">Select Category</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm text-gray-400 mb-2">
                        Job Type
                    </label>

                    <select
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-black p-3 text-white"
                    >
                        <option value="">Select Job Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-6">

                <h2 className="text-xl font-semibold text-white">
                    Compensation
                </h2>

                <div className="grid md:grid-cols-3 gap-4">

                    <Input
                        name="salaryFrom"
                        type="number"
                        label="From Salary"
                        placeholder="50000"
                        value={formData.salaryFrom}
                        onChange={handleChange}
                    />

                    <Input
                        name="salaryTo"
                        type="number"
                        label="To Salary"
                        placeholder="100000"
                        value={formData.salaryTo}
                        onChange={handleChange}
                    />

                    <div>
                        <label className="block text-sm text-gray-400 mb-2">
                            Currency
                        </label>

                        <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
                        >
                            <option value="">Select Currency</option>
                            <option value="USD">USD - US Dollar</option>
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - British Pound</option>
                            <option value="CAD">CAD - Canadian Dollar</option>
                            <option value="AUD">AUD - Australian Dollar</option>
                            <option value="SGD">SGD - Singapore Dollar</option>
                            <option value="JPY">JPY - Japanese Yen</option>
                            <option value="CNY">CNY - Chinese Yuan</option>
                            <option value="AED">AED - UAE Dirham</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>

                </div>

                {formData.currency === "OTHER" && (
                    <Input
                        name="otherCurrency"
                        label="Specify Currency"
                        placeholder="BDT, ZAR, BRL..."
                        value={formData.otherCurrency}
                        onChange={handleChange}
                    />
                )}

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-white">
                    Location
                </h2>

                <Switch
                    isSelected={formData.remote}
                    onValueChange={(value) =>
                        setFormData((prev) => ({
                            ...prev,
                            remote: value,
                        }))
                    }
                >
                    Remote Position
                </Switch>

                <div className="grid md:grid-cols-2 gap-4">
                    <Input
                        name="city"
                        label="City"
                        value={formData.city}
                        onChange={handleChange}
                    />

                    <Input
                        name="country"
                        label="Country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <Input
                    name="deadline"
                    type="date"
                    label="Application Deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-white">
                    Job Description
                </h2>

                <textarea
                    name="responsibilities"
                    placeholder="Responsibilities"
                    value={formData.responsibilities}
                    onChange={handleChange}
                    rows={6}
                    className="w-full rounded-xl border border-white/10 bg-transparent p-4 text-white"
                />

                <textarea
                    name="requirements"
                    placeholder="Requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={6}
                    className="w-full rounded-xl border border-white/10 bg-transparent p-4 text-white"
                />

                <textarea
                    name="benefits"
                    placeholder="Benefits (Optional)"
                    value={formData.benefits}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-transparent p-4 text-white"
                />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                    Company Information
                </h2>

                <Input
                    value="Company Name Here"
                    readOnly
                />
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-fuchsia-500 hover:bg-fuchsia-600 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium"
                >
                    {loading ? "Publishing..." : "Publish Job"}
                </button>
            </div>
        </motion.form>
    );
}