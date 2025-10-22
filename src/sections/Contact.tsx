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
            <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
            <p className="mt-2 text-sm md:text-base">Ready to bring your next project to life? Let's connect and discuss how can I help you achieve your goals.</p>
            <p className="mt-3 text-sm md:text-base font-semibold">📧 mofouad001@gmail.com</p>
            <p className="mt-1 text-sm md:text-base font-semibold">📞 +966 50 367 1924</p>
          </div>
          <div className="">
            <a href="mailto:mofouad001@gmail.com" className="text-white bg-gray-900 inline-flex h-12 px-6 items-center rounded-xl gap-2 w-max border border-gray-950 hover:bg-gray-800 transition-colors">
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
          </div>
        </div>
          </div>
    </div>
  </div>;
};
