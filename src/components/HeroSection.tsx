import { Link } from 'react-router-dom'
import img1 from '../images/img1.jpg'

export default function HeroSection() 
{
  return (
    <section className="
                        relative overflow-hidden 
                        min-h-[90vh] 
                        flex items-center
                        "
                      > {/* Background image layer */}
      
      <div
        className="absolute inset-0 -z-20 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('${img1}')`,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />                                                  {/* Dark overlay for readability */}

      <div className="section grid gap-12 lg:grid-cols-2 items-center">                                         {/* Main Grid */}
        <div className="space-y-6">                                                                             {/* Text Content */}
          <div className="inline-block">
            <span className="
                              text-xs 
                              font-bold text-brand-400 
                              uppercase 
                              tracking-widest 
                              bg-brand-500/10 
                              px-3 py-1 
                              rounded-full 
                              border border-brand-500/30
                            "
              >
              Advanced Security Solutions
            </span>
          </div>
          <h1 className="heading-1 text-white">
            Protect Your World With Precision & Intelligence
          </h1>
          <p className="lead text-slate-300">
            AI-powered surveillance, tactical response, and 24/7 monitoring. We deliver security that's as intelligent as the threats we face.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="btn-primary justify-center">
              Schedule Assessment
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-md border border-brand-500 px-6 py-2.5 text-white hover:bg-brand-500/10 transition">
              Explore Services
            </Link>
          </div>
        </div>


        <div className="relative">                                                                              {/* Visual Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="
                            col-span-2 rounded-lg overflow-hidden 
                            border border-slate-700 
                            bg-gradient-to-br 
                            from-slate-800 to-slate-900 
                            p-8 aspect-video flex items-center 
                            justify-center group 
                            hover:border-brand-500 
                            transition
                            "
            >
              <div className="text-center">
                <div className="text-6xl mb-3">🛡️</div>
                <p className="text-slate-300 font-semibold">Enterprise-Grade Protection</p>
              </div>
            </div>
            {/* Small cards */}
            <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex items-center justify-center aspect-square group hover:border-brand-500 transition cursor-pointer">
              <div className="text-center">
                <div className="text-5xl mb-2">📹</div>
                <p className="text-xs text-slate-300">24/7 Monitoring</p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex items-center justify-center aspect-square group hover:border-brand-500 transition cursor-pointer">
              <div className="text-center">
                <div className="text-5xl mb-2">🔐</div>
                <p className="text-xs text-slate-300">Access Control</p>
              </div>
            </div>
          </div>

          {/* Floating element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-500/5 border border-brand-500/20 rounded-lg rotate-12" />
        </div>
      </div>
    </section>
  )
}