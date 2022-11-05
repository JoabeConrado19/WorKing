import { Body } from "../components/AboutUsPage/body";
import { AsideComponent } from "../components/AboutUsPage/aside";
import { Main } from "../components/AboutUsPage/main";
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
