import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../settings";

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {/* change link from /dashboard to home "/" */}
      {collapsed ? (
        <div>
          <h3>
            <Link to="/">
              <i className={siteConfig.siteIcon} />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/">{siteConfig.siteName}</Link>
        </h3>
      )}
    </div>
  );
};
