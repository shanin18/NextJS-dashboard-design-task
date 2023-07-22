import React from "react";
import DashboardTopbar from "@/components/DashboardTopbar";
import Performance from "@/components/Performance";
import FormTable from "@/components/SummeryTable";
import DataInputForm from "@/components/DataInputForm";
import AnalyticsSettingsForm from "@/components/AnalyticsSettingsForm";
import FeedbackForm from "@/components/FeedbackForm";

const DashboardPage = () => {
  return (
    <div>
      <DashboardTopbar></DashboardTopbar>
      <div className="p-8 space-y-8">
        <Performance></Performance>
        <FormTable></FormTable>
        <DataInputForm></DataInputForm>
        <div className="flex flex-wrap flex-col md:flex-row gap-8">
          <AnalyticsSettingsForm></AnalyticsSettingsForm>
          <FeedbackForm></FeedbackForm>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
