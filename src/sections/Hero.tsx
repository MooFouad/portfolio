import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grianImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div id="home" className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      {/*  */}
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className="absolute -z-30 inset-0 opacity-5" style={{backgroundImage : `url(${grianImage.src})`}}></div>
      {/*-----  -----*/}
      {/* hero rings */}
      <div className="hero-ring size-[620px]"></div>
      <div className="hero-ring size-[820px]"></div>
      <div className="hero-ring size-[1020px]"></div>
      <div className="hero-ring size-[1220px]"></div>
      {/* star */}
      <HeroOrbit rotation={-14} size={430} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='4s'>
        <SparkleIcon className="size-8 text-emerald-300/20 " />
      </HeroOrbit>
      <HeroOrbit rotation={79} size={440} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='4s'>
        <SparkleIcon className="size-5 text-emerald-300/20 " />
      </HeroOrbit>
      <HeroOrbit rotation={-41} size={520} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='4s'>
        <div className="size-2 rounded-full bg-emerald-300/20 " />
      </HeroOrbit>
      <HeroOrbit rotation={20} size={550} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='4s'>
        <StarIcon className="size-12 text-emerald-300 " />
      </HeroOrbit>
      <HeroOrbit rotation={98} size={590} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='4s'>
        <StarIcon className="size-12 text-emerald-300 " />
      </HeroOrbit>
      <HeroOrbit rotation={-5} size={650} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='5s'>
        <div className="size-2 rounded-full bg-emerald-300/20 " />
      </HeroOrbit>
      <HeroOrbit rotation={144} size={710} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='5s'>
        <SparkleIcon className="size-14 text-emerald-300/20 " />
      </HeroOrbit>
      <HeroOrbit rotation={85} size={720} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='5s'>
        <div className="size-3 rounded-full bg-emerald-300/20 " />
      </HeroOrbit>
      <HeroOrbit rotation={-72} size={800} shouldOrbit orbitDuration='46s' shouldSpin spinDuration='5s'>
        <StarIcon className="size-28 text-emerald-300 " />
      </HeroOrbit>
      </div>
      {/*------ star -------*/}
      {/*----- hero rings  -----*/}
      <div className="container">
        {/* img container */}
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className='size-[100px]' alt="person peeking from behind laptop" />
          <div className=" bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute rounded-full inset-0 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Open to Software Engineer roles</div>
        </div>
        </div>
        {/* img container */}
        {/* heading */}
        <div className="max-w-xl mx-auto">
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Mohamed Fouad</h1>
          <h2 className='font-serif text-xl md:text-2xl text-center mt-4 text-emerald-300'>Software Engineer | React &middot; Next.js &middot; TypeScript &middot; Node.js</h2>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            Software Engineer based in Riyadh with 2+ years of experience building and delivering production web
            applications across the full stack. I work directly with business departments to replace manual workflows
            with software they use daily, and I build and operate a commercial SaaS product of my own.
          </p>
        </div>
        {/*---------- heading ---------------*/}
        {/* btn container */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 max-w-sm mx-auto md:max-w-none">
          <a
            href="/Mohamed_Fouad_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV as PDF"
            className='hover:cursor-pointer z-50 inline-flex w-full md:w-auto justify-center items-center gap-2 border border-white/15 px-6 h-12 rounded-xl font-semibold hover:bg-white/5 transition-colors'
          >
            <ArrowDown className="size-4" />
            <span>Download CV</span>
          </a>
          <Link href="https://www.linkedin.com/in/mohamed-fouad001" target='_blank' rel='noopener noreferrer' className='hover:cursor-pointer z-50 w-full md:w-auto'>
            <button aria-label="Connect on LinkedIn" className='inline-flex w-full md:w-auto justify-center items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-white/90 transition-colors'>
              <span>👋</span>
              <span className='font-semibold'>Let's Connect</span>
            </button>
          </Link>
        </div>
        {/*---------- btn container ----------*/}
      </div>
    </div>
  );
};
