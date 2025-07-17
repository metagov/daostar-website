"use client";

import React, { useState } from "react";
import { Popover, Menu, MenuItem, Button } from "@blueprintjs/core";
import { ChevronDown } from "@blueprintjs/icons";
import Image from "next/image";

const TopNavigation: React.FC = () => {
  const [isStandardsOpen, setIsStandardsOpen] = useState(false);

  const standardsMenu = (
    <Menu>
      <MenuItem 
        text="DAO ID" 
        onClick={() => window.location.href = "/daoid"}
      />
      <MenuItem 
        text="OpenGrants" 
        onClick={() => window.location.href = "/opengrants"}
      />
    </Menu>
  );

  return (
    <nav className="top-navigation">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => window.location.href = "/"}>
          <Image 
            src="/img/logo_dao.png" 
            alt="DAOstar Logo" 
            width={80}
            height={28}
            className="logo-image"
          />
        </div>
        
        <div className="nav-menu">
          <div className="nav-item dropdown-item">
            <Popover
              content={standardsMenu}
              position="bottom"
              interactionKind="hover"
              hoverOpenDelay={0}
              hoverCloseDelay={300}
            >
              <Button 
                className="nav-button"
                text="Standards"
                rightIcon={<ChevronDown />}
                minimal
              />
            </Popover>
          </div>
          
          <div className="nav-item">
            <Button 
              className="nav-button"
              text="Research"
              minimal
              onClick={() => window.location.href = "/research"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;