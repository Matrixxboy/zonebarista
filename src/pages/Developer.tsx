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
          <p className="text-lg mb-8 leading-relaxed max-w-xl flush-left">
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
