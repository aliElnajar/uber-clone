"use client";
import TripForm from "@/components/TripForm";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession({
    required: true,
  });
  return (
    <div>
      <TripForm />
    </div>
  );
};

export default page;
