import { Course } from '@/types'

export const courses: Course[] = [
  {
    id: 'excavator',
    slug: 'excavator',
    title: 'Excavator Operator Training',
    shortDescription: 'Master excavator operation with comprehensive hands-on training covering digging, loading, and material handling.',
    description: 'Our Excavator Operator Training program is designed to give you the practical skills and theoretical knowledge needed to excel as a professional excavator operator. Through a combination of classroom instruction and extensive hands-on training, you will learn to operate excavators safely and efficiently in various mining and construction environments.',
    price: 12500,
    duration: '4-6 weeks',
    level: 'beginner',
    certification: 'MQA Accredited',
    category: 'Heavy Equipment',
    featured: true,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Safety Fundamentals',
        lessons: [
          'Pre-operation inspection procedures',
          'Personal protective equipment requirements',
          'Hazard identification and risk assessment',
          'Emergency procedures and protocols'
        ]
      },
      {
        title: 'Module 2: Machine Fundamentals',
        lessons: [
          'Excavator components and controls',
          'Engine and hydraulic system basics',
          'Attachment operation (buckets, hammers)',
          'Maintenance and daily checks'
        ]
      },
      {
        title: 'Module 3: Operational Techniques',
        lessons: [
          'Digging and trenching operations',
          'Loading and material handling',
          'Precision grading techniques',
          'Working on slopes and uneven terrain'
        ]
      },
      {
        title: 'Module 4: Advanced Applications',
        lessons: [
          'Demolition techniques',
          'Rock breaking and quarry operations',
          'Environmental compliance',
          'Site management and communication'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Basic English literacy',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Mining excavator operator',
      'Construction excavator operator',
      'Quarry equipment operator',
      'Civil engineering machine operator'
    ],
    outcomes: [
      'MQA accredited certification',
      'Industry-recognized competency certificate',
      'Safe operation permit',
      'Job placement assistance'
    ]
  },
  {
    id: 'tlb',
    slug: 'tlb',
    title: 'TLB (Tractor Loader Backhoe) Training',
    shortDescription: 'Master TLB operation for digging, loading, and site work — one of the most in-demand machines in construction and mining.',
    description: 'Our TLB (Tractor Loader Backhoe) Training program prepares you to operate one of the most versatile and in-demand machines in the mining and construction industries. You will learn both loader and backhoe operations through hands-on training, covering digging, trenching, loading, and general site work.',
    price: 11000,
    duration: '2-3 weeks',
    level: 'beginner',
    certification: 'MQA Accredited',
    category: 'Heavy Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Safety Fundamentals',
        lessons: [
          'TLB safety protocols and PPE',
          'Pre-operation inspection procedures',
          'Hazard identification on site',
          'Emergency procedures'
        ]
      },
      {
        title: 'Module 2: Machine Operations',
        lessons: [
          'TLB components and controls',
          'Engine and hydraulic system basics',
          'Front loader operations',
          'Rear backhoe operations'
        ]
      },
      {
        title: 'Module 3: Site Applications',
        lessons: [
          'Digging and trenching techniques',
          'Loading and material handling',
          'Site leveling and backfilling',
          'Maintenance and daily checks'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Basic English literacy',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Construction TLB operator',
      'Mining support equipment operator',
      'Civil engineering machine operator',
      'Utility and municipal works operator'
    ],
    outcomes: [
      'MQA accredited certification',
      'Industry-recognized competency certificate',
      'Safe operation permit',
      'Job placement assistance'
    ]
  },
  {
    id: 'dump-truck',
    slug: 'dump-truck',
    title: 'Dump Truck Operator Training',
    shortDescription: 'Learn heavy-duty haul truck operations, site safety, and efficient material transport for mining operations.',
    description: 'The Dump Truck Operator Training program prepares you for a career operating massive haul trucks in mining and quarrying operations. You will gain the skills needed to safely transport materials across challenging terrain while maximizing efficiency and following strict safety protocols.',
    price: 9800,
    duration: '3-4 weeks',
    level: 'beginner',
    certification: 'MQA Accredited',
    category: 'Heavy Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Safety and Compliance',
        lessons: [
          'Mine safety regulations and standards',
          'Pre-trip inspection procedures',
          'Load capacity and distribution',
          'Environmental protection protocols'
        ]
      },
      {
        title: 'Module 2: Vehicle Operations',
        lessons: [
          'Cab controls and instrument panels',
          'Starting, stopping, and maneuvering',
          'Hauling techniques and load management',
          'Fuel efficiency optimization'
        ]
      },
      {
        title: 'Module 3: Site Operations',
        lessons: [
          'Loading zone procedures',
          'Haul road navigation',
          'Dumping operations and safety',
          'Communication protocols'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Valid driver license (advantage)',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Mining haul truck operator',
      'Quarry dump truck driver',
      'Construction material transporter',
      'Heavy vehicle operator'
    ],
    outcomes: [
      'MQA accredited certification',
      'Professional operator permit',
      'Site-specific training certification',
      'Career placement support'
    ]
  },
  {
    id: 'bulldozer',
    slug: 'bulldozer',
    title: 'Bulldozer Training',
    shortDescription: 'Develop skills in earthmoving, grading, and site preparation using modern bulldozer equipment.',
    description: 'Our Bulldozer Training program teaches you to master earthmoving operations using powerful dozer equipment. Learn the techniques used in mining, construction, and civil engineering for site clearing, grading, and earthmoving operations.',
    price: 11200,
    duration: '4-5 weeks',
    level: 'intermediate',
    certification: 'MQA Accredited',
    category: 'Heavy Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Safety and Operations',
        lessons: [
          'Dozer safety protocols',
          'Machine familiarization',
          'Control systems mastery',
          'Pre-operation inspections'
        ]
      },
      {
        title: 'Module 2: Earthmoving Techniques',
        lessons: [
          'Blade control and techniques',
          'Cutting and filling operations',
          'Slope work and terrain management',
          'Push ridging techniques'
        ]
      },
      {
        title: 'Module 3: Advanced Operations',
        lessons: [
          'Final grading precision',
          'Ripper operation and usage',
          'Efficiency optimization',
          'Maintenance fundamentals'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Basic equipment operation experience preferred',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Mining dozer operator',
      'Construction earthworks operator',
      'Land rehabilitation operator',
      'Civil engineering equipment operator'
    ],
    outcomes: [
      'MQA accredited certification',
      'Competency in earthmoving operations',
      'Advanced techniques certification',
      'Job placement assistance'
    ]
  },
  {
    id: 'loader',
    slug: 'loader',
    title: 'Front-End Loader Training',
    shortDescription: 'Gain proficiency in loading operations, material handling, and efficient loader management.',
    description: 'The Front-End Loader Training program focuses on the skills needed to operate wheel loaders and loading equipment in mining and quarry environments. You will learn loading techniques, material handling, and machine management for optimal productivity.',
    price: 10500,
    duration: '3-4 weeks',
    level: 'beginner',
    certification: 'MQA Accredited',
    category: 'Heavy Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Loader Fundamentals',
        lessons: [
          'Loader safety requirements',
          'Machine controls and operation',
          'Bucket types and applications',
          'Pre-operation checks'
        ]
      },
      {
        title: 'Module 2: Loading Operations',
        lessons: [
          'Loading trucks efficiently',
          'Stockpile management',
          'Loading from face operations',
          'Cycle time optimization'
        ]
      },
      {
        title: 'Module 3: Advanced Techniques',
        lessons: [
          'Precision loading procedures',
          'Multiple machine coordination',
          'Maintenance and troubleshooting',
          'Production optimization'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Basic English literacy',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Mining loader operator',
      'Quarry loading equipment operator',
      'Construction material handling',
      'Industrial loading specialist'
    ],
    outcomes: [
      'MQA accredited certification',
      'Loader operation permit',
      'Production optimization skills',
      'Career placement support'
    ]
  },
  {
    id: 'drill-rig',
    slug: 'drill-rig',
    title: 'Drill Rig Operator Training',
    shortDescription: 'Comprehensive drilling techniques for mining exploration and production drilling operations.',
    description: 'Our Drill Rig Operator Training program prepares you for specialized drilling operations in the mining industry. Learn about various drilling techniques, equipment maintenance, and safety protocols essential for exploration and production drilling.',
    price: 14500,
    duration: '5-6 weeks',
    level: 'advanced',
    certification: 'MQA Accredited',
    category: 'Specialized Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Drilling Fundamentals',
        lessons: [
          'Drilling principles and techniques',
          'Drill rig components and systems',
          'Safety protocols for drilling',
          'Geological considerations'
        ]
      },
      {
        title: 'Module 2: Operational Skills',
        lessons: [
          'Drill rig setup and positioning',
          'Drilling procedures and techniques',
          'Sample collection and handling',
          'Troubleshooting and maintenance'
        ]
      },
      {
        title: 'Module 3: Advanced Drilling',
        lessons: [
          'Production drilling operations',
          'Blasthole drilling techniques',
          'Water well drilling',
          'Environmental management'
        ]
      }
    ],
    requirements: [
      'Minimum age: 20 years',
      'Valid ID document',
      'Grade 12 or equivalent',
      'Technical aptitude',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Mining drill rig operator',
      'Exploration driller',
      'Production drilling specialist',
      'Water well driller'
    ],
    outcomes: [
      'MQA accredited certification',
      'Advanced drilling competency',
      'Specialized equipment operation permit',
      'Industry placement support'
    ]
  },
  {
    id: 'safety',
    slug: 'safety',
    title: 'Safety Officer Course',
    shortDescription: 'Occupational health and safety certification for mining and industrial environments.',
    description: 'The Safety Officer Course provides comprehensive training in occupational health and safety for the mining and industrial sectors. Learn risk assessment, safety auditing, emergency response, and regulatory compliance to become a qualified safety professional.',
    price: 8500,
    duration: '2-3 weeks',
    level: 'beginner',
    certification: 'MQA Accredited',
    category: 'Safety',
    featured: false,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Safety Fundamentals',
        lessons: [
          'Occupational health and safety principles',
          'Risk assessment methodology',
          'Hazard identification and control',
          'Legal requirements and compliance'
        ]
      },
      {
        title: 'Module 2: Safety Management',
        lessons: [
          'Safety audit procedures',
          'Incident investigation',
          'Emergency response planning',
          'Safety documentation'
        ]
      },
      {
        title: 'Module 3: Industry Applications',
        lessons: [
          'Mining safety regulations',
          'Construction safety standards',
          'Personal protective equipment',
          'Safety training and communication'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 12 or equivalent',
      'Basic computer skills',
      'Communication proficiency'
    ],
    careerPaths: [
      'Mining safety officer',
      'Industrial safety coordinator',
      'Construction safety officer',
      'Health and safety advisor'
    ],
    outcomes: [
      'MQA accredited certification',
      'Safety officer qualification',
      'Risk assessment competency',
      'Career advancement opportunities'
    ]
  },
  {
    id: 'adt',
    slug: 'adt',
    title: 'ADT (Articulated Dump Truck) Training',
    shortDescription: 'Operate articulated dump trucks for hauling in mining and construction with industry-recognized certification.',
    description: 'Our ADT (Articulated Dump Truck) Training program prepares you to operate articulated haul trucks on mining and construction sites. You will learn safe hauling techniques, load management, and site navigation on challenging terrain through hands-on training.',
    price: 12800,
    duration: '3-4 weeks',
    level: 'beginner',
    certification: 'MQA Accredited',
    category: 'Heavy Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Safety and Compliance',
        lessons: [
          'Mine and site safety regulations',
          'Pre-trip inspection procedures',
          'Load capacity and distribution',
          'Environmental protection protocols'
        ]
      },
      {
        title: 'Module 2: Vehicle Operations',
        lessons: [
          'ADT controls and instrument panels',
          'Articulation and steering techniques',
          'Starting, stopping, and maneuvering',
          'Fuel efficiency optimization'
        ]
      },
      {
        title: 'Module 3: Site Operations',
        lessons: [
          'Loading zone procedures',
          'Haul road navigation',
          'Dumping operations and safety',
          'Communication protocols'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Valid driver license (advantage)',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Mining ADT operator',
      'Construction haul truck operator',
      'Quarry material transporter',
      'Heavy vehicle operator'
    ],
    outcomes: [
      'MQA accredited certification',
      'Industry-recognized competency certificate',
      'Safe operation permit',
      'Job placement assistance'
    ]
  },
  {
    id: 'rigid-dump-truck',
    slug: 'rigid-dump-truck',
    title: 'Rigid Dump Truck (777) Training',
    shortDescription: 'Train on rigid dump trucks (777) — the backbone of open-pit mining haulage — with simulator and practical training.',
    description: 'Our Rigid Dump Truck (777) Training program is designed for open-pit mining haulage. You will train on the 777 rigid dump truck using both simulator and hands-on practical training, mastering safe hauling, loading, and dumping procedures used across the mining industry.',
    price: 13500,
    duration: '3-4 weeks',
    level: 'beginner',
    certification: 'MQA Accredited',
    category: 'Heavy Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Safety Fundamentals',
        lessons: [
          'Open-pit mine safety regulations',
          'Pre-operation inspections',
          'Load capacity and stability',
          'Emergency procedures'
        ]
      },
      {
        title: 'Module 2: 777 Operations',
        lessons: [
          'Cab controls and instruments',
          'Simulator training sessions',
          'Hauling techniques and load management',
          'Braking and retarder systems'
        ]
      },
      {
        title: 'Module 3: Mine Site Operations',
        lessons: [
          'Loading zone procedures',
          'Ramp and haul road navigation',
          'Dumping at the tip',
          'Communication and signaling'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Valid driver license (advantage)',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Open-pit mine truck operator',
      '777 haul truck operator',
      'Mining production operator',
      'Heavy haulage specialist'
    ],
    outcomes: [
      'MQA accredited certification',
      '777 simulator and practical competency',
      'Safe operation permit',
      'Job placement assistance'
    ]
  },
  {
    id: 'grader',
    slug: 'grader',
    title: 'Grader Operator Training',
    shortDescription: 'Master motor grader operation for fine grading, road building, and site leveling in construction and mining.',
    description: 'Our Grader Operator Training program teaches you to operate motor graders for fine grading, road construction, and site maintenance. Develop precision blade control and grading techniques used across construction and mining operations.',
    price: 11800,
    duration: '3-4 weeks',
    level: 'intermediate',
    certification: 'MQA Accredited',
    category: 'Heavy Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Safety and Machine Fundamentals',
        lessons: [
          'Grader safety protocols',
          'Machine controls and systems',
          'Blade types and applications',
          'Pre-operation inspections'
        ]
      },
      {
        title: 'Module 2: Grading Techniques',
        lessons: [
          'Blade control and angles',
          'Fine grading and finish work',
          'Slope and camber operations',
          'Road building and maintenance'
        ]
      },
      {
        title: 'Module 3: Advanced Applications',
        lessons: [
          'Site leveling and compaction',
          'Drainage and ditch cutting',
          'Efficiency optimization',
          'Maintenance fundamentals'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Basic equipment experience preferred',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Grader operator',
      'Road construction operator',
      'Mine site maintenance operator',
      'Civil engineering machine operator'
    ],
    outcomes: [
      'MQA accredited certification',
      'Precision grading competency',
      'Road and site maintenance skills',
      'Job placement assistance'
    ]
  },
  {
    id: 'bobcat',
    slug: 'bobcat',
    title: 'Bobcat (Skid Steer) Training',
    shortDescription: 'Operate bobcat skid steer loaders for loading, digging, and site work with versatile attachment training.',
    description: 'Our Bobcat (Skid Steer) Training program covers safe and efficient operation of skid steer loaders used across construction, mining, and agriculture. Learn loading, digging, grading, and attachment handling through hands-on practical training.',
    price: 9500,
    duration: '2-3 weeks',
    level: 'beginner',
    certification: 'MQA Accredited',
    category: 'Heavy Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Safety Fundamentals',
        lessons: [
          'Skid steer safety protocols',
          'Pre-operation inspections',
          'Hazard identification',
          'PPE requirements'
        ]
      },
      {
        title: 'Module 2: Machine Operations',
        lessons: [
          'Controls and steering systems',
          'Loading and bucket operations',
          'Attachment operation',
          'Maneuvering in tight spaces'
        ]
      },
      {
        title: 'Module 3: Site Applications',
        lessons: [
          'Digging and backfilling',
          'Grading and leveling',
          'Material handling',
          'Maintenance and daily checks'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Basic English literacy',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Bobcat operator',
      'Construction site operator',
      'Material handling operator',
      'Small plant operator'
    ],
    outcomes: [
      'MQA accredited certification',
      'Skid steer operation permit',
      'Attachment handling competency',
      'Job placement assistance'
    ]
  },
  {
    id: 'lhd-scoop',
    slug: 'lhd-scoop',
    title: 'LHD Scoop Training',
    shortDescription: 'Underground mining LHD scoop operator training — mucking, hauling, and ore handling in mine workings.',
    description: 'Our LHD Scoop Training program prepares you for underground mining operations. Learn to operate load-haul-dump (LHD) machines for mucking, hauling, and ore handling in underground mine workings, with a strong focus on underground safety.',
    price: 14800,
    duration: '4-5 weeks',
    level: 'advanced',
    certification: 'MQA Accredited',
    category: 'Specialized Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Underground Safety',
        lessons: [
          'Underground mine safety regulations',
          'Ventilation and gas awareness',
          'Emergency procedures and escape routes',
          'Pre-operation inspections'
        ]
      },
      {
        title: 'Module 2: LHD Operations',
        lessons: [
          'LHD controls and systems',
          'Mucking and loading techniques',
          'Hauling and tipping procedures',
          'Maneuvering in confined workings'
        ]
      },
      {
        title: 'Module 3: Production Techniques',
        lessons: [
          'Ore handling and grade control',
          'Production cycle optimization',
          'Communication in underground operations',
          'Maintenance fundamentals'
        ]
      }
    ],
    requirements: [
      'Minimum age: 20 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Underground medical fitness certificate',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Underground LHD operator',
      'Mining production operator',
      'Scoop tram operator',
      'Underground machinery operator'
    ],
    outcomes: [
      'MQA accredited certification',
      'Underground operation competency',
      'LHD safe operation permit',
      'Job placement assistance'
    ]
  },
  {
    id: 'forklift',
    slug: 'forklift',
    title: 'Forklift Training',
    shortDescription: 'Forklift operator training covering safe lifting, warehouse procedures, and load handling with certification.',
    description: 'Our Forklift Training program provides comprehensive training in safe forklift operation for warehouses, factories, and industrial sites. Learn lifting techniques, load handling, and workplace safety to become a certified forklift operator.',
    price: 7500,
    duration: '2-3 weeks',
    level: 'beginner',
    certification: 'MQA Accredited',
    category: 'Lifting Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Safety Protocols',
        lessons: [
          'Forklift safety regulations',
          'Pre-operation checks',
          'Load stability and capacity',
          'Pedestrian safety'
        ]
      },
      {
        title: 'Module 2: Lift Operations',
        lessons: [
          'Forklift controls and instruments',
          'Lifting and lowering techniques',
          'Stacking and racking',
          'Maneuvering in warehouses'
        ]
      },
      {
        title: 'Module 3: Workplace Applications',
        lessons: [
          'Warehouse procedures',
          'Loading and unloading vehicles',
          'Equipment maintenance',
          'Safety documentation'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Basic English literacy',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Forklift operator',
      'Warehouse operator',
      'Logistics and distribution operator',
      'Factory material handler'
    ],
    outcomes: [
      'MQA accredited certification',
      'Forklift operator permit',
      'Safe load handling competency',
      'Job placement assistance'
    ]
  },
  {
    id: 'mobile-crane',
    slug: 'mobile-crane',
    title: 'Mobile Crane Training',
    shortDescription: 'Mobile crane operator training — lift planning, rigging, load charts, and safe crane operation.',
    description: 'Our Mobile Crane Training program covers the operation of mobile cranes for lifting and rigging on construction and industrial sites. Learn lift planning, load chart interpretation, rigging fundamentals, and safe crane operation.',
    price: 15500,
    duration: '4-6 weeks',
    level: 'advanced',
    certification: 'MQA Accredited',
    category: 'Lifting Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Crane Safety',
        lessons: [
          'Crane safety regulations',
          'Pre-operation inspections',
          'Load stability and capacity',
          'Ground conditions and setup'
        ]
      },
      {
        title: 'Module 2: Rigging and Lift Planning',
        lessons: [
          'Rigging fundamentals and equipment',
          'Load chart interpretation',
          'Lift planning and risk assessment',
          'Signaling and communication'
        ]
      },
      {
        title: 'Module 3: Crane Operations',
        lessons: [
          'Mobile crane controls',
          'Lifting and positioning loads',
          'Boom and outrigger operation',
          'Maintenance and shutdown procedures'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 12 or equivalent',
      'Technical aptitude',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Mobile crane operator',
      'Construction lifting specialist',
      'Rigging and lifting technician',
      'Industrial crane operator'
    ],
    outcomes: [
      'MQA accredited certification',
      'Crane operator competency',
      'Lift planning and rigging skills',
      'Job placement assistance'
    ]
  },
  {
    id: 'tower-crane',
    slug: 'tower-crane',
    title: 'Tower Crane Training',
    shortDescription: 'Tower crane operator training for high-rise construction — erection, lifting, and site coordination.',
    description: 'Our Tower Crane Training program trains operators for high-rise and large-scale construction projects. Learn tower crane operation, lift planning, load handling at height, and site coordination with a focus on safety.',
    price: 16500,
    duration: '4-6 weeks',
    level: 'advanced',
    certification: 'MQA Accredited',
    category: 'Lifting Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Tower Crane Safety',
        lessons: [
          'Tower crane safety regulations',
          'Pre-operation inspections',
          'Wind and weather considerations',
          'Emergency procedures'
        ]
      },
      {
        title: 'Module 2: Lift Planning',
        lessons: [
          'Load charts and capacity',
          'Rigging and slinging techniques',
          'Lift planning and coordination',
          'Communication with banksmen'
        ]
      },
      {
        title: 'Module 3: Tower Operations',
        lessons: [
          'Tower crane controls',
          'Lifting loads at height',
          'Erection and dismantling basics',
          'Maintenance and inspection'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 12 or equivalent',
      'No fear of heights',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Tower crane operator',
      'High-rise construction operator',
      'Construction lifting specialist',
      'Crane and rigging technician'
    ],
    outcomes: [
      'MQA accredited certification',
      'Tower crane operation permit',
      'Lift planning competency',
      'Job placement assistance'
    ]
  },
  {
    id: 'overhead-crane',
    slug: 'overhead-crane',
    title: 'Overhead Crane Training',
    shortDescription: 'Overhead (gantry) crane operator training for industrial and factory lifting operations.',
    description: 'Our Overhead Crane Training program prepares operators for industrial and factory environments using overhead and gantry cranes. Learn safe load handling, crane controls, and maintenance procedures for production and workshop lifting operations.',
    price: 14000,
    duration: '3-4 weeks',
    level: 'intermediate',
    certification: 'MQA Accredited',
    category: 'Lifting Equipment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop',
    curriculum: [
      {
        title: 'Module 1: Crane Safety',
        lessons: [
          'Overhead crane safety regulations',
          'Pre-operation inspections',
          'Load stability and capacity',
          'Workshop hazard awareness'
        ]
      },
      {
        title: 'Module 2: Load Handling',
        lessons: [
          'Crane controls and pendants',
          'Slinging and rigging techniques',
          'Lifting and positioning loads',
          'Hand signals and communication'
        ]
      },
      {
        title: 'Module 3: Industrial Applications',
        lessons: [
          'Production line lifting',
          'Workshop and maintenance lifting',
          'Load handling best practices',
          'Maintenance and inspections'
        ]
      }
    ],
    requirements: [
      'Minimum age: 18 years',
      'Valid ID document',
      'Grade 10 or equivalent',
      'Basic English literacy',
      'Physical fitness certification'
    ],
    careerPaths: [
      'Overhead crane operator',
      'Factory lifting operator',
      'Industrial crane operator',
      'Workshop material handler'
    ],
    outcomes: [
      'MQA accredited certification',
      'Overhead crane operation permit',
      'Safe rigging competency',
      'Job placement assistance'
    ]
  }
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug)
}

export function getFeaturedCourse(): Course | undefined {
  return courses.find(course => course.featured)
}

export function getFeaturedCourses(): Course[] {
  return courses.filter(course => course.featured)
}

export function getCoursesByCategory(category: string): Course[] {
  return courses.filter(course => course.category === category)
}