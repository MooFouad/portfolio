import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { HiOutlineCode, HiOutlineLightningBolt, HiOutlineUsers, HiOutlineChartBar } from "react-icons/hi";

const approaches = [
  {
    icon: HiOutlineCode,
    title: "Ship-Ready Code",
    description:
      "I build for production from day one — clean architecture, TypeScript-strict, and maintainable patterns that scale as the product grows without accumulating debt.",
  },
  {
    icon: HiOutlineUsers,
    title: "End-to-End Ownership",
    description:
      "From database schema to pixel-perfect UI, I take full ownership of a feature and collaborate closely with design, backend, and product teams to deliver aligned solutions.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Performance by Default",
    description:
      "I optimize as I build — code splitting, lazy loading, caching strategies — so performance is never a late-stage retrofit but a first-class concern throughout development.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Business-Impact Focus",
    description:
      "I connect engineering decisions to business outcomes. Whether it's reducing load time, automating a workflow, or improving data accuracy, I measure what matters.",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="How I Work"
          title="My Approach"
          description="The principles that guide how I design, build, and deliver software."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {approaches.map((item) => (
            <Card key={item.title} className="p-6 md:p-8 flex flex-col gap-4">
              <div className="size-12 rounded-xl bg-gradient-to-br from-emerald-300 to-sky-400 flex items-center justify-center flex-shrink-0">
                <item.icon className="size-6 text-gray-900" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
