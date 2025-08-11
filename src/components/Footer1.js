import Sajjad from "../assets/images/sajjad.jpg";
import Title1 from "./Title1";
const Footer1 = () => {
  return (
    <div className="flex flex-col">
      <div className="self-start mr-[10%]">
        <Title1 text={"راه های ارتباط با من:"} />
      </div>
      <div className="flex flex-col-reverse justify-center items-start bg-slate-800  p-6 rounded-2xl shadow-[0_40px_90px_-30px_rgba(0,0,0,0.15)] shadow-black text-right mx-auto mb-1 w-[80%] mt-5 md:flex-row">
        <div className="text-white md:w-1/2 self-center w-[80%]">
          <h2 className="text-2xl">سلام، من سجاد حسینی هستم</h2>
          <h2 className="text-lg text-lightGreen">
            توسعه دهنده بازی با استفاده از unity و برنامه نویس #C
          </h2>
          <div className="text-[15px] text-slate-200">
            من سجاد حسینی هستم و 19 سال سن دارم و دانشجوی رشته ی ریاضیات و
            کاربردها از دانشگاه علم و صنعت هستم. یک بازی‌ساز، که در حال حاضر ۶
            سال هست درگیر بازی‌سازی با Unity هستم و ۵ سال هست که برنامه‌نویسی
            می‌کنم. دارای گواهی بازی‌سازی از مجتمع فنی تهران با نمره ۱۰۰. چند
            بازی ساده در مارکت منتشر کرده‌ام. علاقه‌ زیادی به کار تیمی دارم.
          </div>
        </div>
        <img
          src={Sajjad}
          alt="Sajjad"
          className=" w-[150px] h-[150px] rounded-full self-center mb-5 md:mb-0 mr-0 md:mr-5"
        />
      </div>
    </div>
  );
};

export default Footer1;
