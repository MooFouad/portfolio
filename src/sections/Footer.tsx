import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

export const Footer = () => {
  const footerLinks=[
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/mofouad001/"
    },
    {
      title: "Github",
      href: "https://github.com/MooFouad"
    },
    {
      title: "Twitter",
      href: "https://x.com/Mo_fouad0?t=SatpzsAP-b6gUeZpDnEdiw&s=08"
    },
    {
      title: "Email",
      href: "mailto:mofouad001@gmail.com"
    },
  ]
  return(
    <footer className='relative overflow-x-clip'>
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All right reserved</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map((link)=>(
              <a href={link.href} target='_blank' key={link.title}
              className='inline-flex items-center gap-1.5 hover:cursor-pointer z-50'>
                <span className='font-semibold z-50'>{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
