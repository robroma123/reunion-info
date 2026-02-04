import { useState, useEffect } from 'react'
import { MapPin, Star, Calendar, Bed, Dumbbell, Users, Mail, ChevronDown, ChevronUp, Play, FolderOpen, Compass, Sparkles, Heart, TreePine, Waves, Sun, Globe, FileText } from 'lucide-react'

export function April2026Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const showBackToTop = scrollY > 400

  const faqs = [
    {
      question: "Who is this for?",
      answer: "Everyone. This gathering is open to friends, family, colleagues, and anyone who feels called to spend five days in a beautiful setting with good people. You don't need to be a therapist, a yogi, or a wellness expert — just someone who wants to slow down, connect, and recharge."
    },
    {
      question: "What's included in the all-inclusive rate?",
      answer: "Your rate includes taxes & resort fees, farm-to-table meals (breakfast, lunch & dinner), modern accommodations, high-speed Wi-Fi, use of group spaces, access to wellness amenities (pool, hot & cold plunges, infrared saunas, fitness center), yoga & meditation equipment, and a dedicated retreat coordinator for on-site support."
    },
    {
      question: "Do I have to participate in everything?",
      answer: "Not at all. There's no rigid schedule. All activities and workshops are completely optional — you can join as many or as few as you'd like. Want to spend an afternoon reading by the pool or walking the beach? That's exactly what this space is for."
    },
    {
      question: "How do I get there?",
      answer: "Fly into Liberia International Airport (LIR) in Costa Rica, which is less than one hour from the resort. Optional shuttle transportation from the airport can be arranged."
    },
    {
      question: "What accommodation options are available?",
      answer: "Reunion offers 37 rooms total: Garden View and Ocean View Casitas (300 sq ft), Junior Suites (500 sq ft), King Suites (700 sq ft), plus a 3-bedroom oceanfront villa (1,500 sq ft). Rooms can be configured for single or double occupancy with king or queen bed options."
    },
    {
      question: "Is this a plant medicine retreat?",
      answer: "No — this gathering is not framed as a plant medicine retreat. The focus is on rest, connection, and personal renewal through workshops, unstructured time, and shared experiences. That said, Reunion does have Shamankas on property who offer traditional ceremonies as part of the resort's regular programming. If someone feels personally called to participate in ceremony during their stay, that's something that can be explored independently — and there will be plenty of people on campus with integration experience to support you."
    },
    {
      question: "What about the campus buyout option?",
      answer: "One scenario we're exploring is a full campus buyout — the entire resort, exclusively for our group. At 30 participants sharing the cost equally, that comes to roughly $2,500 per person for all five nights, all-inclusive. This is just one illustrative scenario; final pricing depends on the size of the group and other factors. Travel expenses are not included."
    },
    {
      question: "Am I committing by expressing interest?",
      answer: "No. Expressing interest simply helps us get a headcount so we can finalize programming and pricing. There is no obligation or commitment at this stage."
    },
    {
      question: "Will there be more retreats after April?",
      answer: "That's the vision. We're aiming to host different themed retreats at Reunion every other month starting in April. Think of this first gathering as a chance to feel the space out together and lay the groundwork for what comes next."
    }
  ]

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-gray-800 overflow-x-hidden" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`}</style>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-[#2d6a6a]/95 backdrop-blur-sm shadow-md">
          <div className="max-w-6xl mx-auto px-1 md:px-6 py-3 flex items-center justify-center gap-1.5 md:gap-5">
            <a href="#about-retreat" className="text-white/80 hover:text-white text-xs md:text-sm font-medium transition-colors">About</a>
            <a href="#activities" className="text-white/80 hover:text-white text-xs md:text-sm font-medium transition-colors">Activities</a>
            <a href="#venue" className="text-white/80 hover:text-white text-xs md:text-sm font-medium transition-colors">Venue</a>
            <a href="#pricing" className="text-white/80 hover:text-white text-xs md:text-sm font-medium transition-colors"><span className="md:hidden">Pricing</span><span className="hidden md:inline">Estimated Pricing</span></a>
            <a href="#faq" className="text-white/80 hover:text-white text-xs md:text-sm font-medium transition-colors">FAQ's</a>
            <a href="#interest" className="text-white/80 hover:text-white text-xs md:text-sm font-medium transition-colors">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#2d6a6a] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#245757] ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/reunion2.jpg)'}}>
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-14 pb-28 md:pt-0 md:pb-0">
          <p className="text-white text-sm sm:text-xl md:text-3xl lg:text-4xl uppercase tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.2em] mb-4 font-bold">Reunion Wellness Resort & Retreats</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">April 13–18, 2026</h1>
          <p className="text-lg md:text-2xl text-white mb-4 font-bold">Sugar Beach, Costa Rica  •  Blue Zone</p>
          <p className="text-lg md:text-2xl text-gray-100 mb-4 max-w-2xl mx-auto font-medium">Five days to slow down, reconnect, and just be.</p>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto px-2">An oceanfront gathering for friends, family, and colleagues — no agenda, no pressure, just good people in an extraordinary place.</p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#video" className="bg-[#2d6a6a] hover:bg-[#1a4a4a] text-white font-medium px-6 py-2 rounded-full flex items-center gap-2 transition-colors shadow-lg">
            See More
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Featured Video Section */}
      <section id="video" className="py-16 md:py-24 px-6 bg-gradient-to-b from-[#1a4a4a] to-[#2d6a6a] scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-400 text-gray-900 text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">Featured Video</span>
            <h2 className="text-3xl md:text-5xl font-normal text-white mb-6">See Where We're Going</h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">Take a look at Reunion Wellness Resort — an <span className="font-bold">oceanfront sanctuary</span> in Costa Rica's Blue Zone with <span className="font-bold">world-class amenities</span>, <span className="font-bold">farm-to-table dining</span>, and the kind of setting that makes a retreat unforgettable.</p>
            <a href="https://youtu.be/8stcnRVyRaU" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 text-lg md:text-xl mt-8">
              <Play className="w-5 h-5 md:w-6 md:h-6" />
              Having trouble viewing? Watch directly on YouTube
            </a>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute -inset-4 bg-amber-400/20 rounded-2xl blur-xl"></div>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl border-4 border-amber-400/30">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/8stcnRVyRaU"
                title="Reunion Wellness Resort"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More — Media & Resources */}
      <section id="explore" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Explore Reunion</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Photos, videos, and presentations to help you get a feel for the property and what's possible.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://e.pcloud.link/publink/show?code=kZKIeaZccPqKIA4174xWnmLWBrlpYKMKi3X"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow group"
            >
              <FolderOpen className="w-16 h-16 text-[#2d6a6a] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Reunion Media Folder</h3>
              <p className="text-gray-700 text-sm">Browse additional photos and media</p>
            </a>
            <a
              href="https://www.youtube.com/@ReunionExperience"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow group"
            >
              <Play className="w-16 h-16 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Reunion YouTube Channel</h3>
              <p className="text-gray-700 text-sm">Watch videos from Reunion Experience</p>
            </a>
            <a
              href="/reunion_1_2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow group"
            >
              <FileText className="w-16 h-16 text-[#2d6a6a] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Reunion Presentation — Part 1</h3>
              <p className="text-gray-700 text-sm">Originally created for retreat hosts — but a great way to see the property in detail</p>
            </a>
            <a
              href="/reunion_2_2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow group"
            >
              <FileText className="w-16 h-16 text-[#2d6a6a] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Reunion Presentation — Part 2</h3>
              <p className="text-gray-700 text-sm">Amenities, accommodations, and logistics — also created for hosts</p>
            </a>
          </div>
        </div>
      </section>

      {/* About the Retreat */}
      <section id="about-retreat" className="py-24 px-6 bg-[#f5f3ef] scroll-mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">What This Is</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">A group of friends, family, and colleagues are heading to Costa Rica for five days — and we'd love for you to join us.</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">This isn't a packed itinerary or a "do as much as you can" kind of week. It's the opposite. Think of it as a space to slow down, breathe, connect with good people, and just <span className="italic font-medium text-gray-800">be</span>. Less is more.</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">That said, we have a group of talented facilitators — psychotherapists, coaches, wellness practitioners — who each bring unique gifts. Depending on who shows up and what the group wants, there may be opportunities for things like dance workshops, inner work sessions, spirituality circles, "filling the well" practices, logotherapy explorations, movement, or simply deep conversation around a fire pit.</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">Everything is optional. Nothing is mandatory. The goal is rest, renewal, and genuine connection — at whatever pace feels right for you.</p>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-bold">We're currently gauging interest. The number of people who join shapes both the experience and the pricing — so the first step is simply letting us know that you're interested.</p>
        </div>
      </section>

      {/* What You Can Do Here */}
      <section id="activities" className="py-24 px-6 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What You Can Do Here</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Or don't do. The beauty is that it's entirely up to you. Here's a taste of what's possible.</p>
          </div>

          {/* On-Site Spaces & Wellness */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-[#2d6a6a] mb-8 text-center">On-Site Spaces & Wellness</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <Sparkles className="w-8 h-8 text-[#2d6a6a] mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Yoga Shala & Meditation Temple</h4>
                <p className="text-gray-700 text-sm">Dedicated spaces for practice, stillness, and contemplation — on your own or with the group.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <TreePine className="w-8 h-8 text-[#2d6a6a] mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Maloca & Fire Pit</h4>
                <p className="text-gray-700 text-sm">A traditional open-air ceremony space and a fire pit — perfect for evening circles and conversation.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <Heart className="w-8 h-8 text-[#2d6a6a] mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Spa & Massage</h4>
                <p className="text-gray-700 text-sm">On-site spa treatments and massage therapy available to book during your stay.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <Waves className="w-8 h-8 text-[#2d6a6a] mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Pool, Plunges & Saunas</h4>
                <p className="text-gray-700 text-sm">Saltwater infinity pool, hot & cold plunge pools, and infrared saunas — all included.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <Dumbbell className="w-8 h-8 text-[#2d6a6a] mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Fitness Center</h4>
                <p className="text-gray-700 text-sm">Fully equipped gym if you want to keep up your routine — or try something new.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <Sun className="w-8 h-8 text-[#2d6a6a] mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Tranquility Gardens</h4>
                <p className="text-gray-700 text-sm">Walk the grounds, find a quiet bench, and soak in the natural beauty of the Blue Zone setting.</p>
              </div>
            </div>
          </div>

          {/* Excursions & Adventures */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-[#2d6a6a] mb-8 text-center">Excursions & Adventures</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <Compass className="w-8 h-8 text-[#2d6a6a] mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Sunset Catamaran</h4>
                <p className="text-gray-700 text-sm">Sail the Pacific coast at golden hour with snorkeling stops and ocean views.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <Waves className="w-8 h-8 text-[#2d6a6a] mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Snorkeling</h4>
                <p className="text-gray-700 text-sm">Explore the marine life along Costa Rica's Guanacaste coast.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <TreePine className="w-8 h-8 text-[#2d6a6a] mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Coffee Farm Tours</h4>
                <p className="text-gray-700 text-sm">Visit local coffee farms and learn about Costa Rica's world-famous coffee culture.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <MapPin className="w-8 h-8 text-[#2d6a6a] mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Nearby Beaches</h4>
                <p className="text-gray-700 text-sm">Explore neighboring beaches and hidden coves along the Pacific coast.</p>
              </div>
            </div>
          </div>

          {/* Workshops & Sessions */}
          <div>
            <h3 className="text-2xl font-medium text-[#2d6a6a] mb-8 text-center">Workshops & Sessions</h3>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">These are possibilities, not a fixed schedule. What actually happens will depend on who's there and what the group is feeling. Every one of us brings different gifts.</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <h4 className="font-medium text-gray-800 mb-2">Inner Work & Reflection</h4>
                <p className="text-gray-700 text-sm">Guided explorations of your inner landscape — emotional, psychological, and spiritual.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <h4 className="font-medium text-gray-800 mb-2">Dance & Movement</h4>
                <p className="text-gray-700 text-sm">Get out of your head and into your body with facilitated movement practices.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <h4 className="font-medium text-gray-800 mb-2">Spirituality & Meaning</h4>
                <p className="text-gray-700 text-sm">Non-dogmatic, inclusive conversations about purpose, meaning, and what matters most.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <h4 className="font-medium text-gray-800 mb-2">Filling the Well</h4>
                <p className="text-gray-700 text-sm">Practices for replenishment — creative, contemplative, and restorative.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <h4 className="font-medium text-gray-800 mb-2">Wellness & Self-Care</h4>
                <p className="text-gray-700 text-sm">From breathwork to body awareness — tools you can take home with you.</p>
              </div>
              <div className="bg-[#f5f3ef] p-6 rounded-sm text-center">
                <h4 className="font-medium text-gray-800 mb-2">Logotherapy</h4>
                <p className="text-gray-700 text-sm">Explorations rooted in Viktor Frankl's approach to finding meaning in life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="venue" className="py-16 px-6 bg-[#f5f3ef] scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">The Venue</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <MapPin className="w-10 h-10 text-[#2d6a6a] mx-auto mb-4" />
              <h3 className="font-medium text-gray-800 mb-2">Oceanfront Sanctuary</h3>
              <p className="text-gray-700 text-sm">Sugar Beach, Guanacaste, Costa Rica</p>
            </div>
            <div className="text-center p-6">
              <Star className="w-10 h-10 text-[#2d6a6a] mx-auto mb-4" />
              <h3 className="font-medium text-gray-800 mb-2">All-Inclusive</h3>
              <p className="text-gray-700 text-sm">Meals, amenities & support included</p>
            </div>
            <div className="text-center p-6">
              <Calendar className="w-10 h-10 text-[#2d6a6a] mx-auto mb-4" />
              <h3 className="font-medium text-gray-800 mb-2">5 Nights</h3>
              <p className="text-gray-700 text-sm">April 13–18, 2026</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-10 h-10 text-[#2d6a6a] mx-auto mb-4" />
              <h3 className="font-medium text-gray-800 mb-2">Adults Only</h3>
              <p className="text-gray-700 text-sm">Private, gated resort in a Blue Zone</p>
            </div>
          </div>
        </div>
      </section>

      {/* A Setting Designed for Renewal */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">A Setting Designed for Renewal</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">Reunion is a private, gated, adults-only resort on Costa Rica's Pacific coast — located in one of the world's five Blue Zones, regions known for longevity and well-being.</p>
          <p className="text-lg text-gray-700 leading-relaxed">With world-class wellness amenities, farm-to-table dining, and an oceanfront setting, this is the kind of environment that allows you to fully disconnect from the everyday and focus on what matters. The property is set up so you can basically just show up and be taken care of.</p>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-24 px-6 bg-[#f5f3ef]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Accommodations</h2>
          <p className="text-center text-gray-700 mb-12">37 rooms plus a 3-bedroom oceanfront villa — all with modern amenities</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-sm">
              <Bed className="w-8 h-8 text-[#2d6a6a] mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Casitas</h3>
              <p className="text-gray-700 text-sm mb-2">300 sq ft</p>
              <p className="text-gray-600 text-sm">Garden or Ocean View options. 1 King or 2 Queen beds, up to 2 adults.</p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <Bed className="w-8 h-8 text-[#2d6a6a] mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Junior Suites</h3>
              <p className="text-gray-700 text-sm mb-2">500 sq ft</p>
              <p className="text-gray-600 text-sm">Open-plan with living area, hammock chairs on terrace. 1 King or 2 Queen beds.</p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <Bed className="w-8 h-8 text-[#2d6a6a] mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">King Suites</h3>
              <p className="text-gray-700 text-sm mb-2">700 sq ft</p>
              <p className="text-gray-600 text-sm">Separate living and sleeping spaces, flat-screen TV, expansive balcony, pool view.</p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <Bed className="w-8 h-8 text-[#2d6a6a] mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">3-BR Oceanfront Villa</h3>
              <p className="text-gray-700 text-sm mb-2">1,500 sq ft</p>
              <p className="text-gray-600 text-sm">Master ensuite, kitchen, living/dining areas, direct beach access. Up to 6 adults.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Transparency Section */}
      <section id="pricing" className="py-24 px-6 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">Estimated Pricing</h2>
          <p className="text-center text-gray-700 mb-4 max-w-2xl mx-auto">We want to be completely upfront about costs so there are no surprises. Here's everything we know right now.</p>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto font-medium">Final pricing depends on the size of the group. Once we have a headcount, we'll lock in exact numbers and share them with everyone.</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Base Rates */}
            <div className="bg-[#f5f3ef] p-8 rounded-sm">
              <h3 className="text-xl font-bold text-[#2d6a6a] mb-4">REUNION BASE RATES - NO BUYOUT SCENARIO <span className="underline">(MOST LIKELY RIGHT NOW)</span></h3>
              <p className="text-sm text-gray-600 mb-6 font-bold">High Season (December–April) • All-Inclusive</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Double Occupancy</span>
                  <span className="font-medium text-gray-800">$250/night</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Single Occupancy</span>
                  <span className="font-medium text-gray-800">$350/night</span>
                </div>
                <div className="border-t border-gray-300 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">5 nights (double)</span>
                    <span className="font-medium text-gray-800">$1,250/person</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-700">5 nights (single)</span>
                    <span className="font-medium text-gray-800">$1,750/person</span>
                  </div>
                </div>
              </div>
              <p className="text-base text-gray-600 mt-6 font-bold">April 13–18, 2026</p>
              <p className="text-sm text-gray-600 mt-4 font-bold">We are trying to keep the experience affordable, especially given short notice. So, we will try to stay within this pricing framework, but will have a much better idea once we gauge interest. Please let us know!</p>
            </div>

            {/* Campus Buyout Scenario */}
            <div className="bg-[#f5f3ef] p-8 rounded-sm border-2 border-[#2d6a6a]/20">
              <h3 className="text-xl font-bold text-[#2d6a6a] mb-4">CAMPUS BUYOUT SCENARIO</h3>
              <p className="text-sm text-gray-600 mb-6 font-bold">The entire resort, exclusively for our group</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Buyout rate</span>
                  <span className="font-medium text-gray-800">$15,000/night</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Full buyout (5 nights)</span>
                  <span className="font-medium text-gray-800">$75,000</span>
                </div>
                <div className="border-t border-gray-300 pt-3 mt-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">~ 30 participants</span>
                    <span className="font-bold text-[#2d6a6a] text-lg">≈ $2,500 each</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">~ 40 participants</span>
                    <span className="font-bold text-[#2d6a6a] text-lg">≈ $1,875 each</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">~ 50 participants</span>
                    <span className="font-bold text-[#2d6a6a] text-lg">≈ $1,500 each</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 font-bold">Illustrative scenario — final split depends on group size and other factors. This represents a possible minimum p/p only. <span className="underline">THIS IS AN ESTIMATE ONLY.</span></p>
            </div>
          </div>

          {/* What's included vs. not included */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#2d6a6a]/5 p-6 rounded-sm">
              <h4 className="font-bold text-[#2d6a6a] mb-3">Included in your rate</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• All meals (breakfast, lunch, dinner)</li>
                <li>• Accommodations for 5 nights</li>
                <li>• All wellness amenities (pool, plunges, saunas, gym)</li>
                <li>• Yoga & meditation equipment</li>
                <li>• Group spaces and A/V equipment</li>
                <li>• Dedicated retreat coordinator</li>
                <li>• High-speed Wi-Fi</li>
                <li>• Taxes and resort fees</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <h4 className="font-bold text-gray-700 mb-3">Not included</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Flights to Liberia International Airport (LIR)</li>
                <li>• Airport transfers / ground transportation</li>
                <li>• Spa treatments and massage (available to book on-site)</li>
                <li>• Off-site excursions (catamaran, snorkeling, etc.)</li>
                <li>• Personal expenses and gratuities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-[#f5f3ef] scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-sm overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2d6a6a] transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Express Interest / Contact Section */}
      <section id="interest" className="py-24 px-6 bg-[#2d6a6a] text-white scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">We'd Love to Have You</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-6 max-w-2xl mx-auto font-bold">If any part of this resonates — even a little — please reach out to the facilitator who shared this page with you. We're building a headcount to finalize programming and pricing, so hearing from you makes a real difference.</p>
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto font-bold">No commitment, no pressure — just let us know you're interested and we'll take it from there.</p>
          </div>

          <h3 className="text-2xl font-bold underline text-center text-white/90 mb-10">Reach Out to the Person Who Sent You Here</h3>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Dr. Daniel A. Franz */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <h4 className="text-lg font-bold text-white mb-1">Dr. Daniel A. Franz</h4>
              <p className="text-amber-300 text-sm mb-4">Psychologist</p>
              <div className="space-y-2">
                <a href="mailto:DrDan@DanielAFranz.com" className="flex items-center justify-center gap-2 text-gray-200 hover:text-amber-300 text-sm transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  DrDan@DanielAFranz.com
                </a>
                <a href="https://danielafranz.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-gray-200 hover:text-amber-300 text-sm transition-colors">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  danielafranz.com
                </a>
              </div>
            </div>

            {/* Jenna Kuru */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <h4 className="text-lg font-bold text-white mb-1">Jenna Kuru, PMHNP-BC</h4>
              <p className="text-amber-300 text-sm mb-4">Psychiatric Nurse Practitioner</p>
              <div className="space-y-2">
                <a href="mailto:jenna.kuru@concordisbh.com" className="flex items-center justify-center gap-2 text-gray-200 hover:text-amber-300 text-sm transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  jenna.kuru@concordisbh.com
                </a>
                <a href="https://www.concordisbh.com/jenna-kuru-psychiatric-nurse-practitioner-walnut-creek" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-gray-200 hover:text-amber-300 text-sm transition-colors">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  concordisbh.com
                </a>
              </div>
            </div>

            {/* Michael Martone */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <h4 className="text-lg font-bold text-white mb-1">Michael Martone</h4>
              <p className="text-amber-300 text-sm mb-4">Life Coach & Author</p>
              <div className="space-y-2">
                <a href="mailto:michaelmartone@gmail.com" className="flex items-center justify-center gap-2 text-gray-200 hover:text-amber-300 text-sm transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  michaelmartone@gmail.com
                </a>
                <a href="https://www.mikemartone.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-gray-200 hover:text-amber-300 text-sm transition-colors">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  mikemartone.com
                </a>
              </div>
            </div>

            {/* Robert Romano */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <h4 className="text-lg font-bold text-white mb-1">Robert Romano, LCSW</h4>
              <p className="text-amber-300 text-sm mb-4">Psychotherapist</p>
              <div className="space-y-2">
                <a href="mailto:retreats@robromano.com" className="flex items-center justify-center gap-2 text-gray-200 hover:text-amber-300 text-sm transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  retreats@robromano.com
                </a>
                <a href="https://robromano.com/about" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-gray-200 hover:text-amber-300 text-sm transition-colors">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  robromano.com
                </a>
              </div>
            </div>

            {/* Zhi Wei Zheng */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <h4 className="text-lg font-bold text-white mb-1">Zhi Wei Zheng</h4>
              <p className="text-amber-300 text-sm mb-4">Life Coach & Author</p>
              <div className="space-y-2">
                <a href="mailto:momentswithz@gmail.com" className="flex items-center justify-center gap-2 text-gray-200 hover:text-amber-300 text-sm transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  momentswithz@gmail.com
                </a>
                <a href="https://www.instagram.com/momentswithzhi/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-gray-200 hover:text-amber-300 text-sm transition-colors">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  Moments with Zhi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-gray-900 text-gray-400 text-center text-sm leading-tight">
        <p className="text-gray-300 font-medium">Reunion Wellness Resort & Retreats</p>
        <p>Sugar Beach, Guanacaste, Costa Rica</p>
        <a href="https://www.reunionexperience.org" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">www.reunionexperience.org</a>
        <p className="mt-2 text-white text-sm">This retreat is independently organized. Reunion Wellness Resort provides the venue, accommodations, and on-site support.</p>
      </footer>
    </div>
  )
}
