const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-serif text-2xl font-bold text-gradient-gold mb-4">
          Deal Maker Academy
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Deal Maker Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
