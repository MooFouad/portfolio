import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grinImage from "@/assets/images/grain.jpg"
import Image from "next/image";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export const ContactSection = () => {
  return <div id="contact" className="py-16 pt-14 lg:py-24 lg:pt-20 section-anchor">
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
        <div className="absolute inset-0 rounded-3xl opacity-5 -z-10"
        style={{backgroundImage : `url(${grinImage.src})`}}
        ></div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="">
            <h2 className="font-serif text-2xl md:text-3xl">Let's Build Something Exceptional Together</h2>
            <p className="mt-2 text-sm md:text-base">
              Ready to transform your vision into reality? Whether you're looking to build a new application,
              optimize an existing platform, or need expert consultation, I'm here to help deliver outstanding results.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:mofouad001@gmail.com"
                className="text-sm md:text-base font-semibold flex items-center gap-2 justify-center md:justify-start hover:underline underline-offset-4 relative z-10"
              >
                <HiOutlineMail className="size-5 flex-shrink-0" aria-hidden="true" />
                <span>mofouad001@gmail.com</span>
              </a>
              <a
                href="tel:+966505232544"
                dir="ltr"
                className="text-sm md:text-base font-semibold flex items-center gap-2 justify-center md:justify-start hover:underline underline-offset-4 relative z-10"
              >
                <HiOutlinePhone className="size-5 flex-shrink-0" aria-hidden="true" />
                <span>+966 50 523 2544</span>
              </a>
              <p className="text-sm md:text-base font-semibold flex items-center gap-2 justify-center md:justify-start">
                <HiOutlineLocationMarker className="size-5 flex-shrink-0" aria-hidden="true" />
                <span>Riyadh, Saudi Arabia</span>
              </p>
            </div>
          </div>
          <div className="">
            <a href="https://wa.me/966505232544" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-900 inline-flex h-12 px-6 items-center rounded-xl gap-2 w-max border border-gray-950 hover:bg-gray-800 transition-colors whitespace-nowrap">
              <span className="font-semibold">Get In Touch</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
          </div>
        </div>
          </div>
    </div>
  </div>;
};
