/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * ইভেন্টস ও সেমিনার ডাটাবেজ
 * সকল তথ্য বিশ্ববিদ্যালয়ের অফিশিয়াল বিবরণী থেকে সংগৃহীত।
 */

const eventsData = [
  {
    id: 1,
    title: "National Conference on 4th Industrial Revolution and Artificial Intelligence",
    date: "12 Nov 2026",
    time: "10:00 AM - 04:30 PM",
    venue: "অডিটোরিয়াম, স্থায়ী ক্যাম্পাস, বাঘোপাড়া, বগুড়া",
    category: "Conference",
    image: "../assets/images/events/seminar1.jpg",
    organizer: "Faculty of Science & Engineering",
    description: "চতুর্থ শিল্প বিপ্লব ও কৃত্রিম বুদ্ধিমত্তার প্রায়োগিক সম্ভাবনা ও চ্যালঞ্জ নিয়ে জাতীয় পর্যায়ের গবেষণা সেমিনার। দেশের শীর্ষস্থানীয় বিজ্ঞানী, গবেষক ও ইন্ডাস্ট্রিয়াল বিশেষজ্ঞগণ তাদের গবেষণাপত্র উপস্থাপন করবেন।",
    featured: true
  },
  {
    id: 2,
    title: "Workshop on Outcome-Based Education (OBE) Curriculum Implementation",
    date: "25 Oct 2026",
    time: "02:00 PM - 05:00 PM",
    venue: "আইকিউএসি (IQAC) সেমিনার হল",
    category: "Workshop",
    image: "../assets/images/events/seminar2.jpg",
    organizer: "Institutional Quality Assurance Cell (IQAC)",
    description: "বিশ্ববিদ্যালয়ের অনুষদ শিক্ষকদের আউটকাম-বেসড শিক্ষা কারিকুলাম, কোর্স ম্যাপিং এবং আধুনিক শিক্ষাদান পদ্ধতির ওপর দিনব্যাপী বিশেষ প্রশিক্ষণ কর্মশালা।",
    featured: true
  },
  {
    id: 3,
    title: "Inter-University Moot Court Competition & Legal Debate 2026",
    date: "05 Dec 2026",
    time: "09:30 AM - 05:00 PM",
    venue: "মক-কোর্ট রুম, আইন অনুষদ",
    category: "Competition",
    image: "../assets/images/events/seminar3.jpg",
    organizer: "Department of Law & PUB Law Club",
    description: "আইন অনুষদের উদ্যোগে আয়োজিত আন্তঃবিশ্ববিদ্যালয় মুটকোর্ট প্রতিযোগিতা। আইন শিক্ষার্থীদের ব্যবহারিক বিচারিক বিতর্ক এবং সাক্ষ্যগ্রহণের বাস্তবিক দক্ষতা প্রদর্শনের ক্ষেত্র।",
    featured: false
  },
  {
    id: 4,
    title: "Campus Career Fair & Entrepreneurship Summit 2026",
    date: "18 Dec 2026",
    time: "10:00 AM - 06:00 PM",
    venue: "সেন্ট্রাল প্লাজা, পুন্ড্র বিশ্ববিদ্যালয়",
    category: "Career Fair",
    image: "../assets/images/events/notice1.jpg",
    organizer: "Business Club & Career Placement Cell",
    description: "৫০টিরও বেশি শীর্ষস্থানীয় বহুজাতিক ও জাতীয় করপোরেট প্রতিষ্ঠান শিক্ষার্থীদের সাথে সরাসরি সিভি গ্রহণ ও স্পট ইন্টারভিউ গ্রহণ করবে।",
    featured: false
  }
];

if (typeof window !== "undefined") {
  window.eventsData = eventsData;
}
