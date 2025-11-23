'use client';

import { useEffect, useMemo, useState, type MouseEvent } from 'react';

type NavLink = { id: string; label: string };

interface OnThisPageNavProps {
  links: NavLink[];
}

export const OnThisPageNav = ({ links }: OnThisPageNavProps) => {
  const sectionIds = useMemo(() => links.map((link) => link.id), [links]);
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (!sectionIds.length) {
      return;
    }

    const lastSectionId = sectionIds[sectionIds.length - 1];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (scrolledToBottom && lastSectionId) {
        setActive(lastSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pl-6">
      <div className="absolute left-3 top-0 h-full w-px rounded-full bg-border" />
      <nav className="flex flex-col gap-1 text-sm">
        {links.map((link) => {
          const isActive = active === link.id;
          return (
            <div key={link.id} className="relative">
              {isActive && (
                <span className="absolute -left-4 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-primary" />
              )}
              <a
                href={`#${link.id}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(event) => handleClick(event, link.id)}
                className={`block rounded-md px-2 py-1 transition-colors ${
                  isActive ? 'font-semibold text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

