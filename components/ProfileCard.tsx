import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

type SocialNetwork = {
  icon: IconDefinition,
  link: string
  id: string
}

type ProfileCardProps = {
  person: {
    name: string
    jobTitle: string
    description: string
    websiteUrl: string
    socials: SocialNetwork[]
    photoFull: string
    photoThumbnail: string
  }
}
const ProfileCard = ({ person }: ProfileCardProps) => {
  return <div
    className="max-w-3xl flex items-center h-auto lg:h-screen flex-wrap mx-auto mt-28 lg:my-0"
  >

    <div
      id="profile"
      className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl dark:bg-gray-700 bg-white mx-6 lg:mx-0"
    >
      <a href={'https://' + person.websiteUrl}>
        <div className="p-5 md:p-8 text-center lg:text-left">
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center md: -mt-20"
            style={{backgroundImage: `url(${person.photoThumbnail})`} }
          ></div>

          <h1 className="text-3xl font-bold pt-8 lg:pt-0">{person.name}</h1>
          <div
            className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"
          ></div>
          <p
            className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"
          >
            {person.jobTitle}
          </p>
          <p

            className="pt-2 font-bold flex items-center justify-center lg:justify-start"
          >
            Website:    {person.websiteUrl}

          </p>
          <p className="pt-4 whitespace-break-spaces text-justify text-sm lg:text-base">
            {person.description}
          </p>

          <div
            className="mt-7 pb-7 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center gap-10 lg:gap-20"
          >

            {person.socials.map((socialNetwork) => {
              return <a key={socialNetwork.id} href={socialNetwork.link}>
                <FontAwesomeIcon className="h-6 w-6" icon={socialNetwork.icon} />
              </a>
            })}


          </div>

        </div>
      </a>
    </div>

    <div className="w-full lg:w-2/5">
      <Image
        src={person.photoFull}
        className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        alt='hello there'
        width={1000}
        height={200}
      />
    </div>


  </div>
}

export { ProfileCard }