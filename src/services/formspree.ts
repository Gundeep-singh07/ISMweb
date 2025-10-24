// src/services/formspree.ts

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormspreeResponse {
  ok: boolean;
  next?: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovkgkpg"; // Replace with your actual Formspree form ID

export const submitContactForm = async (
  formData: ContactFormData
): Promise<FormspreeResponse> => {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        ok: false,
        errors: data.errors || [{ field: "general", message: "Submission failed" }],
      };
    }

    return {
      ok: true,
      next: data.next,
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      ok: false,
      errors: [
        {
          field: "general",
          message: "Network error. Please try again later.",
        },
      ],
    };
  }
};