/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * অনুষদ সদস্য ও বিশ্ববিদ্যালয় নেতৃত্ব ডাটাবেজ
 * সকল তথ্য বিশ্ববিদ্যালয়ের অফিশিয়াল ওয়েবসাইট থেকে সংগৃহীত।
 */

const facultyData = {
  leadership: [
    {
      id: "chancellor",
      name: "মহামান্য রাষ্ট্রপতি",
      title: "গণপ্রজাতন্ত্রী বাংলাদেশ",
      designation: "চ্যান্সেলর",
      role: "Chancellor",
      image: "../assets/images/logo/logo.png",
      message: "The Honorable President of the People's Republic of Bangladesh is the Chancellor of the Pundra University of Science & Technology."
    },
    {
      id: "chairman-bot",
      name: "প্রফেসর ড. হোসনে-আরা বেগম",
      title: "চেয়ারম্যান, বোর্ড অব ট্রাস্টিজ",
      designation: "প্রতিষ্ঠাতা ও চেয়ারম্যান, বিওটি (BoT)",
      role: "Chairman, Board of Trustees",
      image: "../assets/images/faculty/20260824160825_Dean_Arts_1.jpg",
      message: "পুন্ড্র ইউনিভার্সিটি উত্তরবঙ্গের প্রথম বেসরকারি বিশ্ববিদ্যালয় হিসেবে অত্র অঞ্চলের উচ্চশিক্ষা ও কারিগরি গবেষণায় পথিকৃত ভূমিকা পালন করছে।"
    },
    {
      id: "vice-chancellor",
      name: "প্রফেসর ড. মো. রফিকুল আহসান",
      title: "উপাচার্য (Vice-Chancellor)",
      designation: "উপাচার্য, পুন্ড্র বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      role: "Vice-Chancellor",
      image: "../assets/images/faculty/Prof._Dr._Md._Rafiqul_Ahsan.png",
      message: "শিক্ষার মান ও নৈতিক মূল্যবোধের সমন্বয়ে আমরা বিশ্বমানের গ্র্যাজুয়েট গড়ে তুলতে প্রতিজ্ঞাবদ্ধ। সৃজনশীল চিন্তা ও গবেষণাই আমাদের চালিকাশক্তি।"
    },
    {
      id: "treasurer",
      name: "প্রফেসর মুগিস উদ্দিন আহমেদ",
      title: "ট্রেজারার (Treasurer)",
      designation: "ট্রেজারার, পুন্ড্র বিশ্ববিদ্যালয়",
      role: "Treasurer",
      image: "../assets/images/faculty/20260824160848_Tresurer_1.jpg",
      message: "সুষ্ঠু আর্থিক ব্যবস্থাপনা ও শিক্ষার্থীদের জন্য সর্বোচ্চ কল্যাণমুখী স্কলারশিপ সুবিধা নিশ্চিত করাই আমাদের মূল দায়িত্ব।"
    }
  ],
  deansAndHeads: [
    {
      id: "dean-fse",
      name: "প্রফেসর ড. মো. শাহিদুল ইসলাম সরকার",
      designation: "ডিন, বিজ্ঞান ও প্রকৌশল অনুষদ এবং প্রধান, সিএসই বিভাগ",
      department: "Computer Science & Engineering",
      faculty: "Faculty of Science & Engineering",
      image: "../assets/images/faculty/dr-md-shahidul-islam-sarker.png",
      email: "shahidul.cse@pundrauniversity.edu.bd"
    },
    {
      id: "dean-fbs",
      name: "প্রফেসর ড. চিত্ত রঞ্জন মিশ্র",
      designation: "ডিন, ব্যবসায় শিক্ষা অনুষদ এবং প্রধান, ডিবিএ বিভাগ",
      department: "Business Administration",
      faculty: "Faculty of Business Studies",
      image: "../assets/images/faculty/prof-dr-chitta-ranjan-misra.png",
      email: "chitta.dba@pundrauniversity.edu.bd"
    },
    {
      id: "dean-law",
      name: "ড. শামীমা বেগম",
      designation: "ডিন, আইন অনুষদ এবং প্রধান, আইন বিভাগ",
      department: "Law",
      faculty: "Faculty of Law",
      image: "../assets/images/faculty/dr-shamima-begum.png",
      email: "shamima.law@pundrauniversity.edu.bd"
    },
    {
      id: "head-eee",
      name: "ড. ইশতিয়াকুল আলম মামদুদ",
      designation: "বিভাগীয় প্রধান, তড়িৎ ও ইলেকট্রনিক কৌশল বিভাগ",
      department: "Electrical & Electronic Engineering",
      faculty: "Faculty of Science & Engineering",
      image: "../assets/images/faculty/dr-istiaqul-alam-mamdood.png",
      email: "istiaqul.eee@pundrauniversity.edu.bd"
    }
  ]
};

if (typeof window !== "undefined") {
  window.facultyData = facultyData;
}
