import ProfilePic from "../media/profile-pic.jpg"

function Profile() {
    return (
        <div>
            <img src={ProfilePic} id="profile__img" />
            <h1 id="profile__name">John Smith</h1>
                <h1 id="twitter">lactoseutd</h1>
                <h1 id="slack">nsdfd</h1>
        </div>
    );
}

export default Profile;