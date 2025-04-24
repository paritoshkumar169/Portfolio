import { forwardRef } from 'react'

export const SkillsSection = forwardRef<HTMLHeadingElement>((props, ref) => {
  return (
    <div className="space-y-4">
      <h2 ref={ref} className="text-xl font-bold text-primary">Skills</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2">Programming Languages</h3>
          <div className="space-y-2">
            <SkillBar name="Python" percentage={85} />
            <SkillBar name="C" percentage={80} />
            <SkillBar name="TypeScript" percentage={75} />
            <SkillBar name="JavaScript" percentage={75} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Frameworks & Libraries</h3>
          <div className="space-y-2">
            <SkillBar name="PyTorch" percentage={80} />
            <SkillBar name="OpenCV" percentage={85} />
            <SkillBar name="YOLOv8" percentage={80} />
            <SkillBar name="TensorFlow" percentage={75} />
            <SkillBar name="NumPy" percentage={85} />
            <SkillBar name="Matplotlib" percentage={80} />
            <SkillBar name="React" percentage={75} />
            <SkillBar name="Tailwind CSS" percentage={80} />
            <SkillBar name="Solana Web3.js" percentage={70} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Developer Tools</h3>
          <div className="space-y-2">
            <SkillBar name="Git" percentage={85} />
            <SkillBar name="Jupyter Notebook" percentage={90} />
            <SkillBar name="Arduino IDE" percentage={80} />
            <SkillBar name="MATLAB" percentage={75} />
            <SkillBar name="LabVIEW" percentage={70} />
            <SkillBar name="Roboflow" percentage={80} />
          </div>
        </div>
      </div>
    </div>
  )
})

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} skill level: ${percentage}%`}
        />
      </div>
    </div>
  )
}
