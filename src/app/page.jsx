"use client";
import Map from "@/components/Map";
import StartTrip from "@/components/StartTrip";
import { useSession } from "next-auth/react";

function App() {
  const { data: session } = useSession({
    required: true,
  });
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col">
      <section className="h-1/2 md:h-2/3">
        <Map />
      </section>
      <section className="h-1/2 md:h-1/3">
        <StartTrip />
      </section>
    </div>
  );
}

export default App;
