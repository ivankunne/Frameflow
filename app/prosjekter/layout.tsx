import { JsonLd, organizationSchema } from '@/components/JsonLd'

export default function ProsjekterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={organizationSchema} />
      {children}
    </>
  )
}
