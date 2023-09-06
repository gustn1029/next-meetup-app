'use client';

import { MeetupData } from "@/types/interface";
import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

const DUMMY_DATA: MeetupData[] = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2017/08/07/10/22/buildings-2602324_1280.jpg",
    address: "Some address 10, 1234 Some City",
    description: "This is a second meeyup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2017/08/07/10/22/buildings-2602324_1280.jpg",
    address: "Some address 10, 1234 Some City",
    description: "This is a second meeyup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://cdn.pixabay.com/photo/2017/08/07/10/22/buildings-2602324_1280.jpg",
    address: "Some address 10, 1234 Some City",
    description: "This is a second meeyup!",
  },
];

export default function Home() {
  
  return <MeetupList meetups={DUMMY_DATA} />;
}

export const getStaticProps:GetStaticProps = () => {
  return {
    props: {
      meetups: DUMMY_DATA
    }
  }
}