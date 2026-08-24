export type InvitationSide = 'groom' | 'bride' | 'shared';
export type CoupleMember = 'groom' | 'bride';

export type ParentNames = {
  father: string;
  mother: string;
  address: string;
};

export type PersonInfo = {
  fullName: string;
  shortName: string;
  parents: ParentNames;
};

export type EventInfo = {
  ceremonyLabel: string;
  ceremonyTimeLabel: string;
  ceremonyWeekdayLabel: string;
  ceremonyDayLabel: string;
  ceremonyMonthLabel: string;
  ceremonyYearLabel: string;
  lunarDateLabel: string;
  eventLabel?: string;
  receptionTimeLabel: string;
  receptionWeekdayLabel: string;
  receptionDayLabel: string;
  receptionMonthLabel: string;
  receptionYearLabel: string;
  locationTitle: string;
  locationLines: string[];
  mapUrl: string;
  schedule: Array<{ time: string; text: string }>;
};

export type BankAccount = {
  owner: string;
  bank: string;
  accountNumber: string;
  qrImage: string;
};

export type InvitationConfig = {
  side: InvitationSide;
  title: string;
  noticeLabel: string;
  announcementLabel: string;
  invitationLabel: string;
  familyLabel: string;
  familyGreeting: string;
  groom: PersonInfo;
  bride: PersonInfo;
  coupleOrder: CoupleMember[];
  familyOrder: CoupleMember[];
  roleLabels: Record<CoupleMember, string>;
  event?: EventInfo;
  events?: EventInfo[];
  bankAccounts: BankAccount[];
  assets: {
    heroImage: string;
    envelopeImage: string;
    coverBackgroundImage: string;
    albumImages: string[];
  };
};

const groom: PersonInfo = {
  fullName: 'Nguyễn Hoài Vũ',
  shortName: 'Hoài Vũ',
  parents: {
    father: 'Nguyễn Văn Cường',
    mother: 'Thái Thị Cường',
    address: 'Phú An Nam 2, Diên Khánh, Khánh Hòa',
  },
};

const bride: PersonInfo = {
  fullName: 'Nguyễn Minh Thục Trinh',
  shortName: 'Thục Trinh',
  parents: {
    father: 'Nguyễn Thế Hùng',
    mother: 'Vũ Thanh Thủy',
    address: '50/58 Trần Quý Cáp, Phường 2, Bảo Lộc, Lâm Đồng',
  },
};

const bankAccounts: BankAccount[] = [
  {
    owner: 'NGUYỄN HOÀI VŨ',
    bank: 'Vietcombank',
    accountNumber: '0061001176403',
    qrImage: '/images/qr_chu_re_only.png',
  },
  {
    owner: 'NGUYỄN MINH THỤC TRINH',
    bank: 'MBBank',
    accountNumber: '9999999280898',
    qrImage: '/images/qr_co_dau_only.png',
  },
];

const brideEvent: EventInfo = {
  eventLabel: 'LỄ VU QUY',
  ceremonyLabel: 'HÔN LỄ ĐƯỢC CỬ HÀNH TẠI TƯ GIA',
  ceremonyTimeLabel: '08:30',
  ceremonyWeekdayLabel: 'THỨ BẢY',
  ceremonyDayLabel: '12',
  ceremonyMonthLabel: 'THÁNG 09',
  ceremonyYearLabel: '2026',
  lunarDateLabel: '(Nhằm ngày 02 tháng 08 năm Bính Ngọ)',
  receptionTimeLabel: '11:30',
  receptionWeekdayLabel: 'THỨ BẢY',
  receptionDayLabel: '12',
  receptionMonthLabel: 'THÁNG 09',
  receptionYearLabel: '2026',
  locationTitle: 'TƯ GIA NHÀ GÁI',
  locationLines: [
    '50/58 TRẦN QUÝ CÁP - PHƯỜNG 2 BẢO LỘC',
    'T. LÂM ĐỒNG',
  ],
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6492597956967!2d107.79253507554627!3d11.576982243916527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3173f70060bec453%3A0x665aef8416e867dc!2zTmjDoCBj4bunYSBDaGluIENoaW4!5e0!3m2!1svi!2s!4v1787320716561!5m2!1svi!2s',
  schedule: [
    { time: '08:30', text: 'Hôn lễ tại tư gia nhà gái' },
    { time: '11:30', text: 'Tiệc cưới' },
  ],
};

const groomEvent: EventInfo = {
  eventLabel: 'LỄ TÂN HÔN',
  ceremonyLabel: 'HÔN LỄ ĐƯỢC CỬ HÀNH TẠI TƯ GIA',
  ceremonyTimeLabel: '09:00',
  ceremonyWeekdayLabel: 'THỨ HAI',
  ceremonyDayLabel: '14',
  ceremonyMonthLabel: 'THÁNG 09',
  ceremonyYearLabel: '2026',
  lunarDateLabel: '(Nhằm ngày 04 tháng 08 năm Bính Ngọ)',
  receptionTimeLabel: '17:30',
  receptionWeekdayLabel: 'THỨ HAI',
  receptionDayLabel: '14',
  receptionMonthLabel: 'THÁNG 09',
  receptionYearLabel: '2026',
  locationTitle: 'NHÀ HÀNG TIỆC CƯỚI',
  locationLines: [
    'PHÚC THỊNH AN',
    'SẢNH AN BÌNH (SÂN VƯỜN)',
    'CÂY SỐ 9 - ĐƯỜNG 23/10 - DIÊN KHÁNH - KHÁNH HÒA',
  ],
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.0905503286328!2d109.1198033028093!3d12.256937909236834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31705cf4a682fa3f%3A0xf6e1499fabcdc362!2zVHJ1bmcgVMOibSBUaeG7h2MgQ8aw4bubaSBQaMO6YyBUaOG7i25oIEFu!5e0!3m2!1svi!2s!4v1787320435272!5m2!1svi!2s',
  schedule: [
    { time: '17:30', text: 'Đón khách' },
    { time: '18:00', text: 'Khai tiệc' },
    { time: '18:30', text: 'Phát biểu & Lễ tân hôn' },
    { time: '19:00', text: 'Phục vụ tiệc & Âm nhạc' },
    { time: '20:30', text: 'Chụp ảnh kỷ niệm & Tiễn khách' },
  ],
};

const baseConfig = {
  groom,
  bride,
  bankAccounts,
  assets: {
    heroImage: '/images/wedding-cover-4151.webp',
    envelopeImage: '/images/envelopes-perfect.png',
    coverBackgroundImage: '/images/wedding-cover-4151.webp',
    albumImages: [
      '/images/wedding-album-3922.webp',
      '/images/wedding-album-4083.webp',
      '/images/wedding-album-4196.webp',
      '/images/wedding-album-4445.webp',
    ],
  },
} satisfies Pick<InvitationConfig, 'groom' | 'bride' | 'bankAccounts' | 'assets'>;

export const invitationConfigs: Record<InvitationSide, InvitationConfig> = {
  bride: {
    ...baseConfig,
    side: 'bride',
    title: 'LỄ VU QUY',
    noticeLabel: 'TRÂN TRỌNG THÔNG BÁO VỀ',
    announcementLabel: 'CỦA CON CHÚNG TÔI',
    invitationLabel: 'Trân trọng kính mời',
    familyLabel: 'NHÀ GÁI',
    familyGreeting: 'Trân trọng kính mời Quý khách đến dự lễ vu quy.',
    coupleOrder: ['bride', 'groom'],
    familyOrder: ['bride', 'groom'],
    roleLabels: { bride: 'Trưởng nữ', groom: 'Trưởng nam' },
    event: brideEvent,
  },
  groom: {
    ...baseConfig,
    side: 'groom',
    title: 'LỄ TÂN HÔN',
    noticeLabel: 'TRÂN TRỌNG THÔNG BÁO VỀ',
    announcementLabel: 'CỦA CON CHÚNG TÔI',
    invitationLabel: 'Trân trọng kính mời',
    familyLabel: 'NHÀ TRAI',
    familyGreeting: 'Trân trọng kính mời Quý khách đến dự lễ tân hôn.',
    coupleOrder: ['groom', 'bride'],
    familyOrder: ['groom', 'bride'],
    roleLabels: { bride: 'Trưởng nữ', groom: 'Trưởng nam' },
    event: groomEvent,
  },
  shared: {
    ...baseConfig,
    side: 'shared',
    title: 'LỄ CƯỚI',
    noticeLabel: 'TRÂN TRỌNG THÔNG BÁO VỀ',
    announcementLabel: 'CỦA HAI GIA ĐÌNH',
    invitationLabel: 'Trân trọng kính mời',
    familyLabel: 'NIỀM VUI CHUNG CỦA HAI GIA ĐÌNH',
    familyGreeting: 'Trân trọng kính mời Quý khách đến chung vui cùng gia đình chúng tôi.',
    coupleOrder: ['groom', 'bride'],
    familyOrder: ['bride', 'groom'],
    roleLabels: { bride: 'Trưởng nữ', groom: 'Trưởng nam' },
    events: [brideEvent, groomEvent],
  },
};

export function getInvitationConfig(value?: string | null): InvitationConfig {
  if (value === 'groom' || value === 'bride' || value === 'shared') {
    return invitationConfigs[value];
  }
  return invitationConfigs.shared;
}
