import type { Metadata } from 'next';
import { logica } from '@/logica';
import type { SitesMemberDirectoryItem } from '@/logica/sites';

export const metadata: Metadata = {
  title: 'Our Team',
};

function getProjectId() {
  return process.env.NEUPSITE_PROJECT_ID?.trim() || '';
}

async function getTeamMembers(): Promise<SitesMemberDirectoryItem[]> {
  const projectId = getProjectId();

  if (!projectId) {
    return [];
  }

  try {
    const response = await logica.sites(projectId).members.get();
    const members = response.body?.data;

    return Array.isArray(members) ? members : [];
  } catch {
    return [];
  }
}

export default async function TeamsPage() {
  const members = await getTeamMembers();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
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

        <section className="py-20 md:py-28">
          <div className="container">
            {members.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((member) => (
                  <div key={member.id} className="flex flex-col items-start text-left">
                    <div className="w-full aspect-square overflow-hidden rounded-lg bg-primary/10 flex items-center justify-center">
                      {member.displayImage ? (
                        <img
                          src={member.displayImage}
                          alt={member.displayName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-primary/60">
                          {(member.displayName || 'N').charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <h2 className="mt-4 text-xl font-bold">{member.displayName}</h2>
                    <p className="font-semibold text-primary">{member.position}</p>
                    {member.description ? (
                      <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-border/60 bg-card px-6 py-10 text-center">
                <p className="text-lg font-semibold">Team information is unavailable right now.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  This page now reads from the project member directory and will populate when member records are available.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
