import { GetStaticPropsContext } from "next";
import Head from "next/head";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
export default function Home() {
  return (
    <>
      <Head>
        <title>HASAN AHAMED | Software Engineer</title>
      </Head>
      <div className="flex flex-col px-6 pt-1 flex-grow">
        <h5 className="text-xl my-3 font-medium">
          Hello, I'm a full stack Typescript | Golang developer. I'd love to
          develop and deploy scaleable website and web APIs.
          <br />I have {new Date().getFullYear() - 2020} year(s) of experience
          in developing full stack web application.
        </h5>
        <h2 className="text-md color-blackAlpha-400">
          Interested? Then Please, Download my CV. I'd love to work with you.
        </h2>
        <div className="bg-gray-50 dark:bg-dark-500 p-2 rounded-md">
          <h1 className="text-xl font-bold">My Expertise</h1>
          <div className="grid lg:grid-cols-2 gap-6 my-4">
            {services.map((service) => (
              <div className="bg-gray-100 rounded-lg lg:col-span-1 ">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// export const getServerSideProps= async ( context: GetServerSideProps) =>{
//   const res = await fetch('http://localhost:3000/api/projects');
//   const data = await res.json();

//   return {
//     props: {
//       services: data
//     }
//   }
// }

// export const getStaticProps =async (context:GetStaticPropsContext) =>{

//     const res = await fetch('http://localhost:3000/api/projects');
//     const data = await res.json();
//     return{
//       props: {
//         services: data
//       }
//     }
// }
