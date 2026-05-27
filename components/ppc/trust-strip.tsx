import { Star, Shield, Clock, Award } from "lucide-react"

const badges = [
  { icon: Star, label: "4.9 / 5 Google Rating", sublabel: "200+ Reviews" },
  { icon: Shield, label: "Licensed & Insured", sublabel: "WA State" },
  { icon: Clock, label: "Same-Day Service", sublabel: "7 Days a Week" },
  { icon: Award, label: "15+ Years", sublabel: "Experience" },
]

export function TrustStrip() {
  return (
    <div className="border-y border-border/50 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-border/50 md:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center justify-center gap-3 px-4 py-4 md:py-5"
            >
              <badge.icon className="size-5 shrink-0 text-primary md:size-6" />
              <div>
                <p className="text-xs font-bold text-foreground md:text-sm">
                  {badge.label}
                </p>
                <p className="text-[10px] text-muted-foreground md:text-xs">
                  {badge.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
