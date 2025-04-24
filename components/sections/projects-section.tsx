import { forwardRef } from 'react'

export const ProjectsSection = forwardRef<HTMLHeadingElement>((props, ref) => {
  return (
    <div className="space-y-4">
      <h2 ref={ref} className="text-xl font-bold text-primary">Projects</h2>

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">
            <a
              href="https://github.com/paritoshkumar169/Road-Boundary-Detection-UsingYOLOv8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center"
            >
              Road Boundary Detection Using YOLOv8
            </a>
          </h3>
          <p className="text-xs text-primary/70 mb-2">Python, OpenCV, Deep Learning</p>
          <ul className="text-sm space-y-1 list-disc pl-4 text-primary/80">
            <li>YOLOv8 segmentation for unmarked road limits in daytime & nighttime.</li>
            <li>Manual annotation of 1,500+ dashcam frames via Roboflow.</li>
            <li>Real-time image, video & live dashcam inference with OpenCV.</li>
            <li>Enhanced accuracy using contour simplification & mask smoothing.</li>
            <li>Visualization dashboard built with Next.js & Tailwind CSS.</li>
          </ul>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">
            <a
              href="https://github.com/paritoshkumar169/Portfolio-solana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center"
            >
              Portfolio-Solana
            </a>
          </h3>
          <p className="text-xs text-primary/70 mb-2">Solana, Web3, React</p>
          <ul className="text-sm space-y-1 list-disc pl-4 text-primary/80">
            <li>Connected Solana wallet & fetched SOL balance via Helius RPC.</li>
            <li>Retrieved SPL token holdings and recent transactions.</li>
            <li>Paginated tx history with numbered navigation.</li>
            <li>Interactive net-worth chart in React.</li>
          </ul>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">
            <a
              href="https://github.com/paritoshkumar169/voting-Dapp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center"
            >
              Voting DApp
            </a>
          </h3>
          <p className="text-xs text-primary/70 mb-2">Solana, Anchor, React</p>
          <ul className="text-sm space-y-1 list-disc pl-4 text-primary/80">
            <li>Anchor program for proposal creation & staking-based voting.</li>
            <li>1 SOL = 1 vote logic with Devnet deployment.</li>
            <li>React UI for listing proposals & casting votes.</li>
            <li>Live vote counts fetched on-chain.</li>
          </ul>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">
            <a
              href="https://github.com/paritoshkumar169/Token-Lock-UI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center"
            >
              Token-Lock UI
            </a>
          </h3>
          <p className="text-xs text-primary/70 mb-2">React, Anchor, Tailwind CSS</p>
          <ul className="text-sm space-y-1 list-disc pl-4 text-primary/80">
            <li>Form to specify SPL mint & lock duration via Anchor.</li>
            <li>On-chain fetch of lock accounts with unlock timers.</li>
            <li>React components for lock creation & claim actions.</li>
            <li>Responsive styling with Tailwind CSS.</li>
          </ul>
        </div>
      </div>
    </div>
  )
})
