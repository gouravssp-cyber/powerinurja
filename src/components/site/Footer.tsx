import powerinLogo from "@/assets/powerin-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14 md:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <img src={powerinLogo} alt="PowerIn Urja" className="h-8 w-auto" />
          <p className="mt-1 text-sm text-muted-foreground">New Energy and Semiconductors</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
        
        </p>
        <p className="text-sm text-muted-foreground md:text-right">
          © 2026 PowerIn Urja India Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
