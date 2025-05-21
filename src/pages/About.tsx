
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div>
      <Hero
        title="About Let's Speak Africa"
        subtitle="Learn more about our mission, vision, and the people behind our organization"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200"
        overlayOpacity="opacity-60"
      />

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Our Mission" centered={false} />
              <p className="text-lg text-gray-700 mb-6">
                Let's Speak Africa empowers youth across Africa to use their voices through storytelling, public speaking, and art to drive meaningful change in climate action, gender equity, and social justice.
              </p>
              <p className="text-lg text-gray-700">
                We create platforms and programs that amplify the voices of young people, allowing them to shape the narrative around critical issues affecting their communities and the continent.
              </p>
            </div>

            <div>
              <SectionTitle title="Our Vision" centered={false} />
              <p className="text-lg text-gray-700 mb-6">
                We envision an Africa where young people are at the forefront of creating equitable, sustainable, and just communities through the power of their stories and advocacy.
              </p>
              <p className="text-lg text-gray-700">
                By 2030, we aim to have empowered over 10,000 youth advocates across 20 African countries, creating a network of changemakers driving positive transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide our work and define our organization" 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Youth Leadership</h3>
              <p className="text-gray-600">
                We believe in the power, creativity, and passion of young people to lead change in their communities and beyond.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We create spaces where all voices are heard, respected, and valued, regardless of background or identity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Storytelling</h3>
              <p className="text-gray-600">
                We harness the transformative power of stories to connect, educate, inspire, and drive action.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Environmental Sustainability</h3>
              <p className="text-gray-600">
                We are committed to promoting practices that protect our planet and creating a sustainable future for generations to come.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Gender Equity</h3>
              <p className="text-gray-600">
                We actively work to dismantle barriers and create equal opportunities for all genders in leadership and society.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We build partnerships and alliances to amplify our impact and create sustainable change at all levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600"
                alt="Ruth Bassey Okim" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-3/5">
              <SectionTitle 
                title="Our Founder" 
                subtitle="Meet Ruth Bassey Okim (Ruth Reje)" 
                centered={false}
              />
              <p className="text-lg text-gray-700 mb-6">
                Ruth Bassey Okim, also known as Ruth Reje, is a passionate youth activist, environmental advocate, and speaker who founded Let's Speak Africa with a vision to empower young Africans to use their voices for change.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a background in environmental science and communication, Ruth has led various initiatives across Nigeria and beyond, working to address climate challenges, promote gender equity, and create platforms for youth leadership.
              </p>
              <p className="text-lg text-gray-700">
                Under her leadership, Let's Speak Africa has grown from a local initiative to a movement that spans multiple cities, empowering thousands of young people to become advocates for positive change in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Journey" 
            subtitle="How Let's Speak Africa has evolved over the years" 
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lsa-gold"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 gap-12">
              <TimelineItem 
                year="2018"
                title="The Beginning"
                description="Ruth Bassey Okim founded Let's Speak Africa as a community initiative in Lagos, Nigeria, focusing on environmental storytelling."
                isLeft={true}
              />

              <TimelineItem 
                year="2019"
                title="First Environmental Storytelling Club"
                description="Launched our first youth club with 20 members, focusing on using stories to raise awareness about local environmental challenges."
                isLeft={false}
              />

              <TimelineItem 
                year="2020"
                title="Expansion to Multiple Cities"
                description="Expanded our reach to two additional cities in Nigeria, training 50+ youth advocates and launching the Voices for Her program."
                isLeft={true}
              />

              <TimelineItem 
                year="2021"
                title="7 Days of Environmental Action"
                description="Organized our first coordinated week of environmental action, mobilizing over 500 youth across multiple communities."
                isLeft={false}
              />

              <TimelineItem 
                year="2022"
                title="International Recognition"
                description="Received our first international grant and recognition for our innovative approach to youth advocacy and climate action."
                isLeft={true}
              />

              <TimelineItem 
                year="2023"
                title="Today and Beyond"
                description="Continuing to grow our impact with over 2,000 youth reached, 3+ cities with active clubs, and 100+ trained advocates."
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ year, title, description, isLeft }: { year: string; title: string; description: string; isLeft: boolean }) => {
  return (
    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center`}>
      <div className={`w-1/2 ${isLeft ? 'text-right pr-12' : 'pl-12'}`}>
        <div className={`bg-white p-6 rounded-lg shadow-md ${isLeft ? 'ml-auto' : 'mr-auto'} max-w-md`}>
          <h3 className="text-lsa-gold font-bold text-xl mb-2">{year}</h3>
          <h4 className="font-bold text-lg mb-3">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="relative z-10">
        <div className="w-6 h-6 bg-lsa-gold rounded-full"></div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default About;
