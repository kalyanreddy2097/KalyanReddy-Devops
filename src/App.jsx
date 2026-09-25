import Hero from './Hero'
import { PROFILE } from './config'

const asset = (f) => `${import.meta.env.BASE_URL}${f}`

const NUMBERS = [
  ['3+', 'years in DevOps and SRE'],
  ['20%', 'AWS cost reduction'],
  ['99.9%', 'uptime across production'],
  ['300+', 'production servers supported']
]

const STACK = [
  { group: 'Cloud and IaC', items: ['AWS (EC2, EKS, ECS, S3, VPC, IAM, ECR, ALB)', 'Terraform', 'HashiCorp Vault'] },
  { group: 'Containers', items: ['Kubernetes (EKS)', 'Docker', 'Helm', 'KEDA', 'Karpenter', 'Amazon ECS'] },
  { group: 'CI/CD and GitOps', items: ['Jenkins', 'ArgoCD', 'GitHub Actions', 'Bitbucket', 'Git branching strategies'] },
  { group: 'Observability', items: ['Prometheus', 'Grafana', 'Loki', 'SigNoz', 'Blackbox Exporter', 'Node Exporter', 'CloudWatch', 'Zabbix', 'Nagios'] },
  { group: 'Data and streaming', items: ['Apache Kafka', 'PostgreSQL logical replication', 'Amazon RDS'] },
  { group: 'OS and scripting', items: ['Linux (RHEL, Ubuntu, SUSE, AIX)', 'Bash', 'VMware', 'Xen'] }
]

const CASES = [
  {
    title: 'Cutting AWS spend by 20%',
    problem: 'Infrastructure costs across client accounts were higher than the workloads needed.',
    fix: 'Right-sized resources, moved node scaling to Karpenter, and migrated Jenkins to ARM64 Graviton instances.',
    result: 'AWS infrastructure costs down 20%.'
  },
  {
    title: 'Zero-downtime deploys with GitOps',
    problem: 'Deployments were manual and inconsistent between teams and environments.',
    fix: 'Built Jenkins pipelines on Bitbucket and GitHub, moved EKS deployments to ArgoCD, and standardised branching across teams.',
    result: 'Manual deployments eliminated, with declarative, zero-downtime releases to production and dev clusters.'
  },
  {
    title: 'One observability stack for every account',
    problem: 'Metrics, logs and uptime checks were scattered across accounts.',
    fix: 'Centralised Prometheus, Grafana, Loki, SigNoz, Blackbox and Node Exporter, covering metrics, logs, traces and uptime.',
    result: 'A single place to see the health of every AWS account, backing 99.9% uptime.'
  }
]

const JOBS = [
  {
    role: 'DevOps Engineer',
    company: 'Cloud2Scale Solutions',
    dates: 'Nov 2024 – Present',
    location: 'Koramangala, Bangalore',
    points: [
      'CI/CD with Jenkins, Bitbucket and GitHub, plus ArgoCD GitOps for production and dev EKS clusters',
      'Multi-account AWS with Terraform, cross-account IAM and least-privilege RBAC',
      'Secrets in HashiCorp Vault, Kafka for event streaming, PostgreSQL logical replication for analytics'
    ]
  },
  {
    role: 'System Analyst (DevOps & SRE)',
    company: 'Canopus GBS, for Kyndryl (ABFRL)',
    dates: 'Jun 2024 – Oct 2024',
    location: 'HAL Road, Marathahalli, Bangalore',
    points: [
      '24/7 support for 300+ servers across AIX, SUSE, Red Hat and Ubuntu with zero critical SLA breaches',
      'AIX clusters: LPARs, PowerHA (HACMP), LVM and mksysb backups for HA and DR',
      'CloudWatch monitoring, cost optimisation and change execution plans for SAP and Oracle upgrades'
    ]
  },
  {
    role: 'SysOps & DevOps Engineer',
    company: 'Trellissoft Engineering Services',
    dates: 'Sep 2023 – May 2024',
    location: 'MG Road, Bangalore',
    points: [
      'Docker and Kubernetes deployments across dev, test and production',
      'Grafana and CloudWatch dashboards, with Prometheus and Zabbix monitoring',
      'Xen Orchestra VM management, backup strategy and disaster recovery plans'
    ]
  }
]

const CERTS = [
  ['AWS Solutions Architect Associate (SAA-C03)', 'In progress'],
  ['HashiCorp Certified: Terraform Associate', 'In progress'],
  ['AWS Cloud Technical Essentials, Coursera', '2023'],
  ['Linux Administration Bootcamp, Udemy', '2023']
]

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <section id="about" className="section about">
          <h2>I build systems teams can trust in production.</h2>
          <p>
            I'm a DevOps engineer in {PROFILE.location} working on AWS, Kubernetes and CI/CD. Day to day
            that means provisioning with Terraform and Helm, shipping through Jenkins and ArgoCD, and
            watching it all with Prometheus, Grafana and SigNoz, with a focus on infrastructure that is
            reliable, secure and easy to operate.
          </p>
          <dl className="numbers">
            {NUMBERS.map(([n, label]) => (
              <div key={label}><dt>{n}</dt><dd>{label}</dd></div>
            ))}
          </dl>
        </section>

        <section id="work" className="section">
          <h2>Selected work</h2>
          <div className="cases">
            {CASES.map((c) => (
              <article className="case" key={c.title}>
                <h3>{c.title}</h3>
                <p><strong>Problem.</strong> {c.problem}</p>
                <p><strong>Fix.</strong> {c.fix}</p>
                <p><strong>Result.</strong> {c.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <ol className="timeline">
            {JOBS.map((j) => (
              <li key={j.company}>
                <div className="when">{j.dates}<span className="where">{j.location}</span></div>
                <div>
                  <h3>{j.role}</h3>
                  <p className="company">{j.company}</p>
                  <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="stack" className="section">
          <h2>What I work with</h2>
          <div className="stack">
            {STACK.map((s) => (
              <div className="stack-row" key={s.group}>
                <h3>{s.group}</h3>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="certs">
            <h3>Certifications</h3>
            <ul>
              {CERTS.map(([name, status]) => (
                <li key={name}><span>{name}</span><span className="status">{status}</span></li>
              ))}
            </ul>
          </div>
          <p className="edu">B.Tech, Mechanical Engineering, Madanapalle Institute of Technology &amp; Science (JNTUA)</p>
        </section>

        <section id="contact" className="section contact">
          <h2>Let's keep your platform up.</h2>
          <p>I'm open to DevOps, SRE and platform engineering roles.</p>
          <div className="links">
            <a className="btn" href={`mailto:${PROFILE.email}`}>Email me</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {PROFILE.github && <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>}
            <a href={asset(PROFILE.resume)} download>Download resume</a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2026 {PROFILE.name}</p>
      </footer>
    </>
  )
}
