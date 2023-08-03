'use client';

import SectionTitleTop from "@/components/Admin/Common/SectionTitleTop";

function Dashboard () {

  return (
    <>
      <div className="w-full p-4 overflow-y-auto">
        <SectionTitleTop title="Dashboard" />

        <div className="alert alert-primary" role="alert">
          Welcome in content management system
        </div>
      </div>
    </>
  )
}

export default Dashboard;
