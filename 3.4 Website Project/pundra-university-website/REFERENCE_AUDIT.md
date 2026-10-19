# Reference Audit: Pundra University of Science & Technology (PUB)
**অডিট প্রতিবেদন: পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি ওয়েবসাইট পরিদর্শন ও বিশ্লেষণ**

## ১. ভূমিকা (Introduction)
এই অডিট প্রতিবেদনটি পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (Pundra University of Science & Technology - PUB), বগুড়া, বাংলাদেশ-এর অফিসিয়াল ওয়েবসাইট (`https://pundrauniversity.ac.bd/`) এবং এর সংশ্লিষ্ট পেজসমূহের গঠন, লেআউট, কালার স্কিম, টাইপোগ্রাফি, নেভিগেশন এবং কন্টেন্ট বিশ্লেষণের ভিত্তিতে তৈরি করা হয়েছে।

- **অডিট তারিখ:** অক্টোবর ২০২৬
- **প্রাথমিক রেফারেন্স URL:** https://pundrauniversity.ac.bd/
- **প্রকল্পের প্রকৃতি:** একটি স্বাধীন শিক্ষামূলক ডেমো ও পুনঃনির্মাণ প্রকল্প (Independent Educational Demonstration)।

---

## ২. গ্লোবাল ডিজাইন সিস্টেম ও মেজারমেন্ট (Design System & Visual Measurements)

### ক. কালার প্যালেট (Color Palette)
রেফারেন্স ওয়েবসাইটের CSS সোর্স থেকে সংগৃহীত প্রকৃত কালার কোডসমূহ:
- **Primary Color:** `#fa394a` (উজ্জ্বল ক্রাইমসন লাল - বাটন ও হাইলাইটে ব্যবহৃত)
- **Secondary / Accent Color:** `#ffc333` (উষ্ণ সোনালী হলুদ - সাব-হেডিং ও স্টার রেটিং/একসেন্টে ব্যবহৃত)
- **Brand Navy / Dark Color:** `#001e43` (গভীর একাডেমিক নেভি ব্লু - টপবার, ফুটার ও ব্যাকগ্রাউন্ড)
- **Heading Color:** `#001e43` ও `#212529`
- **Body Text Color:** `#343434` (প্যারাগ্রাফ টেক্সট)
- **Muted Text Color:** `#6c757d`
- **Border Color:** `#e2e8f0` ও `#dee2e6`
- **Light Section Background:** `#f8fafc` ও `#f6f6f6`
- **Success Color:** `#198754`
- **Warning Color:** `#ffc107`
- **Danger / Urgent Date:** `#dc3545`

### খ. টাইপোগ্রাফি (Typography)
- **Body Font:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Heading Font:** `'Canela Trial', 'Playfair Display', Georgia, serif`
- **Base Font Size:** `16px` (1rem)
- **Heading Scale:**
  - H1: `2.5rem` (40px)
  - H2: `2.0rem` (32px)
  - H3: `1.5rem` (24px)
  - H4: `1.25rem` (20px)
- **Line Height:** Body `1.6`, Headings `1.2`

### গ. কনটেইনার ও গ্রিড স্পেসিং (Layout Dimensions)
- **Max Container Width:** `1280px` (বড় স্ক্রিনে টপবার/হেডারে ফ্লুইড `1680px`)
- **Top Header Height:** ~`44px`
- **Main Navbar Height:** ~`80px`
- **Section Padding:** `50px` থেকে `70px` (টপ ও বটম)
- **Border Radius:** বাটন ও কার্ডে `6px` থেকে `10px`
- **Box Shadow:**
  - কার্ড শ্যাডো: `0 4px 15px rgba(0, 30, 67, 0.08)`
  - হোভার শ্যাডো: `0 10px 25px rgba(0, 30, 67, 0.15)`

---

## ৩. হোমপেজ সেকশন তালিকা ও পর্যায়ক্রম (Observed Homepage Section Hierarchy)

রেফারেন্স ওয়েবসাইটের হোমপেজে দৃশ্যমান সেকশনসমূহের সঠিক পর্যায়ক্রম:
1. **টপ কন্টাক্ট বার (Top Header Bar):**
   - ফোন: `+880 1713 377 033`
   - ইমেইল: `admission@pundrauniversity.edu.bd`
   - পোর্টাল লিঙ্ক: Students, UIMS, Library, Journals, IQAC
2. **মেইন নেভিগেশন বার (Main Navigation Header):**
   - লোগো: পুন্ড্র ইউনিভার্সিটির ব্র্যান্ড লোগো (`logo-title.png`)
   - মেনু: Home, About Us (ড্রপডাউন), Administrations (ড্রপডাউন), Admission (ড্রপডাউন), Academics (ড্রপডাউন), Notice (ড্রপডাউন)
   - কল-টু-অ্যাকশন বাটন: "Online Admission"
3. **হিরো ব্যানার স্লাইডার (Hero Area / Carousel):**
   - "Admission Going On Spring-2027" টাইটেল ব্যানার
   - ক্যাম্পাস ফটোগ্রাফি ও স্লাইড কন্ট্রোল (Prev, Next, Indicators)
   - ভর্তির আবেদন ও প্রোগ্রাম অনুসন্ধানের বোতাম
4. **বিশ্ববিদ্যালয় পরিচিতি ওভারভিউ (University Overview):**
   - "The Pundra University of Science & Technology is proud to be the first Private University in North Bengal..."
   - ভিশন ও মিশনের সংক্ষিপ্ত বিবরণী
5. **একাডেমিক প্রোগ্রামস (Academic Programs):**
   - ট্যাব ফিল্টার: Undergraduate ও Postgraduate
   - প্রোগ্রাম কার্ড: BBA, B.Sc. in CSE, B.Sc. in EEE, Civil Engineering, LL.B, MPH ইত্যাদি
   - কার্ডে ক্রেডিট, সেমিস্টার ও ফি-এর সারসংক্ষেপ
6. **নোটিশ ও ঘোষণা বোর্ড (Notices & Announcements):**
   - তারিখ ব্যাজ সহ নোটিশের তালিকা (যেমন: ১৭ অক্টোবর ২০২৬, সেমিস্টার রুটিন, থিসিস ইত্যাদি)
   - "All Notices" লিঙ্ক
7. **আপকামিং ইভেন্টস ও সেমিনার (Upcoming Events & Seminars):**
   - কর্মশালা, সম্মেলন ও বিশ্ববিদ্যালয়ের সাম্প্রতিক ইভেন্ট কার্ড
8. **ক্যাম্পাস সুবিধা ও ফ্যাসিলিটিজ (Campus Facilities):**
   - আধুনিক ল্যাবরেটরি, সমৃদ্ধ লাইব্রেরি, ওয়াই-ফাই ক্যাম্পাস, হোস্টেল, স্টুডেন্ট ক্যারিয়ার কাউন্সেলিং
9. **বিশ্ববিদ্যালয়ের পরিসংখ্যান ও কাউন্টার (Key Statistics):**
   - অনুষদ সংখ্যা (৪টি ফ্যাকাল্টি), বিভাগ (১২টি ডিপার্টমেন্ট), শিক্ষার্থী সংখ্যা, স্কলারশিপ ও গ্র্যাজুয়েটদের সাফল্য
10. **নেতৃত্ব ও বার্তা (Leadership & Messages):**
    - মহামান্য রাষ্ট্রপতি ও চ্যান্সেলরের নির্দেশনায় পরিচালিত
    - মাননীয় চেয়ারম্যান, বোর্ড অব ট্রাস্টিজ ও উপাচার্যের বাণী
11. **সংযুক্ত অংশীদার ও অনুমোদন (Accreditation & Partners):**
    - UGC (University Grants Commission of Bangladesh)
    - শিক্ষা মন্ত্রণালয় (Ministry of Education)
    - Banbeis, TMSS
12. **অনলাইন ভর্তি কল-টু-অ্যাকশন (Apply Now CTA Banner):**
    - স্প্রিং সেমিস্টারে ভর্তির আমন্ত্রণ ও বিস্তারিত নির্দেশিকা
13. **ফুটার (Footer - 4 Columns):**
    - কলাম ১: About Us ও সোশ্যাল লিঙ্ক (Facebook, YouTube)
    - কলাম ২: Quick Links (Online Admission, Faculty, Departments, Programs)
    - কলাম ৩: Useful Links (UGC, MoEdu, Banbeis, TMSS, Webmail)
    - কলাম ৪: Contact Us (বগুড়া ক্যাম্পাসের স্থায়ী ঠিকানা, ফোন ও ইমেইল)
    - ভিজিটর কাউন্টার (Today Visitors & Total Visitors)
    - কপিরাইট ইনফরমেশন

---

## ৪. যাচাইকৃত একাডেমিক প্রোগ্রাম ও ফি তালিকা (Verified Programs & Fees)

অফিসিয়াল সোর্স থেকে যাচাইকৃত প্রোগ্রামসমূহ ও টিউশন ফি:

| প্রোগ্রাম নাম | অনুষদ / বিভাগ | মোট ক্রেডিট | সেমিস্টার | মোট ফি (টাকা) |
|---|---|---|---|---|
| BBA (Bachelor of Business Admin) | Business Administration | 140.00 | 8 | 3,15,000 |
| B.Sc. in CSE | Computer Science & Eng. | 161.00 | 8 | 4,27,000 |
| B.Sc. in EEE | Electrical & Electronic Eng. | 160.00 | 8 | 4,20,000 |
| B.Sc. in Civil Engineering | Civil Engineering | 164.00 | 8 | 4,30,000 |
| B.Sc. in CSE (For Diploma) | Computer Science & Eng. | 161.00 | 8 | 2,94,800 |
| B.Sc. in EEE (For Diploma) | Electrical & Electronic Eng. | 160.00 | 8 | 3,11,000 |
| B.Sc. in CE (For Diploma) | Civil Engineering | 164.00 | 8 | 3,16,750 |
| B.A Hons. in Islamic Studies | Islamic Studies | 145.00 | 8 | 1,60,000 |
| B.A Hons. in English | English | 144.00 | 8 | 3,30,000 |
| BSS in Journalism & Media Studies | Journalism & Media Studies | 144.00 | 8 | 3,20,000 |
| BA (Honors) in Bangla | Bangla | 144.00 | 8 | 2,00,000 |
| LL.B (Honors) | Law | 144.00 | 8 | 3,50,000 |
| MBA (2-Years) | Business Administration | 60.00 | 4 | 1,50,000 |
| Executive MBA (EMBA) | Business Administration | 48.00 | 3 | 1,40,000 |
| MBA (1-Year) | Business Administration | 39.00 | 2 | 1,00,000 |
| Master of Public Health (MPH) | Public Health | 74.00 | 4 | 1,00,000 |
| MA in Islamic Studies (2-Years) | Islamic Studies | 63.00 | 4 | 85,000 |
| MA in Islamic Studies (1-Year) | Islamic Studies | 33.00 | 2 | 55,000 |
| MA in English | English | 39.00 | 2 | 70,000 |
| B.Ed (Bachelor of Education) | Education | 36.00 | 2 | 27,000 |
| M.Ed (Master of Education) | Education | 36.00 | 2 | 33,000 |
| MDS (Master in Development Studies) | Development Studies | 39.00 | 3 | 1,20,000 |

---

## ৫. ডিপার্টমেন্ট তালিকা (Verified Departments - 12)
1. Department of Business Administration
2. Department of Computer Science & Engineering (CSE)
3. Department of Electrical & Electronic Engineering (EEE)
4. Department of Civil Engineering (CE)
5. Department of Public Health
6. Department of Islamic Studies
7. Department of English
8. Department of Education
9. Department of Law
10. Department of Journalism & Media Studies
11. Department of Bangla
12. Department of Development Studies

---

## ৬. সীমাবদ্ধতা ও সতর্কবার্তা (Limitations & Notes)
1. **প্রকল্পের প্রকৃতি:** এটি একটি ক্লায়েন্ট-সাইড স্ট্যাটিক শিক্ষামূলক ডেমো। কোনো ব্যাকএন্ড সার্ভার বা ডাটাবেজ ছাড়া এটি পরিচালিত হয়।
2. **লাইভ সার্ভার সামঞ্জস্য:** এটি সম্পূর্ণভাবে পিওর HTML5, CSS3 ও ভ্যানিলা জাভাস্ক্রিপ্ট দিয়ে তৈরি, যা ভিএস কোড লাইভ সার্ভার অথবা সরাসরি ব্রাউজারে সুন্দরভাবে চলবে।
3. **ফরম ডেটা:** অনলাইনে ভর্তির আবেদন ফর্মটি একটি ক্লায়েন্ট-সাইড ডেমোস্ট্রেশন এবং এটি কোনো সংবেদনশীল ডেটা বাইরে পাঠায় না।
