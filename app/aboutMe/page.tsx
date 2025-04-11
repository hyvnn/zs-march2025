"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutMePage() {
  let facts: string[] = [
    "Babies are considered one year old at birth",
    "Kimchi is a national treasure",
    "Free Wi-Fi is everywhere",
    "Korean has its own unique script",
    "Red ink is considered bad luck",
    "Blood type compatibility is a thing",
    "Seoul has five ancient royal palaces",
    "Professional gamers are a thing",
    "Mountains Cover 70% of Korea",
    "South Korea boasts a robust education system with a strong emphasis on academic excellence",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}> About Me </h1>
      <Button
        onPress={() => setFact(facts[Math.floor(Math.random() * facts.length)])}
      >
        fun facts
      </Button>
      <p>{fact}</p>
      <p>
        my name is zoe shin and i play volleyball for ignite volleyball academy
      </p>
      <img src="/huddle.jpg" alt="I am in a huddle with my team" width={280} height={270}/>
      <img src="/jump.jpg" alt="I am in a jumping after a good point" width={280} height={270}/>
      <img src="/passing.jpg" alt="I am passing a free ball" width={280} height={270}/>
      <img src="/serve recieve.jpg" alt="I passing a serve" width={280} height={270}/>
      <img src="/serving.jpg" alt="I am serving a ball to start the point" width={280} height={270}/>
    </div>
  );
}
