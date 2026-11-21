import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight, BriefcaseBusiness, ChevronRight, Code2, Database,
  Download,   ExternalLink, Layers3, MapPin, Menu,
  Moon, ServerCog, Sun, X, CheckCircle2, Building2, GraduationCap,
  ShoppingBag, ShieldCheck, Zap
} from 'lucide-react'
import caintaPhoto from './assets/cainta-photo.PNG'
import ekunsulta from './assets/e-kunsulta.PNG'
import findMyItem from './assets/find-my-item.PNG'
import occhris from './assets/occhris.PNG'
import procurement from './assets/procurement.PNG'
import schoolEnrollment from './assets/school-enrollment.PNG'
import silangPos from './assets/silang-pos.PNG'
import universalScheduler from './assets/universal-scheduler.PNG'
import profileImage from './assets/profile.png'
import resumePortrait from './assets/resume-1x1.png'
import './App.css'

type Project = {
  name: string
  category: string
  description: string
  problem: string
  solution: string
  features: string[]
  technologies: string[]
  role: string
  status: 'Active development' | 'Completed concept' | 'In development'
  image: string
}

const projects: Project[] = [
  { name: 'Cainta Photography Studio MIS', category: 'Business', description: 'A management system for customer bookings, studio packages, schedules, payments, and operations.', problem: 'Reservations and studio operations require reliable scheduling and customer records.', solution: 'Provide an organized booking workflow with packages, availability, and payment monitoring.', features: ['Customer management', 'Booking management', 'Package catalog', 'Schedule availability', 'Reservations', 'Payment monitoring'], technologies: ['React', 'TypeScript', 'Node.js', 'Database'], role: 'Full-stack development and database design', status: 'In development', image: caintaPhoto },
  { name: 'E-Kunsulta Guidance Counseling System', category: 'Education', description: 'An appointment platform for student counseling requests and counselor availability.', problem: 'Appointment requests and status updates need a consistent, accessible process.', solution: 'Create a web-based scheduling workflow for booking, approval, and monitoring.', features: ['Appointment booking', 'Counselor availability', 'Approval workflow', 'Rescheduling', 'Cancellation', 'Status monitoring'], technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'], role: 'Web development and database implementation', status: 'Completed concept', image: ekunsulta },
  { name: 'FindMyItem Lost and Found Portal', category: 'Government', description: 'A campus lost-and-found portal for reporting, locating, claiming, and recovering belongings.', problem: 'Lost items are difficult to record and match with their rightful owners.', solution: 'Centralize lost and found reports with location hotspots, QR stickers, claims, and recovery analytics.', features: ['Lost item reports', 'Found item registration', 'Claim management', 'QR stickers', 'Campus hotspot map', 'Recovery tracking'], technologies: ['React', 'TypeScript', 'Node.js', 'Database'], role: 'System design and full-stack development', status: 'In development', image: findMyItem },
  { name: 'OCC HR Information System', category: 'Government', description: 'A human resources platform for employee records, attendance, contracts, leave, payroll, and performance.', problem: 'HR records and organizational analytics are commonly managed through separate processes.', solution: 'Bring core HR operations into role-based dashboards with reporting and document workflows.', features: ['Employee records', 'Contracts', 'Attendance', 'Leave management', 'Performance', 'Payroll'], technologies: ['React', 'TypeScript', 'Node.js', 'Database'], role: 'Full-stack development and system integration', status: 'In development', image: occhris },
  { name: 'LGU Automated Procurement and Supplier Evaluation', category: 'Government', description: 'A procurement platform for APP planning, requisitions, solicitations, obligations, and supplier evaluation.', problem: 'Manual procurement processes slow approvals and make audit trails difficult to manage.', solution: 'Digitize procurement workflows with role-based access, supplier evaluation, and budget reporting.', features: ['APP planning', 'Requisitions', 'RFQ and solicitation', 'Supplier evaluation', 'Contracts', 'Budget tracking'], technologies: ['React', 'Node.js', 'NestJS', 'MySQL', 'Gemini API'], role: 'Full-stack development and system integration', status: 'In development', image: procurement },
  { name: 'School Enrollment and Scheduling System', category: 'Education', description: 'A school enrollment platform for students, grade levels, sections, teachers, and academic setup.', problem: 'Enrollment records and section capacity are difficult to manage across academic terms.', solution: 'Centralize the school year setup, student entry, sections, teaching loads, and enrollment operations.', features: ['Student enrollment', 'Grade levels', 'Sections', 'Teacher management', 'Teaching load', 'Enrollment reports'], technologies: ['React', 'TypeScript', 'PHP', 'Node.js', 'MySQL'], role: 'System analysis and full-stack development', status: 'In development', image: schoolEnrollment },
  { name: 'Silang Mart POS and Inventory', category: 'Business', description: 'A retail and wholesale platform for POS transactions, inventory, warehouses, and logistics.', problem: 'Businesses need accurate stock records and a reliable transaction history.', solution: 'Combine point-of-sale workflows with inventory monitoring, procurement, and delivery operations.', features: ['POS transactions', 'Inventory monitoring', 'Wholesale pricing', 'Products', 'Warehouse', 'Dispatch tracking'], technologies: ['React', 'Node.js', 'MySQL'], role: 'Application development and database integration', status: 'In development', image: silangPos },
  { name: 'Universal AI Academic Scheduler', category: 'Education', description: 'A three-term academic scheduling system for rooms, faculty workloads, sections, and conflict detection.', problem: 'Academic schedules are complex and vulnerable to room, teacher, and time conflicts.', solution: 'Provide a data-driven scheduling grid with AI-guided evaluation and workload constraints.', features: ['Timetable generation', 'Room allocation', 'Teacher workloads', 'Conflict detection', 'Term calendars', 'AI copilot'], technologies: ['React', 'TypeScript', 'Node.js', 'AI Integration'], role: 'System design and application development', status: 'In development', image: universalScheduler },
]

const skills = [
  { title: 'Frontend', icon: Code2, items: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Responsive Web Design'] },
  { title: 'Backend', icon: ServerCog, items: ['PHP', 'Node.js', 'Express.js', 'NestJS', 'REST APIs', 'Authentication', 'Application Architecture'] },
  { title: 'Database', icon: Database, items: ['MySQL', 'SQLite', 'Relational Design', 'Database Modeling', 'Query Optimization', 'Data Management'] },
  { title: 'Tools', icon: Layers3, items: ['Git', 'GitHub', 'VS Code', 'XAMPP', 'Postman', 'npm'] },
  { title: 'AI & Integrations', icon: Zap, items: ['Gemini API', 'Ollama', 'Mistral', 'AI Chatbots', 'API Integration', 'Workflow Automation'] },
  { title: 'Systems', icon: ShieldCheck, items: ['System Analysis', 'Software Architecture', 'Role-Based Access', 'Business Automation', 'Software Testing', 'Deployment'] },
]

const experience = [
  ['2018', 'Technical Installation and Electronics', 'Television installation and repair, basic electronics, and technical troubleshooting.'],
  ['2019', 'Computer Hardware and Technical Support', 'Computer setup, hardware troubleshooting, and computer maintenance.'],
  ['2020', 'Technical Services and Maintenance', 'Air-conditioning installation, hardware setup, maintenance, and technical work.'],
  ['2021', 'Beginning of Software Development', 'Started developing small web applications and learning application support.'],
  ['2022', 'Freelance Software Development', 'Developed freelance projects and improved programming and database skills.'],
  ['2023', 'Client-Based Development', 'Worked on client web projects while continuing technical services.'],
  ['2024', 'Information Systems Development', 'Developed complex web applications and business-oriented systems.'],
  ['2025', 'Enterprise and Organizational Systems', 'Built LGU, school, POS, inventory, HRIS, and administrative platforms.'],
  ['2026', 'Continued Software Development', 'Focused on modular, scalable, and maintainable full-stack applications.'],
]

const services = [
  ['Custom Web Applications', 'Purpose-built web applications shaped around specific workflows and requirements.', Code2],
  ['Business Information Systems', 'Digital platforms for records, operations, reporting, and organizational processes.', BriefcaseBusiness],
  ['Enterprise Applications', 'Integrated solutions for institutions, government organizations, and businesses.', Building2],
  ['Database Development', 'Structured database design, implementation, optimization, and data management.', Database],
  ['POS and Inventory', 'Sales, inventory, product, transaction, and stock management applications.', ShoppingBag],
  ['School Management', 'Enrollment, student records, grading, scheduling, and academic systems.', GraduationCap],
  ['LGU and Administrative Systems', 'Digital tools for procurement, records, and administrative workflows.', Building2],
  ['API Integration', 'REST API development and integration across applications and services.', ServerCog],
  ['AI-Powered Features', 'Practical chatbot and AI integration for automated workflows.', Zap],
  ['Support and Maintenance', 'Troubleshooting, improvements, deployment assistance, and ongoing care.', ShieldCheck],
] as const

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [skillTab, setSkillTab] = useState(0)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { threshold: [0.2, 0.45] })
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Services']
  const filters = ['All', 'Government', 'Education', 'Business']
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter)

  return (
    <div className="app-shell">
      <header className="navbar">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
          <span>SDC</span>
        </button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(item => (
            <button key={item} className={activeSection === item.toLowerCase() ? 'active' : ''} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="nav-cta" onClick={() => scrollTo('projects')}>View Work</button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu size={20} /></button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.25 }}>
            <button className="icon-button close-menu" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X /></button>
            {navItems.map(item => <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>)}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="home" className="hero-section">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="availability"><span /> Available for opportunities</div>
            <p className="eyebrow">STEVE DE LA CRUZ · FULL-STACK DEVELOPER</p>
            <h1>Building digital solutions.<br /><span>Engineering better systems.</span></h1>
            <p className="hero-description">I design and develop modern web applications and information systems that help organizations streamline operations, automate workflows, and manage information efficiently.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo('projects')}>Explore My Projects <ArrowUpRight size={17} /></button>
              <button className="secondary-button" onClick={() => scrollTo('experience')}>View Experience</button>
              <button className="text-button" onClick={() => window.print()}>Download / Print Resume <Download size={16} /></button>
            </div>
            <div className="location"><MapPin size={15} /> Cainta, Rizal, Philippines</div>
          </motion.div>

          <motion.div className="system-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
            <img className="hero-profile-image" src={profileImage} alt="Steve Dela Cruz" />
          </motion.div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT</p>
            <h2>From technical fundamentals<br />to complete systems.</h2>
          </div>
          <div className="about-layout">
            <div className="about-copy">
              <p>I am an Information Systems undergraduate with hands-on experience in technical services, freelance software development, and business application development.</p>
              <p>My journey started with hardware installation and technical troubleshooting before gradually transitioning into web application development and full-stack software engineering. I enjoy understanding how organizations operate and turning their processes into efficient digital solutions.</p>
              <p>For me, software development is about understanding problems, designing effective systems, and building solutions that create real value.</p>
            </div>
            <div className="highlight-grid">
              {[
                [Layers3, 'System Development', 'Complete web applications and information systems'],
                [Building2, 'Business Solutions', 'Digital workflows for organizational processes'],
                [Zap, 'Technical Versatility', 'Hardware, software, databases, and integrations'],
                [ChevronRight, 'Continuous Improvement', 'Learning and refining development practices'],
              ].map(([Icon, title, text]) => {
                const HighlightIcon = Icon as typeof Layers3
                return <div className="highlight-card" key={String(title)}><HighlightIcon size={20} /><h3>{String(title)}</h3><p>{String(text)}</p></div>
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">02 / SKILLS</p>
            <h2>Capabilities across the stack.</h2>
          </div>
          <div className="skills-layout">
            <div className="skill-tabs" role="tablist">
              {skills.map((skill, index) => (
                <button key={skill.title} role="tab" aria-selected={skillTab === index} className={skillTab === index ? 'active' : ''} onClick={() => setSkillTab(index)}>
                  <skill.icon size={18} /> {skill.title} <ChevronRight size={16} />
                </button>
              ))}
            </div>
            <div className="skill-panel">
              <AnimatePresence mode="wait">
                <motion.div key={skillTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                  <p className="eyebrow">{skills[skillTab].title}</p>
                  <h3>{skills[skillTab].title} toolkit</h3>
                  <div className="tag-grid">{skills[skillTab].items.map(item => <div className="technology-tag" key={item}>{item}</div>)}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">03 / JOURNEY</p>
            <h2>Professional experience.</h2>
          </div>
          <div className="timeline">
            {experience.map(([year, title, text], index) => (
              <motion.div className="timeline-item" key={year} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
                <div className="timeline-year">{year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content"><h3>{title}</h3><p>{text}</p></div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading row-heading">
            <div><p className="eyebrow">04 / PROJECTS</p><h2>Selected work.</h2></div>
            <div className="project-filters">{filters.map(item => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div>
          </div>
          <motion.div className="project-grid" layout>
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.article className="project-card" layout key={project.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: index * 0.03 }}>
                  <button className="project-preview" onClick={() => setSelectedProject(project)} aria-label={`View ${project.name}`}>
                    <img src={project.image} alt={`${project.name} interface`} />
                    <span className="view-project">View case study <ArrowUpRight size={15} /></span>
                  </button>
                  <div className="project-info">
                    <div className="project-meta"><span>{project.category}</span><small>{project.status}</small></div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">{project.technologies.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">05 / SERVICES</p>
            <h2>How I can help.</h2>
          </div>
          <div className="services-grid">
            {services.map(([title, text, Icon], index) => (
              <motion.article className="service-card" key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                <Icon size={22} />
                <h3>{title}</h3><p>{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section process-section">
          <div className="section-heading">
            <p className="eyebrow">06 / PROCESS</p>
            <h2>A structured way to build.</h2>
          </div>
          <div className="process-grid">
            {[
              ['Discovery', 'Understand goals, problems, and requirements.'],
              ['Analysis', 'Study workflows, stakeholders, and data needs.'],
              ['Planning', 'Design the architecture, modules, and database.'],
              ['Development', 'Build interfaces, services, APIs, and integrations.'],
              ['Testing', 'Validate features and improve reliability.'],
              ['Deployment', 'Configure production environments and release.'],
              ['Maintenance', 'Monitor, troubleshoot, and improve the system.'],
            ].map(([title, text], index) => (
              <div className="process-step" key={title}><div>{String(index + 1).padStart(2, '0')}</div><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={28} /></div>
            <div>
              <p className="eyebrow">EDUCATION</p>
              <h2>Bachelor of Science in<br />Information Systems</h2>
              <span>One Cainta College · 2022–2027 · Pursuing degree</span>
              <div className="education-history">
                <p><strong>Senior High School</strong><br />Taytay Senior High School · 2017–2019 · With High Honors</p>
                <p><strong>Junior High School</strong><br />Manuel I. Santos Memorial National High School · 2013–2017 · Grade 7–10</p>
              </div>
            </div>
            <div className="interests"><p>Academic interests</p>{['Information Systems', 'Enterprise Software', 'Database Engineering', 'Business Automation', 'AI Integration'].map(item => <span key={item}>{item}</span>)}</div>
          </div>
        </section>

      </main>

      <footer>
        <button className="brand" onClick={() => scrollTo('home')}><span>SDC</span></button>
        <p>Turning ideas into systems.</p>
        <button className="back-top" onClick={() => scrollTo('home')} aria-label="Back to top">↑</button>
      </footer>

      <article className="resume-print" aria-label="Printable resume">
        <header className="resume-header">
          <img className="resume-photo" src={resumePortrait} alt="Steve De La Cruz" />
          <div className="resume-header-copy">
            <h1>De La Cruz Steve C.</h1>
            <p>UI/UX &amp; Full-Stack Developer</p>
            <div>0961 039 4664 · Steve.dlcrz08@gmail.com</div>
            <div>81 Narra St., Brgy. San Roque, Madera Homes 1, Cainta, Rizal</div>
          </div>
        </header>
        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>Information Systems undergraduate and full-stack developer experienced in UI/UX, web applications, databases, business systems, technical support, and enterprise solutions. Skilled in turning organizational workflows into practical, scalable, and maintainable digital platforms.</p>
        </section>
        <section className="resume-section resume-columns">
          <div>
            <h2>Technical Skills</h2>
            {skills.map(skill => (
              <p key={skill.title}><strong>{skill.title}:</strong> {skill.items.join(', ')}</p>
            ))}
          </div>
          <div>
            <h2>Education</h2>
            <p><strong>One Cainta College</strong><br />2022–2027 · Bachelor of Science in Information Systems<br />Currently pursuing</p>
            <p><strong>Taytay Senior High School</strong><br />2017–2019 · Grade 11–12 · With High Honors</p>
            <p><strong>Manuel I. Santos Memorial National High School</strong><br />2013–2017 · Grade 7–10</p>
          </div>
        </section>
        <section className="resume-section">
          <h2>Professional Experience</h2>
          {experience.map(([year, title, text]) => (
            <div className="resume-experience" key={year}>
              <span>{year}</span>
              <div><strong>{title}</strong><p>{text}</p></div>
            </div>
          ))}
        </section>
        <section className="resume-section">
          <h2>Selected Project Areas</h2>
          <p>LGU procurement and supplier evaluation, school enrollment and scheduling, HR information systems, POS and inventory, campus lost-and-found, counseling appointments, and academic scheduling systems.</p>
        </section>
      </article>

      <AnimatePresence>
        {selectedProject && (
          <motion.div className="modal-backdrop" role="presentation" onMouseDown={() => setSelectedProject(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={event => event.stopPropagation()} initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }}>
              <button className="icon-button modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X /></button>
              <p className="eyebrow">{selectedProject.category} / Case Study</p>
              <h2 id="project-modal-title">{selectedProject.name}</h2>
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-preview"><img src={selectedProject.image} alt={`${selectedProject.name} full interface`} /></div>
              <div className="modal-grid">
                <div><h3>Problem</h3><p>{selectedProject.problem}</p></div>
                <div><h3>Solution</h3><p>{selectedProject.solution}</p></div>
              </div>
              <div className="modal-grid">
                <div><h3>Key features</h3><ul>{selectedProject.features.map(feature => <li key={feature}><CheckCircle2 size={14} /> {feature}</li>)}</ul></div>
                <div><h3>My role</h3><p>{selectedProject.role}</p><h3>Technology stack</h3><div className="project-tags">{selectedProject.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></div>
              </div>
              <div className="modal-links"><button onClick={() => setNotice('Repository URL not added yet.')}><Code2 size={16} /> Repository placeholder</button><button onClick={() => setNotice('Live demo URL not added yet.')}><ExternalLink size={16} /> Live demo placeholder</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {notice && <motion.button className="toast" onClick={() => setNotice('')} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>{notice}<X size={16} /></motion.button>}
      </AnimatePresence>
    </div>
  )
}

export default App
