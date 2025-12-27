import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src={logo} 
          alt="Deal Maker Indonesia" 
          className="w-20 h-20 mx-auto mb-6 object-contain opacity-80"
        />
        <p className="font-serif text-2xl font-bold text-gradient-gold mb-4">
          Deal Maker Academy
        </p>
        <p className="text-muted-foreground text-sm mb-6">
          Kuasai seni closing dan negosiasi. Jadi Deal Maker yang dihormati dan dipercaya.
        </p>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Deal Maker Indonesia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
