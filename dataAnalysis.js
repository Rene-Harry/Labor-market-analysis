// COMPANY WITH THE MOST JOB LISTINGS
      function getCompanies(data) {
      const rows = data.trim().split(/\r?\n/); // split on one or more '\r' or '\n' characters
      const headers = rows.shift().split(',');
      const companies = rows.map(row => {
        const values = row.split(',');
        return values[headers.indexOf('Company')];
      });
      return companies;
    }

  function findLeadingEmployers(companies, numEmployers) {
    const counts = new Map();
    companies.forEach(company => {
      counts.set(company, (counts.get(company) || 0) + 1);
    });
    const sortedCounts = Array.from(counts).sort((a, b) => b[1] - a[1]).slice(0, numEmployers);
    const employers = sortedCounts.map(entry => entry[0]);
    const employerCounts = sortedCounts.map(entry => entry[1]);
    return { employers, employerCounts };
  }

fetch('./jobswebClean.csv')
  .then(response => response.text())
  .then(data => {
    const companies = getCompanies(data);
    const leadingEmployers = findLeadingEmployers(companies, 6);

    const result = {};
    leadingEmployers.employers.forEach((employer, index) => {
      result[`Leading Employers [${index + 1}] ${employer}`] = `No of Jobs: ${leadingEmployers.employerCounts[index]}`;
    });

    // console.log(result);
  });



// MOST COMMON JOB TITLES



    fetch('./jobswebdata.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.trim().split('\n');
    const headers = rows.shift().split(',');
    const jobTitleCounts = {};
    rows.forEach(row => {
      const values = row.split(',');
      const obj = headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
      const jobTitle = obj['Title'];
      jobTitleCounts[jobTitle] = (jobTitleCounts[jobTitle] || 0) + 1; // increment count for job title
    });
    
    // Sort jobTitleCounts in descending order
    const sortedJobTitleCounts = Object.fromEntries(
      Object.entries(jobTitleCounts).sort((a, b) => b[1] - a[1])
    );
    
    // Get the top 5 most common job titles and their counts
    const topJobTitleCounts = Object.entries(sortedJobTitleCounts).slice(0, 5);
    
    // Log the top 5 most common job titles and their counts to the console
    console.log("Top 5 most common job titles:");
    topJobTitleCounts.forEach(([title, count]) => {
      // console.log(`Job Title: ${title}, Count: ${count}`);
    });
  })
  .catch(error => console.log(error));

// NUMBER OF JOBS ADVERTISED PER MONTH


    fetch('./jobswebdata.csv')
    .then(response => response.text())
    .then(data => {
      const rows = data.trim().split('\n');
      const headers = rows.shift().split(',');

      // Filter data by year
      const jobsByYear = {};
      rows.forEach(row => {
        const values = row.split(',');
        const obj = headers.reduce((obj, header, index) => {
          obj[header] = values[index];
          return obj;
        }, {});
        const dateString = obj['Date'];
        const dateParts = dateString.split('/');
        const date = new Date(Date.UTC(dateParts[2], getMonthIndex(dateParts[1]), dateParts[0]));
        const year = date.getUTCFullYear();
        if (!jobsByYear[year]) {
          jobsByYear[year] = [];
        }
        jobsByYear[year].push(obj);
      });

      // Calculate job count per month for each year
      const jobCountsByYearAndMonth = {};
      for (const year in jobsByYear) {
        const jobs = jobsByYear[year];
        const jobCountsByMonth = {};
        jobs.forEach(job => {
          const dateString = job['Date'];
          const dateParts = dateString.split('/');
          const date = new Date(Date.UTC(dateParts[2], getMonthIndex(dateParts[1]), dateParts[0]));
          const month = date.toLocaleString('default', { month: 'short' });
          const jobCount = jobCountsByMonth[month] || 0;
          jobCountsByMonth[month] = jobCount + 1;
        });
        jobCountsByYearAndMonth[year] = jobCountsByMonth;
      }

      // console.log(jobCountsByYearAndMonth);
    })
    .catch(error => console.log(error));

  function getMonthIndex(monthName) {
    const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return shortMonthNames.indexOf(monthName);
  }

  function countJobs(phrases, message) {
  fetch('./jobswebClean.csv')
    .then(response => response.text())
    .then(data => {
      const rows = data.trim().split('\n');
      const headers = rows.shift().split(',');
      const dateIndex = headers.indexOf('Date');
      const titleIndex = headers.indexOf('Title');
      const counts = {};
      rows.forEach(row => {
        const values = row.split(',');
        const title = values[titleIndex];
        const dateParts = values[dateIndex].split('/');
        const year = dateParts[2];
        const month = new Date(`${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`).toLocaleString('en-us', { month: 'long' });
        phrases.forEach(phrase => {
          if (title.includes(phrase)) {
            if (!counts[year]) {
              counts[year] = {};
            }
            if (!counts[year][month]) {
              counts[year][month] = 0;
            }
            counts[year][month]++;
          }
        });
      });
      // console.log(message, counts);
    })
    .catch(error => console.log(error));
}

    const lawPhrases = [
      'lawyer', 'attorney', 'legal counsel', 'legal advisor', 'legal officer', 'corporate counsel', 'associate counsel', 
      'general counsel', 'compliance officer', 'legal specialist', 'contract specialist', 'regulatory affairs manager', 
      'government relations manager', 'legal analyst', 'policy analyst', 'human rights advocate', 'legal writer or editor', 
      'judicial clerk', 'law professor ', 'paralegal', 'advocate', 'legal', 'advocate', 'law enforcement'
    ];

    const businessPhrases = [ 
        'chief executive officer', 'chief operating officer', 'chief financial officer', 'personal assistant',
        'chief marketing officer','business development manager', 'sales manager', 'digital marketing manager', 
        'supply chain manager', 'procurement manager', 'operations manager','management consultant', 'financial analyst', 
        'product manager', 'e-commerce manager', 'social media manager', 'brand manager', 'sales executive', 'marketing executive',
        'customer service manager', 'risk manager', 'compliance manager', 'tax manager', 'corporate trainer', 
        'talent acquisition specialist','business administrator', 'marketing specialist', 'human resources manager', 
        'office manager', 'tourism manager', 'procurement officer','logistic supervisor','director','office assistant',
        'logistics coordinator', 'entrepreneur', 'small business owner/manager', 'project manager', 'restaurant manager',
        'business analyst', 'strategic planner', 'co-operative manager', 'community developer', 
        'manager', 'management','human resource', 'hr', 'sales rep', 'trade','procurement', 'supply chain',
        'informatics specialist', 'international business manager', 'hospitality manager', 'business', 'secretary', 'office management',
        'hospitality', 'logistics', 'entrepreneur', 'project planner', 'restaurant management', 'community development'
    ];

    const geosciencePhrases = [
      'meteorologist', 'geologist', 'geospatial engineer', 'astronomer', 'astrophysicist', 'earth scientist', 
      'environmental scientist', 'geophysicist', 'geoinformation technologist', 'water resource manager', 
      'geoinformatics analyst', 'environment affairs',
      'mineralogist', 'GIS analyst', 'geomatic engineer', 'remote sensing analyst', 'disaster mitigation specialist', 
      'sustainable development analyst', 'environment','unep'
    ];

    const engineeringPhrases = [
      'electrical and electronics engineering', 'electrical engineer',  
      'instrumentation and control engineering', 'electrical and telecommunication engineering', 'civil engineering', 'civil engineer', 
      'civil', 'structural engineering', 'mechanical engineering', 'production engineering', 'industrial engineering', 
      'manufacturing engineering', 'agricultural and bio-systems engineering', 'petroleum engineering', 
      'petroleum chemistry', 'engineering','mechanical technician',
      'marine engineering', 'marine engineer', 'water, irrigation, and environmental engineering', 'petroleum exploration', 
      'mechatronic engineering', 'mining and mineral processing engineering', 'computer systems enginee', 'aeronautical engineer', 
      'aerospace engineering', 'plant electrician',
      'chemical and process engineering', 'industrial and textile engineering', 'energy engineering', 'mechanical',
      'production engineering', 'principal engineer'
    ];

    const architecturePhrases = ['architectural studies', 'architecture', 'quantity surveying','quantity surveyor',
     'surveying technology', 
    'landscape architecture', 'design', 'planning', 'construction management','construction manager',
    'building construction', 'urban planning', 'regional planning','urban planner','regional planner',
    'built environment', 'urban design', 'urban development', 
    'spatial planning', 'environmental planner', 'project architect', 'cost estimator',
    'construction project manager', 'interior designer', 'urban designer', 'landscape designer'
  ];

    const computingPhrases = ['software developer', 'data scientist', 'it consultant', 'information security analyst', 
    'computer systems analyst', 'data analyst', 'database administrator', 'web developer', 'mobile application developer',
    'app developer', 'application developer', 'ict', 'it', 'software engineer','software developer','security engineer',
    'it support specialist', 'systems administrator', 'network administrator', 'network engineer', 'systems engineer',
    'technical support specialist', 'communications technician', 'research scientist', 'computational physicist', 
    'technical consultant', 'development engineer', 'quality control engineer', 'optical engineer', 'materials scientist',
    'design engineer', 'technical writer', 'software architect', 'project manager', 'quality assurance engineer', 
    'technical lead', 'electronics engineer', 'instrumentation engineer', 'control systems engineer', 'backend developer'
    ,'devops', 'application developer', 'app developer', 'big data', 'data engineer', 'database administrator', 'fullstack'
    ];

    const agribusinessPhrases = ['agribusiness manager', 'agribusiness analyst', 'agricultural economist', 
    'agricultural trade and marketing manager', 'agricultural supply chain manager', 'agribusiness marketing coordinator', 
    'agricultural resource manager', 'agricultural business development manager', 
    'agricultural enterprise development specialist', 'agribusiness consultant', 'agricultural business operations manager',
     'food industry operations manager', 'agricultural product manager', 'agricultural investment analyst', 
     'agricultural market researcher', 'agribusiness development officer', 'agricultural sales representative',
      'agricultural finance manager', 'agribusiness IT consultant', 'agricultural policy analyst', 'agriculture officer'
    ];

    const sciencesPhrases = ['biologist', 'biological scientist', 'research biologist', 'biochemist', 'microbiologist', 
    'molecular biologist', 'biomedical scientist', 'biotechnology researcher', 'industrial biotechnologist', 
    'medical microbiologist', 'environmental biologist', 'analytical chemist', 'medical biochemist', 'biomedical engineer',
    'conservation biologist', 'forensic biologist', 'botanist', 'zoologist', 'genomic scientist', 'bioinformatics analyst',
     'biotech manufacturing specialist', 'biotech quality assurance specialist', 'biomedical researcher', 'genetics counselor', 
     'environmental consultant', 'pharmaceutical scientist', 'regulatory affairs specialist', 'toxicologist', 'biostatistician',
     'clinical research associate', 'science writer', 'science educator', 'wildlife biologist', 'marine biologist', 
     'agricultural biologist', 'plant scientist', 'zoological park curator', 'natural resource manager', 
     'biomedical equipment technician', 'veterinary pathologist', 'kemri', 'research administrator'
    ];

    const mathPhrases = ['actuary', 'mathematician', 'data analyst', 'statistician', 'financial analyst', 
    'business analyst', 'operations analyst', 'financial engineer', 'investment banker', 'risk analyst', 
    'quantitative analyst', 'management consultant', 'econometrician', 'market research analyst', 'data scientist',
    'business intelligence analyst', 'computational scientist', 'financial planner', 'asset manager', 'underwriter', 
     'budget analyst', 'credit risk analyst', 'financial quantitative developer', 'investment analyst', 
     ,'financial consultant', 'actuarial analyst', 'bank','finance officer', 'insurance','investment',
    'market risk analyst','banking analyst', 'financial controller',
    'corporate finance analyst', 
    'accountant', 'accounting', 'auditor', 'tax accountant', 
    'financial manager', 'investment banker','risk manager',
    'financial advisor',  'external auditor', 'tax manager',
    'treasury', 'revenue agent', 'financial examiner', 
    'accounts payable clerk', 'accounts receivable clerk',  'accounting supervisor',
    'financial planner', 'business analyst (accounting)', 'credit analyst', 
      'financial specialist', 
    ];

    const healthPhrases = ['dental surgeon','surgeon', 'dentist', 'medical doctor', 'doctor', 'pharmacist', 
    'nurse', 'nursing', 'ultrasound', 'clinical', 'medical', 'health scientist',
    'environmental health', 'laboratory technologist','lab technician', 
    'therapist', 'oral health', 'kemri',
    'paramedic', 'physiotherapist', 
    'physician', 'optometrist', 'biomedical scientist',
    'laboratory technician','psychologist', 'radiographer', 
    'epidemiologist', 'biostatistician', 'hospital'
    ];

    const educationPhrases = ['professor','leturer', 'instructor', 'curriculum designer', 'academic advisor', 'education',
     'researcher', 'school administrator', 'special education teacher', 'counselor', 'librarian', 'education coordinator', 
     'teacher assistant', 'online course developer', 'education technology specialist', 'education outreach coordinator', 
     'education policy analyst', 'education program manager', 'education writer', 'education assessment coordinator',
      'educational psychologist', 'teaching', 'chancellor', 'counsellor', 'learning', 'dean'
    ];





    countJobs(lawPhrases, "Law Related");
    countJobs(businessPhrases, "Business and related");
    countJobs(geosciencePhrases, "Geoscience");
    countJobs(engineeringPhrases, "Engineering");
    countJobs(architecturePhrases, "Architecture, Design, Planning, and other related courses")
    countJobs(computingPhrases, "Computing and IT");
    countJobs(agribusinessPhrases, "Agribussiness");
    countJobs(sciencesPhrases, "Sciences");
    countJobs(mathPhrases, "Math");
    countJobs(healthPhrases, "Health");
    countJobs(educationPhrases, "Education");




