"use client";
import { useState } from "react";
import { Button } from "@heroui/button";

import { title } from "@/components/primitives";

export default function RecipiesPage() {
  let facts: string[] = ["peanuts are used to make dynamite", ""];
  const [fact, setFact] = useState("");
  return (
    <div>
      <h1 className={title()}>Recepies</h1>
      <br />
      <Button
        className="bg-red-500 text-white"
        onPress={() => {
          setFact(facts[0]);
        }}
      >
        Press 4 Fact
      </Button>
      <p>{fact}</p>
    </div>
  );
}
