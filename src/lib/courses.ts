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
    certification: 'SAQA Accredited',
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
      'SAQA accredited certification',
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
    certification: 'SAQA Accredited',
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
      'SAQA accredited certification',
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
    certification: 'SAQA Accredited',
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
      'SAQA accredited certification',
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
    certification: 'SAQA Accredited',
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
      'SAQA accredited certification',
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
    certification: 'SAQA Accredited',
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
      'SAQA accredited certification',
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
    certification: 'NOSA Certified',
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
      'NOSA certification',
      'Safety officer qualification',
      'Risk assessment competency',
      'Career advancement opportunities'
    ]
  }
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug)
}

export function getFeaturedCourse(): Course | undefined {
  return courses.find(course => course.featured)
}