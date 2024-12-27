"use client";
import React, { useEffect } from "react";
import { use } from "react";

const FilePreview = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);

  useEffect(() => {
    console.log(params?.fileId);
  }, [params]);

  return <div>FilePreview</div>;
};

export default FilePreview;
