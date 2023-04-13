import React from "react";
import { useGetJobQuery } from "../app/feature/job/jobApi";
import JobCard from "../components/reusable/JobCard";

const Jobs = () => {
  const { data, isLoading, isError } = useGetJobQuery();
  const res = data?.data;
  return (
    <div className="pt-14">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">Find Jobs</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {res &&
          res.map((jobData) => (
            <JobCard jobData={jobData} key={jobData?._id} />
          ))}
      </div>
    </div>
  );
};

export default Jobs;
