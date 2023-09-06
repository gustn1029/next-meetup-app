"use client";

import { MeetupData } from "@/types/interface";
import { MotionMeetupListItem } from "../motion/MotionMeetupList";
import { useRouter } from "next/navigation";
import Card from "../layout/Card";

export default function MeetupItem({ id, title, image, address }: MeetupData) {
  const router = useRouter();
  function MeetupDetailHandler() {
    router.push(`/meetup-detail/${id}`);
  }
  return (
    <MotionMeetupListItem key={id}>
      <Card>
        <article className="transition-transform scale-100 hover:scale-[1.03]">
          <figure className="mb-[30px]">
            <img src={image} alt={title} />
          </figure>
          <div className="text-center">
            <h3 className="font-semibold text-2xl mb-[15px]">{title}</h3>
            <address className="mb-[10px] text-gray-500">{address}</address>
          </div>
          <button
            onClick={MeetupDetailHandler}
            className="block py-2 px-4 mx-auto border-[1px] border-solid transition-all border-rose-900 rounded-lg hover:bg-rose-300 hover:text-white"
          >
            Show Detail
          </button>
        </article>
      </Card>
    </MotionMeetupListItem>
  );
}
