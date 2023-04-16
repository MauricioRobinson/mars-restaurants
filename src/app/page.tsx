import Image from "next/image";
import mainImage from "../../public/images/main.jpg";

export default function Home() {
  return (
    <section>
      <section className="relative lg:grid lg:grid-cols-5 lg:gap-4">
        <figure className="relative h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden lg:col-span-3">
          <Image
            src={mainImage}
            alt="Food on the restaurant table"
            fill={true}
            priority={true}
            placeholder="blur"
            className="lg:rounded-lg brightness-50 lg:brightness-90"
          />
        </figure>
        <div className="w-full absolute bottom-6 md:bottom-10 lg:relative lg:col-span-2 lg:h-full lg:flex lg:items-center lg:justify-center p-4">
          <h1 className="text-3xl text-center mx-auto lg:text-left lg:text-5xl font-semibold tracking-wide">
            The magic of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600 font-bold">
              food
            </span>
            . The magic of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 font-bold">
              culture
            </span>
            .
          </h1>
        </div>
      </section>

      <main className="lg:max-w-screen-xl mx-auto px-8">
        <h2>Home page</h2>
      </main>
    </section>
  );
}

