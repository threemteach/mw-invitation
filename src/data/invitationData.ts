export interface TimelineEvent {
  time: string;
  title: string;
}

export interface WishItem {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export const invitationData = {
  // Couple Information
  groom: {
    name: "Mohamed",
    title: "Groom",
  },
  bride: {
    name: "Menna",
    title: "Bride",
  },

  // Dates & Times
  weddingDate: "2026-09-24",
  weddingDateFormatted: "September 24, 2026",
  dayOfWeek: "THURSDAY",
  dayOfWeekAr: "الخميس",
  dayOfMonth: 24,
  monthName: "SEPTEMBER",
  monthNameAr: "سبتمبر",
  year: 2026,
  eventTime: "8:00 PM",

  // Blessing / Welcome Message (Replacing family info)
  blessing: {
    quranicVerse: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    title: "WE ARE GETTING MARRIED",
    message: "Together with our beloved families, we invite you to share in our celebration of love, laughter, and happily ever after.",
    arabicMessage: "يسعدنا ويشرفنا دعوتكم لمشاركتنا فرحتنا و ليلة من أجمل ليالي العمر",
  },

  // Venue & Reception Details
  venue: {
    name: "El-Lo2lo2a Hall • قاعة اللؤلؤة",
    address: "Shona Street, Land Transport Syndicate Building, Kafr El-Dawar, El Beheira",
    addressAr: "شارع الشونة، مبنى نقابة النقل البري، كفر الدوار، محافظة البحيرة",
    mapUrl: "https://maps.app.goo.gl/FZ3HiEKargMvRquh8?g_st=ic",
    mapEmbedUrl: "https://maps.google.com/maps?q=%D9%82%D8%A7%D8%B9%D8%A9+%D8%A7%D9%84%D9%84%D8%A4%D9%84%D8%A4%D8%A9+%D9%83%D9%81%D8%B1+%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D8%B1&t=&z=15&ie=UTF8&iwloc=&output=embed",
    calendarUrl: "https://www.google.com/calendar/render?action=TEMPLATE&text=Mohamed+%26+Menna%27s+Wedding&dates=20260924T180000Z/20260924T220000Z&details=Wedding+Celebration+of+Mohamed+%26+Menna+at+El-Lo2lo2a+Hall,+Kafr+El-Dawar&location=%D9%82%D8%A7%D8%B9%D8%A9+%D8%A7%D9%84%D9%84%D8%A4%D9%84%D8%A4%D8%A9+%D9%83%D9%81%D8%B1+%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D8%B1",
  },

  // Timeline (welcome, being ready, reception, party, buffet, end)
  timeline: [
    { time: "8:00 PM", title: "Welcome" },
    { time: "8:30 PM", title: "Being Ready" },
    { time: "9:00 PM", title: "Reception" },
    { time: "9:30 PM", title: "Party" },
    { time: "10:30 PM", title: "Buffet" },
    { time: "12:00 AM", title: "End" },
  ] as TimelineEvent[],

  // Dress Code (Exact swatches from user reference image)
  dressCode: {
    title: "DRESS CODE",
    subtitle: "Party Attire",
    colors: [
      { hex: "#DE9998", name: "Dusty Rose" },
      { hex: "#8297AC", name: "Slate Blue" },
      { hex: "#FFFFFF", name: "White", border: true },
      { hex: "#DE9998", name: "Rose Blush" },
      { hex: "#E6689E", name: "Party Pink" },
    ],
  },

  // Initial Guestbook Wishes (empty for fresh guest comments)
  initialWishes: [] as WishItem[],

  // Music
  musicUrl: "./audio/romantic-wedding.mp3",
};
