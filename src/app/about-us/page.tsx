import {WhyChooseUs} from "../../../components/WhyChooseUs";
import Footer from "../../../components/Footer";
import Image from "next/image";
export default function AboutUs() {
    const someStyle = {
        fontFamily: 'Playfair Display, serif',
      };
      const someOtherStyle = {
        fontFamily : 'Open Sans, sans-serif',
      }
    return (
        <div className="flex flex-col justify-center items-center text-center">
      {/* <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
      </div> */}
      <div className="relative min-h-screen">
            <div>
            <Image
                src="/aboutus.jpg"
                alt="Example Image"
                className="w-full"
                layout="responsive"
                width={1000}
                height={1000}
                style={{ width: '100%', height: '100%' }}
            />
            </div>
      </div>
      <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <div className="flex flex-col justify-center items-center text-center relative z-10">
        <div className="flex flex-col justify-center items-center text-center w-3/5 mx-auto py-10">
          <h1 className="text-pink-600 text-3xl font-bold" style={someOtherStyle}>About Us</h1>
          <h1 className="text-4xl font-extrabold mb-5 mt-5" style={someStyle}>Elevating Experiences : Discovering Our Story</h1>
        </div>
      </div>
      <div className="flex px-6 relative z-10">
        <div className="w-1/2 ml-6 justify-center items-center text-center">
        <Image
            src="/navbar_img.png"
            alt="Example Image"
            width={450}
            height={450}
        />
        </div>
        <div className="flex flex-col gap-y-6 w-1/2 text-left items-left">
            <h1>Mann Events, established in 2018, embodies a dedicated team of event planners who infuse artistry, vision, and meticulous attention to detail into every project. Our commitment to delivering unparalleled satisfaction drives us to craft fulfilling experiences tailored to each client's unique needs. With an innovative approach and creative flair, we ensure the success of every event we undertake.</h1>
            <h1>Over the years, Mann Events has had the honor of serving a diverse clientele, spanning corporate sectors, individuals, and non-profit charitable organizations. From pre-wedding celebrations to corporate functions and non-profit fundraisers, we excel in crafting and delivering projects of all sizes and scopes. Our versatility allows us to seamlessly transition between organizing pre-wedding shoots, destination weddings, birthday parties, school events, and more.</h1>
            <h1>Specializing in pre-wedding shoots and destination weddings, Mann Events offers comprehensive wedding services, covering everything from designing flyers and invitation cards to coordinating accommodations, decorations, catering, and beyond. Our ultimate goal is to create events that captivate audiences, ensuring maximum engagement and allowing everyone to cherish and celebrate the special moments of each occasion.</h1>
        </div>
      </div>
      <div className="flex relative z-10 gap-10 px-10 mt-10 ml-10">
        <div className="flex flex-col gap-y-8 w-1/2">
            <div className="justify-center text-center items-center">
                <h1 style={someOtherStyle} className="text-4xl font-extrabold justify-center text-center items-center">Mann Limbachiya</h1>
            </div>
            <div className="justify-center text-center items-center">
                <h1 style={someOtherStyle} className="text-2xl justify-center text-center items-center">Director of Mann Events</h1>
            </div>
            <div className="flex flex-col gap-y-6 text-left items-left">
                <h1>I'm mann limbachiya, and I'm thrilled you've found your way to us. At Mann Events, we're not just planners – we're dreamers, architects of joy, and guardians of tradition.</h1>
                <h1>Since our inception, I've had the honor of crafting unforgettable moments for clients across India. From the bustling streets of Mumbai to the tranquil backwaters of Kerala, each event is a celebration of culture, love, and unity.</h1>
                <h1>But what truly lights up my world? Weddings. In India, weddings are more than just ceremonies – they're a symphony of colors, traditions, and emotions. Whether you're dreaming of a regal palace affair or an intimate village celebration, I'm here to bring your vision to life.</h1>
                <h1>With Mann Events, every detail is meticulously curated to ensure your special day is nothing short of perfection. From traditional rituals to modern extravagance, let me be your guide as we embark on this magical journey together.</h1>
            </div>
            <div>
                <h1 style={someOtherStyle} className="font-bold text-2xl">Let's create memories that will last a lifetime!</h1>
            </div>
        </div>
        <div>
        <Image
            src="/owner.jpg"
            alt="Example Image"
            width={400}
            height={400}
            className="rounded-lg border border-pink-600"
        />
        </div>
      </div>
      <div className="flex flex-col relative z-10 mt-20 mb-20">
        <div>
            <h1 style={someStyle} className="text-4xl font-bold">Why Choose Us</h1>
        </div>
      <div className="grid grid-cols-2 w-4/5 justify-center text-center items-center mx-auto mt-10 gap-x-12 gap-y-6">
        {WhyChooseUs.map((item,index)=>(
            <div className="flex flex-col h-full border border-pink-600 border-4 rounded-lg px-5 py-5 hover:bg-pink-600 hover:text-white justify-center text-center items-center">
            <div className="w-1/5 mx-auto bg-gray-300 py-7 justify-center items-center text-center rounded-lg">
            </div>
            <h1 className="text-4xl font-extrabold mb-5 mt-5" style={someStyle}>
              {item.headline}
            </h1>
            <h1 style={someStyle}>{item.content}</h1>
          </div>
        ))}
      </div>
      </div>
      <div>
        <Footer />
      </div>
      </div>
    </div>
    );
}