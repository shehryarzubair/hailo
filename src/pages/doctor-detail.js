import MainLayout from "@/layout/MainLayout";
import { DoctorDatail, Gallery } from "@/sections";
import Reviews from "@/sections/reviews/Reviews";
import Link from "next/link";

export default function DoctorDatailPage() {
  const detail = {
    image: "/images/doctor.png",
    name: "ACC",
    rating: "5.0",
    location: "ABC church, london, UK",
    online_fee: "£50.00/h",
    inperson_fee: "£50.00/h",
    speciality: "Christian Counselling",
    description: `ACC’s registered and accredited counsellors/psychotherapists are recognised within the professional counselling/psychotherapy world as having achieved the appropriate education, skill, and knowledge to be able to practice safely in all settings. Our levels of membership map to the Scope of Practice and Education (SCoPEd) competency framework developed by six Professional Standards Authority accredited bodies, including ACC, BACP, and UKCP which represent over 75,000 counsellors and psychotherapists. ACC members are employed in the same way as other professional counsellors/psychotherapists, for example, the NHS, schools and universities, prisons, employee assistance services and private counselling/psychotherapy services. ACC members’ unique value is ensuring that clients have choice in selecting a counsellor or psychotherapist who shares, values and respects religious faith and spirituality. Importantly, ACC members work with people of all faiths and none, without discrimination, and within a code of ethics and practice As an example of the value of providing a service that is open to all, delivered by counsellors who are Christian, NHS England and NHS Improvement commissioned ACC to provide a counselling service to their employees between 2021 and 2023.`,
  };
  const gallery = [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
  ];
  const reviews = [
    {
      image: "/images/reviewer1.png",
      name: "Rocks Velkeinjen",
      date: "3 days ago",
      rating: "5",
      review:
        "I always leave the meeting feeling encouraged and renewed. It's truly a blessing to come together in prayer with others who share the same faith.",
    },
    {
      image: "/images/reviewer2.png",
      name: "Angelina Zolly",
      date: "Wed, Sep 19 • 5:30 PM",
      rating: "5",
      review:
        "A beautiful experience of collective prayer and worship. It brought me a lot of peace and comfort.",
    },
    {
      image: "/images/reviewer3.png",
      name: "Andrew Davie",
      date: "Wed, Sep 19 • 5:30 PM",
      rating: "5",
      review:
        "I’ve attended prayer meetings before, but this one stood out with how genuine and heartfelt the prayers were. I left feeling more connected to my faith.",
    },
  ];

  return (
    <MainLayout customClass={"bg-body pb-[8rem] flex flex-col gap-5"}>
      <DoctorDatail data={detail} />
      <Gallery data={gallery} />
      <Reviews data={reviews} />

      <div className="flex flex-col items-center justify-center gap-3 px-5 mt-5">
        <Link
          href={"/booking"}
          className="font-semibold text-white bg-blue p-[1rem] rounded-[0.75rem] w-full text-center"
        >
          Book Online Virtual Meeting £50/h
        </Link>
        <Link
          href={"/booking"}
          className="font-semibold text-white bg-blue p-[1rem] rounded-[0.75rem] w-full text-center"
        >
          Book In-Person Appointment £50/h
        </Link>
      </div>
    </MainLayout>
  );
}
