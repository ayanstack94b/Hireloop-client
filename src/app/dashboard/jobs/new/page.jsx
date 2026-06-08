"use client";

import {
    Button,
    Input,
    Switch,
    Select,
    Label,
    ListBox,
} from "@heroui/react";

export default function NewJobPage() {
    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-8 mb-8">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Post a New Job
                </h1>

                <p className="text-gray-400 mt-2">
                    Create and publish a new job listing.
                </p>
            </div>

            {/* Job Information */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-white">
                    Job Information
                </h2>

                <Input
                    label="Job Title"
                    placeholder="Senior MERN Stack Developer"
                />

                <Select className="w-full" placeholder="Select Category">
                    <Label>Job Category</Label>

                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="engineering">
                                Engineering
                            </ListBox.Item>

                            <ListBox.Item id="design">
                                Design
                            </ListBox.Item>

                            <ListBox.Item id="marketing">
                                Marketing
                            </ListBox.Item>

                            <ListBox.Item id="sales">
                                Sales
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <Select className="w-full" placeholder="Select Job Type">
                    <Label>Job Type</Label>

                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="fulltime">
                                Full-time
                            </ListBox.Item>

                            <ListBox.Item id="parttime">
                                Part-time
                            </ListBox.Item>

                            <ListBox.Item id="contract">
                                Contract
                            </ListBox.Item>

                            <ListBox.Item id="internship">
                                Internship
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>
            </div>

            {/* Salary */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-white">
                    Compensation
                </h2>

                <div className="grid md:grid-cols-3 gap-4">

                    <Input
                        type="number"
                        label="Minimum Salary"
                        placeholder="50000"
                    />

                    <Input
                        type="number"
                        label="Maximum Salary"
                        placeholder="100000"
                    />

                    <Input
                        label="Currency"
                        placeholder="USD / INR / EUR"
                    />

                </div>
            </div>

            {/* Location */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-white">
                    Location
                </h2>

                <Switch>
                    Remote Position
                </Switch>

                <div className="grid md:grid-cols-2 gap-4">

                    <Input
                        label="City"
                        placeholder="Kolkata"
                    />

                    <Input
                        label="Country"
                        placeholder="India"
                    />

                </div>
            </div>

            {/* Deadline */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-white">
                    Application Deadline
                </h2>

                <Input
                    type="date"
                    label="Deadline"
                />
            </div>

            {/* Description */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-6">

                <h2 className="text-xl font-semibold text-white">
                    Job Description
                </h2>

                <textarea
                    className="w-full min-h-40 rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none"
                
                    label="Responsibilities"
                    placeholder="Describe the responsibilities..."
                    rows={6}
                />

                <textarea
                    className="w-full min-h-40 rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none"
               
                    label="Requirements"
                    placeholder="Describe the requirements..."
                    rows={6}
                />

                <textarea
                    className="w-full min-h-40 rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none"
                
                    label="Benefits"
                    placeholder="Optional benefits..."
                    rows={4}
                />

            </div>

            {/* Company */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-6">

                <h2 className="text-xl font-semibold text-white">
                    Company Information
                </h2>

                <Input
                    label="Company"
                    value="Company Name Here"
                    readOnly
                />

                <p className="text-sm text-gray-400">
                    Posting is allowed only if your company is approved and within its active job posting limit.
                </p>

            </div>

            {/* Submit */}
            <div className="flex justify-end">
                <Button color="secondary" size="lg">
                    Publish Job
                </Button>
            </div>

        </div>
    );
}