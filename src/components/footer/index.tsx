import React from 'react'

const FooterSection = () => {
  return (
    <footer className="w-full bottom-0 border-border border-t flex flex-col items-center bg-background">
        <div className="h-20 w-full max-w-3xl border-x border-border font-mono flex items-center flex-col justify-center text-mute-foreground">
            <p className="text-sm">
                Inspired by <a href="https://chanhdai.com/" target="_blank" rel="noopener noreferrer">chanhdai.com</a>
            </p>
            <p className="text-sm">
                Built by <a href="https://www.linkedin.com/in/divy-koushik-mishra" target="_blank" rel="noopener noreferrer">Divy Koushik Mishra.</a> The source code is availabe on <span className="font-medium underline">GitHub.com</span>
            </p>
        </div>
        <div className="w-full mb-2 border-y flex justify-center">
        <div className="max-w-3xl w-full flex justify-center border-border border-x h-12 bg-[repeating-linear-gradient(315deg,var(--color-muted)_0,var(--color-muted)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]">
            <div className="bg-background px-4 items-center flex font-mono text-xs text-muted-foreground">
                llms.txt
            </div>
        </div>
        </div>
    </footer>
  )
}

export default FooterSection