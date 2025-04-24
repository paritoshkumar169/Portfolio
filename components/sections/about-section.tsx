import { forwardRef } from 'react'

export const AboutSection = forwardRef<HTMLHeadingElement>((props, ref) => {
  return (
    <div className="space-y-4">
      <h2 ref={ref} className="text-xl font-bold text-primary">About</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="space-y-3 w-full">
          <div className="p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Personal Bio:</h3>
            <div className="space-y-2 text-sm">
              {/* Left empty for user to fill in */}
              <p className="text-primary/70">Paritosh S Kumar</p>
            </div>
          </div>

          <div className="p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Quick Facts:</h3>
            {/* Empty section as requested */}
          </div>
        </div>
      </div>
    </div>
  )
})
