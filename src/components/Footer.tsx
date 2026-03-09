const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 Nethushi Navodya. All rights reserved.
        </p>
        <p className="text-xs font-mono text-muted-foreground tracking-wider">
          Built with React & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
