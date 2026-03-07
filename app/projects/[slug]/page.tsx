// Server Component — handles routing, metadata, static params
// Passes slug prop to the CaseStudyPage client component in components/

import type { Metadata } from 'next';
import { PROJECTS } from '@/data/projects';
import CaseStudyPage from '@/components/CaseStudyPage';

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  return {
    title: project
      ? `${project.title} — Case Study | Muhammad Waheed`
      : 'Not Found | Muhammad Waheed',
    description: project?.tagline ?? '',
  };
}

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return <CaseStudyPage slug={slug} />;
}
