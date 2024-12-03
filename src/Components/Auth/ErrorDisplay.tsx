import ErrorText from "./ErrorText";
function ErrorDisplay({ errors }: { errors: string[] }) {
  return (
    <div className="errorDisplay d-flex flex-column gap-2 fs-7 text-danger justify-content-center align-items-center">
      {errors.map((val, ind) => (
        <ErrorText key={ind}>{val}</ErrorText>
      ))}
    </div>
  );
}

export default ErrorDisplay;
