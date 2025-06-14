"use client";

import UploadFormInput from "@/components/upload/upload-form-input";
import React, { useState } from "react";
import { z } from "zod";
import { useUploadThing } from "../../../utils/uploadthing";
import { toast } from "sonner";
import {
  generatePdfSummary,
  generatePdfText,
  storePdfSummaryAction,
} from "../../../actions/upload-actions";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import LoadingSkeleton from "./loading-skeleton";
import { formatFileNameAsTitle } from "../../../utils/format-utils";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

export default function UploadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("upload successfully!");
    },
    onUploadError: (err) => {
      console.error("error occured while uploading", err);
      toast(
        "Error Occured While Uploading",

        { description: err.message }
      );
    },
    onUploadBegin: (data) => {
      console.log("upload has begun for", data);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const formData = new FormData(e.currentTarget);
      const file = formData.get("file") as File;

      //validating the fields
      const validatedFields = schema.safeParse({ file });

      console.log(validatedFields);

      if (!validatedFields.success) {
        toast.error("❌ Something went wrong", {
          description:
            validatedFields.error.flatten().fieldErrors.file?.[0] ??
            "Invalid file",
        });
        setIsLoading(false);
        return;
      }

      toast("📄 Uploading PDF...", {
        description: "We are uploading your PDF! ✨",
      });

      //schema with zod//
      //upload the file to uploadthing
      const uploadResponse = await startUpload([file]);
      if (!uploadResponse) {
        toast.error("❌ Something went wrong"),
          {
            description: "Please use a different file",
          };
        setIsLoading(false);
        return;
      }

      toast("📄 Processing PDF", {
        description: "Hang tight! Our AI is reading through your document! ✨",
      });
      const uploadFileUrl = uploadResponse[0].serverData.fileUrl;

      //parse the pdf using lang chain

      let storeResult: any;
      toast("📄 Saving PDF...", {
        description: "Saving your PDF summary! ✨",
      });

      const formattedFileName = formatFileNameAsTitle(file.name);

      const result = await generatePdfText({
        fileUrl: uploadFileUrl,
      });

      toast("📄 Generating PDF Summary", {
        description: "Hang tight! Our AI is reading through your document! ✨",
      });

      // call ai service
      const SummaryResult = await generatePdfSummary({
        pdfText: result?.data?.pdfText ?? "",
        fileName: formattedFileName,
      });

      toast("📄 Saving PDF Summary", {
        description: "Hang tight! Our AI is reading through your document! ✨",
      });

      const { data = null, message = null } = SummaryResult || {};

      if (data?.summary) {
        storeResult = await storePdfSummaryAction({
          summary: data.summary,
          fileUrl: uploadFileUrl,
          title: formattedFileName,
          fileName: file.name,
        });

        toast("✨ Summary Generated", {
          description:
            "Your PDF has been successfully summarized and saved! ✨",
        });

        formRef.current?.reset();
        router.push(`/summaries/${storeResult.data.id}`);

        //save data to the database
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error Occured", error);
      formRef.current?.reset();
    } finally {
      setIsLoading(false);
    }

    //summarize the pdf using AI
    //save the summary to the database
    //redirect to the [id] summary page
  };
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200 dark:border-gray-800" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-3 text-muted-foreground text-sm">
            Upload PDF
          </span>
        </div>
      </div>
      <UploadFormInput
        isLoading={isLoading}
        ref={formRef}
        onSubmit={handleSubmit}
      />
      {isLoading && (
        <>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-200 dark:border-gray-800" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-3 text-muted-foreground text-sm">
                Processing
              </span>
            </div>
          </div>
          <LoadingSkeleton />
        </>
      )}
    </div>
  );
}
