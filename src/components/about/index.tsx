import React from 'react'
import DiagonalLineGradientBgFull from '../hero/diagonalLineGradientBgFull'
import StackSection from './stackSection'
import ExperienceSection from './experienceSection'

const AboutSection = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground">About</h2>
        <div className="font-mono space-y-4 px-4 py-6 text-[15px] leading-relaxed text-foreground">
          <p>
            Hello, World! I am Divy Koushik Mishra — a Full-Stack Developer and aspiring
            entrepreneur passionate about building impactful, user-focused products that
            blend technology, design, and performance.
          </p>

          <p>
            With experience in JavaScript, React, Next.js, Python, FastAPI, and cloud
            platforms like AWS and Vercel, I specialize in delivering end-to-end features
            from ideation to deployment. I&apos;m constantly exploring new technologies, from
            UI/UX design to system architecture, and love translating raw ideas into
            polished, functional products.
          </p>

          <p>
            My projects span productivity tools, creative experiments, and open-source
            contributions. I&apos;m currently building <strong>FlipsideBrain</strong> — a
            productivity and self-growth platform featuring tools like website blockers,
            browser activity tracking, and cross-device sync. I also enjoy working on
            personal brand content, mobile apps, and hobby projects that push my creative
            and technical boundaries.
          </p>

          <p>
            Beyond coding, I&apos;m deeply invested in learning cinematography, music
            production, and art, treating life like a game of leveling up my skills every
            day.
          </p>

          <p>
            Let&apos;s connect and create something remarkable together!
          </p>
        </div>
      </div>
      <DiagonalLineGradientBgFull />
      <ExperienceSection />
      <DiagonalLineGradientBgFull />
      <StackSection />
      <DiagonalLineGradientBgFull />
    </section>
  )
}

export default AboutSection
