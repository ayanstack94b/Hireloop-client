'use server'

const baseUrl= process.env.NEXT_PUBLIC_BETTER_AUTH_URL;

export const createJob= async(newJobData)=>{
    const res = await fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJobData),
    });
     if (!res.ok) {
       throw new Error("Failed to create job");
     }

     return res.json();
}