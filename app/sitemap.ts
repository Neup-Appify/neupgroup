import { MetadataRoute } from 'next';
import { caseStudies } from './case/case-studies';

const URL = 'https://neupgroup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/about/teams',
    '/about/ventures',
    '/about/life',
    '/ads/about',
    '/analytics/about',
    '/blog',
    '/careers',
    '/case',
    '/design/about',
    '/drive/about',
    '/estate/about',
    '/foundation',
    '/heritage/about',
    '/hr',
    '/ledger',
    '/legal',
    '/legal/compliance',
    '/legal/cookies',
    '/legal/privacy',
    '/legal/terms',
    '/legis',
    '/mail/about',
    '/manage',
    '/marketing',
    '/account',
    '/account/about',
    '/news/about',
    '/referrals',
    '/search',
    '/site/about',
    '/socials',
    '/suite/about',
    '/tourio/about',
    '/works/about',
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${URL}/case/${study.slug}`,
    lastModified: new Date(),
  }));


  return [...staticRoutes, ...caseStudyRoutes];
}
