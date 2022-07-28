import { useSessionStorage } from "../useSessionStorage";

const Page2 = () => {
  const [firstName] = useSessionStorage("firstName", false) || "false";
  const [lastName] = useSessionStorage("lastName", false) || "false";
  return (
    <div className="padding-5">
      <h1>Here's your info:</h1>
      <ul>
        <li>
          <strong>First name:</strong> {firstName}
        </li>
        <li>
          <strong>Last name:</strong> {lastName}
        </li>
      </ul>
    </div>
  );
};

export default Page2;
