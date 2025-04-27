import { forwardRef } from 'react'

export const ProjectsSection = forwardRef<HTMLHeadingElement>((props, ref) => {
  return (
    <div className="space-y-4">
      <h2 ref={ref} className="text-xl font-bold text-primary">Projects</h2>

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold flex items-center justify-between">
            <span>
              <a
                href="https://voting-dapp-three-rose.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center"
              >
                Voting DApp
              </a>
            </span>
            <a
              href="https://github.com/paritoshkumar169/voting-Dapp"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center px-2 py-1 border border-primary/30 rounded hover:bg-primary/10 transition"
              title="View on GitHub"
            >
              {/* GitHub Logo SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-xs font-medium">View on GitHub</span>
            </a>
          </h3>
          <p className="text-xs text-primary/70 mb-2">
            Built with Anchor, Typescript, Solana Web3.js, Next.js and Tailwind CSS
          </p>
          <ul className="text-sm space-y-1 list-disc pl-4 text-primary/80">
            <li>Developed an Anchor program for proposal creation, voting, and staking-based governance.</li>
            <li>Implemented 1 SOL = 1 vote mechanism with live Devnet deployment.</li>
            <li>Built a user interface for listing active proposals and casting votes seamlessly.</li>
            <li>Fetched live vote counts directly from on-chain data.</li>
          </ul>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold flex items-center justify-between">
            <span>
              <a
                href="https://token-lock-ui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center"
              >
                Token-Lock UI
              </a>
            </span>
            <a
              href="https://github.com/paritoshkumar169/Token-Lock-UI"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center px-2 py-1 border border-primary/30 rounded hover:bg-primary/10 transition"
              title="View on GitHub"
            >
              {/* GitHub Logo SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-xs font-medium">View on GitHub</span>
            </a>
          </h3>
          <p className="text-xs text-primary/70 mb-2">
            Built with Next.js, Typescript, Anchor, Solana Web3.js and Tailwind CSS
          </p>
          <ul className="text-sm space-y-1 list-disc pl-4 text-primary/80">
            <li>Lock any SPL token for a customizable unlock duration using Anchor smart contracts.</li>
            <li>Claim locked tokens securely once the unlock time has passed.</li>
            <li>Simple, wallet-integrated UI for lock creation, management, and claims.</li>
            <li>Real-time on-chain fetching of lock accounts with unlock timers and progress tracking.</li>
            <li>Inspired by Jupiter's token lock mechanism and StreamFlow token vesting</li>
          </ul>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold flex items-center justify-between">
            <span>
              <a
                href="https://portfolio-solana.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center"
              >
                Portfolio-Solana
              </a>
            </span>
            <a
              href="https://github.com/paritoshkumar169/Portfolio-solana"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center px-2 py-1 border border-primary/30 rounded hover:bg-primary/10 transition"
              title="View on GitHub"
            >
              {/* GitHub Logo SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-xs font-medium">View on GitHub</span>
            </a>
          </h3>
          <p className="text-xs text-primary/70 mb-2">
            Built with Next.js, TypeScript, Solana Web3.js, and Tailwind CSS
          </p>
          <ul className="text-sm space-y-1 list-disc pl-4 text-primary/80">
            <li>Integrated Solana wallet connection and fetched SOL balance using Helius RPC endpoints.</li>
            <li>Retrieved and displayed SPL token holdings with real-time on-chain data.</li>
            <li>Implemented paginated transaction history with numbered navigation for smooth browsing.</li>
            <li>Added .sol domain search compatibility using Bonfida's Name Service API.</li>
            <li>Developed a responsive and minimalistic UI using Tailwind CSS for seamless portfolio viewing.</li>
          </ul>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold flex items-center justify-between">
            <span>
              <a
                href="https://github.com/paritoshkumar169/Road-Boundary-Detection-UsingYOLOv8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center"
              >
                Road Boundary Detection Using YOLOv8
              </a>
            </span>
            <a
              href="https://github.com/paritoshkumar169/Road-Boundary-Detection-UsingYOLOv8"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center px-2 py-1 border border-primary/30 rounded hover:bg-primary/10 transition"
              title="View on GitHub"
            >
              {/* GitHub Logo SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-xs font-medium">View on GitHub</span>
            </a>
          </h3>
          <p className="text-xs text-primary/70 mb-2">Python, OpenCV, Deep Learning, RoboFlow</p>
          <ul className="text-sm space-y-1 list-disc pl-4 text-primary/80">
            <li>YOLOv8 segmentation for unmarked road limits in daytime & nighttime.</li>
            <li>Manual annotation of 1,500+ dashcam frames via Roboflow.</li>
            <li>Real-time image, video & live dashcam inference with OpenCV.</li>
            <li>Enhanced accuracy using contour simplification & mask smoothing.</li>
            <li>Visualization dashboard built with Next.js & Tailwind CSS.</li>
          </ul>
        </div>
      </div>
    </div>
  )
})
