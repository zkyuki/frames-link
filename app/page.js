import Image from "next/image";

export default function Home() {
  return (
    <>
      <head>
                  <meta property="og:image" content="https://fc-dev-call.replit.app/image" />

      <meta property="fc:frame" content="Next" />
      <meta property="fc:frame:image" content="https://fc-dev-call.replit.app/image" />
      <meta property="fc:frame:button:1" content="Spec" />
      <meta property="fc:frame:button:1:action" content="link" />
      <meta property="fc:frame:button:1:target" content="https://docs.farcaster.xyz/reference/frames/spec" />

      <meta property="fc:frame:button:2" content="Image" />
      <meta property="fc:frame:button:2:action" content="link" />
      <meta property="fc:frame:button:2:target" content="https://fc-dev-call.replit.app/image" />

      <meta property="fc:frame:button:3" content="Frame Validator" />
      <meta property="fc:frame:button:3:action" content="link" />
      <meta property="fc:frame:button:3:target" content="https://www.youtube.com/watch?v=JAIr8kyBxxU&list=PL0eq1PLf6eUecQKFj0pUFfO0fwm0k4zE4&index=3" />

      <meta property="fc:frame:button:4" content="Replit" />
      <meta property="fc:frame:button:4:action" content="link" />
      <meta property="fc:frame:button:4:target" content="https://replit.com/~" />
    </head>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        hello
      </div>
    </main>
    </>
  );
}
