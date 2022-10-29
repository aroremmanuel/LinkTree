import ProfilePic from "../media/profile-pic.jpg"

function Profile() {
    return (
        <div>
                <img src={ProfilePic} id="profile__img" alt="profile" />
                <h1 id="profile__name">Aror Emmanuel</h1>
                <h1 id="slack">ajebo</h1>
        </div>
    );
}

export default Profile;