import EventBox from "./EventBox";
import SectionHeader from "../SectionHeader";
import { siteData } from "@/data/siteData";

const Events = () => {
  const { events } = siteData;

  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader pretitle="World Tour" title="Upcoming Events" />
        {/* event box */}
        <EventBox events={events} />
      </div>
    </section>
  );
};

export default Events;
