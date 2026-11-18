export const INITIAL_SAVED_ITEMS = [
  {
    id: 's1',
    type: 'Deals',
    variant: 'coral',
    amount: '৳56L',
    badge: 'Negotiation · 80%',
    title: 'bKash Enterprise — Q4 Contract',
    subtitle: 'Saved 2h ago · Nusrat Jahan',
    collection: 'Enterprise Q4'
  },
  {
    id: 's2',
    type: 'Docs',
    variant: 'dark',
    badge: 'PDF · 14 pages',
    title: 'Closing Playbook — Enterprise Bangladesh v3',
    subtitle: 'Updated yesterday · RevOps Dhaka',
    collection: 'Onboarding kit'
  },
  {
    id: 's3',
    type: 'Calls',
    variant: 'video',
    duration: '18:42',
    badge: 'Recording',
    title: 'Demo call — Chaldal Systems',
    subtitle: 'Key moment at 11:20 · Security review',
    collection: 'Enterprise Q4'
  },
  {
    id: 's4',
    type: 'Snippets',
    variant: 'light',
    badge: 'Script snippet',
    quote: '"We integrate natively with local payment gateways (bKash/Nagad) and Azure AD out of the box—no middleware required."',
    title: 'Objection — "Single vendor policy in BD"',
    subtitle: 'Used 19 times this month',
    collection: 'Onboarding kit'
  },
  {
    id: 's5',
    type: 'Docs',
    variant: 'light',
    badge: 'Battlecard',
    quote: 'Highlight 42% faster local deployment & 24/7 Dhaka-based support vs. offshore legacy tiers.',
    title: 'Competitor battle card — Enterprise Cloud',
    subtitle: 'Saved 3d ago · Product Marketing',
    collection: 'Proposal templates'
  },
  {
    id: 's6',
    type: 'Deals',
    variant: 'coral',
    amount: '৳33L',
    badge: 'Proposal · 65%',
    title: 'Pathao Logistics — 120 seats',
    subtitle: 'Decision expected Friday · Tanvir Ahmed',
    collection: 'Enterprise Q4'
  },
  {
    id: 's7',
    type: 'Calls',
    variant: 'audio',
    duration: '04:15',
    badge: 'Voice note',
    title: 'Discovery call — Tanvir Ahmed (+880 1712-345678)',
    subtitle: 'Budget confirmed for Q4 rollout in Dhaka',
    collection: 'Saved by team'
  },
  {
    id: 's8',
    type: 'Snippets',
    variant: 'audio',
    duration: '01:48',
    badge: 'Coaching clip',
    title: 'Call snippet — handling BDT pricing pushback',
    subtitle: 'Top performer highlight · Sadia Islam',
    collection: 'Saved by team'
  },
  {
    id: 's9',
    type: 'Deals',
    variant: 'dark',
    badge: 'Deck · 22 slides',
    title: 'Q3 Retrospective — Bangladesh Sales Ops',
    subtitle: 'Win rate up +6.4% QoQ',
    collection: 'Proposal templates'
  }
];

export const INITIAL_TASKS = [
  {
    id: 't1',
    title: 'Send revised MSA redlines to Chaldal legal team',
    deal: 'Chaldal Systems · ৳1.12 Cr',
    category: 'Overdue',
    priority: 'High',
    type: 'Deals',
    due: 'Yesterday',
    completed: false
  },
  {
    id: 't2',
    title: 'Follow up with Tanvir (+880 1712-345678) on security questionnaire',
    deal: 'Pathao Logistics · ৳33L',
    category: 'Overdue',
    priority: 'High',
    type: 'Follow-ups',
    due: 'Yesterday',
    completed: false
  },
  {
    id: 't3',
    title: 'Prepare custom ROI model for bKash CFO',
    deal: 'bKash Enterprise · ৳56L',
    category: 'Today',
    priority: 'High',
    type: 'Deals',
    due: 'Today, 2:00 PM',
    completed: false
  },
  {
    id: 't4',
    title: 'Share SSO implementation guide with Farhana (+880 1623-890123)',
    deal: 'Brain Station 23 · ৳48L',
    category: 'Today',
    priority: 'Medium',
    type: 'Follow-ups',
    due: 'Today, 4:30 PM',
    completed: false
  },
  {
    id: 't5',
    title: 'Update Q4 commit numbers in CRM pipeline',
    deal: 'Internal · Dhaka RevOps',
    category: 'Today',
    priority: 'Medium',
    type: 'Deals',
    due: 'Today, 5:00 PM',
    completed: false
  },
  {
    id: 't6',
    title: 'Confirm executive sponsor for Grameenphone pilot',
    deal: 'Grameenphone · ৳64L',
    category: 'Today',
    priority: 'High',
    type: 'Follow-ups',
    due: 'Today, 6:00 PM',
    completed: false
  },
  {
    id: 't7',
    title: 'Schedule technical deep-dive with solutions engineer',
    deal: 'Chaldal Systems · ৳1.12 Cr',
    category: 'Upcoming',
    priority: 'High',
    type: 'Deals',
    due: 'Tomorrow',
    completed: false
  },
  {
    id: 't8',
    title: 'Draft multi-year discount options for Walton',
    deal: 'Walton Hi-Tech · ৳78L',
    category: 'Upcoming',
    priority: 'Medium',
    type: 'Deals',
    due: 'Thu, Nov 20',
    completed: false
  },
  {
    id: 't9',
    title: 'Check in with Rafiqul (+880 1912-789012) after board meeting',
    deal: 'ShopUp Cloud · ৳41L',
    category: 'Upcoming',
    priority: 'Low',
    type: 'Follow-ups',
    due: 'Fri, Nov 21',
    completed: false
  },
  {
    id: 't10',
    title: 'Review Q1 territory capacity plan for Dhaka & Chittagong',
    deal: 'Internal · Bangladesh Leadership',
    category: 'Upcoming',
    priority: 'Medium',
    type: 'Deals',
    due: 'Mon, Nov 24',
    completed: false
  },
  {
    id: 't11',
    title: 'Send SOC2 Type II report to bKash security',
    deal: 'bKash Enterprise · ৳56L',
    category: 'Completed',
    priority: 'Medium',
    type: 'Deals',
    due: 'Completed 9:15 AM',
    completed: true
  },
  {
    id: 't12',
    title: 'Log discovery call notes for Pathao Logistics',
    deal: 'Pathao Logistics · ৳33L',
    category: 'Completed',
    priority: 'Low',
    type: 'Deals',
    due: 'Completed Yesterday',
    completed: true
  }
];

export const INITIAL_THREADS = [
  {
    id: 'm1',
    name: 'Tanvir Ahmed',
    role: 'VP Operations',
    company: 'Pathao Logistics',
    phone: '+880 1712-345678',
    dealValue: '৳33 Lakh',
    stage: 'Proposal · 65%',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&auto=format&fit=crop&q=80',
    unread: true,
    time: '2m',
    preview: 'Can we include the 20 extra viewer seats in the annual enterprise tier?',
    messages: [
      { id: 1, sender: 'them', time: '10:14 AM', text: 'Hey team — thanks for sending over the Pathao rollout proposal yesterday.' },
      { id: 2, sender: 'them', time: '10:15 AM', text: 'Our CFO in Gulshan reviewed the 120-seat proposal and had one question before signing off.' },
      { id: 3, sender: 'me', time: '10:18 AM', text: 'Happy to help, Tanvir bhai! We can structure a phased ramp or lock in the multi-year BDT rate right away.' },
      { id: 4, sender: 'them', time: '10:21 AM', text: 'Can we include the 20 extra viewer seats in the annual tier? If that works, we can get signature by Friday.' },
      { id: 5, sender: 'me', time: '10:24 AM', text: 'Yes — I just got approval from our regional team to bundle 20 complimentary viewer seats. Sending the updated agreement now!' }
    ]
  },
  {
    id: 'm2',
    name: 'Nusrat Jahan',
    role: 'Head of Engineering',
    company: 'bKash Enterprise',
    phone: '+880 1819-456789',
    dealValue: '৳56 Lakh',
    stage: 'Negotiation · 80%',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80',
    unread: true,
    time: '18m',
    preview: 'Security signed off on the SOC2 package. Ready for final legal review.',
    messages: [
      { id: 1, sender: 'them', time: '9:40 AM', text: 'Security signed off on the SOC2 package. Ready for final legal review.' },
      { id: 2, sender: 'me', time: '9:45 AM', text: 'Fantastic news Nusrat apu! Our Dhaka legal counsel is standing by for the redlines.' }
    ]
  },
  {
    id: 'm3',
    name: 'Rafiqul Islam',
    role: 'CTO',
    company: 'Chaldal Systems',
    phone: '+880 1912-789012',
    dealValue: '৳1.12 Crore',
    stage: 'Negotiation · 90%',
    avatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?w=160&auto=format&fit=crop&q=80',
    unread: true,
    time: '1h',
    preview: 'Let’s lock in Thursday 11 AM for the architecture walkthrough.',
    messages: [
      { id: 1, sender: 'them', time: '8:30 AM', text: 'Let’s lock in Thursday 11 AM for the architecture walkthrough at our Banani office.' }
    ]
  },
  {
    id: 'm4',
    name: 'Farhana Rahman',
    role: 'Director of IT',
    company: 'Brain Station 23',
    phone: '+880 1623-890123',
    dealValue: '৳48 Lakh',
    stage: 'Qualified · 50%',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&auto=format&fit=crop&q=80',
    unread: false,
    time: '3h',
    preview: 'Received the SSO guide, testing in our staging sandbox today.',
    messages: [
      { id: 1, sender: 'them', time: 'Yesterday', text: 'Received the SSO guide, testing in our staging sandbox today.' }
    ]
  }
];
