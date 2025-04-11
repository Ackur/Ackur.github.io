const checkFieldRules = (field, rules) => {
  if (Array.isArray(rules)) {
    const errors = rules.reduce((acc, rule) => {
      const { message } = rule(field.value);
      if (message) {
        acc.push({ message });
      }
      return acc;
    }, []);

    if (errors.length) {
      field.setCustomValidity(errors.at(0).message);
      field.reportValidity();
    } else {
      field.setCustomValidity("");
    }

    return { valid: !errors.length, items: errors };
  }
  console.log("this field without rules", field);
  return { valid: null, description: "this field without rules" };
};

const checkFormFields = (fileds) => {
  const hasErrors = Object.values(fileds).some((field) => {
    return field.checkRules().valid === false;
  });

  return hasErrors ? false : true;
};

// RULES RULES RULES RULES RULES
const required = (v, message) => {
  let isValid = false;
  if (typeof v === "string") {
    isValid = !!v.trim();
  } else if (Array.isArray(v)) {
    isValid = v?.length;
  } else if (typeof v === "object" && v !== null) {
    isValid = Object.keys(v)?.length;
  } else {
    isValid = !!v;
  }

  return {
    valid: !!isValid,
    message: isValid ? "" : message || "This is a required field",
  };
};

const email = (v, message) => {
  let isValid = /^[^\s@]{1,100}@[^\s@]{1,100}\.[^\s@]{2,100}$/.test(v);

  return {
    valid: !!isValid,
    message: isValid ? "" : message || "Email must be valid.",
  };
};

const minLength = (v, minLength, message) => {
  const isValid = v.trim().length >= minLength;
  return {
    valid: !!isValid,
    message: isValid
      ? ""
      : message || `Must be less than ${minLength} characters`,
  };
};

export { checkFieldRules, checkFormFields, required, email, minLength };
