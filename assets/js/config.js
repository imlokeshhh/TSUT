/* ==========================================================================
   THE SOUND OF UNIVERSE TRUST — SITE SETTINGS
   Edit the values below. You never need to touch index.html for these.
   Anything left as '' (empty) is hidden automatically or shows a
   "coming soon" note on the website.
   ========================================================================== */
window.TSU_CONFIG = {
  /* ---------- Contact ---------- */
  phones: [
    { name: 'Mr. Arun M',       number: '+917418827023', display: '74188 27023' },
    { name: 'Mr. Gandeeban L',  number: '+919080625284', display: '90806 25284' }
  ],
  whatsapp: '917418827023',        // country code + number, no "+" or spaces
  email: '',                        // e.g. 'contact@soundofuniverse.org'  (TODO)
  address: 'Ranipet, Tamil Nadu, India – 632404',
  mapQuery: 'Ranipet, Tamil Nadu 632404',

  /* ---------- Volunteer sign-up (Google Form) ---------- */
  volunteerForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeGB0p2sLJgRVh8DNlAD56fMIsmN9c8xz8W3l_Z-59EhsDPxQ/viewform',

  /* ---------- Social links (leave '' to hide) ---------- */
  social: {
    instagram: 'https://www.instagram.com/thesoundofuniversetrust/',
    youtube: 'https://www.youtube.com/@TheSoundofUniverseTrust',
    x: 'https://x.com/tsutrust',
    facebook: ''
  },

  /* ---------- Online donations: Razorpay ----------
     Option A (simplest): create a "Payment Page" in the Razorpay dashboard
       and paste its link, e.g. 'https://rzp.io/l/soundofuniverse'
     Option B: paste your LIVE Key ID (starts with 'rzp_live_') to open the
       Razorpay checkout popup with the amount the donor picked.
       (Turn on "auto-capture" in Razorpay settings for Option B.)
     If both are empty, the Donate Online tab shows "coming soon". */
  razorpay: {
    paymentLink: '',   // TODO
    keyId: ''          // TODO (never put the Key SECRET here)
  },

  /* ---------- UPI ---------- */
  upi: {
    id: '',                                  // TODO e.g. 'soundofuniverse@sbi'
    payeeName: 'The Sound of Universe Trust',
    qrImage: 'assets/img/upi-qr.png'         // TODO save your QR with this name
  },

  /* ---------- Bank transfer ---------- */
  bank: {
    accountName: 'The Sound of Universe Trust',
    accountNumber: '45281773815',
    ifsc: 'SBIN0002262',
    micr: '632002025',
    bankName: 'State Bank of India',
    branch: 'Ranipet'
  },

  /* ---------- Impact numbers ----------
     PLACEHOLDERS for "packets" and "volunteers" — replace with real figures. */
  stats: {
    packets: 100,      // TODO real number   (shown as "100+")
    volunteers: 20,    // TODO real number   (shown as "20+")
    focusAreas: 13,    // from the Trust Deed objectives
    founded: 2026
  }
};
