'use client';

import { MeetupData, MeetupDataList } from "@/types/interface";
import MeetupList from "@/components/meetups/MeetupList";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { DUMMY_DATA } from "@/types/dummy-data";

const Home = (meetups:InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(DUMMY_DATA)
  console.log(meetups);
  return <MeetupList meetups={DUMMY_DATA} />;
}

export const getStaticProps:GetStaticProps = async () => {
  const meetups:MeetupData[] = DUMMY_DATA;

  return {
    props: { meetups }
  }
}

export default Home;