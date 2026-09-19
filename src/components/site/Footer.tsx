const powerinLogo = "/logo-dark.png";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14 md:px-10">
      <div className="mx-auto grid w-full max-w-7xl items-end gap-8 md:grid-cols-3">
        <div>
          <img src={powerinLogo} alt="PowerIn Urja" className="h-30 w-auto" />
          <p className="mt-1 text-sm text-muted-foreground">New Energy and Semiconductors</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground" aria-hidden="true" />
       
      </div>
       <p className="flex items-center justify-center text-center text-sm text-muted-foreground">
          © 2026 PowerIn Urja India Pvt Ltd. All rights reserved.
        </p>
    </footer>
  );
}
