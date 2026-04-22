export interface Review {
  rating: number;
  title: string;
  text: string;
  date: string;
  jobLocation: string;
  verified: boolean;
  services: string[];
}

export const reviews: Review[] = [
  {
    rating: 8,
    title: "Happy customer!",
    text: "We had a ground floor rear kitchen extension done with a utility room and a couple of bathrooms done over the summer and autumn last year. Looks absolutely lovely and 5 months on, everything is working like a dream. We would definitely recommend Albert constructions to anyone needing building work done. They were fair priced, dealt with any issues promptly with little fuss and the standard of work was excellent.",
    date: "2025-02-16",
    jobLocation: "SM5",
    verified: true,
    services: ["extensions", "bathroom-renovations"],
  },
  {
    rating: 9.75,
    title: "Kitchen extension and garage conversion",
    text: "We recently had our kitchen extended, and we are absolutely delighted with the results. The team was exceptional from start to finish. The workers were always polite, punctual, and extremely helpful. They provided valuable advice throughout the project, ensuring that everything met our expectations. Their professionalism and attention to detail were evident in the high quality of their work. We couldn't be happier with our new kitchen and would highly recommend their services to anyone looking for a reliable and skilled team.",
    date: "2024-06-05",
    jobLocation: "SM5",
    verified: true,
    services: ["extensions", "kitchen-fitting"],
  },
  {
    rating: 10,
    title: "Brick up old door",
    text: "Quick response with work starting the next day. Competitive quote.",
    date: "2024-04-10",
    jobLocation: "SW18",
    verified: true,
    services: ["general-renovations"],
  },
  {
    rating: 9.5,
    title: "Loft conversion",
    text: "I am very happy with the work done by Albert and his team. Very professional and realistically priced for the job. Easy going person and made no single fuss during the project. Would recommend him anytime for any building works.",
    date: "2023-11-08",
    jobLocation: "BR2",
    verified: true,
    services: ["loft-conversions"],
  },
  {
    rating: 10,
    title: "Built my 3 burner gas BBQ",
    text: "Albert contacted me straight away and came that same evening. Built my gas BBQ quickly and was lovely. Thanks Albert!",
    date: "2023-06-10",
    jobLocation: "CR3",
    verified: true,
    services: ["general-renovations"],
  },
  {
    rating: 10,
    title: "Opening for door in a load bearing wall",
    text: "Albert and his team arrived on time, worked full days and tidied up after themselves. Nothing was an issue for them and good recommendations were made. A fair quote was given and we were happy with the quality and speed of work. Thank you guys — great job!",
    date: "2023-02-15",
    jobLocation: "BR1",
    verified: true,
    services: ["general-renovations"],
  },
  {
    rating: 10,
    title: "Loft Conversion",
    text: "Albert Construction did a loft conversion for me and I can wholeheartedly say they are absolutely amazing. The work was completed quickly and the quality was excellent. I have recommended them to many friends and family members and will continue to do so. They are neat, tidy and Albert is a fantastic person; he is trustworthy, kind and most importantly extremely helpful, he goes above and beyond. I am a very fussy person and I changed my mind with the details and specifics many times which I understand is annoying however Albert and the team were so understanding and helped me very much!",
    date: "2022-10-18",
    jobLocation: "DA16",
    verified: true,
    services: ["loft-conversions"],
  },
  {
    rating: 9.5,
    title: "Loft Conversion",
    text: "I could not have asked for a better Builder! Albert and his team are professionals. The build was stressless and hassle-free, and his workers arrived on time throughout the build. He has every trade required on his books; hence the loft conversion was completed on schedule. Albert managed our expectations at every stage. He was always available to answer questions, including at weekends. With his years of experience, he could advise us on materials and suppliers. I can't wait to start the next phase of our building works with him.",
    date: "2022-09-12",
    jobLocation: "BR1",
    verified: true,
    services: ["loft-conversions"],
  },
  {
    rating: 9,
    title: "Renovation of 1930s terrace",
    text: "Albert Construction carried out our renovation project, updating the layout of our 1930s semi with an existing extension. We relocated the kitchen, replaced the rear sliding door with bifolds and added a skylight. Albert was great and fair to work with. He stuck to timelines as much as possible and he communicated about delays and extra costs and made sure we were happy with any changes. He is good at coming up with solutions and we are really happy with how our house looks. His team are friendly and hard workers. Overall, we would definitely recommend Albert and he offers real value for money.",
    date: "2022-05-14",
    jobLocation: "SE18",
    verified: true,
    services: ["general-renovations", "extensions"],
  },
  {
    rating: 10,
    title: "Loft conversion",
    text: "Experienced builders and tradesmen, excellent workmanship and expertise in the building trade. The works carried out were of high standards — extremely pleased. Respectful workers; I would highly recommend this company. The completed works were on time and as quoted.",
    date: "2021-12-04",
    jobLocation: "SE18",
    verified: true,
    services: ["loft-conversions"],
  },
  {
    rating: 10,
    title: "Shop extension and refurbishment",
    text: "Albert is a very experienced, hard working and trustful builder. He completed all the planned works on time and spot on budget, with no extras added. Highly recommended!",
    date: "2021-11-30",
    jobLocation: "SW11",
    verified: true,
    services: ["extensions", "commercial-offices"],
  },
  {
    rating: 10,
    title: "Complete refurbishment of kitchen, widening of doorway to open plan area with renovated lounge",
    text: "I am delighted with the work carried out by Albert and his team. During the 3 weeks that it took to complete the job Albert was closely involved on a daily basis ensuring that everything was done properly and efficiently. His is a family firm and the close relationship within members of the team meant that each one was invested in the project. Albert was always available to answer my questions and consulted me fully each step of the way. This means that the completed job is exactly as I wanted it. And it was delivered on time and within budget. I cannot praise Albert and his team highly enough.",
    date: "2021-11-11",
    jobLocation: "SM6",
    verified: true,
    services: ["kitchen-fitting", "general-renovations"],
  },
  {
    rating: 10,
    title: "Structural work — supply and fit new concrete lintels",
    text: "I would highly recommend Albert Construction as they were professional, efficient and friendly. Albert and his team replaced the existing timber lintels with new concrete ones as well as worked on the ceiling in my property. He sent me photos of the completed work. He was polite and approachable. Overall, he did a very good job.",
    date: "2021-11-10",
    jobLocation: "CR2",
    verified: false,
    services: ["general-renovations"],
  },
  {
    rating: 9.75,
    title: "New fibreglass garage roof",
    text: "Albert and his team did another great job, replacing our leaking garage roof with a fibreglass one. Again they worked really hard and finished the job efficiently and on time. We'll definitely be using him again for a couple of other projects.",
    date: "2021-10-15",
    jobLocation: "CR2",
    verified: true,
    services: ["roofing"],
  },
  {
    rating: 9.5,
    title: "Fixing a hole between our flat and the flat downstairs",
    text: "Albert Construction were professional, quick and above all patient given that we had to wait for the all-clear from the insurance before work could begin. Albert came in to assess the job and gave us a reasonable quote. There was a wait while the work was agreed with the insurers on both sides but once that was done Albert fit us in quickly and got the entire job done in a day. We are really pleased with the repair and he even managed to match our existing tiles pretty well! Brilliant.",
    date: "2021-09-21",
    jobLocation: "CR8",
    verified: true,
    services: ["general-renovations", "plastering"],
  },
  {
    rating: 9.5,
    title: "Garage conversion",
    text: "I would highly recommend Albert and his team. They go above and beyond to make sure each aspect of your build is finished to a high standard. They are thorough, reliable, self sufficient, and extremely hard working. Albert is always at the end of the phone to help with any queries throughout the process and includes you in every decision to be made. The level of service is amazing as is the workmanship. They stick to the original quote given, and I have already asked them to return to do further work for me both in my home and a property I let out.",
    date: "2021-08-13",
    jobLocation: "SM1",
    verified: true,
    services: ["extensions", "general-renovations"],
  },
  {
    rating: 10,
    title: "Knock through kitchen/diner and install/refurbish kitchen",
    text: "Albert and his team did an amazing job with our new kitchen. They were always polite, arrived on time and completed the work to a high standard. They were able to finish within the quoted time and within budget. We couldn't be happier with the finished result. We would have no hesitation in recommending them and will definitely call them again for any future work.",
    date: "2021-06-15",
    jobLocation: "SM6",
    verified: true,
    services: ["kitchen-fitting", "general-renovations"],
  },
  {
    rating: 10,
    title: "Kitchen splashback, moved a cupboard, installed new tap and painted",
    text: "I can't thank Albert and his team enough for the work they completed. They moved a cupboard, which now allows me to open a drawer which could never be opened. They completed work left unfinished by a previous builder, installing a splashback and under cupboard lighting, reinforcing the bench top, replaced a tap and finished off with painting. Very happy with the result. They were all extremely hard working, very professional and will definitely use again for future work.",
    date: "2021-05-27",
    jobLocation: "CR0",
    verified: true,
    services: ["kitchen-fitting", "painting-decorating"],
  },
  {
    rating: 9.25,
    title: "Repairing damp wall, plastering, painting, floor sanding, new light fittings",
    text: "Albert's team did a great job. They worked hard, they worked fast and were very professional.",
    date: "2021-05-22",
    jobLocation: "CR2",
    verified: true,
    services: ["plastering", "painting-decorating", "general-renovations"],
  },
  {
    rating: 9.25,
    title: "Garden office / studio",
    text: "Mr Lika and his team did an excellent job and the studio work started on time and was built within 6 weeks. Mr Lika and his team worked efficiently and always communicated well about what work was planned and the times that they would be on site. They were all punctual and polite and mindful to take shoes off when coming in to the main property and keeping the site as tidy as possible. They were also very flexible and able to adapt to any last minute changes I needed and came up with some great ideas to complement the original plan. I highly recommend Albert Construction Ltd.",
    date: "2021-04-14",
    jobLocation: "W7",
    verified: true,
    services: ["extensions", "commercial-offices"],
  },
  {
    rating: 10,
    title: "Renovated flat — new bathroom, kitchen, tiles, plastering, painting",
    text: "Albert and team worked very well with commitment, enthusiasm, honesty, loads of patience and with compassion ensuring the end product was to the customer's expectations. Work was of a high standard. Was punctual and easy to communicate. Goes the extra mile to help out ensuring the end product was of high quality. Takes great pride in their work. Good skills demonstrated. I am very happy with the outcome and highly recommend this company. I would certainly use this company for any work that may crop up in the future.",
    date: "2021-03-30",
    jobLocation: "TW5",
    verified: true,
    services: ["bathroom-renovations", "kitchen-fitting", "plastering", "painting-decorating"],
  },
  {
    rating: 10,
    title: "Knock through kitchen and dining room, build extension, fit kitchen",
    text: "Albert did a great job helping us to design and plan our kitchen diner. He took the time to understand exactly what we wanted and gave good advice to keep us within budget and building regulations. His team were friendly and reliable and did a great job of the build, always on time, they worked hard to get the job done within the estimated timeframe. We are delighted with our new room and extension and will definitely be in contact with Albert for future projects as we renovate our house.",
    date: "2021-03-28",
    jobLocation: "SM6",
    verified: true,
    services: ["extensions", "kitchen-fitting"],
  },
  {
    rating: 10,
    title: "Build a new window in shower room, reinstall new shower, replace sanitary ware and tiling",
    text: "Albert and his men worked very hard to make sure the work done was satisfactory. Albert went out of his way to do the best he could and offered good advice and kept in contact to make sure I was satisfied. Very satisfied customer.",
    date: "2021-01-15",
    jobLocation: "CR2",
    verified: true,
    services: ["bathroom-renovations"],
  },
  {
    rating: 8.5,
    title: "New bathroom fitted",
    text: "Albert and his whole team are extremely polite and hard working. Albert was very clear about the timetable and about the price upfront. Overall we are very happy with the end result.",
    date: "2020-12-01",
    jobLocation: "CR0",
    verified: true,
    services: ["bathroom-renovations"],
  },
  {
    rating: 10,
    title: "Removal of a wall, new consumer unit, repair ceiling and rerouting of pipes",
    text: "The nicest and most efficient builders we've ever used. No task was too big or small. The guys worked extremely hard and went above and beyond. Really happy with the work and will definitely be using Albert Construction again!",
    date: "2020-10-19",
    jobLocation: "CR8",
    verified: true,
    services: ["general-renovations"],
  },
  {
    rating: 10,
    title: "Double side return extension, rear extension and attic dormer extension",
    text: "Our house is a 1930s semi-detached dwelling, that was refurbished and extended. Albert Construction Ltd carried out the work with utmost care and professionalism. We entrusted them to demolish the house and then to transform it into a high spec residence. They undertook the project management and engagement of all third-party contractors with our interests always as a priority. They guided us through the whole process and were excellent in the after-build care. We have passed their contact details to several neighbours who have engaged their services too. Our house is testimony to them.",
    date: "2020-09-21",
    jobLocation: "TW3",
    verified: true,
    services: ["extensions", "loft-conversions", "general-renovations"],
  },
  {
    rating: 10,
    title: "Loft and extension",
    text: "Great service provided by Albert Construction. Hired them for a loft conversion and an extension — they were very professional and the work was done to a very high standard. The quality of workmanship is outstanding. The work was completed on time and all of the tradespeople were polite and on time. They did a very good job and put a lot of effort into keeping the place tidy and creating a safe environment while the work was done. They also kept me updated on everything they were going to do. Because of the quality of the work I have already recommended and would recommend them to other people.",
    date: "2020-09-20",
    jobLocation: "TW7",
    verified: true,
    services: ["loft-conversions", "extensions"],
  },
  {
    rating: 10,
    title: "Extension",
    text: "Excellent work was done!",
    date: "2020-09-17",
    jobLocation: "CR2",
    verified: true,
    services: ["extensions"],
  },
  {
    rating: 9.75,
    title: "Loft conversion",
    text: "Excellent work was done! Highly recommend this company.",
    date: "2020-09-15",
    jobLocation: "TW7",
    verified: true,
    services: ["loft-conversions"],
  },
];

/** Get reviews relevant to a specific service */
export function getReviewsForService(serviceSlug: string): Review[] {
  return reviews.filter((r) => r.services.includes(serviceSlug));
}

/** Get reviews relevant to a location by postcode prefix */
export function getReviewsForLocation(postcodeArea: string): Review[] {
  return reviews.filter((r) => r.jobLocation.startsWith(postcodeArea));
}

/** Calculate average rating across all reviews */
export const averageRating =
  Math.round(
    (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10
  ) / 10;

/** Total review count */
export const reviewCount = reviews.length;
