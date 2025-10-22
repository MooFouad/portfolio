import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grinImage from "@/assets/images/grain.jpg"
import Image from "next/image";

export const ContactSection = () => {
  return <div id="contact" className="py-16 pt-14 lg:py-24 lg:pt-20">
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
              <p className="text-sm md:text-base font-semibold flex items-center gap-2">
                <span>📧</span>
                <span>mofouad001@gmail.com</span>
              </p>
              <p className="text-sm md:text-base font-semibold flex items-center gap-2">
                <span>📞</span>
                <span>+966 50 367 1924</span>
              </p>
              <p className="text-sm md:text-base font-semibold flex items-center gap-2">
                <span>📍</span>
                <span>Riyadh, Saudi Arabia</span>
              </p>
            </div>
          </div>
          <div className="">
            <a href="mailto:mofouad001@gmail.com" className="text-white bg-gray-900 inline-flex h-12 px-6 items-center rounded-xl gap-2 w-max border border-gray-950 hover:bg-gray-800 transition-colors whitespace-nowrap">
              <span className="font-semibold">Get In Touch</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
          </div>
        </div>
          </div>
    </div>
  </div>;
};
