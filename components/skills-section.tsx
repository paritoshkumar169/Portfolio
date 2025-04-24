export function SkillsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-primary">Skills</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2">Programming Languages</h3>
          <div className="space-y-2">
            <SkillBar name="Python" percentage={90} />
            <SkillBar name="JavaScript" percentage={85} />
            <SkillBar name="TypeScript" percentage={80} />
            <SkillBar name="Rust" percentage={75} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Web Development</h3>
          <div className="space-y-2">
            <SkillBar name="React" percentage={85} />
            <SkillBar name="Next.js" percentage={80} />
            <SkillBar name="Node.js" percentage={75} />
            <SkillBar name="Tailwind CSS" percentage={80} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Blockchain & Solana</h3>
          <div className="space-y-2">
            <SkillBar name="Anchor (Solana)" percentage={80} />
            <SkillBar name="Solana Web3.js" percentage={70} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Data Science & ML</h3>
          <div className="space-y-2">
            <SkillBar name="Jupyter Notebook" percentage={90} />
            <SkillBar name="PyTorch" percentage={80} />
            <SkillBar name="matplotlib" percentage={85} />
            <SkillBar name="OpenCV" percentage={75} />
            <SkillBar name="YOLOv8" percentage={65} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">DevOps & Tools</h3>
          <div className="space-y-2">
            <SkillBar name="Git & GitHub" percentage={95} />
            <SkillBar name="Docker" percentage={70} />
            <SkillBar name="Kubernetes" percentage={60} />
            <SkillBar name="CI/CD (GitHub Actions)" percentage={65} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Databases</h3>
          <div className="space-y-2">
            <SkillBar name="PostgreSQL" percentage={70} />
            <SkillBar name="Supabase" percentage={70} />
            <SkillBar name="Redis" percentage={65} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Engineering Tools</h3>
          <div className="space-y-2">
            <SkillBar name="MATLAB" percentage={80} />
            <SkillBar name="Arduino IDE" percentage={75} />
            <SkillBar name="LabVIEW" percentage={70} />
          </div>
        </div>
      </div>
    </div>
  )
}

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
