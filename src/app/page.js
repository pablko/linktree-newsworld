import Image from 'next/image';
import Footer from './components/Footer';
import data from '../../data.json';

function LinkCard({ url, name, image }) {
  return (
    <a
      href={url}
      target='_blank'
      className='w-full max-w-2xl my-2 shadow-lg hover:shadow-gray-800 transition-shadow duration-300'
    >
      <div className="flex w-full bg-gray-200 items-center p-2 rounded-md">
        <div className="w-10">
          <Image
            className='rounded-sm'
            alt={name}
            src={image}
            width={40}
            height={40}
            unoptimized={true}
          />
        </div>
        <h2 className="font-medium  w-full text-center -ml-1">
          {name} 
        </h2>
      </div>
    </a>
  );
}
function SocialCard({ network, image, url }) {
  return (
    <a
      href={url}
      target='_blank'
    >
      <Image
        className='recol'
        alt={network}
        src={image}
        width={30}
        height={30}
        unoptimized={true}
      />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <main className=" px-8 pt-16">
        <div className='flex flex-col items-center'>
          <Image 
            alt={data.title}
            src={data.avatar}
            width={96}
            height={96}
            unoptimized={true}
            priority
          />
          <h1 className='data-title text-xl text-gray-200 font-bold mt-5 text-center'>{data.title}</h1>
        </div>
      
        <div className='flex flex-col items-center mt-6'>
          {data.links.map(link => (
            <LinkCard key={link.href} {...link} />
          ))}
        </div>
        <div className='flex justify-between w-72 my-16 mx-auto'>
          {data.socials.map(social => (
            <SocialCard key={social.href} {...social} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
