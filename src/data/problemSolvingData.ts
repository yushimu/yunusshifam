export interface RawCleanRow {
  id: string;
  name: string;
  contact: string;
  city: string;
  status: string;
  statusType: 'error' | 'warning' | 'success';
}

export interface ProblemItem {
  id: string;
  title: string;
  desc: string;
  impactTag: string;
}

export interface ActionStep {
  stepNumber: number;
  title: string;
  desc: string;
  details: string[];
}

export interface BenefitItem {
  metric: string;
  label: string;
  desc: string;
}

export interface DashboardMetric {
  label: string;
  value: string;
  sublabel: string;
  change: string;
  isPositive: boolean;
}

export interface ProblemSolvingItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  datasetSize: string;
  category: string;
  badge: string;
  tagline: string;
  summary: string;
  tags: string[];
  problemsHeading: string;
  problems: ProblemItem[];
  actionsHeading: string;
  actions: ActionStep[];
  solutionsHeading: string;
  solutionsDesc: string;
  solutionHighlights: string[];
  benefitsHeading: string;
  benefits: BenefitItem[];
  dashboardMetrics: DashboardMetric[];
  rawRows: RawCleanRow[];
  cleanRows: RawCleanRow[];
}

export const PROBLEM_SOLVING_ITEMS: ProblemSolvingItem[] = [
  {
    id: 'ganda-industri-crm-cleaning',
    title: 'Standarisasi & De-Duplikasi 20.000+ Database CRM Pelanggan',
    client: 'PT Ganda Industri',
    industry: 'Manufaktur & Distribusi B2B',
    datasetSize: '20.450+ Baris Spreadsheet CRM',
    category: 'Data Cleansing & CRM Hygiene',
    badge: 'Studi Kasus Riil',
    tagline: 'Transformasi 20.000+ Baris Data CRM Berantakan Menjadi Single Source of Truth yang Siap Eksekusi',
    summary: 'Mendiagnosis, membersihkan inkonsistensi penulisan nama entitas, standardisasi format nomor telepon, normalisasi singkatan wilayah, dan mengeliminasi ribuan rekaman duplikat pada spreadsheet CRM klien.',
    tags: ['Spreadsheet Automation', 'Data Cleansing', 'Deduplikasi Fuzzy', 'Regex E.164', 'CRM Hygiene'],
    
    problemsHeading: 'Kendala Utama Pada Database Spreadsheet Awal:',
    problems: [
      {
        id: 'p-1',
        title: 'Tingkat Duplikasi Tinggi (Rekaman Kembar)',
        desc: 'Banyak klien terdaftar 2 hingga 4 kali dengan ejaan berbeda (misal: "pt. CAHAYA MAKMUR abadi" dan "PT Cahaya Makmur Abadi"), mengakibatkan risiko penagihan ganda dan follow-up membingungkan.',
        impactTag: '3.240 Data Duplikat'
      },
      {
        id: 'p-2',
        title: 'Format Nomor Telepon Acak-Acakan',
        desc: 'Pencatatan nomor tidak berpola (ada yang memakai strip 0812-88991122, spasi acak +62 811 2233 445, tanpa pemisah 081288991122, hingga digit terpotong), membuat blast WhatsApp & call center gagal kirim.',
        impactTag: '42% Kontak Gagal Blast'
      },
      {
        id: 'p-3',
        title: 'Inkonsistensi Huruf & Nama Entitas Tidak Beraturan',
        desc: 'Banyak nama badan usaha ditulis huruf kecil semua ("budi santoso (toko berkah)") atau huruf kapital campur aduk dengan keterangan tambahan liar di kolom nama resmi.',
        impactTag: 'Format Tidak Profesional'
      },
      {
        id: 'p-4',
        title: 'Singkatan Wilayah & Kota Tidak Baku',
        desc: 'Penulisan kota tidak seragam seperti "JKT SELATAN", "Sby", "Bandung Barat", dan "Bdg", sehingga manajemen tidak bisa menyaring atau memetakan omset per provinsi secara akurat.',
        impactTag: 'Analisis Segmentasi Buta'
      }
    ],

    actionsHeading: 'Langkah Sistematis Pembersihan Data (5-Step Methodology):',
    actions: [
      {
        stepNumber: 1,
        title: 'Data Audit & Profiling (20.000+ Baris)',
        desc: 'Melakukan pemindaian otomatis ke seluruh baris spreadsheet untuk mengelompokkan anomali: menemukan nilai kosong, format kontak abnormal, serta indeks redundansi nama.',
        details: [
          'Memetakan 20.450 total baris ke dalam kategori error, warning, dan valid',
          'Mengidentifikasi 3.240 baris potensial identitas kembar'
        ]
      },
      {
        stepNumber: 2,
        title: 'Normalisasi Teks & Standardisasi Huruf (Title Case & Regex)',
        desc: 'Menerapkan formula dan script regex untuk mengubah kapitalisasi menjadi Title Case baku, memisahkan label badan hukum (PT, CV, Toko), dan menghapus spasi ganda.',
        details: [
          'Standarisasi penulisan entitas legal: PT [Nama] dan CV [Nama]',
          'Pembersihan spasi liar di awal/akhir string (Trim & Clean)'
        ]
      },
      {
        stepNumber: 3,
        title: 'Pemformatan Kontak Telepon Baku E.164 (+62)',
        desc: 'Membersihkan seluruh karakter non-numerik (strip, titik, kurung, spasi) dan mereparasi awalan "08" atau "62" menjadi format internasional standar yang kompatibel dengan WhatsApp API.',
        details: [
          'Format seragam: +62 8xx-xxxx-xxxx',
          'Validasi panjang digit nomor seluler operator telekomunikasi Indonesia'
        ]
      },
      {
        stepNumber: 4,
        title: 'Penyelarasan Wilayah ke Master Direktori Resmi',
        desc: 'Mencocokkan singkatan non-standar (misal "Sby" -> "Kota Surabaya", "JKT SELATAN" -> "Kota Jakarta Selatan") ke dalam database master wilayah resmi Kemendagri / BPS.',
        details: [
          'Penambahan hierarki Provinsi & Kota/Kabupaten',
          '100% siap untuk visualisasi peta sebaran distribusi'
        ]
      },
      {
        stepNumber: 5,
        title: 'Algoritma Fuzzy Matching & De-Duplikasi Cerdas',
        desc: 'Menggabungkan baris kembar berdasarkan pencocokan nomor telepon unik dan kemiripan nama entitas leksikal, sekaligus mengonsolidasikan riwayat transaksi terlengkap.',
        details: [
          'Mengurangi 3.240 data dobel tanpa kehilangan riwayat transaksi penting',
          'Menciptakan Golden Record / Single Source of Truth bagi tim CRM'
        ]
      }
    ],

    solutionsHeading: 'Solusi Teknis & Pipeline yang Diterapkan:',
    solutionsDesc: 'Kami membangun pipeline data otomatis yang memadukan formula tingkat lanjut spreadsheet, Google Apps Script kustom, dan aturan validasi data ketat agar kualitas data tetap terjaga secara berkelanjutan.',
    solutionHighlights: [
      'Automated Cleansing Script: Sekali klik merapikan ribuan baris data baru secara instan',
      'Data Validation Rules: Form input guard yang mencegah staf mengetik nomor atau nama salah format',
      'Master Lookup Reference: Kamus wilayah dan direktori standar terintegrasi',
      'Deduplication Check Engine: Peringatan otomatis jika kontak atau nama baru sudah pernah terdaftar'
    ],

    benefitsHeading: 'Manfaat Nyata Setelah Data Selesai Dibenahi:',
    benefits: [
      {
        metric: '99.4%',
        label: 'Tingkat Keberhasilan Blast Kontak',
        desc: 'Kampanye promosi WhatsApp & email penawaran terkirim mulus tanpa nomor terpental (bouncing).'
      },
      {
        metric: '15 Jam/Minggu',
        label: 'Waktu Tim Terselamatkan',
        desc: 'Staf admin dan sales tidak perlu lagi mencari manual kontak yang valid atau mengecek rekaman kembar.'
      },
      {
        metric: '0 Kasus',
        label: 'Eliminasi Tagihan Ganda',
        desc: 'Mencegah insiden finansial penagihan ganda (double billing) ke klien yang sama akibat data terduplikasi.'
      },
      {
        metric: '100% Presisi',
        label: 'Laporan Segmentasi Wilayah',
        desc: 'Direksi PT Ganda Industri kini dapat memetakan potensi pasar per provinsi secara akurat tanpa data kabur.'
      }
    ],

    dashboardMetrics: [
      {
        label: 'Total Baris Data Mentah',
        value: '20.450',
        sublabel: 'Sebelum pembersihan & profiling',
        change: 'Spreadsheet Awal',
        isPositive: false
      },
      {
        label: 'Data Bersih Unik (Final)',
        value: '17.210',
        sublabel: 'Single Source of Truth terverifikasi',
        change: '-3.240 Duplikat',
        isPositive: true
      },
      {
        label: 'Akurasi Format Nomor',
        value: '100%',
        sublabel: 'Format baku internasional E.164 (+62)',
        change: '+58% Peningkatan',
        isPositive: true
      },
      {
        label: 'Standardisasi Wilayah',
        value: '100%',
        sublabel: 'Tersinkronisasi kode wilayah resmi',
        change: 'Siap Analisis BI',
        isPositive: true
      }
    ],

    rawRows: [
      {
        id: '01',
        name: 'pt. CAHAYA MAKMUR abadi',
        contact: '0812-88991122',
        city: 'JKT SELATAN',
        status: 'Duplikat (2x di baris 04)',
        statusType: 'error'
      },
      {
        id: '02',
        name: 'budi santoso (toko berkah)',
        contact: '08571234567',
        city: 'Bandung Barat',
        status: 'Format Huruf Tidak Rapi',
        statusType: 'warning'
      },
      {
        id: '03',
        name: 'CV. Sumber Rejeki',
        contact: '+62 811 2233 445',
        city: 'Sby',
        status: 'Singkatan Kota Tidak Baku',
        statusType: 'warning'
      },
      {
        id: '04',
        name: 'PT Cahaya Makmur Abadi',
        contact: '081288991122',
        city: 'Jakarta Selatan',
        status: 'Rekaman Kembar Identitas',
        statusType: 'error'
      }
    ],

    cleanRows: [
      {
        id: '01',
        name: 'PT Cahaya Makmur Abadi',
        contact: '+62 812-8899-1122',
        city: 'Kota Jakarta Selatan, DKI Jakarta',
        status: 'Terverifikasi & De-duplikasi (Merged)',
        statusType: 'success'
      },
      {
        id: '02',
        name: 'Budi Santoso - Toko Berkah',
        contact: '+62 857-1234-5670',
        city: 'Kabupaten Bandung Barat, Jawa Barat',
        status: 'Nama & Nomor Tervalidasi',
        statusType: 'success'
      },
      {
        id: '03',
        name: 'CV Sumber Rejeki',
        contact: '+62 811-2233-4450',
        city: 'Kota Surabaya, Jawa Timur',
        status: 'Wilayah Baku Terstandarisasi',
        statusType: 'success'
      },
      {
        id: '04',
        name: 'PT Cahaya Makmur Abadi [Arsip]',
        contact: '+62 812-8899-1122',
        city: 'Kota Jakarta Selatan, DKI Jakarta',
        status: 'Riwayat Digabung ke ID 01',
        statusType: 'success'
      }
    ]
  }
];
