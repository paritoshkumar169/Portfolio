"use client"

export function ImageAsciiLogo() {
  return (
    <div className="bg-black p-2 font-mono text-primary">
      <pre className="text-primary whitespace-pre overflow-x-auto text-xs sm:text-sm md:text-base">
        {`
$ whoami
paritosh.sol

$ pwd
/home/Paritosh/portfolio

$ ls
about  education  skills  experience  projects  contact
`}
      </pre>
    </div>
  )
}
