import { Body } from "../Components/AboutUsPage/body";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import { Main } from "../Components/AboutUsPage/main";
import { useState } from "react";

export const AboutUsPage = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Body>
      <AsideComponent setMenu={setMenu} menu={menu} />
      <Main setMenu={setMenu} menu={menu} />
    </Body>
  );
};
