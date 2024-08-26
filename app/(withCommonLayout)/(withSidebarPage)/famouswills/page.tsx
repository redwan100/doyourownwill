import SidebarPageTitle from "@/app/components/shared/SidebarPageTitle";
import Link from "next/link";

const items = [
  {
    title: "Michael Jackson (1958-2009)",
    href: "#",
    desc: 'Singer-songwriter, record producer, musical arranger, dancer, choreographer, actor, author, businessman, financier, philanthropist, inventor, "King of Pop"',
  },
  {
    title: "John F. Kennedy, Jr. (1960-1999)",
    href: "#",
    desc: "John F. Kennedy, Jr. planned to leave the bulk of his estate to his wife, Caroline Bessette-Kennedy, but they died together in a plane crash last July without leaving any children. Therefore, his property will go to the children of his sister.",
  },
  {
    title: "Frank Sinatra (1999)",
    href: "#",
    desc: "Frank Sinatra (1999)",
  },
  {
    title: "Joe DiMaggio (1914-1999)",
    href: "#",
    desc: `"The Yankee Clipper" set up trusts for Joseph Jr., his grandchildren Katherine and Paula, and his great-grandchildren, Kendall and Mitchell Stein, and Valerie and Vanessa Hamra. The remainder of DiMaggio's estate will be divided among his son and his two grandchildren.`,
  },
  {
    title: "Linda McCartney (1942-1998)",
    href: "#",
    desc: "She left her fortune to her husband Paul and set up a trust that makes her estate virtually exempt from taxes.",
  },
  {
    title: "Diana, Princess of Wales (1961-1997)",
    href: "#",
    desc: "Princess Diana left behind a 21.5 million pound (approximately $35 million) fortune, most of which was bequeathed to her sons, Prince William and Prince Harry in trust. This is a long document which also sets aside personal items for her godchildren.",
  },
  {
    title: "Harry Helmsley (1997)",
    href: "#",
    desc: "The billionaire real estate tycoon who owned the Empire State Building and many of New York City's posh hotels, died Jan. 4, 1997. He left his estate to his wife, Leona Helmsley, who is also the executor of the will.",
  },
  {
    title: "David Packard (1912-1996)",
    href: "#",
    desc: "One of the founders of Hewlett-Packard. His will leaves his holdings to the charitable foundation named for him and his late wife.",
  },
  {
    title: "Jerry Garcia (1942-1995)",
    href: "#",
    desc: "JThe leader of the Grateful Dead. The estate and his second wife are still fighting it out in the courts. In his will he remembers his friends and family through gifts including his guitars.",
  },
  {
    title: "Warren Burger (1907-1995)",
    href: "#",
    desc: "The former Chief Justice of the Supreme Court may have been an ardent jurist, but he was certainly not an estate planner. He left behind a paltry self-written, 176-word will. In it, he failed to make proper provisions for estate taxes and did not include a grant of powers for his executors - a mistake that cost his estate thousands in fees.",
  },
  {
    title: "Jacqueline Kennedy Onassis (1929-1994)",
    href: "#",
    desc: "As first lady and then a billionaire heiress, her will makes specific reference to many personal and artistic items.",
  },
  {
    title: "Richard Nixon (1913-1994)",
    href: "#",
    desc: "Remember those pesky notes? Here he gives specific instructions for the handling and disposal of them and the records.",
  },
  {
    title: "Doris Duke (1913-1993)",
    href: "#",
    desc: "The tobacco heiress with a $1.2 billion estate. A New York judge ordered the removal of two co-executors after fiscal mismanagement.",
  },
  {
    title: "John Lennon (1940-1980)",
    href: "#",
    desc: "The Beatles' singer, songwriter and guitarist, left most of his possessions to Yoko.",
  },
  {
    title: "Elvis Presley (1935-1977)",
    href: "#",
    desc: 'From pauper to prince (or "King"), he left much of his fortune to members of his family.',
  },
  {
    title: "Walt Disney (1901-1966)",
    href: "#",
    desc: "The creator of Mickey Mouse, half of his wealth went to his family with the other half going to a charitable foundation.",
  },
  {
    title: "Marilyn Monroe (1926-1962)",
    href: "#",
    desc: "She committed suicide in 1962. Her will leaves most of her fortune to her friends and family.",
  },
  {
    title: '"Shoeless" Joe Jackson (1889-1951)',
    href: "#",
    desc: 'The famous baseball player who was banned from the game for his part in the "Black Sox Scandal" of the 1919 World Series.',
  },
  {
    title: "Babe Ruth (1895-1948)",
    href: "#",
    desc: "The home run king. He established and endowed the Babe Ruth Foundation.",
  },
  {
    title: "Napoleon Bonaparte (1821)",
    href: "#",
    desc: "The Emperor of France leaves his collection of swords and memorabilia in this one. Reading this will provides a true history lesson.",
  },
  {
    title: "Benjamin Franklin (1789)",
    href: "#",
    desc: "Yes, wills have been around for a while and Mr. Franklin was quite a character. His will is wordy but interesting and gives you a unique glimpse of life in those times.",
  },
  {
    title: "John F. Kennedy (1917-1963)",
    href: "#",
    desc: "I give and bequeath unto my wife, JACQUELINE B. KENNEDY, if she survives me, the sum of Twenty-Five Thousand ($25,000.00) Dollars, together with all of my personal effects, furniture, furnishings, silverware, dishes, china, glassware and linens, which I may own at the time of my death.",
  },
  {
    title: "Jim Morrison (1943-1971)",
    href: "#",
    desc: "Unmarried and no children, Jim left everything to his girlfriend, Pamela Courson",
  },
];

const FamousWillsPage = () => {
  return (
    <div>
      <SidebarPageTitle title="Trivia (Famous Wills)" />
      <div className="mt-4">
        <p className="text-sm text-pera sm:text-base mb-3">
          From our curiosity bin...the Wills below provide an interesting
          glimpse into history and the lives of the rich and famous. Organized
          from newest to oldest.
        </p>

        <div className="space-y-4">
          {items.map((item) => {
            const strArr = item.title.split("(");

            // console.log(first);
            return (
              <div
                key={item.title}
                className="border border-gray-200 rounded-sm space-y-3 py-5 px-4"
              >
                <h3
                  className="font-bold
                "
                >
                  <Link href={item.href} className="text-red-700 underline">
                    {strArr[0]}
                  </Link>{" "}
                  (${strArr[1]}
                </h3>
                <p className="text-sm text-pera sm:text-base">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FamousWillsPage;
