import Image from "next/image";
import { Navbar } from "../../component/Navbar";
import { navItems } from "../../../data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { stockNews } from "../../../data/data";

export default function News() {
  return (
    <div className="flex justify-center">
      <Navbar navItems={navItems} />
      <div className="h-[200vh] flex items-center justify-center text-2xl"></div>

      <div className="w-full p-15 mt-10 ml-6 mr-6 flex flex-col gap-5">
        {stockNews.map((news, index) => (
          <Card
            key={index}
            className="p-4 shadow-md w-full overflow-hidden flex flex-rows gap-0 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >

            {/* News */}
            <div className="w-full h-[60px] sm:h-[80px] relative overflow-hidden rounded-xl">
              <Image
                //src={news.imageUrl}
                src="/logo.png"
                alt="News Image"
                layout="fill"
                objectFit="cover"
                className="w-full transition duration-300 hover:brightness-110"
              />
            </div>

            {/* Content */}
            <CardHeader className="p-2">
              <CardTitle className="text-xs sm:text-sm font-semibold">
                <a href={news.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {news.title}
                </a>
              </CardTitle>
              <p className="text-gray-500 text-xs">
                {news.source} | {news.date}
              </p>
            </CardHeader>

            {/* Changes */}
            <CardContent className="flex gap-2 flex-wrap p-1">
              {news.stocks.map((stock, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 text-xs font-medium rounded-lg ${
                    stock.change >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {stock.name} {stock.change > 0 ? `+${stock.change}` : stock.change}%
                </span>
              ))}
            </CardContent>
            
          </Card>
        ))}
      </div>

    </div>
  );
}
