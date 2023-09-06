import Card from "@/components/layout/Card";
import MotionWrap from "@/components/motion/MotionWrap";

export default function MeetupDetailPage() {
  return (
    <Card>
      <MotionWrap>
        <figure className="mb-[30px]">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/07/10/22/buildings-2602324_1280.jpg"
            alt="A Third Meetup"
          />
        </figure>
        <article className="text-center">
          <h3 className="uppercase text-2xl font-semibold mb-[10px]">A Third Meetup</h3>
          <address className="mb-[20px] text-gray-400 font-medium font-mono not-italic">
            Some address 10, 1234 Some City
          </address>
          <p className="text-gray-900">This is a second meeyup!</p>
        </article>
      </MotionWrap>
    </Card>
  );
}
