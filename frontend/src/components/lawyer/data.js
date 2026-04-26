// Lawyer mock/sample data — paste your code here
// All seed data and shared constants

// ============================================================
// CASE DATA + BADGE MAPS
// ============================================================
const casesData = [
    { id: "CS-2024-089", title: "Singh vs. Municipal Corp.", client: "Rajesh Singh", clientId: 1, status: "Under Hearing", type: "Civil", nextHearing: "Mar 10, 2026", filed: "Jan 15, 2026", urgent: true, court: "High Court Mumbai", value: "₹18,00,000" },
    { id: "CS-2024-887", title: "Sharma Property Dispute", client: "Priya Sharma", clientId: 2, status: "Filed", type: "Property", nextHearing: "Mar 15, 2026", filed: "Jan 20, 2026", urgent: false, court: "Civil Court Mumbai", value: "₹42,00,000" },
    { id: "CS-2024-085", title: "Patel Employment Case", client: "Amit Patel", clientId: 3, status: "Adjourned", type: "Labor", nextHearing: "Mar 22, 2026", filed: "Feb 1, 2026", urgent: false, court: "Labour Court", value: "₹8,50,000" },
    { id: "CS-2024-082", title: "Kumar Contract Breach", client: "Vikram Kumar", clientId: 4, status: "Under Hearing", type: "Commercial", nextHearing: "Mar 8, 2026", filed: "Feb 10, 2026", urgent: true, court: "Commercial Court", value: "₹65,00,000" },
    { id: "CS-2024-080", title: "Reddy Land Acquisition", client: "Lakshmi Reddy", clientId: 5, status: "Filed", type: "Property", nextHearing: "Mar 20, 2026", filed: "Feb 15, 2026", urgent: false, court: "Civil Court", value: "₹1,20,00,000" },
    { id: "CS-2024-078", title: "Gupta Family Settlement", client: "Anand Gupta", clientId: 6, status: "Closed", type: "Family", nextHearing: "—", filed: "Nov 5, 2025", urgent: false, court: "Family Court", value: "₹22,00,000" },
    { id: "CS-2024-887b", title: "Patel v/s Patel Succession", client: "Amit Patel", clientId: 3, status: "Filed", type: "Family", nextHearing: "Mar 25, 2026", filed: "Feb 1, 2026", urgent: false, court: "Family Court", value: "₹9,00,000" },
    { id: "CS-2024-082b", title: "Kumar v/s State of Maharashtra", client: "Vikram Kumar", clientId: 4, status: "Closed", type: "Criminal", nextHearing: "—", filed: "Nov 5, 2025", urgent: false, court: "Sessions Court", value: "—" },
];

// const documentsData = [
//   { id: "DOC-001", title: "Plaint — Singh vs. Municipal Corp.", type: "Plaint", case: "CS-2024-089", status: "Under Review", modified: "Mar 4, 2026" },
//   { id: "DOC-002", title: "Written Statement — Sharma", type: "Written Statement", case: "CS-2024-887", status: "Draft", modified: "Mar 3, 2026" },
//   { id: "DOC-003", title: "Affidavit — Patel Employment", type: "Affidavit", case: "CS-2024-085", status: "Approved", modified: "Mar 1, 2026" },
//   { id: "DOC-004", title: "Contract Agreement — Kumar", type: "Agreement", case: "CS-2024-082", status: "Final", modified: "Feb 28, 2026" },
//   { id: "DOC-005", title: "Legal Notice — Reddy Land", type: "Notice", case: "CS-2024-080", status: "Draft", modified: "Feb 26, 2026" },
//   { id: "DOC-006", title: "Power of Attorney — Sharma", type: "POA", case: "CS-2024-887", status: "Final", modified: "Feb 20, 2026" },
// ];

const aptDataInitial = [
    { id: "APT-001", client: "Rajesh Singh", initials: "RS", date: "Mar 10, 2026", time: "10:00 AM", duration: "45 min", type: "In-Person", purpose: "Case Review", status: "Upcoming", caseId: "CS-2024-089" },
    { id: "APT-002", client: "Priya Sharma", initials: "PS", date: "Mar 10, 2026", time: "12:30 PM", duration: "30 min", type: "Video Call", purpose: "Property Dispute Consultation", status: "Upcoming", caseId: "CS-2024-887" },
    { id: "APT-003", client: "Amit Patel", initials: "AP", date: "Mar 11, 2026", time: "2:00 PM", duration: "60 min", type: "In-Person", purpose: "Employment Case Strategy", status: "Pending", caseId: "CS-2024-085" },
    { id: "APT-004", client: "Vikram Kumar", initials: "VK", date: "Mar 9, 2026", time: "11:00 AM", duration: "45 min", type: "In-Person", purpose: "Contract Review", status: "Completed", caseId: "CS-2024-082" },
    { id: "APT-005", client: "Neha Verma", initials: "NV", date: "Mar 12, 2026", time: "3:00 PM", duration: "30 min", type: "Video Call", purpose: "Divorce Hearing Prep", status: "Pending", caseId: "CS-2024-090" },
    { id: "APT-006", client: "Lakshmi Reddy", initials: "LR", date: "Mar 13, 2026", time: "11:30 AM", duration: "45 min", type: "In-Person", purpose: "Land Acquisition Review", status: "Upcoming", caseId: "CS-2024-091" },
    { id: "APT-007", client: "Anand Gupta", initials: "AG", date: "Mar 8, 2026", time: "4:00 PM", duration: "30 min", type: "Video Call", purpose: "Tax Filing Dispute", status: "Cancelled", caseId: "CS-2024-092" },
];
let aptData = aptDataInitial;

const qData = [
    { id: 1, client: "Rajesh Singh", initials: "RS", question: "What documents needed for next hearing?", case: "CS-2024-089", time: "2h ago", status: "Unanswered", phone: "+91 98765 11111", caseStatus: "Under Hearing", nextHearing: "Mar 10, 2026", lastMsg: "What documents do I need for the next hearing?", thread: [{ who: "client", text: "What documents do I need for the next hearing?", time: "2h ago" }] },
    { id: 2, client: "Priya Sharma", initials: "PS", question: "Can you explain the latest court order?", case: "CS-2024-887", time: "5h ago", status: "Unanswered", phone: "+91 98765 22222", caseStatus: "Filed", nextHearing: "Mar 15, 2026", lastMsg: "I'll review the order and get back to you shortly.", thread: [{ who: "client", text: "Can you explain the latest court order received?", time: "5h ago" }, { who: "lawyer", text: "I'll review the order and get back to you shortly.", time: "4h ago" }] },
    { id: 3, client: "Vikram Kumar", initials: "VK", question: "Is there any update on settlement offer?", case: "CS-2024-082", time: "2d ago", status: "Answered", phone: "+91 98765 44444", caseStatus: "Under Hearing", nextHearing: "Mar 8, 2026", lastMsg: "The opposing party has agreed in principle.", thread: [{ who: "client", text: "Is there any update on settlement offer?", time: "2d ago" }, { who: "lawyer", text: "The opposing party has agreed in principle.", time: "1d ago" }] },
];

const tasksData = [
    { id: "T-001", title: "File vakalatnama with court", case: "CS-2024-089", due: "Mar 10, 2026", priority: "high", done: false },
    { id: "T-002", title: "Prepare cross-examination questions", case: "CS-2024-089", due: "Mar 9, 2026", priority: "high", done: true },
    { id: "T-003", title: "Draft written statement reply", case: "CS-2024-887", due: "Mar 14, 2026", priority: "medium", done: false },
    { id: "T-004", title: "Review employment contract clauses", case: "CS-2024-085", due: "Mar 20, 2026", priority: "medium", done: false },
    { id: "T-005", title: "Collect evidence affidavits", case: "CS-2024-082", due: "Mar 7, 2026", priority: "high", done: true },
    { id: "T-006", title: "Send legal notice to respondent", case: "CS-2024-080", due: "Mar 18, 2026", priority: "low", done: false },
];

const hearingsData = [
    { id: "H-001", date: "Mar 10, 2026", time: "10:00 AM", court: "High Court Mumbai", judge: "Hon. Justice Mehta", purpose: "Evidence hearing — witness examination", case: "CS-2024-089", outcome: null },
    { id: "H-002", date: "Feb 18, 2026", time: "11:30 AM", court: "High Court Mumbai", judge: "Hon. Justice Mehta", purpose: "Preliminary hearing", case: "CS-2024-089", outcome: "Adjourned — documents pending" },
    { id: "H-003", date: "Mar 15, 2026", time: "2:00 PM", court: "Civil Court Mumbai", judge: "Hon. Justice Kapoor", purpose: "Filing of written statement", case: "CS-2024-887", outcome: null },
    { id: "H-004", date: "Mar 22, 2026", time: "10:30 AM", court: "Labour Court", judge: "Presiding Officer Singh", purpose: "Settlement talks", case: "CS-2024-085", outcome: null },
    { id: "H-005", date: "Mar 8, 2026", time: "3:00 PM", court: "Commercial Court", judge: "Hon. Justice Iyer", purpose: "Interim injunction application", case: "CS-2024-082", outcome: "Order reserved" },
];

const avatarBg = (init) => init === "PS" ? "#C4836A" : init === "AP" ? "#5B8DB8" : init === "VK" ? "#5BAE7A" : "#9A6AC4";


const DSB = { Draft: "gray", "Under Review": "warn", Approved: "success", Final: "primary" };
const APSB = { Upcoming: "info", Completed: "success", Cancelled: "danger", Pending: "warn" };
const PRIO = { high: "danger", medium: "warn", low: "success" };

// ============================================================
// CASE WORKSPACE SUBNAV TABS
// ============================================================


// ============================================================


// ── Seed Data ──
const seedCases = [
    { id: "CS-2024-089", title: "Singh vs. Municipal Corp.", client: "Rajesh Singh", status: "Under Hearing", type: "Civil", nextHearing: "2026-03-10", filed: "2026-01-15", urgent: true, court: "High Court Mumbai", value: "₹18,00,000", judge: "Hon. Justice Mehta" },
    { id: "CS-2024-887", title: "Sharma Property Dispute", client: "Priya Sharma", status: "Filed", type: "Property", nextHearing: "2026-03-15", filed: "2026-01-20", urgent: false, court: "Civil Court Mumbai", value: "₹42,00,000", judge: "Hon. Justice Kapoor" },
    { id: "CS-2024-085", title: "Patel Employment Case", client: "Amit Patel", status: "Adjourned", type: "Labor", nextHearing: "2026-03-22", filed: "2026-02-01", urgent: false, court: "Labour Court", value: "₹8,50,000", judge: "P.O. Singh" },
    { id: "CS-2024-082", title: "Kumar Contract Breach", client: "Vikram Kumar", status: "Under Hearing", type: "Commercial", nextHearing: "2026-03-08", filed: "2026-02-10", urgent: true, court: "Commercial Court", value: "₹65,00,000", judge: "Hon. Justice Iyer" },
    { id: "CS-2024-080", title: "Reddy Land Acquisition", client: "Lakshmi Reddy", status: "Filed", type: "Property", nextHearing: "2026-03-20", filed: "2026-02-15", urgent: false, court: "Civil Court", value: "₹1,20,00,000", judge: "Hon. Justice Bose" },
    { id: "CS-2024-078", title: "Gupta Family Settlement", client: "Anand Gupta", status: "Closed", type: "Family", nextHearing: "", filed: "2025-11-05", urgent: false, court: "Family Court", value: "₹22,00,000", judge: "Hon. Justice Rao" },
];

const seedHearings = {
    "CS-2024-089": [
        { id: "H-001", date: "2026-03-10", time: "10:00", court: "High Court Mumbai", judge: "Hon. Justice Mehta", purpose: "Evidence hearing — witness examination", outcome: "", status: "upcoming" },
        { id: "H-002", date: "2026-02-18", time: "11:30", court: "High Court Mumbai", judge: "Hon. Justice Mehta", purpose: "Preliminary hearing", outcome: "Adjourned — documents pending", status: "past" },
    ],
    "CS-2024-887": [
        { id: "H-003", date: "2026-03-15", time: "14:00", court: "Civil Court Mumbai", judge: "Hon. Justice Kapoor", purpose: "Filing of written statement", outcome: "", status: "upcoming" },
    ],
    "CS-2024-082": [
        { id: "H-005", date: "2026-03-08", time: "15:00", court: "Commercial Court", judge: "Hon. Justice Iyer", purpose: "Interim injunction application", outcome: "Order reserved", status: "past" },
    ],
    "CS-2024-085": [],
    "CS-2024-080": [],
    "CS-2024-078": [],
};

const seedDocs = {
    "CS-2024-089": [
        { id: "DOC-001", title: "Plaint — Singh vs. Municipal Corp.", type: "Plaint", status: "Under Review", modified: "2026-03-04", content: "This is the plaint filed by Rajesh Singh against Municipal Corporation of Mumbai, alleging wrongful acquisition of property situated at Survey No. 42, Andheri West.\n\nThe petitioner submits that:\n1. The property in question has been in possession of the petitioner since 1998.\n2. No notice was served prior to acquisition.\n3. Compensation offered is grossly inadequate.\n\nPrayer: The petitioner humbly prays that this Hon'ble Court may be pleased to set aside the acquisition order and award just compensation." },
        { id: "DOC-002", title: "Vakalatnama — Singh Case", type: "Vakalatnama", status: "Final", modified: "2026-02-20", content: "I, Rajesh Singh, S/o Ram Singh, resident of 14/B, Shivaji Nagar, Mumbai - 400053, hereby appoint and retain Advocate ____________ to appear, act and plead on my behalf in the above mentioned case.\n\nSigned this day of _______ 2026.\n\nSignature: ______________\nDate: ______________" },
    ],
    "CS-2024-887": [
        { id: "DOC-003", title: "Written Statement — Sharma", type: "Written Statement", status: "Draft", modified: "2026-03-03", content: "Written Statement on behalf of Defendant\n\nIn reply to the plaint filed by the plaintiff, the defendant submits as follows:\n\n1. The suit is not maintainable in the present form.\n2. The defendant is the rightful owner of the disputed property as per the registered sale deed dated 15.06.2018.\n3. The plaintiff's claim is barred by limitation.\n\nPrayer: The suit be dismissed with costs." },
    ],
    "CS-2024-082": [
        { id: "DOC-004", title: "Contract Agreement — Kumar", type: "Agreement", status: "Approved", modified: "2026-02-28", content: "SERVICE AGREEMENT\n\nThis Agreement is entered into on the 1st day of January 2025 between:\n\nParty A: Vikram Kumar Enterprises Pvt. Ltd.\nParty B: Rajan Constructions Ltd.\n\nScope of Work: Supply and installation of structural materials as per Schedule A.\nContract Value: ₹65,00,000\nDelivery Timeline: 6 months from date of signing.\n\nIn case of breach, the defaulting party shall pay liquidated damages at 2% per month on the outstanding amount." },
    ],
    "CS-2024-085": [], "CS-2024-080": [], "CS-2024-078": [],
};

const seedTimeline = {
    "CS-2024-089": [
        { id: "TL-001", date: "2026-03-04", type: "document", text: "Plaint filed and submitted for review", icon: "📄" },
        { id: "TL-002", date: "2026-02-18", type: "hearing", text: "Preliminary hearing held — adjourned due to pending documents", icon: "⚖️" },
        { id: "TL-003", date: "2026-01-28", type: "task", text: "Cross-examination questions drafted", icon: "✅" },
        { id: "TL-004", date: "2026-01-15", type: "filed", text: "Case filed in court", icon: "📁" },
    ],
    "CS-2024-887": [
        { id: "TL-005", date: "2026-03-03", type: "document", text: "Written statement draft prepared", icon: "📄" },
        { id: "TL-006", date: "2026-01-20", type: "filed", text: "Case filed in court", icon: "📁" },
    ],
    "CS-2024-082": [
        { id: "TL-007", date: "2026-03-08", type: "hearing", text: "Interim injunction hearing — order reserved", icon: "⚖️" },
        { id: "TL-008", date: "2026-02-28", type: "document", text: "Contract agreement approved", icon: "📄" },
        { id: "TL-009", date: "2026-02-10", type: "filed", text: "Case filed in court", icon: "📁" },
    ],
    "CS-2024-085": [{ id: "TL-010", date: "2026-02-01", type: "filed", text: "Case filed in court", icon: "📁" }],
    "CS-2024-080": [{ id: "TL-011", date: "2026-02-15", type: "filed", text: "Case filed in court", icon: "📁" }],
    "CS-2024-078": [{ id: "TL-012", date: "2025-11-05", type: "filed", text: "Case filed in court", icon: "📁" }],
};



const fmtDate = (d) => { if (!d) return "—"; const dt = new Date(d); return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }); };
const fmtTime = (t) => { if (!t) return ""; const [h, m] = t.split(":"); const hr = parseInt(h); return `${hr > 12 ? hr - 12 : hr}:${m} ${hr >= 12 ? "PM" : "AM"}`; };
const CSB = { "Under Hearing": "info", Filed: "success", Adjourned: "warn", Closed: "gray" };
const typeColor = { hearing: "#5AB3FF", document: "#40F0DC", task: "#4DD4A3", filed: "#4DD4A3", milestone: "#FFC857", note: "#9A9A94" };
const typeIcon = { hearing: "⚖️", document: "📄", task: "✅", filed: "📁", milestone: "🏁", note: "📝" };
export {
    casesData, seedCases, seedHearings, seedDocs, seedTimeline,
    fmtDate, fmtTime, CSB, typeColor, typeIcon, DSB, APSB, PRIO,
    qData, aptDataInitial, tasksData, hearingsData
};
