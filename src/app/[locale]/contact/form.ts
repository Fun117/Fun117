"use server";

const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfOspEsBWi-Ean3Gr83j6bxoIRFDIwE9uuQAyUQ5cXIT1tebA";

const entries = {
  company: 1037971436,
  name: 64248411,
  email: 1959211618,
  message: 272465746,
};

type FormDataType = {
  company?: string | undefined;
  name: string;
  email: string;
  message: string;
};

export async function contactFormSubmit(data: FormDataType) {
  try {
    const query = new URLSearchParams({
      [`entry.${entries.company}`]: data.company || "",
      [`entry.${entries.name}`]: data.name,
      [`entry.${entries.email}`]: data.email,
      [`entry.${entries.message}`]: data.message,
    });

    const response = await fetch(`${formUrl}/formResponse`, {
      method: "POST",
      body: query.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to submit the form.");
    }

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, error };
  }
}
