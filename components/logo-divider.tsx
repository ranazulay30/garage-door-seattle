import Image from "next/image"

export function LogoDivider() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 lg:px-8">
        {/* Decorative line + logo + line */}
        <div className="flex w-full items-center gap-6">
          <div className="h-px flex-1 bg-border" />
          <Image
            src="/images/logo.png"
            alt="Local Master Garage Door"
            width={360}
            height={130}
            className="h-28 w-auto md:h-36 lg:h-44"
            priority
          />
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-center text-base font-medium tracking-wide text-muted-foreground md:text-lg">
          {"Seattle's Trusted Overhead Door Experts"}
        </p>
      </div>
    </section>
  )
}
