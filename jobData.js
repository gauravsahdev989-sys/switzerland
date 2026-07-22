// Job data generator - deterministically generates 100,000 jobs for Switzerland
const TOTAL_JOBS = 100000;

const jobTitles = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Cloud Architect", "Mobile Developer", "Android Developer", "iOS Developer",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst",
  "UI/UX Designer", "Graphic Designer", "Brand Designer", "Web Designer",
  "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer",
  "Copywriter", "Social Media Manager", "Community Manager", "Growth Hacker",
  "Sales Manager", "Account Manager", "Business Development Manager", "Sales Executive",
  "Financial Analyst", "Accountant", "Finance Manager", "Auditor",
  "HR Manager", "HR Generalist", "Recruiter", "Talent Acquisition Specialist",
  "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Procurement Officer",
  "Customer Success Manager", "Customer Support Specialist", "Technical Support Engineer",
  "Network Engineer", "Cybersecurity Analyst", "Information Security Officer",
  "Database Administrator", "Systems Administrator", "IT Manager", "CTO",
  "Legal Counsel", "Compliance Officer", "Risk Manager", "Contract Manager",
  "Healthcare Administrator", "Clinical Research Associate", "Pharmacist", "Nurse",
  "Teacher", "Education Consultant", "Instructional Designer", "Training Manager",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
  "Architect", "Urban Planner", "Environmental Consultant", "Safety Officer",
  "Real Estate Agent", "Property Manager", "Facilities Manager", "Construction Manager",
  "Research Analyst", "Policy Analyst", "Communications Manager", "Public Relations Officer",
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist",
  "Video Editor", "Motion Graphics Designer", "Content Strategist", "Brand Manager",
  "Partnerships Manager", "Customer Experience Manager", "Data Engineer", "BI Developer",
  "Scrum Master", "Agile Coach", "Release Manager", "Site Reliability Engineer",
  "Penetration Tester", "Cloud Engineer", "Platform Engineer", "API Developer",
  "Hotel Manager", "Restaurant Manager", "Chef", "Sommelier", "Event Manager",
  "Banking Analyst", "Wealth Manager", "Financial Advisor", "Investment Analyst",
  "Pharmaceutical Researcher", "Biotech Scientist", "Lab Technician", "Medical Writer"
];

// 75+ Swiss companies + global companies with Swiss presence
const companies = [
  // Swiss companies
  "Nestlé", "Novartis", "Roche", "UBS", "Credit Suisse", "Zurich Insurance",
  "Swiss Re", "ABB", "Siemens Switzerland", "Philip Morris International",
  "Glencore", "Syngenta", "Lonza", "Givaudan", "Firmenich", "Sika",
  "Holcim", "Kuehne + Nagel", "Swisscom", "PostFinance", "Migros",
  "Coop", "Swatch Group", "Rolex", "Patek Philippe", "Richemont",
  "Clariant", "EMS-Chemie", "Galenica", "Logitech", "STMicroelectronics",
  "Swiss International Air Lines", "MSC Cruises", "Lindt & Sprüngli",
  "Nespresso", "Oerlikon", "Georg Fischer", "Bühler", "F. Hoffmann-La Roche",
  "Bayer Switzerland", "Pfizer Switzerland", "GSK Switzerland",
  
  // Global with Swiss presence
  "Google Switzerland", "Microsoft Switzerland", "Apple Switzerland",
  "Amazon Switzerland", "Meta Switzerland", "IBM Switzerland",
  "Oracle Switzerland", "SAP Switzerland", "Deloitte Switzerland",
  "PwC Switzerland", "EY Switzerland", "KPMG Switzerland",
  "Accenture Switzerland", "BCG Switzerland", "McKinsey Switzerland",
  "HSBC Switzerland", "Barclays Switzerland", "JPMorgan Switzerland",
  "Goldman Sachs Switzerland", "Citi Switzerland",
  "Unilever Switzerland", "P&G Switzerland", "Coca-Cola Switzerland",
  "PepsiCo Switzerland", "Nestlé Waters", "Danone Switzerland",
  "Shell Switzerland", "BP Switzerland", "TotalEnergies Switzerland",
  "Schneider Electric Switzerland", "Honeywell Switzerland",
  "Boeing Switzerland", "Airbus Switzerland", "Rolls-Royce Switzerland",
  "Samsung Switzerland", "Sony Switzerland", "Panasonic Switzerland",
  "Toyota Switzerland", "BMW Switzerland", "Mercedes-Benz Switzerland",
  "LVMH Switzerland", "Chanel Switzerland", "Gucci Switzerland"
];

const swissLocations = [
  // Zurich
  "Zürich, ZH", "Winterthur, ZH", "Uster, ZH", "Dübendorf, ZH", "Dietikon, ZH",
  "Wetzikon, ZH", "Bülach, ZH", "Horgen, ZH", "Oberglatt, ZH", "Schlieren, ZH",
  "Zollikon, ZH", "Küsnacht, ZH", "Rüschlikon, ZH", "Thalwil, ZH", "Adliswil, ZH",
  
  // Geneva
  "Genève, GE", "Versoix, GE", "Carouge, GE", "Meyrin, GE", "Vernier, GE",
  "Lancy, GE", "Chêne-Bougeries, GE", "Plan-les-Ouates, GE", "Onex, GE",
  
  // Basel
  "Basel, BS", "Riehen, BS", "Bettingen, BS",
  "Basel-Landschaft", "Allschwil, BL", "Reinach, BL", "Münchenstein, BL",
  
  // Bern
  "Bern, BE", "Köniz, BE", "Biel/Bienne, BE", "Burgdorf, BE", "Langenthal, BE",
  "Ostermundigen, BE", "Steffisburg, BE", "Spiez, BE", "Münsingen, BE",
  
  // Lausanne & Vaud
  "Lausanne, VD", "Yverdon-les-Bains, VD", "Montreux, VD", "Vevey, VD",
  "Pully, VD", "Renens, VD", "Nyon, VD", "Morges, VD", "Aigle, VD",
  
  // Other regions
  "Luzern, LU", "Zug, ZG", "St. Gallen, SG", "Rapperswil-Jona, SG",
  "Fribourg, FR", "Neuchâtel, NE", "La Chaux-de-Fonds, NE",
  "Schaffhausen, SH", "Chur, GR", "Davos, GR", "Sion, VS", "Sierre, VS",
  "Brig-Glis, VS", "Thun, BE", "Kriens, LU", "Emmen, LU", "Baden, AG",
  "Wettingen, AG", "Olten, SO", "Aarau, AG", "Solothurn, SO",
  "Bellinzona, TI", "Lugano, TI", "Locarno, TI", "Chur, GR",
  
  // Remote
  "Remote — Switzerland", "Remote — Swiss"
];

const salaryRanges = [
  { display: "CHF 4,000 – 6,000/month", min: 4000, max: 6000 },
  { display: "CHF 6,000 – 8,000/month", min: 6000, max: 8000 },
  { display: "CHF 8,000 – 10,000/month", min: 8000, max: 10000 },
  { display: "CHF 10,000 – 13,000/month", min: 10000, max: 13000 },
  { display: "CHF 13,000 – 16,000/month", min: 13000, max: 16000 },
  { display: "CHF 16,000 – 20,000/month", min: 16000, max: 20000 },
  { display: "CHF 20,000 – 25,000/month", min: 20000, max: 25000 },
  { display: "CHF 25,000 – 30,000/month", min: 25000, max: 30000 },
  { display: "CHF 30,000+/month", min: 30000, max: 45000 },
  { display: "CHF 3,500 – 5,000/month", min: 3500, max: 5000 }
];

const jobTypes = ["FULL_TIME", "CONTRACTOR", "PART_TIME", "INTERN", "TEMPORARY"];
const jobTypeDisplay = { 
  "FULL_TIME": "Full-time", 
  "CONTRACTOR": "Contract", 
  "PART_TIME": "Part-time", 
  "INTERN": "Internship", 
  "TEMPORARY": "Temporary" 
};

const experienceLevels = [
  { display: "Entry Level", schema: "no requirements" },
  { display: "Mid Level",   schema: "2 years experience" },
  { display: "Senior Level",schema: "5 years experience" },
  { display: "Lead",        schema: "7 years experience" },
  { display: "Manager",     schema: "5 years experience" },
  { display: "Director",    schema: "8 years experience" },
  { display: "Executive",   schema: "10 years experience" }
];

const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Pharmaceuticals",
  "Real Estate", "Healthcare", "Education", "Consulting", "Aviation",
  "Construction", "Logistics & Shipping", "Hospitality", "Retail", "Luxury Goods",
  "Renewable Energy", "Automotive", "Telecommunications", "Legal", "Government",
  "Food & Beverage", "Chemical", "Biotechnology", "Insurance", "Manufacturing"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking a talented ${title} to join the team at ${company} in Switzerland. ${isRemote ? "This is a fully remote role open to qualified candidates across Switzerland." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to ${company}'s growing operations in Switzerland and across Europe.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced global business environment
• Bachelor's degree in a relevant field
• Proficiency with modern tools and platforms
• Fluent in English (German/French is a plus)

What We Offer:
• Competitive salary in CHF
• Health insurance (Swiss standard)
• 25+ days annual leave
• Remote work allowance
• Annual performance bonus
• Professional development budget
• Excellent work-life balance`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading company in Switzerland looking for experienced professionals to scale our impact across the country and beyond.

${isRemote ? "This remote-first position allows you to work from anywhere in Switzerland with flexible hours." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title} at ${company}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission in one of the world's most innovative economies.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends globally and in Switzerland
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Team player with a growth mindset
• Relevant certification or degree preferred
• Swiss work permit or EU/EFTA citizenship preferred

Compensation & Benefits:
• Competitive CHF salary • Swiss health insurance • 25 days annual leave • Education allowance • Excellent pension plan • Flexible working hours`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of one of Switzerland's most exciting companies!

${isRemote ? "🌐 Remote | Work from anywhere in Switzerland" : `📍 ${location}`}

We're building the future of business in the Swiss market and need exceptional talent like you. This is a rare opportunity to work with a world-class brand while enjoying the exceptional quality of life Switzerland offers.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact millions of customers across the region.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in a fast-moving global business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)
• Languages: English required; German, French, or Italian a plus

Perks at ${company}:
Competitive CHF salary | Swiss health insurance | Pension fund | Education allowance | 25+ days leave | Performance bonus | Learning budget | Gym membership | Excellent work-life balance`
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;

  const companyIndex = Math.floor((id - 1) / Math.ceil(TOTAL_JOBS / companies.length)) % companies.length;

  const titleIndex   = Math.floor(r(1) * jobTitles.length);
  const locationIndex= Math.floor(r(3) * swissLocations.length);
  const salaryIndex  = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex     = Math.floor(r(6) * experienceLevels.length);
  const industryIndex= Math.floor(r(7) * industries.length);
  const descIndex    = Math.floor(r(8) * jobDescriptions.length);

  const title    = jobTitles[titleIndex];
  const company  = companies[companyIndex];
  const location = isRemote ? "Remote — Switzerland" : swissLocations[locationIndex];
  const salary   = salaryRanges[salaryIndex];
  const jobType  = jobTypes[jobTypeIndex];
  const exp      = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, swissLocations[locationIndex]);

  const daysAgo = Math.floor(r(9) * 60);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - daysAgo);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 90);

  return {
    id,
    title,
    company,
    location,
    salary: salary.display,
    salaryMin: salary.min,
    salaryMax: salary.max,
    jobType,
    jobTypeDisplay: jobTypeDisplay[jobType],
    experience: exp.display,
    experienceSchema: exp.schema,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.company,
      "value": `JOB-CH-${String(job.id).padStart(6, '0')}`
    },
    "datePosted": job.postedDate,
    "validThrough": `${job.validThrough}T00:00:00Z`,
    "employmentType": job.jobType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.isRemote ? "Switzerland" : job.location.split(',')[0],
        "addressCountry": "CH"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Switzerland"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "CHF",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "MONTH"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experienceSchema === "no requirements" ? 0
        : parseInt(job.experienceSchema) * 12
    },
    "industry": job.industry,
    "url": `/jobs/${job.id}`,
    "directApply": true
  };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
  }

  return schema;
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, swissLocations, industries };
