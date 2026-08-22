import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
};

export default function TeamsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-4xl">
              Meet Our Team
            </h1>
            <p className="max-w-2xl mt-4 text-muted-foreground md:text-xl">
              Our team is dedicated to making your experience unforgettable. Get to know the people behind Neup Group.
            </p>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="flex flex-col items-start text-left">
                <div className="w-full aspect-square rounded-lg bg-primary/10 flex items-center justify-center">
                  <img
                    src="https://neupgroup.com/assets/members/neupkishor.png"
                    alt="Kishor Neupane"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl mt-4">Kishor Neupane</h3>
                <p className="text-primary font-semibold">Founder</p>
              </div>

              <div className="flex flex-col items-start text-left">
                <div className="w-full aspect-square rounded-lg bg-primary/10 flex items-center justify-center">
                  <img
                    src="https://neupgroup.com/assets/members/khanalcwani.png"
                    alt="Bhawani Khanal"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl mt-4">Bhawani Khanal</h3>
                <p className="text-primary font-semibold">Chief Executive Officer</p>
              </div>

              <div className="flex flex-col items-start text-left">
                <div className="w-full aspect-square rounded-lg bg-primary/10 flex items-center justify-center">
                  <img
                    src="https://neupgroup.com/assets/members/sandeshshrestha.png"
                    alt="Sandesh Shrestha"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl mt-4">Sandesh Shrestha</h3>
                <p className="text-primary font-semibold">Development Head</p>
              </div>

              <div className="flex flex-col items-start text-left">
                <div className="w-full aspect-square rounded-lg bg-primary/10 flex items-center justify-center">
                  <img
                    src="https://neupgroup.com/assets/members/aakashpun.png"
                    alt="Aakash Pun Magar"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl mt-4">Aakash Pun Magar</h3>
                <p className="text-primary font-semibold">Cybersecurity Head</p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
