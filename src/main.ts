// =========================================================================
// DEVANSH GOYAL - KINETIC CYBER BRUTALISM PORTFOLIO ENGINE
// =========================================================================

interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  category: string;
  metric: string;
  status: string;
  desc: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  architectureDetails: string[];
}

const PROJECTS: ProjectData[] = [
  {
    id: 'dikoryx',
    title: 'DIKORYX EDR PLATFORM',
    tagline: 'Autonomous Windows Endpoint Detection & Incident Response Suite',
    category: 'ENDPOINT DETECTION & RESPONSE',
    metric: 'LATENCY: <1.8ms',
    status: 'STATUS: DEPLOYED',
    desc: 'AI-Powered Endpoint Detection & Response platform capturing real-time process execution lineages, FIM monitoring, USB drive insertions, and automatic MITRE ATT&CK risk scoring.',
    tags: ['Python', 'MITRE ATT&CK', 'Digital Forensics', 'Docker', 'Vercel'],
    liveUrl: 'https://dikoryx.vercel.app',
    githubUrl: 'https://github.com/Devansh7006/Dikoryx',
    architectureDetails: [
      'Real-time endpoint telemetry monitoring process execution lineages and file integrity modifications (FIM).',
      'Behavioral anomaly detection heuristics mapped to MITRE ATT&CK insider threat techniques.',
      'Scalable REST API backend with sub-100ms telemetry dispatch to an interactive analyst console hosted on Vercel.',
      'Automated CI/CD security validation and build pipelines configured with GitHub Actions.'
    ]
  },
  {
    id: 'emailsf',
    title: 'EMAILSF DETONATOR',
    tagline: 'Enterprise Email Threat Detonation & RFC 5322 Parsing Sandbox',
    category: 'EMAIL SECURITY & THREAT DETONATION',
    metric: 'TRIAGE REDUCTION: 70%',
    status: 'STATUS: PRODUCTION',
    desc: 'Automated email inspection pipeline evaluating 200+ RFC 5322 parameters, performing header forensics, SPF/DKIM/DMARC alignment validation, recursive URL unshortening, and real-time in-inbox threat verdicts.',
    tags: ['Python', 'EMAIL Security', 'OSINT', 'Docker', 'GitHub Actions'],
    liveUrl: 'https://github.com/Devansh7006/EmailSF',
    githubUrl: 'https://github.com/Devansh7006/EmailSF',
    architectureDetails: [
      'Automated inspection pipeline evaluating 200+ RFC 5322 compliance vectors to neutralize BEC and spoofing attacks.',
      'Dynamic URL unshortening and domain reputation scoring via OSINT threat intelligence feeds.',
      'Companion browser extension providing real-time in-inbox threat verdicts and domain alignment inspection.',
      'Containerized microservices running with Docker and deployed with GitHub Actions.'
    ]
  }
];

interface CertItem {
  title: string;
  badge: string;
  tag: string;
  fileUrl: string;
  fileType: 'PDF' | 'PNG' | 'JPG';
  detail: string;
  desc: string;
}

const CERTS_DATA: CertItem[] = [
  {
    title: "CRITICAL INFRASTRUCTURE PROTECTION (ICIP)",
    badge: "ICIP CERTIFIED",
    tag: "OPSWAT ACADEMY",
    fileUrl: "./certificates/opswat_icip.png",
    fileType: "PNG",
    detail: "Critical Infrastructure Protection (CIP) & Industrial Asset Defense | ID: K5Hmq4J2RA",
    desc: "Recognized graduate of the Introduction to CIP program covering SCADA security, air-gapped network defenses, and industrial perimeter sanitization."
  },
  {
    title: "SECURITY OPERATIONS FUNDAMENTALS",
    badge: "PCCET TRACK",
    tag: "PALO ALTO NETWORKS",
    fileUrl: "./certificates/palo_alto_fundamentals.pdf",
    fileType: "PDF",
    detail: "Next-Gen Security Operations & Threat Defense Architecture | Issued June 2026",
    desc: "Verified course completion covering Next-Generation Firewalls, cloud security operations, zero-trust network access (ZTNA), and automated telemetry correlation."
  },
  {
    title: "JUNIOR PENETRATION TESTER",
    badge: "30.6 HOURS COMPLETED",
    tag: "TRYHACKME",
    fileUrl: "./certificates/thm_jr_pentester.pdf",
    fileType: "PDF",
    detail: "Official Learning Path Certification | Credential ID: THM-XRG34BSKCI",
    desc: "Comprehensive penetration testing methodology, web application security (OWASP Top 10), privilege escalation, network exploitation, and security audit reporting."
  },
  {
    title: "COMPTIA PENTEST+ PATH",
    badge: "32.9 HOURS COMPLETED",
    tag: "TRYHACKME",
    fileUrl: "./certificates/thm_comptia_pentest.pdf",
    fileType: "PDF",
    detail: "Full CompTIA PenTest+ Curriculum | Credential ID: THM-9XHSARWLJM",
    desc: "Rigorous offensive path covering planning, scoping, passive/active reconnaissance, vulnerability assessment, weaponization, post-exploitation, and remediation."
  },
  {
    title: "INTRODUCTION TO CYBERSECURITY",
    badge: "ACADEMY CERTIFIED",
    tag: "CISCO NETWORKING ACADEMY",
    fileUrl: "./certificates/cisco_intro_cybersecurity.pdf",
    fileType: "PDF",
    detail: "Global Networking Academy Credential | Completed June 12, 2026",
    desc: "Awarded by Cisco Networking Academy for verified proficiency in enterprise cyber defense principles, threat vectors, data privacy, and security countermeasures."
  },
  {
    title: "NETWORKING BASICS",
    badge: "CCNA FOUNDATIONS",
    tag: "CISCO NETWORKING ACADEMY",
    fileUrl: "./certificates/cisco_networking_basics.pdf",
    fileType: "PDF",
    detail: "Cisco Networking Academy Routing & Protocols | Completed Nov 19, 2025",
    desc: "Enterprise TCP/IP stack fundamentals, CIDR subnetting, packet inspection, switch VLAN configuration, router gateways, and network infrastructure protocols."
  },
  {
    title: "CYBER JOB SIMULATION",
    badge: "PRACTICAL DEFENSE",
    tag: "DELOITTE",
    fileUrl: "./certificates/deloitte_cyber_simulation.pdf",
    fileType: "PDF",
    detail: "Deloitte Forensics & Incident Response Simulation | Completed January 2026",
    desc: "Executed practical tasks in cyber security incident triage, forensic event reconstruction, IOC correlation, and executive risk communications."
  }
];

class NeobrutalismApp {
  private currentProjIndex = 0;

  constructor() {
    this.bindEvents();
    this.updateProjectCard();
  }

  private updateProjectCard() {
    const p = PROJECTS[this.currentProjIndex];
    if (!p) return;

    // Elements
    const categoryEl = document.getElementById('proj-category');
    const metricEl = document.getElementById('proj-metric');
    const statusEl = document.getElementById('proj-status');
    const titleEl = document.getElementById('proj-title');
    const taglineEl = document.getElementById('proj-tagline');
    const descEl = document.getElementById('proj-desc');
    const bulletsEl = document.getElementById('proj-bullets');
    const tagsContainer = document.getElementById('proj-tech-tags');
    const liveLink = document.getElementById('proj-live-link') as HTMLAnchorElement | null;
    const githubLink = document.getElementById('proj-github-link') as HTMLAnchorElement | null;
    const counterEl = document.getElementById('proj-counter');

    if (categoryEl) categoryEl.textContent = p.category;
    if (metricEl) metricEl.textContent = p.metric;
    if (statusEl) statusEl.textContent = p.status;
    if (titleEl) titleEl.textContent = p.title;
    if (taglineEl) taglineEl.textContent = p.tagline;
    if (descEl) descEl.textContent = p.desc;

    if (bulletsEl) {
      bulletsEl.innerHTML = p.architectureDetails
        .map(b => `<li class="flex items-start gap-2"><span class="text-neo-purple font-black shrink-0">▸</span><span>${b}</span></li>`)
        .join('');
    }

    if (tagsContainer) {
      tagsContainer.innerHTML = p.tags
        .map(tag => `<span class="border-[2px] border-black px-2.5 py-0.5 font-mono text-xs font-bold bg-white">${tag}</span>`)
        .join('');
    }

    if (liveLink) {
      if (p.id === 'dikoryx' && p.liveUrl) {
        liveLink.href = p.liveUrl;
        liveLink.textContent = 'LIVE DEMO ↗';
        liveLink.style.display = 'inline-flex';
      } else {
        liveLink.style.display = 'none';
      }
    }

    if (githubLink) {
      githubLink.href = p.githubUrl;
    }

    if (counterEl) {
      counterEl.textContent = `0${this.currentProjIndex + 1} / 0${PROJECTS.length}`;
    }

    // Update dots
    const dots = document.querySelectorAll('#proj-dots span');
    dots.forEach((dot, idx) => {
      const el = dot as HTMLElement;
      if (idx === this.currentProjIndex) {
        el.className = 'w-3 h-3 bg-black rounded-full inline-block cursor-pointer';
      } else {
        el.className = 'w-3 h-3 bg-white border-2 border-black rounded-full inline-block cursor-pointer';
      }
    });
  }

  private nextProject() {
    this.currentProjIndex = (this.currentProjIndex + 1) % PROJECTS.length;
    this.updateProjectCard();
  }

  private prevProject() {
    this.currentProjIndex = (this.currentProjIndex - 1 + PROJECTS.length) % PROJECTS.length;
    this.updateProjectCard();
  }

  // Modals
  private openProjectModal(index: number) {
    const p = PROJECTS[index];
    const modal = document.getElementById('modal-project');
    const titleEl = document.getElementById('modal-proj-title');
    const bodyEl = document.getElementById('modal-proj-body');
    if (!modal || !titleEl || !bodyEl) return;

    titleEl.textContent = p.title;
    bodyEl.innerHTML = `
      <div class="flex flex-wrap items-center gap-2 mb-2 font-mono">
        <span class="border-[2px] border-black px-2 py-0.5 font-mono text-xs font-bold bg-neo-lime">${p.category}</span>
        <span class="border-[2px] border-black px-2 py-0.5 font-mono text-xs font-bold bg-neo-purple text-white">${p.status}</span>
        <span class="border-[2px] border-black px-2 py-0.5 font-mono text-xs font-bold bg-neo-pink">${p.metric}</span>
      </div>
      <p class="font-display font-black text-lg">${p.tagline}</p>
      <p class="font-mono text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">${p.desc}</p>
      
      <div class="border-2 border-black p-4 bg-slate-50 shadow-[2px_2px_0px_#000] my-2">
        <h4 class="font-display font-black text-xs uppercase mb-2">TECHNICAL ARCHITECTURE HIGHLIGHTS:</h4>
        <ul class="space-y-1.5 list-disc pl-5 font-mono text-xs">
          ${p.architectureDetails.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>

      <div class="flex flex-wrap gap-3 pt-2">
        ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="bg-neo-lime text-black border-[2px] border-black px-4 py-2 font-display font-black text-xs uppercase shadow-[2px_2px_0px_#000]">LIVE DEMO ↗</a>` : ''}
        <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="bg-white text-black border-[2px] border-black px-4 py-2 font-display font-black text-xs uppercase shadow-[2px_2px_0px_#000]">VIEW SOURCE CODE [GITHUB] ↗</a>
      </div>
    `;
    modal.classList.add('active');
  }

  private openCertsModal() {
    const modal = document.getElementById('modal-certs');
    const bodyEl = document.getElementById('modal-certs-body');
    if (!modal || !bodyEl) return;

    bodyEl.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-1">
        ${CERTS_DATA.map(c => `
          <div class="bg-white border-2 border-black p-4 shadow-[3px_3px_0px_#000] flex flex-col justify-between hover:bg-slate-50 transition-colors">
            <div>
              <div class="flex justify-between items-center mb-1.5">
                <span class="font-mono text-[11px] font-black uppercase text-neo-purple">${c.tag}</span>
                <span class="border-[1.5px] border-black px-1.5 py-0.5 font-mono text-[10px] font-bold bg-neo-lime">${c.badge}</span>
              </div>
              <h4 class="font-display font-black text-sm uppercase leading-tight mb-1 text-black">${c.title}</h4>
              <p class="font-mono text-xs text-slate-800 font-bold my-1">${c.detail}</p>
              <p class="font-body text-xs text-slate-600 mb-3">${c.desc}</p>
            </div>
            <div class="pt-2 border-t border-black/10 flex items-center justify-between">
              <span class="font-mono text-[10px] font-bold text-slate-500">FORMAT: ${c.fileType}</span>
              <a href="${c.fileUrl}" target="_blank" rel="noopener noreferrer" class="bg-neo-lime text-black border-2 border-black px-3 py-1 font-mono text-xs font-black shadow-[2px_2px_0px_#000] hover:bg-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1">
                VIEW CERTIFICATE ↗
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    modal.classList.add('active');
  }

  private openContactModal() {
    document.getElementById('modal-contact')?.classList.add('active');
  }

  private closeAllModals() {
    document.querySelectorAll('.neo-modal-backdrop').forEach(m => m.classList.remove('active'));
  }

  private showToast(msg: string) {
    const toast = document.getElementById('neo-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3500);
  }

  private bindEvents() {
    // Project Carousel
    document.getElementById('btn-proj-prev')?.addEventListener('click', () => this.prevProject());
    document.getElementById('btn-proj-next')?.addEventListener('click', () => this.nextProject());
    document.getElementById('btn-view-all-projects')?.addEventListener('click', () => this.nextProject());

    // Project Dots
    document.querySelectorAll('#proj-dots span').forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        this.currentProjIndex = idx;
        this.updateProjectCard();
      });
    });

    // Project Details Button
    document.getElementById('btn-proj-details')?.addEventListener('click', () => {
      this.openProjectModal(this.currentProjIndex);
    });

    // View All Certs Button
    document.getElementById('btn-view-all-certs')?.addEventListener('click', () => this.openCertsModal());

    // Contact Buttons
    document.getElementById('btn-nav-contact')?.addEventListener('click', () => this.openContactModal());
    document.getElementById('btn-get-in-touch')?.addEventListener('click', () => this.openContactModal());

    // Resume Direct File Download (Direct file download, never window.print())
    const triggerResumeDownload = (e: Event) => {
      e.preventDefault();
      this.showToast('[DOWNLOADING OFFICIAL RESUME: Devansh_Goyal_Resume.pdf]');

      const downloadAnchor = document.createElement('a');
      downloadAnchor.href = './Devansh_Goyal_Resume.pdf';
      downloadAnchor.download = 'Devansh_Goyal_Resume.pdf';
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      document.body.removeChild(downloadAnchor);
    };

    document.getElementById('btn-download-resume')?.addEventListener('click', triggerResumeDownload);
    document.getElementById('btn-view-full-resume')?.addEventListener('click', triggerResumeDownload);

    // Copy Email Action
    const copyEmail = () => {
      navigator.clipboard.writeText('devanshgoyal1402@gmail.com');
      this.showToast('[EMAIL COPIED: devanshgoyal1402@gmail.com]');
    };

    document.getElementById('btn-copy-email')?.addEventListener('click', copyEmail);
    document.getElementById('btn-footer-email')?.addEventListener('click', copyEmail);
    document.getElementById('btn-modal-copy-email')?.addEventListener('click', copyEmail);

    // Modal Close Buttons
    document.getElementById('btn-close-proj-modal')?.addEventListener('click', () => this.closeAllModals());
    document.getElementById('btn-close-certs-modal')?.addEventListener('click', () => this.closeAllModals());
    document.getElementById('btn-close-contact-modal')?.addEventListener('click', () => this.closeAllModals());

    // Backdrop Click Close
    document.querySelectorAll('.neo-modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeAllModals();
      });
    });

    // Global Keybindings
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      } else if (e.key === 'ArrowRight' || e.key === 'j') {
        const activeModal = document.querySelector('.neo-modal-backdrop.active');
        if (!activeModal && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          this.nextProject();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'k') {
        const activeModal = document.querySelector('.neo-modal-backdrop.active');
        if (!activeModal && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          this.prevProject();
        }
      }
    });
  }
}

// Boot application
window.addEventListener('DOMContentLoaded', () => {
  new NeobrutalismApp();
});
