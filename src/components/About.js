import User from "./User";
import UserClass from "./UserClass";

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is About component</h2>
      <User name={"Onkar Functional Component"}/>
      <UserClass name={"Onkar classBased Component"}/>
    </div>
  );
};
