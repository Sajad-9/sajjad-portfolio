import Introduction from "./Introduction";
import DropDownMenu from "./DropDownMenu";
const Header = ({
  dropDownMenuRef,
  aboutMeRef,
  contactInformationRef,
  gamesRef,
}) => {
  return (
    <div className="flex flex-row relative">
      <DropDownMenu
        ref={dropDownMenuRef}
        aboutMeRef={aboutMeRef}
        contactInformationRef={contactInformationRef}
        gamesRef={gamesRef}
      />
      <div className=" absolute right-0 top-[200px] midsm:top-[100px] upsm:top-0">
        <Introduction />
      </div>
    </div>
  );
};

export default Header;
