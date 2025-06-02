import React from "react";
import Contact from "../../../components/features/investors/Contact";
import { fetchContactData } from "../../../lib/fetchCalls/fetchInvestors";


export default async function contact() {

  const { content, contacts, error } = await fetchContactData()

  return (
    <>
      {/* contact*/}
      <Contact content={content} contacts={contacts} error={error} />
    </>

  );
}
