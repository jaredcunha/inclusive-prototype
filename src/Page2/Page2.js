import React from 'react';
import { useSessionStorage } from '../useSessionStorage';

const Page2 = () => {
  const [firstName] = useSessionStorage('firstName', false) || 'false';
  const [lastName] = useSessionStorage('lastName', false) || 'false';
  const [radioSelection] =
    useSessionStorage('radioSelection', false) || 'false';
  return (
    <div className="padding-5">
      <h1>Here’s your info:</h1>
      <ul>
        <li>
          <strong>First name:</strong> {firstName}
        </li>
        <li>
          <strong>Last name:</strong> {lastName}
        </li>
        <li>
          <strong>Radio selection:</strong> {radioSelection}
        </li>
      </ul>
    </div>
  );
};

export default Page2;
