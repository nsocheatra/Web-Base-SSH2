import BaseLayout from "@/components/BaseLayout";
import ThemeToggle from "@/components/ThemeToggle";
import { PiSignOutBold } from "react-icons/pi";

const Account = () => {
  

  return (
    <BaseLayout pageTitle="ACCOUNT DETAILS">
      <div className="account-details">
         
      </div>
      <div className="settings-container">
        <h2 className="section-title">User Preferences</h2>
        <ThemeToggle />
      </div>
    </BaseLayout>
  );
};

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }

export default Account;
