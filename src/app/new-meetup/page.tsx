"use client";

import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Card from "@/components/layout/Card";
import MotionWrap from "@/components/motion/MotionWrap";

export default function NewMeetupPage() {
  function AddMeetupHandler(enterMeetupData: any) {
    console.log(enterMeetupData);
  }
  return (
    <MotionWrap>
      <Card>
        <NewMeetupForm addMeetups={AddMeetupHandler} />
      </Card>
    </MotionWrap>
  );
}
