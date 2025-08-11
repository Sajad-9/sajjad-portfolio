import Carousel from "./Carousel";
import { slides } from "../assets/data/carouselData.js";
const Sample = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-start bg-slate-800  p-6 rounded-2xl shadow-[0_40px_90px_-30px_rgba(0,0,0,0.15)] shadow-black text-right mx-auto mb-1 w-[80%] mt-5 md:flex-row min-w-[350px] max-w-[700px]">
      <div className="self-center flex flex-col">
        <h3 className="text-white mt-5 md:mt-0 w-[90%] mx-auto md:ml-10 md:mr-5 text-xl">
          عنوان بازی
        </h3>
        <p className="text-white mt-5 md:mt-0 w-[90%] mx-auto md:ml-10 md:mr-5">
          فناوری همچنان شیوه زندگی و ارتباطات ما را دگرگون می‌کند. از گوشی‌های
          هوشمند تا هوش مصنوعی، نوآوری زندگی روزمره را تحت تأثیر قرار می‌دهد.
          هرچند که راحتی و سرعت را فراهم می‌کند، اما مسائل اخلاقی جدیدی نیز به
          همراه دارد. ایجاد تعادل بین پیشرفت و مسئولیت‌پذیری بیش از همیشه اهمیت
          دارد.
        </p>
      </div>

      <div className="self-center flex-col">
        <Carousel data={slides} />
        <div className="mt-3 text-lightGreen">
          <a URL={""} className="hover:cursor-pointer hover:text-darkGreen">
            لینک بازی
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sample;
