import React from "react";
import Contact from "../../components/features/investors/Contact";

async function fetchContactData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/investors/contact`, {
      cache: "no-store", // Ensure fresh data
    });


    const result = await response.json();
    const contactData = result.data;

    if (result.status === "success") {
      return {
        content: contactData?.content,
        contacts: contactData?.contact,
        error: null
      };
    }
    return {
      content: null,
      contacts: null,
      error: result.message
    };
  } catch (error) {
    return {
      content: null,
      contacts: null,
      error: "Failed to fetch contact data"
    };
  }
}


export default async function contact() {

  const { content, contacts, error } = await fetchContactData()

  return (
    <>
      {/* contact*/}
      <Contact content={content} contacts={contacts} error={error} />
    </>

  );
}
