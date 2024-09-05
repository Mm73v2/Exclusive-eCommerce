import ProfileSidebar from "../components/Profile/ProfileSidebar";
import ProfileForm from "../components/Profile/ProfileForm";

const Profile = () => {
  return (
    <div className="wrapper mt-24">
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-24">
        <ProfileSidebar />
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;
