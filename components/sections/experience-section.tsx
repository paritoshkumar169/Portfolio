import { forwardRef } from 'react'

export const ExperienceSection = forwardRef<HTMLHeadingElement>((props, ref) => {
  return (
    <div className="space-y-4">
      <h2 ref={ref} className="text-xl font-bold text-primary">Experience</h2>

      <div className="space-y-6">
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Project Intern</h3>
            <p className="text-xs text-primary/70">MIT, Manipal | January 2025 - May 2025</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4 text-primary/80">
            <li>Developed a model to detect unmarked road boundaries in both daytime and nighttime conditions</li>
            <li>Optimized for varying lighting conditions and real-time video processing using Roboflow</li>
            <li>Achieved optimized model accuracy for real-time dashcam interface</li>
            <li>Implemented adaptive histogram equalization and low-light enhancement for night-time detection</li>
          </ul>
        </div>
      </div>
    </div>
  )
})
