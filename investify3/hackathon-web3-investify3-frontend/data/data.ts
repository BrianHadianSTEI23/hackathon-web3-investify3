import { FaShieldAlt, FaBolt, FaGlobe, FaChartLine } from "react-icons/fa";

export const tradeMode = [
  "Buy", 
  "Sell",
  "Convert"
]

export const cryptoCurrencies = [
  "Solana",
  "Ethereum",
  "ICP"
]

export const navItems = [
    { name: "Invest", link: "/invest" },
    { name: "News", link: "/news" },
    { name: "Forum", link: "/forum" },
];

export type Comment = {
    id: number;
    user: {
      name: string;
      avatar: string;
    };
    date: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
  };
  
  export const comments: Comment[] = [
    {
      id: 1,
      user: {
        name: "Dindaa",
        avatar: "/avatar1.jpg",
      },
      date: "2 days ago",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      image: "/flower.jpg",
      likes: 12,
      comments: 12,
    },
    {
      id: 2,
      user: {
        name: "Briann",
        avatar: "/avatar2.jpg",
      },
      date: "2 days ago",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      likes: 12,
      comments: 12,
    },
  ];

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
      title: "Apple Shares Surge After Record iPhone Sales",
      source: "Bloomberg",
      date: "5 hours ago",
      link: "https://www.bloomberg.com/news/articles/apple-record-iphone-sales",
      imageUrl: "/news-image-7.jpg",
      stocks: [
        { name: "AAPL", change: 3.5 }
      ]
    },
    {
      title: "Tesla Stock Drops Amidst Production Challenges",
      source: "Reuters",
      date: "3 hours ago",
      link: "https://www.reuters.com/business/tesla-stock-drops-production-challenges",
      imageUrl: "/news-image-8.jpg",
      stocks: [
        { name: "TSLA", change: -2.1 }
      ]
    },
    {
      title: "Microsoft Acquires Activision Blizzard: Impact on Stocks",
      source: "Financial Times",
      date: "2 hours ago",
      link: "https://www.ft.com/content/microsoft-activision-blizzard-acquisition",
      imageUrl: "/news-image-9.jpg",
      stocks: [
        { name: "MSFT", change: 1.8 },
        { name: "ATVI", change: 4.0 }
      ]
    },
    {
      title: "NVIDIA Hits All-Time High as AI Demand Soars",
      source: "CNBC",
      date: "1 hour ago",
      link: "https://www.cnbc.com/nvidia-all-time-high-ai-demand",
      imageUrl: "/news-image-10.jpg",
      stocks: [
        { name: "NVDA", change: 5.6 }
      ]
    },
    {
      title: "Amazon Sees Sluggish Growth in Q4 Earnings Report",
      source: "The Wall Street Journal",
      date: "30 minutes ago",
      link: "https://www.wsj.com/articles/amazon-q4-earnings-sluggish-growth",
      imageUrl: "/news-image-11.jpg",
      stocks: [
        { name: "AMZN", change: -1.7 }
      ]
    }
  ];
  
  

export const profileData = {
    username: "Pacar Heleni",
    fullName: "Alastair Warren Tjajhrir",
    email: "alas@mungil.com",
    profilePicture: "/logo.png", 
    id: "XXXXXXXXXX",
    walletId: "XXXXXXXXXX",
  };
  

export const data = [
    { month: "Jan", "2023": 15000000, "2024": 25000000 },
    { month: "Feb", "2023": 20000000, "2024": 30000000 },
    { month: "Mar", "2023": 18000000, "2024": 35000000 },
    { month: "Apr", "2023": 22000000, "2024": 27000000 },
    { month: "May", "2023": 25000000, "2024": 32000000 },
    { month: "Jun", "2023": 38000000, "2024": 28000000 },
    { month: "Jul", "2023": 30000000, "2024": 26000000 },
    { month: "Aug", "2023": 27000000, "2024": 31000000 },
    { month: "Sep", "2023": 22000000, "2024": 29000000 },
    { month: "Oct", "2023": 26000000, "2024": 12000000 },
    { month: "Nov", "2023": 24000000, "2024": 33000000 },
    { month: "Dec", "2023": 28000000, "2024": 35000000 },
];

export const orderStats = {
  totalOrders: {
    stocks: 1200000,
    mutualFunds: 800000,
    bonds: 500000,
  },
  totalReturns: {
    stocks: 300000,
    mutualFunds: 200000,
    bonds: 100000,
  },
  totalRevenue: {
    stocks: 1500000,
    mutualFunds: 1000000,
    bonds: 7500000,
  },
};

export const whyChooseFeatures = [
    {
        icon: FaShieldAlt,
        title: "Secure & Transparent",
        description: "Powered by blockchain and smart contracts for a tamper-proof investment experience."
    },
    {
        icon: FaBolt,
        title: "Fast Transactions",
        description: "Execute trades in real-time with low fees and no middlemen slowing you down."
    },
    {
        icon: FaGlobe,
        title: "Global Access",
        description: "Invest from anywhere in the world, unrestricted by traditional financial barriers."
    },
    {
        icon: FaChartLine,
        title: "AI-Powered Insights",
        description: "Get real-time analytics and AI-driven investment recommendations tailored for you."
    }
];


export const portfolioData = {
  labels: ["Stocks", "Bonds", "Mutual Funds", "Cryptocurrency"],
  datasets: [
    {
      data: [50, 30, 20], // Persentase kepemilikan
      backgroundColor: ["#695192", "#6785F2", "#FFCDCD"],
      hoverBackgroundColor: ["#5B3E8A", "#5673E1", "#FFB3B3"],
      borderWidth: 2,
    },
  ],
};

export const trendingInvestments = [
  {
    name: "AAPL",
    fullName: "Apple Inc.",
    price: "$175.32",
    change: "+3.2%",
    isUp: true,
  },
  {
    name: "TSLA",
    fullName: "Tesla Inc.",
    price: "$789.45",
    change: "+5.8%",
    isUp: true,
  },
  {
    name: "ETH",
    fullName: "Ethereum",
    price: "$2,480.12",
    change: "+4.3%",
    isUp: true,
  },
];

export const categories = ["Stocks", "Bonds", "Mutual Funds", "Cryptocurrency"];


export const trendingToday = [
  { name: "AAPL", price: "8,600", change: "+51 (3.23%)", isUp: true },
  { name: "AAPL", price: "8,600", change: "+51 (3.23%)", isUp: true },
  { name: "AAPL", price: "8,600", change: "+51 (3.23%)", isUp: true },
  { name: "AAPL", price: "8,600", change: "+51 (3.23%)", isUp: true },
];

export const stockList = [
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true }
];

export const stockPrices = {
  AAPL: 175, // Harga per saham dalam USD
  MSFT: 320,
  GOOGL: 130,
};

export const conversionRates = {
  USD: 1, // USD ke USD (tetap sama)
  EUR: 0.92, // 1 USD = 0.92 EUR
  GBP: 0.79, // 1 USD = 0.79 GBP
  BTC: 0.000025, // 1 USD = 0.000025 BTC
  ETH: 0.00035,// 1 USD = 0.00035 ETH
};