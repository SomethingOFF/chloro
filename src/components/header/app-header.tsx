import React from "react";
import AppLogo from "./app-logo";
import AppRoutes from "./app-routes";
import { Menu, Search } from "lucide-react";
import { Button } from "../ui/Button";
import IconModel from "../model/icon-model";

const AppHeader = () => {
  return (
    <div className="h-20 flex items-center justify-between px-4">
      <AppLogo />
      <div className="h-full hidden items-center justify-center md:flex">
        <AppRoutes />
      </div>
      <div className="flex items-center gap-2">
        <Button variant={"ghost"} size={"icon"}>
          <IconModel Icon={Search} />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <IconModel Icon={Menu} />
        </Button>
      </div>
    </div>
  );
};

export default AppHeader;
