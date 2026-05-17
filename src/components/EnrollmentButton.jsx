"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EnrollmentButton({course}) {
    const {data: session} = useSession();
    const router = useRouter();

    const handleEnroll = async() => {
        console.log("Clicked")
        const {data: jwtData} = await authClient.token();
        const token = jwtData?.token
        // console.log(token)
        if(!token){
            toast.error("authentication failed. Enrollment not added.")
            return;
        }
        const updatedData = {
            userId: session?.user?.id,
            studentName: session?.user?.name,
            studentEmail: session?.user?.email,
            courseTitle: course?.title,
            thumbnail: course?.thumbnail
        }
console.log(updatedData)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${course?._id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updatedData)
        })
        const data = await res.json()
        if(!data){
            toast.error("Something went wrong!")
            return
        }
        router.push("/dashboard")
    }

    return (
        <Button
            color="primary"
            size="lg"
            className="w-full font-bold shadow-lg mt-4"
            onPress={handleEnroll}
        >
            Enroll Now
        </Button>
    );
}
