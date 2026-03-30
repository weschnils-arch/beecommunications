import { usePageTitle } from '../../hooks/usePageTitle'
import { Hero } from '../sections/Hero'
import { PainPoints } from '../sections/PainPoints'
import { SolutionBridge } from '../sections/SolutionBridge'
import { ServicesGrid } from '../sections/ServicesGrid'
import { Process } from '../sections/Process'
import { Stats } from '../sections/Stats'
import { Testimonials } from '../sections/Testimonials'
import { CaseStudyTeaser } from '../sections/CaseStudyTeaser'
import { Credentials } from '../sections/Credentials'
import { CtaSection } from '../sections/CtaSection'
import { ParallaxBreaker } from '../sections/ParallaxBreaker'
import { ParallaxImage } from '../sections/ParallaxImage'
import { RevealImage } from '../sections/RevealImage'
import teamMeeting from '../../assets/images/team-meeting.webp'
import teamWorkshop from '../../assets/images/team-workshop.webp'
import teamCollab from '../../assets/images/team-collab.webp'
import teamDiscussion from '../../assets/images/team-discussion.webp'

export function HomePage() {
  usePageTitle('')
  return (
    <>
      <Hero />
      <PainPoints />

      <ParallaxImage src={teamWorkshop} alt="Team-Workshop" height="55vh" overlay="dark">
        <div className="text-center container-narrow">
          <p className="text-white font-['DM_Serif_Display',Georgia,serif] text-[clamp(24px,4vw,48px)] leading-tight">
            &ldquo;Zusammenarbeit entsteht nicht von allein &mdash;<br className="hidden md:block" />
            sie wird gestaltet.&rdquo;
          </p>
        </div>
      </ParallaxImage>

      <SolutionBridge />
      <ServicesGrid />

      <ParallaxBreaker
        quote="Wenn die Kommunikation stimmt, entsteht Schwarmwissen."
        subtitle="Das Prinzip des Bienenstocks"
        variant="warm"
      />

      <Process />

      <ParallaxImage src={teamCollab} alt="Zusammenarbeit" height="50vh" overlay="golden">
        <div className="text-center container-narrow">
          <p className="text-[var(--color-neutral-900)] font-['DM_Serif_Display',Georgia,serif] text-[clamp(22px,3.5vw,44px)] leading-tight">
            Jedes Team hat seine eigene Sprache.<br className="hidden md:block" />
            Ich helfe, sie zu finden.
          </p>
        </div>
      </ParallaxImage>

      <Stats />
      <Testimonials />

      <ParallaxImage src={teamMeeting} alt="Team-Meeting" height="50vh" overlay="dark">
        <div className="text-center container-narrow">
          <p className="text-white/90 font-['Inter',sans-serif] text-[14px] font-medium uppercase tracking-[0.15em] mb-4">
            #innenbeginnen
          </p>
          <p className="text-white font-['DM_Serif_Display',Georgia,serif] text-[clamp(24px,4vw,48px)] leading-tight">
            Veränderung beginnt dort,<br className="hidden md:block" />
            wo man ehrlich miteinander spricht.
          </p>
        </div>
      </ParallaxImage>

      <CaseStudyTeaser />
      <Credentials />

      <RevealImage src={teamDiscussion} alt="Team-Diskussion" />

      <CtaSection />
    </>
  )
}
