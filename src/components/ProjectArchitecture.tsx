import { ArrowRight, Code2, Database, GitBranch, Layers, Radio, Server, ShieldCheck, Sparkles } from 'lucide-react';

type Architecture = {
  audience: string;
  frontend: string[];
  backend: string[];
  integrations: string[];
  operations: string[];
};

const architectures: Record<string, Architecture> = {
  mes: {
    audience: 'Shop-floor teams',
    frontend: ['React dashboards', 'Quality inspections'],
    backend: ['Spring Boot services', 'JWT · Role-based access'],
    integrations: ['Kafka event streaming', 'WebSocket updates'],
    operations: ['PostgreSQL · HikariCP', 'Docker · AWS', 'GitLab CI · Jenkins', 'CloudWatch · ELK'],
  },
  quality: {
    audience: 'Operations & QA teams',
    frontend: ['React · Redux Toolkit', 'Live monitoring & alerts'],
    backend: ['Spring Boot APIs', 'Sensor event processing'],
    integrations: ['ERP systems', 'Kafka · WebSockets'],
    operations: ['Redis', 'Docker · AWS', 'CI/CD pipelines', 'Centralized monitoring'],
  },
  ai: {
    audience: 'Enterprise customers',
    frontend: ['React · AEM', 'Reusable design system'],
    backend: ['Spring Boot services', 'OAuth 2.0 · JWT'],
    integrations: ['Claude AI', 'Context-aware conversations'],
    operations: ['Redis', 'Redux · Context API', 'Session persistence', 'Secure API integrations'],
  },
};

export default function ProjectArchitecture({ architecture }: { architecture: string }) {
  const data = architectures[architecture] ?? architectures.mes;
  const layers = [
    { label: 'Experience', icon: Code2, items: data.frontend },
    { label: 'Services & security', icon: Server, items: data.backend },
    { label: 'Integrations', icon: architecture === 'ai' ? Sparkles : Radio, items: data.integrations },
  ];

  return (
    <div className="border-b border-[#263345] bg-[radial-gradient(ellipse_at_top_right,rgba(33,150,243,0.16),transparent_65%)] bg-[#09131e] p-4 sm:p-5">
      <div className="mb-4 flex items-center gap-2 text-slate-100">
        <Layers className="h-4 w-4 text-cyan-400" aria-hidden="true" />
        <span className="text-sm font-semibold tracking-wide">Architecture overview</span>
        <span className="ml-auto text-[10px] uppercase tracking-widest text-slate-400">Logical view</span>
      </div>
      <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
        <ShieldCheck className="h-3.5 w-3.5 text-[#08C8B5]" aria-hidden="true" />
        {data.audience}<ArrowRight className="h-3 w-3 text-cyan-400" aria-hidden="true" />
        <span>Application platform</span>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {layers.map(({ label, icon: Icon, items }) => (
          <div key={label} className="relative rounded-xl border border-cyan-400/30 bg-[#102235]/80 p-3">
            <Icon className="mb-2 h-5 w-5 text-cyan-400" aria-hidden="true" />
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-cyan-200">{label}</h4>
            <ul className="space-y-1.5 text-xs leading-relaxed text-slate-200">
              {items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-dashed border-cyan-400/30 bg-[#0a1a28] p-3">
        <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-cyan-300">
          <Database className="h-3 w-3" aria-hidden="true" />Supporting capabilities<GitBranch className="ml-auto h-3 w-3" aria-hidden="true" />
        </div>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-[11px] text-slate-300">
          {data.operations.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
