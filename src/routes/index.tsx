import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { MapPin, Users, Star, Calendar, Bed, UtensilsCrossed, Dumbbell, Mail, Phone, ExternalLink, ChevronDown, ChevronUp, FolderOpen, Play } from 'lucide-react'

function ReunionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showNav = scrollY > 200
  const showBackToTop = scrollY > 400

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const faqs = [
    {
      question: "What's included in the all-inclusive rate?",
      answer: "Your rate includes taxes & resort fees, farm-to-table meals (breakfast, lunch & dinner), modern accommodations, high-speed Wi-Fi, use of group spaces, access to wellness amenities (pool, hot & cold plunges, infrared saunas, fitness center), yoga & meditation equipment, A/V equipment & set-up support, retreat listing on their website, and a dedicated retreat coordinator for planning and on-site support."
    },
    {
      question: "What types of retreats thrive at Reunion?",
      answer: "Reunion hosts a wide variety of retreats including yoga & meditation, training & workshops, health & wellness, breathwork & sound healing, spiritual inquiry, and personal development. The flexible spaces and comprehensive support make it suitable for many different retreat formats."
    },
    {
      question: "How do I get there?",
      answer: "Fly into Liberia International Airport (LIR) in Costa Rica, which is less than one hour from the resort. Optional shuttle transportation from the airport can be arranged as an additional enhancement."
    },
    {
      question: "What accommodation options are available?",
      answer: "Reunion offers 37 rooms total: Garden View and Ocean View Casitas (300 sq ft), Junior Suites (500 sq ft), King Suites (700 sq ft), plus a 3-bedroom oceanfront villa (1,500 sq ft). Rooms can be configured for single or double occupancy with king or queen bed options."
    },
    {
      question: "What group sizes can Reunion accommodate?",
      answer: "Reunion can host groups ranging from 5 to 75+ guests, including hosts. Full campus buy-out options are available for larger groups."
    },
    {
      question: "What are the seasonal pricing differences?",
      answer: "High Season (December-April): $250/night double occupancy, $350/night single occupancy. Green Season (May-November): $200/night double occupancy, $280/night single occupancy. Minimum 4 nights required."
    }
  ]

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-gray-800">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showNav
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="bg-[#2d6a6a]/95 backdrop-blur-sm shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-center gap-8">
            <button onClick={() => scrollToSection('featured-video')} className="text-white/80 hover:text-white text-sm font-medium transition-colors">Video</button>
            <button onClick={() => scrollToSection('explore')} className="text-white/80 hover:text-white text-sm font-medium transition-colors">Explore</button>
            <button onClick={() => scrollToSection('pricing')} className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-white/80 hover:text-white text-sm font-medium transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white text-sm font-medium transition-colors">Contact</button>
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

      {/* Disclaimer Banner */}
      <div className="bg-amber-100 border-b-2 border-amber-300 px-5 py-3 text-center">
        <p className="text-sm md:text-base text-amber-900 leading-snug max-w-4xl mx-auto">
          <span className="font-bold">Please Note:</span> This is <span className="font-bold uppercase">NOT</span> an official Reunion website, nor am I representing, affiliated with, or endorsing Reunion or IPI in any formal capacity. This resource was created by an IPI graduate who is also a former Reunion Retreat Guest.
        </p>
        <p className="text-sm md:text-base text-amber-900 leading-snug max-w-4xl mx-auto mt-2 font-bold">
          This resource page is optimized for desktop or tablet viewing and may not display properly on mobile devices (iPhone/Android).
        </p>
        <p className="text-sm md:text-base text-amber-900 leading-snug max-w-4xl mx-auto mt-2">
          My name is Robert Romano, and after my own profound retreat experience at Reunion—which genuinely transformed my life—I've been discussing this venue with IPI graduates and friends of IPI for nearly two years.
        </p>
        <p className="text-sm md:text-base text-amber-900 leading-snug max-w-4xl mx-auto mt-2">
          Haamid from Reunion was kind enough to meet with a few IPI colleagues and friends of IPI to present an overview of what Reunion has to offer and answer questions. He also provided comprehensive PDFs with detailed information about the retreat space and pricing. I created this page to share those materials that Haamid has provided and make them accessible to others who have been inquiring about Reunion.
        </p>
        <p className="text-sm md:text-base text-amber-900 leading-snug max-w-4xl mx-auto mt-2">
          Below you'll find a private, edited YouTube video of our very informative Zoom session with Haamid, along with the PDFs he supplied and some additional information you might be interested in regarding hosting a retreat.
        </p>
        <p className="text-sm md:text-base text-amber-900 leading-snug max-w-4xl mx-auto mt-2">
          If you're interested in facilitating and/or co-facilitating retreats with other IPI grads and friends of IPI, please reach out to me at: <a href="mailto:retreats@robromano.com" className="underline hover:text-amber-950 font-bold">retreats@robromano.com</a>. I'm not looking to be a middleman long-term, but I would like to help establish those initial connections where there is interest, and then step back.
        </p>
        <p className="text-sm md:text-base text-amber-900 leading-snug max-w-4xl mx-auto mt-4 font-semibold">
          For all official Reunion information, questions about hosting, pricing, and bookings, please contact Haamid directly (Haamid is the formal authority on all offerings Reunion related):
        </p>
        <div className="mt-2 text-sm md:text-base text-amber-900 font-semibold leading-snug">
          <p className="font-bold">HAAMID DASH, Director of Enrollment</p>
          <p>Phone: +1 888-328-5317 x 100</p>
          <p>Email: <a href="mailto:haamid.dash@reunionexperience.org" className="underline hover:text-amber-950">haamid.dash@reunionexperience.org</a></p>
          <p>Web: <a href="https://www.reunionwellness.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-950">www.reunionwellness.org</a></p>
          <p>Location: Sugar Beach, Guanacaste, Costa Rica</p>
        </div>
        <p className="text-sm md:text-base text-amber-900 leading-snug max-w-4xl mx-auto mt-4 font-bold underline">
          Be sure to mention you're an IPI grad or a friend of IPI when you reach out!
        </p>
      </div>

      {/* Featured Video Section */}
      <section id="featured-video" className="py-16 md:py-24 px-6 bg-gradient-to-b from-[#1a4a4a] to-[#2d6a6a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-400 text-gray-900 text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">Featured Video</span>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">Hear Directly from Haamid</h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">Watch this Q&A session where colleagues discuss their questions about hosting retreats at Reunion with Director of Enrollment, Haamid Dash. This video answers many of the most common questions potential retreat hosts have.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-400/20 rounded-2xl blur-xl"></div>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl border-4 border-amber-400/30">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/FIcR_tAMt0M" 
                title="Reunion Wellness Q&A with Haamid Dash" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-amber-300 text-lg font-medium mb-2">Have questions after watching?</p>
            <p className="text-gray-300 mb-2">Contact Haamid directly at <a href="mailto:haamid.dash@reunionexperience.org" className="text-amber-400 hover:text-amber-300 underline">haamid.dash@reunionexperience.org</a> or call <a href="tel:+18883285317" className="text-amber-400 hover:text-amber-300 underline">+1 888-328-5317 x 100</a>.</p>
            <p className="text-gray-300 font-bold underline">Let him know you are an IPI grad or a friend of IPI!</p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/reunion2.jpg)'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-teal-300 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium">Reunion Wellness Resort & Retreats</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">Host With Confidence</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">Sugar Beach, Costa Rica  •  Blue Zone Location</p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">An adults-only oceanfront wellness resort and retreat center designed for rest, clarity, and genuine renewal.</p>
          <a href="#learn-more" className="inline-block bg-[#2d6a6a] hover:bg-[#245757] text-white px-10 py-4 rounded-sm text-lg font-medium transition-all duration-300 tracking-wide">Learn More</a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Features Section */}
      <section id="learn-more" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <MapPin className="w-10 h-10 text-[#2d6a6a] mx-auto mb-4" />
              <h3 className="font-medium text-gray-800 mb-2">Oceanfront Sanctuary</h3>
              <p className="text-gray-600 text-sm">Sugar Beach, Guanacaste, Costa Rica</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-10 h-10 text-[#2d6a6a] mx-auto mb-4" />
              <h3 className="font-medium text-gray-800 mb-2">Flexible Capacity</h3>
              <p className="text-gray-600 text-sm">5 to 75+ guests</p>
            </div>
            <div className="text-center p-6">
              <Star className="w-10 h-10 text-[#2d6a6a] mx-auto mb-4" />
              <h3 className="font-medium text-gray-800 mb-2">All-Inclusive</h3>
              <p className="text-gray-600 text-sm">Meals, amenities & support included</p>
            </div>
            <div className="text-center p-6">
              <Calendar className="w-10 h-10 text-[#2d6a6a] mx-auto mb-4" />
              <h3 className="font-medium text-gray-800 mb-2">Minimum 4 Nights</h3>
              <p className="text-gray-600 text-sm">Flexible scheduling available</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-[#f5f3ef]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">A Setting That Elevates Your Experience</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">Reunion is committed to providing a well-supported, professionally managed environment so you can focus fully on the work you're here to lead. Combined with your programming, this creates an experience guests will remember — and want to return to.</p>
          <p className="text-lg text-gray-600 leading-relaxed">Located in Costa Rica's Blue Zone, this private, gated, adults-only resort offers world-class wellness amenities, farm-to-table dining, and dedicated coordination support for retreats of all types.</p>
        </div>
      </section>

      {/* Explore Reunion Section */}
      <section id="explore" className="py-24 px-6 bg-[#f5f3ef]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Explore Reunion</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Navigate through the Reunion powerpoint presentations to discover everything Reunion has to offer.</p>
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 bg-[#2d6a6a] text-white flex items-center justify-between">
                <h3 className="text-lg font-medium">Reunion Presentation - Part 1</h3>
                <a href="/reunion_1_2.pdf" download className="text-sm bg-amber-400 text-gray-900 px-4 py-2 rounded hover:bg-amber-300 transition-colors">Download PDF</a>
              </div>
              <div className="aspect-[4/3] w-full">
                <iframe src="/reunion_1_2.pdf" width="100%" height="100%" title="Reunion Presentation Part 1" className="w-full h-full border-0"></iframe>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 bg-[#2d6a6a] text-white flex items-center justify-between">
                <h3 className="text-lg font-medium">Reunion Presentation - Part 2</h3>
                <a href="/reunion_2_2.pdf" download className="text-sm bg-amber-400 text-gray-900 px-4 py-2 rounded hover:bg-amber-300 transition-colors">Download PDF</a>
              </div>
              <div className="aspect-[4/3] w-full">
                <iframe src="/reunion_2_2.pdf" width="100%" height="100%" title="Reunion Presentation Part 2" className="w-full h-full border-0"></iframe>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 bg-[#2d6a6a] text-white flex items-center justify-between">
                <h3 className="text-lg font-medium">Reunion Pricing Information</h3>
                <a href="/reunion_pricing.pdf" download className="text-sm bg-amber-400 text-gray-900 px-4 py-2 rounded hover:bg-amber-300 transition-colors">Download PDF</a>
              </div>
              <div className="aspect-[4/3] w-full">
                <iframe src="/reunion_pricing.pdf" width="100%" height="100%" title="Reunion Pricing Information" className="w-full h-full border-0"></iframe>
              </div>
            </div>

            {/* External Resource Links */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <a
                href="https://mgltdca-my.sharepoint.com/personal/kathryn_winstanley_mgltd_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fkathryn%5Fwinstanley%5Fmgltd%5Fca%2FDocuments%2F3rd%20Party%20Retreat%20Host%20%2D%20Info%20Pack%20Links&ga=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow group"
              >
                <FolderOpen className="w-16 h-16 text-[#2d6a6a] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">Reunion Media Folder</h3>
                <p className="text-gray-600 text-sm">Browse additional photos and media</p>
              </a>
              <a
                href="https://www.youtube.com/@ReunionExperience"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow group"
              >
                <Play className="w-16 h-16 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">Reunion YouTube Channel</h3>
                <p className="text-gray-600 text-sm">Watch videos from Reunion Experience</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-4">Accommodations</h2>
          <p className="text-center text-gray-600 mb-12">37 rooms plus a 3-bedroom oceanfront villa — all with modern amenities</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f5f3ef] p-6 rounded-sm">
              <Bed className="w-8 h-8 text-[#2d6a6a] mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Casitas</h3>
              <p className="text-gray-600 text-sm mb-2">300 sq ft</p>
              <p className="text-gray-500 text-sm">Garden or Ocean View options. 1 King or 2 Queen beds, up to 2 adults.</p>
            </div>
            <div className="bg-[#f5f3ef] p-6 rounded-sm">
              <Bed className="w-8 h-8 text-[#2d6a6a] mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Junior Suites</h3>
              <p className="text-gray-600 text-sm mb-2">500 sq ft</p>
              <p className="text-gray-500 text-sm">Open-plan with living area, hammock chairs on terrace. 1 King or 2 Queen beds.</p>
            </div>
            <div className="bg-[#f5f3ef] p-6 rounded-sm">
              <Bed className="w-8 h-8 text-[#2d6a6a] mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">King Suites</h3>
              <p className="text-gray-600 text-sm mb-2">700 sq ft</p>
              <p className="text-gray-500 text-sm">Separate living and sleeping spaces, flat-screen TV, expansive balcony, pool view.</p>
            </div>
            <div className="bg-[#f5f3ef] p-6 rounded-sm">
              <Bed className="w-8 h-8 text-[#2d6a6a] mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">3-BR Oceanfront Villa</h3>
              <p className="text-gray-600 text-sm mb-2">1,500 sq ft</p>
              <p className="text-gray-500 text-sm">Master ensuite, kitchen, living/dining areas, direct beach access. Up to 6 adults.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 px-6 bg-[#2d6a6a] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">What's Included in Your Rate</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <UtensilsCrossed className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-medium mb-4">Farm-to-Table Dining</h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>Breakfast, lunch & dinner daily</li>
                <li>Plant-forward cuisine</li>
                <li>On-site greenhouse</li>
                <li>Full dietary accommodation</li>
                <li>No seed oils or preservatives</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-xl font-medium mb-4">Wellness Amenities</h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>Saltwater infinity pool</li>
                <li>Hot & cold plunge pools</li>
                <li>Infrared saunas</li>
                <li>Fully-equipped fitness center</li>
                <li>Oceanfront yoga deck</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-rose-300" />
              </div>
              <h3 className="text-xl font-medium mb-4">Retreat Support</h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>Dedicated retreat coordinator</li>
                <li>Yoga & meditation equipment</li>
                <li>A/V equipment & set-up support</li>
                <li>Group spaces access</li>
                <li>Website listing for your retreat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-6">All-Inclusive Pricing</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Simple, transparent pricing with everything included. Minimum 4 nights required.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f5f3ef] p-8 rounded-sm">
              <h3 className="text-xl font-medium text-[#2d6a6a] mb-4">High Season</h3>
              <p className="text-sm text-gray-500 mb-6">December to April</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Double Occupancy</span>
                  <span className="font-medium text-gray-800">$250 USD/night</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Single Occupancy</span>
                  <span className="font-medium text-gray-800">$350 USD/night</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-300">
                  <span className="text-gray-600">Full Campus Buy-Out</span>
                  <span className="font-medium text-gray-800">$15,000 USD/night</span>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f3ef] p-8 rounded-sm">
              <h3 className="text-xl font-medium text-[#2d6a6a] mb-4">Green Season</h3>
              <p className="text-sm text-gray-500 mb-6">May to November</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Double Occupancy</span>
                  <span className="font-medium text-gray-800">$200 USD/night</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Single Occupancy</span>
                  <span className="font-medium text-gray-800">$280 USD/night</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-300">
                  <span className="text-gray-600">Full Campus Buy-Out</span>
                  <span className="font-medium text-gray-800">$12,000 USD/night</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2d6a6a] text-white p-6 rounded-sm">
            <h4 className="font-medium mb-3">Host Perks</h4>
            <ul className="text-sm text-gray-200 space-y-2">
              <li>• <strong>15+ guests:</strong> Complimentary Junior Suite for host (up to 2 people) + 1 free night pre-retreat for setup</li>
              <li>• <strong>60+ guests:</strong> Complimentary 3-Bedroom Oceanfront Villa (up to 5 people) + 1 free night pre-retreat for setup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Retreat Types Section */}
      <section className="py-24 px-6 bg-[#f5f3ef]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-12">Retreats That Thrive at Reunion</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-sm text-center shadow-sm"><span className="text-gray-700">Yoga & Meditation</span></div>
            <div className="bg-white p-6 rounded-sm text-center shadow-sm"><span className="text-gray-700">Training & Workshops</span></div>
            <div className="bg-white p-6 rounded-sm text-center shadow-sm"><span className="text-gray-700">Health & Wellness</span></div>
            <div className="bg-white p-6 rounded-sm text-center shadow-sm"><span className="text-gray-700">Breathwork & Sound Healing</span></div>
            <div className="bg-white p-6 rounded-sm text-center shadow-sm"><span className="text-gray-700">Spiritual Inquiry</span></div>
            <div className="bg-white p-6 rounded-sm text-center shadow-sm"><span className="text-gray-700">Personal Development</span></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#f5f3ef] rounded-sm overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2d6a6a] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-[#2d6a6a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Co-Create an Unforgettable Experience!</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-12 max-w-2xl mx-auto">Ready to learn more about hosting your retreat at Reunion? Contact Haamid and his team to schedule a discovery call or request detailed hosting information.</p>
          <div className="mb-8">
            <p className="font-bold text-xl mb-2">HAAMID DASH, Director of Enrollment</p>
            <p className="text-gray-200">
              <a href="mailto:haamid.dash@reunionexperience.org" className="text-amber-400 hover:text-amber-300 underline">haamid.dash@reunionexperience.org</a>
              <span className="mx-2">|</span>
              <a href="tel:+18883285317" className="text-amber-400 hover:text-amber-300 underline">+1 888-328-5317 x 100</a>
            </p>
          </div>
          <a href="https://www.reunionwellness.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 px-10 py-4 rounded-sm text-lg font-medium transition-all duration-300 mb-12">
            Visit Reunion Website
            <ExternalLink className="w-5 h-5" />
          </a>
          <div className="border-t border-white/20 pt-8">
            <p className="font-bold text-lg mb-2">Interested in co-facilitating with other IPI grads and friends of IPI grads?</p>
            <a href="mailto:retreats@robromano.com" className="text-amber-400 hover:text-amber-300 underline">retreats@robromano.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center text-sm">
        <p>Compiled by <a href="mailto:retreats@robromano.com" className="hover:text-gray-300 underline font-bold">Robert Romano</a>, an IPI graduate and transformed Reunion guest. This is an independent guide not affiliated with or endorsed by Reunion or IPI.</p>
      </footer>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: ReunionPage,
})