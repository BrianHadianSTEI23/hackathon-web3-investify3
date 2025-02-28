export const navItems = [
    { name: "Invest", link: "/invest" },
    { name: "News", link: "/news" },
    { name: "Forum", link: "/forum" },
];

export const orderStats = {
    totalOrders: "Rp23,235,050",
    totalReturns: "Rp5,235,050",
    totalRevenue: "Rp27,750,000",
  };

  export interface StockChange {
    name: string;
    change: number;
  }
  
  export interface StockNews {
    title: string;
    source: string;
    date: string;
    link: string;
    imageUrl: string;
    stocks: StockChange[];
  }
  
  export const stockNews: StockNews[] = [
    {
      title: "Mengukur Dampak Peluncuran Bank Emas terhadap Kinerja Saham HRTA, ANTM & BRIS",
      source: "Bisnis.com",
      date: "14 jam lalu",
      link: "https://market.bisnis.com/read/20250226/189/1842903/mengukur-dampak-peluncuran-bank-emas-terhadap-kinerja-saham-hrta-antm-bris",
      imageUrl: "/news-image-1.jpg",
      stocks: [
        { name: "BRIS", change: -4.53 },
        { name: "ANTM", change: 2.35 }
      ]
    },
    {
      title: "Cek Rekomendasi Saham ANTM dan HRTA, Setelah Bullion Bank Resmi Hadir",
      source: "Kontan.co.id",
      date: "12 jam lalu",
      link: "https://investasi.kontan.co.id/news/cek-rekomendasi-saham-antm-dan-hrta-setelah-bullion-bank-resmi-hadir",
      imageUrl: "/news-image-2.jpg",
      stocks: [
        { name: "ANTM", change: 1.8 },
        { name: "HRTA", change: 2.3 }
      ]
    },
    {
        title: "IHSG Hari Ini Ditutup Menguat, Saham BBCA dan BBRI Naik Signifikan",
        source: "CNBC Indonesia",
        date: "10 jam lalu",
        link: "https://www.cnbcindonesia.com/market/20250226/ihsg-hari-ini-ditutup-menguat-saham-bbca-dan-bbri-naik-signifikan",
        imageUrl: "/news-image-3.jpg",
        stocks: [
          { name: "BBCA", change: 1.2 },
          { name: "BBRI", change: 2.1 }
        ]
      },
      {
        title: "Investor Asing Serok Saham TLKM dan GOTO, Ada Apa?",
        source: "Detik Finance",
        date: "8 jam lalu",
        link: "https://finance.detik.com/bursa-dan-valas/d-6603908/investor-asing-serok-saham-tlkm-dan-goto-ada-apa",
        imageUrl: "/news-image-4.jpg",
        stocks: [
          { name: "TLKM", change: 1.7 },
          { name: "GOTO", change: 3.2 }
        ]
      },
      {
        title: "Saham Bank Jago (ARTO) Melonjak 5% Setelah Laporan Keuangan Kuartal IV",
        source: "Kompas.com",
        date: "6 jam lalu",
        link: "https://money.kompas.com/read/20250226/112530426/saham-bank-jago-arto-melonjak-5-setelah-laporan-keuangan-kuartal-iv",
        imageUrl: "/news-image-5.jpg",
        stocks: [
          { name: "ARTO", change: 5.0 },
          { name: "BBRI", change: 1.5 }
        ]
      },
      {
        title: "Saham ASII dan UNVR Anjlok, Apa Penyebabnya?",
        source: "Liputan6",
        date: "4 jam lalu",
        link: "https://www.liputan6.com/bisnis/read/5024092/saham-asii-dan-unvr-anjlok-apa-penyebabnya",
        imageUrl: "/news-image-6.jpg",
        stocks: [
          { name: "ASII", change: -2.8 },
          { name: "UNVR", change: -3.4 }
        ]
      }
  ];
  