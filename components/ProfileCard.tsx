import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

type SocialNetwork = {
  icon: IconDefinition;
  link: string;
  id: string;
};

type ProfileCardProps = {
  person: {
    name: string;
    jobTitle: string;
    description: string;
    websiteUrl: string;
    socials: SocialNetwork[];
    photoFull: string;
    photoThumbnail: string;
  };
};
const ProfileCard = ({ person }: ProfileCardProps) => {
  const { push } = useRouter();
  return (
    <div className="max-w-3xl flex items-center  flex-wrap mx-auto mt-28 lg:my-0">
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg shadow-2xl dark:bg-gray-700 bg-white mx-6 lg:mx-0"
      >
        <div className="p-5 md:p-8 text-center lg:text-left">
          <Link href={person.websiteUrl}>
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto  h-48 w-48 bg-cover bg-center md: -mt-20"
              style={{ backgroundImage: `url(${person.photoThumbnail})` }}
            ></div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{person.name}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              {person.jobTitle}
            </p>
            <p className="pt-2 font-bold flex items-center justify-center lg:justify-start">
              Website:
              <span className="ml-2 text-red-700 dark:text-amber-400">{person.websiteUrl.replace(/^https?:\/\//, '')}</span>
            </p>
            <p className="pt-4 whitespace-break-spaces text-justify text-sm lg:text-base">
              {person.description}
            </p>
          </Link>
          <div className="mt-7 pb-7 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center gap-10 lg:gap-20">
            {person.socials.map((socialNetwork) => {
              return (
                <Link key={socialNetwork.id} href={socialNetwork.link}>
                  <FontAwesomeIcon
                    className="h-6 w-6"
                    icon={socialNetwork.icon}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <Link href={person.websiteUrl}>
          <Image
            priority={true}
            src={person.photoFull}
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            alt="hello there"
            width={1000}
            height={200}
          />
        </Link>
      </div>
    </div>
  );
};

export { ProfileCard };
