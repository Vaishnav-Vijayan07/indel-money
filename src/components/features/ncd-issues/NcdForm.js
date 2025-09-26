import React, { useState, useEffect } from "react";

const ContactForm = ({ isMobile = false }) => {
  const [formData, setFormData] = useState({
    NAME: "",
    COBJ8CF1: "", // Mobile
    Email: "",
    COBJ8CF6: "-None-", // State
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "wf_anal";
    script.src =
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=f683e6d2da6b341f32bf8030739e6db6a95fa67cd8a762fe0393fd809d996eb967cc566f120010f85ba4583c4595db17gidd794aac75b1ed0e4b2ad891d6a90148a8552bfd595c2bb90999b440b10b250c3gid5ff2624d67848cca16c556194712baa96abbf55e2be7868c15ac6ee719d30027gid237e554ce00dce1871bdafcd2f9538d77ebad69b20a3198fae3827f548fd077b&tw=e4a65bff76412379233b71aa830a263299741039822827dccf904f46b1e063e4";

    // Check if script already exists
    if (!document.getElementById("wf_anal")) {
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const existingScript = document.getElementById("wf_anal");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi (National Capital Territory of Delhi)",
    "Puducherry",
    "Jammu and Kashmir",
    "Ladakh",
  ];

  const validateEmail = (email) => {
    const emailValue = email.replace(/^\s+|\s+$/g, "");
    if (emailValue.length === 0) return false;

    const atpos = emailValue.indexOf("@");
    const dotpos = emailValue.lastIndexOf(".");
    return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailValue.length);
  };

  const validateForm = () => {
    const newErrors = {};
    const mandatoryFields = [
      { field: "NAME", label: "Name" },
      { field: "Email", label: "Email" },
      { field: "COBJ8CF1", label: "Mobile" },
      { field: "COBJ8CF6", label: "State" },
    ];

    // Check mandatory fields
    mandatoryFields.forEach(({ field, label }) => {
      const value = formData[field];
      if (!value || value.replace(/^\s+|\s+$/g, "").length === 0) {
        newErrors[field] = `${label} cannot be empty.`;
      } else if (field === "COBJ8CF6" && value === "-None-") {
        newErrors[field] = `${label} cannot be none.`;
      }
    });

    // Validate email format
    if (formData.Email && !validateEmail(formData.Email)) {
      newErrors.Email = "Please enter a valid email address.";
    }

    // Check privacy acceptance
    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = "Please accept this";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const submitToZoho = async () => {
    // Create a hidden form and submit it
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://crm.zoho.in/crm/WebForm";
    form.style.display = "none";
    form.acceptCharset = "UTF-8";

    // Add all the required fields
    const fields = {
      xnQsjsdp: "68da39d8f44f645c2ed7bb558b6d02894be148f864dc36334de6272c32ab12f2",
      xmIwtLD: "1f2fa6ca4d96dbef6570882e255bd8bef495301fb8b704662d02ae9564e8ce9229c040f7002949ab8a8e8b42ffc972eb",
      actionType: "Q3VzdG9tTW9kdWxlOA==",
      returnURL: "https://indelmoney.com/ncd-issue-thank-you/",
      NAME: formData.NAME,
      COBJ8CF1: formData.COBJ8CF1,
      Email: formData.Email,
      COBJ8CF6: formData.COBJ8CF6,
      COBJ8CF16: "NCD 5",
      COBJ8CF17: "Direct",
      COBJ8CF18: "Direct",
      COBJ8CF19: "https://indelmoney.com/ncd-issue/",
      aG9uZXlwb3Q: "", // Honeypot
      zc_gad: "",
    };

    Object.keys(fields).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitToZoho();

      // Show success message
      alert("Form submitted successfully! We will contact you soon.");

      // Reset form
      setFormData({
        NAME: "",
        COBJ8CF1: "",
        Email: "",
        COBJ8CF6: "-None-",
        privacyAccepted: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      NAME: "",
      COBJ8CF1: "",
      Email: "",
      COBJ8CF6: "-None-",
      privacyAccepted: false,
    });
    setErrors({});
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4  flex justify-center items-start  text-black font-sans bg-[#17479e]">
      <div className="space-y-4 bg-white p-4 sm:p-6 md:p-8">
        {/* Form Title */}
        <div className="font-bold text-lg mb-4 text-black">Request a Callback</div>

        {/* Name Field */}
        <div className="flex flex-col md:flex-row md:items-start gap-2">
          <label htmlFor="NAME" className="w-full md:w-1/3 text-xs font-medium pt-2">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="w-full md:w-2/3">
            <input
              type="text"
              id="NAME"
              name="NAME"
              value={formData.NAME}
              onChange={handleInputChange}
              maxLength="120"
              placeholder="Enter your full name"
              className="w-3/5 border border-gray-300 rounded px-2 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.NAME && <div className="text-red-500 text-xs mt-1 ml-1">{errors.NAME}</div>}
          </div>
        </div>

        {/* Mobile Field */}
        <div className="flex flex-col md:flex-row md:items-start gap-2">
          <label htmlFor="COBJ8CF1" className="w-full md:w-1/3 text-xs font-medium pt-2">
            Mobile <span className="text-red-500">*</span>
          </label>
          <div className="w-full md:w-2/3">
            <input
              type="text"
              id="COBJ8CF1"
              name="COBJ8CF1"
              value={formData.COBJ8CF1}
              onChange={handleInputChange}
              maxLength="30"
              placeholder="Enter your mobile number"
              className="w-3/5 border border-gray-300 rounded px-2 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.COBJ8CF1 && <div className="text-red-500 text-xs mt-1 ml-1">{errors.COBJ8CF1}</div>}
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col md:flex-row md:items-start gap-2">
          <label htmlFor="Email" className="w-full md:w-1/3 text-xs font-medium pt-2">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="w-full md:w-2/3">
            <input
              type="email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              maxLength="100"
              placeholder="Enter your email address"
              className="w-3/5 border border-gray-300 rounded px-2 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.Email && <div className="text-red-500 text-xs mt-1 ml-1">{errors.Email}</div>}
          </div>
        </div>

        {/* State Dropdown */}
        <div className="flex flex-col md:flex-row md:items-start gap-2">
          <label htmlFor="COBJ8CF6" className="w-full md:w-1/3 text-xs font-medium pt-2">
            State <span className="text-red-500">*</span>
          </label>
          <div className="w-full md:w-2/3">
            <select
              id="COBJ8CF6"
              name="COBJ8CF6"
              value={formData.COBJ8CF6}
              onChange={handleInputChange}
              className="w-3/5 border border-gray-300 rounded px-2 py-2 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="-None-">Select your state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.COBJ8CF6 && <div className="text-red-500 text-xs mt-1 ml-1">{errors.COBJ8CF6}</div>}
          </div>
        </div>

        {/* Privacy Agreement */}
        <div className="flex items-start gap-3 py-2">
          <input
            type="checkbox"
            id="privacyTool"
            name="privacyAccepted"
            checked={formData.privacyAccepted}
            onChange={handleInputChange}
            className="mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex-1">
            <label htmlFor="privacyTool" className="text-xs text-black cursor-pointer">
              By submitting this form, you agree to receive marketing and promotional communications from Indel Money Limited.
            </label>
            {errors.privacyAccepted && <div className="text-red-500 text-xs mt-1">{errors.privacyAccepted}</div>}
          </div>
        </div>

        {/* Submit and Reset Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-4 py-2 text-xs text-white bg-gradient-to-b from-blue-400 to-blue-600 border-none rounded cursor-pointer hover:from-blue-500 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 text-xs text-gray-700 bg-white border border-gray-300 rounded cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
