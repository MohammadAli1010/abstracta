"use client";

import UploadFormInput from "@/components/upload/upload-form-input";
import React, { useState } from "react";
import { z } from "zod";
import { useUploadThing } from "../../../utils/uploadthing";
import { toast } from "sonner";
import {
  generatePdfSummary,
  storePdfSummaryAction,
} from "../../../actions/upload-actions";
import { useRef } from "react";
import { useRouter } from "next/navigation";

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
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
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
      const resp = await startUpload([file]);
      if (!resp) {
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

      //parse the pdf using lang chain
      const result = await generatePdfSummary(resp);

      const { data = null, message = null } = result || {};

      if (data) {
        let storeResult: any;
        toast("📄 Saving PDF...", {
          description: "Saving your PDF summary! ✨",
        });

        if (data.summary) {
          storeResult = await storePdfSummaryAction({
            summary: data.summary,
            fileUrl: resp[0].serverData.file.url,
            title: data.title,
            fileName: file.name,
          });

          toast("✨ Summary Generated", {
            description:
              "Your PDF has been successfully summarized and saved! ✨",
          });

          formRef.current?.reset();
          router.push(`/summaries/${storeResult.data.id}`);
        }
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
      <UploadFormInput
        isLoading={isLoading}
        ref={formRef}
        onSubmit={handleSubmit}
      ></UploadFormInput>
    </div>
  );
}
