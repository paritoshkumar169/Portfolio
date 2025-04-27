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
              <p className="text-primary/70">Paritosh S Kumar</p>
              <p className="text-primary/70">
                I am a final-year B.Tech student at Manipal Institute of Technology, Manipal, majoring in Electronics and Communication Engineering, graduating in 2025.
                I have been an active Solana ecosystem user for over two years, which sparked my deep interest in blockchain development after interacting with dApps like Raydium, Jupiter, Bonkbot, and Photon.
                I am passionate about building consumer-facing products, experimenting with smart contract mechanics, and pushing innovative ideas within the Solana ecosystem.
              </p>
            </div>
          </div>

          <div className="p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Quick Facts:</h3>
            <ul className="list-disc pl-5 space-y-1 text-primary/80 text-sm">
              <li>Full-stack developer specializing in Solana smart contracts (Anchor, Rust) and scalable Web3 integrations</li>
              <li>Backend experience with Node.js, Next.js (Server Components), Express.js, PostgreSQL, Supabase, and Docker</li>
              <li>Frontend proficiency with ReactJS, Next.js, TypeScript, and Tailwind CSS</li>
              <li>Cloud deployments on AWS, Render, and Vercel; blockchain development on Solana and Ethereum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})
