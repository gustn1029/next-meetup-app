import { MeetupDataList } from "@/types/interface";
import { MotionMeetupList } from "../motion/MotionMeetupList";
import MeetupItem from "./MeetupItem";

export default function MeetupList({meetups}:MeetupDataList) {
    return (
        <MotionMeetupList>
            {meetups.map(meetup => (
                <MeetupItem id={meetup.id} key={meetup.id} title={meetup.title} image={meetup.image} address={meetup.address} description={meetup.description} />
            ))}
        </MotionMeetupList>
    )
}