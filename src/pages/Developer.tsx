import { Github, Mail, Linkedin, Instagram, Heart } from 'lucide-react';

function Developer() {
  const socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/Matrixxboy/',
      icon: Github,
    },
    {
      label: 'Email',
      url: 'mailto:matrix.utsav.lankapati@gmail.com',
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/utsav-lankapati-aa407b307/',
      icon: Linkedin,
    },
    {
      label: 'Instagram',
      url: 'https://instagram.com/utsav.lankapati',
      icon: Instagram,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="heading-display text-6xl md:text-8xl mb-8">
            UTSAV<br />LANKAPATI
          </h1>
          <div className="mb-8 relative max-w-sm group">
            <div className="absolute inset-0 bg-accent translate-x-3 translate-y-3 border-4 border-black transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <img 
              src="https://github.com/Matrixxboy.png" 
              alt="Utsav Lankapati" 
              className="relative z-10 w-full border-4 border-black filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500 object-cover aspect-square"
            />
          </div>
          <p className="text-lg mb-8 leading-relaxed max-w-xl flush-left bg-muted p-6 border-l-8 border-black">
            Engineer, creator, and coffee science enthusiast. Building tools that translate complex formulas into interactive learning systems.
          </p>
        </div>

        <div className="space-y-6">
          <div className="card border-4">
            <h2 className="section-label mb-6">
              <span className="section-label-number">01.</span> CONNECT
            </h2>
            <div className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-muted hover:bg-accent hover:text-white transition-colors"
                  >
                    <Icon size={20} />
                    <span className="font-semibold text-sm uppercase tracking-tight">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="card">
            <h2 className="section-label mb-4">
              <span className="section-label-number">02.</span> PLATFORMS
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://huggingface.co/Matrixxboy" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium">
                  Hugging Face
                </a>
              </li>
              <li>
                <a href="https://patreon.com/Matrixxboy" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium">
                  Patreon
                </a>
              </li>
              <li>
                <a href="https://x.com/mmatrixxboy" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://thematrixtalks.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t-2 border-black pt-12">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
          <Heart size={16} className="text-accent" />
          <span>Made with precision and care</span>
        </div>
      </div>
    </div>
  );
}

export default Developer;
