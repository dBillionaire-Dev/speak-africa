
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

const Programs = () => {
  return (
    <div>
      <Hero
        title="Our Programs"
        subtitle="Discover how we're empowering youth to create change through our innovative initiatives"
        backgroundImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?w=1200"
        overlayOpacity="opacity-60"
      />

      {/* Core Focus Areas Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Focus Areas" 
            subtitle="Three key areas where we concentrate our efforts to create lasting change" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-lsa-green">
              <h3 className="text-2xl font-bold mb-4">Climate Advocacy</h3>
              <p className="text-gray-600 mb-4">
                We empower youth to become effective advocates for environmental protection and climate action in their communities and beyond.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Community awareness campaigns</li>
                <li>Environmental education initiatives</li>
                <li>Youth-led climate projects</li>
                <li>Public speaking on climate issues</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-lsa-gold">
              <h3 className="text-2xl font-bold mb-4">Women's Rights & Gender Equity</h3>
              <p className="text-gray-600 mb-4">
                We work to advance gender equality and create spaces where women's voices are amplified and valued.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Women's leadership training</li>
                <li>Gender advocacy campaigns</li>
                <li>Safe spaces for dialogue</li>
                <li>Mentorship programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-lsa-black">
              <h3 className="text-2xl font-bold mb-4">Youth Leadership & Public Speaking</h3>
              <p className="text-gray-600 mb-4">
                We build the capacity of young people to articulate their ideas, share their stories, and lead change.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Public speaking workshops</li>
                <li>Storytelling training</li>
                <li>Youth leadership forums</li>
                <li>Community organizing skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section id="storytelling-clubs" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Environmental Storytelling Clubs" 
          />

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800" 
                alt="Environmental Storytelling Club" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Empowering Youth Through Storytelling</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our Environmental Storytelling Clubs bring together young people who use the power of narrative, public speaking, and creative expression to raise awareness about environmental challenges and inspire action.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Each club meets regularly to develop storytelling skills, learn about environmental issues, and create campaigns that engage their communities in protecting the planet.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Club Activities Include:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Storytelling workshops and practice sessions</li>
                  <li>Environmental education and research</li>
                  <li>Community outreach events</li>
                  <li>Digital storytelling and social media campaigns</li>
                  <li>Public speaking competitions</li>
                </ul>
              </div>
              <button className="btn-secondary">Join a Club</button>
            </div>
          </div>
        </div>
      </section>

      <section id="seven-days" className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="7 Days of Environmental Action" 
          />

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800" 
                alt="7 Days of Environmental Action" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">A Week of Coordinated Impact</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our annual 7 Days of Environmental Action campaign mobilizes youth across multiple communities to engage in a week of coordinated activities that drive tangible environmental impact.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Each day of the week focuses on a specific environmental theme, with participants taking concrete actions and sharing their stories to inspire others.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Campaign Highlights:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Community clean-up initiatives</li>
                  <li>Tree planting events</li>
                  <li>Waste reduction and recycling drives</li>
                  <li>Educational workshops and panels</li>
                  <li>Digital storytelling and advocacy</li>
                </ul>
              </div>
              <button className="btn-secondary">Participate in Next Campaign</button>
            </div>
          </div>
        </div>
      </section>

      <section id="voices" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Voices for Her" 
          />

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800" 
                alt="Voices for Her" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Amplifying Women's Voices</h3>
              <p className="text-lg text-gray-700 mb-6">
                Voices for Her is our flagship program dedicated to empowering young women to advocate for gender equity through public speaking, storytelling, and community organizing.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This initiative creates safe spaces for women to share their experiences, develop their leadership abilities, and lead campaigns that address gender-based challenges in their communities.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Program Components:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Public speaking and leadership training</li>
                  <li>Mentorship from established women leaders</li>
                  <li>Gender advocacy campaigns</li>
                  <li>Community dialogue events</li>
                  <li>Digital storytelling initiatives</li>
                </ul>
              </div>
              <button className="btn-secondary">Join Voices for Her</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
