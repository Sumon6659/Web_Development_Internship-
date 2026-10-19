/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * ১২টি অফিশিয়াল ডিপার্টমেন্টের ডাটাবেজ
 * সকল তথ্য বিশ্ববিদ্যালয়ের অফিশিয়াল পেজ থেকে সংগৃহীত।
 */

const departmentsData = [
  {
    id: "cse",
    slug: "computer-science-and-engineering",
    name: "Department of Computer Science & Engineering",
    shortName: "CSE",
    faculty: "Faculty of Science & Engineering",
    headName: "প্রফেসর ড. মো. শাহিদুল ইসলাম সরকার",
    headDesignation: "বিভাগীয় প্রধান ও সহযোগী অধ্যাপক",
    established: "২০০২",
    image: "../assets/images/departments/cse.jpg",
    email: "cse@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "The Department of Computer Science & Engineering (CSE), Pundra University of Science & Technology (PUB), is one of the leading departments in this University. The curriculum offered by our department has been designed in accordance with different renowned universities around the world. All of our classrooms and laboratories are equipped with modern teaching-learning facilities and necessary experimental kits for students.",
    banglaOverview: "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং বিভাগ পুন্ড্র ইউনিভার্সিটির অন্যতম প্রধান এবং শীর্ষস্থানীয় বিভাগ। আন্তর্জাতিক মানের কারিকুলাম ও আধুনিক সফটওয়্যার, হার্ডওয়্যার ও নেটওয়ার্কিং ল্যাবরেটরির সমন্বয়ে শিক্ষার্থীদের আধুনিক তথ্যপ্রযুক্তির যুগে দক্ষ প্রকৌশলী হিসেবে গড়ে তোলা হয়।",
    programsOffered: [
      "B.Sc. in Computer Science & Engineering (CSE)",
      "B.Sc. in CSE (For Diploma Holders)"
    ],
    facilities: [
      "আধুনিক হাই-কনফিগারেশন কম্পিউটার ল্যাব",
      "সফটওয়্যার ইঞ্জিনিয়ারিং ও এআই রিসার্চ ল্যাব",
      "মাইক্রোপ্রসেসর ও এমবেডেড সিস্টেম ল্যাব",
      "হাই-স্পিড ক্যাম্পাস ইন্টারনেট ও ডিজিটাল লাইব্রেরি অ্যাক্সেস"
    ]
  },
  {
    id: "eee",
    slug: "electrical-and-electronic-engineering",
    name: "Department of Electrical & Electronic Engineering",
    shortName: "EEE",
    faculty: "Faculty of Science & Engineering",
    headName: "ড. ইশতিয়াকুল আলম মামদুদ",
    headDesignation: "বিভাগীয় প্রধান",
    established: "২০০২",
    image: "../assets/images/departments/eee.jpg",
    email: "eee@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "The Electrical and Electronic Engineering Department (EEE) is one of PUB's largest and most influential departments. It offers a four years B.Sc. Engineering degree with the opportunity of specializing in electrical power engineering, electronics engineering, or communication engineering.",
    banglaOverview: "তড়িৎ ও ইলেকট্রনিক কৌশল বিভাগ বিদ্যুৎ উৎপাদন, পাওয়ার গ্রিড, টেলিকমিউনিকেশন ও ইলেকট্রনিক্স বিষয়ের আধুনিক ব্যবহারিক শিক্ষার একটি নির্ভরযোগ্য কেন্দ্র। এখানে রয়েছে সুসজ্জিত পাওয়ার সিস্টেম এবং ইলেকট্রনিক্স ল্যাব।",
    programsOffered: [
      "B.Sc. in Electrical & Electronic Engineering (EEE)",
      "B.Sc. in EEE (For Diploma Holders)"
    ],
    facilities: [
      "ইলেকট্রিক্যাল সার্কিট ও মেশিন ল্যাব",
      "পাওয়ার সিস্টেম ও সুইচগিয়ার ল্যাব",
      "টেলিকমিউনিকেশন ও ডিএসপি ল্যাব",
      "কন্ট্রোল সিস্টেম ও মেকাট্রনিক্স ল্যাব"
    ]
  },
  {
    id: "ce",
    slug: "civil-engineering",
    name: "Department of Civil Engineering",
    shortName: "CE",
    faculty: "Faculty of Science & Engineering",
    headName: "মোঃ জাকির হোসেন",
    headDesignation: "বিভাগীয় প্রধান ও সহকারী অধ্যাপক",
    established: "২০১৬",
    image: "../assets/images/departments/ce.jpg",
    email: "ce@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "Welcome to the Department of Civil Engineering, Faculty of Science & Engineering, Pundra University of Science & Technology. Following the vision of the university 'Prosper lives through education' the department intends to train young graduates equipped with basic knowledge in Civil Engineering.",
    banglaOverview: "সিভিল ইঞ্জিনিয়ারিং বিভাগ টেকসই নগর পরিকল্পনা, সেতু, বহুতল ভবন, ড্রেনেজ ও পরিবেশবান্ধব অবকাঠামো নির্মাণে শিক্ষার্থীদের বাস্তবমুখী প্রকৌশল শিক্ষা প্রদান করে থাকে।",
    programsOffered: [
      "B.Sc. in Civil Engineering",
      "B.Sc. in Civil Engineering (For Diploma Holders)"
    ],
    facilities: [
      "স্ট্রাকচারাল মেকানিক্স ল্যাব",
      "সয়েল মেকানিক্স ও জিওটেকনিক্যাল ল্যাব",
      "ফ্লুইড মেকানিক্স ও হাইড্রোলিক্স ল্যাব",
      "সার্ভেয়িং ও অটোক্যাড ডিজিটাল ড্রাফটিং ল্যাব"
    ]
  },
  {
    id: "dba",
    slug: "business-administration",
    name: "Department of Business Administration",
    shortName: "DBA",
    faculty: "Faculty of Business Studies",
    headName: "প্রফেসর ড. চিত্ত রঞ্জন মিশ্র",
    headDesignation: "ডিন ও বিভাগীয় প্রধান",
    established: "২০০২",
    image: "../assets/images/departments/dba.jpg",
    email: "dba@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "The Department of Business Administration is one of the pioneering departments at Pundra University of Science and Technology. It is emerging as a center of academic excellence and a hub for producing skilled graduates.",
    banglaOverview: "ব্যবসায় প্রশাসন বিভাগ উত্তরবঙ্গের অন্যতম অগ্রণী ব্যবসায় শিক্ষা প্রতিষ্ঠান। এটি আধুনিক আউটকাম-বেসড এডুকেশন (OBE) কারিকুলাম অনুসরণ করে আগামীর কর্পোরেট লিডার ও সফল উদ্যোক্তা তৈরিতে কাজ করছে।",
    programsOffered: [
      "Bachelor of Business Administration (BBA)",
      "Master of Business Administration (MBA - 2 Years)",
      "Executive MBA (EMBA)",
      "Master of Business Administration (MBA - 1 Year)"
    ],
    facilities: [
      "বিজনেস ইনকিউবেশন ও এন্টারপ্রেনারশিপ সেন্টার",
      "ডিজিটাল মার্কেটিং ও ফাইন্যান্স ল্যাব",
      "কেস স্টাডি ও বিজনেস সিমুলেশন রুম"
    ]
  },
  {
    id: "law",
    slug: "law",
    name: "Department of Law",
    shortName: "Law",
    faculty: "Faculty of Law",
    headName: "ড. শামীমা বেগম",
    headDesignation: "বিভাগীয় প্রধান ও ডিন",
    established: "২০০৩",
    image: "../assets/images/departments/law.jpg",
    email: "law@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "The Faculty of Law at Pundra University of Science and Technology pioneered in establishing the Department of Law. The Department aims to produce world-class law graduates equipped to offer their best as Judges, Magistrates, and Advocates.",
    banglaOverview: "আইন বিভাগ বিচার বিভাগ ও আইনাঙ্গনে দক্ষ, নীতিবান ও ন্যায়পরায়ণ গ্র্যাজুয়েট তৈরি করছে। এখানে রয়েছে সুসজ্জিত বিশেষায়িত মক-কোর্ট রুম যেখানে নিয়মিত ট্রায়াল সিমুলেশন অনুষ্ঠিত হয়।",
    programsOffered: [
      "LL.B (Honors) - ৪ বছর মেয়াদী"
    ],
    facilities: [
      "পূর্ণাঙ্গ মডার্ন মক-কোর্ট রুম (Mock-Court)",
      "আইন লাইব্রেরি ও বাংলাদেশ ল রিপোর্টস (BLR)",
      "লিগ্যাল এইড ও হিউম্যান রাইটস ক্লিনিক"
    ]
  },
  {
    id: "english",
    slug: "english",
    name: "Department of English",
    shortName: "ENG",
    faculty: "Faculty of Humanities & Social Sciences",
    headName: "মোঃ আতিকুর রহমান",
    headDesignation: "সহযোগী অধ্যাপক ও প্রধান",
    established: "২০০৩",
    image: "../assets/images/departments/english.jpg",
    email: "english@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "The Department of English helps to develop cognitive skills including analyzing, synthesizing, speaking, listening, reading, and appreciating language and world literature.",
    banglaOverview: "ইংরেজি ভাষা ও সাহিত্য বিভাগ শিক্ষার্থীদের বিশ্লেষণমূলক চিন্তা, সাবলীল ইংরেজি যোগাযোগ দক্ষতা এবং বিশ্বসাহিত্যের গভীর জ্ঞানার্জনে সহায়তা করে।",
    programsOffered: [
      "B.A (Hons) in English",
      "MA in English (1-Year & 2-Years)"
    ],
    facilities: [
      "ডিজিটাল ল্যাঙ্গুয়েজ ল্যাবরেটরি",
      "ইংলিশ লিটারারি অ্যান্ড ডিবেটিং ক্লাব",
      "লিসেনিং ও ফোনেটিক্স অডিও স্টেশন"
    ]
  },
  {
    id: "public-health",
    slug: "public-health",
    name: "Department of Public Health",
    shortName: "PH",
    faculty: "Faculty of Science & Engineering",
    headName: "অধ্যাপক ড. হাবিবুর রহমান",
    headDesignation: "প্রোগ্রাম ডিরেক্টর ও বিভাগীয় প্রধান",
    established: "২০১০",
    image: "../assets/images/departments/ph.jpg",
    email: "mph@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "The Master of Public Health program run under PUB attempts to be renowned for excellence in public health research, innovative education, and UGC approved OBE curricula with international excellence.",
    banglaOverview: "জনস্বাস্থ্য বিভাগ মহামারি নিয়ন্ত্রণ, পুষ্টি, কমিউনিটি হেলথ ও স্বাস্থ্য নীতি গবেষণায় উচ্চতর ডিগ্রি প্রদান করে থাকে।",
    programsOffered: [
      "Master of Public Health (MPH)"
    ],
    facilities: [
      "টিএমএসএস মেডিকেল কলেজ ও হাসপাতাল ফিল্ড ল্যাব",
      "বায়োস্ট্যাটিস্টিক্স ও এপিডেমিওলজিক্যাল রিসার্চ সেল"
    ]
  },
  {
    id: "islamic-studies",
    slug: "islamic-studies",
    name: "Department of Islamic Studies",
    shortName: "IS",
    faculty: "Faculty of Humanities & Social Sciences",
    headName: "প্রফেসর ড. মুহাম্মদ রফিকুল ইসলাম",
    headDesignation: "বিভাগীয় প্রধান",
    established: "২০০২",
    image: "../assets/images/departments/is.jpg",
    email: "is@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "The Department of Islamic Studies is one of the founding departments of PUB. It offers B.A (Hons) and M.A programs specialized in Tafsir, Hadith, Islamic Law and Islamic Banking.",
    banglaOverview: "ইসলামিক স্টাডিজ বিভাগ কুরআন, হাদিস, আরবি ভাষা ও ইসলামিক অর্থনীতির সাথে আধুনিক শিক্ষার অপূর্ব সমন্বয় ঘটিয়ে নৈতিক ও আদর্শ নাগরিক তৈরি করছে।",
    programsOffered: [
      "B.A (Hons) in Islamic Studies",
      "MA in Islamic Studies (1-Year)",
      "MA in Islamic Studies (2-Years)"
    ],
    facilities: [
      "ইসলামিক রিসার্চ ও ম্যানুস্ক্রিপ্ট লাইব্রেরি",
      "আরবি ভাষা প্রশিক্ষণ কেন্দ্র"
    ]
  },
  {
    id: "bangla",
    slug: "bangla",
    name: "Department of Bangla",
    shortName: "Bangla",
    faculty: "Faculty of Humanities & Social Sciences",
    headName: "প্রফেসর ড. আনিসুর রহমান",
    headDesignation: "বিভাগীয় প্রধান",
    established: "২০২৫",
    image: "../assets/images/departments/education.jpg",
    email: "bangla@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "বাংলা ভাষা ও সাহিত্য বাঙালি জাতির আত্মপরিচয়ের মূলভিত্তি। সাহিত্য মানুষের চেতনাকে জাগ্রত করে এবং মানবিক মূল্যবোধ গড়ে তোলে।",
    banglaOverview: "বাংলা বিভাগ প্রাচীন, মধ্য ও আধুনিক বাংলা সাহিত্যের গভীর গবেষণা এবং শুদ্ধ ভাষা প্রয়োগ ও সৃজনশীল সাহিত্যচর্চাকে উৎসাহিত করে।",
    programsOffered: [
      "BA (Honors) in Bangla"
    ],
    facilities: [
      "লোকসাহিত্য সংগ্রহশালা",
      "সৃজনশীল সাহিত্য কর্মশালা ও সেমিনার লাইব্রেরি"
    ]
  },
  {
    id: "education",
    slug: "education",
    name: "Department of Education",
    shortName: "Edu",
    faculty: "Faculty of Humanities & Social Sciences",
    headName: "মোঃ মাহবূব হাসান খান",
    headDesignation: "বিভাগীয় সমন্বয়কারী",
    established: "২০০৪",
    image: "../assets/images/departments/education.jpg",
    email: "edu@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "Dedicated to teacher training, pedagogical methodologies and educational leadership in Bangladesh.",
    banglaOverview: "শিক্ষা বিভাগ শিক্ষকদের পেশাগত দক্ষতা উন্নয়ন, শিখন-শেখানো কৌশল ও শিক্ষা নীতি গবেষণায় বি.এড ও এম.এড ডিগ্রি প্রদান করে থাকে।",
    programsOffered: [
      "Bachelor of Education (B.Ed)",
      "Master of Education (M.Ed)"
    ],
    facilities: [
      "টিচিং প্র্যাকটিস ও মাইক্রো-টিচিং ল্যাব",
      "এডুকেশনাল টেকনোলজি ও সাইকোলজি ল্যাব"
    ]
  },
  {
    id: "jms",
    slug: "journalism",
    name: "Department of Journalism & Media Studies",
    shortName: "JMS",
    faculty: "Faculty of Humanities & Social Sciences",
    headName: "মোঃ শহিদুল ইসলাম",
    headDesignation: "সহকারী অধ্যাপক ও প্রধান",
    established: "২০১৮",
    image: "../assets/images/departments/jms.jpg",
    email: "jms@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "Preparing future media professionals, investigative journalists, and communication strategists.",
    banglaOverview: "সাংবাদিকতা ও গণমাধ্যম অধ্যয়ন বিভাগ আধুনিক টেলিভিশন নিউজরুম, অনলাইন পোর্টাল পরিচালনা ও গণযোগাযোগ বিষয়ক প্র্যাকটিক্যাল শিক্ষা দেয়।",
    programsOffered: [
      "BSS in Journalism and Media Studies"
    ],
    facilities: [
      "টিভি নিউজ ব্রডকাস্ট স্টুডিও",
      "ডিজিটাল অডিও-ভিডিও এডিটিং ল্যাব",
      "ক্যাম্পাস নিউজ বুলেটিন প্রকাশনা"
    ]
  },
  {
    id: "development-studies",
    slug: "development-studies",
    name: "Department of Development Studies",
    shortName: "DS",
    faculty: "Faculty of Humanities & Social Sciences",
    headName: "ড. মো. আশরাফুল আলম",
    headDesignation: "বিভাগীয় সমন্বয়ক",
    established: "২০২০",
    image: "../assets/images/departments/dba.jpg",
    email: "ds@pundrauniversity.edu.bd",
    phone: "+880 1713 377 033",
    description: "Fostering analytical competence in socio-economic development, policy analysis and sustainable progress.",
    banglaOverview: "উন্নয়ন অধ্যয়ন বিভাগ টেকসই উন্নয়ন লক্ষ্যমাত্রা (SDG), গ্রামীণ রূপান্তর ও দুর্যোগ ব্যবস্থাপনায় গবেষণা পরিচালনাকারী উচ্চতর বিভাগ।",
    programsOffered: [
      "Masters in Development Studies (MDS)"
    ],
    facilities: [
      "পলিসি রিসার্চ ইউনিট",
      "সোসিও-ইকোনমিক ফিল্ড সার্ভে সেল"
    ]
  }
];

if (typeof window !== "undefined") {
  window.departmentsData = departmentsData;
}
