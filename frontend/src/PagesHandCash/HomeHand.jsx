import { Navbar } from "../PageNavBar/NavBar";
import { FiArrowRight, FiShield, FiZap, FiUsers, FiDollarSign } from 'react-icons/fi';
import{Map} from'../PagesFeatures/Map'
export const HomeHand = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Dark Glass Morphism */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=3000&auto=format')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-8xl mx-auto px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-3xl text-center backdrop-blur-sm bg-black/10 p-8 rounded-2xl border border-white/10">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Cash Exchange <span className="text-indigo-400">Reimagined</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Connect directly with trusted individuals for secure, face-to-face cash exchanges
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105">
                Start Exchanging
              </button>
              <button className="flex items-center text-lg font-semibold leading-6 text-white gap-2 group">
                See how it works <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      {/* Value Propositions - Card Grid */}
      <section>
        <Map/>
      </section>



      {/* Value Propositions - Card Grid */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-800">
              Peer-to-Peer
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Why choose Kubix?
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="group relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-7 text-gray-900">{feature.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{feature.description}</p>
                  <div className="mt-6">
                    <a href="#" className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                      Learn more <FiArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Simple, secure exchanges
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our three-step process ensures every transaction is smooth and secure
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent lg:before:mx-auto lg:before:left-0 lg:before:right-0">
              {steps.map((step, index) => (
                <div key={step.name} className="relative flex items-start group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 group-hover:border-indigo-300 z-10">
                    <span className="text-lg font-bold text-indigo-600">{index + 1}</span>
                  </div>
                  <div className="ml-6 pt-1 flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group-hover:border-indigo-200 transition-all duration-300">
                      <h3 className="text-lg font-semibold leading-7 text-gray-900">{step.name}</h3>
                      <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to exchange cash differently?
            </h2>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Join our growing community of cash exchangers today
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
              <button className="text-lg font-semibold leading-6 text-white hover:text-indigo-100">
                See pricing <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    name: 'Bank-Grade Security',
    description: 'Military-grade encryption and identity verification for every transaction.',
    icon: FiShield,
  },
  {
    name: 'Lightning Fast',
    description: 'Find exchange partners near you in seconds with our real-time matching system.',
    icon: FiZap,
  },
  {
    name: 'Community Trust',
    description: 'Verified user profiles and ratings ensure you only deal with trusted members.',
    icon: FiUsers,
  },
];

const steps = [
  {
    name: 'Create Your Profile',
    description: 'Complete our quick verification process to join the Kubix network.',
  },
  {
    name: 'Find Exchange Partners',
    description: 'Browse nearby users or post your own exchange request in seconds.',
  },
  {
    name: 'Meet & Complete Exchange',
    description: 'Arrange a safe meeting and complete your cash exchange with confidence.',
  },
];