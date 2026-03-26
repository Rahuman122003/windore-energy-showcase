const Footer = () => (
  <footer className="border-t border-border/40 py-12 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="text-lg font-bold text-gradient">Probiz Energy</span>
      <div className="flex gap-6 text-sm text-foreground/50">
        <a href="#home" className="hover:text-foreground transition-colors">Home</a>
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <p className="text-xs text-foreground/30">© 2026 Probiz Energy. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
