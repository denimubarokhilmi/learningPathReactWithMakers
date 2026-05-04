// example not use HOC :

// function Profile(props) {
//   // example logic
//   console.log("log");
//   const { name } = props;
//   return (
//     <>
//       <h3>hello : {name}</h3>
//     </>
//   );
// }

// function ProfileSecond(props) {
//   // example logic
//   console.log("log");
//   const { name } = props;
//   return (
//     <>
//       <h3>hello : {name}</h3>
//     </>
//   );
// }

// function ProfileLast(props) {
//   // example logic
//   console.log("log");
//   const { name } = props;
//   return (
//     <>
//       <h3>hello : {name}</h3>
//     </>
//   );
// }

// export default function Dashboard() {
//   return (
//     <div
//       style={{
//         marginTop: "70px",
//       }}
//     >
//       <p>not use HOC :</p>
//       <Profile name="alice"></Profile>
//       <ProfileSecond name="bob"></ProfileSecond>
//       <ProfileLast name="alicia"></ProfileLast>
//     </div>
//   );
// }

// example use HOC
import WithLogger from "./Hocs";

function Profile(props) {
  const { name } = props;
  return (
    <>
      <h3>hello : {name}</h3>
    </>
  );
}

function ProfileSecond(props) {
  const { name } = props;
  return (
    <>
      <h3>hello : {name}</h3>
    </>
  );
}

function ProfileLast(props) {
  const { name } = props;
  return (
    <>
      <h3>hello : {name}</h3>
    </>
  );
}

export default function Dashboard() {
  const ProfileWrapper = WithLogger(Profile);
  const ProfileWrapperSecond = WithLogger(ProfileSecond);
  const ProfileWrapperLast = WithLogger(ProfileLast);
  return (
    <div
      style={{
        marginTop: "70px",
      }}
    >
      <p>use HOC : </p>
      <ProfileWrapper name="alice"></ProfileWrapper>
      <ProfileWrapperSecond name="bob"></ProfileWrapperSecond>
      <ProfileWrapperLast name="alicia"></ProfileWrapperLast>
    </div>
  );
}
