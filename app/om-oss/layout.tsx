import { JsonLd, organizationSchema } from '@/components/JsonLd'

export default function OmOssLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={organizationSchema} />
      {children}
    </>
  )
}
