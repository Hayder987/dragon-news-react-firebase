import Marquee from "react-fast-marquee";

const HeaderMarquee = () => {
    return (
        <div className="flex items-center gap-4 bg-gray-200 p-3">
            <button className="bg-[#D72050] text-white text-xl font-medium px-4 py-2">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
              <div className="flex gap-10">
                <p className="font-semibold">Match Highlights: Germany vs Spain — as it
                   happened   ! 
                    Match Highlights: Germany vs Spain as...</p>
                    <p className="font-semibold"> it
                   happened   ! 
                    Match Highlights: Germany vs Spain as...</p>
              </div>
            </Marquee>
            
        </div>
    );
};

export default HeaderMarquee;