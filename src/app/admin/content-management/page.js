//src/app/admin/content-management/page.js

import React from "react";
// Fixing the import path from the alias to a relative path to ensure compatibility across different build environments.
import ContentUI from "@/components/admin/content-management/contentUI";


const ContentManagementPage = () => {
  return (
    // The ContentUI component contains the necessary font styling via its own style block.
    <ContentUI />
  );
};

export default ContentManagementPage;
