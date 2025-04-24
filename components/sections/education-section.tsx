import { forwardRef } from 'react'

export const EducationSection = forwardRef<HTMLHeadingElement>((props, ref) => {
  return (
    <div className="space-y-4">
      <h2 ref={ref} className="text-xl font-bold text-primary">Education</h2>

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Manipal Institute of Technology, Manipal, Karnataka</h3>
          <p className="text-sm">Bachelor of Electrical & Electronics Engineering, Minor in Digital Marketing</p>
          <p className="text-xs text-primary/70">August 2021 - May 2025</p>

          <div className="mt-2">
            <h4 className="text-sm font-semibold">Skills Acquired:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4 text-primary/80">
              <li>Programming fundamentals and application development</li>
              <li>Electrical systems design and implementation</li>
              <li>Digital marketing strategies and analytics</li>
              <li>Machine learning and computer vision applications</li>
              <li>Embedded systems programming</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})
