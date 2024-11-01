'use client';

import PageWithNavbar from '@/components/ui/layouts/PageWithNavbar';

export default function Home() {
  return (
    <PageWithNavbar>
      <div className="page">
        <div className="container md:pt-4 lg:pt-12 xl:pt-20">
          <h1 className="mb-4 text-6xl">Dabl DevCamp</h1>
        </div>
      </div>
    </PageWithNavbar>
  );
}
