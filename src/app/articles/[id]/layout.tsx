import { Metadata } from 'next'

interface LayoutProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  return {
    title: `文章详情 - TechShare`,
    description: `阅读完整文章内容 - ${params.id}`
  }
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 