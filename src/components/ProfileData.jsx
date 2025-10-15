import ContentData from "./ContentData";



const ProfileData = ({name, age}) => {
  return (
    <div>
      <p><a href="#collapseExample"  data-bs-toggle="collapse" className="btn btn-primary">
        {/* data-toggle devient data-bs-toggle avec bootstrap 5 */}
        Informations sur {name} ?
        </a>
      </p>

      <ContentData name={name} age={age} />

    </div>
  )
}

export default ProfileData;
